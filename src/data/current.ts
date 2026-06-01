import type { IconName, Locale } from "./site";

export interface CurrentItem {
  icon: IconName;
  label: string;
  value: string;
}

export const currentItems: Record<Locale, CurrentItem[]> = {
  en: [
    { icon: "flask", label: "Research", value: "Vision Language Runtime" },
    { icon: "code", label: "Engineering", value: "Arm Health AI" },
    { icon: "book", label: "Learning", value: "WebGPU · Digital Twins · HCI" }
  ],
  es: [
    { icon: "flask", label: "Investigación", value: "Vision Language Runtime" },
    { icon: "code", label: "Ingeniería", value: "Arm Health AI" },
    { icon: "book", label: "Aprendizaje", value: "WebGPU · Gemelos digitales · HCI" }
  ],
  "zh-cn": [
    { icon: "flask", label: "研究", value: "Vision Language Runtime" },
    { icon: "code", label: "工程", value: "Arm Health AI" },
    { icon: "book", label: "学习", value: "WebGPU · 数字孪生 · HCI" }
  ]
};
