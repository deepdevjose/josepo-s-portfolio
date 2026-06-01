import type { Locale } from "./site";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: Record<Locale, TimelineItem[]> = {
  en: [
    {
      year: "2019",
      title: "ITSOEH",
      description: "Foundation in software engineering, computer systems, and applied technology."
    },
    {
      year: "2021",
      title: "VEX Robotics",
      description: "Competitive robotics, embedded systems, and technical leadership."
    },
    {
      year: "2023",
      title: "XJTLU",
      description: "Research collaboration in computer science, multimodal systems, and AI."
    },
    {
      year: "2024 - Now",
      title: "Research Engineering",
      description: "Building intelligent systems, interactive technologies, and open infrastructure."
    }
  ],
  es: [
    {
      year: "2019",
      title: "ITSOEH",
      description: "Base en ingeniería de software, sistemas computacionales y tecnología aplicada."
    },
    {
      year: "2021",
      title: "VEX Robotics",
      description: "Robótica competitiva, sistemas embebidos y liderazgo técnico."
    },
    {
      year: "2023",
      title: "XJTLU",
      description: "Colaboración en investigación de ciencias de la computación, sistemas multimodales e IA."
    },
    {
      year: "2024 - Hoy",
      title: "Research Engineering",
      description: "Construyendo sistemas inteligentes, tecnologías interactivas e infraestructura abierta."
    }
  ],
  "zh-cn": [
    {
      year: "2019",
      title: "ITSOEH",
      description: "软件工程、计算机系统与应用技术基础。"
    },
    {
      year: "2021",
      title: "VEX Robotics",
      description: "竞技机器人、嵌入式系统与技术领导力。"
    },
    {
      year: "2023",
      title: "XJTLU",
      description: "计算机科学、多模态系统与 AI 研究协作。"
    },
    {
      year: "2024 - 至今",
      title: "研究工程",
      description: "构建智能系统、交互技术与开放基础设施。"
    }
  ]
};
