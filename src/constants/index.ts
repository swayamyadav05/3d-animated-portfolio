const words = [
  { text: "Problem", imgPath: "/images/extension-icon.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "System", imgPath: "/images/encryption.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Problem", imgPath: "/images/extension-icon.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "System", imgPath: "/images/encryption.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
];

const heroWords = [
  { text: "Secure", imgPath: "/images/secure.svg" },
  { text: "Scalable", imgPath: "/images/growth.svg" },
  { text: "Intelligent", imgPath: "/images/intelligent.svg" },
  { text: "Reliable", imgPath: "/images/reliable.svg" },
  { text: "Secure", imgPath: "/images/secure.svg" },
  { text: "Scalable", imgPath: "/images/growth.svg" },
  { text: "Intelligent", imgPath: "/images/intelligent.svg" },
  { text: "Reliable", imgPath: "/images/reliable.svg" },
];

// const navLinks = [
//   {
//     name: "Projects",
//     link: "#projects",
//   },
//   {
//     name: "Experience",
//     link: "#experience",
//   },
//   {
//     name: "Skills",
//     link: "#skills",
//   },
//   {
//     name: "Testimonials",
//     link: "#testimonials",
//   },
// ];

const navLinks = [
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

// const words = [
//   { text: "Complex Problems", imgPath: "/images/problems.svg" },
//   { text: "Creative Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Secure Systems", imgPath: "/images/security.svg" },
//   { text: "AI Solutions", imgPath: "/images/ai.svg" },
//   { text: "Full-Stack Apps", imgPath: "/images/fullstack.svg" },
//   { text: "Scalable APIs", imgPath: "/images/api.svg" },
//   { text: "Clean Code", imgPath: "/images/code.svg" },
//   { text: "User Experience", imgPath: "/images/ux.svg" },
// ];

const counterItems = [
  { value: 15, suffix: "+", label: "Production Projects" },
  { value: 100, suffix: "%", label: "Remote Work Success" },
  { value: 1, suffix: "", label: "Open Source Contribution" },
  { value: 101, suffix: "%", label: "Consistent Upskilling" },
];

const logoIconsList = [
  { imgPath: "/images/logos/nextjs.png" },
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/python.png" },
  { imgPath: "/images/logos/nodejs.png" },
  { imgPath: "/images/logos/mongodb.png" },
  { imgPath: "/images/logos/lambda.png" },
  { imgPath: "/images/logos/neo4j.png" },
];

const abilities = [
  {
    imgPath: "/images/security.svg",
    title: "Security-First Mindset",
    desc: "Building applications with cybersecurity principles from the ground up, ensuring robust and secure systems.",
  },
  {
    imgPath: "/images/remote.svg",
    title: "Remote Work Excellence",
    desc: "Proven track record of delivering high-quality work in fully remote, asynchronous environments.",
  },
  {
    imgPath: "/images/learning.svg",
    title: "Rapid Learning Ability",
    desc: "Transformed from self-taught foundations to professional developer through disciplined, focused learning.",
  },
];

const techStackImgs = [
  {
    name: "Full-Stack Developer",
    imgPath: "/images/logos/nextjs.png",
  },
  { name: "Python Developer", imgPath: "/images/logos/python.png" },
  { name: "Backend Developer", imgPath: "/images/logos/nodejs.png" },
  { name: "Database", imgPath: "/images/logos/mongodb.png" },
  { name: "Cybersecurity", imgPath: "/images/logos/security.png" },
  { name: "Cloud & DevOps", imgPath: "/images/logos/aws.png" },
];

const projects = [
  {
    id: 1,
    title: "TriggerHive",
    category: "Full-Stack",
    featured: true,
    description:
      "Visual workflow automation platform enabling users to connect APIs, AI models, and services through a drag-and-drop interface",
    longDescription:
      "Built a production-ready SaaS workflow automation tool similar to Zapier/n8n. Features a visual canvas editor for creating workflows, event-driven execution engine with topological sorting, multi-provider AI integration, and secure webhook authentication with HMAC-SHA256 signatures.",
    imgPath: "/images/triggerHiveDemo.gif",
    liveLink: "https://triggerhive.vercel.app/",
    githubLink: "https://github.com/swayamyadav05/TriggerHive",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "tRPC",
      "React Flow",
      "Inngest",
      "Vercel AI SDK",
      "Tailwind CSS",
      "Radix UI",
      "Zod",
    ],
    highlights: [
      "Visual drag-and-drop workflow editor with React Flow and real-time node state management",
      "Event-driven execution engine using Inngest with topological sorting for DAG dependencies",
      "Multi-provider AI integration: OpenAI GPT-4, Anthropic Claude, Google Gemini with encrypted credentials",
      "HMAC-SHA256 webhook authentication with timing-safe signature verification",
      "End-to-end type safety with tRPC eliminating runtime API errors",
      "Dynamic variable interpolation between nodes using Handlebars templates",
    ],
    impact:
      "Enables non-technical users to automate complex workflows connecting webhooks, AI models, and messaging services—reducing setup time from hours of custom development to minutes of visual configuration",
  },
  {
    id: 2,
    title: "SecretDrop",
    category: "Full-Stack",
    featured: true,
    description:
      "Anonymous feedback platform enabling honest communication without sender metadata exposure",
    longDescription:
      "Built a secure anonymous messaging platform where users share public links to receive honest feedback. Features AI-powered message suggestions, toggle-based message control, and complete sender anonymity.",
    imgPath: "/images/projectSecretDrop.png",
    liveLink: "https://secret-drop-orpin.vercel.app/",
    githubLink: "https://github.com/swayamyadav05/SecretDrop",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Google Gemini AI",
      "NextAuth.js",
      "Tailwind CSS",
      "Zod",
    ],
    highlights: [
      "AI-powered contextual message suggestions without exposing sender identity",
      "Secure OTP-based authentication with session management",
      "Type-safe development with comprehensive validation",
      "Email automation with React Email templates",
    ],
    impact:
      "Created safe channel for unfiltered feedback for creators, educators, and teams",
  },
  {
    id: 3,
    title: "Civic Sight AI",
    category: "AI/Backend",
    featured: true,
    description:
      "LLM-based government platform automating urban planning document generation",
    longDescription:
      "Enterprise-grade system processing 100+ planning PDFs weekly to generate Master Plan Update Documents (MPUDs) using AI and multi-source document parsing.",
    imgPath: "/images/projectCivicSightWorkflow3.png",
    liveLink: "https://skillrank.io/Solutions/civic-sight",
    githubLink:
      "https://github.com/swayamyadav05/Civic-sight-AI-workflow",
    technologies: [
      "Python",
      "FastAPI",
      "AWS Textract",
      "MongoDB",
      "Neo4j",
      "Milvus",
      "Docker",
      "AGNO",
      "PyMuPDF",
    ],
    highlights: [
      "95% data accuracy across multi-source document parsing",
      "30% improvement in approval consistency through rule engine",
      "80% reduction in database load via intelligent caching",
      "POC architecture recommended for 100K+ LOC migration",
    ],
    impact:
      "Automated tedious manual review process, enabling faster urban planning decisions",
  },
  {
    id: 4,
    title: "Employee Management System",
    category: "Backend",
    featured: true,
    description:
      "Production-grade REST API with role-based access control and task management",
    longDescription:
      "Complete backend system demonstrating enterprise-level architecture with JWT authentication, CRUD operations, and collaborative features.",
    imgPath: "/images/projectEmplyeeManagement4.png",
    liveLink: null,
    githubLink:
      "https://github.com/swayamyadav05/90-days-web-dev/tree/main/projects/10_EmployeeManagementSystem/backend",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcryptjs",
      "Mongoose",
    ],
    highlights: [
      "Role-based access control (Admin/Employee)",
      "Advanced task filtering and statistics",
      "Collaborative commenting system",
      "Comprehensive validation and error handling",
    ],
    impact:
      "Demonstrated ability to architect scalable, secure backend systems from scratch",
  },
  {
    id: 5,
    title: "Neo4j-Expert-Agent",
    category: "AI/Open Source",
    featured: false,
    description:
      "Schema-aware toolkit for LLM-Neo4j integration, merged into AGNO framework",
    longDescription:
      "Built as POC during internship, this tool provides AI agents with structured access to Neo4j graph databases, enabling context-aware queries.",
    imgPath: "/images/projectNeo4jAgent.png",
    liveLink: "https://github.com/agno-agi/agno/pull/3889",
    githubLink: "https://github.com/swayamyadav05/Neo4j-Expert-Agent",
    technologies: ["Python", "Neo4j", "LLMs", "AGNO"],
    highlights: [
      "Merged into AGNO open-source framework",
      "Schema-aware query generation",
      "Context-preserving LLM integration",
    ],
    impact:
      "First open-source contribution, now used by AGNO community",
  },
  {
    id: 6,
    title: "FilmFiesta",
    category: "Full-Stack",
    featured: false,
    description:
      "Movie discovery platform with trending analytics and real-time search",
    longDescription:
      "React-based movie discovery app leveraging TMDB API with debounced search, trending section, and backend analytics using Appwrite.",
    imgPath: "/images/filmfiesta.png",
    liveLink: "https://filmfiestaaa.vercel.app/",
    githubLink: "https://github.com/swayamyadav05/FilmFiesta",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TMDB API",
      "Appwrite",
    ],
    highlights: [
      "Optimized API calls with debounced search",
      "Real-time trending movies tracking",
      "Clean, responsive UI",
    ],
    impact:
      "First full-stack application built during learning journey",
  },
  {
    id: 7,
    title: "Face Recognition Door Lock",
    category: "IoT/Security",
    featured: false,
    description:
      "Smart IoT security system with facial recognition authentication",
    longDescription:
      "IoT lab project combining hardware and ML for secure access control using facial recognition.",
    imgPath: "/images/projectIotLockSys.png",
    liveLink: null,
    githubLink:
      "https://github.com/swayamyadav05/Face_Recognition_System",
    technologies: [
      "Python",
      "OpenCV",
      "Raspberry Pi",
      "Face Recognition",
    ],
    highlights: [
      "Hardware-software integration",
      "Real-time face detection and authentication",
      "Security-focused design",
    ],
    impact: "Practical application of ML in IoT security context",
  },
  {
    id: 8,
    title: "TLKR",
    category: "Full-Stack",
    featured: false,
    description:
      "Real-time self-destructing chat platform where conversations vanish after 10 minutes",
    longDescription:
      "Built a privacy-first ephemeral chat application where users create temporary rooms that auto-expire. Features real-time WebSocket messaging, token-based authentication, anonymous identity generation, and zero data persistence architecture.",
    imgPath: "/images/projectTLKR.png",
    liveLink: "https://tlkr.onepieceweb.tech/",
    githubLink: "https://github.com/swayamyadav05/TLKR",
    technologies: [
      "Next.js 16",
      "Elysia.js",
      "TypeScript",
      "React 19",
      "Upstash Redis",
      "Upstash Realtime",
      "TanStack Query",
      "Tailwind CSS 4",
      "Zod",
    ],
    highlights: [
      "Real-time bidirectional messaging via WebSocket connections",
      "Auto-expiring rooms with Redis TTL (10-minute lifespan)",
      "Token-based auth with HTTP-only cookies and 2-user room capacity",
      "End-to-end type safety with Elysia + Eden Treaty + Zod schemas",
    ],
    impact:
      "Enabled private ephemeral conversations with guaranteed data deletion for privacy-conscious users",
  },
  // {
  //   id: 9,
  //   title: "AdTech Analytics Dashboard",
  //   category: "Backend/Cloud",
  //   featured: false,
  //   description:
  //     "ETL pipeline for Amazon Ads API with automated daily ingestion",
  //   longDescription:
  //     "Built backend infrastructure for ad campaign visualization with AWS Lambda scheduler for automated data fetching.",
  //   imgPath: "/images/projectAdTech.png",
  //   liveLink: null,
  //   githubLink: null,
  //   technologies: [
  //     "AWS Lambda",
  //     "Amazon RDS",
  //     "Amazon Ads API",
  //     "React",
  //     "CloudWatch",
  //   ],
  //   highlights: [
  //     "Automated daily metric ingestion (impressions, clicks)",
  //     "RESTful APIs for React dashboard",
  //     "Retry logic with CloudWatch alerts",
  //     "90% reduction in pipeline failures",
  //   ],
  //   impact:
  //     "Eliminated manual report downloads, improved data freshness to under 5 minutes",
  // },
];

const techStackIcons = [
  // {
  //   name: "Full-Stack Developer",
  //   modelPath: "/models/nextjs.glb",
  //   scale: 1,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Full-Stack Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  // {
  //   name: "Database Design",
  //   modelPath: "/models/mongodb.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  // {
  //   name: "Cloud & DevOps",
  //   modelPath: "/models/aws.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
];

const expCards = [
  {
    review:
      "Swayam demonstrated exceptional ability to rapidly learn and contribute to complex AI-driven platforms. His work on our CivicSight AI was production-ready and showed deep understanding of both backend systems and AI tooling.",
    imgPath: "/images/skillrank_logo.svg",
    logoPath: "/images/skillrank_sr.svg",
    title: "Software Development Intern - SkillRank",
    date: "November 2024 - May 2025",
    responsibilities: [
      "Engineered CivicSight AI platform processing 100+ complex PDFs weekly with 95% data accuracy",
      "Designed innovative agentic workflow using AGNO framework, recommended for platform-wide migration",
      "Built schema-aware Neo4j-LLM integration toolkit, later contributed to AGNO open-source framework",
      "Created reusable components for real estate app serving 200+ daily users",
    ],
  },
];

// const expLogos = [
//   { name: "skillrank", imgPath: "/images/skillrank-logo.png" },
//   { name: "kiit", imgPath: "/images/kiit-logo.png" },
//   { name: "freelance", imgPath: "/images/freelance-logo.png" },
// ];

const testimonials = [
  {
    id: "vishnu-sharma",
    name: "Director at SkillRank",
    mentions: "@vishnuprasadsharma",
    company: "SkillRank",
    linkedIn:
      "https://www.linkedin.com/in/vishnu-prasad-sharma-629a642b/",
    review:
      "Swayam consistently delivered impressive work. Even when he needed to prioritize personal commitments, he communicated transparently. The trust he built with our team was remarkable, and his technical contributions—especially the AGNO-based architecture—significantly influenced our project's future direction.",
    imgPath: "/images/vishnu_image.jpg",
  },
  {
    id: "chethan-p",
    name: "Er. Chethan P",
    role: "Former SDE Intern",
    linkedIn: "https://www.linkedin.com/in/chethan-p-671812245/",
    mentions: "@chetanp",
    company: "SkillRank",
    review:
      "Working alongside Swayam during the CivicSight project was excellent. He was instrumental in making my onboarding seamless and always available to help. His calm demeanor, approachability, and patience made it easy to ask questions without hesitation. He thoroughly addressed every concern and created a collaborative environment where learning felt natural. That's rare to find.",
    imgPath: "/images/chethan_image.jpg",
  },
  {
    id: "unik-dahal",
    name: "Er. Unik Dahal",
    role: "Product Engineer",
    linkedIn: "https://www.linkedin.com/in/unikdahal/",
    mentions: "@unikdahal",
    company: "High Radius",
    review:
      "Watching Swayam's evolution has been remarkable. He started with ambitious dreams but needed direction—navigating uncertainty during his mid-college years. But then something shifted. He became intentional, focused, and driven with unwavering clarity. His transformation from finding his way to confidently owning his path is inspiring. He's evolved into someone who leads through excellence, not just effort.",
    imgPath: "/images/unik_image.jpg",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://linkedin.com/in/swayamyadav05",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url: "https://github.com/swayamyadav05",
    imgPath: "/images/github-white-icon.png",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/swayamyadav_/",
    imgPath: "/images/insta.png",
  },
];

const certifications = [
  {
    title: "Python for Everybody Specialization",
    description:
      "Comprehensive Python programming and data analysis skills covering fundamentals to advanced concepts",
    icon: "python",
    date: "Jan 2024 - Mar 2024",
    credentialUrl:
      "https://coursera.org/share/b06674cef801b9176a148fc05940cd7f",
    issuer: "University of Michigan (Coursera)",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    description:
      "Completed 8 courses including Python, Linux, SQL, SIEM tools, and intrusion detection systems",
    icon: "google",
    date: "Feb 2024 - Jul 2024",
    credentialUrl:
      "https://coursera.org/share/be270bf37a5539c4f9e690c025fd20ae",
    issuer: "Google (Coursera)",
  },
  {
    title:
      "Hands-on Introduction to Linux Commands and Shell Scripting",
    description:
      "Command line mastery and shell scripting expertise for system administration and development",
    icon: "terminal",
    date: "Sep 2024 - Oct 2024",
    credentialUrl:
      "https://coursera.org/share/7724857c8e1a2d8544601189b26730eb",
    issuer: "IBM (Coursera)",
  },
  {
    title: "Red Hat System Administration I (RH124)",
    description:
      "Certificate of Attendance from Red Hat Training and Certification for enterprise Linux administration",
    icon: "redhat",
    date: "Oct 2024 - Nov 2024",
    credentialUrl: "/certificates/redhat-system-administration-I.pdf",
    issuer: "Red Hat Training & Certification",
  },
  {
    title: "Cybersecurity Virtual Internship",
    description:
      "Completed 10 weeks of intensive virtual internship supported by Palo Alto Networks and EduSkills",
    icon: "briefcase",
    date: "Oct 2024 - Dec 2024",
    credentialUrl: "/certificates/eduskills-cybersecurity.pdf",
    issuer: "EduSkills (Palo Alto Networks)",
  },
  {
    title: "SkillRank Training Program",
    description:
      "Successfully completed 4 weeks of intensive training in full stack development with cutting edge technologies",
    icon: "training",
    date: "Oct 2024 - Nov 2024",
    credentialUrl: "/certificates/skillrank-training.pdf",
    issuer: "SkillRank",
  },
  {
    title: "SkillRank Internship Program",
    description:
      "Successfully completed 6 months of hands-on skill development internship in production environments as SDE",
    icon: "internship",
    date: "Nov 2024 - May 2025",
    credentialUrl: "/certificates/skillrank-internship.pdf",
    issuer: "SkillRank",
  },
];

// const aboutMe = {
//   shortBio:
//     "Full-Stack Engineer building secure, AI-integrated systems for production environments. From LLM orchestration to scalable backends, I ship solutions that work.",
//   longBioStarter:
//     'I discovered my path to software engineering through a simple insight: "The future is data.',
//   journey: `
//   That observation, shared by my brother when I was in 8th grade, planted a seed that grew into a deep
//   fascination with how systems work—and how they can be broken and rebuilt better.
//
//   My journey hasn't been linear. I started with cybersecurity, drawn to the challenge of thinking like
//   an attacker. But I realized that to break systems effectively, I first needed to understand how to
//   build them properly. This led me to full-stack development, where I discovered I loved creating
//   solutions as much as I enjoyed analyzing their vulnerabilities.
//
//   During my internship at SkillRank, I worked on government technology platforms processing sensitive
//   urban planning documents. I learned to build with security-first thinking—not as an afterthought,
//   but as a foundation. I experimented with cutting-edge AI frameworks, contributed tools that made it
//   into open-source projects, and delivered architecture that influenced decisions for 100,000+ line codebases.
//
//   Today, I build full-stack applications that blend intelligent automation (LLMs, AI agents) with robust,
//   scalable architecture. My code is informed by a penetration tester's mindset: I think about edge cases,
//   validate rigorously, and design systems that fail gracefully.`,
//   currentFocus:
//     "Currently seeking remote opportunities where I can contribute to products that matter, work with modern tech stacks, and continue learning at the intersection of development and security.",
//   location: "Bhairahawa, Nepal",
//   availability: "Open to remote opportunities worldwide",
// };

const aboutInfo = {
  intro:
    "I'm Swayam — a full-stack engineer who builds secure, AI-integrated systems with production-grade architecture. After completing a 6-month internship at SkillRank (ended May 2025), I've spent the last several months building ambitious products independently — including TriggerHive, a full SaaS workflow automation platform, and TLKR, a privacy-first ephemeral chat system.",
  story: [
    {
      heading: "The Spark",
      text: "My journey started with a question: 'How do hackers break systems?' This curiosity led me to cybersecurity, where I earned Google's Cybersecurity Professional Certificate. But I quickly realized — to break systems effectively, you first need to build them properly. That's when I shifted to development, bringing a security-first mindset to everything I create.",
    },
    {
      heading: "The Grind",
      text: "Throughout 2024, I went from following tutorials to shipping production applications. During my internship at SkillRank, I built CivicSight AI — an LLM-powered platform processing 100+ government PDFs weekly with 95% accuracy. That project taught me the difference between 'code that works' and 'code that scales.'",
    },
    {
      heading: "Building Forward",
      text: "Since my internship ended in May 2025, I've been shipping ambitious projects independently. TriggerHive — a production-ready workflow automation platform with visual drag-and-drop builder, multi-provider AI integration (OpenAI, Anthropic, Gemini), webhook triggers with HMAC-SHA256 auth, and event-driven execution via Inngest. And TLKR — a real-time ephemeral chat app where rooms self-destruct in 10 minutes, built with Elysia.js, Upstash Realtime, and zero-persistence architecture.",
    },
  ],
  highlights: [
    { label: "Based in India", icon: "📍" },
    { label: "KIIT University — BTech CSE", icon: "🎓" },
    { label: "Former SDE Intern @ SkillRank", icon: "💼" },
    { label: "Building: TriggerHive & TLKR", icon: "🚀" },
    { label: "Google Cybersecurity Certified", icon: "🔒" },
    { label: "Open-Source Contributor: AGNO", icon: "🤖" },
    { label: "7+ Professional Certifications", icon: "📚" },
    { label: "15+ Projects Shipped", icon: "📦" },
  ],
  philosophy: [
    "Build with a penetration tester's paranoia",
    "Learn from documentation, not just tutorials",
    "Ship production code, not portfolio pieces",
    "Communicate clearly in remote-first environments",
    "Stay curious about the 'why' behind the 'how'",
  ],
  cta: "I'm actively seeking full-time opportunities in backend systems, AI integration, or full-stack development. I thrive in environments that value ownership, clear communication, and continuous learning.",
};

export {
  words,
  heroWords,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  certifications,
  aboutInfo,
};

// const navLinks = [
//   {
//     name: "Work",
//     link: "#work",
//   },
//   {
//     name: "Experience",
//     link: "#experience",
//   },
//   {
//     name: "Skills",
//     link: "#skills",
//   },
//   {
//     name: "About",
//     link: "#about",
//   },
//   {
//     name: "Contact",
//     link: "#contact",
//   },
// ];

// const heroWords = [
//   { text: "Secure", imgPath: "/images/secure.svg" },
//   { text: "Scalable", imgPath: "/images/scalable.svg" },
//   { text: "Intelligent", imgPath: "/images/intelligent.svg" },
//   { text: "Production-Ready", imgPath: "/images/production.svg" },
//   { text: "Secure", imgPath: "/images/secure.svg" },
//   { text: "Scalable", imgPath: "/images/scalable.svg" },
//   { text: "Intelligent", imgPath: "/images/intelligent.svg" },
//   { text: "Production-Ready", imgPath: "/images/production.svg" },
// ];

// const counterItems = [
//   { value: 3, suffix: "+", label: "Production Applications Shipped" },
//   { value: 15, suffix: "+", label: "Full-Stack Projects Built" },
//   { value: 1, suffix: "", label: "Open Source Contribution" },
//   { value: 101, suffix: "%", label: "Consistent Upskilling" },
// ];

// // Tech stack logos for companies/technologies worked with
// const techLogos = [
//   { imgPath: "/images/logos/skillrank.png", name: "SkillRank" },
//   { imgPath: "/images/logos/aws.png", name: "AWS" },
//   { imgPath: "/images/logos/mongodb.png", name: "MongoDB" },
//   { imgPath: "/images/logos/nextjs.png", name: "Next.js" },
//   { imgPath: "/images/logos/react.png", name: "React" },
//   { imgPath: "/images/logos/python.png", name: "Python" },
//   { imgPath: "/images/logos/fastapi.png", name: "FastAPI" },
//   { imgPath: "/images/logos/nodejs.png", name: "Node.js" },
//   { imgPath: "/images/logos/docker.png", name: "Docker" },
//   { imgPath: "/images/logos/neo4j.png", name: "Neo4j" },
//   { imgPath: "/images/logos/gemini.png", name: "Google Gemini" },
// ];

// const coreValues = [
//   {
//     imgPath: "/images/security.png",
//     title: "Security-First Mindset",
//     desc: "Building systems with penetration tester's perspective—thinking about edge cases, validation, and graceful failure.",
//   },
//   {
//     imgPath: "/images/remote.png",
//     title: "Remote-Ready Professional",
//     desc: "Proven track record of delivering quality work in distributed environments with clear communication.",
//   },
//   {
//     imgPath: "/images/learning.png",
//     title: "Continuous Learner",
//     desc: "Self-directed learning from documentation and building production projects to validate knowledge.",
//   },
// ];

// // Primary tech stack with 3D models
// const techStackIcons = [
//   {
//     name: "Full-Stack Developer",
//     modelPath: "/models/react_logo-transformed.glb",
//     scale: 1,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Backend Engineer",
//     modelPath: "/models/python-transformed.glb",
//     scale: 0.8,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "AI Integration",
//     modelPath: "/models/ai-transformed.glb",
//     scale: 5,
//     rotation: [0, -Math.PI / 2, 0],
//   },
//   {
//     name: "Cloud Architecture",
//     modelPath: "/models/cloud-transformed.glb",
//     scale: 0.05,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Database Design",
//     modelPath: "/models/database-transformed.glb",
//     scale: 0.05,
//     rotation: [0, -Math.PI / 4, 0],
//   },
// ];

// // Alternative: Tech stack with images
// const techStackImgs = [
//   {
//     name: "Full-Stack Developer",
//     imgPath: "/images/logos/fullstack.png",
//   },
//   {
//     name: "Backend Engineer",
//     imgPath: "/images/logos/backend.png",
//   },
//   {
//     name: "AI Integration Specialist",
//     imgPath: "/images/logos/ai.png",
//   },
//   {
//     name: "Cloud Developer",
//     imgPath: "/images/logos/cloud.png",
//   },
//   {
//     name: "Security Conscious",
//     imgPath: "/images/logos/security.png",
//   },
// ];

// const workExperience = [
//   {
//     review:
//       "Swayam demonstrated exceptional problem-solving skills and technical depth in building our AI-powered platform. His innovative agentic architecture approach significantly improved our codebase maintainability.",
//     imgPath: "/images/skillrank-office.png",
//     logoPath: "/images/skillrank-logo.png",
//     title: "Backend Developer & AI Integration Specialist",
//     company: "SkillRank",
//     location: "Remote",
//     date: "October 2024 - March 2025",
//     responsibilities: [
//       "Architected LLM-based document processing pipelines handling 100+ PDFs weekly with 95% accuracy",
//       "Designed innovative agentic workflow using AGNO framework, recommended for platform-wide migration",
//       "Built schema-aware Neo4j-LLM integration toolkit, later contributed to AGNO open-source framework",
//       "Reduced database load by 80% through intelligent caching and optimized query patterns",
//       "Improved approval consistency by 30% through enhanced Pydantic-based rule engine",
//     ],
//   },
// ];

// const skills = {
//   languages: [
//     "JavaScript",
//     "TypeScript",
//     "Python",
//     "SQL",
//     "HTML/CSS",
//   ],
//   frontend: [
//     "React",
//     "Next.js 15",
//     "Tailwind CSS",
//     "shadcn/ui",
//     "Radix UI",
//   ],
//   backend: [
//     "Node.js",
//     "Express.js",
//     "FastAPI",
//     "REST APIs",
//     "JWT Auth",
//   ],
//   databases: ["MongoDB", "Neo4j", "Milvus", "AWS RDS", "Mongoose"],
//   aiml: [
//     "LLM Integration",
//     "Google Gemini",
//     "AGNO Framework",
//     "Prompt Engineering",
//     "TensorFlow",
//   ],
//   cloud: [
//     "AWS (Textract, Lambda, RDS)",
//     "Docker",
//     "Vercel",
//     "Git/GitHub",
//   ],
//   security: [
//     "NextAuth.js",
//     "bcryptjs",
//     "Zod Validation",
//     "Penetration Testing",
//     "TryHackMe",
//   ],
// };

// const publications = [
//   {
//     title:
//       "Genetic Algorithm-Based Load Balancing in Cloud Computing for Optimized Resource Utilization",
//     authors:
//       "Abhipsha Das, Swayam Yadav, Neetu Dey, Aayushma Gautam, Hitesh Mohapatra",
//     publication: "Cases on Information Systems Service Management",
//     publisher: "IGI Global",
//     year: "2026",
//     doi: "10.4018/979-8-3373-2352-7.ch005",
//     link: "https://doi.org/10.4018/979-8-3373-2352-7.ch005",
//   },
// ];

// const testimonials = [
//   {
//     name: "Manager at SkillRank",
//     mentions: "@skillrank",
//     review:
//       "Swayam consistently delivered impressive work. Even when he needed to prioritize personal commitments, he communicated transparently. The trust he built with our team was remarkable, and his technical contributions—especially the AGNO-based architecture—significantly influenced our platform's future direction.",
//     imgPath: "/images/testimonial-skillrank.png",
//   },
//   // Add more testimonials as you collect them
//   {
//     name: "Teammate",
//     mentions: "@teammate",
//     review:
//       "Working with Swayam on the research paper was great. He's thorough, collaborative, and brings creative solutions to complex problems. His understanding of cloud computing optimization is impressive.",
//     imgPath: "/images/testimonial-teammate.png",
//   },
// ];

// const socialLinks = [
//   {
//     name: "GitHub",
//     imgPath: "/images/social/github.png",
//     link: "https://github.com/swayamyadav05",
//   },
//   {
//     name: "LinkedIn",
//     imgPath: "/images/social/linkedin.png",
//     link: "https://linkedin.com/in/swayam-yadav", // Update with your actual LinkedIn
//   },
//   {
//     name: "Twitter",
//     imgPath: "/images/social/twitter.png",
//     link: "https://twitter.com/swayamyadav", // Update with your actual Twitter
//   },
//   {
//     name: "Email",
//     imgPath: "/images/social/email.png",
//     link: "mailto:swayamyadav05@gmail.com", // Update with your actual email
//   },
// ];

// const aboutMe = {
//   shortBio:
//     "Full-Stack Engineer building secure, AI-integrated systems for production environments. From LLM orchestration to scalable backends, I ship solutions that work.",
//   longBio: `I discovered my path to software engineering through a simple insight: "The future is data."
//   That observation, shared by my brother when I was in 8th grade, planted a seed that grew into a deep
//   fascination with how systems work—and how they can be broken and rebuilt better.

//   My journey hasn't been linear. I started with cybersecurity, drawn to the challenge of thinking like
//   an attacker. But I realized that to break systems effectively, I first needed to understand how to
//   build them properly. This led me to full-stack development, where I discovered I loved creating
//   solutions as much as I enjoyed analyzing their vulnerabilities.

//   During my internship at SkillRank, I worked on government technology platforms processing sensitive
//   urban planning documents. I learned to build with security-first thinking—not as an afterthought,
//   but as a foundation. I experimented with cutting-edge AI frameworks, contributed tools that made it
//   into open-source projects, and delivered architecture that influenced decisions for 100,000+ line codebases.

//   Today, I build full-stack applications that blend intelligent automation (LLMs, AI agents) with robust,
//   scalable architecture. My code is informed by a penetration tester's mindset: I think about edge cases,
//   validate rigorously, and design systems that fail gracefully.`,
//   currentFocus:
//     "Currently seeking remote opportunities where I can contribute to products that matter, work with modern tech stacks, and continue learning at the intersection of development and security.",
//   location: "Kathmandu, Nepal",
//   availability: "Open to remote opportunities worldwide",
// };

// export {
//   navLinks,
//   heroWords,
//   counterItems,
//   techLogos,
//   coreValues,
//   techStackIcons,
//   techStackImgs,
//   workExperience,
//   projects,
//   skills,
//   certifications,
//   publications,
//   testimonials,
//   socialLinks,
//   aboutMe,
// }
