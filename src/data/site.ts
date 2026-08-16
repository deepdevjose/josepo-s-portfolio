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

export interface CoffeeSupport {
  ringText: string;
  ariaLabel: string;
  tooltipLabel: string;
  modalTitle: string;
  modalDescription: string;
  buyCoffeeLabel: string;
  bankTitle: string;
  nameLabel: string;
  clabeLabel: string;
  copyLabel: string;
  copiedLabel: string;
  closeLabel: string;
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

export function localizedPath(locale: Locale, path = "") {
  const suffix = path.replace(/^\/+/, "");
  return `${localePaths[locale]}${suffix}`;
}

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
      openMenuLabel: string;
      closeMenuLabel: string;
    };
    hero: {
      eyebrow: string;
      headline: string;
      subtitle: string;
      pills: HeroPill[];
      primaryCta: string;
      secondaryCta: string;
      portraitAlt: string;
      coffeeSupport: CoffeeSupport;
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
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      links: [
        { label: "Projects", href: "#projects" },
        { label: "Research", href: "#research" },
        { label: "Case Studies", href: "#blog" },
        { label: "About", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "Software & AI Engineer",
      headline: "José Manuel Cortés Cerón",
      subtitle:
        "I build applied AI systems that run in the browser, connect to real-world devices, and turn research prototypes into usable products.",
      pills: [
        { icon: "code", label: "Full-Stack AI Systems" },
        { icon: "flask", label: "WebGPU Inference" },
        { icon: "bridge", label: "IoT & Robotics Telemetry" },
        { icon: "university", label: "XJTLU Research Collaboration" },
        { icon: "location", label: "Mexico - China" }
      ],
      primaryCta: "Selected Projects",
      secondaryCta: "Download CV",
      portraitAlt: "Grayscale portrait of José Manuel Cortés Cerón",
      coffeeSupport: {
        ringText: "DONATE ONLINE",
        ariaLabel: "Open donation options",
        tooltipLabel: "Donate",
        modalTitle: "Donate online",
        modalDescription:
          "Your support helps me continue building, researching, and sharing AI, software, and cultural technology projects from Mexico.",
        buyCoffeeLabel: "Donate online ↗",
        bankTitle: "Bank transfer — BBVA",
        nameLabel: "Name",
        clabeLabel: "CLABE",
        copyLabel: "Copy CLABE",
        copiedLabel: "Copied",
        closeLabel: "Close donation options"
      }
    },
    ecosystem: {
      eyebrow: "Research Ecosystem",
      title: "Engineering systems from prototype to impact.",
      description:
        "Connecting AI runtimes, robotics telemetry, learning platforms, and research collaboration into systems that can be tested and shipped.",
      cta: "View Selected Projects"
    },
    mission: {
      eyebrow: "Current Mission",
      title: "Building Applied AI Systems.",
      description:
        "I design and build software systems where AI models, real-time data, and user interfaces work together as complete products.",
      metrics: [
        { label: "Edge AI & IoT", value: "From embedded telemetry to browser-based AI inference." },
        { label: "Research to Product", value: "Turning academic ideas into usable software prototypes." },
        { label: "Measured Execution", value: "Tracking latency, memory, accuracy, and system reliability." }
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
      eyebrow: "Engineering Focus",
      title: "Systems I build and study.",
      description:
        "My work connects AI models, edge devices, telemetry pipelines, and interfaces into systems that can be measured, tested, and improved.",
      interests: [
        "Browser-Native AI",
        "Edge Computing",
        "IoT Telemetry",
        "Digital Twins",
        "Robotics Systems",
        "Human-Centered Interfaces"
      ]
    },
    publications: {
      eyebrow: "Working Papers",
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
      openMenuLabel: "Abrir menú",
      closeMenuLabel: "Cerrar menú",
      links: [
        { label: "Proyectos", href: "#projects" },
        { label: "Investigación", href: "#research" },
        { label: "Case studies", href: "#blog" },
        { label: "Acerca", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "Ingeniero de software e IA",
      headline: "José Manuel Cortés Cerón",
      subtitle:
        "Construyo sistemas de IA aplicada que corren en el navegador, se conectan con dispositivos reales y convierten prototipos de investigación en productos usables.",
      pills: [
        { icon: "code", label: "Sistemas full-stack de IA" },
        { icon: "flask", label: "Inferencia WebGPU" },
        { icon: "bridge", label: "IoT y telemetría robótica" },
        { icon: "university", label: "Colaboración de investigación XJTLU" },
        { icon: "location", label: "México - China" }
      ],
      primaryCta: "Proyectos seleccionados",
      secondaryCta: "Descargar CV",
      portraitAlt: "Retrato en escala de grises de José Manuel Cortés Cerón",
      coffeeSupport: {
        ringText: "DONAR EN LINEA",
        ariaLabel: "Abrir opciones de donación",
        tooltipLabel: "Donar",
        modalTitle: "Donar en línea",
        modalDescription:
          "Tu donación me ayuda a seguir construyendo, investigando y compartiendo proyectos de IA, software y tecnología cultural desde México.",
        buyCoffeeLabel: "Donar en línea ↗",
        bankTitle: "Transferencia bancaria — BBVA",
        nameLabel: "Nombre",
        clabeLabel: "CLABE",
        copyLabel: "Copiar CLABE",
        copiedLabel: "Copiado",
        closeLabel: "Cerrar opciones de donación"
      }
    },
    ecosystem: {
      eyebrow: "Ecosistema de investigación",
      title: "Sistemas de ingeniería del prototipo al impacto.",
      description:
        "Conecto runtimes de IA, telemetría robótica, plataformas educativas y colaboración académica en sistemas probables y entregables.",
      cta: "Ver proyectos seleccionados"
    },
    mission: {
      eyebrow: "Misión actual",
      title: "Construyendo sistemas de IA aplicados.",
      description:
        "Diseño y construyo sistemas de software donde modelos de IA, datos en tiempo real e interfaces trabajan como productos completos.",
      metrics: [
        { label: "Edge AI e IoT", value: "De telemetría embebida a inferencia de IA en navegador." },
        { label: "Research to Product", value: "Convertir ideas académicas en prototipos de software usables." },
        { label: "Ejecución medible", value: "Medir latencia, memoria, precisión y confiabilidad del sistema." }
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
      eyebrow: "Enfoque de ingeniería",
      title: "Sistemas que construyo y estudio.",
      description:
        "Mi trabajo conecta modelos de IA, dispositivos edge, pipelines de telemetría e interfaces en sistemas que se pueden medir, probar y mejorar.",
      interests: [
        "IA nativa en navegador",
        "Edge Computing",
        "Telemetría IoT",
        "Gemelos digitales",
        "Sistemas robóticos",
        "Interfaces centradas en personas"
      ]
    },
    publications: {
      eyebrow: "Working papers",
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
      openMenuLabel: "打开菜单",
      closeMenuLabel: "关闭菜单",
      links: [
        { label: "项目", href: "#projects" },
        { label: "研究", href: "#research" },
        { label: "案例", href: "#blog" },
        { label: "关于", href: "#about" }
      ]
    },
    hero: {
      eyebrow: "软件与 AI 工程师",
      headline: "José Manuel Cortés Cerón",
      subtitle:
        "构建应用型 AI 系统：在浏览器运行、连接真实设备，并把研究原型转化为可用产品。",
      pills: [
        { icon: "code", label: "全栈 AI 系统" },
        { icon: "flask", label: "WebGPU 推理" },
        { icon: "bridge", label: "IoT 与机器人遥测" },
        { icon: "university", label: "XJTLU 研究合作" },
        { icon: "location", label: "墨西哥 - 中国" }
      ],
      primaryCta: "精选项目",
      secondaryCta: "下载简历",
      portraitAlt: "José Manuel Cortés Cerón 的黑白肖像",
      coffeeSupport: {
        ringText: "在线捐赠",
        ariaLabel: "打开捐赠选项",
        tooltipLabel: "捐赠",
        modalTitle: "在线捐赠",
        modalDescription: "你的捐赠帮助我继续在墨西哥构建、研究和分享人工智能、软件与文化科技项目。",
        buyCoffeeLabel: "在线捐赠 ↗",
        bankTitle: "银行转账 — BBVA",
        nameLabel: "姓名",
        clabeLabel: "CLABE",
        copyLabel: "复制 CLABE",
        copiedLabel: "已复制",
        closeLabel: "关闭捐赠选项"
      }
    },
    ecosystem: {
      eyebrow: "研究生态",
      title: "从原型到影响力的工程系统。",
      description:
        "连接 AI 运行时、机器人遥测、学习平台和研究合作，形成可测试、可交付的系统。",
      cta: "查看精选项目"
    },
    mission: {
      eyebrow: "当前使命",
      title: "构建应用型 AI 系统。",
      description: "设计并构建让 AI 模型、实时数据和用户界面协同工作的完整软件产品。",
      metrics: [
        { label: "Edge AI 与 IoT", value: "从嵌入式遥测到浏览器 AI 推理。" },
        { label: "Research to Product", value: "把学术想法转化为可用软件原型。" },
        { label: "可衡量执行", value: "跟踪延迟、内存、准确率与系统可靠性。" }
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
      eyebrow: "工程重点",
      title: "我构建和研究的系统。",
      description:
        "我的工作连接 AI 模型、边缘设备、遥测管线与界面，形成可衡量、可测试、可改进的系统。",
      interests: [
        "浏览器原生 AI",
        "边缘计算",
        "IoT 遥测",
        "数字孪生",
        "机器人系统",
        "以人为中心的界面"
      ]
    },
    publications: {
      eyebrow: "研究手稿",
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

export const pageText: Record<
  Locale,
  {
    backHome: string;
    openRepo: string;
    openLive: string;
    projects: { eyebrow: string; title: string; description: string; problem: string; metrics: string; stack: string };
    timeline: { eyebrow: string; title: string; description: string };
    publications: { eyebrow: string; title: string; description: string };
    blog: { eyebrow: string; title: string; description: string; read: string; featured: string; viewAll: string };
  }
> = {
  en: {
    backHome: "Back home",
    openRepo: "Repository",
    openLive: "Live",
    projects: {
      eyebrow: "All Projects",
      title: "Systems with a measurable reason to exist.",
      description:
        "A fuller map of the engineering portfolio: what each project solves, how it is measured, and where the working artifact lives.",
      problem: "Problem solved",
      metrics: "Measured signals",
      stack: "Stack"
    },
    timeline: {
      eyebrow: "Full Timeline",
      title: "Research, engineering, education, and applied systems.",
      description: "A chronological view of the moments that shaped the current work."
    },
    publications: {
      eyebrow: "Articles & Publications",
      title: "Research notes, technical articles, and public write-ups.",
      description: "Selected writing across AI systems, robotics, cultural computing, STEM education, and software engineering."
    },
    blog: {
      eyebrow: "Case Studies",
      title: "Engineering Case Studies",
      description: "Technical case studies, research notes, and build logs with implementation context, constraints, and outcomes.",
      read: "Read case study",
      featured: "Featured",
      viewAll: "View case studies"
    }
  },
  es: {
    backHome: "Volver al inicio",
    openRepo: "Repositorio",
    openLive: "Demo",
    projects: {
      eyebrow: "Todos los proyectos",
      title: "Sistemas con una razón medible de existir.",
      description:
        "Mapa completo del portfolio de ingeniería: qué problema resuelve cada proyecto, cómo se mide y dónde vive el artefacto funcionando.",
      problem: "Problema que resuelve",
      metrics: "Señales medibles",
      stack: "Stack"
    },
    timeline: {
      eyebrow: "Trayectoria completa",
      title: "Investigación, ingeniería, educación y sistemas aplicados.",
      description: "Una vista cronológica de los momentos que dieron forma al trabajo actual."
    },
    publications: {
      eyebrow: "Artículos y publicaciones",
      title: "Notas de investigación, artículos técnicos y escritura pública.",
      description: "Escritura seleccionada sobre IA, robótica, computación cultural, educación STEM e ingeniería de software."
    },
    blog: {
      eyebrow: "Case studies",
      title: "Case studies de ingeniería",
      description: "Casos técnicos, notas de investigación y bitácoras con contexto de implementación, restricciones y resultados.",
      read: "Leer case study",
      featured: "Destacado",
      viewAll: "Ver case studies"
    }
  },
  "zh-cn": {
    backHome: "返回首页",
    openRepo: "仓库",
    openLive: "在线演示",
    projects: {
      eyebrow: "全部项目",
      title: "每个系统都有可衡量的存在理由。",
      description: "完整的工程作品地图：解决什么问题、如何衡量，以及可运行成果在哪里。",
      problem: "解决的问题",
      metrics: "可衡量信号",
      stack: "技术栈"
    },
    timeline: {
      eyebrow: "完整经历",
      title: "研究、工程、教育与应用系统。",
      description: "按时间展示塑造当前工作的关键节点。"
    },
    publications: {
      eyebrow: "文章与发表",
      title: "研究笔记、技术文章与公开写作。",
      description: "围绕 AI 系统、机器人、文化计算、STEM 教育和软件工程的精选写作。"
    },
    blog: {
      eyebrow: "案例研究",
      title: "工程案例研究",
      description: "包含实现背景、约束和结果的技术案例、研究笔记与构建日志。",
      read: "阅读案例",
      featured: "精选",
      viewAll: "查看案例"
    }
  }
};
