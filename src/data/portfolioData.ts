import { PersonalInfo, SkillCategory, ExperienceItem, ProjectItem, EducationItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Monish P',
  title: '.NET Developer',
  tagline: 'Building enterprise web applications with C#, ASP.NET, React & Angular',
  location: 'Erode, Tamil Nadu, India',
  phone: '+91 9345789114',
  email: 'monishvp2002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/monish-p-a12639219/',
  github: 'https://github.com/monishvp',
  summary: '.NET Developer with 2+ years of experience designing and building enterprise web applications using C#, ASP.NET Framework, ASP.NET MVC/Web API, Entity Framework, LINQ, and SQL Server. Experienced across the full Software Development Life Cycle — requirement analysis, API design, database optimization, testing, deployment, and production support. Frontend experience with AngularJS and React. Additional experience building AI-powered workflow automation tools and AI agent-driven applications, bringing a practical, efficiency-focused approach to development.',
  profileImage: `${import.meta.env.BASE_URL}images/profile.jpg`
};

export const skills: SkillCategory[] = [
  { category: 'Languages', items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { category: '.NET Technologies', items: ['ASP.NET', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'LINQ', 'RESTful API Design', 'Microservices Concepts'] },
  { category: 'Frontend', items: ['AngularJS', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
  { category: 'Databases', items: ['Microsoft SQL Server', 'PostgreSQL', 'Database Design & Query Optimization'] },
  { category: 'Cloud & Tools', items: ['Azure Fundamentals', 'Git', 'GitHub', 'Visual Studio 2022', 'VS Code', 'Postman', 'Power BI'] },
  { category: 'Practices', items: ['Full Stack Development', 'REST API Development', 'AI-Assisted Development', 'Workflow Automation (n8n)'] }
];

export const experience: ExperienceItem[] = [
  {
    title: 'Software Developer',
    company: 'Brightspot Technology Solutions',
    location: 'Coimbatore, India',
    period: 'May 2024 — Present',
    responsibilities: [
      'Developed and maintained multiple full-stack web application modules using ASP.NET, C#, React, and AngularJS, delivering features across the frontend, backend, and database layers.',
      'Designed and implemented RESTful/Web APIs and backend services powering enterprise applications used by multiple business units.',
      'Built and optimized data access layers on SQL Server using Entity Framework and LINQ, improving query response times and reducing development effort.',
      'Built AI-powered features and workflow automation tools that reduced manual processing effort for end users.',
      'Collaborated cross-functionally with product, QA, and development teams across the SDLC, from requirement analysis through production support.',
      'Improved SQL Server database performance and application reliability, contributing to reduced production incident volume.',
      'Participated in requirement analysis, sprint planning, testing, deployment, and post-release support across multiple release cycles.',
      'Wrote unit and integration tests to catch regressions early, improving code stability across releases.'
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Referral Reward Platform',
    tech: ['ASP.NET', 'C#', 'AngularJS', 'SQL Server', 'Power BI', 'REST APIs'],
    description: 'End-to-end referral tracking and reward management platform supporting the full referral lifecycle.',
    highlights: [
      'Built referral tracking and reward management features end-to-end using ASP.NET, C#, and SQL Server.',
      'Automated reward approval and payout workflows, significantly cutting manual processing time and turnaround.',
      'Developed AngularJS UI modules for referral submission, status tracking, and reward history.',
      'Optimized SQL Server queries and indexes, improving reporting performance and system reliability.',
      'Built Power BI dashboards tracking campaign KPIs including conversion rate, reward trends, and channel performance.'
    ],
    icon: 'gift'
  },
  {
    title: 'AraCrate — AI Feature Planner',
    tech: ['React', 'FastAPI', 'Python', 'REST APIs', 'AI Agents'],
    description: 'AI-powered requirement generation platform with backend REST APIs supporting AI agent-driven SRS generation.',
    highlights: [
      'Built an AI-powered requirement generation platform with backend REST APIs supporting AI agent-driven Software Requirement Specification (SRS) generation, reducing manual documentation effort.',
      'Automated task breakdown and developer workflow generation, speeding up project planning cycles for the team.'
    ],
    icon: 'robot'
  }
];

export const education: EducationItem = {
  degree: 'Bachelor of Engineering',
  field: 'Electronics and Communication Engineering',
  university: 'Karpagam College of Engineering, Coimbatore',
  period: '2020 — 2024',
  cgpa: '8.23'
};

export const achievements: string[] = [
  'Recognized within the team for proactively building internal AI tooling that reduced repetitive manual work for developers.',
  'Took ownership of the Referral Reward Platform\'s reporting layer, improving dashboard load times and data accuracy for stakeholders.',
  'Maintained a CGPA of 8.23 in Electronics and Communication Engineering, reflecting strong analytical and problem-solving fundamentals.'
];

export const strengths: string[] = [
  'Strong grasp of OOP principles, design patterns, and writing maintainable, scalable code in C#.',
  'Comfortable owning a feature end-to-end — from database schema to API to frontend UI.',
  'Quick learner with a track record of picking up new tools and frameworks independently (AI agent development, workflow automation).',
  'Clear communicator who works well with cross-functional teams (product, QA, design) in Agile environments.'
];

