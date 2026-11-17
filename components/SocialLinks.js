import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/portfolio";

export default function SocialLinks({ size = 20 }) {
  const links = [
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.email, label: "Email", Icon: Mail },
  ];

  return (
    <ul className="social-links">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            className="icon-btn"
            aria-label={label}
            title={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
