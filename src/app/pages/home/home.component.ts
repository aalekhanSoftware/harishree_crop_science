import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

const META_KEY = makeStateKey<boolean>('HOME_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('HOME_STRUCTURED_DATA');

/** SEO: Primary keywords - agriculture, farming, fertilizer, pesticides, organic farming, crop protection, sustainable agriculture. Secondary - bio fertilizers, organic pesticides, crop yield, soil health, plant protection, agricultural products India, sustainable farming, weed control, agricultural solutions, eco-friendly farming. */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  /** Crop protection categories - Insecticide, Fungicide, Herbicide, PGR (Plant Growth Regulator) */
  cropCategories = [
    { name: 'Insecticide', slug: 'Insecticide', shortDesc: 'Control aphids, whitefly, bollworms and sucking pests. Our insecticides are used on cotton, vegetables and pulses across India.', icon: 'bug' },
    { name: 'Fungicide', slug: 'Fungicide', shortDesc: 'Fight blight, mildew and leaf spots. Reliable disease control for paddy, horticulture and field crops.', icon: 'leaf' },
    { name: 'Herbicide', slug: 'Herbicide', shortDesc: 'Weed control that works. Pre- and post-emergence options for rice, wheat, soybeans and more.', icon: 'seedling' },
    { name: 'PGR', slug: 'PGR', shortDesc: 'Plant growth regulators and nutrition. Better root development, stress tolerance and harvest quality.', icon: 'chart-line' }
  ];

  products = [
    { name: 'Bulldozer', image: 'assets/products/Buldozer.png', description: 'Long-lasting pest control with fewer sprays. Farmers use it for tough infestations in cotton and vegetables.' },
    { name: 'Chemistry', image: 'assets/products/CHEMISTRY.jpg', description: 'Our blend for crop nutrition and protection. Supports healthy growth and yield in field and horticultural crops.' },
    { name: 'Green Out', image: 'assets/products/GREEN OUT.png', description: 'Fast-acting weed control. Used for burndown and inter-row spraying; inactivated on soil contact.' },
    { name: 'Kavach', image: 'assets/products/kavach.png', description: 'Fungicide that stops fungal diseases in their tracks. Fits into routine sprays for paddy, vegetables and fruits.' }
  ];

  testimonials = [
    { name: 'Sudhir Dattartay Sawant', location: 'Solapur, Maharashtra', rating: 5, review: 'We have been using Harishree products for three seasons. Crop stand and yield have improved. The team explains dosage and timing clearly.' },
    { name: 'Makwana Mansing', location: 'Kodinar, Gujarat', rating: 5, review: 'Good results on chilli and cotton. Delivery is on time and the insecticide we use has cut down repeat sprays.' },
    { name: 'Akram', location: 'Kheri, Uttar Pradesh', rating: 5, review: 'We tried their fungicide and herbicide last year. Both did the job. I recommend them to other farmers in our area.' }
  ];

  slides = [
    { src: 'assets/home/slider-image-01.jpg', alt: 'Farm and crop protection - insecticides, fungicides and herbicides', h1: 'Fertilizers, Pesticides & Crop Protection for Modern Agriculture', h2: '', p: 'Insecticide, fungicide, herbicide and PGR solutions. Trusted by farmers across India.' },
    { src: 'assets/home/slider-image-02.jpg', alt: 'Quality pesticides for better crop yield', h1: '', h2: 'Quality You Can Rely On', p: 'From cotton and paddy to vegetables and pulses - we back every product with field experience and support.' },
    { src: 'assets/home/slider-image-03.jpg', alt: 'Research and crop protection', h1: '', h2: 'Backed by Research', p: 'Our R&D focuses on formulations that work in real field conditions and fit into your spray schedule.' }
  ];

  currentSlideIndex = 0;
  private autoplayIntervalMs = 5000;
  private autoplayTimer: any = null;
  private prefersReducedMotion = false;
  private touchStartX: number | null = null;
  private touchDeltaX = 0;

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
    this.setupReducedMotion();
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
    this.clearAutoplay();
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    const pageTitle = 'Harishree Crop Science | Agriculture - Fertilizers, Pesticides & Crop Protection India';
    const pageDescription = 'Leading supplier of fertilizers, pesticides and crop protection for agriculture. Organic farming solutions, bio fertilizers and sustainable agriculture. Trusted across India.';
    const pageKeywords = 'agriculture, farming, fertilizer, pesticides, organic farming, crop protection, sustainable agriculture, bio fertilizers, organic pesticides, crop yield, soil health, plant protection, agricultural products India, sustainable farming, weed control, agricultural solutions, eco-friendly farming';

    this.title.setTitle(pageTitle);

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: pageKeywords },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { property: 'og:url', content: `${this.baseUrl}` },
      { property: 'og:site_name', content: 'Harishree Crop Science' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: environment.metaDefaults.author }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) return;

    const organizationId = `${this.baseUrl}/#organization`;
    const organization = {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'Harishree Crop Science',
      description: 'Leading supplier of fertilizers, pesticides and crop protection for agriculture in India. Organic farming solutions, bio fertilizers and sustainable agriculture.',
      url: this.baseUrl,
      logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919898197196',
        contactType: 'customer service',
        areaServed: 'IN'
      },
      makesOffer: this.products.map((prod, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: prod.name,
          image: prod.image.startsWith('http') ? prod.image : `${this.baseUrl}/${prod.image}`,
          description: prod.description
        }
      }))
    };

    const webSite = {
      '@type': 'WebSite',
      '@id': `${this.baseUrl}/#website`,
      url: this.baseUrl,
      name: 'Harishree Crop Science',
      description: 'Agriculture - Fertilizers, Pesticides & Crop Protection India. Organic farming, crop protection and sustainable agriculture solutions.',
      publisher: { '@id': organizationId }
    };

    const graph = [organization, webSite];
    const structuredData = { '@context': 'https://schema.org', '@graph': graph };

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));

    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  navigateToProductDetails() {
    this.router.navigate(['/products']);
  }

  trackByCategory = (_: number, item: { slug: string }) => item.slug;
  trackByProduct = (_: number, item: { name: string }) => item.name;
  trackByTestimonial = (_: number, item: { name: string }) => item.name;
  trackBySlide = (index: number) => index;

  // Slider controls
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.cdr.markForCheck();
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.cdr.markForCheck();
  }

  goToSlide(index: number) {
    if (index < 0 || index >= this.slides.length) return;
    this.currentSlideIndex = index;
    this.cdr.markForCheck();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
  }

  // Autoplay with reduced motion consideration
  private setupReducedMotion() {
    if (!isPlatformBrowser(this.platformId)) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.prefersReducedMotion = mediaQuery.matches;
    const listener = () => {
      this.prefersReducedMotion = mediaQuery.matches;
      if (this.prefersReducedMotion) {
        this.clearAutoplay();
      } else {
        this.startAutoplay();
      }
    };
    try {
      mediaQuery.addEventListener('change', listener);
    } catch {
      // Safari fallback
      // @ts-ignore
      mediaQuery.addListener(listener);
    }
  }

  private startAutoplay() {
    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion) return;
    this.clearAutoplay();
    this.autoplayTimer = window.setInterval(() => {
      this.nextSlide();
    }, this.autoplayIntervalMs);
  }

  private clearAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  pauseAutoplay() {
    this.clearAutoplay();
  }

  resumeAutoplay() {
    this.startAutoplay();
  }

  // Touch swipe support
  onTouchStart(event: TouchEvent) {
    if (!event.touches || event.touches.length !== 1) return;
    this.touchStartX = event.touches[0].clientX;
    this.touchDeltaX = 0;
    this.pauseAutoplay();
  }

  onTouchMove(event: TouchEvent) {
    if (this.touchStartX == null) return;
    this.touchDeltaX = event.touches[0].clientX - this.touchStartX;
  }

  onTouchEnd() {
    if (this.touchStartX == null) return;
    const threshold = 50;
    if (this.touchDeltaX > threshold) {
      this.prevSlide();
    } else if (this.touchDeltaX < -threshold) {
      this.nextSlide();
    }
    this.touchStartX = null;
    this.touchDeltaX = 0;
    this.resumeAutoplay();
  }
} 