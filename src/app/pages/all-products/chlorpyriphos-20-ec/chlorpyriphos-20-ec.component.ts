import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, MetaDefinition, Title, TransferState, makeStateKey } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import Aos from 'aos';
import { environment } from '../../../../environments/environment';
import {
  getOfferPriceValidUntil,
  merchantReturnPolicySchema,
  offerShippingDetailsSchema
} from '../../../shared/schema/product-offer-jsonld';

const META_KEY = makeStateKey<boolean>('CHLORO_SHIELD20_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('CHLORO_SHIELD20_HOWTO_SCHEMA');

const INDICATIVE_LIST_PRICE_INR = 250;

@Component({
  selector: 'app-chlorpyriphos-20-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chlorpyriphos-20-ec.component.html',
  styleUrl: './chlorpyriphos-20-ec.component.scss'
})
export class Chlorpyriphos20EcComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/chlorpyriphos-20-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productTitle = 'Chlorpyriphos 20% EC';
  readonly productName = 'Chloro Shield 20';

  readonly indiaMartUrl = 'https://www.indiamart.com/proddetail/chlorpyriphos-20-e-c-2857867577597.html';
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/insecticide/chloro-shield-20.jpg`;

  packSizes = [
    { volume: '500 ml', price: 177, featured: true, sku: 'CHLORO-SHIELD-20-500ML' },
    { volume: '1 Ltr', price: 330, featured: false, sku: 'CHLORO-SHIELD-20-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'Reliable broad-spectrum control in one bottle',
      description:
        'Chlorpyriphos 20% EC supports practical management of common field pests where growers need contact, stomach and fumigant support in one programme.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Strong fit for integrated farm operations',
      description:
        'The EC formulation mixes smoothly for routine knapsack spray schedules and helps teams maintain consistent field discipline.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Proven chemistry for tough pressure windows',
      description:
        'Chlorpyriphos 20% EC remains a trusted option where early intervention is needed to contain damaging pest populations.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Simple on-field dose guidance',
      description:
        'A practical recommendation of 50 ml per pump helps avoid under-dosing and keeps application planning straightforward.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Supports cleaner canopy and soil-zone protection',
      description:
        'Designed for both foliar and soil-directed use patterns as per crop need, label direction and local advisory.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Compatible with disciplined rotation plans',
      description:
        'Best performance comes when used with threshold-based scouting, proper intervals and mode-of-action rotation.',
      icon: 'fas fa-rotate-right'
    }
  ];

  targetPests = [
    {
      name: 'Termites',
      description: 'Useful in programmes where termite pressure weakens root zone and early crop establishment.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Stem borers',
      description: 'Supports intervention during early borer activity to reduce internal feeding damage.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Leaf eating caterpillars',
      description: 'Helps reduce foliage loss when chewing pests start spreading across the canopy.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Cutworms',
      description: 'Can be used in field schedules where cutworm attack threatens stand uniformity.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Aphids and jassids',
      description: 'Useful as a broad-spectrum support product in mixed sucking pest situations.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Soil and surface insects',
      description: 'Flexible use options help growers manage both above-ground and near-root pest pressure.',
      icon: 'fas fa-bug'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Applied in pest windows where chewing and sucking complexes begin to build, with focus on timely first spray.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Paddy',
      description: 'Used in practical field schedules based on scouting and infestation stage.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Sugarcane',
      description: 'Supports programmes targeting borer and soil-side insect concerns in major cane belts.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Groundnut and pulses',
      description: 'Can be included where mixed pest pressure affects canopy health and stand vigor.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Vegetable crops',
      description: 'Useful in managed rotation plans for vegetables when pest pressure crosses threshold levels.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'ETL-based recommendations',
      description: 'Apply only as per scouting, local advisory and approved crop label instructions.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: this.productName },
      { label: 'Technical name', value: 'Chlorpyrifos' },
      { label: 'Active ingredient', value: 'Chlorpyriphos 20% EC' },
      { label: 'Concentration', value: '20%' },
      { label: 'Form', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'CAS number', value: '2921-88-2' },
      { label: 'Physical state', value: 'Liquid' },
      { label: 'Brand (reference)', value: 'Balaji' }
    ],
    packs: [
      { label: 'Recommended dose', value: '50 ml/pump' },
      { label: 'Application method', value: 'Foliar spray or crop-stage based directed application' },
      { label: 'Pack sizes in schema', value: '500 ml, 1 Ltr' },
      { label: 'Pesticide class', value: 'Organophosphate insecticide' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Concentration', value: '20%' },
    { label: 'Form', value: 'EC (Emulsifiable)' },
    { label: 'Packaging Size', value: '25 kg (reference listing parameter)' },
    { label: 'Brand', value: 'Balaji' },
    { label: 'Technical Name', value: 'Chlorpyrifos' },
    { label: 'CAS Number', value: '2921-88-2' },
    { label: 'Physical State', value: 'Liquid' },
    { label: 'Dose', value: '50 ml/pump' },
    { label: 'Company product name', value: 'Chloro Shield 20' },
    { label: 'Primary keyword', value: 'Chlorpyriphos 20% EC' },
    { label: 'Secondary keyword', value: 'Chloro Shield 20' },
    { label: 'Official B2B source', value: this.indiaMartUrl }
  ];

  modeOfAction = [
    {
      title: 'Contact action on exposed insects',
      description:
        'When spray droplets reach pests directly, Chlorpyriphos 20% EC acts on their nervous system and interrupts normal movement and feeding.'
    },
    {
      title: 'Stomach action during feeding',
      description:
        'Pests ingesting treated plant surfaces are affected through stomach activity, helping reduce continued crop damage.'
    },
    {
      title: 'Fumigant support in dense zones',
      description:
        'In practical field conditions, fumigant characteristics can support action in concealed pest zones when used correctly.'
    },
    {
      title: 'Early timing improves field outcomes',
      description:
        'Apply at threshold stage, not after heavy infestation. Timely use gives cleaner control and lowers repeat spray pressure.'
    }
  ];

  safetyItems = [
    {
      title: 'Use complete PPE before opening pack',
      text: 'Wear gloves, mask, eye protection and full sleeves while measuring and spraying.'
    },
    {
      title: 'Measure exact dose and pre-mix first',
      text: 'Measure 50 ml per pump and pre-mix in a small amount of clean water before tank filling.'
    },
    {
      title: 'Maintain nozzle calibration and spray reach',
      text: 'Spray in calm weather and ensure coverage across canopy and pest-prone zones.'
    },
    {
      title: 'Avoid drift near water and livestock areas',
      text: 'Do not spray near ponds, fish culture points or grazing channels. Follow local buffer guidance.'
    },
    {
      title: 'Respect re-entry and hygiene protocols',
      text: 'Allow safe re-entry period and wash exposed skin/clothing immediately after application.'
    },
    {
      title: 'Rotate chemistry in seasonal programme',
      text: 'Do not over-repeat one chemistry. Use rotation with other groups as advised by agronomy experts.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Consistent knockdown in practical farm settings',
      value: 'Growers use Chlorpyriphos 20% EC where dependable broad-spectrum action is needed under active pest pressure.'
    },
    {
      label: 'Field-friendly EC formulation',
      value: 'The liquid EC format supports easy measuring, pre-mixing and knapsack tank preparation.'
    },
    {
      label: 'Dose clarity for spray teams',
      value: 'A clear 50 ml/pump recommendation improves consistency across labor-managed spray rounds.'
    },
    {
      label: 'Useful across diverse crop systems',
      value: 'Works in integrated schedules for cotton, paddy, sugarcane and selected vegetable programmes.'
    }
  ];

  faqs = [
    {
      question: 'What is Chloro Shield 20 (Chlorpyriphos 20% EC) used for?',
      answer:
        '<strong>Chloro Shield 20</strong> is a broad-spectrum insecticide used in field programmes for termites, borers, caterpillars and mixed pest pressure as per crop label and advisory.',
      answerPlain:
        'Chloro Shield 20 is a broad-spectrum insecticide used in field programmes for termites, borers, caterpillars and mixed pest pressure as per crop label and advisory.'
    },
    {
      question: 'What is the recommended dose of Chlorpyriphos 20% EC?',
      answer:
        'Practical guidance is <strong>50 ml per pump</strong>. Always confirm final dose with crop label instructions and local agronomy recommendation.',
      answerPlain:
        'Practical guidance is 50 ml per pump. Always confirm final dose with crop label instructions and local agronomy recommendation.'
    },
    {
      question: 'Is Chloro Shield 20 suitable for cotton and paddy?',
      answer:
        'Yes, it is commonly used in integrated programmes for crops such as <strong>cotton, paddy, sugarcane and other label crops</strong> based on pest threshold.',
      answerPlain:
        'Yes, it is commonly used in integrated programmes for crops such as cotton, paddy, sugarcane and other label crops based on pest threshold.'
    },
    {
      question: 'How should I mix Chlorpyriphos 20% EC safely?',
      answer:
        'Use PPE, measure dose accurately, pre-mix in water first, then fill the tank with agitation. Avoid drift and spray during calm conditions.',
      answerPlain:
        'Use PPE, measure dose accurately, pre-mix in water first, then fill the tank with agitation. Avoid drift and spray during calm conditions.'
    },
    {
      question: 'Can Chloro Shield 20 be used in rotation-based pest management?',
      answer:
        'Yes. For better long-term performance, use Chlorpyriphos 20% EC in <strong>mode-of-action rotation</strong> and avoid repeated back-to-back use.',
      answerPlain:
        'Yes. For better long-term performance, use Chlorpyriphos 20% EC in mode-of-action rotation and avoid repeated back-to-back use.'
    },
    {
      question: 'Where can I verify technical parameters for this product?',
      answer:
        'You can check our official technical reference section on this page and cross-check with our official IndiaMART listing for listing-level details.',
      answerPlain:
        'You can check our official technical reference section on this page and cross-check with our official IndiaMART listing for listing-level details.'
    }
  ];

  testimonials = [
    {
      name: 'Mahesh',
      location: 'Rajkot belt, Gujarat',
      text: 'We used Chloro Shield 20 right at early infestation stage. The spray gave cleaner control and helped us stabilize the crop quickly.',
      rating: 5
    },
    {
      name: 'Pravin',
      location: 'Jamnagar region',
      text: 'The 50 ml per pump guidance is simple for our field team. Mixing is easy and results are reliable when timing is right.',
      rating: 5
    },
    {
      name: 'Rakesh',
      location: 'Paddhari zone',
      text: 'We included Chlorpyriphos 20% EC in a rotation schedule and saw better control consistency across repeated scouting cycles.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Wear gloves, mask, goggles and covered clothing before handling product bottle.' },
    { name: 'Measure dose', text: 'Measure 50 ml per pump accurately using a clean measuring cup.' },
    { name: 'Pre-mix first', text: 'Make a slurry/pre-mix in a small volume of water, then pour into spray tank.' },
    { name: 'Top up and agitate', text: 'Fill remaining tank water and keep solution agitated for uniform spray quality.' },
    { name: 'Spray with coverage', text: 'Apply evenly with proper nozzle position to cover pest-prone plant surfaces.' },
    { name: 'Clean equipment', text: 'Rinse tank and tools, and dispose containers as per label and local regulation.' }
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

    const titleText = `${this.productTitle} | ${this.productName} Insecticide | Harishree Crop Science`;
    this.title.setTitle(titleText);

    const desc =
      `${this.productName} is Harishree Crop Science ${this.productTitle} insecticide for broad-spectrum pest management. Dose: 50 ml/pump. Explore benefits, crops, technical specifications, safety guidance and FAQ.`;

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Chlorpyriphos 20% EC, Chlorpyrifos 20 EC, Chloro Shield 20, chlorpyriphos insecticide, chlorpyrifos insecticide, 50 ml pump dose, EC insecticide, organophosphate insecticide, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: titleText },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: this.bottleImageUrl },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: titleText },
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
      areaServed: [{ '@type': 'State', name: 'Gujarat' }, { '@type': 'Country', name: 'India' }],
      department: [
        {
          '@type': 'LocalBusiness',
          name: `${this.productName} (${this.productTitle})`,
          description: `${this.productName} is Harishree Crop Science ${this.productTitle} formulation for broad-spectrum pest control support.`
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
      name: `${this.productTitle} - ${this.productName} by Harishree Crop Science`,
      description:
        `${this.productTitle} (${this.productName}) product page with dose, crops, technical specifications, FAQ and application guidance.`,
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
        caption: `${this.productName} ${this.productTitle} bottle`
      },
      breadcrumb: { '@id': `${this.pageUrl}#breadcrumb` }
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
        { '@type': 'ListItem', position: 4, name: `${this.productName} (${this.productTitle})`, item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.productTitle,
      alternateName: [this.productName, 'Chlorpyrifos 20% EC', 'Chlorpyriphos 20 EC'],
      description:
        `${this.productName} (${this.productTitle}) is a broad-spectrum EC insecticide with contact, stomach and fumigant action support for major crop protection programmes.`,
      image: [this.bottleImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: this.productName,
      category: 'Insecticide',
      sku: 'CHLORO-SHIELD-20',
      material: 'EC (Liquid)',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        { '@type': 'PropertyValue', name: 'Dose', value: '50 ml/pump' }
      ],
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: this.baseUrl,
        logo: `${this.baseUrl}/assets/logo/HARISHREE.png`
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '31',
        bestRating: '5',
        worstRating: '1'
      },
      review: this.testimonials.map((item) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: item.name },
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
      name: `${this.productTitle} - pack sizes`,
      description: `${this.productTitle} pack size list with schema-only GST-inclusive prices.`,
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `${this.productTitle} - ${p.volume}`,
          image: this.bottleImageUrl,
          sku: p.sku,
          description: `${this.productTitle} ${p.volume} pack by Harishree Crop Science.`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          category: 'Insecticide',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Chlorpyriphos 20% EC' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Dose', value: '50 ml/pump' },
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
        acceptedAnswer: { '@type': 'Answer', text: f.answerPlain }
      }))
    };
    this.addJsonLd(data, FAQ_SCHEMA_KEY);
  }

  private setHowToSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `How to apply ${this.productTitle}`,
      description: `Step-by-step field guidance for safe and effective spray preparation of ${this.productTitle}.`,
      image: this.bottleImageUrl,
      totalTime: 'PT20M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: String(INDICATIVE_LIST_PRICE_INR)
      },
      supply: [
        { '@type': 'HowToSupply', name: this.productTitle },
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
