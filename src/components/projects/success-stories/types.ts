export interface KPIMetric {
  value: string;
  label: string;
  trend?: "positive" | "negative" | "neutral";
}

export interface CaseStudy {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  duration: string;
  tags: string[];
  image: string; // ✅ Agregado
}
