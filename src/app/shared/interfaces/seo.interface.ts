export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  [key: string]: any;
} 