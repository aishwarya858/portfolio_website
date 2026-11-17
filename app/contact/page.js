import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/portfolio";

export const metadata = { title: "Contact", description: `Get in touch with ${profile.name}.` };

export default function ContactPage() {
  const info = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Whether it's an internship, a project collaboration or a hackathon team, my inbox is open."
      />
      <section className="section-tight">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <ul className="info-list">
              {info.map(({ Icon, label, value, href }) => (
                <li key={label} className="card info-item">
                  <span className="project-icon" aria-hidden="true"><Icon size={20} /></span>
                  <div>
                    <p className="muted info-label">{label}</p>
                    {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <p className="muted">Find me online</p>
            <SocialLinks />
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
