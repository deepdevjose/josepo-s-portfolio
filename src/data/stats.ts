import type { Locale } from "./site";

export interface StatItem {
  value: string;
  label: string;
}

export const stats: Record<Locale, StatItem[]> = {
  en: [
    { value: "50ms", label: "Target browser inference latency" },
    { value: "85%", label: "RUL accuracy in robot-arm prototype" },
    { value: "10k+/s", label: "MQTT events in simulation" },
    { value: "15+", label: "Workshops, demos & presentations" }
  ],
  es: [
    { value: "50ms", label: "Latencia objetivo en navegador" },
    { value: "85%", label: "Precisión RUL en prototipo robótico" },
    { value: "10k+/s", label: "Eventos MQTT en simulación" },
    { value: "15+", label: "Talleres, demos y presentaciones" }
  ],
  "zh-cn": [
    { value: "50ms", label: "浏览器推理目标延迟" },
    { value: "85%", label: "机械臂原型 RUL 准确率" },
    { value: "10k+/s", label: "仿真 MQTT 事件" },
    { value: "15+", label: "工作坊、演示与展示" }
  ]
};
