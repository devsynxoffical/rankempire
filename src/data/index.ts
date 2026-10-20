import rawData from "./site_data.json";

export interface ServiceData {
  slug: string;
  name: string;
  group: "core" | "svc";
  img: string;
  title: string;
  desc: string;
  h1: string;
  sub: string;
  intro: string;
  inc: [string, string][];
  fit: string[];
  steps?: [string, string][];
  faq: [string, string][];
  related: string[];
  chips?: string[];
  hub?: boolean;
}

export interface IndustryData {
  slug: string;
  name: string;
  noun: string;
  grp: string;
  kws: string[];
  pains: [string, string][];
  angle: string;
  cat: string;
}

export interface LocationData {
  slug: string;
  name: string;
  state: string;
  st: string;
  areas: string[];
  inds: string[];
  note: string;
}

export interface PricingPlan {
  name: string;
  who: string;
  price: number;
  badge?: string;
  features: string[];
}

export interface PackageData {
  name: string;
  h1: string;
  sub: string;
  title: string;
  desc: string;
  plans: [string, string, number, string, string[]][];
}

export interface ToolData {
  slug: string;
  name: string;
  type: string;
  desc: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  cat: string;
  img: string;
  excerpt: string;
  body: string;
}

export interface FAQItem {
  cat: string;
  q: string;
  a: string;
}

export interface PlaybookItem {
  t: string;
  desc: string;
  best: string;
  svcs: string[];
  img: string;
}

export interface TrustItem {
  title: string;
  desc: string;
  bold: string;
  badge: string;
}

export const services: Record<string, ServiceData> = rawData.services as unknown as Record<string, ServiceData>;
export const serviceOrderCore: string[] = rawData.serviceOrderCore;
export const serviceOrderSvc: string[] = rawData.serviceOrderSvc;
export const homeServices: string[] = rawData.homeServices;
export const industries: IndustryData[] = rawData.industries as unknown as IndustryData[];
export const locations: LocationData[] = rawData.locations as unknown as LocationData[];
export const packages: Record<string, PackageData> = rawData.packages as unknown as Record<string, PackageData>;
export const tools: ToolData[] = rawData.tools as unknown as ToolData[];
export const team: TeamMember[] = rawData.team as unknown as TeamMember[];
export const blogPosts: BlogPost[] = rawData.blog as unknown as BlogPost[];
export const faqHome: FAQItem[] = rawData.faqHome as unknown as FAQItem[];
export const playbooks: PlaybookItem[] = rawData.playbooks as unknown as PlaybookItem[];
export const trustItems: TrustItem[] = rawData.trust as unknown as TrustItem[];
export const stack: string[] = rawData.stack as unknown as string[];

export const SITE_URL = "https://www.rankempire.com";
export const BRAND_NAME = "RankEmpire";
export const BRAND_EMAIL = "hello@rankempire.com";
