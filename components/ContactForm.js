"use client";

import { useState } from "react";
import { CircleAlert, CircleCheck, Loader, Send } from "lucide-react";

const initial = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";

  if (!values.subject.trim()) errors.subject = "Please add a subject.";

  if (!values.message.trim()) errors.message = "Please write a message.";
  else if (values.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Re-validate live once the user has visited a field.
    if (touched[name]) setErrors(validate(next));
  }

  function handleBlur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field.
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setServerMessage(data.message);
      setValues(initial);
      setTouched({});
    } catch (err) {
      setStatus("error");
      setServerMessage(err.message);
    }
  }

  const field = (name, label, type = "text", extra = {}) => {
    const showError = touched[name] && errors[name];
    const Tag = type === "textarea" ? "textarea" : "input";
    return (
      <div className={`field ${showError ? "field-error" : ""}`}>
        <label htmlFor={`contact-${name}`}>{label}</label>
        <Tag
          id={`contact-${name}`}
          name={name}
          type={type === "textarea" ? undefined : type}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={showError ? "true" : "false"}
          aria-describedby={showError ? `contact-${name}-error` : undefined}
          {...extra}
        />
        {showError && (
          <p id={`contact-${name}-error`} className="error-text" role="alert">
            <CircleAlert size={14} aria-hidden="true" /> {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        {field("name", "Name", "text", { autoComplete: "name", placeholder: "Your name" })}
        {field("email", "Email", "email", { autoComplete: "email", placeholder: "you@example.com" })}
      </div>
      {field("subject", "Subject", "text", { placeholder: "Internship opportunity, collaboration…" })}
      {field("message", "Message", "textarea", { rows: 6, placeholder: "Write your message here…" })}

      <button type="submit" className="btn btn-primary btn-md" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader size={18} className="spin" aria-hidden="true" /> <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send message</span> <Send size={18} aria-hidden="true" />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="form-status form-success" role="status">
          <CircleCheck size={18} aria-hidden="true" /> {serverMessage}
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-failure" role="alert">
          <CircleAlert size={18} aria-hidden="true" /> {serverMessage}
        </p>
      )}
    </form>
  );
}
