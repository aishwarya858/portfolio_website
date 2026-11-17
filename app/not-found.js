import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-header not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">The page you're looking for doesn't exist or has moved.</p>
        <Button href="/" icon={ArrowRight}>Back to home</Button>
      </div>
    </section>
  );
}
