import { Component, OnInit, OnDestroy, ViewContainerRef, contentChild, Inject, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import AOS from 'aos';
import { ProductService } from '../../shared/services/product.service';
import { ProductCategory, Product } from '../../shared/interfaces/product.interface';
import { Location } from '@angular/common';
import { ProductDialogComponent } from '../../shared/components/product-dialog/product-dialog.component';
import { DialogService } from '../../shared/services/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { take } from 'rxjs/operators';

const META_KEY = makeStateKey<boolean>('products-meta-data');
const STRUCTURED_DATA_KEY = makeStateKey<string>('products-structured-data');

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDialogComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  categories: ProductCategory[] = [];
  activeCategory: string = 'Insecticide';

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    private productService: ProductService,
    private location: Location,
    private dialogService: DialogService,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.setMetaData();
    this.setStructuredData();
    this.dialogService.setContainer(this.viewContainerRef);
    
    // AOS is initialized globally in AppComponent

    this.route.params.subscribe(params => {
      if (params['productName']) {
        this.openProductDialog(params['productName']);
      }
    });
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private loadCategories() {
    const catFromUrl = this.route.snapshot.queryParams['category'];
    this.productService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      if (catFromUrl && categories.some(c => c.name === catFromUrl)) {
        this.activeCategory = catFromUrl;
      }
    });
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Agricultural Products | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Discover our premium range of organic pesticides, bio-fertilizers, and eco-friendly crop protection solutions. Trusted by farmers for sustainable agriculture and enhanced crop yield.' },
      { name: 'keywords', content: 'organic pesticides, bio fertilizers, crop protection solutions, agricultural products, sustainable farming products, organic farming solutions, agricultural chemicals india' },
      { property: 'og:title', content: 'Agricultural Products | Organic Pesticides & Bio Fertilizers' },
      { property: 'og:description', content: 'Premium agricultural solutions including organic pesticides, bio-fertilizers, and crop protection products for sustainable farming.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      // { name: 'canonical', content: `${this.baseUrl}/products` },
      { property: 'og:url', content: `${this.baseUrl}/products` },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'author', content: 'Harishree Crop Science' }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY) || !isPlatformBrowser(this.platformId)) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://harishreecropscience.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://harishreecropscience.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Insecticides",
          "description": "High-quality insecticides for crop protection",
          "url": "https://harishreecropscience.com/products#insecticide"
        },
        {
          "@type": "WebPage",
          "name": "Fungicides",
          "description": "Effective fungicides for plant disease control",
          "url": "https://harishreecropscience.com/products#fungicide"
        },
        {
          "@type": "WebPage",
          "name": "Herbicides",
          "description": "Selective herbicides for weed control",
          "url": "https://harishreecropscience.com/products#herbicide"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }

  openProductDialog(productName: string): void {
    const product = this.findProductByName(productName);
    if (!product) return;

    this.dialogService.open(ProductDialogComponent, { product });
    this.location.replaceState(`/products/${encodeURIComponent(productName)}`);

    this.dialogService.onClose$.subscribe(() => {
      this.location.replaceState('/products');
    });
  }

  private findProductByName(name: string): Product | undefined {
    return this.categories
      .flatMap(category => category.products)
      .find(product => product.name === name);
  }

  trackByCategory = (_: number, item: ProductCategory) => item.name;
  trackByProduct = (_: number, item: Product) => item.name;
}