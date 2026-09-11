export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  profileImage: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  description: string;
  highlights: string[];
  icon: 'gift' | 'robot';
}

export interface EducationItem {
  degree: string;
  field: string;
  university: string;
  period: string;
  cgpa: string;
}

