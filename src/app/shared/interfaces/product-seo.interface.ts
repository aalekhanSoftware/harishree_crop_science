export interface ProductPackSize {
  volume: string;
  price: number;
  featured?: boolean;
  sku: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
  answerPlain: string;
}

export interface ProductTestimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface AggregateRatingData {
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  worstRating?: string;
}

export interface ProductSeoData {
  baseUrl: string;
  pageUrl: string;
  productPath: string;
  productTitle: string;
  brandName: string;
  productImageUrl: string;
  productImagePath: string;
  productImageAlt: string;
  productImageCaption: string;
  description: string;
  primaryKeyword: string;
  secondaryKeyword: string;
  category: string;
  sku: string;
  mpn: string;
  dose: string;
  indicativeListPriceInr: number;
  packSizes: ProductPackSize[];
  officialProductDetails: Array<{ label: string; value: string }>;
  faqs: ProductFaq[];
  testimonials: ProductTestimonial[];
  aggregateRating: AggregateRatingData;
  howToSteps: HowToStep[];
  howToDescription: string;
  howToName: string;
  alternateNames: string[];
  targetPests: string[];
  targetCrops: string[];
  benefits: string[];
  breadcrumbLabel: string;
  speakableSelectors?: string[];
  formulationMaterial?: string;
}
