import type { IconName, Locale } from "./site";

export interface CurrentItem {
  icon: IconName;
  label: string;
  value: string;
}

export const currentItems: Record<Locale, CurrentItem[]> = {
  en: [
    { icon: "flask", label: "Research", value: "Browser-native AI inference" },
    { icon: "code", label: "Project", value: "Byron Virtual Museum" },
    { icon: "book", label: "Learning", value: "WebGPU · Digital Twins · HCI" }
  ],
  es: [
    { icon: "flask", label: "Investigación", value: "IA nativa en navegador" },
    { icon: "code", label: "Proyecto", value: "Byron Virtual Museum" },
    { icon: "book", label: "Aprendizaje", value: "WebGPU · Gemelos digitales · HCI" }
  ],
  "zh-cn": [
    { icon: "flask", label: "研究", value: "浏览器原生 AI 推理" },
    { icon: "code", label: "项目", value: "Byron Virtual Museum" },
    { icon: "book", label: "学习", value: "WebGPU · 数字孪生 · HCI" }
  ]
};
