import type { Locale } from "./site";

export interface Project {
  title: string;
  category: string;
  description: string;
  problem: string;
  metrics: string[];
  stack: string[];
  href: string;
  liveHref?: string;
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
        "Browser-native multimodal inference runtime focused on local execution, low-latency interaction, and memory-aware WebGPU optimization.",
      problem:
        "Makes vision-language AI usable without sending camera frames to a server, reducing privacy risk and API dependency.",
      metrics: ["50ms target latency", "60% faster startup", "50% faster inference", "0 API calls"],
      stack: ["WebGPU", "FastVLM-0.5B", "Vanilla JS"],
      href: "https://github.com/deepdevjose/Vision-Language-Runtime",
      liveHref: "https://vision-language-runtime.pages.dev/",
      cta: "View repository",
      image: "/images/project-vlr.svg",
      imageAlt: "Vision Language Runtime flow from camera input to generated text and reasoning"
    },
    {
      title: "Arm Health AI",
      category: "Research",
      description:
        "Robotic-arm telemetry and digital twin prototype with simulated MQTT pipelines and RUL prediction.",
      problem:
        "Turns reactive industrial maintenance into predictive decisions before one failing joint stops a production line.",
      metrics: ["$22k/min downtime risk", ">95% target reliability", "72+ hour failure lead time", "J1-J6 telemetry"],
      stack: ["Next.js", "LSTM", "Three.js", "IoT"],
      href: "https://github.com/deepdevjose/Arm-SaaS",
      liveHref: "https://arm-saa-s.vercel.app/en-US",
      cta: "View repository",
      image: "/images/project-arm-health.svg",
      imageAlt: "Arm Health AI robotic arm telemetry dashboard with MQTT streams and RUL prediction"
    },
    {
      title: "HelioSync",
      category: "Engineering",
      description:
        "Real-time monitoring platform combining embedded systems, telemetry, and energy analytics.",
      problem:
        "Helps solar users understand orientation, tracking mode, and sunlight context instead of reading raw panel numbers alone.",
      metrics: ["Google/email auth", "Persistent sessions", "3D solar dashboard", "es-MX + EN"],
      stack: ["C++", "Firebase", "React", "3D UI"],
      href: "https://github.com/deepdevjose/HelioSync",
      liveHref: "https://heliosync-382.pages.dev/login",
      cta: "View repository",
      image: "/images/project-heliosync.svg",
      imageAlt: "HelioSync 3D solar panel with live energy telemetry"
    },
    {
      title: "Ghost Engineer",
      category: "Engineering",
      description: "AI-assisted engineering workspace designed to accelerate software development and technical decision-making.",
      problem:
        "Reconstructs repository context locally so teams can produce docs, test plans, reports, and refactor guidance from codebase evidence.",
      metrics: ["Local deterministic analysis", ".ghost workspace", "Node 22.15+ CLI", "Bob-powered workflows"],
      stack: ["TypeScript", "TUI", "CLI", "IBM Bob"],
      href: "https://github.com/deepdevjose/ghost-engineer",
      cta: "View repository",
      image: "/images/project-ghost.svg",
      imageAlt: "Ghost Engineer black terminal with AI-assisted engineering output"
    },
    {
      title: "Byron Galvez Virtual Museum",
      category: "Cultural Computing",
      description:
        "Three.js/WebGL museum for digital cultural preservation with guided rooms, artwork interaction, and curatorial mediation.",
      problem:
        "Preserves and explains cultural work as an interactive spatial experience, not as a static image archive.",
      metrics: ["7 thematic rooms", "Pointer lock + mobile controls", "Artwork JSON catalog", "Static WebGL deployment"],
      stack: ["Three.js", "WebGL", "JavaScript", "JSON"],
      href: "https://github.com/deepdevjose/Byron-s-virtual-museum",
      liveHref: "https://deepdevjose.github.io/Byron-s-virtual-museum/",
      cta: "View repository",
      image: "/images/project-byron.svg",
      imageAlt: "Byron Galvez virtual museum gallery rendered as a WebGL cultural space"
    },
    {
      title: "BitByBit Terminal Quest",
      category: "Education",
      description:
        "Gamified multi-OS terminal academy with missions, XP, avatars, progress tracking, and real troubleshooting challenges.",
      problem:
        "Makes command-line learning less intimidating by turning Linux, PowerShell, and macOS skills into structured practice.",
      metrics: ["Multi-OS curriculum", "Offline progress cache", "Supabase-ready RLS", "Cloudflare static output"],
      stack: ["Astro", "React", "Dexie", "Supabase"],
      href: "https://github.com/deepdevjose/bitbybit-terminal-quest",
      liveHref: "https://nexus-aax.pages.dev/es/",
      cta: "View repository",
      image: "/images/project-ghost.svg",
      imageAlt: "Terminal learning academy interface with missions and progress"
    },
    {
      title: "Java Tutor Dash",
      category: "Education",
      description:
        "Student dashboard for Java courses with secure auth, verified accounts, progress stats, and GitHub profile integration.",
      problem:
        "Reduces course platform friction by letting students sign in with email, enrollment ID, or GitHub username.",
      metrics: ["O(1) identifier lookup", "20 min inactivity logout", "Atomic uniqueness transactions", "A11y-first modals"],
      stack: ["Firebase", "Firestore", "GitHub API", "Cloudflare Pages"],
      href: "https://github.com/deepdevjose/java-tutor-dash",
      liveHref: "https://java-tutor-dash.pages.dev/",
      cta: "View repository",
      image: "/images/project-vlr.svg",
      imageAlt: "Java course dashboard with progress metrics and secure session management"
    },
    {
      title: "OpenQR",
      category: "Tooling",
      description:
        "Frictionless QR generator with SVG and high-resolution PNG export, built to avoid lock-ins, signups, and expiring links.",
      problem:
        "Gives creators a useful QR tool without predatory signups, subscriptions, watermarks, or low-quality downloads.",
      metrics: ["No login", "No subscriptions", "SVG export", "High-res PNG"],
      stack: ["Next.js", "React", "CSS Modules", "qr-code-styling"],
      href: "https://github.com/deepdevjose/OpenQR",
      liveHref: "https://open-qr-mocha.vercel.app",
      cta: "View repository",
      image: "/images/project-heliosync.svg",
      imageAlt: "OpenQR generator interface with retro styling and export controls"
    }
  ],
  es: [
    {
      title: "Vision Language Runtime",
      category: "Investigación",
      description:
        "Runtime multimodal nativo del navegador enfocado en ejecución local, baja latencia de interacción y optimización WebGPU consciente de memoria.",
      problem:
        "Permite usar IA vision-language sin mandar la cámara a un servidor, reduciendo riesgo de privacidad y dependencia de APIs.",
      metrics: ["50 ms de latencia objetivo", "60% arranque más rápido", "50% inferencia más rápida", "0 llamadas a API"],
      stack: ["WebGPU", "FastVLM-0.5B", "Vanilla JS"],
      href: "https://github.com/deepdevjose/Vision-Language-Runtime",
      liveHref: "https://vision-language-runtime.pages.dev/",
      cta: "Ver repositorio",
      image: "/images/project-vlr.svg",
      imageAlt: "Flujo de Vision Language Runtime de cámara a texto generado y razonamiento"
    },
    {
      title: "Arm Health AI",
      category: "Investigación",
      description:
        "Prototipo de telemetría y gemelo digital para brazo robótico con pipelines MQTT simulados y predicción RUL.",
      problem:
        "Convierte mantenimiento reactivo en decisiones predictivas antes de que una falla detenga una línea de producción.",
      metrics: ["Riesgo de $22k/min de paro", ">95% confiabilidad objetivo", "72+ horas de anticipación", "Telemetría J1-J6"],
      stack: ["Next.js", "LSTM", "Three.js", "IoT"],
      href: "https://github.com/deepdevjose/Arm-SaaS",
      liveHref: "https://arm-saa-s.vercel.app/en-US",
      cta: "Ver repositorio",
      image: "/images/project-arm-health.svg",
      imageAlt: "Dashboard de Arm Health AI con telemetría MQTT y predicción RUL"
    },
    {
      title: "HelioSync",
      category: "Ingeniería",
      description:
        "Plataforma de monitoreo en tiempo real que combina sistemas embebidos, telemetría y analítica energética.",
      problem:
        "Ayuda a usuarios solares a entender orientación, modo de seguimiento y contexto del sol sin quedarse solo con números.",
      metrics: ["Auth Google/correo", "Sesiones persistentes", "Dashboard solar 3D", "es-MX + EN"],
      stack: ["C++", "Firebase", "React", "UI 3D"],
      href: "https://github.com/deepdevjose/HelioSync",
      liveHref: "https://heliosync-382.pages.dev/login",
      cta: "Ver repositorio",
      image: "/images/project-heliosync.svg",
      imageAlt: "Panel solar 3D de HelioSync con telemetría de energía"
    },
    {
      title: "Ghost Engineer",
      category: "Ingeniería",
      description: "Espacio de trabajo asistido por IA diseñado para acelerar el desarrollo de software y la toma de decisiones técnicas.",
      problem:
        "Reconstruye contexto del repositorio localmente para generar documentación, planes de prueba, reportes y guías de refactor con evidencia.",
      metrics: ["Análisis local determinista", "Workspace .ghost", "CLI Node 22.15+", "Flujos con IBM Bob"],
      stack: ["TypeScript", "TUI", "CLI", "IBM Bob"],
      href: "https://github.com/deepdevjose/ghost-engineer",
      cta: "Ver repositorio",
      image: "/images/project-ghost.svg",
      imageAlt: "Terminal negra de Ghost Engineer con salida de ingeniería asistida por IA"
    },
    {
      title: "Museo Virtual Byron Galvez",
      category: "Computación cultural",
      description:
        "Museo Three.js/WebGL para preservación cultural digital con salas guiadas, interacción con obra y mediación curatorial.",
      problem:
        "Preserva y explica obra cultural como una experiencia espacial interactiva, no como un archivo estático de imágenes.",
      metrics: ["7 salas temáticas", "Pointer lock + controles móviles", "Catálogo JSON de obra", "Deploy WebGL estático"],
      stack: ["Three.js", "WebGL", "JavaScript", "JSON"],
      href: "https://github.com/deepdevjose/Byron-s-virtual-museum",
      liveHref: "https://deepdevjose.github.io/Byron-s-virtual-museum/",
      cta: "Ver repositorio",
      image: "/images/project-byron.svg",
      imageAlt: "Galería del museo virtual Byron Galvez renderizada como espacio cultural WebGL"
    },
    {
      title: "BitByBit Terminal Quest",
      category: "Educación",
      description:
        "Academia gamificada de terminal multi-OS con misiones, XP, avatares, progreso y retos reales de troubleshooting.",
      problem:
        "Hace menos intimidante aprender terminal convirtiendo Linux, PowerShell y macOS en práctica guiada.",
      metrics: ["Curriculum multi-OS", "Progreso offline", "RLS listo para Supabase", "Salida estática Cloudflare"],
      stack: ["Astro", "React", "Dexie", "Supabase"],
      href: "https://github.com/deepdevjose/bitbybit-terminal-quest",
      liveHref: "https://nexus-aax.pages.dev/es/",
      cta: "Ver repositorio",
      image: "/images/project-ghost.svg",
      imageAlt: "Academia de terminal con misiones y progreso"
    },
    {
      title: "Java Tutor Dash",
      category: "Educación",
      description:
        "Dashboard para cursos de Java con auth segura, cuentas verificadas, estadísticas de progreso e integración con GitHub.",
      problem:
        "Reduce fricción en plataformas educativas permitiendo entrar con correo, matrícula o usuario de GitHub.",
      metrics: ["Lookup O(1)", "Logout a los 20 min", "Transacciones atómicas", "Modales accesibles"],
      stack: ["Firebase", "Firestore", "GitHub API", "Cloudflare Pages"],
      href: "https://github.com/deepdevjose/java-tutor-dash",
      liveHref: "https://java-tutor-dash.pages.dev/",
      cta: "Ver repositorio",
      image: "/images/project-vlr.svg",
      imageAlt: "Dashboard de curso Java con métricas de progreso y sesión segura"
    },
    {
      title: "OpenQR",
      category: "Herramientas",
      description:
        "Generador QR sin fricción con exportación SVG y PNG de alta resolución, sin lock-in, registros ni links que expiran.",
      problem:
        "Da a creadores una herramienta QR útil sin registros forzados, suscripciones, marcas de agua ni descargas borrosas.",
      metrics: ["Sin login", "Sin suscripciones", "Export SVG", "PNG high-res"],
      stack: ["Next.js", "React", "CSS Modules", "qr-code-styling"],
      href: "https://github.com/deepdevjose/OpenQR",
      liveHref: "https://open-qr-mocha.vercel.app",
      cta: "Ver repositorio",
      image: "/images/project-heliosync.svg",
      imageAlt: "Interfaz de OpenQR con controles de exportación"
    }
  ],
  "zh-cn": [
    {
      title: "Vision Language Runtime",
      category: "研究",
      description: "浏览器原生多模态推理运行时，专注本地执行、低延迟交互与内存友好的 WebGPU 优化。",
      problem: "让视觉语言 AI 在本地运行，避免摄像头数据上传到服务器。",
      metrics: ["50ms 目标延迟", "启动快 60%", "推理快 50%", "0 API 调用"],
      stack: ["WebGPU", "FastVLM-0.5B", "Vanilla JS"],
      href: "https://github.com/deepdevjose/Vision-Language-Runtime",
      liveHref: "https://vision-language-runtime.pages.dev/",
      cta: "查看仓库",
      image: "/images/project-vlr.svg",
      imageAlt: "Vision Language Runtime 从相机输入到生成文本和推理的流程"
    },
    {
      title: "Arm Health AI",
      category: "研究",
      description: "面向机械臂遥测与数字孪生的原型系统，包含 MQTT 仿真管线与 RUL 预测。",
      problem: "把被动维修转为预测性维护，在产线停机前发现关键关节风险。",
      metrics: ["$22k/min 停机风险", ">95% 目标可靠性", "提前 72+ 小时预警", "J1-J6 遥测"],
      stack: ["Next.js", "LSTM", "Three.js", "IoT"],
      href: "https://github.com/deepdevjose/Arm-SaaS",
      liveHref: "https://arm-saa-s.vercel.app/en-US",
      cta: "查看仓库",
      image: "/images/project-arm-health.svg",
      imageAlt: "Arm Health AI 机器人手臂遥测仪表盘、MQTT 数据流与 RUL 预测"
    },
    {
      title: "HelioSync",
      category: "工程",
      description: "结合嵌入式系统、遥测与能源分析的实时监测平台。",
      problem: "帮助太阳能用户理解方向、追踪模式和日照状态，而不是只看原始数字。",
      metrics: ["Google/邮箱登录", "持久会话", "3D 太阳能仪表盘", "es-MX + EN"],
      stack: ["C++", "Firebase", "React", "3D UI"],
      href: "https://github.com/deepdevjose/HelioSync",
      liveHref: "https://heliosync-382.pages.dev/login",
      cta: "查看仓库",
      image: "/images/project-heliosync.svg",
      imageAlt: "HelioSync 的 3D 太阳能面板与能源遥测"
    },
    {
      title: "Ghost Engineer",
      category: "工程",
      description: "面向软件开发与技术决策提速的 AI 辅助工程工作台。",
      problem: "在本地重建代码库上下文，为文档、测试计划、报告和重构建议提供证据。",
      metrics: ["本地确定性分析", ".ghost 工作区", "Node 22.15+ CLI", "IBM Bob 工作流"],
      stack: ["TypeScript", "TUI", "CLI", "IBM Bob"],
      href: "https://github.com/deepdevjose/ghost-engineer",
      cta: "查看仓库",
      image: "/images/project-ghost.svg",
      imageAlt: "Ghost Engineer 黑色终端中的 AI 辅助工程输出"
    },
    {
      title: "Byron Galvez 虚拟博物馆",
      category: "文化计算",
      description: "使用 Three.js/WebGL 构建的数字文化保护博物馆，包含导览空间、作品互动与策展文本。",
      problem: "把文化作品保存为可探索的空间体验，而不是静态图片库。",
      metrics: ["7 个主题展厅", "桌面与移动控制", "作品 JSON 目录", "静态 WebGL 部署"],
      stack: ["Three.js", "WebGL", "JavaScript", "JSON"],
      href: "https://github.com/deepdevjose/Byron-s-virtual-museum",
      liveHref: "https://deepdevjose.github.io/Byron-s-virtual-museum/",
      cta: "查看仓库",
      image: "/images/project-byron.svg",
      imageAlt: "Byron Galvez 虚拟博物馆的 WebGL 文化空间"
    },
    {
      title: "BitByBit Terminal Quest",
      category: "教育",
      description: "多系统命令行学习平台，通过任务、XP、头像、进度与真实排错挑战进行游戏化学习。",
      problem: "把 Linux、PowerShell 与 macOS 命令行学习变成结构化练习，降低入门门槛。",
      metrics: ["多系统课程", "离线进度缓存", "Supabase RLS ready", "Cloudflare 静态输出"],
      stack: ["Astro", "React", "Dexie", "Supabase"],
      href: "https://github.com/deepdevjose/bitbybit-terminal-quest",
      liveHref: "https://nexus-aax.pages.dev/es/",
      cta: "查看仓库",
      image: "/images/project-ghost.svg",
      imageAlt: "带任务与进度的终端学习平台"
    },
    {
      title: "Java Tutor Dash",
      category: "教育",
      description: "Java 课程学生仪表盘，包含安全登录、账户验证、进度统计与 GitHub 头像集成。",
      problem: "支持邮箱、学号或 GitHub 用户名登录，减少课程平台使用摩擦。",
      metrics: ["O(1) 标识查询", "20 分钟自动登出", "原子唯一性事务", "无障碍弹窗"],
      stack: ["Firebase", "Firestore", "GitHub API", "Cloudflare Pages"],
      href: "https://github.com/deepdevjose/java-tutor-dash",
      liveHref: "https://java-tutor-dash.pages.dev/",
      cta: "查看仓库",
      image: "/images/project-vlr.svg",
      imageAlt: "带进度指标和安全会话的 Java 课程仪表盘"
    },
    {
      title: "OpenQR",
      category: "工具",
      description: "无摩擦 QR 生成器，支持 SVG 与高分辨率 PNG 导出，没有注册、订阅或过期链接。",
      problem: "为创作者提供没有强制注册、订阅、水印和低质量下载的 QR 工具。",
      metrics: ["无需登录", "无订阅", "SVG 导出", "高清 PNG"],
      stack: ["Next.js", "React", "CSS Modules", "qr-code-styling"],
      href: "https://github.com/deepdevjose/OpenQR",
      liveHref: "https://open-qr-mocha.vercel.app",
      cta: "查看仓库",
      image: "/images/project-heliosync.svg",
      imageAlt: "OpenQR 生成器界面与导出控制"
    }
  ]
};
