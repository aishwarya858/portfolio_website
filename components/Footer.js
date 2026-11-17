import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{profile.name}</p>
          <p className="muted">{profile.role}</p>
          <SocialLinks size={18} />
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p className="muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
