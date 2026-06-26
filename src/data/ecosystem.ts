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
      title: "AI Runtime Systems",
      description:
        "Browser-native inference, model optimization, and interactive multimodal interfaces.",
      cta: "View Vision-Language Runtime",
      href: "https://github.com/deepdevjose/Vision-Language-Runtime"
    },
    {
      icon: "academy",
      visual: "academy",
      title: "Robotics & Telemetry",
      description:
        "MQTT pipelines, sensor data, digital twins, and real-time monitoring.",
      cta: "View Arm Health AI",
      href: "https://github.com/deepdevjose/Arm-SaaS"
    },
    {
      icon: "community",
      visual: "community",
      title: "Educational Infrastructure",
      description:
        "Open learning platforms, documentation systems, and technical workshops.",
      cta: "Visit BitByBit Academy",
      href: "https://nexus-aax.pages.dev/es/"
    },
    {
      icon: "bridge",
      visual: "bridge",
      title: "Research Collaboration",
      description:
        "Applied AI projects across Mexico and China with academic validation.",
      cta: "Read working papers",
      href: "#writing"
    }
  ],
  es: [
    {
      icon: "flask",
      visual: "lab",
      title: "Sistemas runtime de IA",
      description:
        "Inferencia nativa en navegador, optimización de modelos e interfaces multimodales interactivas.",
      cta: "Ver Vision-Language Runtime",
      href: "https://github.com/deepdevjose/Vision-Language-Runtime"
    },
    {
      icon: "academy",
      visual: "academy",
      title: "Robótica y telemetría",
      description:
        "Pipelines MQTT, datos de sensores, gemelos digitales y monitoreo en tiempo real.",
      cta: "Ver Arm Health AI",
      href: "https://github.com/deepdevjose/Arm-SaaS"
    },
    {
      icon: "community",
      visual: "community",
      title: "Infraestructura educativa",
      description:
        "Plataformas abiertas de aprendizaje, documentación y talleres técnicos.",
      cta: "Visitar BitByBit Academy",
      href: "https://nexus-aax.pages.dev/es/"
    },
    {
      icon: "bridge",
      visual: "bridge",
      title: "Colaboración de investigación",
      description:
        "Proyectos de IA aplicada entre México y China con validación académica.",
      cta: "Leer working papers",
      href: "#writing"
    }
  ],
  "zh-cn": [
    {
      icon: "flask",
      visual: "lab",
      title: "AI 运行时系统",
      description: "浏览器原生推理、模型优化与交互式多模态界面。",
      cta: "查看 Vision-Language Runtime",
      href: "https://github.com/deepdevjose/Vision-Language-Runtime"
    },
    {
      icon: "academy",
      visual: "academy",
      title: "机器人与遥测",
      description: "MQTT 管线、传感器数据、数字孪生与实时监控。",
      cta: "查看 Arm Health AI",
      href: "https://github.com/deepdevjose/Arm-SaaS"
    },
    {
      icon: "community",
      visual: "community",
      title: "教育基础设施",
      description: "开放学习平台、文档系统与技术工作坊。",
      cta: "访问 BitByBit Academy",
      href: "https://nexus-aax.pages.dev/es/"
    },
    {
      icon: "bridge",
      visual: "bridge",
      title: "研究合作",
      description: "墨西哥与中国之间经过学术验证的应用 AI 项目。",
      cta: "阅读研究手稿",
      href: "#writing"
    }
  ]
};
