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

const META_KEY = makeStateKey<boolean>('FI40_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('FI40_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('FI40_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('FI40_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('FI40_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('FI40_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('FI40_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('FI40_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('FI40_HOWTO_SCHEMA');

const INDICATIVE_LIST_PRICE_INR = 1109;

@Component({
  selector: 'app-fipronil-40-imidacloprid-40-wg',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fipronil-40-imidacloprid-40-wg.component.html',
  styleUrl: './fipronil-40-imidacloprid-40-wg.component.scss'
})
export class Fipronil40Imidacloprid40WgComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/fipronil-40-imidacloprid-40-wg';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productTitle = 'Fipronil 40% + Imidacloprid 40% WG';
  readonly productName = 'FI 40';
  readonly indiaMartUrl = 'https://www.indiamart.com/proddetail/fi-40-fipronil-40-imidacloprid-40-wg-2855406959248.html';
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/insecticide/fipronil-40-imidacloprid-40-wg.jpg`;

  packSizes = [
    { volume: '50 gm', price: 236, featured: false, sku: 'FI40-50GM' },
    { volume: '100 gm', price: 460, featured: false, sku: 'FI40-100GM' },
    { volume: '250 gm', price: 1109, featured: true, sku: 'FI40-250GM' }
  ];

  keyBenefits = [
    {
      title: 'Dual-action chemistry for faster and deeper control',
      description:
        'FI 40 combines Fipronil and Imidacloprid so growers can manage chewing and sucking pests in one disciplined spray program.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'WG formulation with smooth tank dispersion',
      description:
        'The water-dispersible granules mix quickly and support uniform spray quality when operators follow proper premix steps.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Reliable action on leaf and root pressure windows',
      description:
        'It supports practical field control where leaf folder and root grub pressure can reduce stand quality and crop vigor.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Simple dose guidance for field teams',
      description:
        'The recommended dose of 5 gm per pump keeps measurement straightforward and helps reduce operator variation.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Useful in multi-crop insect management',
      description:
        'FI 40 is positioned for cotton, paddy, wheat and vegetable programs where both contact and systemic support are needed.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Strong fit for resistance-management rotation',
      description:
        'Best outcomes come when FI 40 is used at threshold stage with scouting, interval discipline and mode-of-action rotation.',
      icon: 'fas fa-rotate-right'
    }
  ];

  targetPests = [
    {
      name: 'Leaf folder',
      description: 'Supports cleaner foliage where folded-leaf feeding pressure starts increasing in crop blocks.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Root grub',
      description: 'Useful in programs where root-zone insect activity affects uniform crop establishment.',
      icon: 'fas fa-bug'
    },
    {
      name: 'White grubs',
      description: 'Helps reduce below-surface feeding damage in sensitive growth stages.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Root aphids',
      description: 'Fits integrated schedules where subterranean sucking pests need early intervention.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Stem borer complex',
      description: 'Can be included in early protection windows where internal stem feeding starts.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Soil-dwelling and sucking pests',
      description: 'Dual chemistry helps address mixed pest pressure through one planned application round.',
      icon: 'fas fa-bug'
    }
  ];

  applications = [
    {
      title: 'Wheat',
      description: 'Applied as per advisory where soil and leaf-side insect pressure affects growth momentum.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Cotton',
      description: 'Useful in ETL-based schedules for sucking and early chewing pest complexes.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Vegetables',
      description: 'Supports crop protection in intensive vegetable blocks with disciplined spray timing.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Paddy',
      description: 'Included where leaf folder and root-zone pressure requires timely field intervention.',
      icon: 'fas fa-water'
    },
    {
      title: 'Fruits and ornamentals',
      description: 'Can be used under expert guidance where broad-spectrum pest management is needed.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Application stage',
      description: 'Spray at early pest appearance or threshold level as per label and local recommendation.',
      icon: 'fas fa-clock'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: this.productName },
      { label: 'Technical composition', value: this.productTitle },
      { label: 'Technical name', value: 'Imidacloprid 40% + Fipronil 40% WG' },
      { label: 'Formulation', value: 'WG (Water Dispersible Granules)' },
      { label: 'Insecticide type', value: 'Broad-spectrum combination insecticide' },
      { label: 'Chemical groups', value: 'Fipronil (Phenylpyrazole) + Imidacloprid (Neonicotinoid)' },
      { label: 'Form', value: 'Powder / granule for spray dispersion' },
      { label: 'Country of origin', value: 'Made in India' }
    ],
    packs: [
      { label: 'Recommended dose', value: '5 gm/pump' },
      { label: 'Water volume', value: '200 liters/acre' },
      { label: 'Application method', value: 'Soil drenching, seed treatment or foliar spray (as per target pest)' },
      { label: 'Application timing', value: 'Early crop stage or at pest appearance' },
      { label: 'Rainfastness', value: '3-4 hours after application' },
      { label: 'PHI (Pre-harvest interval)', value: '14-21 days (crop specific)' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: this.productName },
    { label: 'Technical Composition', value: this.productTitle },
    { label: 'Formulation', value: 'WG (Water Dispersible Granules)' },
    { label: 'Insecticide Type', value: 'Broad-spectrum combination insecticide' },
    { label: 'Chemical Groups', value: 'Fipronil: Phenylpyrazole; Imidacloprid: Neonicotinoid' },
    { label: 'Mode of Action', value: 'Fipronil blocks GABA-regulated chloride channels; Imidacloprid binds nicotinic acetylcholine receptors' },
    { label: 'Action Type', value: 'Systemic, contact and stomach action' },
    { label: 'Target Pests', value: 'Termites, white grubs, root aphids, stem borers, soil-dwelling and sucking pests' },
    { label: 'Target Crops', value: 'Sugarcane, cotton, groundnut, paddy, vegetables, fruits, turf, ornamentals' },
    { label: 'Recommended Dose', value: '5 gm/pump (varies by crop and pressure)' },
    { label: 'Water Volume', value: '200 liters/acre' },
    { label: 'Application Method', value: 'Soil drenching, seed treatment or foliar spray (as per target pest)' },
    { label: 'Application Timing', value: 'Early crop stage or at pest appearance' },
    { label: 'Residual Action', value: 'Long residual control (up to 3-4 weeks in soil)' },
    { label: 'Rainfastness', value: '3-4 hours after application' },
    { label: 'PHI (Pre-Harvest Interval)', value: '14-21 days (based on crop)' },
    { label: 'Compatibility', value: 'Compatible with most agrochemicals; avoid strong alkalis' },
    { label: 'Precautions', value: 'Use PPE, follow resistance rotation strategy, avoid excessive application' },
    { label: 'Official B2B source', value: this.indiaMartUrl }
  ];

  modeOfAction = [
    {
      title: 'Fipronil pathway',
      description:
        'Fipronil interferes with GABA-regulated chloride channels, disrupting nerve signaling and reducing insect movement and feeding activity.'
    },
    {
      title: 'Imidacloprid pathway',
      description:
        'Imidacloprid binds nicotinic acetylcholine receptors, causing neural overstimulation and progressive pest paralysis.'
    },
    {
      title: 'Combined field response',
      description:
        'The FI 40 combination supports broad-spectrum suppression where sucking and soil or foliage pests overlap in one crop cycle.'
    },
    {
      title: 'Timing-first performance',
      description:
        'For best results, apply early at economic threshold levels with proper coverage and avoid delayed rescue spraying.'
    }
  ];

  safetyItems = [
    { title: 'Wear PPE before handling granules', text: 'Use gloves, mask, eye shield and full-sleeve protective clothing during mixing and spraying.' },
    { title: 'Use exact dose and a proper premix', text: 'Measure 5 gm per pump accurately, premix with clean water, then top up spray tank.' },
    { title: 'Maintain spray discipline and nozzle calibration', text: 'Apply under calm weather with correct nozzle settings for better target coverage.' },
    { title: 'Avoid drift to ponds and non-target zones', text: 'Do not spray near fish culture or open water channels; follow local buffer guidance.' },
    { title: 'Follow re-entry and hygiene protocol', text: 'Allow safe re-entry intervals and wash exposed skin and clothing immediately after work.' },
    { title: 'Rotate chemistry for resistance prevention', text: 'Avoid repeated use in consecutive rounds and rotate with other approved insecticide groups.' }
  ];

  performanceHighlights = [
    {
      label: 'Strong support in mixed pest windows',
      value: 'Growers choose FI 40 when one spray window must address both systemic and contact requirements.'
    },
    {
      label: 'Practical dose discipline for field teams',
      value: 'The 5 gm/pump guidance helps supervisors maintain consistency in high-acreage operations.'
    },
    {
      label: 'WG handling advantage',
      value: 'Quick dispersion and stable tank behavior support smoother spray-day workflow in farm operations.'
    },
    {
      label: 'Dependable residual support',
      value: 'It offers useful residual action in soil-linked pest management when used at the right stage.'
    }
  ];

  faqs = [
    {
      question: 'What is FI 40 (Fipronil 40% + Imidacloprid 40% WG) used for?',
      answer:
        '<strong>FI 40</strong> is a combination insecticide used for broad-spectrum management of sucking and soil-associated pests in major crop programs.',
      answerPlain:
        'FI 40 is a combination insecticide used for broad-spectrum management of sucking and soil-associated pests in major crop programs.'
    },
    {
      question: 'What is the recommended dose of FI 40?',
      answer:
        'Standard field guidance is <strong>5 gm per pump</strong>. Final use must follow crop label and local agronomy recommendation.',
      answerPlain:
        'Standard field guidance is 5 gm per pump. Final use must follow crop label and local agronomy recommendation.'
    },
    {
      question: 'Which crops are commonly covered under FI 40 programs?',
      answer:
        'Common references include <strong>wheat, cotton, vegetables and paddy</strong>, with broader use based on advisory and label approvals.',
      answerPlain:
        'Common references include wheat, cotton, vegetables and paddy, with broader use based on advisory and label approvals.'
    },
    {
      question: 'Can FI 40 be used for both foliar and soil-side protection?',
      answer:
        'Yes. Depending on target pest and crop stage, FI 40 can be positioned through foliar spray or soil-focused application routes under expert guidance.',
      answerPlain:
        'Yes. Depending on target pest and crop stage, FI 40 can be positioned through foliar spray or soil-focused application routes under expert guidance.'
    },
    {
      question: 'How soon is FI 40 rainfast after spraying?',
      answer: 'Typical practical rainfastness is around <strong>3-4 hours</strong> after application under normal field conditions.',
      answerPlain: 'Typical practical rainfastness is around 3-4 hours after application under normal field conditions.'
    },
    {
      question: 'Where can I verify FI 40 technical details?',
      answer:
        'You can review the technical specification table on this page and cross-check with our official IndiaMART reference listing.',
      answerPlain:
        'You can review the technical specification table on this page and cross-check with our official IndiaMART reference listing.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh',
      location: 'Rajkot belt, Gujarat',
      text: 'We introduced FI 40 at the first sign of root pressure. The response was cleaner and crop recovery was much faster.',
      rating: 5
    },
    {
      name: 'Mukesh',
      location: 'Jamnagar region',
      text: 'Dose clarity at 5 gm per pump made training easy for our spray team. Coverage and consistency were both strong.',
      rating: 5
    },
    {
      name: 'Jaydeep',
      location: 'Paddhari zone',
      text: 'In a mixed pest window, FI 40 helped us stabilize the field with fewer corrective rounds when scouting was timely.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Wear gloves, mask, goggles and protective clothing before opening the pack.' },
    { name: 'Measure dose', text: 'Measure FI 40 at 5 gm per pump using a clean and dry scoop.' },
    { name: 'Prepare premix', text: 'Disperse measured granules in a small quantity of water before main tank filling.' },
    { name: 'Top up and agitate', text: 'Add remaining clean water and maintain agitation for even suspension.' },
    { name: 'Spray with full coverage', text: 'Apply uniformly on target zone during calm weather at early infestation stage.' },
    { name: 'Post-use hygiene', text: 'Clean equipment and dispose waste as per label and local safety regulations.' }
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
      `${this.productName} by Harishree Crop Science is a professional ${this.productTitle} WG insecticide. Dose: 5 gm/pump. Explore technical specifications, mode of action, crops, safety and FAQ.`;

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Fipronil 40% + Imidacloprid 40% WG, FI 40, fipronil imidacloprid WG insecticide, FI 40 dose, 5 gm pump dose, WG insecticide India, leaf folder control, root grub control, Harishree Crop Science'
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
          description: `${this.productName} is Harishree Crop Science ${this.productTitle} formulation for broad-spectrum pest management support.`
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
        `${this.productTitle} (${this.productName}) page with technical specifications, usage guidance, FAQs, schema data and crop application support.`,
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
        'FI 40 insecticide',
        'Fipronil 40 Imidacloprid 40 WG',
        'Imidacloprid 40% + Fipronil 40% WG'
      ],
      description:
        `${this.productName} (${this.productTitle}) is a dual-action WG insecticide for broad-spectrum pest management in crop protection programs.`,
      image: [this.bottleImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: this.productName,
      category: 'Insecticide',
      sku: 'FI40',
      material: 'WG (Water Dispersible Granules)',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        { '@type': 'PropertyValue', name: 'Dose', value: '5 gm/pump' },
        { '@type': 'PropertyValue', name: 'Company product name', value: this.productName },
        { '@type': 'PropertyValue', name: 'Primary keyword', value: this.productTitle },
        { '@type': 'PropertyValue', name: 'Secondary keyword', value: this.productName }
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
        reviewCount: '29',
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
            { '@type': 'PropertyValue', name: 'Dose', value: '5 gm/pump' }
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
        { '@type': 'HowToTool', name: 'Measuring scoop' },
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
