import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, MetaDefinition, Title, TransferState, makeStateKey } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import Aos from 'aos';
import { environment } from '../../../../environments/environment';
import {
  getOfferPriceValidUntil,
  merchantReturnPolicySchema,
  offerShippingDetailsSchema
} from '../../../shared/schema/product-offer-jsonld';

const META_KEY = makeStateKey<boolean>('COMBI505_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('COMBI505_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('COMBI505_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('COMBI505_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('COMBI505_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('COMBI505_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('COMBI505_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('COMBI505_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('COMBI505_HOWTO_SCHEMA');

const INDICATIVE_LIST_PRICE_INR = 578;

@Component({
  selector: 'app-chlorpyriphos-50-cypermethrin-5-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chlorpyriphos-50-cypermethrin-5-ec.component.html',
  styleUrl: './chlorpyriphos-50-cypermethrin-5-ec.component.scss'
})
export class Chlorpyriphos50Cypermethrin5EcComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/chlorpyriphos-50-cypermethrin-5-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productTitle = 'Chlorpyriphos 50% + Cypermethrin 5% EC';
  readonly productName = 'Combi 505';
  readonly indiaMartUrl = 'https://www.indiamart.com/proddetail/combi505-chlorpyriphos-50-cypermethrin-5-ec-2855406835212.html';
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/COMBI%20505.png`;

  packSizes = [
    { volume: '250 ml', price: 159, featured: false, sku: 'COMBI-505-250ML' },
    { volume: '500 ml', price: 301, featured: false, sku: 'COMBI-505-500ML' },
    { volume: '1 Ltr', price: 578, featured: true, sku: 'COMBI-505-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'Dual chemistry for practical field pressure',
      description:
        'Chlorpyriphos 50% + Cypermethrin 5% EC combines organophosphate and pyrethroid action to support broad-spectrum control in mixed pest situations.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Fast action with dependable follow-through',
      description:
        'The formulation supports quick knockdown and sustained control when applied early at threshold stage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Easy-to-handle EC spray format',
      description:
        'Its emulsifiable concentrate profile mixes smoothly in routine knapsack and power-sprayer operations.',
      icon: 'fas fa-prescription-bottle'
    },
    {
      title: 'Clear dose discipline',
      description:
        'Recommended use of 25 ml per pump helps spray teams maintain consistency and avoid under-dosing.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Useful across multiple commercial crops',
      description:
        'Commonly integrated in cotton, paddy, groundnut, sugarcane, vegetable and pulse crop programs.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Supports resistance-management plans',
      description:
        'Works best inside rotation-based pest management with scouting, ETL checks and responsible spray intervals.',
      icon: 'fas fa-rotate-right'
    }
  ];

  targetPests = [
    { name: 'Bollworms', description: 'Used in programs where larval feeding pressure threatens yield and boll quality.', icon: 'fas fa-bug' },
    { name: 'Stem borers', description: 'Supports action during early borer incidence across cereal and related crops.', icon: 'fas fa-bug' },
    { name: 'Leaf folders', description: 'Helps reduce foliage damage where folded-leaf feeding starts spreading rapidly.', icon: 'fas fa-bug' },
    { name: 'Thrips', description: 'Useful in mixed sucking pest windows where crop stress can rise quickly.', icon: 'fas fa-bug' },
    { name: 'Aphids and whiteflies', description: 'Fits broad-spectrum schedules when sap-feeding pests cross field thresholds.', icon: 'fas fa-bug' },
    { name: 'Cutworms', description: 'Can be included where cutworm attack affects stand establishment and vigor.', icon: 'fas fa-bug' }
  ];

  applications = [
    { title: 'Cotton', description: 'Applied in ETL-based windows for combined chewing and sucking pest pressure.', icon: 'fas fa-seedling' },
    { title: 'Paddy', description: 'Included in practical schedules where stem borer and leaf-folder concerns are active.', icon: 'fas fa-water' },
    { title: 'Groundnut and pulses', description: 'Useful where pest complexes affect canopy health and growth momentum.', icon: 'fas fa-spa' },
    { title: 'Sugarcane', description: 'Supports broad-spectrum insect management in intensive cane cultivation zones.', icon: 'fas fa-leaf' },
    { title: 'Vegetables', description: 'Used in chilli and tomato-focused programs with strict interval and safety discipline.', icon: 'fas fa-carrot' },
    { title: 'Application stage', description: 'Spray at early pest appearance or as per ETL and local agronomy advisory.', icon: 'fas fa-clock' }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: this.productName },
      { label: 'Technical composition', value: this.productTitle },
      { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Insecticide type', value: 'Combination insecticide (Organophosphate + Pyrethroid)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Country of origin', value: 'Made in India' }
    ],
    packs: [
      { label: 'Recommended dose', value: '25 ml/pump' },
      { label: 'Water volume', value: '200-250 liters/acre' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Rainfastness', value: '2-3 hours after application' },
      { label: 'Re-entry interval', value: '24 hours with protective gear' },
      { label: 'Pack sizes in schema', value: '250 ml, 500 ml, 1 Ltr' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: this.productName },
    { label: 'Technical Composition', value: this.productTitle },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Insecticide Type', value: 'Combination Insecticide (Organophosphate + Pyrethroid)' },
    { label: 'Chemical Groups', value: 'Chlorpyriphos: Organophosphate; Cypermethrin: Synthetic Pyrethroid' },
    { label: 'Mode of Action', value: 'Chlorpyriphos inhibits acetylcholinesterase; Cypermethrin affects sodium channels' },
    { label: 'Action Type', value: 'Contact, stomach and fumigant action' },
    { label: 'Target Pests', value: 'Bollworms, Stem borers, Leaf folders, Thrips, Aphids, Cutworms, Whiteflies' },
    { label: 'Target Crops', value: 'Cotton, Paddy, Groundnut, Sugarcane, Vegetables (Chilli, Tomato), Pulses' },
    { label: 'Recommended Dose', value: '25 ml/pump' },
    { label: 'Water Volume', value: '200-250 liters/acre' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early stage of pest appearance or as per ETL' },
    { label: 'Rainfastness', value: '2-3 hours after application' },
    { label: 'Re-entry Interval', value: '24 hours with protective gear' },
    { label: 'Compatibility', value: 'Compatible with most fungicides and micronutrients; avoid strong alkalis' },
    { label: 'Precautions', value: 'Use PPE, avoid drift to non-target crops, do not spray during high wind or bright sunlight' },
    { label: 'Official B2B source', value: this.indiaMartUrl }
  ];

  modeOfAction = [
    {
      title: 'Chlorpyriphos pathway',
      description:
        'Chlorpyriphos inhibits acetylcholinesterase in insects, which disrupts nerve impulse transmission and feeding behavior.'
    },
    {
      title: 'Cypermethrin pathway',
      description:
        'Cypermethrin targets sodium channels in nerve membranes, leading to hyperexcitation, paralysis and pest mortality.'
    },
    {
      title: 'Combined field impact',
      description:
        'The dual mechanism helps handle mixed infestations where both chewing and sucking pests are present in the same crop block.'
    },
    {
      title: 'Best outcomes with timing discipline',
      description:
        'Apply at early infestation windows with proper coverage and interval planning for cleaner, more stable results.'
    }
  ];

  safetyItems = [
    { title: 'Wear PPE before handling', text: 'Use gloves, mask, goggles and covered clothing while measuring, mixing and spraying.' },
    { title: 'Measure dose accurately', text: 'Use 25 ml per pump and avoid overdose to reduce residue risk and crop stress.' },
    { title: 'Pre-mix before tank filling', text: 'Prepare a small slurry first, then add to tank and top up with water under agitation.' },
    { title: 'Spray in suitable weather', text: 'Avoid high wind, peak heat and rain-prone windows to reduce drift and runoff.' },
    { title: 'Observe re-entry interval', text: 'Allow at least 24 hours before re-entry, and use protective gear when required.' },
    { title: 'Store and dispose responsibly', text: 'Keep away from food/feed and dispose containers as per label and local regulations.' }
  ];

  performanceHighlights = [
    { label: 'Consistent knockdown in mixed pest windows', value: 'Growers use Chlorpyriphos 50% + Cypermethrin 5% EC where broad-spectrum action is needed across varied pest pressure.' },
    { label: 'Practical fit for commercial crops', value: 'Applied across cotton, paddy, sugarcane, vegetable and pulse programs with ETL discipline.' },
    { label: 'Operational simplicity in field teams', value: 'The 25 ml/pump guidance and EC handling make routine spray planning straightforward.' },
    { label: 'Strong support in rotation plans', value: 'Performs best when integrated with scouting-based decisions and chemistry rotation.' }
  ];

  faqs = [
    {
      question: 'What is Chlorpyriphos 50% + Cypermethrin 5% EC used for?',
      answer:
        '<strong>Chlorpyriphos 50% + Cypermethrin 5% EC</strong> is a combination insecticide used for broad-spectrum management of chewing and sucking pests in key crops.',
      answerPlain:
        'Chlorpyriphos 50% + Cypermethrin 5% EC is a combination insecticide used for broad-spectrum management of chewing and sucking pests in key crops.'
    },
    {
      question: 'What is the recommended dose for Chlorpyriphos 50% + Cypermethrin 5% EC?',
      answer: 'Recommended field guidance is <strong>25 ml per pump</strong>. Always follow crop label and local advisory.',
      answerPlain: 'Recommended field guidance is 25 ml per pump. Always follow crop label and local advisory.'
    },
    {
      question: 'Which crops can use Chlorpyriphos 50% + Cypermethrin 5% EC?',
      answer:
        'Common use includes <strong>cotton, paddy, groundnut, sugarcane, vegetables and pulses</strong> based on infestation stage and ETL.',
      answerPlain:
        'Common use includes cotton, paddy, groundnut, sugarcane, vegetables and pulses based on infestation stage and ETL.'
    },
    {
      question: 'Can Chlorpyriphos 50% + Cypermethrin 5% EC be mixed with other products?',
      answer:
        'It is generally compatible with many fungicides and micronutrients, but <strong>avoid strong alkali products</strong> and run a jar test first.',
      answerPlain:
        'It is generally compatible with many fungicides and micronutrients, but avoid strong alkali products and run a jar test first.'
    },
    {
      question: 'How soon is Chlorpyriphos 50% + Cypermethrin 5% EC rainfast after spraying?',
      answer: 'Typical rainfastness is around <strong>2-3 hours after application</strong> under normal field conditions.',
      answerPlain: 'Typical rainfastness is around 2-3 hours after application under normal field conditions.'
    },
    {
      question: 'Where can I verify technical references?',
      answer:
        'You can review the technical table on this page and cross-check with our official IndiaMART listing reference.',
      answerPlain:
        'You can review the technical table on this page and cross-check with our official IndiaMART listing reference.'
    }
  ];

  testimonials = [
    {
      name: 'Dharmesh',
      location: 'Rajkot district',
      text: 'We used Chlorpyriphos 50% + Cypermethrin 5% EC at early pest appearance in cotton. Knockdown was fast and follow-up spray pressure reduced.',
      rating: 5
    },
    {
      name: 'Vikram',
      location: 'Jamnagar belt',
      text: 'Dose guidance is simple for our team. At 25 ml per pump, coverage and control were consistent in paddy blocks.',
      rating: 5
    },
    {
      name: 'Kalpesh',
      location: 'Surendranagar region',
      text: 'In vegetable plots with mixed infestation, Chlorpyriphos 50% + Cypermethrin 5% EC gave reliable control when we followed ETL and interval discipline.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Wear gloves, mask, goggles and full-sleeve clothing before opening the bottle.' },
    { name: 'Measure dose', text: 'Measure 25 ml per pump accurately with a clean measuring cup.' },
    { name: 'Prepare premix', text: 'Mix measured quantity in a small amount of water to form a uniform premix.' },
    { name: 'Fill and agitate', text: 'Pour premix into tank, add remaining water and agitate for uniform dispersion.' },
    { name: 'Spray with full coverage', text: 'Spray evenly on target canopy during calm weather and early infestation stage.' },
    { name: 'Clean and dispose safely', text: 'Rinse equipment and dispose empty containers according to label and local rules.' }
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

    const titleText = `${this.productTitle} | ${this.productName} | Harishree Crop Science`;
    this.title.setTitle(titleText);

    const desc =
      `${this.productName} is Harishree Crop Science ${this.productTitle} combination insecticide. Recommended dose: 25 ml/pump. Explore pests, crops, technical specifications, safety guidance and FAQ.`;

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Chlorpyriphos 50% + Cypermethrin 5% EC, Chlorpyriphos 50% + Cypermethrin 5% EC, chlorpyrifos cypermethrin insecticide, combination insecticide, Chlorpyriphos 50% + Cypermethrin 5% EC dose, 25 ml pump dose, cotton pest control, paddy pest control, Harishree Crop Science'
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
          description: `${this.productName} is Harishree Crop Science ${this.productTitle} combination insecticide for broad-spectrum crop pest management.`
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
      name: `${this.productTitle} - ${this.productName} by Harishree Crop Science`,
      description:
        `${this.productTitle} (${this.productName}) product page with dose, target pests, crops, technical specifications, FAQ and usage guidance.`,
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
      alternateName: [
        this.productName,
        'Chlorpyrifos 50% + Cypermethrin 5% EC',
        'Chlorpyriphos 50 + Cypermethrin 5 EC',
        'Combi 505 insecticide'
      ],
      description:
        `${this.productName} (${this.productTitle}) is a broad-spectrum combination insecticide with contact, stomach and fumigant action for crop pest management.`,
      image: [this.bottleImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: this.productName,
      category: 'Insecticide',
      sku: 'COMBI-505',
      material: 'EC (Liquid)',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        { '@type': 'PropertyValue', name: 'Dose', value: '25 ml/pump' }
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
        reviewCount: '26',
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
      description: `${this.productTitle} pack size list with schema-only.`,
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
            { '@type': 'PropertyValue', name: 'Technical composition', value: this.productTitle },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Dose', value: '25 ml/pump' },
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
