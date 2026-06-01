import type { IconName, Locale } from "./site";

export type EcosystemVisual = "lab" | "academy" | "community" | "bridge";

export interface EcosystemCard {
  icon: IconName;
  visual: EcosystemVisual;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export const ecosystemCards: Record<Locale, EcosystemCard[]> = {
  en: [
    {
      icon: "flask",
      visual: "lab",
      title: "Research Systems",
      description:
        "Multimodal AI, WebGPU, real-time inference, and HCI.",
      cta: "Explore systems",
      href: "#research"
    },
    {
      icon: "academy",
      visual: "academy",
      title: "Knowledge Infrastructure",
      description:
        "Open technical education, documentation, and learning systems.",
      cta: "Explore infrastructure",
      href: "#academy"
    },
    {
      icon: "community",
      visual: "community",
      title: "Technical Leadership",
      description:
        "Scalable software systems, developer tooling, and infrastructure.",
      cta: "See platforms",
      href: "#speaking"
    },
    {
      icon: "bridge",
      visual: "bridge",
      title: "Global Collaboration",
      description:
        "Technology, research, and education between Mexico and China.",
      cta: "See bridge",
      href: "#about"
    }
  ],
  es: [
    {
      icon: "flask",
      visual: "lab",
      title: "Sistemas de investigación",
      description:
        "IA multimodal, WebGPU, inferencia en tiempo real e HCI.",
      cta: "Explorar sistemas",
      href: "#research"
    },
    {
      icon: "academy",
      visual: "academy",
      title: "Infraestructura de conocimiento",
      description:
        "Educación técnica abierta, documentación y sistemas de aprendizaje.",
      cta: "Explorar infraestructura",
      href: "#academy"
    },
    {
      icon: "community",
      visual: "community",
      title: "Liderazgo técnico",
      description:
        "Sistemas de software escalables, tooling para desarrolladores e infraestructura.",
      cta: "Ver plataformas",
      href: "#speaking"
    },
    {
      icon: "bridge",
      visual: "bridge",
      title: "Colaboración global",
      description:
        "Tecnología, investigación y educación entre México y China.",
      cta: "Ver puente",
      href: "#about"
    }
  ],
  "zh-cn": [
    {
      icon: "flask",
      visual: "lab",
      title: "研究系统",
      description: "多模态 AI、WebGPU、实时推理与人机交互。",
      cta: "探索系统",
      href: "#research"
    },
    {
      icon: "academy",
      visual: "academy",
      title: "知识基础设施",
      description: "开放技术教育、文档与学习系统。",
      cta: "探索基础设施",
      href: "#academy"
    },
    {
      icon: "community",
      visual: "community",
      title: "技术领导力",
      description: "可扩展的软件系统、开发者工具与基础设施。",
      cta: "查看平台",
      href: "#speaking"
    },
    {
      icon: "bridge",
      visual: "bridge",
      title: "全球协作",
      description: "在墨西哥与中国之间连接技术、研究与教育。",
      cta: "查看桥梁",
      href: "#about"
    }
  ]
};
