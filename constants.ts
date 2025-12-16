import { Project } from './types';

export const categories = [
  {
    id: 'security',
    icon: '🛡️',
    count: 12
  },
  {
    id: 'ai',
    icon: '🤖',
    count: 8
  },
  {
    id: 'platform',
    icon: '💻',
    count: 6
  },
  {
    id: 'web_tools',
    icon: '🌐',
    count: 9
  },
  {
    id: 'blockchain',
    icon: '⛓️',
    count: 4
  }
];

export const PROJECTS: Project[] = [
  {
    id: "almubeen",
    name: "Almubeen",
    type: "Platform",
    language: "TypeScript",
    license: "Apache 2.0",
    description: "Internal content management and services platform for Knoux projects, featuring advanced dashboards and service orchestration.",
    githubUrl: "https://github.com/KnouxOPS/almubeen",
    tags: ["Platform", "CMS", "Dashboard"],
    featured: true,
    stats: { stars: 124, forks: 30, securityScore: 98 }
  },
  {
    id: "knoux-ultraencrypt-pro",
    name: "Knoux UltraEncrypt Pro",
    type: "Library",
    language: "TypeScript",
    license: "Proprietary",
    description: "Advanced encryption library for protecting text and files with seamless integration and military-grade algorithms.",
    githubUrl: "https://github.com/KnouxOPS/knoux-ultraencrypt-pro",
    tags: ["Security", "Encryption", "Core"],
    featured: true,
    stats: { stars: 89, forks: 12, securityScore: 100 }
  },
  {
    id: "knoux-sentinel-core",
    name: "Knoux Sentinel Core",
    type: "System",
    language: "TypeScript",
    license: "Proprietary",
    description: "Security monitoring system, digital activity analysis, and real-time threat detection engine.",
    githubUrl: "https://github.com/KnouxOPS/knoux-sentinel-core",
    tags: ["Security", "Monitoring", "AI"],
    featured: true,
    stats: { stars: 210, forks: 45, securityScore: 99 }
  },
  {
    id: "knouxguard",
    name: "KnouxGuard",
    type: "Tool",
    language: "AI-powered WPF",
    license: "MIT",
    description: "AI-powered security scanning tool for detecting vulnerabilities and information leaks in desktop environments.",
    githubUrl: "https://github.com/KnouxOPS/KnouxGuard",
    tags: ["AI", "Security", "Desktop"],
    featured: true,
    stats: { stars: 156, forks: 28, securityScore: 92 }
  },
  {
    id: "kx-path",
    name: "-KX-PATH",
    type: "Platform",
    language: "TypeScript",
    license: "Proprietary",
    description: "Platform for developing custom security pathways for enterprises with advanced access control governance.",
    githubUrl: "https://github.com/KnouxOPS/-KX-PATH",
    tags: ["Enterprise", "Access Control"],
    featured: false,
    stats: { stars: 45, forks: 5, securityScore: 95 }
  },
  {
    id: "x",
    name: "X (Enterprise Platform)",
    type: "Platform",
    language: "TypeScript",
    license: "Enterprise",
    description: "Comprehensive cybersecurity platform, system monitoring, and AI-driven analytics for large scale infrastructure.",
    githubUrl: "https://github.com/KnouxOPS/x",
    tags: ["Enterprise", "Cybersecurity", "AI"],
    featured: true,
    stats: { stars: 340, forks: 80, securityScore: 99 }
  },
  {
    id: "project-guardian",
    name: "Project Guardian",
    type: "System",
    language: "TypeScript",
    license: "Proprietary",
    description: "Integrated security project for data protection, policy management, and network activity analysis.",
    githubUrl: "https://github.com/KnouxOPS/project-guardian",
    tags: ["Security", "Network", "Policy"],
    featured: false,
    stats: { stars: 78, forks: 15, securityScore: 97 }
  },
  {
    id: "al-nur-al-khafi",
    name: "Al-Nur Al-Khafi",
    type: "Education",
    language: "Vue",
    license: "Proprietary",
    description: "Digital educational and cultural project inspired by prophetic teachings, blending heritage with modern tech.",
    githubUrl: "https://github.com/KnouxOPS/Al-Nur-Al-Khafi-Hidden-Light",
    tags: ["Culture", "Education", "Web"],
    featured: false,
    stats: { stars: 150, forks: 20, securityScore: 90 }
  },
  {
    id: "versaa7",
    name: "Versaa7",
    type: "Web",
    language: "TypeScript",
    license: "Proprietary",
    description: "Dynamic web interface for organizing and displaying digital content and information dashboards.",
    githubUrl: "https://github.com/KnouxOPS/versaa7",
    tags: ["UI/UX", "Dashboard", "Web"],
    featured: false,
    stats: { stars: 32, forks: 4, securityScore: 88 }
  },
  {
    id: "knoux-org",
    name: "KNOUX-ORG",
    type: "Internal",
    language: "TypeScript",
    license: "Proprietary",
    description: "Internal organizational structure for managing projects and users within the KnouxOPS ecosystem.",
    githubUrl: "https://github.com/KnouxOPS/KNOUX-ORG",
    tags: ["Management", "Internal"],
    featured: false,
    stats: { stars: 12, forks: 2, securityScore: 96 }
  },
  {
    id: "knoux-ai-ultra-pro-max",
    name: "Knoux AI Ultra Pro Max",
    type: "AI",
    language: "TypeScript",
    license: "Proprietary",
    description: "AI platform for data processing, creating predictive models, and interactive analytics.",
    githubUrl: "https://github.com/KnouxOPS/Knoux-AI-Ultra-Pro-Max",
    tags: ["AI", "Data Science", "Analytics"],
    featured: true,
    stats: { stars: 412, forks: 102, securityScore: 94 }
  },
  {
    id: "knoux-aisha",
    name: "Knoux AISHA",
    type: "AI Assistant",
    language: "TypeScript",
    license: "Proprietary",
    description: "AI assistant for providing recommendations, analyzing data, and intelligently managing projects.",
    githubUrl: "https://github.com/KnouxOPS/Knoux-AISHA",
    tags: ["AI", "Assistant", "Productivity"],
    featured: true,
    stats: { stars: 289, forks: 67, securityScore: 93 }
  },
  {
    id: "duplicate",
    name: "DUPLICATE",
    type: "Experimental",
    language: "TypeScript",
    license: "Internal",
    description: "Experimental sandbox for testing new features before core integration.",
    githubUrl: "https://github.com/KnouxOPS/DUPLICATE",
    tags: ["Dev", "Sandbox"],
    featured: false,
    stats: { stars: 5, forks: 1, securityScore: 80 }
  },
  {
    id: "knoux-smart-organizer",
    name: "KnouxSmartOrganizer",
    type: "Productivity",
    language: "TypeScript",
    license: "Proprietary",
    description: "Productivity application for organizing tasks, timelines, and personal or team projects.",
    githubUrl: "https://github.com/KnouxOPS/KnouxSmartOrganizer",
    tags: ["Productivity", "Tools"],
    featured: false,
    stats: { stars: 45, forks: 10, securityScore: 85 }
  },
  {
    id: "knoux7-ai-dashboard",
    name: "Knoux7 AI Dashboard",
    type: "Dashboard",
    language: "CSS / AI",
    license: "Apache 2.0",
    description: "AI dashboard for monitoring and analyzing data and managing AI scripts.",
    githubUrl: "https://github.com/KnouxOPS/knoux7-ai-dashboard",
    tags: ["Dashboard", "AI", "UI"],
    featured: false,
    stats: { stars: 67, forks: 14, securityScore: 91 }
  },
  {
    id: "elkitab",
    name: "Elkitab",
    type: "Library",
    language: "TypeScript",
    license: "Proprietary",
    description: "Digital library for managing texts and content, with search, organization, and display tools.",
    githubUrl: "https://github.com/KnouxOPS/elkitab",
    tags: ["Library", "Data", "Search"],
    featured: false,
    stats: { stars: 55, forks: 9, securityScore: 89 }
  },
  {
    id: "knoux-security-plus",
    name: "Knoux Security Plus",
    type: "Security",
    language: "TypeScript",
    license: "Proprietary",
    description: "Suite of security tools for protecting applications and data with monitoring and incident response.",
    githubUrl: "https://github.com/KnouxOPS/knoux-security-plus",
    tags: ["Security", "Tools"],
    featured: false,
    stats: { stars: 99, forks: 21, securityScore: 98 }
  },
  {
    id: "knoux-20duplicate-20ai",
    name: "Knoux AI Builder",
    type: "Development",
    language: "TypeScript",
    license: "Builder.io",
    description: "Development version for experimenting with new AI features and templates.",
    githubUrl: "https://github.com/KnouxOPS/Knoux-20Duplicate-20AI",
    tags: ["AI", "Dev", "Template"],
    featured: false,
    stats: { stars: 15, forks: 3, securityScore: 88 }
  },
  {
    id: "knoux-swap",
    name: "KNOUX SWAP",
    type: "DeFi",
    language: "TypeScript",
    license: "Builder.io",
    description: "Exchange project simulation and trading platform environment.",
    githubUrl: "https://github.com/KnouxOPS/-20KNOUX-20SWAP",
    tags: ["Blockchain", "DeFi", "Web"],
    featured: false,
    stats: { stars: 22, forks: 5, securityScore: 85 }
  },
  {
    id: "knoux-3dswap",
    name: "Knoux 3D Swap",
    type: "DeFi",
    language: "TypeScript",
    license: "Builder.io",
    description: "Experimenting with 3D interfaces for digital exchange applications with interactive tools.",
    githubUrl: "https://github.com/KnouxOPS/knoux-3Dswap",
    tags: ["3D", "DeFi", "UI"],
    featured: false,
    stats: { stars: 76, forks: 18, securityScore: 88 }
  },
  {
    id: "versa-glow-studio-pro",
    name: "Versa Glow Studio",
    type: "Design",
    language: "TypeScript",
    license: "Proprietary",
    description: "Studio for editing digital content and visual effects with support for interactive interfaces.",
    githubUrl: "https://github.com/KnouxOPS/versa-glow-studio-pro",
    tags: ["Design", "UI/UX", "Web"],
    featured: false,
    stats: { stars: 40, forks: 6, securityScore: 87 }
  },
  {
    id: "radiant-sphere-chat",
    name: "Radiant Sphere Chat",
    type: "Communication",
    language: "TypeScript",
    license: "Proprietary",
    description: "Interactive 3D chat interface for displaying messages and attractive UI components.",
    githubUrl: "https://github.com/KnouxOPS/radiant-sphere-chat-view",
    tags: ["3D", "Chat", "UI"],
    featured: true,
    stats: { stars: 112, forks: 30, securityScore: 90 }
  },
  {
    id: "radiant-chat-sphere-ui",
    name: "Radiant Chat UI",
    type: "Library",
    language: "TypeScript",
    license: "Proprietary",
    description: "Advanced 3D chat interface library integratable with messaging apps.",
    githubUrl: "https://github.com/KnouxOPS/radiant-chat-sphere-ui",
    tags: ["UI", "Library", "3D"],
    featured: false,
    stats: { stars: 95, forks: 25, securityScore: 91 }
  },
  {
    id: "knoux-core-revive",
    name: "Knoux Core Revive",
    type: "Maintenance",
    language: "TypeScript",
    license: "Proprietary",
    description: "Project for renewing and improving Knoux app cores, fixing bugs and adding features.",
    githubUrl: "https://github.com/KnouxOPS/knoux-core-revive-project",
    tags: ["Core", "Maintenance", "Refactor"],
    featured: false,
    stats: { stars: 30, forks: 8, securityScore: 94 }
  },
  {
    id: "crypto-trading-dash",
    name: "Crypto Trading Dash",
    type: "Dashboard",
    language: "TypeScript",
    license: "Proprietary",
    description: "Dashboard for tracking digital trades and managing crypto portfolios.",
    githubUrl: "https://github.com/KnouxOPS/cryptocurrency-trading-dashboa-3484",
    tags: ["Blockchain", "Dashboard", "Finance"],
    featured: false,
    stats: { stars: 60, forks: 12, securityScore: 89 }
  },
  {
    id: "orge",
    name: "Orge",
    type: "Tool",
    language: "TypeScript",
    license: "Proprietary",
    description: "Tool for internal digital resource management or advanced experimental interfaces.",
    githubUrl: "https://github.com/KnouxOPS/orge",
    tags: ["Internal", "Resource"],
    featured: false,
    stats: { stars: 18, forks: 2, securityScore: 85 }
  },
  {
    id: "kforge",
    name: "KForge",
    type: "DevOps",
    language: "TypeScript",
    license: "Proprietary",
    description: "Platform for developing and managing digital projects with build, deploy, and backend tools.",
    githubUrl: "https://github.com/KnouxOPS/kforge",
    tags: ["DevOps", "Platform", "Tools"],
    featured: false,
    stats: { stars: 45, forks: 10, securityScore: 92 }
  },
  {
    id: "cyber-app-genesis",
    name: "Cyber App Genesis",
    type: "Framework",
    language: "TypeScript",
    license: "Proprietary",
    description: "Foundational security project for developing cyber applications, with advanced analysis and monitoring tools.",
    githubUrl: "https://github.com/KnouxOPS/cyber-app-genesis",
    tags: ["Security", "Framework", "Genesis"],
    featured: false,
    stats: { stars: 88, forks: 12, securityScore: 96 }
  },
  {
    id: "knoux7",
    name: "KNOUX7",
    type: "Experimental",
    language: "TypeScript",
    license: "Proprietary",
    description: "Experimental project or launching point for new initiatives within KnouxOPS.",
    githubUrl: "https://github.com/KnouxOPS/-KNOUX7",
    tags: ["Experimental", "Innovation"],
    featured: false,
    stats: { stars: 25, forks: 5, securityScore: 88 }
  },
  {
    id: "mubeen-tech-stack-guide",
    name: "Tech Stack Guide",
    type: "Documentation",
    language: "TypeScript",
    license: "Proprietary",
    description: "Comprehensive guide to programming technologies and tools used within KnouxOPS projects.",
    githubUrl: "https://github.com/KnouxOPS/mubeen-tech-stack-guide",
    tags: ["Docs", "Guide", "Education"],
    featured: false,
    stats: { stars: 150, forks: 45, securityScore: 99 }
  },
  {
    id: "knox-cyber-forge",
    name: "Knox Cyber Forge",
    type: "Platform",
    language: "TypeScript",
    license: "Proprietary",
    description: "Platform for creating and building cyber applications with automation, analysis, and rapid deployment tools.",
    githubUrl: "https://github.com/KnouxOPS/knox-cyber-forge",
    tags: ["DevOps", "Cyber", "Automation"],
    featured: true,
    stats: { stars: 145, forks: 33, securityScore: 97 }
  }
];