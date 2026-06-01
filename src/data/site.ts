export type Locale = "en" | "es" | "zh-cn";

export type IconName =
  | "arrow-up-right"
  | "arrow-down"
  | "download"
  | "location"
  | "university"
  | "globe"
  | "flask"
  | "academy"
  | "community"
  | "bridge"
  | "code"
  | "book"
  | "github"
  | "linkedin"
  | "email";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroPill {
  icon: IconName;
  label: string;
}

export interface MissionMetric {
  label: string;
  value: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export const defaultLocale: Locale = "en";

export const localeOrder: Locale[] = ["en", "es", "zh-cn"];

export const localePaths: Record<Locale, string> = {
  en: "/en/",
  es: "/es/",
  "zh-cn": "/zh-cn/"
};

export const languageOptions: Array<{ locale: Locale; label: string; name: string }> = [
  { locale: "en", label: "EN", name: "American English" },
  { locale: "es", label: "ES", name: "Español de México" },
  { locale: "zh-cn", label: "中文", name: "简体中文" }
];

export const siteText: Record<
  Locale,
  {
    langAttr: string;
    metaTitle: string;
    metaDescription: string;
    nav: {
      brand: string;
      links: NavItem[];
      connect: string;
      languageLabel: string;
    };
    hero: {
      eyebrow: string;
      headline: string;
      subtitle: string;
      pills: HeroPill[];
      primaryCta: string;
      secondaryCta: string;
      portraitAlt: string;
      focusEyebrow: string;
      focusTitle: string;
      focusMeta: string;
      focusNote: string;
    };
    ecosystem: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
    };
    mission: {
      eyebrow: string;
      title: string;
      description: string;
      metrics: MissionMetric[];
    };
    projects: {
      eyebrow: string;
      viewAll: string;
    };
    currently: {
      eyebrow: string;
      viewMore: string;
    };
    researchInterests: {
      eyebrow: string;
      title: string;
      description: string;
      interests: string[];
    };
    publications: {
      eyebrow: string;
      viewAll: string;
    };
    timeline: {
      eyebrow: string;
      viewAll: string;
    };
    footer: {
      brand: string;
      tagline: string;
      bridge: string;
      timeLabel: string;
      bottom: string;
      closing: string;
      columns: FooterColumn[];
    };
  }
> = {
  en: {
    langAttr: "en-US",
    metaTitle: "José Manuel Cortés Cerón | deepdevjose",
    metaDescription:
      "Premium personal portfolio for José Manuel Cortés Cerón, an engineer, researcher, and builder working across AI, software, education, Mexico, and China.",
    nav: {
      brand: "deepdevjose",
      connect: "Let's connect",
      languageLabel: "Language",
      links: [
        { label: "Projects", href: "#projects" },
        { label: "Research", href: "#research" },
        { label: "About", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "Software Engineer & AI Researcher",
      headline: "José Manuel Cortés Cerón",
      subtitle:
        "Architecting low-latency AI systems. Specializing in browser-native inference, robotics telemetry, and high-performance interactive computing.",
      pills: [
        { icon: "code", label: "Information Technology" },
        { icon: "university", label: "XJTLU Research" },
        { icon: "location", label: "Hidalgo / Suzhou" }
      ],
      primaryCta: "Selected Projects",
      secondaryCta: "CV",
      portraitAlt: "Grayscale portrait of José Manuel Cortés Cerón",
      focusEyebrow: "Current Research",
      focusTitle: "VISION-LANGUAGE RUNTIME",
      focusMeta: "WebGPU Inference",
      focusNote: "50ms latency with 60% memory footprint reduction via kernel fusion and quantisation."
    },
    ecosystem: {
      eyebrow: "Research Ecosystem",
      title: "Engineering for scale and impact.",
      description:
        "Integrating browser AI, robotics telemetry, edge devices, and knowledge platforms into systems that can be measured, shipped, and improved.",
      cta: "View Selected Projects"
    },
    mission: {
      eyebrow: "Current Mission",
      title: "Building Applied AI Systems.",
      description:
        "Research, tools, and open systems that turn multimodal models, telemetry, and interactive interfaces into usable products.",
      metrics: [
        { label: "Core", value: "Edge Computing & IoT" },
        { label: "Bridge", value: "XJTLU research" },
        { label: "Method", value: "Execution with metrics" }
      ]
    },
    projects: {
      eyebrow: "Selected Projects",
      viewAll: "View all projects"
    },
    currently: {
      eyebrow: "Current Focus",
      viewMore: "See more updates"
    },
    researchInterests: {
      eyebrow: "Research Interests",
      title: "Areas of focus shaping the work.",
      description:
        "The through-line is research engineering: building systems that connect multimodal AI, robotics telemetry, browser-native inference, and interactive computing.",
      interests: [
        "Browser-Native Inference",
        "Robotics Telemetry",
        "Digital Twins",
        "Multimodal AI",
        "Interactive Computing",
        "Human-Centered Systems"
      ]
    },
    publications: {
      eyebrow: "Selected Publications",
      viewAll: "View all"
    },
    timeline: {
      eyebrow: "Research & Engineering Journey",
      viewAll: "View full timeline"
    },
    footer: {
      brand: "deepdevjose",
      tagline: "Research Engineer",
      bridge: "Artificial Intelligence\nInformation Technology Engineering\nInteractive Computing",
      timeLabel: "Distributed local time",
      bottom: "© 2026 José Manuel Cortés Cerón",
      closing: "Researching, designing and building the next generation of computing systems.",
      columns: [
        {
          title: "Explore",
          links: [
            { label: "Projects", href: "#projects" },
            { label: "Research", href: "#research" },
            { label: "Articles & Publications", href: "#writing" }
          ]
        },
        {
          title: "Research",
          links: [
            { label: "BitByBit Academy", href: "https://nexus-aax.pages.dev/es/" },
            { label: "Articles & Publications", href: "#writing" }
          ]
        },
        {
          title: "Contact",
          links: [
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/deepdevjose/" },
            { label: "Email", href: "mailto:deepdevjose@itsoeh.edu.mx?subject=Engineering%20Opportunity%20-%20%5BCompany%20Name%5D" }
          ]
        }
      ]
    }
  },
  es: {
    langAttr: "es-MX",
    metaTitle: "José Manuel Cortés Cerón | deepdevjose",
    metaDescription:
      "Portafolio personal de José Manuel Cortés Cerón, ingeniero, investigador y creador que trabaja en IA, software, educación, México y China.",
    nav: {
      brand: "deepdevjose",
      connect: "Conectemos",
      languageLabel: "Idioma",
      links: [
        { label: "Proyectos", href: "#projects" },
        { label: "Investigación", href: "#research" },
        { label: "Acerca", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "Ingeniero de software e investigador en IA",
      headline: "José Manuel Cortés Cerón",
      subtitle:
        "Diseño y construyo sistemas de IA de baja latencia. Me especializo en inferencia nativa en navegador, telemetría robótica y computación interactiva de alto rendimiento.",
      pills: [
        { icon: "code", label: "Tecnologías de la Información" },
        { icon: "university", label: "Investigación en XJTLU" },
        { icon: "location", label: "Hidalgo / Suzhou" }
      ],
      primaryCta: "Proyectos seleccionados",
      secondaryCta: "CV",
      portraitAlt: "Retrato en escala de grises de José Manuel Cortés Cerón",
      focusEyebrow: "Investigación actual",
      focusTitle: "RUNTIME VISION-LANGUAGE",
      focusMeta: "Inferencia con WebGPU",
      focusNote: "50 ms de latencia y 60% menos huella de memoria mediante fusión de kernels y cuantización."
    },
    ecosystem: {
      eyebrow: "Ecosistema de investigación",
      title: "Ingeniería para escala e impacto.",
      description:
        "Integro IA en navegador, telemetría robótica, dispositivos edge y plataformas de conocimiento en sistemas medibles, entregables y mejorables.",
      cta: "Ver proyectos seleccionados"
    },
    mission: {
      eyebrow: "Misión actual",
      title: "Construyendo sistemas de IA aplicados.",
      description:
        "Investigación, herramientas y sistemas abiertos que convierten modelos multimodales, telemetría e interfaces interactivas en productos útiles.",
      metrics: [
        { label: "Centro", value: "Edge Computing e IoT" },
        { label: "Puente", value: "Investigación en XJTLU" },
        { label: "Método", value: "Ejecución con métricas" }
      ]
    },
    projects: {
      eyebrow: "Proyectos seleccionados",
      viewAll: "Ver proyectos"
    },
    currently: {
      eyebrow: "Enfoque actual",
      viewMore: "Ver más actualizaciones"
    },
    researchInterests: {
      eyebrow: "Intereses de investigación",
      title: "Áreas de enfoque que dan forma al trabajo.",
      description:
        "La línea principal es research engineering: construir sistemas que conecten IA multimodal, telemetría robótica, inferencia nativa en navegador y computación interactiva.",
      interests: [
        "Inferencia nativa en navegador",
        "Telemetría robótica",
        "Gemelos digitales",
        "IA multimodal",
        "Computación interactiva",
        "Sistemas centrados en las personas"
      ]
    },
    publications: {
      eyebrow: "Publicaciones seleccionadas",
      viewAll: "Ver todas"
    },
    timeline: {
      eyebrow: "Trayectoria de investigación e ingeniería",
      viewAll: "Ver trayectoria"
    },
    footer: {
      brand: "deepdevjose",
      tagline: "Ingeniero de investigación",
      bridge: "Inteligencia artificial\nIngeniería en Tecnologías de la Información\nComputación interactiva",
      timeLabel: "Hora local distribuida",
      bottom: "© 2026 José Manuel Cortés Cerón",
      closing: "Investigando, diseñando y construyendo la próxima generación de sistemas de cómputo.",
      columns: [
        {
          title: "Explorar",
          links: [
            { label: "Proyectos", href: "#projects" },
            { label: "Investigación", href: "#research" },
            { label: "Artículos y publicaciones", href: "#writing" }
          ]
        },
        {
          title: "Investigación",
          links: [
            { label: "BitByBit Academy", href: "https://nexus-aax.pages.dev/es/" },
            { label: "Artículos y publicaciones", href: "#writing" }
          ]
        },
        {
          title: "Contacto",
          links: [
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/deepdevjose/" },
            { label: "Correo", href: "mailto:deepdevjose@itsoeh.edu.mx?subject=Engineering%20Opportunity%20-%20%5BCompany%20Name%5D" }
          ]
        }
      ]
    }
  },
  "zh-cn": {
    langAttr: "zh-CN",
    metaTitle: "José Manuel Cortés Cerón | deepdevjose",
    metaDescription:
      "José Manuel Cortés Cerón 的个人作品集：工程师、研究者、创造者，专注 AI、软件、教育，以及墨西哥与中国之间的技术连接。",
    nav: {
      brand: "deepdevjose",
      connect: "联系一下",
      languageLabel: "语言",
      links: [
        { label: "项目", href: "#projects" },
        { label: "研究", href: "#research" },
        { label: "关于", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "软件工程师 & AI 研究者",
      headline: "José Manuel Cortés Cerón",
      subtitle:
        "构建低延迟 AI 系统架构。专注浏览器原生推理、机器人遥测与高性能交互式计算。",
      pills: [
        { icon: "code", label: "信息技术" },
        { icon: "university", label: "XJTLU 研究" },
        { icon: "location", label: "Hidalgo / Suzhou" }
      ],
      primaryCta: "精选项目",
      secondaryCta: "简历",
      portraitAlt: "José Manuel Cortés Cerón 的黑白肖像",
      focusEyebrow: "当前研究",
      focusTitle: "VISION-LANGUAGE RUNTIME",
      focusMeta: "WebGPU 推理",
      focusNote: "通过内核融合与量化实现 50ms 延迟，并降低 60% 内存占用。"
    },
    ecosystem: {
      eyebrow: "研究生态",
      title: "面向规模与影响力的工程。",
      description:
        "将浏览器 AI、机器人遥测、边缘设备与知识平台整合为可衡量、可交付、可持续改进的系统。",
      cta: "查看精选项目"
    },
    mission: {
      eyebrow: "当前使命",
      title: "构建应用型 AI 系统。",
      description: "研究、工具与开放系统，将多模态模型、遥测和交互界面转化为可用产品。",
      metrics: [
        { label: "核心", value: "边缘计算与 IoT" },
        { label: "桥梁", value: "XJTLU 研究" },
        { label: "方法", value: "以指标驱动执行" }
      ]
    },
    projects: {
      eyebrow: "精选项目",
      viewAll: "查看全部项目"
    },
    currently: {
      eyebrow: "当前重点",
      viewMore: "查看更多更新"
    },
    researchInterests: {
      eyebrow: "研究方向",
      title: "正在塑造工作的重点领域。",
      description:
        "主线是 research engineering：构建连接多模态 AI、机器人遥测、浏览器原生推理与交互式计算的系统。",
      interests: [
        "浏览器原生推理",
        "机器人遥测",
        "数字孪生",
        "多模态 AI",
        "交互式计算",
        "以人为中心的系统"
      ]
    },
    publications: {
      eyebrow: "精选出版物",
      viewAll: "查看全部"
    },
    timeline: {
      eyebrow: "研究与工程历程",
      viewAll: "查看完整经历"
    },
    footer: {
      brand: "deepdevjose",
      tagline: "研究工程师",
      bridge: "人工智能\n信息技术工程\n交互式计算",
      timeLabel: "分布式本地时间",
      bottom: "© 2026 José Manuel Cortés Cerón",
      closing: "研究、设计并构建下一代计算系统。",
      columns: [
        {
          title: "浏览",
          links: [
            { label: "项目", href: "#projects" },
            { label: "研究", href: "#research" },
            { label: "文章与发表", href: "#writing" }
          ]
        },
        {
          title: "研究",
          links: [
            { label: "BitByBit Academy", href: "https://nexus-aax.pages.dev/es/" },
            { label: "文章与发表", href: "#writing" }
          ]
        },
        {
          title: "联系",
          links: [
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/deepdevjose/" },
            { label: "邮箱", href: "mailto:deepdevjose@itsoeh.edu.mx?subject=Engineering%20Opportunity%20-%20%5BCompany%20Name%5D" }
          ]
        }
      ]
    }
  }
};
