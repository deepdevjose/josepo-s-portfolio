import type { Locale } from "./site";

export interface Project {
  title: string;
  category: string;
  description: string;
  href: string;
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
      href: "#research",
      image: "/images/project-vlr.svg",
      imageAlt: "Vision Language Runtime flow from camera input to generated text and reasoning"
    },
    {
      title: "HelioSync",
      category: "Engineering",
      description:
        "Real-time monitoring platform combining embedded systems, telemetry, and energy analytics.",
      href: "#work",
      image: "/images/project-heliosync.svg",
      imageAlt: "HelioSync 3D solar panel with live energy telemetry"
    },
    {
      title: "Byron Museum",
      category: "Experience",
      description:
        "Peer-reviewed digital heritage platform powered by WebGL, interactive storytelling, and computational media.",
      href: "#work",
      image: "/images/project-byron.svg",
      imageAlt: "Byron Virtual Museum gallery with spotlighted artifacts"
    },
    {
      title: "Ghost Engineer",
      category: "Engineering",
      description: "AI-assisted engineering workspace designed to accelerate software development and technical decision-making.",
      href: "#work",
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
      href: "#research",
      image: "/images/project-vlr.svg",
      imageAlt: "Flujo de Vision Language Runtime de cámara a texto generado y razonamiento"
    },
    {
      title: "HelioSync",
      category: "Ingeniería",
      description:
        "Plataforma de monitoreo en tiempo real que combina sistemas embebidos, telemetría y analítica energética.",
      href: "#work",
      image: "/images/project-heliosync.svg",
      imageAlt: "Panel solar 3D de HelioSync con telemetría de energía"
    },
    {
      title: "Byron Museum",
      category: "Experiencia",
      description:
        "Plataforma de patrimonio digital revisada por pares e impulsada por WebGL, narrativa interactiva y medios computacionales.",
      href: "#work",
      image: "/images/project-byron.svg",
      imageAlt: "Galería de Byron Virtual Museum con artefactos iluminados"
    },
    {
      title: "Ghost Engineer",
      category: "Ingeniería",
      description: "Espacio de trabajo asistido por IA diseñado para acelerar el desarrollo de software y la toma de decisiones técnicas.",
      href: "#work",
      image: "/images/project-ghost.svg",
      imageAlt: "Terminal negra de Ghost Engineer con salida de ingeniería asistida por IA"
    }
  ],
  "zh-cn": [
    {
      title: "Vision Language Runtime",
      category: "研究",
      description: "面向浏览器原生的多模态运行时，通过 WebGPU 将推理延迟降至 50ms，并减少 60% 内存占用。",
      href: "#research",
      image: "/images/project-vlr.svg",
      imageAlt: "Vision Language Runtime 从相机输入到生成文本和推理的流程"
    },
    {
      title: "HelioSync",
      category: "工程",
      description: "结合嵌入式系统、遥测与能源分析的实时监测平台。",
      href: "#work",
      image: "/images/project-heliosync.svg",
      imageAlt: "HelioSync 的 3D 太阳能面板与能源遥测"
    },
    {
      title: "Byron Museum",
      category: "体验",
      description: "由 WebGL、交互叙事与计算媒体驱动的经同行评审的数字遗产平台。",
      href: "#work",
      image: "/images/project-byron.svg",
      imageAlt: "Byron Virtual Museum 中被聚光灯照亮的展品"
    },
    {
      title: "Ghost Engineer",
      category: "工程",
      description: "面向软件开发与技术决策提速的 AI 辅助工程工作台。",
      href: "#work",
      image: "/images/project-ghost.svg",
      imageAlt: "Ghost Engineer 黑色终端中的 AI 辅助工程输出"
    }
  ]
};
