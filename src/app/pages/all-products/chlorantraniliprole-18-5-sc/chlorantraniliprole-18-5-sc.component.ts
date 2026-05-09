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

const META_KEY = makeStateKey<boolean>('CORA5_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('CORA5_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('CORA5_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('CORA5_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('CORA5_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('CORA5_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('CORA5_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('CORA5_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('CORA5_HOWTO_SCHEMA');

const INDICATIVE_LIST_PRICE_INR = 1345;

@Component({
  selector: 'app-chlorantraniliprole-18-5-sc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chlorantraniliprole-18-5-sc.component.html',
  styleUrl: './chlorantraniliprole-18-5-sc.component.scss'
})
export class Chlorantraniliprole185ScComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/chlorantraniliprole-18-5-sc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productTitle = 'Chlorantraniliprole 18.5% SC';
  readonly productName = 'Cora-5';
  readonly indiaMartUrl =
    'https://www.indiamart.com/proddetail/cora-5-chlorantraniliprole-18-5-w-w-sc-insecticide-2855188845462.html';
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/chlorantraniliprole-18-5-sc.png`;

  packSizes = [
    { volume: '30 ml', price: 83, featured: false, sku: 'CORA5-30ML' },
    { volume: '60 ml', price: 153, featured: false, sku: 'CORA5-60ML' },
    { volume: '150 ml', price: 354, featured: false, sku: 'CORA5-150ML' },
    { volume: '300 ml', price: 684, featured: true, sku: 'CORA5-300ML' },
    { volume: '600 ml', price: 1345, featured: false, sku: 'CORA5-600ML' }
  ];

  keyBenefits = [
    {
      title: 'Strong control at early borer stage',
      description:
        'Cora-5 works best when applied at early larval or borer infestation stage, helping crops retain canopy health and growth momentum.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Systemic and contact action support',
      description:
        'The formulation combines systemic movement with contact and ingestion activity, improving field response in mixed pest windows.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Excellent fit for borer-heavy pressure',
      description:
        'It is preferred in programmes where top borers, stem borers, and fruit borers cause direct economic loss in major crops.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Simple operator guidance',
      description:
        'A practical recommendation of 5 ml per pump keeps dosing consistent and easier to follow for spray teams.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'SC formulation for uniform spray quality',
      description:
        'Its suspension concentrate profile helps maintain smoother tank mix behavior under proper agitation and clean-water use.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Supports disciplined resistance management',
      description:
        'Consistent outcomes are achieved when Cora-5 is used at threshold timing and rotated responsibly with other approved groups.',
      icon: 'fas fa-rotate-right'
    }
  ];

  targetPests = [
    {
      name: 'Top borers',
      description: 'Used where top-boring pressure starts affecting plant vigor and uniform crop stand.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Stem borers',
      description: 'Supports control programs for internal stem feeding in paddy, maize and related crop systems.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Leaf folders',
      description: 'Helps reduce folded-leaf feeding damage that limits healthy photosynthetic area.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Fruit borers',
      description: 'Useful in fruiting crops where borer entry directly lowers marketable produce.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Spodoptera',
      description: 'Can be integrated in ETL-based schedules for heavy leaf-feeding episodes.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Caterpillars and FAW',
      description: 'Included in practical field schedules for Fall Armyworm and related caterpillar complexes.',
      icon: 'fas fa-bug'
    }
  ];

  applications = [
    {
      title: 'Groundnuts',
      description: 'Commonly positioned in groundnut programs facing top borer pressure.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Maize and paddy',
      description: 'Strong fit where stem borer and leaf folder pressure affects stand performance.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Cotton and chilli',
      description: 'Used in crop-protection plans where caterpillars and fruit damage risk increase quickly.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Tomato and cabbage',
      description: 'Useful in vegetables where larval feeding can rapidly reduce quality and market value.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Sugarcane and pulses',
      description: 'Can be included in targeted programs under crop-stage and local advisory guidance.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Application stage',
      description: 'Spray at early larval or borer stage with complete canopy coverage.',
      icon: 'fas fa-clock'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: this.productName },
      { label: 'Technical name', value: 'Chlorantraniliprole 18.5% w/w SC (Suspension Concentrate)' },
      { label: 'Formulation', value: 'SC' },
      { label: 'Form', value: 'Liquid' },
      { label: 'Insecticide type', value: 'Systemic and contact insecticide' },
      { label: 'Chemical group', value: 'Anthranilic diamide' },
      { label: 'Country of origin', value: 'Made in India' }
    ],
    packs: [
      { label: 'Recommended dose', value: '5 ml/pump' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early larval or borer infestation stage' },
      { label: 'Rainfastness', value: '2-4 hours after application' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'PHI (pre-harvest interval)', value: '7-10 days depending on crop' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: this.productName },
    { label: 'Technical Name', value: 'Chlorantraniliprole 18.5% w/w SC (Suspension Concentrate)' },
    { label: 'Formulation', value: 'SC' },
    { label: 'Insecticide Type', value: 'Systemic and contact insecticide' },
    { label: 'Chemical Group', value: 'Anthranilic diamide' },
    {
      label: 'Mode of Action',
      value:
        'Activates ryanodine receptors in insect muscle cells, causing uncontrolled calcium release, paralysis and death.'
    },
    { label: 'Action Type', value: 'Systemic, translaminar and ingestion/contact action' },
    {
      label: 'Target Pests',
      value: 'Fall Armyworm (FAW), stem borers, leaf folders, fruit borers, spodoptera, caterpillars, top borers'
    },
    { label: 'Target Crops', value: 'Groundnuts, maize, paddy, cotton, chilli, tomato, sugarcane, cabbage, pulses' },
    { label: 'Recommended Dose', value: '60-80 ml/acre (varies by crop and pest), practical guidance 5 ml/pump' },
    { label: 'Water Volume', value: 'As per crop stage and spray equipment; maintain uniform canopy coverage' },
    { label: 'Application Method', value: 'Foliar spray using knapsack/power sprayer' },
    { label: 'Application Stage', value: 'Early larval or borer infestation stage' },
    { label: 'Rainfastness', value: '2-4 hours after application' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'PHI (Pre-Harvest Interval)', value: '7-10 days depending on crop' },
    { label: 'Compatibility', value: 'Compatible with most agrochemicals; avoid strong alkaline pH mixtures' },
    {
      label: 'Precautions',
      value:
        'Use recommended dose only, avoid overdose to prevent resistance, wear PPE, avoid drift to water bodies.'
    },
    { label: 'Availability', value: 'In Stock' },
    {
      label: 'View in Hindi',
      value: 'कोरा 5 क्लोरेंट्रानिलिप्रोल 18.5% w/w एससी कीटनाशक'
    },
    { label: 'Official B2B source', value: this.indiaMartUrl }
  ];

  modeOfAction = [
    {
      title: 'Ryanodine receptor activation',
      description:
        'Cora-5 activates ryanodine receptors in insect muscles, causing rapid calcium release and severe disruption of muscular function.'
    },
    {
      title: 'Feeding shutdown and paralysis',
      description:
        'After exposure, pests stop feeding quickly, then progress to paralysis and death, reducing crop damage in critical growth windows.'
    },
    {
      title: 'Systemic plus translaminar reach',
      description:
        'The SC formulation supports movement into plant tissues and across leaf surfaces for improved contact with hidden larvae.'
    },
    {
      title: 'Best results with timely spray',
      description:
        'Apply at early larval stage and maintain proper spray coverage for stronger field performance and better consistency.'
    }
  ];

  safetyItems = [
    { title: 'Wear PPE before mixing', text: 'Use gloves, mask, goggles and protective clothing before opening and measuring product.' },
    { title: 'Follow exact dose discipline', text: 'Use 5 ml per pump unless crop-specific advisory suggests a different approved dose.' },
    { title: 'Prepare a clean premix first', text: 'Premix in a small water volume, then add to tank and maintain agitation for uniform spray quality.' },
    { title: 'Avoid drift to non-target areas', text: 'Do not spray in high wind and avoid drift to fish ponds or open water channels.' },
    { title: 'Respect re-entry and PHI', text: 'Observe re-entry interval and crop-specific PHI to support field safety and residue compliance.' },
    { title: 'Rotate modes of action', text: 'Avoid back-to-back overuse; rotate with other approved insecticide groups to reduce resistance pressure.' }
  ];

  performanceHighlights = [
    {
      label: 'Reliable borer-window response',
      value: 'Farmers prefer Cora-5 where early borer attack requires quick feeding suppression and sustained control support.'
    },
    {
      label: 'Strong field fit across crops',
      value: 'Its versatility supports insect management programmes in groundnuts, cereals, cotton and vegetables.'
    },
    {
      label: 'Practical dosing discipline',
      value: 'The 5 ml/pump guidance makes field training and operator compliance simpler for spray teams.'
    },
    {
      label: 'Performance with stewardship',
      value: 'Best outcomes come from threshold-based timing, correct coverage and responsible resistance rotation.'
    }
  ];

  faqs = [
    {
      question: 'What is Cora-5 (Chlorantraniliprole 18.5% SC) used for?',
      answer:
        '<strong>Cora-5</strong> is used for control of larval and borer pests such as FAW, stem borers, leaf folders and fruit borers in major crops.',
      answerPlain:
        'Cora-5 is used for control of larval and borer pests such as FAW, stem borers, leaf folders and fruit borers in major crops.'
    },
    {
      question: 'What is the recommended dose of Chlorantraniliprole 18.5% SC?',
      answer:
        'Practical guidance is <strong>5 ml per pump</strong>. Crop-wise usage may also be advised as 60-80 ml/acre depending on pest pressure.',
      answerPlain:
        'Practical guidance is 5 ml per pump. Crop-wise usage may also be advised as 60-80 ml/acre depending on pest pressure.'
    },
    {
      question: 'Which crops can use Cora-5?',
      answer:
        'Cora-5 is commonly referenced in <strong>groundnuts, maize, paddy, cotton, chilli, tomato, sugarcane, cabbage and pulse crops</strong> as per advisory.',
      answerPlain:
        'Cora-5 is commonly referenced in groundnuts, maize, paddy, cotton, chilli, tomato, sugarcane, cabbage and pulse crops as per advisory.'
    },
    {
      question: 'How does Chlorantraniliprole 18.5% w/w SC work on pests?',
      answer:
        'It activates ryanodine receptors in insect muscles, causing uncontrolled calcium release that leads to feeding stoppage, paralysis and death.',
      answerPlain:
        'It activates ryanodine receptors in insect muscles, causing uncontrolled calcium release that leads to feeding stoppage, paralysis and death.'
    },
    {
      question: 'When should I spray Cora-5 for best results?',
      answer:
        'Spray at <strong>early larval or borer infestation stage</strong> with proper coverage. Delayed rescue spraying usually gives weaker outcomes.',
      answerPlain:
        'Spray at early larval or borer infestation stage with proper coverage. Delayed rescue spraying usually gives weaker outcomes.'
    },
    {
      question: 'Where can I verify official technical details of Cora-5?',
      answer:
        'You can review the technical specifications and parameter table on this page and cross-check with our official IndiaMART source.',
      answerPlain:
        'You can review the technical specifications and parameter table on this page and cross-check with our official IndiaMART source.'
    }
  ];

  testimonials = [
    {
      name: 'Bhavesh',
      location: 'Junagadh region',
      text: 'We used Cora-5 in our groundnut fields at early infestation stage and got cleaner crop stand within the first spray window.',
      rating: 5
    },
    {
      name: 'Kiran',
      location: 'Rajkot belt',
      text: 'Dose clarity at 5 ml per pump made spraying easy for our team. The crop held well during stem borer pressure.',
      rating: 5
    },
    {
      name: 'Manoj',
      location: 'Amreli district',
      text: 'In vegetable blocks with heavy larval activity, Cora-5 gave us stable control when we followed timing and coverage discipline.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Put on gloves, mask, eye protection and long-sleeve clothing before handling the product.' },
    { name: 'Measure dose', text: 'Measure Cora-5 carefully at 5 ml per pump or as per approved crop recommendation.' },
    { name: 'Prepare premix', text: 'Add product to a small quantity of clean water and mix thoroughly before tank filling.' },
    { name: 'Fill and agitate', text: 'Transfer premix to spray tank, top up with water and maintain agitation for even suspension.' },
    { name: 'Apply uniformly', text: 'Spray at early larval stage with complete canopy coverage in calm weather conditions.' },
    { name: 'Post-spray hygiene', text: 'Clean equipment and dispose leftover material and containers as per label and local rules.' }
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

    const titleText = `${this.productTitle} | Cora-5 Insecticide | Harishree Crop Science`;
    this.title.setTitle(titleText);

    const desc =
      `${this.productName} is Harishree Crop Science ${this.productTitle} insecticide. Explore target pests, crops, mode of action, technical specifications, usage guidance and FAQ.`;

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Chlorantraniliprole 18.5% SC, Chlorantraniliprole 18.5% w/w SC, Cora-5, Cora 5 insecticide, chlorantraniliprole insecticide, chlorantraniliprole dose 5 ml pump, stem borer control, fall armyworm control, leaf folder control, Harishree Crop Science'
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
          description: `${this.productName} is Harishree Crop Science ${this.productTitle} solution for professional borer and larval pest management.`
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
        `${this.productTitle} (${this.productName}) product page with technical specifications, mode of action, usage guide, FAQs and crop application support.`,
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
        'Cora 5',
        'Chlorantraniliprole 18.5% w/w SC',
        'Cora-5 Chlorantraniliprole insecticide'
      ],
      description:
        `${this.productName} (${this.productTitle}) is a systemic and contact insecticide positioned for borer and larval pest management in major crops.`,
      image: [this.bottleImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: this.productName,
      category: 'Insecticide',
      sku: 'CORA-5',
      material: 'SC (Suspension Concentrate)',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        { '@type': 'PropertyValue', name: 'Dose', value: '5 ml/pump' },
        { '@type': 'PropertyValue', name: 'Primary keyword', value: this.productTitle },
        { '@type': 'PropertyValue', name: 'Secondary keyword', value: 'Cora-5' },
        { '@type': 'PropertyValue', name: 'Secondary keyword 2', value: 'Chlorantraniliprole 18.5% w/w SC' }
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
            { '@type': 'PropertyValue', name: 'Technical composition', value: this.productTitle },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Dose', value: '5 ml/pump' },
            { '@type': 'PropertyValue', name: 'Product name', value: this.productName }
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
