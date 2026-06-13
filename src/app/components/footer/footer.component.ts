import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product.interface';
import { environment } from '../../../environments/environment';

interface FooterNavLink {
  name: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  readonly baseUrl = environment.baseUrl;
  private readonly schemaScriptAttr = 'data-footer-schema';
  private injectedScripts: HTMLScriptElement[] = [];

  currentYear = new Date().getFullYear();
  featuredProducts: Product[] = [];

  readonly organizationName = 'Harishree Crop Science';
  readonly organizationDescription =
    'Leading manufacturer of agricultural products committed to sustainable farming solutions and environmental stewardship. Empowering farmers with quality inputs for a better harvest.';
  readonly logoUrl = `${this.baseUrl}/assets/logo/HARISHREE.png`;
  readonly organizationUrl = this.baseUrl || 'https://harishreecropscience.com';

  quickLinks: FooterNavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'R&D', path: '/research' },
    { name: 'Quality', path: '/quality-assurance' },
    { name: 'Catalogue', path: '/catalogue' }
  ];

  readonly allProductsLink: FooterNavLink = { name: 'All Products', path: '/products' };

  private readonly featuredProductNames = [
    'Emamectin Benzoate 5% S G (Proceed)',
    'Thio-H',
    'Mpire 404',
    'Mission',
    'Tolfenpyrad 15% EC (H Fun)'
  ];

  socialLinks = [
    { icon: 'fab fa-twitter', url: 'https://twitter.com/harishreecrop', label: 'Twitter' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/profile.php?id=61573857659074', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/harishree_crop_science', label: 'Instagram' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/harishree-crop-science', label: 'LinkedIn' }
  ];

  constructor(
    private productService: ProductService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.featuredProducts = this.featuredProductNames
        .map((name) => products.find((p) => p.name === name))
        .filter((p): p is Product => Boolean(p && p.url));
      this.injectStructuredData();
    });
  }

  ngOnDestroy(): void {
    this.injectedScripts.forEach((script) => script.remove());
    this.injectedScripts = [];
  }

  productRouterLink(product: Product): string[] {
    return product.url ? ['/', product.url] : ['/products'];
  }

  absoluteUrl(path: string): string {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return `${this.baseUrl}${normalized === '/' ? '' : normalized}`;
  }

  private manufacturerAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
      addressLocality:
        'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
      addressRegion: 'Gujarat',
      postalCode: '360110',
      addressCountry: 'IN'
    };
  }

  private corporateAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'G-11, Saikruti Complex, Gotri Road',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: '390021',
      addressCountry: 'IN'
    };
  }

  private injectStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.setOrganizationSchema();
    // this.setLocalBusinessSchema();
    this.setWebSiteSchema();
    this.setSiteNavigationSchema();
  }

  private appendScript(json: object): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(this.schemaScriptAttr, 'true');
    script.text = JSON.stringify(json);
    this.document.head.appendChild(script);
    this.injectedScripts.push(script);
  }

  private setOrganizationSchema(): void {
    this.appendScript({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${this.baseUrl}/#organization`,
      name: this.organizationName,
      url: this.baseUrl,
      logo: this.logoUrl,
      description: this.organizationDescription,
      email: 'harishreecropscience@gmail.com',
      telephone: '+919898197196',
      sameAs: this.socialLinks.map((s) => s.url),
      address: this.manufacturerAddress()
    });
  }

  private setLocalBusinessSchema(): void {
    this.appendScript({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${this.baseUrl}/#localbusiness`,
      name: this.organizationName,
      image: this.logoUrl,
      url: this.baseUrl,
      telephone: '+919898197196',
      email: 'harishreecropscience@gmail.com',
      priceRange: 'INR',
      description: this.organizationDescription,
      address: this.manufacturerAddress(),
      areaServed: [
        { '@type': 'City', name: 'Rajkot' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' }
      ],
      sameAs: this.socialLinks.map((s) => s.url),
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.377391787234835',
        longitude: '70.68967331867736'
      },
      location: [
        {
          '@type': 'Place',
          name: 'Corporate Office',
          address: this.corporateAddress()
        },
        {
          '@type': 'Place',
          name: 'Manufacturing Unit',
          address: this.manufacturerAddress()
        }
      ]
    });
  }

  private setWebSiteSchema(): void {
    this.appendScript({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${this.baseUrl}/#website`,
      url: this.baseUrl,
      name: this.organizationName,
      description: this.organizationDescription,
      publisher: { '@id': `${this.baseUrl}/#organization` },
      inLanguage: 'en-IN'
    });
  }

  private setSiteNavigationSchema(): void {
    const quickNavItems = this.quickLinks.map((link, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SiteNavigationElement',
        name: link.name,
        url: this.absoluteUrl(link.path)
      }
    }));

    const productNavItems = [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SiteNavigationElement',
          name: this.allProductsLink.name,
          url: this.absoluteUrl(this.allProductsLink.path)
        }
      },
      ...this.featuredProducts.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        item: {
          '@type': 'SiteNavigationElement',
          name: product.name,
          url: this.absoluteUrl(product.url!)
        }
      }))
    ];

    // this.appendScript({
    //   '@context': 'https://schema.org',
    //   '@type': 'ItemList',
    //   name: 'Harishree Crop Science footer navigation',
    //   itemListElement: [...quickNavItems, ...productNavItems]
    // });
  }
}
