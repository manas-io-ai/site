export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string; // SVG path or component name
}

export interface Service {
  name: string;
  category?: string;
}

export interface AwardBadge {
  name: string;
  count: number;
  icon: string;
}

export interface ProjectTag {
  label: string;
}

export interface Project {
  id: string;
  name: string;
  displayName: string; // The marquee display text
  tags: ProjectTag[];
  image: string;
  video?: string;
  gradient: string; // CSS gradient or bg color
  tagline: string;
  caseStudyUrl: string;
  audioBreakdownUrl?: string;
}

export interface ArchiveProject {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  year?: string;
}
