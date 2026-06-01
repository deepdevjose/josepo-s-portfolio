export type Locale = "en" | "es" | "zh-cn";

export type IconName =
  | "arrow-up-right"
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
      timePlace: string;
      missionLabel: string;
      missionValue: string;
      bottom: string;
      closing: string;
      columns: FooterColumn[];
    };
  }
> = {
  en: {
    langAttr: "en-US",
    metaTitle: "Jose Manuel Cortes Ceron | deepdevjose",
    metaDescription:
      "Premium personal portfolio for Jose Manuel Cortes Ceron, an engineer, researcher, and builder working across AI, software, education, Mexico, and China.",
    nav: {
      brand: "deepdevjose",
      connect: "Let's connect",
      languageLabel: "Language",
      links: [
        { label: "Work", href: "#work" },
        { label: "Research", href: "#research" },
        { label: "Writing", href: "#writing" },
        { label: "Speaking", href: "#speaking" },
        { label: "About", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "Software Engineer | AI Full-Stack Development",
      headline: "Jose Manuel Cortes Ceron",
      subtitle:
        "I build low-latency AI systems across browser-native inference, robotics telemetry, and interactive computing, with research collaboration at XJTLU.",
      pills: [
        { icon: "location", label: "Suzhou, China" },
        { icon: "university", label: "XJTLU" },
        { icon: "code", label: "Computer Science" }
      ],
      primaryCta: "Selected Projects",
      secondaryCta: "CV",
      portraitAlt: "Grayscale portrait of Jose Manuel Cortes Ceron",
      focusEyebrow: "Current Research",
      focusTitle: "Browser-Native AI Systems",
      focusMeta: "WebGPU · telemetry · interactive computing",
      focusNote: "Shipping measurable gains in speed, memory, and scale for applied AI systems."
    },
    ecosystem: {
      eyebrow: "Research Ecosystem",
      title: "Systems, research, and infrastructure.",
      description:
        "Research systems, engineering platforms, knowledge infrastructure, and global collaboration. One mission: build durable technical impact.",
      cta: "Explore everything"
    },
    mission: {
      eyebrow: "Current Mission",
      title: "Building Applied AI Systems.",
      description:
        "Research, tools, and open systems that turn multimodal models, telemetry, and interactive interfaces into usable products.",
      metrics: [
        { label: "Core", value: "AI systems" },
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
      bridge: "Artificial Intelligence\nSystems Engineering\nInteractive Computing",
      timeLabel: "Current local time",
      timePlace: "Actopan, Hidalgo",
      missionLabel: "Current mission",
      missionValue: "Open engineering infrastructure",
      bottom: "© 2026 deepdevjose",
      closing: "Researching, designing and building the next generation of computing systems.",
      columns: [
        {
          title: "Explore",
          links: [
            { label: "Work", href: "#work" },
            { label: "Research", href: "#research" },
            { label: "Writing", href: "#writing" }
          ]
        },
        {
          title: "Research",
          links: [
            { label: "Publications", href: "#writing" },
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "Speaking", href: "#speaking" }
          ]
        },
        {
          title: "Contact",
          links: [
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "LinkedIn", href: "https://www.linkedin.com/" },
            { label: "Email", href: "mailto:hello@deepdevjose.com" }
          ]
        }
      ]
    }
  },
  es: {
    langAttr: "es-MX",
    metaTitle: "Jose Manuel Cortes Ceron | deepdevjose",
    metaDescription:
      "Portafolio personal de Jose Manuel Cortes Ceron, ingeniero, investigador y creador que trabaja en IA, software, educación, México y China.",
    nav: {
      brand: "deepdevjose",
      connect: "Conectemos",
      languageLabel: "Idioma",
      links: [
        { label: "Trabajo", href: "#work" },
        { label: "Investigación", href: "#research" },
        { label: "Textos", href: "#writing" },
        { label: "Charlas", href: "#speaking" },
        { label: "Acerca", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "Ingeniero de software | Desarrollo Full-Stack en IA",
      headline: "Jose Manuel Cortes Ceron",
      subtitle:
        "Construyo sistemas de IA de baja latencia en inferencia nativa del navegador, telemetría robótica y computación interactiva, con investigación en XJTLU.",
      pills: [
        { icon: "location", label: "Suzhou, China" },
        { icon: "university", label: "XJTLU" },
        { icon: "code", label: "Ciencias de la Computación" }
      ],
      primaryCta: "Proyectos seleccionados",
      secondaryCta: "CV",
      portraitAlt: "Retrato en escala de grises de Jose Manuel Cortes Ceron",
      focusEyebrow: "Investigación actual",
      focusTitle: "Sistemas de IA nativos del navegador",
      focusMeta: "WebGPU · telemetría · computación interactiva",
      focusNote: "Entregando mejoras medibles en velocidad, memoria y escala para sistemas de IA aplicados."
    },
    ecosystem: {
      eyebrow: "Ecosistema de investigación",
      title: "Sistemas, investigación e infraestructura.",
      description:
        "Sistemas de investigación, plataformas de ingeniería, infraestructura de conocimiento y colaboración global. Una misión: generar impacto técnico duradero.",
      cta: "Explorar todo"
    },
    mission: {
      eyebrow: "Misión actual",
      title: "Construyendo sistemas de IA aplicados.",
      description:
        "Investigación, herramientas y sistemas abiertos que convierten modelos multimodales, telemetría e interfaces interactivas en productos útiles.",
      metrics: [
        { label: "Centro", value: "Sistemas de IA" },
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
      bridge: "Inteligencia artificial\nIngeniería de sistemas\nComputación interactiva",
      timeLabel: "Hora local actual",
      timePlace: "Actopan, Hidalgo",
      missionLabel: "Misión actual",
      missionValue: "Infraestructura de ingeniería abierta",
      bottom: "© 2026 deepdevjose",
      closing: "Investigando, diseñando y construyendo la próxima generación de sistemas de cómputo.",
      columns: [
        {
          title: "Explorar",
          links: [
            { label: "Trabajo", href: "#work" },
            { label: "Investigación", href: "#research" },
            { label: "Textos", href: "#writing" }
          ]
        },
        {
          title: "Investigación",
          links: [
            { label: "Publicaciones", href: "#writing" },
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "Charlas", href: "#speaking" }
          ]
        },
        {
          title: "Contacto",
          links: [
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "LinkedIn", href: "https://www.linkedin.com/" },
            { label: "Correo", href: "mailto:hello@deepdevjose.com" }
          ]
        }
      ]
    }
  },
  "zh-cn": {
    langAttr: "zh-CN",
    metaTitle: "Jose Manuel Cortes Ceron | deepdevjose",
    metaDescription:
      "Jose Manuel Cortes Ceron 的个人作品集：工程师、研究者、创造者，专注 AI、软件、教育，以及墨西哥与中国之间的技术连接。",
    nav: {
      brand: "deepdevjose",
      connect: "联系一下",
      languageLabel: "语言",
      links: [
        { label: "项目", href: "#work" },
        { label: "研究", href: "#research" },
        { label: "写作", href: "#writing" },
        { label: "演讲", href: "#speaking" },
        { label: "关于", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "软件工程师 | AI 全栈开发",
      headline: "Jose Manuel Cortes Ceron",
      subtitle:
        "我专注于浏览器原生推理、机器人遥测与交互式计算中的低延迟 AI 系统，并在 XJTLU 开展研究协作。",
      pills: [
        { icon: "location", label: "中国苏州" },
        { icon: "university", label: "西交利物浦大学" },
        { icon: "code", label: "计算机科学" }
      ],
      primaryCta: "精选项目",
      secondaryCta: "简历",
      portraitAlt: "Jose Manuel Cortes Ceron 的黑白肖像",
      focusEyebrow: "当前研究",
      focusTitle: "浏览器原生 AI 系统",
      focusMeta: "WebGPU · 遥测 · 交互式计算",
      focusNote: "为应用型 AI 系统交付可衡量的速度、内存和规模提升。"
    },
    ecosystem: {
      eyebrow: "研究生态",
      title: "系统、研究与基础设施。",
      description:
        "研究系统、工程平台、知识基础设施与全球协作。目标一致：创造持久的技术影响。",
      cta: "探索全貌"
    },
    mission: {
      eyebrow: "当前使命",
      title: "构建应用型 AI 系统。",
      description: "研究、工具与开放系统，将多模态模型、遥测和交互界面转化为可用产品。",
      metrics: [
        { label: "核心", value: "AI 系统" },
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
      bridge: "人工智能\n系统工程\n交互式计算",
      timeLabel: "当前本地时间",
      timePlace: "Actopan, Hidalgo",
      missionLabel: "当前使命",
      missionValue: "开放工程基础设施",
      bottom: "© 2026 deepdevjose",
      closing: "研究、设计并构建下一代计算系统。",
      columns: [
        {
          title: "浏览",
          links: [
            { label: "项目", href: "#work" },
            { label: "研究", href: "#research" },
            { label: "写作", href: "#writing" }
          ]
        },
        {
          title: "研究",
          links: [
            { label: "发表", href: "#writing" },
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "演讲", href: "#speaking" }
          ]
        },
        {
          title: "联系",
          links: [
            { label: "GitHub", href: "https://github.com/deepdevjose" },
            { label: "LinkedIn", href: "https://www.linkedin.com/" },
            { label: "邮箱", href: "mailto:hello@deepdevjose.com" }
          ]
        }
      ]
    }
  }
};
