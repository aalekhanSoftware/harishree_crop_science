import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

const META_KEY = makeStateKey<boolean>('PROCEED_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('PROCEED_STRUCTURED_DATA');

@Component({
  selector: 'app-proceed',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proceed.component.html',
  styleUrl: './proceed.component.scss'
})
export class ProceedComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;

  product = {
    name: 'Proceed',
    image: 'assets/products/PROCEED.png',
    description: 'Advanced insect control solution for comprehensive pest management'
  };

  targetPests = [
    {
      name: 'Lepidopteran Pests',
      description: 'Effective against various caterpillars and moths affecting crops'
    },
    {
      name: 'Sucking Pests',
      description: 'Controls aphids, whiteflies, and other sap-sucking insects'
    },
    {
      name: 'Soil Insects',
      description: 'Manages various soil-dwelling pests affecting root systems'
    }
  ];

  applicationDetails = {
    dosage: '150-200 ml per acre',
    method: 'Foliar spray using standard spray equipment',
    timing: 'Apply at first sign of pest infestation'
  };

  safetyPrecautions = [
    'Always wear protective equipment during handling and application',
    'Avoid contact with eyes and skin',
    'Store in original container away from direct sunlight',
    'Keep out of reach of children and pets'
  ];
  
  // Technical Specifications Data
  technicalSpecs = {
    productInfo: [
      { label: 'Active Ingredient', value: 'Chlorpyrifos 50% + Cypermethrin 5% EC' },
      { label: 'Formulation Type', value: 'Emulsifiable Concentrate (EC)' },
      { label: 'Mode of Action', value: 'Contact, Stomach, and Respiratory' },
      { label: 'Contents', value: '250ml, 500ml, 1L bottle' },
      { label: 'Shelf Life', value: '2 years from date of manufacture' }
    ],
    applicationDetails: [
      { label: 'Recommended Crops', value: 'Cotton, Rice, Vegetables, Fruits, Pulses' },
      { label: 'Application Rate', value: '150-200 ml per acre' },
      { label: 'Water Requirement', value: '200-250 liters per acre' },
      { label: 'Pre-Harvest Interval', value: '14-21 days (crop dependent)' },
      { label: 'Re-Entry Period', value: '24 hours after application' }
    ]
  };
  
  // FAQ Data
  faqs = [
    {
      question: 'How soon after application can I see results?',
      answer: '<strong>Proceed</strong> provides a rapid knockdown effect, with results visible within <strong>6-24 hours</strong> after application, depending on the target pest species and environmental conditions. You\'ll notice decreased pest activity shortly after application, with maximum efficacy reached within 48 hours.'
    },
    {
      question: 'Is Proceed safe to use on all crops?',
      answer: '<strong>Proceed</strong> is suitable for use on a wide range of crops including cotton, rice, vegetables, fruits, and pulses. However, we recommend conducting a small-scale trial on new or sensitive crop varieties before full-scale application. Always adhere to recommended dosage rates for each specific crop type.'
    },
    {
      question: 'How long does Proceed remain effective after application?',
      answer: 'Under normal field conditions, <strong>Proceed</strong> provides effective pest control for <strong>14-21 days</strong> after application. The residual activity period may vary depending on environmental factors such as rainfall, temperature, and crop growth rate. Our advanced formulation includes technology that enhances resistance to wash-off, maintaining effectiveness even after light rainfall or irrigation.'
    },
    {
      question: 'What is the best time of day to apply Proceed?',
      answer: 'For optimal results, apply <strong>Proceed</strong> during early morning or late afternoon when pest activity is typically higher and environmental conditions are more favorable. Avoid application during the hottest part of the day or when rain is expected within 4-6 hours of application. This timing ensures maximum contact with target pests and allows sufficient time for the product to dry on plant surfaces.'
    },
    {
      question: 'Can Proceed be mixed with other agricultural products?',
      answer: '<strong>Proceed</strong> is compatible with most commonly used pesticides, fungicides, and foliar fertilizers. However, we recommend conducting a small compatibility test before mixing with other products. Always add Proceed to the spray tank first, followed by other products. Do not mix with strongly alkaline products, as this may reduce effectiveness.'
    }
  ];
  
  // Testimonials Data
  testimonials = [
    {
      text: 'After struggling with resistant pests in my cotton fields, Proceed provided excellent control where other products had failed. Saw visible results within a day and crop yield increased significantly.',
      name: 'Ramesh Patel',
      location: 'Cotton Farmer, Gujarat',
      rating: 5,
      image: 'assets/testimonials/farmer1.jpg'
    },
    {
      text: 'Proceed\'s residual effect is impressive. One application protected my vegetable crops for nearly three weeks, even during the rainy season. This has reduced my overall pesticide costs.',
      name: 'Lakshmi Devi',
      location: 'Vegetable Grower, Karnataka',
      rating: 4.5,
      image: 'assets/testimonials/farmer2.jpg'
    },
    {
      text: 'I\'ve been using Proceed for two seasons now on my rice paddies. The broad-spectrum control is remarkable - handles multiple pest issues with a single application, saving time and money.',
      name: 'Sukhwinder Singh',
      location: 'Rice Farmer, Punjab',
      rating: 5,
      image: 'assets/testimonials/farmer3.jpg'
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

    this.title.setTitle('Proceed - Advanced Insecticide | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Proceed is an advanced agricultural insecticide offering rapid knockdown and long-lasting control against crop pests. Premium pest management solution for professional farmers.' },
      { name: 'keywords', content: 'Proceed insecticide, agricultural insecticide, crop pest control, pest management, farming insecticide, agricultural pest control, Proceed agricultural medicine' },
      { property: 'og:title', content: 'Proceed - Premium Agricultural Insecticide' },
      { property: 'og:description', content: 'Advanced insecticide formulation for comprehensive pest management in agriculture. Features rapid knockdown and long-lasting residual control.' },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/PROCEED.png` },
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
      "name": "Proceed",
      "image": `${this.baseUrl}/assets/products/PROCEED.png`,
      "description": "Advanced insecticide formulation designed for comprehensive pest management, offering rapid knockdown and long-lasting residual control against agricultural pests.",
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
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }

  navigateToProductDetails() {
    // Method to handle navigation to product details
    // This can be implemented based on your routing requirements
  }
}
