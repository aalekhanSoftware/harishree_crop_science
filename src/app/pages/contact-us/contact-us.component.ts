import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { Inject, PLATFORM_ID } from '@angular/core';

const META_KEY = makeStateKey<boolean>('contact-meta-data');
const STRUCTURED_DATA_KEY = makeStateKey<string>('contact-structured-data');

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  socialLinks = [
    { icon: 'fab fa-twitter', url: 'https://twitter.com/harishreecrop', label: 'Twitter' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/profile.php?id=61573857659074', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/harishree_crop_science', label: 'Instagram' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/harishree-crop-science', label: 'LinkedIn' }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Contact Harishree Crop Science | Get in Touch');
    
    const metaTags = [
      { name: 'description', content: 'Contact Harishree Crop Science for sustainable agricultural solutions. Reach out to us for inquiries about our eco-friendly farming products and services.' },
      { name: 'keywords', content: 'contact Harishree Crop Science, agricultural solutions contact, farming products inquiry, sustainable agriculture contact' },
      { property: 'og:title', content: 'Contact Harishree Crop Science | Get in Touch' },
      { property: 'og:description', content: 'Contact us for innovative agricultural solutions and sustainable farming products.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'canonical', content: `${this.baseUrl}/contact-us` },
      { property: 'og:url', content: `${this.baseUrl}/contact-us` },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: environment.metaDefaults.author }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);

  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Harishree Crop Science",
      "description": "Contact page for Harishree Crop Science",
      "url": `${this.baseUrl}/contact`,
      "mainEntity": {
        "@type": "Organization",
        "name": "Harishree Crop Science",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No.57, survey no. 751, Palki 2 harsiddhi park - 1",
          "addressLocality": "Near jawahar navoday vidhyalay",
          "addressRegion": "Gujarat",
          "postalCode": "360110",
          "addressCountry": "India"
        },
        "telephone": "+919898197196",
        "email": "harishreecropscience@gmail.com"
      }
    };

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
