import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxExtendedPdfViewerComponent, NgxExtendedPdfViewerModule, PDFDocumentProxy } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const META_KEY = makeStateKey<boolean>('catalogue_meta');
const STRUCTURED_DATA_KEY = makeStateKey<string>('catalogue_structured_data');

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent implements OnInit, OnDestroy {
  pdfSrc = 'assets/catalogue/HARISHREE_CROP_SCIENCE_CATALOGUE.pdf';
  pdfLoading = true;
  pdfLoadError = false;
  private readonly baseUrl = environment.baseUrl;
  @ViewChild('pdfViewer') pdfViewer!: NgxExtendedPdfViewerComponent;

  isMobile: boolean = false;
  currentPage = 1;
  totalPages = 0;
  pdfLoaded = false;

  public pdfViewerConfig = {
    cMapUrl: 'assets/cmaps/',
    cMapPacked: true,
    enableXfa: true,
    defaultViewport: {
      width: 595.28,
      height: 841.89
    },
    spread: true,
    spreadMode: 2, // even pages on the left
    scrollMode: 0, // vertical scrolling
    pageViewMode: 'book'
  };

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {}

  isPlatformBrowser(platformId: Object): boolean {
    return isPlatformBrowser(platformId);
  }

  handleError(error: any) {
    console.error('PDF Error:', error);
    this.pdfLoadError = true;
    this.pdfLoading = false;
  }

  handleDocumentLoad() {
    this.pdfLoading = false;
  }

  ngOnInit() {
    this.setMetaData();
    if (this.isPlatformBrowser(this.platformId)) {
      this.setStructuredData();
      this.checkMobile();
      fromEvent(window, 'resize')
        .pipe(debounceTime(200))
        .subscribe(() => this.checkMobile());
    }
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;
    
    this.title.setTitle('Product Catalogue | Harishree Crop Science');
    const metaTags = [
      { name: 'description', content: 'Browse our comprehensive product catalogue featuring sustainable agricultural solutions, pesticides, fertilizers, and more.' },
      { name: 'keywords', content: 'product catalogue, agricultural products, pesticides, fertilizers, crop protection' },
      { property: 'og:title', content: 'Product Catalogue | Harishree Crop Science' },
      { property: 'og:description', content: 'Explore our complete range of agricultural products and solutions.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'canonical', content: `${this.baseUrl}/catalogue` },
      { property: 'og:url', content: `${this.baseUrl}/catalogue` },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Harishree Crop Science' }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY) || !this.isPlatformBrowser(this.platformId)) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "DataCatalog",
      "name": "Harishree Crop Science Product Catalogue",
      "description": "Comprehensive catalogue of agricultural products and solutions",
      "url": `${this.baseUrl}/catalogue`,
      "provider": {
        "@type": "Organization",
        "name": "Harishree Crop Science"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  checkMobile() {
    if (this.isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      if (this.pdfViewer) {
        this.pdfViewer.pageViewMode = this.isMobile ? 'single' : 'book';
        this.pdfViewer.zoom = this.isMobile ? 'page-width' : 'page-fit';
        // this.pdfViewer.spread = !this.isMobile;
      }
    }
  }

  ngAfterViewInit() {
    if (this.isPlatformBrowser(this.platformId)) {
      this.checkMobile();
      setTimeout(() => {
        this.pdfLoading = false;
      }, 1000);
    }
  }

  onPdfLoadComplete(event: Event | PDFDocumentProxy): void {
    if ('numPages' in event) {
      this.totalPages = event.numPages;
    }
    this.pdfLoaded = true;
    this.pdfLoading = false;
  }

  onPdfLoaded(event: any): void {
    console.log('PDF Loaded:', event);
    this.pdfLoaded = true;
    this.pdfLoading = false;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pdfViewer.page = this.currentPage;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pdfViewer.page = this.currentPage;
    }
  }
}