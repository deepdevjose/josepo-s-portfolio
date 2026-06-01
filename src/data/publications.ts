import type { Locale } from "./site";

export interface Publication {
  date: string;
  title: string;
  href: string;
}

export const publications: Record<Locale, Publication[]> = {
  en: [
    {
      date: "In review",
      title: "Decoupled hybrid architecture for generative AI-assisted interactive cultural preservation systems",
      href: "https://github.com/deepdevjose?tab=repositories&q=Byron"
    }
  ],
  es: [
    {
      date: "En revisión",
      title: "Arquitectura híbrida desacoplada para sistemas interactivos de preservación cultural asistidos por IA generativa",
      href: "https://github.com/deepdevjose?tab=repositories&q=Byron"
    }
  ],
  "zh-cn": [
    {
      date: "审稿中",
      title: "面向生成式 AI 辅助交互式文化保护系统的解耦混合架构",
      href: "https://github.com/deepdevjose?tab=repositories&q=Byron"
    }
  ]
};
