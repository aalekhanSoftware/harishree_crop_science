import { MetaTag, StructuredData } from '../interfaces/seo.interface';

export const homeMetaTags: MetaTag[] = [
  { name: 'description', content: 'Harishree Crop Science provides innovative agricultural solutions...' },
  { name: 'keywords', content: 'agricultural solutions, organic fertilizers...' },
  // ... other meta tags
];

export const homeStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Harishree Crop Science",
  "description": "Leading provider of sustainable agricultural solutions...",
  "url": "https://harishreecropscience.com",
  // ... other structured data
}; 