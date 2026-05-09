import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

const META_KEY = makeStateKey<boolean>('THIO_H_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('THIO_H_STRUCTURED_DATA');

interface SafetyPrecaution {
  icon: string;
  title: string;
  description: string;
}

interface SafetyGuidelines {
  dosage: string;
  dilutionRate: string;
  applicationMethod: string;
  timing: string;
  precautions: SafetyPrecaution[];
}

@Component({
  selector: 'app-thio-h',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thio-h.component.html',
  styleUrl: './thio-h.component.scss'
})
export class ThioHComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  product = {
    name: 'Thio-H',
    image: 'assets/products/THIO-H.png',
    description: 'Premium systemic insecticide for comprehensive crop protection'
  };

  targetPests = [
    {
      name: 'Sucking Pests',
      description: 'Superior control of aphids, whiteflies, thrips, and other sap-feeding insects'
    },
    {
      name: 'Borers',
      description: 'Effective against stem borers, fruit borers, and shoot borers'
    },
    {
      name: 'Leaf Miners',
      description: 'Controls leaf mining insects that damage crop foliage'
    }
  ];

  applicationDetails = {
    dosage: '200-250 ml per acre',
    method: 'Foliar spray application with proper coverage',
    timing: 'Apply at first signs of pest infestation or as preventive measure'
  };

  safetyGuidelines = {
    dosage: '200-250 ml per acre',
    dilutionRate: 'Mix with 200 liters of water per acre for optimal coverage',
    applicationMethod: 'Foliar spray application with proper coverage',
    timing: 'Apply at first signs of pest infestation or as preventive measure',
    precautions: [
      {
        icon: 'fas fa-user-shield',
        title: 'Personal Protection',
        description: 'Wear protective clothing, gloves, face mask, and eye protection during handling and application'
      },
      {
        icon: 'fas fa-hand-sparkles',
        title: 'Safe Handling',
        description: 'Wash hands thoroughly after handling. Keep away from food and feedstuffs'
      },
      {
        icon: 'fas fa-exclamation-triangle',
        title: 'Re-Entry Period',
        description: 'Do not enter treated areas for 24 hours after application'
      },
      {
        icon: 'fas fa-leaf',
        title: 'Environmental Safety',
        description: 'Avoid application during high winds. Do not contaminate water bodies'
      }
    ]
  };

  technicalSpecs = {
    productInfo: [
      { label: 'Active Ingredient', value: 'Thiamethoxam 25% WG' },
      { label: 'Formulation Type', value: 'Water Dispersible Granules (WG)' },
      { label: 'Mode of Action', value: 'Systemic and Contact' },
      { label: 'Contents', value: '100g, 250g, 500g pack' },
      { label: 'Shelf Life', value: '2 years from manufacture date' }
    ],
    applicationDetails: [
      { label: 'Target Crops', value: 'Cotton, Rice, Vegetables, Fruits, Pulses, Oilseeds' },
      { label: 'Application Rate', value: '200-250 ml per acre' },
      { label: 'Water Requirement', value: '200-250 liters per acre' },
      { label: 'Pre-Harvest Interval', value: '15-20 days (crop specific)' },
      { label: 'Re-Entry Period', value: '24 hours post-application' }
    ]
  };

  faqs = [
    {
      question: 'What makes Thio-H unique among insecticides?',
      answer: '<strong>Thio-H</strong> features advanced systemic action that provides both immediate and long-lasting protection. Its unique formulation ensures rapid uptake by plants, offering protection from within against various pests while being safe for beneficial insects when used as directed.'
    },
    {
      question: 'How does Thio-H protect crops?',
      answer: '<strong>Thio-H</strong> works through dual action - systemic movement within the plant and contact activity. Once applied, it quickly enters the plant tissue, protecting new growth and providing extended control against target pests for up to 15-20 days.'
    },
    {
      question: 'Is Thio-H safe for all crops?',
      answer: '<strong>Thio-H</strong> is extensively tested and proven safe for use on a wide range of crops including cotton, vegetables, fruits, and field crops when used according to label instructions. Its selective action targets harmful pests while being gentle on crops.'
    }
  ];

  testimonials = [
    {
      text: 'Thio-H has been a game-changer for my vegetable farm. The systemic protection keeps pests away for weeks, and I\'ve seen significant improvement in crop quality.',
    },
    {
      text: 'I\'ve tried many insecticides, but Thio-H stands out for its effectiveness against sucking pests. My cotton yields have improved substantially since I started using it.',
    },
    {
      text: 'Thio-H has been a game-changer for my vegetable farm. The systemic protection keeps pests away for weeks, and I\'ve seen significant improvement in crop quality.',
    }
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
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Thio-H - Premium Systemic Insecticide | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Thio-H is a premium systemic insecticide offering superior protection against agricultural pests. Advanced formulation for comprehensive crop protection with long-lasting results.' },
      { name: 'keywords', content: 'Thio-H, Thio-H insecticide, systemic insecticide, agricultural insecticide, crop protection, pest control, Thio-H agricular medicine, thiamethoxam insecticide' },
      { property: 'og:title', content: 'Thio-H - Advanced Systemic Insecticide for Agriculture' },
      { property: 'og:description', content: 'Premium systemic insecticide providing comprehensive protection against crop pests. Features rapid uptake and long-lasting systemic action.' },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/THIO-H.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'author', content: environment.metaDefaults.author }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY) || !isPlatformBrowser(this.platformId)) return;

    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Thio-H",
      "image": `${this.baseUrl}/assets/products/THIO-H.png`,
      "description": "Premium systemic insecticide featuring advanced Thiamethoxam formulation for comprehensive crop protection against various agricultural pests.",
      "brand": {
        "@type": "Brand",
        "name": "Harishree Crop Science"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Harishree Crop Science",
        "url": this.baseUrl
      },
      "category": "Agricultural Insecticide",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
