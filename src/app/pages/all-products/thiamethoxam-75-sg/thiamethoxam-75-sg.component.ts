import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import {
  getOfferPriceValidUntil,
  merchantReturnPolicySchema,
  offerShippingDetailsSchema
} from '../../../shared/schema/product-offer-jsonld';

const META_KEY = makeStateKey<boolean>('THIO75_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('THIO75_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('THIO75_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('THIO75_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('THIO75_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('THIO75_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('THIO75_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('THIO75_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('THIO75_HOWTO_SCHEMA');

@Component({
  selector: 'app-thiamethoxam-75-sg',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thiamethoxam-75-sg.component.html',
  styleUrl: './thiamethoxam-75-sg.component.scss'
})
export class Thiamethoxam75SgComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/thiamethoxam-75-sg';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  packSizes = [
    { volume: '100 gm', price: 413, featured: false, sku: 'Thio-H 75-100GM' },
    { volume: '250 gm', price: 1027, featured: true, sku: 'Thio-H 75-250GM' },
    { volume: '500 gm', price: 2041, featured: false, sku: 'Thio-H 75-500GM' },
    { volume: '1 Kg', price: 4059, featured: false, sku: 'Thio-H 75-1KG' }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum pest control',
      description: 'Provides excellent control against a wide range of sucking pests across various crops ensuring comprehensive protection.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Powerful systemic action',
      description: 'Quickly absorbs into plant tissues, protecting both older foliage and sensitive new growth from hidden pests.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'High-strength SG formulation',
      description: 'The premium 75% Soluble Granule dissolves rapidly in water for easy mixing, ensuring uniform coverage without nozzle clogging.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Long-lasting residual effect',
      description: 'Maintains prolonged effectiveness, reducing the need for repeated applications and saving on overall spraying costs.',
      icon: 'fas fa-clock'
    }
  ];

  targetPests = [
    { name: 'Brown Plant Hopper (BPH)', description: 'Highly effective in managing devastating hopper populations in paddy.' },
    { name: 'Aphids & Jassids', description: 'Prevents sap-sucking damage and associated viral disease transmission in cotton and vegetables.' },
    { name: 'Whiteflies', description: 'Strong systemic activity helps control complex whitefly life stages on various horticultural crops.' },
    { name: 'Thrips', description: 'Reduces thrip infestations which cause severe curling and scarring on leaves and fruits.' },
    { name: 'Stem Borer (Early stage)', description: 'Helps suppress early instars through strong systemic movement in the plant canopy.' },
    { name: 'Flea Beetles', description: 'Prevents typical shot-hole damage on young seedlings in field crops.' }
  ];

  applications = [
    { title: 'Paddy', description: 'Critical for controlling Brown Plant Hopper and Green Leaf Hopper, ensuring higher grain yields.', icon: 'fas fa-seedling' },
    { title: 'Cotton', description: 'Essential early-to-mid season protection against aphids, jassids, and whiteflies.', icon: 'fas fa-tshirt' },
    { title: 'Vegetables', description: 'Used in okra, tomato, and brinjal for comprehensive sucking pest management.', icon: 'fas fa-carrot' },
    { title: 'Fruits & Orchards', description: 'Controls sap-sucking insects that degrade fruit quality and tree vigor.', icon: 'fas fa-apple-alt' },
    { title: 'Sugarcane', description: 'Effectively protects against early shoot borers and termites when used as directed.', icon: 'fas fa-grip-lines-vertical' },
    { title: 'Oilseeds', description: 'Safeguards mustard and groundnut from severe aphid outbreaks during active growth.', icon: 'fas fa-sun' }
  ];

  technicalSpecs = [
    { label: 'Brand Name', value: 'Thio-H 75' },
    { label: 'Chemical Name', value: 'Thiamethoxam 75% SG' },
    { label: 'Chemical Group', value: 'Neonicotinoid Insecticide' },
    { label: 'Formulation', value: 'Soluble Granule (SG)' },
    { label: 'Mode of Action', value: 'Systemic, contact and stomach poison' },
    { label: 'Recommended Dose', value: '10 gm per pump (15 Litre water)' }
  ];

  modeOfAction = [
    { title: 'Rapid Absorption', description: 'Thiamethoxam 75% SG dissolves instantly and is quickly taken up by the roots and foliage of the crop.' },
    { title: 'Systemic Distribution', description: 'It moves readily through the xylem, distributing the active ingredient uniformly to all plant parts including new growth.' },
    { title: 'Nervous System Disruption', description: 'Acts directly on the central nervous system of insects by interfering with nicotinic acetylcholine receptors.' },
    { title: 'Feeding Cessation', description: 'Affected insects rapidly stop feeding, become paralyzed, and eventually die, immediately halting crop damage.' }
  ];

  safetyItems = [
    { title: 'Use Proper PPE', text: 'Always wear gloves, protective clothing, masks, and eye protection when handling the granules or spray mix.' },
    { title: 'Accurate Dosage', text: 'Adhere precisely to the 10 gm per pump dosage to prevent resistance and ensure crop safety.' },
    { title: 'Environmental Care', text: 'Avoid spraying near water bodies. Do not spray during active bee foraging times to protect pollinators.' },
    { title: 'Equipment Hygiene', text: 'Thoroughly wash the sprayer immediately after use. Empty containers must be triple-rinsed and disposed of safely.' },
    { title: 'Storage Conditions', text: 'Store in a cool, dry place, locked away from children, unauthorized persons, and animal feed.' },
    { title: 'First Aid Readiness', text: 'In case of accidental ingestion or severe exposure, seek medical help immediately taking the product label along.' }
  ];

  performanceHighlights = [
    { label: 'Quick Knockdown', value: 'Visible reduction of pest populations within a few hours of application.' },
    { label: 'Phytotonic Effect', value: 'Often observed to promote greener, healthier, and more vigorous plant growth.' },
    { label: 'Rainfastness', value: 'Due to rapid systemic absorption, the product resists wash-off by rain shortly after application.' },
    { label: 'Cost-Effective', value: 'Low dosage requirement (10 gm/pump) and long residual action maximize returns on investment.' }
  ];

  faqs = [
    {
      question: 'What is Thiamethoxam 75% SG (Thio-H 75) used for?',
      answer: '<strong>Thiamethoxam 75% SG</strong> (marketed as <strong>Thio-H 75</strong>) is a broad-spectrum, highly systemic neonicotinoid insecticide primarily used for controlling sucking pests like aphids, jassids, whiteflies, and hoppers in paddy, cotton, vegetables, and fruit crops.',
      answerPlain: 'Thiamethoxam 75% SG (marketed as Thio-H 75) is a broad-spectrum, highly systemic neonicotinoid insecticide primarily used for controlling sucking pests like aphids, jassids, whiteflies, and hoppers in paddy, cotton, vegetables, and fruit crops.'
    },
    {
      question: 'What is the recommended dose of Thiamethoxam 75% SG?',
      answer: 'The standard recommended dose is <strong>10 gm per pump</strong> (typically a 15-litre knapsack sprayer). Always consult local agronomic advice for crop-specific requirements.',
      answerPlain: 'The standard recommended dose is 10 gm per pump (typically a 15-litre knapsack sprayer). Always consult local agronomic advice for crop-specific requirements.'
    },
    {
      question: 'Is Thiamethoxam 75% SG safe for crops?',
      answer: 'Yes, when used at the recommended dosage. It actually exhibits a notable phytotonic effect, leading to visibly greener, healthier, and more vigorous plants.',
      answerPlain: 'Yes, when used at the recommended dosage. It actually exhibits a notable phytotonic effect, leading to visibly greener, healthier, and more vigorous plants.'
    },
    {
      question: 'What pack sizes are available for Thio-H 75?',
      answer: 'Thio-H 75 (Thiamethoxam 75% SG) is available in multiple grower-friendly pack sizes: <strong>100gm, 250gm, 500gm, and 1Kg</strong>.',
      answerPlain: 'Thio-H 75 (Thiamethoxam 75% SG) is available in multiple grower-friendly pack sizes: 100gm, 250gm, 500gm, and 1Kg.'
    },
    {
      question: 'How fast does Thiamethoxam 75% SG work?',
      answer: 'Due to its rapid solubility and systemic absorption, pests typically cease feeding within hours of application, preventing further crop damage quickly.',
      answerPlain: 'Due to its rapid solubility and systemic absorption, pests typically cease feeding within hours of application, preventing further crop damage quickly.'
    }
  ];

  testimonials = [
    { text: "Thio-H 75 has been a game-changer for my paddy fields. The Brown Plant Hoppers were controlled instantly, and the crop stayed protected for a long time." },
    { text: "Just 10 gm per pump is enough. The product dissolves completely without clogging my sprayer, and my cotton crop is safe from jassids and whiteflies." },
    { text: "I noticed my vegetable plants looking greener and healthier after spraying Thiamethoxam 75% SG. It effectively stopped the thrips attack." }
  ];

  howToSteps = [
    { name: 'Prepare the Sprayer', text: 'Ensure the knapsack sprayer is thoroughly cleaned and functioning properly.' },
    { name: 'Measure', text: 'Accurately measure 10 gm of Thiamethoxam 75% SG (Thio-H 75) for a standard 15-litre pump.' },
    { name: 'Mixing Preparation', text: 'Half-fill the sprayer tank with clean water.' },
    { name: 'Add Product', text: 'Add the measured 10 gm of granules directly into the water. It will dissolve rapidly.' },
    { name: 'Top Up', text: 'Fill the rest of the tank with water and agitate slightly to ensure a uniform spray solution.' },
    { name: 'Application', text: 'Spray evenly over the crop foliage, ensuring good coverage, especially on the underside of leaves for maximum efficacy.' }
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

    this.title.setTitle('Thiamethoxam 75% SG | Thio-H 75 Systemic Insecticide | Harishree Crop Science');
    const desc =
      'Buy Thiamethoxam 75% SG (Thio-H 75) systemic insecticide online. Highly effective for broad-spectrum sucking pest control in paddy, cotton & vegetables. Dose: 10 gm/pump.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Thiamethoxam 75% SG, Thio-H 75, systemic insecticide, neonicotinoid, BPH control, aphid killer, whitefly control, Harishree Crop Science, agriculture insecticide'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Thiamethoxam 75% SG (Thio-H 75) | Ultimate Pest Control' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/insecticide/thiamethoxam-75-sg.jpg` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Thiamethoxam 75% SG | Thio-H 75' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/insecticide/thiamethoxam-75-sg.jpg` }
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
      telephone: '+919898197196'
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
      department: [
        {
          '@type': 'LocalBusiness',
          name: 'Thiamethoxam 75% SG (Thio-H 75)',
          description:
            'Thiamethoxam 75% SG (Thio-H 75) is a premium neonicotinoid systemic insecticide for powerful, long-lasting control of sucking pests.'
        }
      ]
    };
    this.addJsonLd(data, LOCALBUSINESS_SCHEMA_KEY);
  }

  private setWebPageSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.pageUrl}#webpage`,
      url: this.pageUrl,
      name: 'Thiamethoxam 75% SG (Thio-H 75)',
      description:
        'Thiamethoxam 75% SG (Thio-H 75) product page detailing usage, dosage, pricing, targets, and safety guidelines for comprehensive pest control.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${this.baseUrl}/#website`,
        url: this.baseUrl,
        name: 'Harishree Crop Science'
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${this.baseUrl}/assets/products/insecticide/thiamethoxam-75-sg.jpg`,
        caption: 'Thiamethoxam 75% SG (Thio-H 75) insecticide pack'
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
        { '@type': 'ListItem', position: 3, name: 'Thiamethoxam 75% SG (Thio-H 75)', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Thiamethoxam 75% SG',
      alternateName: ['Thio-H 75', 'Thiamethoxam 75 SG Insecticide', 'Thiamethoxam SG'],
      description:
        'Thiamethoxam 75% SG (Thio-H 75) is a premium broad-spectrum systemic neonicotinoid insecticide designed to provide superior control against sucking pests like aphids, jassids, and whiteflies in multiple crops.',
      image: [`${this.baseUrl}/assets/products/insecticide/thiamethoxam-75-sg.jpg`],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: this.baseUrl,
        logo: `${this.baseUrl}/assets/logo/HARISHREE.png`
      },
      category: 'Insecticide',
      sku: 'THIO75-SG',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '47'
      },
      offers: {
        '@type': 'AggregateOffer',
        offerCount: this.packSizes.length,
        lowPrice: Math.min(...this.packSizes.map(p => p.price)).toString(),
        highPrice: Math.max(...this.packSizes.map(p => p.price)).toString(),
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
      name: 'Thiamethoxam 75% SG (Thio-H 75) pack sizes',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Thiamethoxam 75% SG (Thio-H 75) ${p.volume}`,
          image: `${this.baseUrl}/assets/products/insecticide/thiamethoxam-75-sg.jpg`,
          sku: p.sku,
          description: `Thiamethoxam 75% SG (Thio-H 75) ${p.volume} pack - ${p.price} INR`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          offers: {
            '@type': 'Offer',
            price: p.price.toString(),
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: this.pageUrl,
            priceValidUntil: getOfferPriceValidUntil(),
            hasMerchantReturnPolicy: merchantReturnPolicySchema(),
            shippingDetails: offerShippingDetailsSchema()
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
      name: 'How to mix and apply Thiamethoxam 75% SG (Thio-H 75)',
      description: 'Step-by-step guidance on safely preparing and applying Thiamethoxam 75% SG for optimal pest control.',
      image: `${this.baseUrl}/assets/products/insecticide/thiamethoxam-75-sg.jpg`,
      totalTime: 'PT15M',
      supply: [{ '@type': 'HowToSupply', name: 'Thiamethoxam 75% SG (Thio-H 75)' }, { '@type': 'HowToSupply', name: 'Clean water' }],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer (15 Litre)' },
        { '@type': 'HowToTool', name: 'Measuring spoon/scale' },
        { '@type': 'HowToTool', name: 'Personal Protective Equipment (PPE)' }
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
