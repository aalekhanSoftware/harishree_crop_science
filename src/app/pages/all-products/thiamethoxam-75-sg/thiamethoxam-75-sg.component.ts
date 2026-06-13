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

/** Indicative list price for schema only; pack-wise offers. */
const INDICATIVE_LIST_PRICE_INR = 250;

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

  /** Used for hero + og image and JSON-LD. */
  readonly productImageUrl = `${this.baseUrl}/assets/products/insecticide/thiamethoxam-75-sg.jpg`;

  productTitle = 'Thiamethoxam 75% SG';

  packSizes = [
    { volume: '100 gm', price: 413, featured: false, sku: 'Thio-H 75-100GM' },
    { volume: '250 gm', price: 1027, featured: true, sku: 'Thio-H 75-250GM' },
    { volume: '500 gm', price: 2041, featured: false, sku: 'Thio-H 75-500GM' },
    { volume: '1 Kg', price: 4059, featured: false, sku: 'Thio-H 75-1KG' }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum sucking pest control',
      description:
        'Thiamethoxam 75% SG delivers dependable control against aphids, jassids, whiteflies, thrips, and hoppers across paddy, cotton, vegetables, and orchard crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Powerful systemic action',
      description:
        'The neonicotinoid active ingredient moves through plant tissues, protecting both established foliage and sensitive new growth from hidden pests.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'High-strength 75% SG formulation',
      description:
        'The soluble granule dissolves rapidly in water for easy mixing, ensuring uniform spray coverage without nozzle clogging in the field.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Low dose per pump',
      description:
        'Just 5 gm per pump keeps spray costs manageable while the long residual effect reduces the need for repeated applications in the season.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Long-lasting residual protection',
      description:
        'Maintains prolonged effectiveness after application, helping growers protect crop vigour and yield potential between spray windows.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Phytotonic crop response',
      description:
        'Many growers report visibly greener, healthier plants after spraying Thio-H 75 at the recommended dose on label crops.',
      icon: 'fas fa-seedling'
    }
  ];

  targetPests = [
    {
      name: 'Brown Plant Hopper (BPH)',
      description:
        'Highly effective in managing devastating hopper populations in paddy where timely control protects grain fill and stand quality.'
    },
    {
      name: 'Aphids & Jassids',
      description:
        'Prevents sap-sucking damage and associated viral disease transmission in cotton, vegetables, and oilseed crops.'
    },
    {
      name: 'Whiteflies',
      description:
        'Strong systemic activity helps control complex whitefly life stages on horticultural crops when applied at early infestation.'
    },
    {
      name: 'Thrips',
      description:
        'Reduces thrip infestations that cause severe curling, scarring, and quality loss on leaves and fruits.'
    },
    {
      name: 'Stem Borer (Early stage)',
      description:
        'Helps suppress early instars through strong systemic movement in the plant canopy when used as per label guidance.'
    },
    {
      name: 'Flea Beetles',
      description:
        'Prevents typical shot-hole damage on young seedlings in field crops during vulnerable early growth stages.'
    }
  ];

  applications = [
    {
      title: 'Paddy',
      description:
        'Critical for controlling Brown Plant Hopper and Green Leaf Hopper, ensuring higher grain yields when applied at threshold.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cotton',
      description:
        'Essential early-to-mid season protection against aphids, jassids, and whiteflies in high-pressure cotton belts.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Vegetables',
      description:
        'Used in okra, tomato, and brinjal for comprehensive sucking pest management with good canopy coverage.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Fruits & Orchards',
      description:
        'Controls sap-sucking insects that degrade fruit quality and tree vigour in orchard and plantation crops.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Sugarcane',
      description:
        'Effectively protects against early shoot borers and termites when used as directed on label crops.',
      icon: 'fas fa-grip-lines-vertical'
    },
    {
      title: 'Oilseeds',
      description:
        'Safeguards mustard and groundnut from severe aphid outbreaks during active vegetative growth.',
      icon: 'fas fa-sun'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: 'Thio-H 75' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'SG (Soluble Granule)' },
      { label: 'Physical form', value: 'Granules' },
      { label: 'Concentration / Composition', value: 'Thiamethoxam 75% SG' },
      { label: 'Insecticide type', value: 'Systemic neonicotinoid insecticide' },
      { label: 'Chemical group', value: 'Neonicotinoid' },
      {
        label: 'Mode of action',
        value: 'Binds to nicotinic acetylcholine receptors in insect nervous system; systemic, contact and stomach action'
      },
      { label: 'Action type', value: 'Systemic, contact, and stomach poison' },
      {
        label: 'Target pests',
        value: 'Aphids, Jassids, Whiteflies, Thrips, Brown Plant Hopper, Stem Borer (early), Flea Beetles'
      },
      { label: 'Target crops', value: 'Paddy, Cotton, Vegetables, Fruits, Sugarcane, Oilseeds' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pouch / pack (SG granules); sizes in schema' },
      { label: 'Recommended dose', value: '5 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early pest infestation or as per ETL/label' },
      { label: 'Rainfastness', value: 'Rapid systemic absorption supports rain resistance shortly after application' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides (jar test before mixing)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  /** Exact parameter rows for the technical spec table and JSON-LD additionalProperty. */
  officialProductDetails = [
    { label: 'Product Name', value: 'Thio-H 75' },
    { label: 'Brand / Trade Name', value: 'Thio-H' },
    { label: 'Technical Composition', value: 'Thiamethoxam 75% SG' },
    { label: 'Formulation', value: 'SG (Soluble Granule)' },
    { label: 'Insecticide Type', value: 'Systemic neonicotinoid insecticide' },
    { label: 'Chemical Group', value: 'Neonicotinoid' },
    {
      label: 'Mode of Action',
      value:
        'Binds to nicotinic acetylcholine receptors in the insect nervous system, disrupting nerve signalling; systemic, contact and stomach action'
    },
    { label: 'Action Type', value: 'Systemic, contact, and stomach poison' },
    {
      label: 'Target Pests',
      value: 'Aphids, Jassids, Whiteflies, Thrips, Brown Plant Hopper, Stem Borer (early stage), Flea Beetles'
    },
    { label: 'Target Crops', value: 'Paddy, Cotton, Vegetables, Fruits & Orchards, Sugarcane, Oilseeds' },
    { label: 'Recommended Dose', value: '5 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early pest infestation or as per ETL/label guidance' },
    { label: 'Rainfastness', value: 'Rapid systemic uptake supports resistance to wash-off shortly after application' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides (always jar test first)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Formulation Type', value: 'SG' },
    { label: 'Physical Form', value: 'Granules' },
    { label: 'Packaging Type', value: 'Pouch / pack' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Rapid dissolution and uptake',
      description:
        'Thiamethoxam 75% SG dissolves instantly in water and is quickly taken up by roots and foliage of the treated crop.'
    },
    {
      title: 'Systemic distribution',
      description:
        'The active ingredient moves through the xylem, distributing uniformly to all plant parts including sensitive new growth.'
    },
    {
      title: 'Nervous system disruption',
      description:
        'Acts on the central nervous system of insects by interfering with nicotinic acetylcholine receptors, paralysing pests.'
    },
    {
      title: 'Feeding cessation',
      description:
        'Affected insects rapidly stop feeding and die, immediately halting crop damage and protecting yield potential.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, a fitted mask, and eye protection when handling granules or spray mix.'
    },
    {
      title: 'Accurate 5 gm dose',
      text: 'Adhere precisely to the 5 gm per pump dosage to prevent resistance build-up and ensure crop safety.'
    },
    {
      title: 'Spray for real coverage',
      text: 'Use steady spray technique to reach leaf undersides. Good coverage improves effectiveness on thrips and sucking pests.'
    },
    {
      title: 'Environmental care',
      text: 'Avoid spraying near water bodies. Do not spray during active bee foraging times to protect pollinators.'
    },
    {
      title: 'Equipment hygiene',
      text: 'Thoroughly wash the sprayer immediately after use. Empty containers must be triple-rinsed and disposed of safely.'
    },
    {
      title: 'Storage and first aid',
      text: 'Store in a cool, dry place away from children and animal feed. Seek medical help immediately if accidental ingestion occurs.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Quick knockdown',
      value: 'Visible reduction of pest populations within hours of application when dose and coverage are correct.'
    },
    {
      label: 'Phytotonic effect',
      value: 'Often observed to promote greener, healthier, and more vigorous plant growth after treatment.'
    },
    {
      label: 'Rainfastness',
      value: 'Due to rapid systemic absorption, the product resists wash-off by rain shortly after application.'
    },
    {
      label: 'Cost-effective dosing',
      value: 'Low dosage requirement (5 gm/pump) and long residual action maximise returns on investment.'
    }
  ];

  faqs = [
    {
      question: 'What is Thiamethoxam 75% SG (Thio-H 75) used for?',
      answer:
        '<strong>Thiamethoxam 75% SG</strong> (marketed as <strong>Thio-H 75</strong> / <strong>Thio-H</strong>) is a broad-spectrum, highly systemic neonicotinoid insecticide used for controlling sucking pests like aphids, jassids, whiteflies, thrips, and hoppers in paddy, cotton, vegetables, and fruit crops.',
      answerPlain:
        'Thiamethoxam 75% SG (marketed as Thio-H 75 / Thio-H) is a broad-spectrum, highly systemic neonicotinoid insecticide used for controlling sucking pests like aphids, jassids, whiteflies, thrips, and hoppers in paddy, cotton, vegetables, and fruit crops.'
    },
    {
      question: 'What is the recommended dose of Thiamethoxam 75% SG?',
      answer:
        'The standard recommended dose is <strong>5 gm per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose is 5 gm per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which pack sizes are available for Thio-H 75?',
      answer:
        'Thio-H 75 (<strong>Thiamethoxam 75% SG</strong>) is available in grower-friendly pack sizes: <strong>50 gm, 100 gm, 250 gm, and 500 gm</strong>. Contact Harishree for dealer availability.',
      answerPlain:
        'Thio-H 75 (Thiamethoxam 75% SG) is available in grower-friendly pack sizes: 50 gm, 100 gm, 250 gm, and 500 gm. Contact Harishree for dealer availability.'
    },
    {
      question: 'Is Thiamethoxam 75% SG safe for crops?',
      answer:
        'Yes, when used at the recommended dosage. It exhibits a notable phytotonic effect, leading to visibly greener, healthier, and more vigorous plants on label crops.',
      answerPlain:
        'Yes, when used at the recommended dosage. It exhibits a notable phytotonic effect, leading to visibly greener, healthier, and more vigorous plants on label crops.'
    },
    {
      question: 'How fast does Thiamethoxam 75% SG work?',
      answer:
        'Due to rapid solubility and systemic absorption, pests typically cease feeding within hours of application, preventing further crop damage quickly.',
      answerPlain:
        'Due to rapid solubility and systemic absorption, pests typically cease feeding within hours of application, preventing further crop damage quickly.'
    },
    {
      question: 'What is the difference between Thio-H and Thio-H 75?',
      answer:
        '<strong>Thio-H</strong> is the company trade name; <strong>Thio-H 75</strong> is the branded pack for <strong>Thiamethoxam 75% SG</strong> insecticide manufactured by Harishree Crop Science.',
      answerPlain:
        'Thio-H is the company trade name; Thio-H 75 is the branded pack for Thiamethoxam 75% SG insecticide manufactured by Harishree Crop Science.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh',
      location: 'Gujarat',
      text: 'Thio-H 75 has been a game-changer for my paddy fields. The Brown Plant Hoppers were controlled quickly, and the crop stayed protected for a long time.',
      rating: 5
    },
    {
      name: 'Kiran',
      location: 'Gujarat',
      text: 'Just 5 gm per pump is enough. The product dissolves completely without clogging my sprayer, and my cotton crop is safe from jassids and whiteflies.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Gujarat',
      text: 'I noticed my vegetable plants looking greener and healthier after spraying Thiamethoxam 75% SG. It effectively stopped the thrips attack.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Wear gloves, goggles and a mask before opening the pack. Keep children away from the mixing area.' },
    {
      name: 'Measure Thio-H 75',
      text: 'Accurately measure 5 gm of Thiamethoxam 75% SG (Thio-H 75) for a standard 15-litre knapsack pump.'
    },
    { name: 'Half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the granules.' },
    {
      name: 'Add product',
      text: 'Add the measured 5 gm of granules directly into the water. The SG formulation dissolves rapidly without clogging.'
    },
    {
      name: 'Top up and agitate',
      text: 'Fill the rest of the tank with water and agitate slightly to ensure a uniform spray solution.'
    },
    {
      name: 'Apply with coverage',
      text: 'Spray evenly over crop foliage, ensuring good coverage on the underside of leaves for maximum efficacy on sucking pests.'
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

    this.title.setTitle('Thiamethoxam 75% SG | Thio-H 75 Systemic Insecticide | Harishree Crop Science');
    const desc =
      'Buy Thiamethoxam 75% SG (Thio-H 75 / Thio-H) systemic neonicotinoid insecticide by Harishree Crop Science. Broad-spectrum sucking pest control for paddy, cotton & vegetables. Dose: 5 gm/pump.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Thiamethoxam 75% SG, Thio-H, Thio-H 75, Thiamethoxam 75 SG, thiamethoxam insecticide, systemic insecticide, neonicotinoid, BPH control, aphid killer, whitefly control, thrips control, soluble granule insecticide, Harishree Crop Science, agriculture insecticide India'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: `Thiamethoxam 75% SG (Thio-H 75) | Harishree Crop Science` },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: this.productImageUrl },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Thiamethoxam 75% SG | Thio-H 75' },
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
          name: `Thio-H 75 (${this.productTitle})`,
          description:
            'Harishree Crop Science manufacturing and supply unit for Thio-H 75 (Thiamethoxam 75% SG) — a premium 75% soluble granule neonicotinoid insecticide for broad-spectrum systemic control of sucking pests in paddy, cotton, vegetables, and orchard crops.',
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
      name: `Thio-H 75 (${this.productTitle}) by Harishree Crop Science`,
      description:
        `Thio-H 75 (Thiamethoxam 75% SG) product page with dose, crops, safety, and pack guidance. Primary keyword: ${this.productTitle}. Secondary: Thio-H.`,
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
        caption: `Thio-H 75 ${this.productTitle} insecticide pack by Harishree Crop Science`
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
          name: 'Insecticides',
          item: `${this.baseUrl}/products`
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: `Thio-H 75 (${this.productTitle})`,
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
      alternateName: ['Thio-H 75', 'Thio-H', 'Thiamethoxam 75 SG Insecticide', 'Thiamethoxam SG'],
      description:
        'Thio-H 75 (Thiamethoxam 75% SG) by Harishree Crop Science is a premium broad-spectrum systemic neonicotinoid insecticide for superior control of sucking pests like aphids, jassids, whiteflies, and thrips in paddy, cotton, vegetables, and fruit crops. Dose: 5 gm/pump.',
      image: [this.productImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: 'Thio-H 75',
      category: 'Insecticide',
      sku: 'THIO-H-75-SG',
      material: 'SG (Soluble Granule)',
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
          name: 'Thio-H 75 dose per pump',
          value: '5 gm/pump'
        },
        { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Thiamethoxam 75% SG' },
        { '@type': 'PropertyValue', name: 'Formulation', value: 'SG (Soluble Granule)' },
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
        ratingValue: '4.9',
        reviewCount: '47',
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
      name: 'Thiamethoxam 75% SG (Thio-H 75) pack sizes',
      description: 'Harishree Crop Science Thio-H 75 (Thiamethoxam 75% SG) pack sizes with schema-only pricing.',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Thiamethoxam 75% SG (Thio-H 75) ${p.volume}`,
          image: this.productImageUrl,
          sku: p.sku,
          description: `Thiamethoxam 75% SG (Thio-H 75) ${p.volume} pack - ${p.price} INR`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          manufacturer: {
            '@type': 'Organization',
            name: 'Harishree Crop Science',
            url: this.baseUrl,
            logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
            address: this.manufacturerAddress()
          },
          category: 'Insecticide',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Thiamethoxam 75% SG' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Recommended dose', value: '5 gm/pump' },
            { '@type': 'PropertyValue', name: 'Water volume', value: '15-litre knapsack sprayer' },
            { '@type': 'PropertyValue', name: 'Application method', value: 'Foliar spray using knapsack or power sprayer' }
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
      name: `How to mix and apply Thio-H 75 (${this.productTitle})`,
      description:
        'Field steps for preparing a knapsack sprayer tank of Thio-H 75 (Thiamethoxam 75% SG) for foliar application at 5 gm/pump.',
      image: this.productImageUrl,
      totalTime: 'PT15M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: String(INDICATIVE_LIST_PRICE_INR)
      },
      supply: [
        { '@type': 'HowToSupply', name: 'Thio-H 75 (Thiamethoxam 75% SG)' },
        { '@type': 'HowToSupply', name: 'Clean water' }
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer (15 Litre)' },
        { '@type': 'HowToTool', name: 'Measuring spoon/scale' },
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
