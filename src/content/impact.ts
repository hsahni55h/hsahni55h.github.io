// Home page impact strip. `value` counts up; `prefix`/`suffix` are static text around it.
// Use `text` instead of `value` for figures that shouldn't animate (e.g. ranges).
// Only use numbers that are backed by the rest of src/content.

export interface ImpactStat {
  value?: number;
  text?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Small source note shown under the label. */
  detail?: string;
}

export const impactStats: ImpactStat[] = [
  {
    // TODO confirm: counted from the first engineering role (Sep 2020) to today.
    value: 6,
    suffix: "+",
    label: "Years in robotics & AI",
    detail: "Since 2020",
  },
  {
    text: "1–2 min",
    label: "Weibull analysis",
    detail: "Down from 20–30 min",
  },
  {
    // TODO confirm: Volvo Trucks and Volvo Penta today; Renault Trucks is "next in line".
    value: 2,
    label: "Volvo Group businesses",
    detail: "Trucks · Penta, Renault next",
  },
  {
    value: 6,
    label: "Students guided",
    detail: "ROS & robot architectures",
  },
];
