import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

const META_KEY = makeStateKey<boolean>('SUPER_FS_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('SUPER_FS_STRUCTURED_DATA');

@Component({
  selector: 'app-super-fs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './super-fs.component.html',
  styleUrl: './super-fs.component.scss'
})
export class SuperFsComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;

  product = {
    name: 'Super FS',
    image: 'assets/products/SUPER-FS.png',
    description: 'Professional-grade agricultural insecticide for comprehensive pest management'
  };

  targetPests = [
    {
      name: 'Stem Borers',
      description: 'Highly effective against rice stem borers, sugarcane borers, and maize stem borers'
    },
    {
      name: 'Bollworms',
      description: 'Controls American bollworm, pink bollworm, and spotted bollworm in cotton'
    },
    {
      name: 'Sucking Pests',
      description: 'Eliminates aphids, thrips, whiteflies, and leafhoppers across multiple crops'
    },
    {
      name: 'Soil Insects',
      description: 'Manages termites, white grubs, and other soil-dwelling pests affecting crops'
    },
    {
      name: 'Storage Pests',
      description: 'Protects against weevils, beetles, and moths in stored grains and seeds'
    },
    {
      name: 'Vector Pests',
      description: 'Controls disease-carrying insects that transmit viral infections to crops'
    }
  ];

  // Recommended Crops Data
  recommendedCrops = [
    {
      name: 'Rice',
      image: 'assets/crops/rice.jpg',
      description: 'Protects against stem borers, leaf folders, and plant hoppers',
      dosage: '100ml per acre',
      targetPests: 'Stem borers, Leaf folder, Brown plant hopper'
    },
    {
      name: 'Cotton',
      image: 'assets/crops/cotton.jpg',
      description: 'Controls bollworms, whiteflies, and thrips affecting cotton yield',
      dosage: '125ml per acre',
      targetPests: 'American bollworm, Pink bollworm, Whitefly, Thrips'
    },
    {
      name: 'Sugarcane',
      image: 'assets/crops/sugarcane.jpg',
      description: 'Manages early shoot borers and top shoot borers in sugarcane',
      dosage: '125ml per acre',
      targetPests: 'Early shoot borer, Top shoot borer, Termites'
    },
    {
      name: 'Vegetables',
      image: 'assets/crops/vegetables.jpg',
      description: 'Protects vegetable crops from various damaging pests',
      dosage: '100ml per acre',
      targetPests: 'Diamond back moth, Fruit borer, Aphids, Whitefly'
    },
    {
      name: 'Maize/Corn',
      image: 'assets/crops/maize.jpg',
      description: 'Effective against stem borers and armyworms in maize crops',
      dosage: '100ml per acre',
      targetPests: 'Stem borer, Fall armyworm, Cutworm'
    },
    {
      name: 'Pulses',
      image: 'assets/crops/pulses.jpg',
      description: 'Controls pod borers and aphids affecting pulse crops',
      dosage: '100ml per acre',
      targetPests: 'Pod borer, Spotted pod borer, Aphids'
    }
  ];

  // Mode of Action Data
  modeOfAction = [
    {
      title: 'Contact Action',
      description: 'Super FS acts immediately on contact with target pests, disrupting their nervous system and stopping feeding damage within hours.'
    },
    {
      title: 'Stomach Action',
      description: 'When ingested by pests, the active ingredient causes rapid paralysis and death, preventing further crop damage.'
    },
    {
      title: 'Systemic Translocation',
      description: 'Super FS is absorbed by plant tissues and translocated throughout the plant, protecting new growth and controlling hidden pests.'
    },
    {
      title: 'Persistent Protection',
      description: 'The advanced formulation creates a protective barrier that maintains efficacy for up to 25 days, even in challenging weather conditions.'
    }
  ];

  // Product Comparison Data
  comparisonData = [
    {
      feature: 'Active Ingredient',
      superFs: 'Fipronil 5% SC (Premium Grade)',
      standard: 'Various combinations, often lower concentrations'
    },
    {
      feature: 'Knockdown Speed',
      superFs: '4-8 hours',
      standard: '24-48 hours'
    },
    {
      feature: 'Protection Duration',
      superFs: 'Up to 25 days',
      standard: '7-14 days'
    },
    {
      feature: 'Weather Resistance',
      superFs: 'Rainfast within 2 hours, maintains efficacy after rainfall',
      standard: 'Often requires reapplication after rainfall'
    },
    {
      feature: 'Spectrum of Control',
      superFs: '40+ pest species including resistant varieties',
      standard: 'Limited spectrum, often requiring multiple products'
    },
    {
      feature: 'Mode of Action',
      superFs: 'Triple-action: Contact, Stomach, and Systemic',
      standard: 'Typically single or dual-action'
    },
    {
      feature: 'Systemic Protection',
      superFs: 'Yes - protects new growth',
      standard: 'Usually limited or none'
    }
  ];

  applicationDetails = {
    dosage: '100-125 ml per acre',
    method: 'Foliar spray using standard equipment with fine to medium droplet size',
    timing: 'Apply at first sign of pest infestation'
  };

  safetyPrecautions = [
    'Always wear appropriate protective equipment during handling and application',
    'Avoid contact with skin, eyes, and clothing. Wash thoroughly after handling',
    'Store in original container in a cool, dry place away from direct sunlight',
    'Keep out of reach of children, pets, and livestock'
  ];
  
  // Technical Specifications Data
  technicalSpecs = {
    productInfo: [
      { label: 'Active Ingredient', value: 'Fipronil 5% SC' },
      { label: 'Formulation Type', value: 'Suspension Concentrate (SC)' },
      { label: 'Mode of Action', value: 'Contact, Stomach, and Systemic' },
      { label: 'Contents', value: '100ml, 250ml, 500ml bottle' },
      { label: 'Shelf Life', value: '3 years from date of manufacture' }
    ],
    applicationDetails: [
      { label: 'Recommended Crops', value: 'Cotton, Rice, Sugarcane, Maize, Vegetables, Fruits' },
      { label: 'Application Rate', value: '100-125 ml per acre' },
      { label: 'Water Requirement', value: '200-300 liters per acre' },
      { label: 'Pre-Harvest Interval', value: '21-28 days (crop dependent)' },
      { label: 'Re-Entry Period', value: '48 hours after application' }
    ]
  };
  
  // FAQ Data
  faqs = [
    {
      question: 'What makes Super FS different from other insecticides?',
      answer: '<strong>Super FS</strong> stands out from other insecticides due to its <strong>triple-action formula</strong> combining contact, stomach, and systemic modes of action. Unlike conventional products that offer only 10-14 days of protection, Super FS provides industry-leading <strong>25-day residual activity</strong>, even in adverse weather conditions. Its unique Fipronil 5% SC formulation penetrates plant tissues to protect new growth and control even hidden pests, making it significantly more effective than standard insecticides.'
    },
    {
      question: 'How quickly does Super FS work against pests?',
      answer: '<strong>Super FS</strong> begins working immediately upon contact with target pests. Users typically observe visible results within <strong>4-8 hours</strong> after application, with complete control achieved within 24-48 hours. The rapid knockdown effect prevents further crop damage while the residual action provides continuous protection against reinfestation. For soil-dwelling pests, noticeable results may take 2-3 days as the product moves through the soil profile.'
    },
    {
      question: 'Is Super FS safe for beneficial insects like honeybees?',
      answer: 'When used according to label directions, <strong>Super FS</strong> minimizes impact on beneficial insects. We recommend applying in the <strong>evening or early morning</strong> when pollinators are less active. The product becomes rainfast within 2 hours of application and is then primarily absorbed into plant tissues, reducing exposure to beneficial insects. Always follow integrated pest management practices and avoid application during peak flowering periods when possible.'
    },
    {
      question: 'Can Super FS be used in organic farming?',
      answer: '<strong>Super FS</strong> is not certified for organic farming as it contains synthetic active ingredients. However, its highly targeted action and low application rates make it an excellent choice for <strong>integrated pest management (IPM) programs</strong> where minimal chemical intervention is desired. For organic operations, we offer alternative biopesticide solutions that can be recommended by our agricultural experts.'
    },
    {
      question: 'Can Super FS be mixed with other agricultural products?',
      answer: '<strong>Super FS</strong> is compatible with most commonly used pesticides, fungicides, and foliar fertilizers. However, we recommend conducting a small compatibility test before tank mixing. Do not mix with strongly alkaline products as this may reduce effectiveness. For best results, add Super FS to the spray tank first, followed by other products. Our technical support team can provide specific recommendations for your crop and pest management program.'
    }
  ];
  
  // Testimonials Data
  testimonials = [
    {
      text: 'I switched to Super FS after struggling with resistant stem borers in my rice fields. The results were remarkable - complete control within 24 hours and no reinfestation for nearly a month. My yield increased by 22% compared to last season.'
    },
    {
      text: 'Super FS saved my cotton crop when bollworms threatened to devastate my fields. One application protected my entire crop through the critical flowering and boll formation stages. The systemic protection is unmatched.'
    },
    {
      text: 'As a professional sugarcane farmer, I\'ve tried many insecticides, but Super FS stands apart. Its weather resistance is exceptional - even after heavy monsoon rains, it continued protecting my crop from borers. Worth every rupee invested.'
    }
  ];

  // Performance data for charts
  yieldData = {
    labels: ['Cotton', 'Rice', 'Sugarcane', 'Vegetables', 'Pulses'],
    datasets: [
      {
        label: 'Super FS',
        data: [22, 18, 25, 20, 15],
        backgroundColor: 'rgba(46, 124, 88, 0.7)'
      },
      {
        label: 'Competitor Products',
        data: [15, 11, 16, 13, 10],
        backgroundColor: 'rgba(153, 153, 153, 0.7)'
      }
    ]
  };

  efficacyData = {
    labels: ['Bollworms', 'Stem Borers', 'Sucking Pests', 'Soil Insects', 'Storage Pests'],
    datasets: [
      {
        label: 'Super FS',
        data: [95, 98, 92, 94, 90],
        backgroundColor: 'rgba(46, 124, 88, 0.7)'
      },
      {
        label: 'Leading Competitor',
        data: [82, 85, 80, 78, 75],
        backgroundColor: 'rgba(153, 153, 153, 0.7)'
      }
    ]
  };

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

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }


  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Super FS - Professional Agricultural Insecticide | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Super FS is a professional-grade agricultural insecticide with triple-action formula offering ultra-fast knockdown and 25-day residual protection against crop pests. The ultimate solution for modern farmers.' },
      { name: 'keywords', content: 'Super FS, Super FS insecticide, agricultural insecticide, Fipronil insecticide, crop pest control, agricultural pest management, super fs agricular insecticide, super-fs, fipronil 5% SC' },
      { property: 'og:title', content: 'Super FS - Professional-Grade Agricultural Insecticide' },
      { property: 'og:description', content: 'Advanced triple-action insecticide formulation for comprehensive pest management in agriculture. Features ultra-fast knockdown and extended 25-day residual protection.' },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/thiamethoxam-30-fs.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
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
      "name": "Super FS",
      "image": `${this.baseUrl}/assets/products/thiamethoxam-30-fs.png`,
      "description": "Professional-grade agricultural insecticide with triple-action formula offering ultra-fast knockdown and 25-day residual protection against a comprehensive range of crop pests.",
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
        "reviewCount": "175"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }

  navigateToProductDetails() {
  }
}
