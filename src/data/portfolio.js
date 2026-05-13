export const personalInfo = {
  name: "Abdul Raheem",
  title: "Full-Stack & Backend Developer",
  email: "abdulraheem.asangi@gmail.com",
  phone: "+91-7676188220",
  github: "https://github.com/abdulraheemasangi",
  linkedin: "https://www.linkedin.com/in/abdulraheemasangi/",
  summary: "Passionate about building scalable backend systems, secure APIs, and production-grade web applications using Django, Node.js, React, and modern DevOps workflows.",
  about: "Full-Stack and Backend Developer with hands-on experience building and deploying production-grade web applications using Django, Node.js, and React. Skilled in RESTful APIs, PostgreSQL, MongoDB, JWT authentication, Docker deployments, VPS management, and scalable backend architecture. Passionate about backend engineering, DevOps practices, and building secure applications.",
  typingRoles: ["Backend Developer", "Full-Stack Engineer", "MERN Stack Enthusiast", "DevOps Learner"],
  stats: [
    { label: "Months Experience", value: "9+" },
    { label: "Projects Deployed", value: "3+" },
    { label: "Technologies", value: "15+" },
    { label: "Commits", value: "200+" },
  ],
};

export const experience = [
  {
    company: "VIIIbits Innovations LLP",
    role: "Software Engineering Consultant — Backend Developer",
    period: "Aug 2024 – Present",
    location: "Remote",
    points: [
      "Took the Django + PostgreSQL backend for rollerblinds.co.in from development to production, wiring up the full product catalog, cart, and order management flow.",
      "Fixed a production bug breaking image and static file delivery — resolved without any customer-facing downtime.",
      "Set up the VPS myself — handled domain config, SSH access, and Linux server operations to get the app live in production.",
      "Built the backend for an internal employee onboarding tool using Node.js, Express.js, and MongoDB with company-domain email validation.",
      "Implemented JWT-based authentication and role-based access control (RBAC) for secure admin/user flows.",
      "Managed MongoDB via CapRover, maintaining clean dev/production environment separation.",
      "Worked in Agile sprints on Jira, maintained clean Git branching strategy, and reviewed code through PRs.",
    ],
    tech: ["Django", "PostgreSQL", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "CapRover", "Linux"],
  },
];

export const projects = [
  {
    name: "VIIIbits Secure Vault",
    subtitle: "Secure File Distribution System",
    description: "A secure file-sharing platform where admins control who can access what. Download links are protected and only resolve for verified, authorized users.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    highlights: [
      "Role-based access control for granular file permissions",
      "JWT session auth + bcrypt password hashing (no plaintext credentials)",
      "Server-side file validation supporting uploads up to 500MB",
      "Protected download system with signed, expiring links",
    ],
    github: "https://github.com/abdulraheemasangi",
    demo: null,
    color: "blue",
  },
  {
    name: "rollerblinds.co.in",
    subtitle: "E-Commerce Backend",
    description: "Production Django + PostgreSQL backend powering a full e-commerce experience with catalog, cart, and order management.",
    tech: ["Django", "PostgreSQL", "Python", "VPS", "Linux"],
    highlights: [
      "Full product catalog with category management",
      "Shopping cart and order flow",
      "Production VPS deployment with static/media file handling",
      "Zero-downtime bug fixes in production",
    ],
    github: "https://github.com/abdulraheemasangi",
    demo: null,
    color: "purple",
  },
  {
    name: "Employee Onboarding API",
    subtitle: "Internal HR Tool Backend",
    description: "Backend API for internal employee onboarding with domain-restricted registration and role management.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "CapRover"],
    highlights: [
      "Company-domain email validation (@viiibits.com)",
      "JWT authentication with refresh tokens",
      "RBAC: admin vs regular user permissions",
      "Environment-based configuration for dev/prod separation",
    ],
    github: "https://github.com/abdulraheemasangi",
    demo: null,
    color: "cyan",
  },
];

export const skills = {
  Backend: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js", "REST APIs"],
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js"],
  Databases: ["PostgreSQL", "MongoDB", "SQLite"],
  "DevOps & Deploy": ["Docker", "Linux", "VPS Hosting", "CapRover"],
  Tools: ["Git", "GitHub", "Jira", "Agile", "JWT Auth"],
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
    icon: "📐",
  },
];

export const certifications = [
  {
    title: "Python Full-Stack Development",
    issuer: "PySpiders Training Institute",
    duration: "10-month intensive training",
    topics: ["Python", "Django", "REST APIs", "JavaScript", "PostgreSQL", "Full-Stack Projects"],
    link: "https://drive.google.com/file/d/1s3HgDtLrcxnKfqdCYsKXXpAJNTC1n1D9/view",
  },
];
