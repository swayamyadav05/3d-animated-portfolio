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

const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
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
  { value: 10, suffix: "+", label: "Production Projects" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
  { value: 100, suffix: "%", label: "Remote Work Success" },
  { value: 90, suffix: "days", label: "Intensive Upskill Journey" },
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
    imgPath: "/images/security.png",
    title: "Security-First Mindset",
    desc: "Building applications with cybersecurity principles from the ground up, ensuring robust and secure systems.",
  },
  {
    imgPath: "/images/remote.png",
    title: "Remote Work Excellence",
    desc: "Proven track record of delivering high-quality work in fully remote, asynchronous environments.",
  },
  {
    imgPath: "/images/learning.png",
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

const techStackIcons = [
  {
    name: "Full-Stack Developer",
    modelPath: "/models/nextjs.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/nodejs.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Database Expert",
    modelPath: "/models/mongodb.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Cloud & DevOps",
    modelPath: "/models/aws.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Swayam demonstrated exceptional ability to rapidly learn and contribute to complex AI-driven platforms. His work on our Neo4j integration was production-ready and showed deep understanding of both backend systems and AI tooling.",
    imgPath: "/images/skillrank-exp.png",
    logoPath: "/images/skillrank-logo.png",
    title: "Software Development Intern - SkillRank",
    date: "October 2024 - April 2025",
    responsibilities: [
      "Engineered CivicSight AI platform processing 100+ complex PDFs weekly with 95% data accuracy",
      "Developed Neo4j-Expert-Agent tool recognized by AGNO framework for potential merger",
      "Built automated data pipelines using AWS Lambda, eliminating manual data processing",
      "Created reusable components for real estate app serving 200+ daily users",
    ],
  },
];

const expLogos = [
  { name: "skillrank", imgPath: "/images/skillrank-logo.png" },
  { name: "kiit", imgPath: "/images/kiit-logo.png" },
  { name: "freelance", imgPath: "/images/freelance-logo.png" },
];

// Replace these with your actual testimonials
const testimonials = [
  {
    name: "Your Manager at SkillRank",
    mentions: "Engineering Manager",
    review:
      "Swayam quickly adapted to our tech stack and made significant contributions to our AI platform. His Neo4j integration work was particularly impressive and showed great problem-solving skills.",
    imgPath: "/images/manager1.png",
  },
  {
    name: "Project Collaborator",
    mentions: "Team Lead",
    review:
      "Working with Swayam was fantastic. He brings a unique blend of technical skill and creative problem-solving. His security-focused approach to development is a valuable asset to any team.",
    imgPath: "/images/collaborator1.png",
  },
  {
    name: "Mentor/Professor",
    mentions: "Technical Advisor",
    review:
      "Swayam's journey from self-taught developer to professional is remarkable. His discipline and rapid learning ability are exceptional. He consistently delivers high-quality, production-ready code.",
    imgPath: "/images/mentor1.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/swayamyadav05",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/swayamyadav05",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "email",
    url: "mailto:swayam.2956work@gmail.com",
    imgPath: "/images/email.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
