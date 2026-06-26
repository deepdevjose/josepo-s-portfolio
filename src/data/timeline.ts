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
      title: "CETis 26",
      description: "Technical foundation in programming, software logic, and applied computing."
    },
    {
      year: "2021",
      title: "VEX Robotics",
      description: "Competitive robotics, embedded systems, and technical leadership."
    },
    {
      year: "2023 - Now",
      title: "ITSOEH",
      description: "ICT Engineering focused on software systems, networks, databases, IoT, and applied AI."
    },
    {
      year: "2025 - Now",
      title: "XJTLU",
      description: "Research collaboration in multimodal AI, telemetry systems, and AI-assisted engineering."
    }
  ],
  es: [
    {
      year: "2019",
      title: "CETis 26",
      description: "Base técnica en programación, lógica de software y computación aplicada."
    },
    {
      year: "2021",
      title: "VEX Robotics",
      description: "Robótica competitiva, sistemas embebidos y liderazgo técnico."
    },
    {
      year: "2023 - Hoy",
      title: "ITSOEH",
      description: "Ingeniería TIC enfocada en sistemas de software, redes, bases de datos, IoT e IA aplicada."
    },
    {
      year: "2025 - Hoy",
      title: "XJTLU",
      description: "Colaboración de investigación en IA multimodal, sistemas de telemetría e ingeniería asistida por IA."
    }
  ],
  "zh-cn": [
    {
      year: "2019",
      title: "CETis 26",
      description: "编程、软件逻辑与应用计算的技术基础。"
    },
    {
      year: "2021",
      title: "VEX Robotics",
      description: "竞技机器人、嵌入式系统与技术领导力。"
    },
    {
      year: "2023 - 至今",
      title: "ITSOEH",
      description: "信息技术工程：软件系统、网络与应用技术。"
    },
    {
      year: "2025 - 至今",
      title: "XJTLU",
      description: "多模态系统、遥测与 AI 辅助工程方向的协作研究。"
    }
  ]
};
