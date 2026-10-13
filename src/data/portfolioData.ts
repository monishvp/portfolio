import { PersonalInfo, SkillCategory, ExperienceItem, ProjectItem, EducationItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Monish P',
  title: '.NET Full Stack Developer',
  tagline: 'Building scalable web applications & intelligent digital experiences',
  location: 'Erode, Tamil Nadu, India',
  phone: '+91 9345789114',
  email: 'monishvp2002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/monish-p-a12639219/',
  github: 'https://github.com/monishvp',
  summary: 'Full Stack Developer with 2+ years of experience building and maintaining web applications using C#, ASP.NET, AngularJS, and Microsoft SQL Server. I work across frontend development, backend APIs, database operations, and application integration. I also explore AI-assisted development and workflow automation to improve productivity and build smarter digital solutions.',
  profileImage: `${import.meta.env.BASE_URL}images/profile_nobg.png`,
  resumeUrl: `${import.meta.env.BASE_URL}Monish_P_Resume.pdf`
};

export const skills: SkillCategory[] = [
  {
    category: 'Backend Development',
    items: ['C#', 'ASP.NET / .NET', 'ASP.NET MVC', 'ASP.NET Web API', 'REST APIs', 'Entity Framework', 'LINQ', 'Microservices Concepts']
  },
  {
    category: 'Frontend Development',
    items: ['AngularJS', 'React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    category: 'Database',
    items: ['Microsoft SQL Server', 'PostgreSQL', 'SQL Query Optimization', 'Database Design']
  },
  {
    category: 'AI & Automation',
    items: ['AI-Assisted Development', 'AI Integration', 'Python', 'n8n Workflow Automation', 'Intelligent Agents']
  },
  {
    category: 'Mobile & Analytics',
    items: ['Flutter', 'Node.js', 'Power BI', 'Azure Fundamentals']
  },
  {
    category: 'Developer Tools',
    items: ['Visual Studio 2022', 'VS Code', 'Git', 'GitHub', 'Postman', 'Cursor', 'Claude']
  }
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
    description: 'End-to-end referral tracking and reward management platform supporting the full referral lifecycle with automated approvals and KPI analytics.',
    highlights: [
      'Built referral tracking and reward management features end-to-end using ASP.NET, C#, and SQL Server, supporting the full referral lifecycle.',
      'Automated reward approval and payout workflows, significantly cutting manual processing time and turnaround.',
      'Developed AngularJS UI modules for referral submission, status tracking, and reward history.',
      'Optimized SQL Server queries and indexes, improving reporting performance and system reliability.',
      'Built Power BI dashboards tracking campaign KPIs including conversion rate, reward trends, and channel performance.'
    ],
    icon: 'gift'
  },
  {
    title: 'Corksy — Winery eCommerce & Reservation Platform',
    tech: ['React.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redux Toolkit', 'REST APIs'],
    description: 'Comprehensive winery eCommerce and reservation platform powering real-time slot scheduling, table allocation, POS integrations, and merchant portal operations.',
    highlights: [
      'Developed end-to-end reservation and booking workflows using React.js and GraphQL, supporting real-time slot scheduling, table allocation, and guest management.',
      'Built and optimized PostgreSQL reporting queries and automated notification scripts, delivering accurate daily reservation, sales, and operational analytics.',
      'Created responsive, embeddable eCommerce widgets enabling third-party merchant sites to seamlessly integrate online purchasing, event ticket booking, and cart checkout.',
      'Enhanced Admin Web portal features using React and Redux Toolkit to streamline merchant catalog setup, order management, and reservation configurations.',
      'Delivered UI improvements and operational bug fixes across Point-of-Sale (POS) and eCommerce modules, improving checkout speed and staff usability during peak hours.'
    ],
    icon: 'wine'
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
  'Took ownership of the Referral Reward Platform\'s reporting layer, improving dashboard load times and data accuracy for stakeholders.',
  'Recognized within the team for proactively building internal AI tooling that reduced repetitive manual work for developers.',
  'Maintained a CGPA of 8.23 in Electronics and Communication Engineering, reflecting strong analytical and problem-solving fundamentals.'
];

export const strengths: string[] = [
  'Strong grasp of OOP principles, design patterns, and writing maintainable, scalable code in C#.',
  'Comfortable owning a feature end-to-end — from database schema to API to frontend UI.',
  'Quick learner with a track record of picking up new tools and frameworks independently (AI agent development, workflow automation).',
  'Clear communicator who works well with cross-functional teams (product, QA, design) in Agile environments.'
];
