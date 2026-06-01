import type { Locale } from "./site";

export interface StatItem {
  value: string;
  label: string;
}

export const stats: Record<Locale, StatItem[]> = {
  en: [
    { value: "50ms", label: "WebGPU inference latency" },
    { value: "85%", label: "RUL accuracy on Arm Health AI" },
    { value: "10k+/s", label: "Telemetry events processed" },
    { value: "15+", label: "Workshops and keynote sessions" }
  ],
  es: [
    { value: "50ms", label: "Latencia de inferencia con WebGPU" },
    { value: "85%", label: "Precisión RUL en Arm Health AI" },
    { value: "10k+/s", label: "Eventos de telemetría procesados" },
    { value: "15+", label: "Talleres y conferencias" }
  ],
  "zh-cn": [
    { value: "50ms", label: "WebGPU 推理延迟" },
    { value: "85%", label: "Arm Health AI 的 RUL 准确率" },
    { value: "10k+/s", label: "处理的遥测事件" },
    { value: "15+", label: "工作坊与主题演讲" }
  ]
};
