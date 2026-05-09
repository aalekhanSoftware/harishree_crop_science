import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

const META_KEY = makeStateKey<boolean>('about-meta-data');
const STRUCTURED_DATA_KEY = makeStateKey<string>('about-structured-data');

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  foundingYear = 2024;
  currentYear = new Date().getFullYear();
  yearsExperience = this.currentYear - this.foundingYear;

  // Enhanced Milestones with more detail
  milestones = [
    {
      year: '2024',
      title: 'Seeds of Innovation',
      description: 'Founded with a vision to revolutionize Indian agriculture through sustainable solutions.'
    },
    {
      year: '2024',
      title: 'R&D Excellence',
      description: 'Established a state-of-the-art research facility to develop proprietary crop protection formulas.'
    },
    {
      year: '2025',
      title: 'Global Footprint',
      description: 'Expanded operations to international markets, exporting quality agro-chemicals.'
    },
    {
      year: '2025',
      title: 'Green Revolution 2.0',
      description: 'Launched a comprehensive range of eco-friendly bio-fertilizers and organic pesticides.'
    }
  ];

  // Core Values
  values = [
    {
      icon: 'assets/icons/innovation.svg', // Placeholder path, using inline SVG in HTML
      title: 'Innovation',
      desc: 'Pioneering advanced agricultural technologies for better yield.'
    },
    {
      icon: 'assets/icons/sustainability.svg',
      title: 'Sustainability',
      desc: 'Committed to eco-friendly practices that protect our soil and future.'
    },
    {
      icon: 'assets/icons/quality.svg',
      title: 'Quality',
      desc: 'Rigorous testing ensures only the best products reach our farmers.'
    },
    {
      icon: 'assets/icons/integrity.svg',
      title: 'Integrity',
      desc: 'Building trust through transparent and ethical business practices.'
    }
  ];

  // Why Choose Us Data
  whyChooseUs = [
    {
      title: 'Expert Research',
      desc: 'Backed by a dedicated team of agricultural scientists and researchers.'
    },
    {
      title: 'Premium Quality',
      desc: 'ISO 9001:2015 certified manufacturing processes ensure superior product efficacy.'
    },
    {
      title: 'Farmer First',
      desc: 'Solutions focused on maximizing farmer profitability and crop health.'
    },
    {
      title: 'Eco-Friendly',
      desc: 'Safe for the environment, beneficial for the crops.'
    }
  ];

  // Company Stats
  stats = [
    { number: `${this.yearsExperience}+`, label: 'Years Experience' },
    { number: '50+', label: 'Products' },
    { number: '1000+', label: 'Happy Farmers' }, // Example- placeholder
    { number: '20+', label: 'Regions Served' }
  ];

  team = [
    {
      name: 'Vishal Dobariya',
      position: 'Founder & CEO',
      image: 'assets/about-us/Vishal Dobariya.png',
      description: 'A visionary leader with over a decade of expertise in agricultural science. Pioneering sustainable farming solutions and driving the company\'s mission for a greener future.'
    },
    {
      name: 'Sagar Pambhar',
      position: 'Director of Operations',
      image: 'assets/about-us/Sagar Pambhar.png',
      description: 'Expert in agricultural innovation and supply chain management. Ensuring the seamless delivery of premium bio-fertilizers to farmers across the nation.'
    },
    {
      name: 'Nilesh Dobariya',
      position: 'Director of R&D',
      image: 'assets/about-us/Nilesh Dobariya.png',
      description: 'Leading strategic initiatives in eco-friendly pesticides. Specialized in product development and quality assurance to enhance farm productivity.'
    }
  ];

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) {
      return;
    }

    const title = 'About Harishree Crop Science | Leading Agricultural & Crop Solutions';
    const description = 'Harishree Crop Science: Empowering farmers with premium crop protection, bio-fertilizers, and sustainable agricultural solutions since 2024. Discover our journey and vision.';
    const keywords = 'Harishree Crop Science, Agricultural Solutions, Organic Farming, Crop Protection, Bio-fertilizers, Pesticides Manufacturer, Sustainable Agriculture, Indian Agriculture, Farming Technology';

    this.title.setTitle(title);
    
    const metaTags: MetaDefinition[] = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: environment.metaDefaults.author || 'Harishree Crop Science' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph / Facebook
      { property: 'og:site_name', content: 'Harishree Crop Science' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${this.baseUrl}/about-us` },
      { property: 'og:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/logo/HARISHREE.png` },
      
      // Additional SEO props
      { name: 'theme-color', content: '#009846' }, // Primary Green
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) {
      return;
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Harishree Crop Science",
      "alternateName": "Harishree Crops",
      "url": `${this.baseUrl}`,
      "logo": `${this.baseUrl}/assets/logo/HARISHREE.png`,
      "foundingDate": "2024",
      "description": "Leading provider of sustainable agricultural solutions, bio-fertilizers, and crop protection products.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "gu"]
      },
      "sameAs": [
        "https://www.facebook.com/harishreecropscience",
        "https://www.instagram.com/harishreecropscience",
        "https://www.linkedin.com/company/harishree-crop-science"
      ],
      "founders": [
        {
          "@type": "Person",
          "name": "Vishal Dobariya",
          "jobTitle": "Founder & CEO"
        }
      ],
      "employee": this.team.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.position,
        "image": `${this.baseUrl}/${member.image}`
      }))
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
