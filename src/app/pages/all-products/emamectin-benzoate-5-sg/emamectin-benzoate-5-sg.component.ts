import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import Aos from 'aos';
import {
  getOfferPriceValidUntil,
  merchantReturnPolicySchema,
  offerShippingDetailsSchema
} from '../../../shared/schema/product-offer-jsonld';

const META_KEY = makeStateKey<boolean>('EMAMECTIN_5_SG_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('EMAMECTIN_HOWTO_SCHEMA');

@Component({
  selector: 'app-emamectin-benzoate-5-sg',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './emamectin-benzoate-5-sg.component.html',
  styleUrl: './emamectin-benzoate-5-sg.component.scss'
})
export class EmamectinBenzoate5SgComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/emamectin-benzoate-5-sg';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  product = {
    name: 'Proceed',
    subtitle: 'Emamectin Benzoate 5% SG',
    image: 'assets/products/PROCEED.png',
    description: 'Advanced water-soluble granular insecticide for robust caterpillar and pest control.'
  };

  packSizes = [
    { volume: '50 gm', price: 77, featured: false, sku: 'PRO-50GM' },
    { volume: '100 gm', price: 142, featured: false, sku: 'PRO-100GM' },
    { volume: '250 gm', price: 325, featured: true, sku: 'PRO-250GM' },
    { volume: '500 gm', price: 625, featured: false, sku: 'PRO-500GM' }
  ];

  keyBenefits = [
    {
      title: 'Translaminar Action',
      description: 'Penetrates leaf tissues quickly to control hidden pests on the underside of leaves.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Fast Knockdown',
      description: 'Rapidly paralyzes caterpillars, immediately stopping feeding damage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Safe for Beneficial Insects',
      description: 'Highly selective, ensuring safety to most beneficial insects and natural predators.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long-lasting Protection',
      description: 'Provides extended residual control, reducing the need for frequent applications.',
      icon: 'fas fa-shield-alt'
    }
  ];

  targetPests = [
    { name: 'Helicoverpa armigera', description: 'Effectively controls bollworms and fruit borers in various crops.' },
    { name: 'Spodoptera litura', description: 'Potent against tobacco caterpillars and armyworms.' },
    { name: 'Diamondback Moth', description: 'Exceptional control of resistant DBM in cabbage and cauliflower.' },
    { name: 'Thrips & Mites', description: 'Suppresses populations of thrips and certain mites on contact.' }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'Controls bollworm complex effectively, protecting bolls and squares.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Okra & Brinjal',
      description: 'Manages fruit and shoot borers, ensuring high-quality produce.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Cabbage & Cauliflower',
      description: 'Highly effective against Diamondback Moth and other caterpillars.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Chilli',
      description: 'Controls fruit borers and suppresses thrips for enhanced yields.',
      icon: 'fas fa-pepper-hot'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand', value: 'Harishree Crop Science' },
      { label: 'Product name', value: 'Proceed (Emamectin Benzoate 5% SG)' },
      { label: 'Active ingredient', value: 'Emamectin Benzoate 5% SG' },
      { label: 'Formulation', value: 'Soluble Granules (SG)' },
      { label: 'Mode of action', value: 'Nerve and muscle action (Chloride channel activator)' },
      { label: 'Toxicity', value: 'Blue label (Moderately toxic) - Use with care' }
    ],
    packs: [
      { label: 'Pack sizes', value: '50 gm, 100 gm, 250 gm, 500 gm' },
      { label: 'Recommended dose', value: '5 gm per 15-20 litre pump depending on crop and pest stage' },
      { label: 'Application timing', value: 'At the onset of pest infestation or egg hatching stage' }
    ]
  };

  modeOfAction = [
    {
      title: 'Ingestion & Contact',
      description: 'Pests ingest the treated plant material or come in contact with the spray.'
    },
    {
      title: 'Nerve Activation',
      description: 'Activates chloride channels in the nervous system of the insect.'
    },
    {
      title: 'Paralysis',
      description: 'Causes continuous flow of chloride ions, leading to irreversible paralysis.'
    },
    {
      title: 'Feeding Cessation',
      description: 'Feeding stops within hours, and the pest eventually dies from starvation.'
    }
  ];

  safetyItems = [
    { title: 'Personal Protection', text: 'Wear protective clothing, gloves, and eye protection during mixing and spraying.' },
    { title: 'Safe Mixing', text: 'Mix the required dose in a small amount of water first, then add to the main tank.' },
    { title: 'Application Timing', text: 'Spray during cooler parts of the day, preferably morning or evening.' },
    { title: 'Storage', text: 'Keep away from food, feed, and children in a cool and dry place.' },
    { title: 'Equipment Cleaning', text: 'Thoroughly wash the sprayer with clean water after application.' },
    { title: 'Environmental Care', text: 'Do not spray near water bodies and avoid drift to non-target areas.' }
  ];

  performanceHighlights = [
    { label: 'Rapid Action', value: 'Feeding stops almost immediately after ingestion.' },
    { label: 'High Efficacy', value: 'Exceptional control even against resistant caterpillar species.' },
    { label: 'Water Soluble', value: 'SG formulation dissolves completely, preventing nozzle clogging.' },
    { label: 'Farmer Trusted', value: 'A reliable choice for vital cash crops and vegetables.' }
  ];

  faqs = [
    {
      question: 'What is Proceed Emamectin Benzoate 5% SG used for?',
      answer: '<strong>Proceed</strong> is a highly effective insecticide containing Emamectin Benzoate 5% SG, primarily used for controlling caterpillars and borers like Helicoverpa and Spodoptera across multiple crops.',
      answerPlain: 'Proceed is a highly effective insecticide containing Emamectin Benzoate 5% SG, primarily used for controlling caterpillars and borers like Helicoverpa and Spodoptera across multiple crops.'
    },
    {
      question: 'What is the dosage of Emamectin Benzoate 5% SG per pump?',
      answer: 'The recommended dose is <strong>5 gm per pump</strong> (15-20 liters water). Adjust as per crop stage and local recommendations.',
      answerPlain: 'The recommended dose is 5 gm per pump (15-20 liters water). Adjust as per crop stage and local recommendations.'
    },
    {
      question: 'Is it safe for beneficial insects?',
      answer: 'Yes, <strong>Proceed</strong> is known for its excellent profile on beneficial arthropods and predators once the spray deposit has dried.',
      answerPlain: 'Yes, Proceed is known for its excellent profile on beneficial arthropods and predators once the spray deposit has dried.'
    },
    {
      question: 'How does Emamectin Benzoate 5% SG work?',
      answer: 'It features a unique translaminar action, penetrating leaf tissues to create a reservoir of active ingredient, which targets hidden pests and remains rainfast.',
      answerPlain: 'It features a unique translaminar action, penetrating leaf tissues to create a reservoir of active ingredient, which targets hidden pests and remains rainfast.'
    }
  ];

  testimonials = [
    { text: 'Proceed has completely solved the bollworm problem in my cotton fields. Just 5 grams per pump is incredibly cost-effective.' },
    { text: 'The solubility of the SG formulation is perfect. It mixes instantly and gives my cabbage crop prolonged protection from DBM.' },
    { text: 'Its quick action is very noticeable. Caterpillars stop feeding immediately, which saves the crop from further damage.' }
  ];

  howToSteps = [
    { name: 'Preparation', text: 'Wear protective gear. Measure out 5 gm of Emamectin Benzoate 5% SG for a standard pump.' },
    { name: 'Pre-mixing', text: 'Dissolve the 5 gm in a small cup of clean water to make a slurry without lumps.' },
    { name: 'Tank Mixing', text: 'Fill the pump halfway with water, pour the slurry, and stir well.' },
    { name: 'Final Volume', text: 'Fill the remaining tank with water and agitate gently to ensure a uniform mix.' },
    { name: 'Application', text: 'Spray uniformly over the crop canopy, covering both sides of leaves.' },
    { name: 'Clean Up', text: 'Rinse equipment thoroughly and dispose of packaging responsibly.' }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.setMetaData();
    this.injectStructuredData();
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({ duration: 800, easing: 'ease-in-out', once: true });
    }
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.transferState.remove(META_KEY);
    this.transferState.remove(ORG_SCHEMA_KEY);
    this.transferState.remove(LOCALBUSINESS_SCHEMA_KEY);
    this.transferState.remove(WEBPAGE_SCHEMA_KEY);
    this.transferState.remove(BREADCRUMB_SCHEMA_KEY);
    this.transferState.remove(PRODUCT_SCHEMA_KEY);
    this.transferState.remove(ITEMLIST_SCHEMA_KEY);
    this.transferState.remove(FAQ_SCHEMA_KEY);
    this.transferState.remove(HOWTO_SCHEMA_KEY);
  }

  private setMetaData(): void {
    if (this.transferState.hasKey(META_KEY)) {
      return;
    }

    this.title.setTitle('Emamectin Benzoate 5% SG | Proceed | Harishree Crop Science');

    const desc =
      'Buy Emamectin Benzoate 5% SG (Proceed) for superior caterpillar and borer control. Dose 5 gm per pump. High-quality SG formulation. Harishree Crop Science.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Emamectin Benzoate 5% SG, Proceed, Emamectin Benzoate, Proceed insecticide, Emamectin Benzoate 5 SG price, Emamectin Benzoate uses, caterpillar control, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Emamectin Benzoate 5% SG | Proceed | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/PROCEED.png` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Emamectin Benzoate 5% SG | Proceed | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/PROCEED.png` }
    ];

    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }

  private injectStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.setOrganizationSchema();
    this.setLocalBusinessSchema();
    this.setWebPageSchema();
    this.setBreadcrumbSchema();
    this.setProductSchema();
    this.setItemListSchema();
    this.setFaqSchema();
    this.setHowToSchema();
  }

  private addJsonLd(json: object, key: ReturnType<typeof makeStateKey<string>>): void {
    const str = JSON.stringify(json);
    if (this.transferState.hasKey(key)) {
      this.appendScript(this.transferState.get(key, ''));
      return;
    }
    this.transferState.set(key, str);
    this.appendScript(str);
  }

  private appendScript(text: string): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = text;
    this.document.head.appendChild(script);
  }

  private setOrganizationSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${this.baseUrl}/#organization`,
      name: 'Harishree Crop Science',
      url: this.baseUrl,
      logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
      email: 'harishreecropscience@gmail.com',
      telephone: '+919898197196',
      sameAs: [
        'https://twitter.com/harishreecrop',
        'https://www.facebook.com/profile.php?id=61573857659074',
        'https://instagram.com/harishree_crop_science',
        'https://linkedin.com/company/harishree-crop-science'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
        addressLocality: 'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
        addressRegion: 'Gujarat',
        postalCode: '360110',
        addressCountry: 'IN'
      }
    };
    this.addJsonLd(data, ORG_SCHEMA_KEY);
  }

  private setLocalBusinessSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Harishree Crop Science',
      image: `${this.baseUrl}/assets/logo/HARISHREE.png`,
      url: this.baseUrl,
      telephone: '+919898197196',
      email: 'harishreecropscience@gmail.com',
      priceRange: 'INR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No.57, survey no. 751, Palki 2, harsiddhi park - 1',
        addressLocality: 'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
        addressRegion: 'Gujarat',
        postalCode: '360110',
        addressCountry: 'IN'
      },
      areaServed: [
        { '@type': 'City', name: 'Rajkot' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' }
      ],
      department: [
        {
          '@type': 'LocalBusiness',
          name: 'Emamectin Benzoate 5% SG (Proceed)',
          description: 'Premium Emamectin Benzoate 5% SG formulation designed to control tough caterpillar pests. Ideal for cotton, vegetables and fruit crops.',
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/harishree-crop-science',
        'https://www.instagram.com/harishree_crop_science',
        'https://www.facebook.com/harishreecropscience'
      ],
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
      }
    };
    this.addJsonLd(data, LOCALBUSINESS_SCHEMA_KEY);
  }

  private setWebPageSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.pageUrl}#webpage`,
      url: this.pageUrl,
      name: 'Emamectin Benzoate 5% SG (Proceed)',
      description:
        'Buy Emamectin Benzoate 5% SG (Proceed) — superior insecticide for caterpillar control. High efficacy and reliable performance from Harishree Crop Science.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${this.baseUrl}/#website`,
        url: this.baseUrl,
        name: 'Harishree Crop Science',
        publisher: { '@id': `${this.baseUrl}/#organization` }
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${this.baseUrl}/assets/products/PROCEED.png`,
        caption: 'Emamectin Benzoate 5% SG (Proceed) pack'
      }
    };
    this.addJsonLd(data, WEBPAGE_SCHEMA_KEY);
  }

  private setBreadcrumbSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: this.baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${this.baseUrl}/products` },
        { '@type': 'ListItem', position: 3, name: 'Emamectin Benzoate 5% SG', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Emamectin Benzoate 5% SG',
      alternateName: ['Emamectin Benzoate 5% SG', 'Proceed insecticide', 'Proceed', 'Emamectin Benzoate'],
      description:
        'Proceed (Emamectin Benzoate 5% SG) is our advanced insecticide formulation designed for comprehensive pest management. It offers rapid knockdown and long-lasting residual control against a broad spectrum of agricultural pests, especially caterpillars. The unique soluble granule formulation ensures better crop coverage, perfect solubility, and enhanced resistance to wash-off, making it ideal for professional farmers seeking reliable pest control solutions.',
      image: [`${this.baseUrl}/assets/products/PROCEED.png`],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },      
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: this.baseUrl,
        logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
          addressLocality: 'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
          addressRegion: 'Gujarat',
          postalCode: '360110',
          addressCountry: 'IN'
        }
      },
      category: 'Insecticide',
      sku: 'PRO-EMA5SG',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '45'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Organization', name: 'Harishree Field Team' },
          reviewBody: 'Outstanding translation action and reliable control over damaging caterpillars like Helicoverpa and Spodoptera.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          }
        }
      ],
      offers: {
        '@type': 'AggregateOffer',
        offerCount: this.packSizes.length,
        lowPrice: Math.min(...prices).toString(),
        highPrice: Math.max(...prices).toString(),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: this.pageUrl,
        priceValidUntil: getOfferPriceValidUntil(),
        hasMerchantReturnPolicy: merchantReturnPolicySchema(),
        shippingDetails: offerShippingDetailsSchema(),
        seller: { '@id': `${this.baseUrl}/#organization` }
      }
    };
    this.addJsonLd(data, PRODUCT_SCHEMA_KEY);
  }

  private setItemListSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Emamectin Benzoate 5% SG (Proceed) pack sizes',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Emamectin Benzoate 5% SG (Proceed) ${p.volume}`,
          image: `${this.baseUrl}/assets/products/PROCEED.png`,
          sku: p.sku,
          description: `Emamectin Benzoate 5% SG (Proceed) ${p.volume} pack from Harishree Crop Science - ${p.price} INR`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },               
          manufacturer: {
            '@type': 'Organization',
            name: 'Harishree Crop Science',
            url: this.baseUrl,
            logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot No.57, survey no. 751, Palki 2, harsiddhi park - 1',
              addressLocality: 'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
              addressRegion: 'Gujarat',
              postalCode: '360110',
              addressCountry: 'IN'
            }
          },
          category: 'Insecticide',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '45'
          },
          offers: {
            '@type': 'Offer',
            price: p.price.toString(),
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: this.pageUrl,
            priceValidUntil: getOfferPriceValidUntil(),
            hasMerchantReturnPolicy: merchantReturnPolicySchema(),
            shippingDetails: offerShippingDetailsSchema(),
            seller: { '@id': `${this.baseUrl}/#organization` }
          },
        }
      }))
    };
    this.addJsonLd(data, ITEMLIST_SCHEMA_KEY);
  }

  private setFaqSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answerPlain
        }
      }))
    };
    this.addJsonLd(data, FAQ_SCHEMA_KEY);
  }

  private setHowToSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to apply Emamectin Benzoate 5% SG (Proceed)',
      description: 'Effective application and mixing steps for Proceed insecticide.',
      image: `${this.baseUrl}/assets/products/PROCEED.png`,
      totalTime: 'PT15M',
      supply: [{ '@type': 'HowToSupply', name: 'Proceed (Emamectin Benzoate 5% SG)' }, { '@type': 'HowToSupply', name: 'Clean water' }],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer' },
        { '@type': 'HowToTool', name: 'Mixing cup' },
        { '@type': 'HowToTool', name: 'Safety gear' }
      ],
      step: this.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text
      }))
    };
    this.addJsonLd(data, HOWTO_SCHEMA_KEY);
  }
}
