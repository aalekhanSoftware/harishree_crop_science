import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import Aos from 'aos';

const META_KEY = makeStateKey<boolean>('MPIRE_404_META');
const STRUCTURED_DATA_KEY = makeStateKey<string>('MPIRE_404_STRUCTURED_DATA');

@Component({
  selector: 'app-mpire-404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mpire-404.component.html',
  styleUrl: './mpire-404.component.scss'
})
export class Mpire404Component implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;

  product = {
    name: 'MPIRE 404',
    image: 'assets/products/MPIRE-404.png',
    description: 'Premium agricultural insecticide for comprehensive pest management in crops'
  };

  targetPests = [
    {
      name: 'Whiteflies',
      description: 'Effectively controls whiteflies in cotton, vegetables, and ornamental crops'
    },
    {
      name: 'Aphids',
      description: 'Eliminates aphid colonies that damage crops and spread viral diseases'
    },
    {
      name: 'Thrips',
      description: 'Rapidly controls thrips populations in vegetables, fruits, and field crops'
    },
    {
      name: 'Jassids',
      description: 'Manages leafhopper infestations that cause hopper burn and yield loss'
    },
    {
      name: 'Mealybugs',
      description: 'Controls mealybugs in cotton, fruits, and vegetable crops'
    },
    {
      name: 'Scale Insects',
      description: 'Effectively eliminates hard and soft scale insects on various crops'
    }
  ];

  // Recommended Crops Data
  recommendedCrops = [
    {
      name: 'Cotton',
      image: 'assets/crops/cotton.jpg',
      description: 'Protects against whiteflies, aphids, and jassids in cotton crops',
      dosage: '125ml per acre',
      targetPests: 'Whiteflies, Aphids, Jassids, Mealybugs'
    },
    {
      name: 'Vegetables',
      image: 'assets/crops/vegetables.jpg',
      description: 'Controls sucking pests in vegetable crops ensuring healthy production',
      dosage: '100ml per acre',
      targetPests: 'Aphids, Whiteflies, Thrips, Mites'
    },
    {
      name: 'Pulses',
      image: 'assets/crops/pulses.jpg',
      description: 'Manages insect pests affecting pulse crops and legumes',
      dosage: '100ml per acre',
      targetPests: 'Aphids, Thrips, Pod borers'
    },
    {
      name: 'Fruits',
      image: 'assets/crops/fruits.jpg',
      description: 'Protects fruit crops from various sucking pests that reduce quality',
      dosage: '125ml per acre',
      targetPests: 'Scale insects, Mealybugs, Aphids'
    },
    {
      name: 'Oilseeds',
      image: 'assets/crops/oilseeds.jpg',
      description: 'Effective against pests affecting oilseed crops like mustard and sesame',
      dosage: '100ml per acre',
      targetPests: 'Aphids, Thrips, Whiteflies'
    },
    {
      name: 'Ornamentals',
      image: 'assets/crops/ornamentals.jpg',
      description: 'Preserves the aesthetic value of ornamental plants by eliminating pests',
      dosage: '100ml per acre',
      targetPests: 'Whiteflies, Aphids, Thrips, Scale insects'
    }
  ];

  // Mode of Action Data
  modeOfAction = [
    {
      title: 'Systemic Protection',
      description: 'MPIRE 404 is absorbed by plant tissues and circulates throughout the plant, providing protection even to new growth areas.'
    },
    {
      title: 'Neural Inhibition',
      description: 'The active ingredient targets the nervous system of insects, causing rapid paralysis and cessation of feeding.'
    },
    {
      title: 'Translaminar Movement',
      description: 'Penetrates leaf surfaces to reach pests hiding on the undersides of leaves, ensuring complete coverage.'
    },
    {
      title: 'Long-lasting Protection',
      description: 'Advanced formulation provides up to 21 days of continuous protection, reducing the number of applications needed.'
    }
  ];

  // Product Comparison Data
  comparisonData = [
    {
      feature: 'Active Ingredient',
      mpire404: 'Profenofos 40% + Cypermethrin 4% E.C. (Imidacloprid 40.4% SC)',
      standard: 'Lower concentration formulations (typically 17.8% SL)'
    },
    {
      feature: 'Pest Control Spectrum',
      mpire404: 'Broad-spectrum control of over 35 sucking pest species',
      standard: 'Limited range of target pests'
    },
    {
      feature: 'Systemic Action',
      mpire404: 'Superior plant absorption and translocation',
      standard: 'Limited systemic movement in plant tissues'
    },
    {
      feature: 'Protection Duration',
      mpire404: 'Up to 21 days of continuous protection',
      standard: '7-10 days typically requiring reapplication'
    },
    {
      feature: 'Rain Fastness',
      mpire404: 'Rainfast in 2 hours with minimal efficacy loss after rainfall',
      standard: 'Often washed away by irrigation or rainfall'
    },
    {
      feature: 'Application Rate',
      mpire404: 'Lower application rate for equivalent or better control',
      standard: 'Higher volumes needed for similar results'
    },
    {
      feature: 'Resistance Management',
      mpire404: 'Optimized formulation reduces resistance development',
      standard: 'More prone to pest resistance issues'
    }
  ];

  applicationDetails = {
    dosage: '100-125 ml per acre',
    method: 'Foliar spray with good coverage of upper and lower leaf surfaces',
    timing: 'Apply at first sign of pest infestation for best results'
  };

  safetyPrecautions = [
    'Wear protective clothing, gloves, and face protection during handling and application',
    'Avoid inhalation of spray mist; use in well-ventilated areas',
    'Store in original container away from food, feed, and water sources',
    'Do not apply during bee foraging periods to protect pollinators'
  ];
  
  // Technical Specifications Data
  technicalSpecs = {
    productInfo: [
      { label: 'Active Ingredient', value: 'Profenofos 40% + Cypermethrin 4% E.C. (Imidacloprid 40.4% SC)' },
      { label: 'Formulation Type', value: 'Suspension Concentrate (SC)' },
      { label: 'Mode of Action', value: 'Systemic and Translaminar' },
      { label: 'Contents', value: '100ml, 250ml, 500ml bottle' },
      { label: 'Shelf Life', value: '2 years from date of manufacture' }
    ],
    applicationDetails: [
      { label: 'Recommended Crops', value: 'Cotton, Vegetables, Pulses, Fruits, Oilseeds' },
      { label: 'Application Rate', value: '100-125 ml per acre' },
      { label: 'Water Volume', value: '200-250 liters per acre' },
      { label: 'Pre-Harvest Interval', value: '14-21 days (crop dependent)' },
      { label: 'Re-Entry Period', value: '24 hours after application' }
    ]
  };
  
  // FAQ Data
  faqs = [
    {
      question: 'What makes MPIRE 404 superior to other insecticides?',
      answer: '<strong>MPIRE 404</strong> contains a higher concentration of premium Imidacloprid (40.4% SC) compared to standard products in the market. This allows for <strong>lower application rates</strong> while achieving superior pest control. Its advanced formulation provides enhanced systemic activity, allowing the active ingredient to distribute throughout the plant tissues more efficiently, protecting even new growth that emerges after application. Additionally, MPIRE 404 features improved rainfastness technology that maintains effectiveness even after rainfall or irrigation.'
    },
    {
      question: 'How quickly does MPIRE 404 control pest infestations?',
      answer: '<strong>MPIRE 404</strong> begins working immediately upon contact with target pests and absorption into plant tissues. Feeding inhibition occurs within <strong>30 minutes to 1 hour</strong> after application, preventing further crop damage. Visible results typically appear within 24-48 hours, with complete control achieved within 3-5 days. The product remains active in plant tissues for up to 21 days, providing continuous protection against reinfestation.'
    },
    {
      question: 'Is MPIRE 404 safe for beneficial insects?',
      answer: 'When used according to label instructions, <strong>MPIRE 404</strong> minimizes impact on beneficial insects through its targeted systemic action. For best results, we recommend applying in the <strong>evening or early morning</strong> when bees and other pollinators are less active. The product is rapidly absorbed into plant tissues after application, reducing exposure to beneficial insects. To protect pollinators, avoid application during flowering periods when possible or apply after flower petals have fallen.'
    },
    {
      question: 'Can MPIRE 404 be tank-mixed with other products?',
      answer: '<strong>MPIRE 404</strong> is compatible with most commonly used insecticides, fungicides, and foliar nutrients. However, we recommend performing a small jar test to confirm compatibility before mixing large quantities. Avoid mixing with strongly alkaline products as this may affect efficacy. For optimal results, adjust water pH to slightly acidic (pH 5.5-6.5) before adding MPIRE 404 to the spray tank. Our technical support team can provide specific mixing recommendations for your crop protection program.'
    },
    {
      question: 'How does MPIRE 404 fit into an Integrated Pest Management (IPM) program?',
      answer: '<strong>MPIRE 404</strong> is an excellent component of IPM programs due to its targeted action against sucking pests while minimizing impact on beneficial insects when used correctly. Its long residual activity reduces the number of applications needed, and its efficacy at lower rates means less active ingredient in the environment. For resistance management, we recommend rotating MPIRE 404 with insecticides having different modes of action throughout the growing season. Our agronomists can help design a complete IPM program incorporating MPIRE 404 for sustainable pest management.'
    }
  ];
  
  // Testimonials Data
  testimonials = [
    {
      text: 'After struggling with resistant whiteflies in my cotton fields, I switched to MPIRE 404. The results were outstanding - complete control within 3 days and protection that lasted through the critical growth period. My yield increased significantly compared to previous seasons.'
    },
    {
      text: 'As a commercial vegetable grower, controlling aphids is crucial for preventing virus transmission. MPIRE 404 provided exceptional control with a single application, protecting my capsicum crop for over three weeks even during rainy conditions.'
    },
    {
      text: 'I\'ve been using MPIRE 404 in my integrated pest management program for fruit orchards. Its systemic action reaches pests even in difficult-to-spray areas, and I\'ve noticed significant improvement in fruit quality due to better pest control.'
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  ngOnInit() {
    // Set meta data if not already set (important for SSR)
    if (!this.transferState.hasKey(META_KEY)) {
      this.setMetaData();
      this.transferState.set(META_KEY, true);
    }
    
    // Set structured data for SEO
    if (!this.transferState.hasKey(STRUCTURED_DATA_KEY)) {
      this.setStructuredData();
    }
  }
  
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({ duration: 800, once: true, offset: 20 });
    }
  }
  
  ngOnDestroy() {
    // Clean up meta tags when component is destroyed
    this.meta.removeTag("name='description'");
    this.meta.removeTag("name='keywords'");
  }
  
  private setMetaData() {
    this.title.setTitle('MPIRE 404 - Premium Agricultural Insecticide | Harishree Crop Science');
    
    const metaTags: MetaDefinition[] = [
      { name: 'description', content: 'MPIRE 404 is a premium agricultural insecticide with advanced Imidacloprid 40.4% SC formulation, providing exceptional control of sucking pests like whiteflies, aphids, thrips, and jassids in various crops. Features systemic action, long residual activity, and superior rainfastness.' },
      { name: 'keywords', content: 'MPIRE 404, Profenofos 40%, Cypermethrin 4% E.C., Profenofos 40% + Cypermethrin 4% E.C., MPIRE agricultural insecticide, Profenofos 40% + Cypermethrin 4% E.C. (Imidacloprid 40.4% SC), sucking pest control, systemic insecticide, aphid control, whitefly insecticide, thrips control, cotton pest management, vegetable crop protection' },
      { property: 'og:title', content: 'MPIRE 404 - Premium Agricultural Insecticide | Harishree Crop Science' },
      { property: 'og:description', content: 'Premium agricultural insecticide with advanced Profenofos 40% + Cypermethrin 4% E.C. (Imidacloprid 40.4% SC) formulation for exceptional control of sucking pests in crops.' },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/MPIRE-404.png` },
      { property: 'og:url', content: `${this.baseUrl}/products/mpire-404` },
      { property: 'og:type', content: 'product' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'MPIRE 404 - Premium Agricultural Insecticide' },
      { name: 'twitter:description', content: 'Advanced Imidacloprid formulation for exceptional control of sucking pests in crops.' },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/MPIRE-404.png` },
      { name: 'robots', content: 'index, follow' },
      // { name: 'canonical', content: `${this.baseUrl}/products/mpire-404` }
    ];
    
    metaTags.forEach(tag => this.meta.updateTag(tag));
  }
  
  private setStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      'name': 'MPIRE 404',
      'image': `${this.baseUrl}/assets/products/MPIRE-404.png`,
      'description': 'Premium agricultural insecticide with advanced Profenofos 40% + Cypermethrin 4% E.C. (Imidacloprid 40.4% SC) formulation, providing exceptional control of sucking pests like whiteflies, aphids, thrips, and jassids in various crops. Features systemic action, long residual activity, and superior rainfastness.',
      'brand': {
        '@type': 'Brand',
        'name': 'Harishree Crop Science'
      },
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'price': '0',
        'priceCurrency': 'INR',
        'url': `${this.baseUrl}/products/mpire-404`,
        'seller': {
          '@type': 'Organization',
          'name': 'Harishree Crop Science'
        }
      },
      'category': 'Agricultural Insecticide',
      'material': 'Liquid Suspension Concentrate',
      'applicationCategory': 'Agricultural Pest Control',
      'audience': {
        '@type': 'Audience',
        'audienceType': 'Farmers, Agricultural Professionals'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '2400'
      }
    };
    
    // Store the structured data in transfer state
    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
    
    // Only add script tag in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
  
}
