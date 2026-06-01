import type { Locale } from "./site";

export interface Project {
  title: string;
  category: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
}

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      title: "Vision Language Runtime",
      category: "Research",
      description:
        "Browser-native multimodal runtime with 50ms inference latency and 60% lower memory use via WebGPU.",
      href: "https://github.com/deepdevjose/Vision-Language-Runtime",
      cta: "View repository",
      image: "/images/project-vlr.svg",
      imageAlt: "Vision Language Runtime flow from camera input to generated text and reasoning"
    },
    {
      title: "Arm Health AI",
      category: "Research",
      description:
        "Robotic-arm telemetry and digital twin system processing 10k+/s MQTT events with RUL prediction.",
      href: "https://github.com/deepdevjose?tab=repositories&q=Arm%20Health%20AI",
      cta: "View repository",
      image: "/images/project-arm-health.svg",
      imageAlt: "Arm Health AI robotic arm telemetry dashboard with MQTT streams and RUL prediction"
    },
    {
      title: "HelioSync",
      category: "Engineering",
      description:
        "Real-time monitoring platform combining embedded systems, telemetry, and energy analytics.",
      href: "https://github.com/deepdevjose?tab=repositories&q=HelioSync",
      cta: "View repository",
      image: "/images/project-heliosync.svg",
      imageAlt: "HelioSync 3D solar panel with live energy telemetry"
    },
    {
      title: "Ghost Engineer",
      category: "Engineering",
      description: "AI-assisted engineering workspace designed to accelerate software development and technical decision-making.",
      href: "https://github.com/deepdevjose?tab=repositories&q=Ghost",
      cta: "View repository",
      image: "/images/project-ghost.svg",
      imageAlt: "Ghost Engineer black terminal with AI-assisted engineering output"
    }
  ],
  es: [
    {
      title: "Vision Language Runtime",
      category: "Investigación",
      description:
        "Runtime multimodal nativo del navegador con 50 ms de latencia y 60% menos memoria gracias a WebGPU.",
      href: "https://github.com/deepdevjose/Vision-Language-Runtime",
      cta: "Ver repositorio",
      image: "/images/project-vlr.svg",
      imageAlt: "Flujo de Vision Language Runtime de cámara a texto generado y razonamiento"
    },
    {
      title: "Arm Health AI",
      category: "Investigación",
      description:
        "Sistema de telemetría y gemelo digital para brazo robótico con 10k+/s eventos MQTT y predicción RUL.",
      href: "https://github.com/deepdevjose?tab=repositories&q=Arm%20Health%20AI",
      cta: "Ver repositorio",
      image: "/images/project-arm-health.svg",
      imageAlt: "Dashboard de Arm Health AI con telemetría MQTT y predicción RUL"
    },
    {
      title: "HelioSync",
      category: "Ingeniería",
      description:
        "Plataforma de monitoreo en tiempo real que combina sistemas embebidos, telemetría y analítica energética.",
      href: "https://github.com/deepdevjose?tab=repositories&q=HelioSync",
      cta: "Ver repositorio",
      image: "/images/project-heliosync.svg",
      imageAlt: "Panel solar 3D de HelioSync con telemetría de energía"
    },
    {
      title: "Ghost Engineer",
      category: "Ingeniería",
      description: "Espacio de trabajo asistido por IA diseñado para acelerar el desarrollo de software y la toma de decisiones técnicas.",
      href: "https://github.com/deepdevjose?tab=repositories&q=Ghost",
      cta: "Ver repositorio",
      image: "/images/project-ghost.svg",
      imageAlt: "Terminal negra de Ghost Engineer con salida de ingeniería asistida por IA"
    }
  ],
  "zh-cn": [
    {
      title: "Vision Language Runtime",
      category: "研究",
      description: "面向浏览器原生的多模态运行时，通过 WebGPU 将推理延迟降至 50ms，并减少 60% 内存占用。",
      href: "https://github.com/deepdevjose/Vision-Language-Runtime",
      cta: "查看仓库",
      image: "/images/project-vlr.svg",
      imageAlt: "Vision Language Runtime 从相机输入到生成文本和推理的流程"
    },
    {
      title: "Arm Health AI",
      category: "研究",
      description: "面向机器人手臂的遥测与数字孪生系统，处理 10k+/s MQTT 事件并进行 RUL 预测。",
      href: "https://github.com/deepdevjose?tab=repositories&q=Arm%20Health%20AI",
      cta: "查看仓库",
      image: "/images/project-arm-health.svg",
      imageAlt: "Arm Health AI 机器人手臂遥测仪表盘、MQTT 数据流与 RUL 预测"
    },
    {
      title: "HelioSync",
      category: "工程",
      description: "结合嵌入式系统、遥测与能源分析的实时监测平台。",
      href: "https://github.com/deepdevjose?tab=repositories&q=HelioSync",
      cta: "查看仓库",
      image: "/images/project-heliosync.svg",
      imageAlt: "HelioSync 的 3D 太阳能面板与能源遥测"
    },
    {
      title: "Ghost Engineer",
      category: "工程",
      description: "面向软件开发与技术决策提速的 AI 辅助工程工作台。",
      href: "https://github.com/deepdevjose?tab=repositories&q=Ghost",
      cta: "查看仓库",
      image: "/images/project-ghost.svg",
      imageAlt: "Ghost Engineer 黑色终端中的 AI 辅助工程输出"
    }
  ]
};
