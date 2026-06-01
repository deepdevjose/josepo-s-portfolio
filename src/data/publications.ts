import type { Locale } from "./site";

export interface Publication {
  date: string;
  title: string;
  href: string;
}

export const publications: Record<Locale, Publication[]> = {
  en: [
    {
      date: "May 2026",
      title: "Browser-Native Multimodal Inference: Exploring the Limits of WebGPU",
      href: "#writing"
    },
    {
      date: "Apr 2026",
      title: "Real-Time Multimodal Systems: Design Considerations and Applications",
      href: "#writing"
    },
    {
      date: "Apr 2026",
      title: "Human-Computer Interaction for Intelligent Systems",
      href: "#writing"
    },
    {
      date: "Mar 2026",
      title: "Designing Adaptive Interfaces for Complex Systems",
      href: "#writing"
    }
  ],
  es: [
    {
      date: "May 2026",
      title: "Inferencia multimodal nativa en navegador: explorando los límites de WebGPU",
      href: "#writing"
    },
    {
      date: "Abr 2026",
      title: "Sistemas multimodales en tiempo real: consideraciones de diseño y aplicaciones",
      href: "#writing"
    },
    {
      date: "Abr 2026",
      title: "Interacción humano-computadora para sistemas inteligentes",
      href: "#writing"
    },
    {
      date: "Mar 2026",
      title: "Diseñando interfaces adaptativas para sistemas complejos",
      href: "#writing"
    }
  ],
  "zh-cn": [
    {
      date: "2026年5月",
      title: "浏览器原生多模态推理：探索 WebGPU 的极限",
      href: "#writing"
    },
    {
      date: "2026年4月",
      title: "实时多模态系统：设计考量与应用",
      href: "#writing"
    },
    {
      date: "2026年4月",
      title: "面向智能系统的人机交互",
      href: "#writing"
    },
    {
      date: "2026年3月",
      title: "为复杂系统设计自适应界面",
      href: "#writing"
    }
  ]
};
