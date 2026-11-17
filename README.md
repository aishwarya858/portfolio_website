# Personal Portfolio Website

A responsive, multi-page portfolio built with **Next.js (App Router)**, **React**, plain **CSS**, and **Lucide React** icons. It has pages for a student's profile, projects, skills, achievements, and contact details.

## Features

- **6 pages**: Home, About, Projects, Skills, Achievements, Contact (plus a custom 404)
- **Responsive** layouts for mobile, tablet, and desktop, with a collapsible mobile menu
- **Light / dark theme** toggle. It follows the system setting on the first visit, remembers the visitor's choice, and avoids a flash of the wrong theme
- **Reusable components**: `Navbar`, `Footer`, `Button`, `ProjectCard`, `PageHeader`, `SectionHeading`, `SocialLinks`, `Reveal`
- **Interactive UI**: scroll-reveal animations, animated skill bars, project category filters, hover effects
- **Contact form** with live client-side validation and server-side validation (`/api/contact`)
- **Accessibility**: skip link, keyboard focus styles, ARIA labels, and support for reduced-motion settings

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing your content

All content lives in **`data/portfolio.js`**: name, bio, education, projects, skills, achievements, and social links. Edit that file and the whole site updates. You don't need to change any components.

- **Resume:** put your PDF at `public/resume.pdf`. The "Download resume" button links to it.
- **Projects filter:** the filter buttons are built from each project's `category`.
- **Featured projects:** projects with `featured: true` appear on the Home page.

## Making the contact form send email

`app/api/contact/route.js` validates each message and logs it to the server console. To deliver messages to your inbox, add an email service such as [Resend](https://resend.com), Nodemailer, or Formspree at the line marked `Send the email here`.

## Project structure

```
app/
  layout.js            Root layout: fonts, navbar, footer, theme script
  globals.css          Theme tokens, layout, components, responsive rules
  page.js              Home
  about/ projects/ skills/ achievements/ contact/
  api/contact/route.js Contact form endpoint
  not-found.js         404 page
components/            Reusable UI components
data/portfolio.js      All site content
public/                Static files (resume, images)
```

## Deploying to Vercel

1. Push the project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the default settings (Vercel detects Next.js) and click **Deploy**.

Each later push to the main branch redeploys the site automatically.
