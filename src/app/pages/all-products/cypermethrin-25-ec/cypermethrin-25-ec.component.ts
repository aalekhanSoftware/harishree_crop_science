import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title, TransferState, makeStateKey } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import Aos from 'aos';
import { environment } from '../../../../environments/environment';
import {
  getOfferPriceValidUntil,
  merchantReturnPolicySchema,
  offerShippingDetailsSchema
} from '../../../shared/schema/product-offer-jsonld';

const BUSINESS_SCHEMA_KEY = makeStateKey<string>('HCYPER25_BUSINESS_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('HCYPER25_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('HCYPER25_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('HCYPER25_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('HCYPER25_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('HCYPER25_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('HCYPER25_HOWTO_SCHEMA');

const INDICATIVE_LIST_PRICE_INR = 378;

@Component({
  selector: 'app-cypermethrin-25-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cypermethrin-25-ec.component.html',
  styleUrl: './cypermethrin-25-ec.component.scss'
})
export class Cypermethrin25EcComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/cypermethrin-25-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productTitle = 'Cypermethrin 25% EC';
  readonly productName = 'H-Cyper 25';
  readonly indiaMartUrl = 'https://www.indiamart.com/proddetail/h-cyper-25-cypermethrin-25-ec-2856634989955.html';
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/insecticide/cypermethrin-25-ec.jpg`;

  packSizes = [
    { volume: '500 ml', price: 201, featured: false, sku: 'HCYPER25-500ML' },
    { volume: '1 litre', price: 378, featured: true, sku: 'HCYPER25-1L' }
  ];

  keyBenefits = [
    {
      title: 'Quick knockdown on active pest pressure',
      description:
        'H-Cyper 25 provides fast contact response where chewing and sucking pest activity starts damaging leaves, flowers and developing fruit.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Reliable EC formulation for field spray programs',
      description:
        'The emulsifiable concentrate mixes smoothly under proper agitation and supports practical spray operations in routine farm schedules.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Useful in mixed insect windows',
      description:
        'It is commonly positioned when multiple pests appear together and farmers need one disciplined round with broad practical utility.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Simple dose discipline',
      description:
        'A clear guidance of 25 ml per pump helps spray operators maintain consistency across acreages and reduce measurement errors.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Supports crop quality protection',
      description:
        'Timely application at early infestation helps reduce feeding injury and supports stronger crop stand and cleaner marketable produce.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Suitable for integrated pest management',
      description:
        'Best outcomes come when H-Cyper 25 is used at ETL stage with regular scouting and rotation with other approved groups.',
      icon: 'fas fa-rotate-right'
    }
  ];

  targetPests = [
    {
      name: 'Bollworms (American, Spotted)',
      description: 'Helps reduce direct fruit and boll feeding losses when infestation starts at early crop stage.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Aphids',
      description: 'Used in practical schedules where aphid colonies begin affecting tender foliage and sap balance.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Jassids',
      description: 'Supports control strategy where hopper pressure leads to edge yellowing and leaf curl symptoms.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Thrips',
      description: 'Useful where scraping and silvering damage starts reducing quality in vegetables and field crops.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Cutworms',
      description: 'Can be included in crop protection windows where early-stage stem cutting affects stand establishment.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Leaf rollers and caterpillars',
      description: 'Supports foliar protection where leaf feeding and rolling reduce photosynthetic efficiency quickly.',
      icon: 'fas fa-bug'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'Commonly used in cotton programs for bollworm and sucking pest pressure under stage-based advisories.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Paddy',
      description: 'Useful where leaf-feeding insects and hoppers start reducing canopy health and tiller performance.',
      icon: 'fas fa-water'
    },
    {
      title: 'Brinjal and tomato',
      description: 'Positioned in vegetable crop schedules where fruit and foliage pests can quickly affect market quality.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Chilli and cabbage',
      description: 'Included in practical pest rounds for sap-feeding and foliar-feeding insects as per local recommendation.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Groundnut, soybean and pulses',
      description: 'Can be integrated in ETL-focused crop plans where mixed pest pressure appears in short intervals.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Application stage',
      description: 'Spray at first visible pest build-up with uniform canopy coverage and correct nozzle calibration.',
      icon: 'fas fa-clock'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: this.productName },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Type', value: 'Contact and stomach insecticide' },
      { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Chemical group', value: 'Synthetic pyrethroid' },
      { label: 'Form', value: 'Liquid' },
      { label: 'Country of origin', value: 'Made in India' }
    ],
    packs: [
      { label: 'Packaging size', value: '500 ml and 1 litre' },
      { label: 'Packaging type', value: 'Bottle' },
      { label: 'Recommended dose', value: '25 ml/pump' },
      { label: 'Water volume', value: '200-300 liters/acre' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Time of application', value: 'At early signs of pest infestation' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: this.productName },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Type', value: 'Contact and stomach insecticide' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Chemical Group', value: 'Synthetic pyrethroid' },
    {
      label: 'Mode of Action',
      value: 'Acts on insect nervous system and causes paralysis by disrupting sodium channel function'
    },
    {
      label: 'Target Insects',
      value: 'Bollworms (American, Spotted), aphids, jassids, thrips, cutworms, caterpillars, leaf rollers'
    },
    {
      label: 'Target Crops',
      value: 'Cotton, paddy, brinjal, tomato, cabbage, chilli, groundnut, soybean, pulses'
    },
    { label: 'Recommended Dose', value: '25 ml/pump (depending on crop and pest)' },
    { label: 'Water Volume', value: '200-300 liters/acre' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Time of Application', value: 'At early signs of pest infestation' },
    { label: 'Residual Effect', value: '7-10 days' },
    { label: 'Re-entry Interval', value: '24 hours after spraying' },
    { label: 'Pre-Harvest Interval', value: '7-10 days (crop-specific)' },
    { label: 'Toxicity', value: 'Moderately toxic (WHO Class II); toxic to fish and bees' },
    {
      label: 'Precautions',
      value: 'Avoid spraying during flowering, wear protective clothing, do not mix with strong alkaline substances'
    },
    { label: 'Availability', value: 'In Stock' },
    { label: 'View in Hindi', value: 'एच-साइपर 25 साइपरमेथ्रिन 25% ईसी, 1 लीटर, तरल' },
    { label: 'Official B2B source', value: this.indiaMartUrl }
  ];

  modeOfAction = [
    {
      title: 'Nerve signal disruption',
      description:
        'Cypermethrin acts on voltage-gated sodium channels in insect nerves and disturbs normal signal transmission.'
    },
    {
      title: 'Rapid paralysis sequence',
      description:
        'After exposure, pests lose coordination, stop feeding and gradually move toward paralysis and death.'
    },
    {
      title: 'Contact and stomach activity',
      description:
        'The formulation supports practical field response through both direct contact and ingestion pathways.'
    },
    {
      title: 'Timing-led field performance',
      description:
        'Best results are observed when H-Cyper 25 is sprayed early, before severe infestation causes irreversible crop injury.'
    }
  ];

  safetyItems = [
    { title: 'Use complete PPE before handling', text: 'Wear gloves, mask, eye protection and long-sleeve clothing while mixing and spraying.' },
    { title: 'Follow exact dose guidance', text: 'Measure only 25 ml per pump unless crop-specific recommendation advises otherwise.' },
    { title: 'Prepare premix in clean water', text: 'First premix in small volume, then transfer to tank and maintain agitation.' },
    { title: 'Avoid drift to non-target zones', text: 'Do not spray in high wind and avoid drift to fish ponds, bee activity zones and open water.' },
    { title: 'Observe re-entry and PHI', text: 'Allow 24-hour re-entry interval and follow crop-specific pre-harvest interval.' },
    { title: 'Prevent resistance pressure', text: 'Rotate mode of action in spray schedules and avoid repeated consecutive use.' }
  ];

  performanceHighlights = [
    {
      label: 'Fast visible field response',
      value: 'Growers choose H-Cyper 25 where a quick knockdown is needed to contain early pest spikes.'
    },
    {
      label: 'Practical fit across multiple crops',
      value: 'It supports pest management in cotton, cereals, pulses and vegetable production systems.'
    },
    {
      label: 'Operator-friendly dosing',
      value: 'The 25 ml per pump guidance helps maintain better spray consistency at field level.'
    },
    {
      label: 'Better outcomes with discipline',
      value: 'When used at right timing, coverage and rotation, performance remains more stable through the season.'
    }
  ];

  faqs = [
    {
      question: 'What is H-Cyper 25 (Cypermethrin 25% EC) used for?',
      answer:
        '<strong>H-Cyper 25</strong> is used for practical management of bollworms, aphids, jassids, thrips and other economically important crop pests.',
      answerPlain:
        'H-Cyper 25 is used for practical management of bollworms, aphids, jassids, thrips and other economically important crop pests.'
    },
    {
      question: 'What is the recommended dose of Cypermethrin 25% EC?',
      answer:
        'Field guidance is <strong>25 ml per pump</strong>. Final dose should follow crop label, stage and local agronomy advisory.',
      answerPlain:
        'Field guidance is 25 ml per pump. Final dose should follow crop label, stage and local agronomy advisory.'
    },
    {
      question: 'Which crops can use H-Cyper 25?',
      answer:
        'H-Cyper 25 is commonly used in <strong>cotton, paddy, brinjal, tomato, cabbage, chilli, groundnut, soybean and pulses</strong> as per recommendation.',
      answerPlain:
        'H-Cyper 25 is commonly used in cotton, paddy, brinjal, tomato, cabbage, chilli, groundnut, soybean and pulses as per recommendation.'
    },
    {
      question: 'How does Cypermethrin 25% EC work on insects?',
      answer:
        'It affects sodium channel function in insect nerves, causing rapid excitation, feeding stoppage and eventual paralysis.',
      answerPlain:
        'It affects sodium channel function in insect nerves, causing rapid excitation, feeding stoppage and eventual paralysis.'
    },
    {
      question: 'When should I spray H-Cyper 25 for best results?',
      answer:
        'Spray at <strong>early pest appearance</strong> with proper canopy coverage. Delayed heavy-infestation sprays often perform weaker.',
      answerPlain:
        'Spray at early pest appearance with proper canopy coverage. Delayed heavy-infestation sprays often perform weaker.'
    },
    {
      question: 'Where can I verify official technical details for this product?',
      answer:
        'You can review the technical table on this page and cross-check with our official IndiaMART listing for H-Cyper 25.',
      answerPlain:
        'You can review the technical table on this page and cross-check with our official IndiaMART listing for H-Cyper 25.'
    }
  ];

  testimonials = [
    {
      name: 'Nilesh',
      location: 'Rajkot district',
      text: 'We used H-Cyper 25 in cotton when bollworm activity started. The response was quick and crop damage stayed under control.',
      rating: 5
    },
    {
      name: 'Ravi',
      location: 'Jamnagar belt',
      text: 'The 25 ml per pump dose is easy for our spray team. With timely rounds, we got cleaner foliage and better crop stand.',
      rating: 5
    },
    {
      name: 'Paresh',
      location: 'Amreli region',
      text: 'In chilli and brinjal fields, H-Cyper 25 worked well when we sprayed early and followed proper rotation.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Put on gloves, mask, goggles and protective clothing before opening product bottle.' },
    { name: 'Measure dose', text: 'Measure H-Cyper 25 accurately at 25 ml per pump using a clean measuring cup.' },
    { name: 'Prepare premix', text: 'Mix measured quantity with a small volume of clean water before tank filling.' },
    { name: 'Fill and agitate', text: 'Transfer premix to spray tank, top up water and maintain uniform agitation.' },
    { name: 'Apply uniformly', text: 'Spray at early infestation stage with full canopy coverage in calm weather.' },
    { name: 'Post-spray safety', text: 'Wash equipment and follow safe disposal as per label and local regulations.' }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.updateSeo();
    this.setProductStructuredData();
    this.setBusinessStructuredData();
    this.setFaqStructuredData();
    this.setBreadcrumbStructuredData();
    this.setHowToStructuredData();
    this.setItemListStructuredData();
    this.setWebPageStructuredData();
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({ duration: 800, easing: 'ease-in-out', once: true });
    }
  }

  ngOnDestroy(): void {
    this.transferState.remove(BUSINESS_SCHEMA_KEY);
    this.transferState.remove(WEBPAGE_SCHEMA_KEY);
    this.transferState.remove(BREADCRUMB_SCHEMA_KEY);
    this.transferState.remove(PRODUCT_SCHEMA_KEY);
    this.transferState.remove(ITEMLIST_SCHEMA_KEY);
    this.transferState.remove(FAQ_SCHEMA_KEY);
    this.transferState.remove(HOWTO_SCHEMA_KEY);
  }

  private updateSeo() {
    const titleText = `${this.productTitle} | ${this.productName} Insecticide | Harishree Crop Science`;
    this.title.setTitle(titleText);

    const desc =
      `${this.productName} by Harishree Crop Science is a professional ${this.productTitle} insecticide with 25 ml/pump guidance. Explore benefits, pests, crops, technical specifications, usage safety and FAQs.`;

    this.meta.addTags([
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Cypermethrin 25% EC, H-Cyper 25, cypermethrin insecticide, cypermethrin 25 ec dose, 25 ml per pump cypermethrin, synthetic pyrethroid insecticide, bollworm control, aphid jassid thrips control, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },

      // Article meta tags
      { property: 'article:section', content: 'Insecticides' },
      { property: 'article:tag', content: 'Cypermethrin 25% EC' },
      { property: 'article:tag', content: 'H-Cyper 25' },
      { property: 'article:tag', content: 'cypermethrin insecticide' },
      { property: 'article:tag', content: 'cypermethrin 25 ec dose' },
      { property: 'article:tag', content: '25 ml per pump cypermethrin' },
      { property: 'article:tag', content: 'synthetic pyrethroid insecticide' },
      { property: 'article:tag', content: 'bollworm control' },
      { property: 'article:tag', content: 'aphid jassid thrips control' },
      { property: 'article:tag', content: 'Harishree Crop Science' },

      // Product meta tags
      { property: 'product:price:amount', content: Math.min(...this.packSizes.map((p) => p.price)).toString() },
      { property: 'product:price:currency', content: 'INR' },
      { property: 'product:availability', content: 'in stock' },
      { property: 'product:condition', content: 'new' },
      { property: 'product:brand', content: 'Harishree Crop Science' },

      // Location-specific meta tags
      { property: 'og:title', content: titleText },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: this.bottleImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '800' },
      { property: 'og:image:alt', content: 'Cypermethrin 25% EC - H-Cyper 25' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:site_name', content: 'Harishree Crop Science' },
      { property: 'og:locality', content: 'Rajkot' },
      { property: 'og:region', content: 'Gujarat' },
      { property: 'og:postal-code', content: '360110' },
      { property: 'og:country-code', content: 'IN' },
      { property: 'og:country-name', content: 'India' },


      // Twitter Card Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: titleText },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: this.bottleImageUrl },
      { name: 'twitter:image:alt', content: 'Cypermethrin 25% EC - H-Cyper 25' }
    ]);
  }

  private setProductStructuredData() {
    if (this.transferState.hasKey(PRODUCT_SCHEMA_KEY)) {
      this.addJsonLd(this.transferState.get(PRODUCT_SCHEMA_KEY, ''));
      return;
    }

    const prices = this.packSizes.map((p) => p.price);
    const schema = {
      "@context": "https://schema.org/",
      "@type": "ProductGroup",
      "productGroupID": "HCYPER-25",
      "variesBy": [
        "https://schema.org/size"
      ],
      "category": "Insecticide, Cypermethrin 25 EC, Crop Protection",
      "name": this.productTitle,
      "url": this.pageUrl,
      "image": [this.bottleImageUrl],
      "description": `${this.productName} (${this.productTitle}) is a contact and stomach insecticide for practical management of major crop pests in field programs.`,
      "keywords": "Cypermethrin 25% EC, H-Cyper 25, cypermethrin insecticide, cypermethrin 25 ec dose, 25 ml per pump cypermethrin, synthetic pyrethroid insecticide, bollworm control, aphid jassid thrips control, Harishree Crop Science",
      "sku": "HCYPER-25",
      "brand": {
        "@type": "Brand",
        "name": "Harishree Crop Science"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Harishree Crop Science",
        "url": this.baseUrl,
        "logo": `${this.baseUrl}/assets/logo/HARISHREE.png`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No.57, survey no. 751, Palki 2, harsiddhi park - 1",
          "addressLocality": "Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110",
          "addressRegion": "Gujarat",
          "postalCode": "360110",
          "addressCountry": "IN"
        }
      },
      "alternateName": [
        this.productName,
        "H Cyper 25",
        "Cypermethrin 25 EC",
        "Cypermethrin 25% EC insecticide"
      ],
      "material": "EC (Emulsifiable Concentrate)",
      "offers": {
        "@type": "AggregateOffer",
        "url": this.pageUrl,
        "priceCurrency": "INR",
        "lowPrice": Math.min(...prices).toString(),
        "highPrice": Math.max(...prices).toString(),
        "offerCount": this.packSizes.length.toString(),
        "price": Math.min(...prices).toString(),
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "priceValidUntil": getOfferPriceValidUntil(),
        "hasMerchantReturnPolicy": merchantReturnPolicySchema(),
        "shippingDetails": offerShippingDetailsSchema(),
        "seller": {
          "@type": "Organization",
          "name": "Harishree Crop Science"
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "State", "name": "Gujarat" },
          { "@type": "AdministrativeArea", "name": "Worldwide" }
        ],
        "deliveryLeadTime": {
          "@type": "QuantitativeValue",
          "minValue": "2",
          "maxValue": "7",
          "unitCode": "DAY"
        },
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "unitCode": "FTK",
          "value": "1"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "34",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": this.testimonials.map((item) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": item.name },
        "reviewBody": item.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": item.rating.toString(),
          "bestRating": "5"
        }
      })),
      "additionalProperty": [
        ...this.officialProductDetails.map((row) => ({
          "@type": "PropertyValue",
          "name": row.label,
          "value": row.value
        })),
        { "@type": "PropertyValue", "name": "Dose", "value": "25 ml/pump" },
        { "@type": "PropertyValue", "name": "Company product name", "value": this.productName },
        { "@type": "PropertyValue", "name": "Primary keyword", "value": this.productTitle },
        { "@type": "PropertyValue", "name": "Secondary keyword", "value": this.productName }
      ],
      "hasVariant": this.packSizes.map((p) => ({
        "@type": "Product",
        "name": `${this.productTitle} - ${p.volume}`,
        "sku": p.sku,
        "image": this.bottleImageUrl,
        "description": `${this.productTitle} ${p.volume} pack by Harishree Crop Science.`,
        "brand": {
          "@type": "Brand",
          "name": "Harishree Crop Science"
        },
        "size": p.volume,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": p.price.toString(),
          "priceValidUntil": getOfferPriceValidUntil(),
          "hasMerchantReturnPolicy": merchantReturnPolicySchema(),
          "shippingDetails": offerShippingDetailsSchema(),
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      }))
    };

    const schemaString = JSON.stringify(schema);
    this.transferState.set(PRODUCT_SCHEMA_KEY, schemaString);
    this.addJsonLd(schemaString);
  }

  private setBusinessStructuredData(): void {
    if (this.transferState.hasKey(BUSINESS_SCHEMA_KEY)) {
      this.addJsonLd(this.transferState.get(BUSINESS_SCHEMA_KEY, ''));
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Harishree Crop Science",
      "image": `${this.baseUrl}/assets/logo/HARISHREE.png`,
      "url": this.baseUrl,
      "telephone": "+91 9898197196",
      "email": "harishreecropscience@gmail.com",
      "priceRange": "INR",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No.57, survey no. 751, Palki 2, harsiddhi park - 1",
        "addressLocality": "Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110",
        "addressRegion": "Gujarat",
        "postalCode": "360110",
        "addressCountry": "IN"
      },
      "department": [
        {
          "@type": "LocalBusiness",
          "name": `${this.productName} (${this.productTitle})`,
          "description": `${this.productName} is Harishree Crop Science ${this.productTitle} solution for practical crop pest management.`
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "areaServed": [
        { "@type": "State", "name": "Gujarat" },
        { "@type": "Country", "name": "India" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/harishree-crop-science",
        "https://www.instagram.com/harishree_crop_science",
        "https://www.facebook.com/harishreecropscience"
      ]
    };

    const schemaString = JSON.stringify(schema);
    this.transferState.set(BUSINESS_SCHEMA_KEY, schemaString);
    this.addJsonLd(schemaString);
  }

  private setFaqStructuredData(): void {
    if (this.transferState.hasKey(FAQ_SCHEMA_KEY)) {
      this.addJsonLd(this.transferState.get(FAQ_SCHEMA_KEY, ''));
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answerPlain
        }
      }))
    };

    const schemaString = JSON.stringify(schema);
    this.transferState.set(FAQ_SCHEMA_KEY, schemaString);
    this.addJsonLd(schemaString);
  }

  private setBreadcrumbStructuredData() {
    if (this.transferState.hasKey(BREADCRUMB_SCHEMA_KEY)) {
      this.addJsonLd(this.transferState.get(BREADCRUMB_SCHEMA_KEY, ''));
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": this.baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": `${this.baseUrl}/products` },
        { "@type": "ListItem", "position": 3, "name": "Insecticides", "item": `${this.baseUrl}/products` },
        { "@type": "ListItem", "position": 4, "name": `${this.productName} (${this.productTitle})`, "item": this.pageUrl }
      ]
    };

    const schemaString = JSON.stringify(schema);
    this.transferState.set(BREADCRUMB_SCHEMA_KEY, schemaString);
    this.addJsonLd(schemaString);
  }

  private setHowToStructuredData() {
    if (this.transferState.hasKey(HOWTO_SCHEMA_KEY)) {
      this.addJsonLd(this.transferState.get(HOWTO_SCHEMA_KEY, ''));
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to apply ${this.productTitle}`,
      "description": `Step-by-step field guidance for safe and effective spray preparation of ${this.productTitle}.`,
      "image": this.bottleImageUrl,
      "totalTime": "PT20M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": String(INDICATIVE_LIST_PRICE_INR)
      },
      "supply": [
        { "@type": "HowToSupply", "name": this.productTitle },
        { "@type": "HowToSupply", "name": "Clean water" }
      ],
      "tool": [
        { "@type": "HowToTool", "name": "Knapsack sprayer / power sprayer" },
        { "@type": "HowToTool", "name": "Measuring cup (ml)" },
        { "@type": "HowToTool", "name": "Personal protective equipment (PPE)" }
      ],
      "step": this.howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        "image": this.bottleImageUrl,
        "url": `${this.pageUrl}#step-${index + 1}`
      }))
    };

    const schemaString = JSON.stringify(schema);
    this.transferState.set(HOWTO_SCHEMA_KEY, schemaString);
    this.addJsonLd(schemaString);
  }

  private setItemListStructuredData() {
    if (this.transferState.hasKey(ITEMLIST_SCHEMA_KEY)) {
      this.addJsonLd(this.transferState.get(ITEMLIST_SCHEMA_KEY, ''));
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `${this.productTitle} - pack sizes`,
      "description": `${this.productTitle} pack size list with schema-only GST-inclusive prices.`,
      "numberOfItems": this.packSizes.length,
      "itemListElement": this.packSizes.map((pack, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": `${this.productTitle} - ${pack.volume}`,
          "image": this.bottleImageUrl,
          "sku": pack.sku,
          "description": `${this.productTitle} ${pack.volume} pack by Harishree Crop Science.`,
          "brand": {
            "@type": "Brand",
            "name": "Harishree Crop Science"
          },
          "category": "Insecticide",
          "additionalProperty": [
            { "@type": "PropertyValue", "name": "Technical composition", "value": this.productTitle },
            { "@type": "PropertyValue", "name": "Pack size", "value": pack.volume },
            { "@type": "PropertyValue", "name": "Dose", "value": "25 ml/pump" },
            { "@type": "PropertyValue", "name": "Company product name", "value": this.productName }
          ],
          "offers": {
            "@type": "Offer",
            "price": pack.price.toString(),
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": this.pageUrl,
            "itemCondition": "https://schema.org/NewCondition",
            "priceValidUntil": getOfferPriceValidUntil(),
            "hasMerchantReturnPolicy": merchantReturnPolicySchema(),
            "shippingDetails": offerShippingDetailsSchema()
          }
        }
      }))
    };

    const schemaString = JSON.stringify(schema);
    this.transferState.set(ITEMLIST_SCHEMA_KEY, schemaString);
    this.addJsonLd(schemaString);
  }

  private setWebPageStructuredData() {
    if (this.transferState.hasKey(WEBPAGE_SCHEMA_KEY)) {
      this.addJsonLd(this.transferState.get(WEBPAGE_SCHEMA_KEY, ''));
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${this.pageUrl}#webpage`,
      "url": this.pageUrl,
      "name": `${this.productTitle} - ${this.productName} by Harishree Crop Science`,
      "description": `${this.productTitle} (${this.productName}) product page with technical specifications, mode of action, usage guidance, FAQs and crop application support.`,
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${this.baseUrl}/#website`,
        "url": this.baseUrl,
        "name": "Harishree Crop Science",
        "publisher": {
          "@type": "Organization",
          "name": "Harishree Crop Science"
        }
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero", ".section-title", ".hero-content h1"]
      },
      "author": {
        "@type": "Organization",
        "name": "Harishree Crop Science"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": this.bottleImageUrl,
        "caption": `${this.productName} ${this.productTitle} bottle`
      }
    };

    const schemaString = JSON.stringify(schema);
    this.transferState.set(WEBPAGE_SCHEMA_KEY, schemaString);
    this.addJsonLd(schemaString);
  }

  private addJsonLd(schema: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = schema;
    this.document.head.appendChild(script);
  }
}
