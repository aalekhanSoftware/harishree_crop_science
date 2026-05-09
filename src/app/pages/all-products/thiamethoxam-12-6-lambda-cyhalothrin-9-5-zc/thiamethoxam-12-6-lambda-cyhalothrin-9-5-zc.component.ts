import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
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

const META_KEY = makeStateKey<boolean>('MISSION_ZC_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('MISSION_ZC_HOWTO_SCHEMA');

/** Indicative list price for schema only; pack-wise offers. */
const INDICATIVE_LIST_PRICE_INR = 250;

@Component({
  selector: 'app-thiamethoxam-12-6-lambda-cyhalothrin-9-5-zc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thiamethoxam-12-6-lambda-cyhalothrin-9-5-zc.component.html',
  styleUrl: './thiamethoxam-12-6-lambda-cyhalothrin-9-5-zc.component.scss'
})
export class Thiamethoxam12_6LambdaCyhalothrin9_5ZcComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/thiamethoxam-12-6-lambda-cyhalothrin-9-5-zc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  readonly indiaMartUrl =
    'https://www.indiamart.com/proddetail/mission-thiamethoxam-12-6-lambda-cyhalothrin-9-5-zc-2855406674355.html';

  /** Used for hero + og image and JSON-LD. */
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/thiamethoxam-12-6-lambda-cyhalothrin-9-5-zc.jpg`;
  readonly specFigureImage = 'assets/products/mission-indiamart-spec-reference.png';

  productTitle = 'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC';

  packSizes = [
    { volume: '100 ml', price: 100, featured: false, sku: 'MIS-12-6-95-ZC-100ML' },
    { volume: '250 ml', price: 235, featured: true, sku: 'MIS-12-6-95-ZC-250ML' },
    { volume: '500 ml', price: 454, featured: false, sku: 'MIS-12-6-95-ZC-500ML' },
    { volume: '1 Ltr', price: 885, featured: false, sku: 'MIS-12-6-95-ZC-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'Two-action protection for mixed pest pressure',
      description:
        'Mission combines systemic activity from Thiamethoxam with contact performance from Lambda-Cyhalothrin, helping you manage both sucking and early chewing pests in one spray window.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Works from within and on the leaf surface',
      description:
        'Thiamethoxam supports internal protection while Lambda-Cyhalothrin improves knockdown on contact, so pests are less likely to keep feeding in the canopy.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'ZC formulation for practical mixing',
      description:
        'The ZC formulation is designed to disperse and apply smoothly for knapsack or power sprayers, supporting more consistent coverage.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Field guidance you can follow',
      description:
        'Recommended dose is 20 ml per pump with 150-200 litres of water per acre (adjust to canopy and label guidance for your crop).',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Time-saving application discipline',
      description:
        'Rainfastness is typically 1-2 hours after application, helping you plan sprays around the weather instead of guessing at it.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Rotation-friendly approach',
      description:
        'Because Mission is a blend, still follow resistance rotation plans and local ETL/threshold schedules instead of repeating the same chemistry blindly.',
      icon: 'fas fa-rotate-right'
    }
  ];

  targetPests = [
    {
      name: 'Aphids',
      description:
        'Helps reduce sap-sucking colonies that weaken tender growth. Focus on early infestation so leaves stay marketable.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Jassids',
      description:
        'Supports control where leafhopper pressure causes yellowing and poor stand performance in crop cycles.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Whiteflies',
      description:
        'Improves knockdown on contact while systemic action supports continued protection in the treated canopy.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Thrips',
      description:
        'Targets thrips that curl and scar foliage or blossoms. Coverage on leaf undersides matters.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Bollworms & caterpillars',
      description:
        'Useful for early-stage bollworms/caterpillars where you need combined protection in the same field operation.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Leaf folders',
      description:
        'Helps manage leaf folder feeding pressure when applied at early infestation as per your ETL/label guidance.',
      icon: 'fas fa-bug'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Designed for field conditions where sucking pests and early chewing damage show up together. Spray using enough water to cover the canopy.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Wheat & Paddy',
      description:
        'Supports control of major sap-sucking pests in crop schedules. Apply at early infestation to avoid escalation.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Soybean',
      description:
        'Helps protect foliage quality and stand vigor when pest pressure builds quickly in the season.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Brinjal, Chilli & Tomato',
      description:
        'Useful when mixed pest pressure appears. Ensure spray reach to leaf undersides where thrips and sucking pests hide.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Okra & Groundnut',
      description:
        'Helps manage key insect populations while maintaining better coverage through disciplined mixing and steady application.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'ETL-based field use',
      description:
        'Mission works best when your decision is based on scouting, threshold and label-defined application stage (avoid unnecessary repeats).',
      icon: 'fas fa-clipboard-check'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: 'MISSION' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'ZC (mixed formulation)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Concentration / Composition', value: 'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC' },
      { label: 'Insecticide type', value: 'Systemic + Contact broad-spectrum insecticide' },
      {
        label: 'Chemical groups',
        value: 'Thiamethoxam: Neonicotinoid (systemic); Lambda-Cyhalothrin: Pyrethroid (contact)'
      },
      {
        label: 'Mode of action',
        value:
          'Thiamethoxam binds to nicotinic acetylcholine receptors -> nerve failure; Lambda-Cyhalothrin blocks sodium channels -> paralysis and death'
      },
      { label: 'Action type', value: 'Systemic, Contact, and Stomach action' },
      {
        label: 'Target pests',
        value:
          'Sucking pests: Aphids, Jassids, Whiteflies, Thrips; Chewing pests: Bollworms, Caterpillars, Leaf folders'
      },
      { label: 'Target crops', value: 'Cotton, Wheat, Paddy, Soybean, Brinjal, Chilli, Tomato, Okra, Groundnut' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (Liquid ZC); pack sizes supported in schema' },
      { label: 'Recommended dose', value: '20 ml/pump' },
      { label: 'Water volume', value: '150-200 litres/acre' },
      { label: 'Application method', value: 'Foliar spray using knapsack/power sprayer' },
      { label: 'Application stage', value: 'At early pest infestation or as per ETL' },
      { label: 'Rainfastness', value: '1-2 hours after application' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides (avoid strong alkaline mixtures)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  /** Exact parameter rows for the technical spec table and JSON-LD additionalProperty. */
  officialProductDetails = [
    { label: 'Product Name', value: 'MISSION' },
    { label: 'Technical Composition', value: 'Thiamethoxam 12.6% + Lambda-Cyhalothrin 9.5% ZC' },
    { label: 'Formulation', value: 'ZC (Mixed formulation – Capsule Suspension + Suspension Concentrate)' },
    { label: 'Insecticide Type', value: 'Systemic + Contact broad-spectrum insecticide' },
    {
      label: 'Chemical Groups',
      value: 'Thiamethoxam: Neonicotinoid (systemic) - Lambda-Cyhalothrin: Pyrethroid (contact)'
    },
    {
      label: 'Mode of Action',
      value:
        'Thiamethoxam binds to nicotinic acetylcholine receptors -> nerve failure; Lambda-Cyhalothrin blocks sodium channels -> paralysis and death'
    },
    { label: 'Action Type', value: 'Systemic, Contact, and Stomach action' },
    {
      label: 'Target Pests',
      value: 'Sucking pests: Aphids, Jassids, Whiteflies, Thrips; Chewing pests: Bollworms, Caterpillars, Leaf folders'
    },
    { label: 'Target Crops', value: 'Cotton, Paddy, Soybean, Brinjal, Chilli, Tomato, Okra, Groundnut' },
    { label: 'Recommended Dose', value: '20 ml/pump' },
    { label: 'Water Volume', value: '150-200 litres/acre' },
    { label: 'Application Method', value: 'Foliar spray using knapsack/power sprayer' },
    { label: 'Application Stage', value: 'At early pest infestation or as per ETL' },
    { label: 'Rainfastness', value: '1-2 hours after application' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides (avoid strong alkaline mixtures)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; follow resistance rotation plans' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Formulation Type', value: 'ZC' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Composition', value: 'Lambda Cyhalothrin + Thiamethoxam' },
    { label: 'Packaging Size (reference)', value: '1 liter' },
    { label: 'Packaging Type', value: 'Bottle' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation (reference)', value: 'ZC' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Systemic capture into plant tissues',
      description:
        'Thiamethoxam moves into the crop and helps protect newer growth, reducing feeding damage where pests try to keep sucking in the canopy.'
    },
    {
      title: 'Contact knockdown on exposed pests',
      description:
        'Lambda-Cyhalothrin improves contact action so pests affected by the spray deposit are pushed quickly towards paralysis and stop-feeding.'
    },
    {
      title: 'Nerve disruption leading to pest death',
      description:
        'Thiamethoxam affects nicotinic acetylcholine receptors, while Lambda-Cyhalothrin blocks sodium channels. The combined effect disrupts normal nerve signaling.'
    },
    {
      title: 'ETL-based timing gives cleaner results',
      description:
        'Apply at early pest infestation so you hit the population before it spreads. Keep intervals sensible and rotate chemistry in the programme.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear PPE during mixing and spray',
      text: 'Use gloves, goggles and a fitted mask. Avoid touching eyes/skin during measuring and application. Wash after work.'
    },
    {
      title: 'Pre-mix in clean water first',
      text: 'Measure the dose (20 ml/pump) and pre-mix in a small volume of water before adding to the tank. Stir for uniform mixing.'
    },
    {
      title: 'Spray for real coverage',
      text: 'Use a steady spray technique to reach leaf undersides. Good coverage improves effectiveness and reduces the need for repeated sprays.'
    },
    {
      title: 'Avoid sensitive areas and water bodies',
      text: 'Do not spray near ponds/streams or where spray drift can enter water. Follow buffer guidance from your local label advisory.'
    },
    {
      title: 'Plan re-entry and hygiene',
      text: 'Keep people out of the field until the re-entry interval (24 hours with PPE). Clean equipment and properly dispose empty containers.'
    },
    {
      title: 'Follow resistance rotation plans',
      text: 'Use Mission as per threshold/ETL and rotate modes of action. Avoid repeated use of the same chemistry across the season.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Rainfastness you can plan for',
      value: 'Typically 1-2 hours after application, so you can work around weather windows more confidently.'
    },
    {
      label: 'Broad-spectrum action',
      value: 'Designed to cover sucking pests plus early chewing pressure when applied at the right field stage.'
    },
    {
      label: 'Dose discipline keeps results consistent',
      value: '20 ml/pump guidance helps prevent under-dosing and supports stable spray performance.'
    },
    {
      label: 'Better canopy protection',
      value: 'Internal plus contact activity helps reduce continued feeding in the treated crop.'
    }
  ];

  faqs = [
    {
      question: 'What is Mission (Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC) used for?',
      answer:
        '<strong>Mission</strong> is an insecticide designed for <strong>sucking pests</strong> like aphids, jassids, whiteflies and thrips, and for <strong>early chewing pests</strong> such as bollworms, caterpillars and leaf folders in label crops like cotton, wheat, paddy and soybean.',
      answerPlain:
        'Mission is an insecticide designed for sucking pests like aphids, jassids, whiteflies and thrips, and for early chewing pests such as bollworms, caterpillars and leaf folders in label crops like cotton, wheat, paddy and soybean.'
    },
    {
      question: 'What is the recommended dose for Mission?',
      answer:
        'The recommended guidance is <strong>20 ml per pump</strong>. Use the right water volume for your canopy and confirm the final dose with the printed label and local advisory.',
      answerPlain:
        'The recommended guidance is 20 ml per pump. Use the right water volume for your canopy and confirm the final dose with the printed label and local advisory.'
    },
    {
      question: 'Which crops can I apply Mission on?',
      answer:
        'Mission is referenced for <strong>Cotton, Wheat, Paddy, Soybean</strong> and also crop lists like brinjal, chilli, tomato, okra and groundnut (as per your label and ETL/threshold conditions).',
      answerPlain:
        'Mission is referenced for Cotton, Wheat, Paddy, Soybean and also crop lists like brinjal, chilli, tomato, okra and groundnut (as per your label and ETL/threshold conditions).'
    },
    {
      question: 'How long after spraying before rain can happen?',
      answer:
        'Typical rainfastness is <strong>1-2 hours after application</strong>. Avoid spraying right before heavy rain and follow local weather timing for better outcomes.',
      answerPlain:
        'Typical rainfastness is 1-2 hours after application. Avoid spraying right before heavy rain and follow local weather timing for better outcomes.'
    },
    {
      question: 'What is the re-entry interval and PPE guidance?',
      answer:
        'Re-entry is generally <strong>24 hours</strong>. When entering the field after spraying, wear proper PPE and follow your label precautions.',
      answerPlain:
        'Re-entry is generally 24 hours. When entering the field after spraying, wear proper PPE and follow your label precautions.'
    },
    {
      question: 'Can I mix Mission with other insecticides or fungicides?',
      answer:
        'Mission is generally compatible with many insecticides/fungicides, but avoid strong alkaline mixtures. Always do a jar test with the exact products and water source before field mixing.',
      answerPlain:
        'Mission is generally compatible with many insecticides/fungicides, but avoid strong alkaline mixtures. Always do a jar test with the exact products and water source before field mixing.'
    }
  ];

  testimonials = [
    {
      name: 'Ketan',
      location: 'Rajkot, Gujarat',
      text: 'We used Mission at early pest appearance in cotton. After spraying with proper coverage, the sucking pests stopped escalating and the field looked calmer during the week.',
      rating: 5
    },
    {
      name: 'Vikram',
      location: 'Jamnagar, Gujarat',
      text: 'Thrips and leaf folder pressure were building on vegetables. Mission helped us manage the mixed pest stage without changing multiple products every round.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Paddhari belt',
      text: 'The 20 ml/pump dose is simple to follow. With the spray window and rainfastness timing, our team could plan applications better and reduce repeat passes.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Wear gloves, goggles and a mask before opening the bottle. Keep kids away from the mixing area.' },
    {
      name: 'Measure Mission',
      text: 'Measure 20 ml per pump (use the right measure). Close the cap immediately after dosing.'
    },
    {
      name: 'Pre-mix in clean water',
      text: 'Add the measured dose to a small volume of clean water. Stir until the mixture looks uniform.'
    },
    {
      name: 'Fill and agitate',
      text: 'Pour the pre-mix into the tank and top up with water. Keep agitation on so the spray stays consistent.'
    },
    {
      name: 'Apply foliar coverage',
      text: 'Spray evenly over foliage using knapsack/power sprayer, ensuring better reach to leaf undersides for thrips and sucking pests.'
    },
    {
      name: 'Rinse and dispose responsibly',
      text: 'Triple-rinse the measuring equipment and sprayer parts. Dispose containers as per local label guidance.'
    }
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

    this.title.setTitle(`Mission | ${this.productTitle} | Harishree Crop Science`);

    const desc =
      `Mission (${this.productTitle}) by Harishree Crop Science: systemic + contact broad-spectrum insecticide for cotton, wheat, paddy and soybean. Dose: 20 ml/pump. Rainfastness: 1-2 hours.`;

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC, Mission, Mission insecticide, thiamethoxam lambda cyhalothrin ZC, ZC capsule suspension, systemic contact insecticide, cotton insecticide, paddy insecticide, soybean insecticide, 20 ml/pump, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: `Mission | ${this.productTitle} | Harishree Crop Science` },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: this.bottleImageUrl },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `Mission | ${this.productTitle} | Harishree Crop Science` },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: this.bottleImageUrl }
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

  private specImageAbsoluteUrl(): string {
    return `${this.baseUrl}/${this.specFigureImage.replace(/^\//, '')}`;
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
          name: `Mission (${this.productTitle})`,
          description:
            'Harishree Crop Science Mission insecticide: systemic + contact broad-spectrum control for common sucking and early chewing pests in label crops.'
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
      name: `Mission (${this.productTitle}) by Harishree Crop Science`,
      description:
        `Mission (${this.productTitle}) product page with dose, crops, safety and Indiamart reference. Primary keyword: ${this.productTitle}.`,
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
        url: this.bottleImageUrl,
        caption: `Mission ${this.productTitle} bottle by Harishree Crop Science`
      },
      breadcrumb: {
        '@id': `${this.pageUrl}#breadcrumb`
      }
    };
    this.addJsonLd(data, WEBPAGE_SCHEMA_KEY);
  }

  private setBreadcrumbSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${this.pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: this.baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${this.baseUrl}/products` },
        { '@type': 'ListItem', position: 3, name: 'Insecticides', item: `${this.baseUrl}/products` },
        {
          '@type': 'ListItem',
          position: 4,
          name: `Mission (${this.productTitle})`,
          item: this.pageUrl
        }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const specImgUrl = this.specImageAbsoluteUrl();

    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.productTitle,
      alternateName: [
        'Mission',
        'Mission ZC',
        'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC',
        'Thiamethoxam Lambda Cyhalothrin insecticide'
      ],
      description:
        `Mission (${this.productTitle}) by Harishree Crop Science is a ZC mixed formulation insecticide with systemic and contact action. It helps control sucking pests (aphids, jassids, whiteflies, thrips) and early chewing pests in crops such as cotton, wheat, paddy and soybean. Dose: 20 ml/pump with 150-200 L/acre guidance.`,
      image: [this.bottleImageUrl, specImgUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: 'Mission',
      category: 'Insecticide',
      sku: 'MIS-12-6-95ZC',
      material: 'ZC (Liquid)',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        {
          '@type': 'PropertyValue',
          name: 'Indicative list price (all taxes)',
          value: `INR ${INDICATIVE_LIST_PRICE_INR}`
        },
        {
          '@type': 'PropertyValue',
          name: 'Mission dose per pump',
          value: '20 ml/pump'
        },
        {
          '@type': 'PropertyValue',
          name: 'Official B2B listing URL',
          value: this.indiaMartUrl
        },
        { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC' },
        { '@type': 'PropertyValue', name: 'Formulation', value: 'ZC (Capsule Suspension + Suspension Concentrate)' },
        { '@type': 'PropertyValue', name: 'Manufacturer', value: 'Harishree Crop Science' }
      ],
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '36',
        bestRating: '5',
        worstRating: '1'
      },
      review: this.testimonials.map((item) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: item.name
        },
        reviewBody: item.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: item.rating.toString(),
          bestRating: '5'
        }
      })),
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
      name: `Mission (${this.productTitle}) - pack sizes`,
      description: 'Harishree Crop Science Mission insecticide pack sizes with schema-only.',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Mission (${this.productTitle}) - ${p.volume}`,
          image: this.bottleImageUrl,
          sku: p.sku,
          description: `Mission (${this.productTitle}) - ${p.volume} pack from Harishree Crop Science.`,
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
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Recommended dose', value: '20 ml/pump' },
            { '@type': 'PropertyValue', name: 'Water volume', value: '150-200 litres/acre' },
            { '@type': 'PropertyValue', name: 'Application method', value: 'Foliar spray using knapsack/power sprayer' },
          ],
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
          }
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
      name: `How to mix and apply Mission (${this.productTitle})`,
      description:
        'Field steps for preparing a knapsack/power sprayer tank of Mission (Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% ZC) for foliar application.',
      image: this.bottleImageUrl,
      totalTime: 'PT20M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: String(INDICATIVE_LIST_PRICE_INR)
      },
      supply: [
        { '@type': 'HowToSupply', name: 'Mission' },
        { '@type': 'HowToSupply', name: 'Clean water' }
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer / power sprayer' },
        { '@type': 'HowToTool', name: 'Measuring cup (ml)' },
        { '@type': 'HowToTool', name: 'Personal protective equipment (PPE)' }
      ],
      step: this.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        image: this.bottleImageUrl
      }))
    };

    this.addJsonLd(data, HOWTO_SCHEMA_KEY);
  }
}

