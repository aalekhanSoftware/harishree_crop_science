export interface Product {
  name: string;
  image: string;
  description: string;
  fullDescription?: string;
  url?: string;
}

export interface ProductCategory {
  name: string;
  products: Product[];
} 