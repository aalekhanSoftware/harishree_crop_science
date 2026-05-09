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

const META_KEY = makeStateKey<boolean>('BULDOZER_1_9_EC_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('BULDOZER_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('BULDOZER_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('BULDOZER_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('BULDOZER_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('BULDOZER_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('BULDOZER_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('BULDOZER_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('BULDOZER_HOWTO_SCHEMA');

@Component({
  selector: 'app-emamectin-benzoate-1-9-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './emamectin-benzoate-1-9-ec.component.html',
  styleUrl: './emamectin-benzoate-1-9-ec.component.scss'
})
export class EmamectinBenzoate19EcComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/emamectin-benzoate-1-9-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  product = {
    name: 'Buldozer',
    subtitle: 'Emamectin Benzoate 1.9% EC',
    image: 'assets/products/Buldozer.png',
    description: 'Powerful emulsifiable concentrate insecticide that bulldozes through resistant caterpillars and leaf miners.'
  };

  packSizes = [
    { volume: '100 ml', price: 118, featured: false, sku: 'BLD-100ML' },
    { volume: '250 ml', price: 277, featured: true, sku: 'BLD-250ML' },
    { volume: '500 ml', price: 543, featured: false, sku: 'BLD-500ML' },
    { volume: '1 Ltr', price: 1062, featured: false, sku: 'BLD-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'Potent EC Formulation',
      description: 'Emulsifiable concentrate base ensures deep penetration into leaf tissues and reaches hidden pests with ease.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Rapid Pest Knockdown',
      description: 'Stops caterpillar and leaf miner feeding within hours of application, limiting crop damage immediately.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Translaminar Action',
      description: 'Active ingredient moves through leaf tissue to control pests on both sides of the leaf, including those feeding inside tunnels.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Broad Crop Compatibility',
      description: 'Registered and proven safe across cotton, vegetables, fruit crops, and paddy when used at recommended doses.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Rainfast Performance',
      description: 'Adheres strongly to plant surfaces, maintaining efficacy even after light rainfall or morning dew.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Resistance Management',
      description: 'Unique chloride-channel-activating mode of action helps rotate against other chemical classes for better resistance management.',
      icon: 'fas fa-shield-alt'
    }
  ];

  targetPests = [
    { name: 'Helicoverpa armigera (Bollworm)', description: 'Highly effective against the notorious American bollworm that damages cotton bolls, chilli fruit, and tomato.', icon: 'fas fa-bug' },
    { name: 'Spodoptera litura (Armyworm)', description: 'Controls the polyphagous armyworm that strips leaves in soybean, groundnut, and vegetables.', icon: 'fas fa-bug' },
    { name: 'Diamondback Moth (DBM)', description: 'Outstanding performance against resistant DBM populations in cabbage, cauliflower, and other cruciferous crops.', icon: 'fas fa-bug' },
    { name: 'Leaf Miners', description: 'Translaminar movement targets leaf miners that bore inside leaf tissue, which contact sprays often miss entirely.', icon: 'fas fa-bug' },
    { name: 'Fruit & Shoot Borers', description: 'Controls brinjal fruit and shoot borers, protecting yield quality in a key vegetable crop.', icon: 'fas fa-bug' },
    { name: 'Thrips', description: 'Suppresses thrips populations in chilli and onion, where the pest can cause serious crop losses.', icon: 'fas fa-bug' }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'Controls bollworm complex including Helicoverpa and Spodoptera. Apply at boll development stage for best results.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Vegetables (Cabbage, Cauliflower)',
      description: 'Outstanding control of Diamondback Moth and other leaf-eating caterpillars in cruciferous vegetables.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Brinjal & Okra',
      description: 'Manages fruit and shoot borers effectively, ensuring high market-quality produce with reduced tunnelling damage.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Chilli & Tomato',
      description: 'Controls fruit borers and thrips in chilli; highly effective on fruitworms in tomato at standard EC dose.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Soybean & Groundnut',
      description: 'Manages armyworm and semi-looper populations that cause rapid defoliation in legume crops during kharif season.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Paddy',
      description: 'Controls leaf folders and stem borers at recommended dose, protecting tillers and panicles across growth stages.',
      icon: 'fas fa-wheat-awn'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand name', value: 'Buldozer' },
      { label: 'Full product name', value: 'Buldozer (Emamectin Benzoate 1.9% EC)' },
      { label: 'Active ingredient', value: 'Emamectin Benzoate 1.9% EC' },
      { label: 'Formulation type', value: 'Emulsifiable Concentrate (EC)' },
      { label: 'Mode of action', value: 'Chloride channel activator — nerve and muscle action (IRAC Group 6)' },
      { label: 'Target pests', value: 'Caterpillars, Leaf miners, Borers, Thrips, Armyworms' },
      { label: 'Toxicity class', value: 'Blue label — moderately toxic, handle with care' }
    ],
    packs: [
      { label: 'Available pack sizes', value: '100 ml, 250 ml, 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '10 ml per 15-litre knapsack pump (10 ml/pump)' },
      { label: 'Application timing', value: 'At early pest appearance or egg hatching stage' },
      { label: 'Water volume', value: '200-250 litres per acre depending on crop canopy' },
      { label: 'Spray interval', value: 'Repeat at 10-14 days if pest pressure persists' },
      { label: 'Pre-harvest interval', value: 'As per crop label and local advisory' }
    ]
  };

  officialProductDetails = [
    { label: 'Product name', value: 'Buldozer' },
    { label: 'Technical name', value: 'Emamectin Benzoate 1.9% EC' },
    { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Form', value: 'Liquid' },
    { label: 'Insecticide type', value: 'Stomach and contact action insecticide' },
    { label: 'Chemical group', value: 'Avermectin' },
    { label: 'Mode of action', value: 'Activates chloride channels causing irreversible paralysis in target pests' },
    { label: 'Action type', value: 'Translaminar - penetrates leaf tissue and reaches hidden larvae' },
    {
      label: 'Target pests',
      value: 'Lepidopteran caterpillars, bollworms, pod borers, leaf folders, fruit borers, and similar larval pests'
    },
    {
      label: 'Target crops',
      value: 'Cotton, chilli, tomato, okra, cabbage, cauliflower, red gram, green gram and other label-approved crops'
    },
    { label: 'Recommended dose', value: '20 ml per pump (follow label and local advisory)' },
    { label: 'Water volume', value: 'Around 200 litres per acre' },
    { label: 'Application method', value: 'Foliar spray using knapsack or motorized sprayer' },
    { label: 'Application stage', value: 'At early larval stage for maximum control' },
    { label: 'Rainfastness', value: 'Approx. 2 to 4 hours after application' },
    { label: 'Re-entry interval', value: '24 hours with PPE precautions' },
    { label: 'Pre-harvest interval (PHI)', value: '7 to 10 days depending on crop' },
    { label: 'Compatibility', value: 'Compatible with most insecticides and fungicides; avoid strong alkalis' },
    { label: 'Packaging size', value: '1 L bottle' },
    { label: 'Country of origin', value: 'Made in India' },
    { label: 'Availability', value: 'In stock (subject to dealer region and seasonal demand)' }
  ];

  modeOfAction = [
    {
      title: 'Contact & Ingestion',
      description: 'The pest either touches the treated leaf surface or ingests treated plant material. Both pathways lead to active ingredient absorption.'
    },
    {
      title: 'Chloride Channel Activation',
      description: 'Once inside the insect, Emamectin Benzoate activates glutamate-gated chloride ion channels in the nervous system — a unique target site not shared by most chemical classes.'
    },
    {
      title: 'Irreversible Paralysis',
      description: 'The continuous, uncontrolled flow of chloride ions causes complete and irreversible paralysis of muscles, disrupting all movement and feeding.'
    },
    {
      title: 'Feeding Stops & Death Follows',
      description: 'The pest stops feeding within 1-4 hours of exposure. Unable to move, eat, or recover, it dies within 24-72 hours. Crop damage halts almost immediately.'
    }
  ];

  safetyItems = [
    { title: 'Personal Protective Equipment', text: 'Always wear full-sleeve clothing, chemical-resistant gloves, goggles, and a mask during mixing and spraying. Remove and wash PPE after work.' },
    { title: 'Pre-mixing Technique', text: 'Add the required dose of Buldozer to a small volume of water first, mix well, then pour into the main spray tank and fill to level. This prevents concentration spots.' },
    { title: 'Optimal Spray Timing', text: 'Spray in the early morning or late afternoon when temperatures are lower and wind is calm. Avoid spraying during rain or when rain is forecast within 2 hours.' },
    { title: 'Safe Storage', text: 'Store in original sealed container in a cool, dry, locked place away from food, feed, and drinking water. Keep out of reach of children and pets.' },
    { title: 'Equipment Cleaning', text: 'Rinse sprayer, mixing vessels, and PPE thorohgly with clean water three times after application. Handle rinse water carefully to avoid contamination.' },
    { title: 'Environmental Responsibility', text: 'Avoid spraying near water bodies, fish ponds, or beehives. Do not allow spray drift to non-target crops or areas. Dispose of empty containers as per local regulations.' }
  ];

  performanceHighlights = [
    { label: 'Fast Action', value: 'Feeding arrest noticeable within hours — minimises marginal crop loss.' },
    { label: 'EC Advantage', value: 'Emulsifiable concentrate wets and penetrates leaf surface quickly for uniform distribution.' },
    { label: 'Rainfast Bond', value: 'Strong leaf adherence resists light showers, maintaining residual protection.' },
    { label: 'Borer Specialist', value: 'Translaminar movement reaches borers and miners hidden inside leaf tissue.' }
  ];

  faqs = [
    {
      question: 'What is Buldozer Emamectin Benzoate 1.9% EC used for?',
      answer: '<strong>Buldozer</strong> (Emamectin Benzoate 1.9% EC) is a powerful EC insecticide used to control caterpillars, leaf miners, borers, and thrips in cotton, vegetables, chilli, brinjal, paddy, soybean, and multiple other crops.',
      answerPlain: 'Buldozer (Emamectin Benzoate 1.9% EC) is a powerful EC insecticide used to control caterpillars, leaf miners, borers, and thrips in cotton, vegetables, chilli, brinjal, paddy, soybean, and multiple other crops.'
    },
    {
      question: 'What is the dose of Emamectin Benzoate 1.9% EC per pump?',
      answer: 'The standard recommended dose for <strong>Buldozer</strong> is <strong>10 ml per 15-litre knapsack pump</strong>. Refer to the product label and local agronomist advice for specific crop adjustments.',
      answerPlain: 'The standard recommended dose for Buldozer is 10 ml per 15-litre knapsack pump. Refer to the product label and local agronomist advice for specific crop adjustments.'
    },
    {
      question: 'How is Emamectin Benzoate 1.9% EC different from 5% SG?',
      answer: 'The <strong>1.9% EC formulation</strong> is an emulsifiable concentrate — it mixes easily in water, penetrates leaf surfaces fast, and is well-suited for use in areas with harder water. The 5% SG (soluble granules) formulation is water-soluble and preferred for better handling ease. Both share the same mode of action but differ in active ingredient concentration and formulation base.',
      answerPlain: 'The 1.9% EC formulation is an emulsifiable concentrate that mixes easily in water, penetrates leaf surfaces fast, and is well-suited for use in areas with harder water. The 5% SG formulation is water-soluble and preferred for better handling ease. Both share the same mode of action but differ in active ingredient concentration and formulation base.'
    },
    {
      question: 'Is Buldozer safe for beneficial insects and pollinators?',
      answer: 'When <strong>Buldozer</strong> spray deposits have dried on the leaf surface, it poses minimal contact risk to most beneficial insects. To protect pollinators like honeybees, spray during early morning or late evening when bees are less active, and avoid spraying open flowers.',
      answerPlain: 'When Buldozer spray deposits have dried on the leaf surface, it poses minimal contact risk to most beneficial insects. To protect pollinators like honeybees, spray during early morning or late evening when bees are less active, and avoid spraying open flowers.'
    },
    {
      question: 'How does Emamectin Benzoate 1.9% EC control leaf miners?',
      answer: 'Emamectin Benzoate features <strong>translaminar movement</strong> — after spray application, it migrates through the leaf tissue and creates a zone of activity inside the leaf. Leaf miners that tunnel and feed inside the leaf encounter the active ingredient and are paralysed. This is a key advantage over purely contact insecticides.',
      answerPlain: 'Emamectin Benzoate features translaminar movement. After spray application, it migrates through the leaf tissue and creates a zone of activity inside the leaf. Leaf miners that tunnel and feed inside the leaf encounter the active ingredient and are paralysed. This is a key advantage over purely contact insecticides.'
    },
    {
      question: 'Which crops can I use Buldozer on?',
      answer: '<strong>Buldozer</strong> is suitable for use on cotton, cabbage, cauliflower, brinjal, okra, chilli, tomato, soybean, groundnut, paddy, and other crops as per the registered label claims. Always follow the approved crop and pest label.',
      answerPlain: 'Buldozer is suitable for use on cotton, cabbage, cauliflower, brinjal, okra, chilli, tomato, soybean, groundnut, paddy, and other crops as per the registered label claims. Always follow the approved crop and pest label.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh',
      location: 'Rajkot, Gujarat',
      text: 'My chilli crop was suffering badly from fruit borers and thrips. After one spray of Buldozer at 10 ml per pump, the damage stopped completely within two days. Very happy with the result.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Surendranagar, Gujarat',
      text: 'I have been using Buldozer in my cotton fields for the last two seasons. The bollworm population drops sharply after application. The 250 ml pack is great value for a medium-sized plot.',
      rating: 5
    },
    {
      name: 'Anil',
      location: 'Bhavnagar, Gujarat',
      text: 'Leaf miners in my brinjal crop were not responding to the usual sprays. Harishree dealer suggested Buldozer and it worked remarkably well. The translaminar action is very effective for hidden pests.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear Protective Gear', text: 'Put on gloves, goggles, full-sleeve clothes, and a mask before handling the product. Safety first, always.' },
    { name: 'Measure the Dose', text: 'Measure 10 ml of Buldozer accurately using a graduated measuring cup for a standard 15-litre pump.' },
    { name: 'Pre-mix in a Small Cup', text: 'Add the 10 ml dose to 500 ml of clean water in a small container and stir until it forms a uniform emulsion.' },
    { name: 'Fill the Spray Tank Halfway', text: 'Pour clean water into the knapsack sprayer until it is about half full, then add the pre-mixed emulsion.' },
    { name: 'Top Up and Agitate', text: 'Fill the remaining tank to 15 litres and close the lid. Shake or agitate gently to ensure thorough mixing.' },
    { name: 'Spray Uniformly', text: 'Spray the mix evenly over the crop canopy, ensuring coverage on the underside of leaves where pests tend to hide and feed.' },
    { name: 'Clean Equipment', text: 'After application, rinse the sprayer, measuring cup, and any PPE with clean water three times. Dispose of rinse water safely.' }
  ];

  comparisonData = [
    { feature: 'Active Ingredient', buldozer: 'Emamectin Benzoate 1.9% EC', others: 'Various' },
    { feature: 'Formulation', buldozer: 'EC (fast penetration)', others: 'Mostly EC/WP' },
    { feature: 'Translaminar Action', buldozer: 'Yes — reaches hidden pests', others: 'Limited for most' },
    { feature: 'Dose per Pump', buldozer: '10 ml per 15L pump', others: 'Higher doses common' },
    { feature: 'Mode of Action Group', buldozer: 'IRAC Group 6 (unique)', others: 'Various IRAC groups' },
    { feature: 'Resistance Management Value', buldozer: 'High — unique MoA', others: 'Variable' }
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

    this.title.setTitle('Emamectin Benzoate 1.9% EC | Buldozer | Harishree Crop Science');

    const desc =
      'Buy Buldozer — Emamectin Benzoate 1.9% EC insecticide by Harishree Crop Science. Controls caterpillars, leaf miners & borers effectively. Dose: 10 ml per pump. Best price in Gujarat.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Emamectin Benzoate 1.9% EC, Buldozer insecticide, Emamectin Benzoate EC, emamectin benzoate 1.9 price, emamectin benzoate dose, emamectin benzoate uses, caterpillar control, leaf miner control, bollworm insecticide, borer control spray, Harishree Crop Science, emamectin benzoate Gujarat, Buldozer crop science, emamectin 1.9 EC buy'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Emamectin Benzoate 1.9% EC | Buldozer | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/Buldozer.png` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Emamectin Benzoate 1.9% EC | Buldozer | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/Buldozer.png` }
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
          name: 'Emamectin Benzoate 1.9% EC (Buldozer)',
          description: 'Premium Emamectin Benzoate 1.9% EC emulsifiable concentrate designed for fast knockdown and translaminar control of caterpillars, leaf miners and borers across cotton, vegetables & paddy.'
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
      name: 'Emamectin Benzoate 1.9% EC — Buldozer by Harishree Crop Science',
      description:
        'Complete product information for Buldozer (Emamectin Benzoate 1.9% EC) — dose, price, uses, crops, and safety guidelines from Harishree Crop Science.',
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
        url: `${this.baseUrl}/assets/products/Buldozer.png`,
        caption: 'Buldozer Emamectin Benzoate 1.9% EC pack by Harishree Crop Science'
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
        { '@type': 'ListItem', position: 4, name: 'Emamectin Benzoate 1.9% EC (Buldozer)', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Emamectin Benzoate 1.9% EC',
      alternateName: ['Buldozer', 'Buldozer insecticide', 'Emamectin Benzoate EC', 'Emamectin 1.9 EC'],
      description:
        'Buldozer (Emamectin Benzoate 1.9% EC) is a powerful emulsifiable concentrate insecticide from Harishree Crop Science designed for rapid knockdown and translaminar control of caterpillars, leaf miners, bollworms, borers and thrips. Its unique chloride-channel-activating mode of action (IRAC Group 6) ensures efficacy against resistant pest populations. Suitable for cotton, vegetables, chilli, brinjal, paddy, soybean and more. Dose: 10 ml per 15-litre pump.',
      image: [`${this.baseUrl}/assets/products/Buldozer.png`],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: 'Buldozer',
      category: 'Insecticide',
      sku: 'BLD-EMA19EC',
      color: 'Clear Yellow EC',
      material: 'Emulsifiable Concentrate',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        { '@type': 'PropertyValue', name: 'Active Ingredient', value: 'Emamectin Benzoate 1.9% EC' },
        { '@type': 'PropertyValue', name: 'Formulation', value: 'Emulsifiable Concentrate (EC)' },
        { '@type': 'PropertyValue', name: 'IRAC Group', value: 'Group 6 - Chloride channel activators' },
        { '@type': 'PropertyValue', name: 'Insecticide Type', value: 'Stomach and contact action insecticide' },
        { '@type': 'PropertyValue', name: 'Dose per Pump', value: '20 ml per pump (as listed in official profile)' },
        { '@type': 'PropertyValue', name: 'Water Volume', value: 'Around 200 litres per acre' },
        { '@type': 'PropertyValue', name: 'Application Method', value: 'Foliar spray using knapsack or motorized sprayer' },
        { '@type': 'PropertyValue', name: 'Rainfastness', value: '2 to 4 hours after application' },
        { '@type': 'PropertyValue', name: 'Re-entry Interval', value: '24 hours with PPE' },
        { '@type': 'PropertyValue', name: 'PHI', value: '7 to 10 days depending on crop' },
        { '@type': 'PropertyValue', name: 'Packaging Size', value: '1 L bottle' },
        { '@type': 'PropertyValue', name: 'Availability', value: 'In stock' },
        { '@type': 'PropertyValue', name: 'Toxicity', value: 'Blue label (Moderately toxic)' },
        { '@type': 'PropertyValue', name: 'Country of Manufacture', value: 'India' }
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
        reviewCount: '52',
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
      name: 'Buldozer Emamectin Benzoate 1.9% EC — Available Pack Sizes',
      description: 'All available pack sizes and prices for Buldozer (Emamectin Benzoate 1.9% EC) insecticide by Harishree Crop Science.',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Buldozer Emamectin Benzoate 1.9% EC — ${p.volume} pack`,
          image: `${this.baseUrl}/assets/products/Buldozer.png`,
          sku: p.sku,
          description: `Buldozer (Emamectin Benzoate 1.9% EC) ${p.volume} pack from Harishree Crop Science — Powerful EC insecticide for caterpillars, leaf miners and borers.`,
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
            { '@type': 'PropertyValue', name: 'Active Ingredient', value: 'Emamectin Benzoate 1.9% EC' },
            { '@type': 'PropertyValue', name: 'Pack Size', value: p.volume },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '52',
            bestRating: '5'
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
      name: 'How to mix and apply Buldozer Emamectin Benzoate 1.9% EC',
      description: 'Step-by-step guide for safely mixing and applying Buldozer (Emamectin Benzoate 1.9% EC) insecticide in field crops.',
      image: `${this.baseUrl}/assets/products/Buldozer.png`,
      totalTime: 'PT20M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: '277'
      },
      supply: [
        { '@type': 'HowToSupply', name: 'Buldozer (Emamectin Benzoate 1.9% EC)' },
        { '@type': 'HowToSupply', name: 'Clean water' }
      ],
      tool: [
        { '@type': 'HowToTool', name: '15-litre knapsack sprayer' },
        { '@type': 'HowToTool', name: 'Graduated measuring cup' },
        { '@type': 'HowToTool', name: 'Chemical-resistant gloves' },
        { '@type': 'HowToTool', name: 'Goggles and face mask' }
      ],
      step: this.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        image: `${this.baseUrl}/assets/products/Buldozer.png`
      }))
    };
    this.addJsonLd(data, HOWTO_SCHEMA_KEY);
  }
}
