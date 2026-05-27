export const personalInfo = {
  name: "Abdul Raheem",
  title: "Full-Stack & Backend Developer",
  email: "abdulraheem.asangi@gmail.com",
  phone: "+91-7676188220",
  github: "https://github.com/abdulraheemasangi",
  linkedin: "https://www.linkedin.com/in/abdulraheemasangi/",
  summary:
    "Passionate about building scalable backend systems, secure APIs, and production-grade web applications using Django, Node.js, React, and modern DevOps workflows.",
  about:
    "Full-Stack Developer and Backend Developer with hands-on experience building and deploying production-grade web applications using Django, Node.js, and React. Skilled in designing and developing RESTful APIs, managing relational and NoSQL databases, and implementing secure authentication systems. Experienced in Docker-based deployments, VPS management, and scalable backend architecture, with a strong interest in the MERN stack and DevOps practices.",
  typingRoles: [
    "Software Development Engineer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "DevOps Learner",
  ],
  stats: [
    { label: "Months Experience", value: "10+" },
    { label: "Projects Deployed", value: "20+" },
    { label: "Technologies", value: "15+" },
    { label: "Commits", value: "3000+" },
  ],
};

export const experience = [
  {
    company: "VIIIbits Innovations LLP",
    role: "Software Engineering Consultant — Backend Developer",
    period: "Aug 2025 – Present",
    location: "Remote",
    points: [
      "Sat in on requirement calls with clients, took notes, and translated the business logic into backend schemas, API contracts, and folder structures the team could actually work with.",
      "Set up CapRover on the VPS from scratch – wired up the databases, connected services, sorted out environment variables, and got apps running in both dev and production without them bleeding into each other.",
      "Built and maintained RESTful APIs and auth flows across Node.js/Express and Django – JWT authentication, role-based access control, protected API routes and secure backend workflows.",
      "Reviewed code and helped debug for backend interns – mostly catching things like missing error handling, inconsistent naming, or logic that worked locally but caused inconsistencies in production environments.",
      "Worked with frontend devs to get APIs integrated cleanly – ironed out response shape mismatches, fixed CORS issues, and chased down a few performance bottlenecks together.",
      "Worked with Postman and API testing workflows to validate endpoints, debug backend issues, and ensure reliable API integration.",
      "Followed Agile sprints on Jira, kept branches clean in Git, and reviewed PRs – flagging anything that looked off before it hit the main branch.",
    ],
    tech: [
      "Django",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Docker",
      "CapRover",
      "Linux",
      "Postman",
      "Git",
    ],
  },
];

export const projects = [
  {
    name: "VIIIbits Secure Vault",
    subtitle: "Secure File Distribution System",
    description:
      "A secure file-sharing platform where admins control who can access what. Download links are protected and only resolve for verified, authorized users.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    highlights: [
      "Built a full-stack internal file-sharing tool where admins control access – download links were accessible only to authenticated and authorized users.",
      "Integrated frontend React components with backend APIs using asynchronous data fetching and protected route handling.",
      "Handled auth with JWT and hashed all passwords with bcrypt – nothing sensitive sitting in plain text in the DB.",
      "Added server-side validation for uploads up to 500MB – caught oversized and malformed files early so they never made it past the API layer.",
      "Kept the project structure modular with separate configs for dev and production so switching environments didn't mean hunting down hardcoded values.",
    ],
    github: "https://github.com/abdulraheemasangi",
    demo: null,
    color: "blue",
  },
  {
    name: "rollerblinds.co.in",
    subtitle: "E-Commerce Backend",
    description:
      "Production Django + PostgreSQL backend powering a full e-commerce experience with catalog, cart, and order management.",
    tech: ["Django", "PostgreSQL", "Django MVT", "VPS", "CapRover", "Linux"],
    highlights: [
      "Developed and maintained the Django backend for rollerblinds.co.in using PostgreSQL and Django's MVT architecture.",
      "Implemented SMTP configuration and backend workflows for Contact Us and Get Quote forms to handle customer inquiries and notifications.",
      "Tracked down and fixed a production issue where uploaded media files weren't being served – identified and resolved the issues by configuring persistent directories in CapRover for media file. Got it resolved without customer-facing downtime.",
      "Assisted with technical SEO improvements and Google Search Console indexing setup to improve website visibility and search indexing.",
      "Managed the full deployment on VPS via CapRover – environment setup, static/media file handling, Django admin customization, and production troubleshooting.",
    ],
    github: "https://github.com/abdulraheemasangi",
    demo: null,
    color: "purple",
  },
  {
    name: "School Fee Management",
    subtitle: "Desktop Application",
    description:
      "A fully offline desktop app for a UK public school & college that handles student records, fee tracking, payment history, and report generation, packaged into a local executable.",
    tech: ["MERN Stack", "Electron.js", "SQLite", "Local Deployment"],
    highlights: [
      "Built a fully offline desktop app for a UK public school & college using the MERN stack and Electron.js – handles student records, fee tracking, payment history, and report generation, all without needing internet or a server.",
      "Used SQLite for local data storage and packaged the whole thing into an executable installer – implemented Electron-based desktop packaging and executable generation for local deployment.",
      "Built offline-first backend workflows for secure local data management without dependency on cloud infrastructure.",
      "Wired up the Express backend APIs to the React frontend dashboards and added authentication, local backup, and report export for the admin side.",
    ],
    github: "https://github.com/abdulraheemasangi",
    demo: null,
    color: "cyan",
  },
];

export const skills = {
  Backend: [
    "Python",
    "Django",
    "Django REST Framework",
    "Node.js",
    "Express.js",
    "REST API Development",
    "CRUD Operations",
    "Authentication & Authorization",
    "Middleware",
    "Error Handling",
  ],
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MongoDB", "SQLite"],
  "DevOps & Deploy": ["CI/CD", "Docker", "Linux", "VPS Hosting (CapRover)"],
  Tools: [
    "Git",
    "GitHub",
    "Jira",
    "Agile",
    "JWT Authentication",
    "API Integration",
    "Postman",
    "Hoppscotch",
    "Debugging",
    "Production Support",
    "Environment Configuration",
  ],
};

export const education = [
  {
    degree: "Bachelor of Engineering — Mechanical Engineering",
    institution: "Visvesvaraya Technological University",
    school: "SECAB Institute of Engineering & Technology",
    location: "Vijayapura, Karnataka",
    period: "2021 – 2025",
    icon: "🎓",
  },
  {
    degree: "Diploma — Mechatronics Engineering",
    institution: "Department of Technical Education (DTE)",
    school: "Malik Sandal Polytechnic",
    location: "Vijayapura, Karnataka",
    period: "2018 – 2021",
    icon: "🎓",
  },
];

export const certifications = [
  {
    title: "Python Full-Stack Development",
    issuer: "PySpiders Training Institute",
    duration: "10-month intensive training",
    topics: [
      "Python",
      "Django",
      "REST APIs",
      "JavaScript",
      "PostgreSQL",
      "Full-Stack Projects",
    ],
    link: "https://drive.google.com/file/d/1s3HgDtLrcxnKfqdCYsKXXpAJNTC1n1D9/view",
  },
];
