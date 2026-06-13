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

const META_KEY = makeStateKey<boolean>('GLUFO_13_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('GLUFO13_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('GLUFO13_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('GLUFO13_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('GLUFO13_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('GLUFO13_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('GLUFO13_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('GLUFO13_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('GLUFO13_HOWTO_SCHEMA');

/** Indicative list price for schema only; pack-wise offers. */
const INDICATIVE_LIST_PRICE_INR = 236;

@Component({
  selector: 'app-glufosinate-ammonium-13-5-sl',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './glufosinate-ammonium-13-5-sl.component.html',
  styleUrl: './glufosinate-ammonium-13-5-sl.component.scss'
})
export class GlufosinateAmmonium135SlComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/glufosinate-ammonium-13-5-sl';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  readonly productImageUrl = `${this.baseUrl}/assets/products/glufosinate-ammonium-13-5-sl.png`;

  productTitle = 'Glufosinate ammonium 13.5% SL';

  packSizes = [
    { volume: '500 ml', price: 236, featured: false, sku: 'GLUFO13-500ML' },
    { volume: '1 liter', price: 448, featured: true, sku: 'GLUFO13-1L' }
  ];

  keyBenefits = [
    {
      title: 'Fast visible weed knockdown',
      description:
        'Glufosinate ammonium 13.5% SL (GLUFO 13) starts acting quickly on actively growing weeds, giving growers faster visual suppression during orchard and plantation maintenance.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad-spectrum non-selective control',
      description:
        'Effective on many annual grasses and broadleaf weeds in directed spray and non-crop use patterns where total vegetation control is required.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Resistance management support',
      description:
        'Useful as an alternative herbicide mode of action in integrated weed management programs, reducing overdependence on glyphosate-only rotations.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Easy SL formulation',
      description:
        'The soluble liquid (SL) formulation is simple to measure and mix in knapsack sprayers for consistent field execution and uniform coverage.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Low dose per pump',
      description:
        'Just 5 gm per pump keeps spray costs manageable while delivering dependable post-emergence weed control when coverage is handled well.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Grower-friendly pack options',
      description:
        '500 ml and 1 liter packs suit small orchard basins and larger plantation blocks, with dealer support across Harishree channels.',
      icon: 'fas fa-box'
    }
  ];

  targetWeeds = [
    {
      name: 'Annual grasses',
      description:
        'Strong activity on many grassy weeds when treated at younger, actively growing stages with uniform foliar coverage.'
    },
    {
      name: 'Broadleaf weeds',
      description:
        'Controls broadleaf species competing with crop nutrition, light, and moisture in orchard basins and non-crop zones.'
    },
    {
      name: 'Volunteer growth',
      description:
        'Helps clear volunteer plants and mixed weed flora in non-selective burndown and cleanup programs before field operations.'
    },
    {
      name: 'Glyphosate-tolerant escapes',
      description:
        'Offers a useful alternative where routine glyphosate response is reduced, supporting resistance management strategies.'
    },
    {
      name: 'Inter-row vegetation',
      description:
        'Suitable for directed spray in orchards and plantations to keep basins clean while protecting desirable crop tissue.'
    },
    {
      name: 'Farmyard and perimeter weeds',
      description:
        'Maintains cleaner non-crop edges, bunds, farm paths, and infrastructure zones where total weed suppression is needed.'
    }
  ];

  applications = [
    {
      title: 'Orchards',
      description:
        'Directed sprays in fruit orchards while avoiding contact with green bark, leaves, and sensitive crop tissue as per label.',
      icon: 'fas fa-tree'
    },
    {
      title: 'Plantation crops',
      description:
        'Useful in tea, coffee, rubber, and similar plantation weed programs when applied with shielded or directed technique.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Vineyards',
      description:
        'Inter-row and under-vine weed control with shielded application to protect vines from non-selective contact.',
      icon: 'fas fa-wine-bottle'
    },
    {
      title: 'Non-crop areas',
      description:
        'Farm paths, bunds, and utility zones where total weed suppression is needed for safety and operational access.',
      icon: 'fas fa-road'
    },
    {
      title: 'Pre-plant cleanup',
      description:
        'Burndown of emerged weeds before field preparation and planting operations in integrated weed programs.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Spot treatment',
      description:
        'Targeted application for stubborn weed patches in integrated programs without treating the entire field.',
      icon: 'fas fa-crosshairs'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: 'GLUFO 13' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Herbicide' },
      { label: 'Formulation type', value: 'SL (Soluble Liquid)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Concentration / Composition', value: 'Glufosinate ammonium 13.5% SL' },
      { label: 'Herbicide type', value: 'Non-selective contact herbicide' },
      { label: 'Chemical group', value: 'Phosphinic acid (Glufosinate)' },
      {
        label: 'Mode of action',
        value: 'Inhibits glutamine synthetase; ammonia accumulation disrupts photosynthesis and cellular function'
      },
      { label: 'Action type', value: 'Contact, non-selective herbicide' },
      {
        label: 'Target weeds',
        value: 'Annual grasses, broadleaf weeds, volunteer growth, inter-row vegetation, glyphosate-tolerant escapes'
      },
      { label: 'Target crops / use', value: 'Orchards, plantations, vineyards, non-crop areas (directed spray)' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (SL liquid); 500 ml and 1 liter' },
      { label: 'Recommended dose', value: '5 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per weed density)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer with directed technique' },
      { label: 'Application stage', value: 'Post-emergence on actively growing weeds' },
      { label: 'Rainfastness', value: 'Allow adequate drying time; avoid rain shortly after application' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'GLUFO 13' },
    { label: 'Brand / Trade Name', value: 'GLUFO 13' },
    { label: 'Technical Composition', value: 'Glufosinate ammonium 13.5% SL' },
    { label: 'Formulation', value: 'SL (Soluble Liquid)' },
    { label: 'Herbicide Type', value: 'Non-selective contact herbicide' },
    { label: 'Chemical Group', value: 'Phosphinic acid (Glufosinate)' },
    {
      label: 'Mode of Action',
      value:
        'Inhibits glutamine synthetase in susceptible plants after foliar uptake; toxic ammonia accumulation disrupts photosynthesis and cellular function'
    },
    { label: 'Action Type', value: 'Contact, non-selective herbicide' },
    {
      label: 'Target Weeds',
      value: 'Annual grasses, broadleaf weeds, volunteer growth, inter-row vegetation, glyphosate-tolerant escapes'
    },
    { label: 'Target Crops / Use', value: 'Orchards, plantations, vineyards, non-crop areas (directed spray)' },
    { label: 'Recommended Dose', value: '5 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer with directed technique' },
    { label: 'Application Stage', value: 'Post-emergence on actively growing weeds' },
    { label: 'Rainfastness', value: 'Allow adequate drying time before rainfall' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Compatibility', value: 'Jar test before tank mixing with other products' },
    {
      label: 'Precautions',
      value: 'Use PPE; non-selective — avoid contact with desirable green plants; spray during calm weather to reduce drift'
    },
    { label: 'Pesticide Type', value: 'Herbicide' },
    { label: 'Formulation Type', value: 'SL' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Foliar absorption',
      description:
        'GLUFO 13 (Glufosinate ammonium 13.5% SL) is absorbed by green tissues after spray deposition on actively growing weed leaves.'
    },
    {
      title: 'Enzyme inhibition',
      description:
        'The active ingredient inhibits glutamine synthetase in susceptible plants after uptake, blocking normal nitrogen metabolism.'
    },
    {
      title: 'Ammonia accumulation',
      description:
        'Toxic ammonia accumulation disrupts photosynthesis and cellular function, leading to rapid loss of weed vigour.'
    },
    {
      title: 'Weed desiccation',
      description:
        'Treated weeds gradually lose vigour and dry down, reducing competition for light, moisture, and nutrients in treated zones.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, a fitted mask, and eye protection when handling GLUFO 13 or spray mix.'
    },
    {
      title: 'Accurate 5 gm dose',
      text: 'Adhere precisely to the 5 gm per pump dosage and calibrate sprayer output for uniform coverage and dose accuracy.'
    },
    {
      title: 'Spray for real coverage',
      text: 'Use steady spray technique with proper nozzle and pressure. Good coverage improves effectiveness on actively growing weeds.'
    },
    {
      title: 'Avoid drift',
      text: 'Spray during calm weather and protect nearby desirable plants from contact. GLUFO 13 is non-selective on green tissue.'
    },
    {
      title: 'Directed spray only',
      text: 'Do not spray directly on green crop foliage or stems unless the label specifically allows it for that crop.'
    },
    {
      title: 'Storage and disposal',
      text: 'Store sealed away from children and feed. Triple-rinse containers and dispose according to local agricultural regulations.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Quick visual effect',
      value: 'Visible weed suppression starts quickly under active growth conditions when dose and coverage are correct.'
    },
    {
      label: 'Operational flexibility',
      value: 'Practical for orchards, plantations, vineyards, and non-crop maintenance programs with directed spray technique.'
    },
    {
      label: 'Resistance rotation',
      value: 'Useful alternative chemistry in integrated weed management where glyphosate-only programs need diversification.'
    },
    {
      label: 'Cost-effective dosing',
      value: 'Low dosage requirement (5 gm/pump) and two pack sizes (500 ml, 1 liter) maximise returns on investment.'
    }
  ];

  faqs = [
    {
      question: 'What is Glufosinate ammonium 13.5% SL (GLUFO 13) used for?',
      answer:
        '<strong>GLUFO 13</strong> is a <strong>Glufosinate ammonium 13.5% SL</strong> non-selective herbicide for controlling emerged weeds in orchards, plantations, vineyards, and non-crop areas when used as directed with shielded or directed spray.',
      answerPlain:
        'GLUFO 13 is a Glufosinate ammonium 13.5% SL non-selective herbicide for controlling emerged weeds in orchards, plantations, vineyards, and non-crop areas when used as directed with shielded or directed spray.'
    },
    {
      question: 'What is the recommended dose of Glufosinate ammonium 13.5% SL?',
      answer:
        'The standard recommended dose is <strong>5 gm per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose is 5 gm per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which pack sizes are available for GLUFO 13?',
      answer:
        '<strong>GLUFO 13</strong> (<strong>Glufosinate ammonium 13.5% SL</strong>) is available in <strong>500 ml</strong> and <strong>1 liter</strong> packs. Contact Harishree for dealer availability.',
      answerPlain:
        'GLUFO 13 (Glufosinate ammonium 13.5% SL) is available in 500 ml and 1 liter packs. Contact Harishree for dealer availability.'
    },
    {
      question: 'Can GLUFO 13 help in resistance management?',
      answer:
        'Yes. <strong>Glufosinate ammonium 13.5% SL</strong> is often used as an alternative herbicide chemistry in integrated weed management programs to reduce overdependence on a single mode of action such as glyphosate.',
      answerPlain:
        'Yes. Glufosinate ammonium 13.5% SL is often used as an alternative herbicide chemistry in integrated weed management programs to reduce overdependence on a single mode of action such as glyphosate.'
    },
    {
      question: 'Is GLUFO 13 safe for all crops?',
      answer:
        'It is <strong>non-selective</strong> and can injure any green plant it touches. Use directed spray practices and avoid contact with crop foliage, green stems, and desirable vegetation.',
      answerPlain:
        'It is non-selective and can injure any green plant it touches. Use directed spray practices and avoid contact with crop foliage, green stems, and desirable vegetation.'
    },
    {
      question: 'What is the difference between GLUFO 13 and Glufosinate ammonium 13.5% SL?',
      answer:
        '<strong>GLUFO 13</strong> is the company trade name; it is the branded pack of <strong>Glufosinate ammonium 13.5% SL</strong> herbicide manufactured by Harishree Crop Science.',
      answerPlain:
        'GLUFO 13 is the company trade name; it is the branded pack of Glufosinate ammonium 13.5% SL herbicide manufactured by Harishree Crop Science.'
    }
  ];

  testimonials = [
    {
      name: 'Mahesh',
      location: 'Gujarat',
      text: 'GLUFO 13 gave us fast cleanup in orchard basins and reduced manual weeding rounds. Glufosinate ammonium 13.5% SL works well on tough grasses.',
      rating: 5
    },
    {
      name: 'Prakash',
      location: 'Gujarat',
      text: 'The 1 liter pack is economical for our plantation blocks and coverage is consistent when we follow the 5 gm per pump dose.',
      rating: 5
    },
    {
      name: 'Dinesh',
      location: 'Gujarat',
      text: 'Good option in our weed program where we need an alternative to routine glyphosate sprays. GLUFO 13 delivers visible knockdown quickly.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Wear gloves, goggles and a mask before opening the pack. Keep children away from the mixing area.' },
    {
      name: 'Measure GLUFO 13',
      text: 'Accurately measure 5 gm of Glufosinate ammonium 13.5% SL (GLUFO 13) for a standard 15-litre knapsack pump.'
    },
    { name: 'Half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the product.' },
    {
      name: 'Add product',
      text: 'Add the measured 5 gm of GLUFO 13 to the water. The SL formulation mixes readily with agitation.'
    },
    {
      name: 'Top up and agitate',
      text: 'Fill the rest of the tank with water and agitate properly to ensure a uniform spray solution.'
    },
    {
      name: 'Apply to weeds',
      text: 'Spray actively growing weeds with uniform coverage, minimal drift, and directed technique to protect desirable plants.'
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

    this.title.setTitle('Glufosinate ammonium 13.5% SL | GLUFO 13 Herbicide | Harishree Crop Science');
    const desc =
      'Buy Glufosinate ammonium 13.5% SL (GLUFO 13) non-selective herbicide by Harishree Crop Science. Broad-spectrum weed control for orchards, plantations & non-crop areas. Dose: 5 gm/pump. Packs: 500 ml & 1 liter.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Glufosinate ammonium 13.5% SL, GLUFO 13, Glufosinate herbicide, Glufosinate ammonium herbicide, non-selective herbicide India, weed killer for orchards, herbicide for plantations, glufosinate SL India, Harishree Crop Science, weed control herbicide'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: `Glufosinate ammonium 13.5% SL (GLUFO 13) | Harishree Crop Science` },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: this.productImageUrl },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Glufosinate ammonium 13.5% SL | GLUFO 13' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: this.productImageUrl }
    ];

    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }

  private injectStructuredData(): void {
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
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = text;
    this.document.head.appendChild(script);
  }

  private manufacturerAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
      addressLocality:
        'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
      addressRegion: 'Gujarat',
      postalCode: '360110',
      addressCountry: 'IN'
    };
  }

  private departmentPostalAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360110',
      addressCountry: {
        '@type': 'Country',
        name: 'IN'
      }
    };
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
      address: this.manufacturerAddress()
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
      address: this.manufacturerAddress(),
      areaServed: [
        { '@type': 'City', name: 'Rajkot' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' }
      ],
      department: [
        {
          '@type': 'LocalBusiness',
          name: `GLUFO 13 (${this.productTitle})`,
          description:
            'Harishree Crop Science manufacturing and supply unit for GLUFO 13 (Glufosinate ammonium 13.5% SL) — a premium non-selective contact herbicide for broad-spectrum weed control in orchards, plantations, and non-crop areas.',
          telephone: '+919898197196',
          email: 'harishreecropscience@gmail.com',
          address: this.departmentPostalAddress()
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
      name: `GLUFO 13 (${this.productTitle}) by Harishree Crop Science`,
      description:
        `GLUFO 13 (Glufosinate ammonium 13.5% SL) product page with dose, crops, safety, and pack guidance. Primary keyword: ${this.productTitle}. Secondary: GLUFO 13.`,
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
        url: this.productImageUrl,
        caption: `GLUFO 13 ${this.productTitle} herbicide pack by Harishree Crop Science`
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
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${this.baseUrl}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: `${this.baseUrl}/products`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Herbicides',
          item: `${this.baseUrl}/products`
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: `GLUFO 13 (${this.productTitle})`,
          item: this.pageUrl
        }
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
      alternateName: ['GLUFO 13', 'Glufosinate ammonium 13.5% SL herbicide', 'Glufo 13 herbicide', 'Glufosinate SL'],
      description:
        'GLUFO 13 (Glufosinate ammonium 13.5% SL) by Harishree Crop Science is a premium non-selective contact herbicide for broad-spectrum weed control in orchards, plantations, vineyards, and non-crop zones. Dose: 5 gm/pump.',
      image: [this.productImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: 'GLUFO 13',
      category: 'Herbicide',
      sku: 'GLUFO13-SL',
      material: 'SL (Soluble Liquid)',
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
          name: 'GLUFO 13 dose per pump',
          value: '5 gm/pump'
        },
        { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Glufosinate ammonium 13.5% SL' },
        { '@type': 'PropertyValue', name: 'Formulation', value: 'SL (Soluble Liquid)' },
        { '@type': 'PropertyValue', name: 'Manufacturer', value: 'Harishree Crop Science' }
      ],
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: this.baseUrl,
        logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
        address: this.manufacturerAddress()
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
      name: 'Glufosinate ammonium 13.5% SL (GLUFO 13) pack sizes',
      description: 'Harishree Crop Science GLUFO 13 (Glufosinate ammonium 13.5% SL) pack sizes with schema-only pricing.',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Glufosinate ammonium 13.5% SL (GLUFO 13) ${p.volume}`,
          image: this.productImageUrl,
          sku: p.sku,
          description: `Glufosinate ammonium 13.5% SL (GLUFO 13) ${p.volume} pack - ${p.price} INR`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          manufacturer: {
            '@type': 'Organization',
            name: 'Harishree Crop Science',
            url: this.baseUrl,
            logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
            address: this.manufacturerAddress()
          },
          category: 'Herbicide',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Glufosinate ammonium 13.5% SL' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Recommended dose', value: '5 gm/pump' },
            { '@type': 'PropertyValue', name: 'Water volume', value: '15-litre knapsack sprayer' },
            {
              '@type': 'PropertyValue',
              name: 'Application method',
              value: 'Foliar spray using knapsack or power sprayer with directed technique'
            }
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
      name: `How to mix and apply GLUFO 13 (${this.productTitle})`,
      description:
        'Field steps for preparing a knapsack sprayer tank of GLUFO 13 (Glufosinate ammonium 13.5% SL) for directed foliar application at 5 gm/pump.',
      image: this.productImageUrl,
      totalTime: 'PT20M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: String(INDICATIVE_LIST_PRICE_INR)
      },
      supply: [
        { '@type': 'HowToSupply', name: 'GLUFO 13 (Glufosinate ammonium 13.5% SL)' },
        { '@type': 'HowToSupply', name: 'Clean water' }
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer (15 Litre)' },
        { '@type': 'HowToTool', name: 'Measuring scale/cup' },
        { '@type': 'HowToTool', name: 'Personal Protective Equipment (PPE)' }
      ],
      step: this.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        image: this.productImageUrl
      }))
    };
    this.addJsonLd(data, HOWTO_SCHEMA_KEY);
  }
}
