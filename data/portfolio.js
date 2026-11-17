// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here.
//  Edit this file to update the website — no component changes needed.
//  Everything below is SAMPLE content: replace it with your own details.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aishwarya A S",
  shortName: "Aishwarya A S",
  role: "Computer Science Student & Full-Stack Developer",
  tagline:
    "Exploring full stack web development by building one project at a time.",
  location: "Mangalore, Karnataka",
  email: "aishwaryaas009@gmail.com",
  phone: "+91 96065 09373",
  resumeUrl: "/resume.pdf", // put your resume at public/resume.pdf
  available: true, // shows the "Open to internships" badge
  socials: {
    github: "https://github.com/aishwarya858",
    linkedin: "https://www.linkedin.com/in/aishwarya-a-s09/",
    email: "mailto:aishwaryaas009@gmail.com",
  },
};

export const about = {
  summary: [
    "I'm a second-year Computer Science and Engineering student at Sahyadri College of Engineering and Management, currently exploring web development and cybersecurity.",  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sahyadri College of Engineering and Management",
      period: "2025 – 2029",
      detail: "CGPA: 9.45 / 10",
    },
    {
      degree: "Higher Secondary (Class XII) — Computer Science",
      institution: "New Horizon Public School",
      period: "2011 – 2023",
      detail: "Percentage: 97.2%",
    },
  ],
  interests: [
    "Web development",
    "UI / UX design",
    "Open source",
    "Machine learning",
    "Hackathons",
    "Technical writing",
  ],
  goals: [
    "Secure a software engineering internship where I can contribute to real products.",
    "Deepen my knowledge of system design and scalable back-end architecture.",
    "Contribute regularly to open-source projects and mentor juniors in web development.",
  ],
};

// `category` is used for the filter buttons on the Projects page.
// `featured: true` shows the project on the Home page.
// `event` (optional) shows which hackathon / challenge it was built for.
// Pulled from github.com/aishwarya858 (forks excluded).
export const projects = [
  {
    title: "OSCO — Patient Medical History Platform",
    description:
      "Turns scattered prescriptions, lab reports and discharge summaries into one patient-controlled medical timeline. AI extracts medicines, diagnoses and test results — every finding quotes its source sentence and page. Doctors get time-limited access only after patient approval, plus a health assistant that answers from the patient's own records.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis / BullMQ", "Tesseract OCR", "Gemini API"],
    category: "Full-Stack",
    event: "OSCO DevHack 2026",
    github: "https://github.com/aishwarya858/OSCO_DEVHACK2026",
    demo: "",
    featured: true,
  },
  {
    title: "Apartment / PG Complaint Manager",
    description:
      "A full-stack single-page app for residents and property managers to track maintenance issues. Includes a live dashboard of pending and resolved complaints, full CRUD, priority and status tracking, multi-criteria filters and toast notifications.",
    tech: ["JavaScript", "Node.js", "Express", "Supabase", "PostgreSQL", "HTML", "CSS"],
    category: "Full-Stack",
    github: "https://github.com/aishwarya858/Apartment-PG-Complaint-Manager",
    demo: "",
    featured: true,
  },
  {
    title: "ConceptMap AI",
    description:
      "A solo project that uses Google Gemini 2.5 Flash to turn long, complex paragraphs into simple study guides of five key points, written in an expert-educator tone for first-year engineering students.",
    tech: ["Python", "Streamlit", "Gemini API"],
    category: "AI",
    event: "TechSprint",
    github: "https://github.com/aishwarya858/ConceptMapAI-TechSprint",
    demo: "https://qqmy5s2wwooxfdtofswnau.streamlit.app/",
    featured: true,
  },
  {
    title: "ProcrasTech — The Procrastination Calculator",
    description:
      "A playful app that calculates exactly how many episodes of a show you can binge before your deadline. Pulls real episode runtimes from the TVmaze API, auto-fills task durations from keywords, and reacts with confetti, sound effects and a red strobe when you're out of time.",
    tech: ["JavaScript", "HTML", "CSS", "TVmaze API", "LocalStorage"],
    category: "Front-end",
    event: "OpenSprint",
    github: "https://github.com/aishwarya858/OpenSprint-Creative-Kickstart",
    demo: "",
    featured: false,
  },
  {
    title: "Smart Study Buddy",
    description:
      "An AI-powered academic assistant for engineering students. A terminal chat loop sends questions to Google Gemini 2.5 through the Google Gen AI SDK and returns simplified explanations of difficult topics.",
    tech: ["Java", "Maven", "Gemini API"],
    category: "AI",
    github: "https://github.com/aishwarya858/SmartStudyBuddy",
    demo: "",
    featured: false,
  },
  {
    title: "Guess the Bollywood Song",
    description:
      "A browser game where players guess popular Bollywood songs from emoji clues. Correct answers play the song's chorus, and the final score is shown at the end of the round.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "Front-end",
    event: "OpenSprint",
    github: "https://github.com/aishwarya858/open-sprint-guess-the-song",
    demo: "",
    featured: false,
  },
  {
    title: "Personal Knowledge Vault",
    description:
      "A terminal-based notes manager to create, view, search and delete personal notes, with file-based persistence so notes survive between sessions.",
    tech: ["C", "File I/O"],
    category: "Systems / CLI",
    event: "SOSC Challenge",
    github: "https://github.com/aishwarya858/SOSC_Challenge2_Aishwarya",
    demo: "",
    featured: false,
  },
  {
    title: "Personal Profile Card",
    description:
      "A responsive profile card showcasing skills and professional links, with a gradient background, Flexbox layout, hover effects on badges and an \"available for work\" status indicator.",
    tech: ["HTML", "CSS"],
    category: "Front-end",
    github: "https://github.com/aishwarya858/Profile_Card",
    demo: "",
    featured: false,
  },
];

// Taken from the languages and tech stacks in github.com/aishwarya858.
// `level` (0–100) is optional — add it to an item to show a progress bar.
export const skills = [
  {
    category: "Languages",
    icon: "Code",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    category: "Front-end",
    icon: "Layout",
    items: [
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "Responsive design" },
    ],
  },
  {
    category: "Back-end & Data",
    icon: "Server",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Redis / BullMQ" },
    ],
  },
  {
    category: "AI & Integrations",
    icon: "Brain",
    items: [
      { name: "Google Gemini API" },
      { name: "Google Gen AI SDK (Java)" },
      { name: "Streamlit" },
      { name: "Tesseract OCR" },
      { name: "Third-party APIs (TVmaze)" },
    ],
  },
];

export const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "IntelliJ IDEA",
  "Postman",
  "Docker",
  "Maven",
  "npm",
  "Streamlit Community Cloud",
];

export const softSkills = [
  "Team collaboration",
  "Public speaking",
  "Problem solving",
  "Time management",
  "Leadership",
];

// `type` is one of: "Hackathon", "Challenge", "Award", "Certification".
// Dates are when the project repo was created. Add results (e.g. "Winner") to the title if you placed.
export const achievements = [
  {
    title: "OSCO DevHack 2026",
    issuer: "OSCO",
    date: "Nov 2026",
    type: "Hackathon",
    description:
      "Built OSCO, a patient-controlled medical history platform with evidence-linked AI extraction and consent-based doctor access (Problem Statement 7).",
    link: "https://github.com/aishwarya858/OSCO_DEVHACK2026",
  },
  {
    title: "OpenSprint",
    issuer: "OpenSprint",
    date: "Mar 2026",
    type: "Hackathon",
    description:
      "Built two projects: ProcrasTech, a procrastination calculator using the TVmaze API, and Guess the Bollywood Song, an emoji-clue guessing game.",
    link: "https://github.com/aishwarya858/OpenSprint-Creative-Kickstart",
  },
  {
    title: "TechSprint — Solo Project",
    issuer: "TechSprint",
    date: "Dec 2025",
    type: "Hackathon",
    description:
      "Built and deployed ConceptMap AI, a Gemini-powered tool that turns complex topics into simple study guides.",
    link: "https://github.com/aishwarya858/ConceptMapAI-TechSprint",
  },
  {
    title: "SOSC Recruitment Challenges",
    issuer: "SOSC",
    date: "Dec 2025",
    type: "Challenge",
    description:
      "Completed the first-year recruitment challenges, including a terminal-based personal knowledge vault written in C.",
    link: "https://github.com/aishwarya858/SOSC_Challenge2_Aishwarya",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

// Home-page stats are calculated from the data above, so they stay accurate.
export const stats = [
  { label: "Projects built", value: String(projects.length) },
  { label: "Hackathons", value: String(achievements.filter((a) => a.type === "Hackathon").length) },
  { label: "Coding challenges", value: String(achievements.filter((a) => a.type === "Challenge").length) },
  { label: "Technologies used", value: new Set(projects.flatMap((p) => p.tech)).size + "+" },
];
