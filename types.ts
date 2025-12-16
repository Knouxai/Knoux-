export interface Project {
  id: string;
  name: string;
  type: string;
  language: string;
  license: string;
  description: string;
  githubUrl: string;
  tags: string[];
  stats?: {
    stars: number;
    forks: number;
    securityScore: number;
  };
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
