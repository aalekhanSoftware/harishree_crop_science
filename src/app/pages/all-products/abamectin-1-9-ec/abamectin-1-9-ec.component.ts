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

const META_KEY = makeStateKey<boolean>('ABAMECTIN_19_EC_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('ABAMECTIN_19_EC_HOWTO_SCHEMA');

/** Indicative list price for schema only; pack-wise offers use AggregateOffer min/max from packSizes. */
const INDICATIVE_LIST_PRICE_INR = 250;

@Component({
  selector: 'app-abamectin-1-9-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abamectin-1-9-ec.component.html',
  styleUrl: './abamectin-1-9-ec.component.scss'
})
export class Abamectin19EcComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/abamectin-1-9-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly indiaMartUrl =
    'https://www.indiamart.com/proddetail/dr-supreme-abamectin-1-9-ec-insecticide-2855130040533.html';

  product = {
    name: 'Dr. Supreme',
    subtitle: 'Abamectin 1.9% EC',
    image: 'assets/products/abamectin-1-9-ec.png',
    description:
      'EC insecticide and acaricide built for mites, thrips and leaf miners when you need clean foliage and steady fruit set.'
  };

  specFigureImage = 'assets/products/abamectin-1-9-ec.png';
  packSizes = [
    { volume: '100 ml', price: 118, featured: false, sku: 'DS-ABM-100ML' },
    { volume: '250 ml', price: 277, featured: true, sku: 'DS-ABM-250ML' },
    { volume: '500 ml', price: 543, featured: false, sku: 'DS-ABM-500ML' },
    { volume: '1 Ltr', price: 1062, featured: false, sku: 'DS-ABM-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'EC that settles into the canopy',
      description:
        'The emulsifiable concentrate films leaves evenly, so you are not left with dry strips where mites can keep breeding.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Hits mites and thrips where they feed',
      description:
        'Strong on sucking pests that scar leaves and fruit—especially when pressure builds early in the season.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Translaminar habit',
      description:
        'Moves across the leaf blade to reach pests tucked on the underside or starting mines just under the epidermis.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Fits mixed cropping programmes',
      description:
        'Vegetables, cotton, tea and selected fruit crops sit comfortably in the programme when the label is followed.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Rain window you can plan around',
      description:
        'Give sprays a few hours on the leaf before heavy rain; morning or late-day timing usually works best.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Rotation-friendly MoA',
      description:
        'IRAC Group 6 chemistry—keep it in rotation with other modes of action to slow resistance.',
      icon: 'fas fa-shield-alt'
    }
  ];

  targetPests = [
    {
      name: 'Spider mites (red / yellow mite complex)',
      description:
        'When mites stipple leaves and fine webbing appears, a timely spray helps restore leaf colour and photosynthesis.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Thrips',
      description:
        'Silvering on leaves and scarring on fruit is expensive; Abamectin EC is a trusted option where thrips are the main worry.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Leaf miners',
      description:
        'Serpentine mines ruin salad crops and ornamentals; translaminar movement reaches larvae feeding inside the leaf.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Light caterpillar pressure',
      description:
        'Young larvae that are still picking at foliage can be checked when they are caught early—always match spray to scouting.',
      icon: 'fas fa-bug'
    }
  ];

  applications = [
    {
      title: 'Chilli & tomato',
      description:
        'Thrips and mites are everyday headaches here. Spray when you first see stippling or scarring—not after damage spreads wall to wall.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Brinjal & okra',
      description:
        'Keeps foliage saleable and reduces scarring on fruit when used as part of a disciplined monitoring cycle.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cotton',
      description:
        'Useful when mites spike under hot, dry pockets of the season; pair with scouting so you treat on threshold, not habit.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Tea',
      description:
        'Helps hold mite flare-ups in check on bush tea where leaf quality drives the price.',
      icon: 'fas fa-mug-hot'
    },
    {
      title: 'Grapes & citrus',
      description:
        'Fruit crops need careful timing around PHI and export residue rules—always take local label advice before spraying.',
      icon: 'fas fa-lemon'
    },
    {
      title: 'Other label crops',
      description:
        'If your agronomist points to Abamectin 1.9% EC on the registered list, run tank mix jar tests before broad acre work.',
      icon: 'fas fa-tractor'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Trade name', value: 'Dr. Supreme' },
      { label: 'Technical name', value: 'Abamectin 1.9% EC' },
      { label: 'Product type', value: 'Insecticide / acaricide (miticide)' },
      { label: 'Formulation', value: 'Emulsifiable concentrate (EC)' },
      { label: 'Chemical group', value: 'Avermectins (from Streptomyces avermitilis)' },
      { label: 'Mode of action', value: 'IRAC Group 6 — glutamate-gated chloride channel activator' },
      { label: 'Action type', value: 'Contact and stomach; limited systemic (translaminar)' }
    ],
    packs: [
      { label: 'Pack sizes', value: '100 ml, 250 ml, 500 ml, 1 Ltr (bottle)' },
      { label: 'Recommended dose', value: '20 ml per knapsack pump (confirm on label and with local advisory)' },
      { label: 'Water volume', value: 'About 200 litres per acre (adjust for canopy)' },
      { label: 'Application', value: 'Foliar spray — knapsack or power sprayer' },
      { label: 'Best timing', value: 'At early mite, thrips or miner flare' },
      { label: 'Rainfastness', value: 'Roughly 3–4 hours after application' },
      { label: 'Re-entry', value: '12–24 hours with proper PPE' },
      { label: 'PHI', value: '7–14 days depending on crop (label-specific)' }
    ]
  };

  officialProductDetails = [
    { label: 'Product name', value: 'Dr. Supreme' },
    { label: 'Technical name', value: 'Abamectin 1.9% EC' },
    { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Physical form', value: 'Liquid' },
    { label: 'Brand', value: 'Harishree Crop Science' },
    { label: 'Insecticide type', value: 'Miticide / insecticide' },
    { label: 'Chemical group', value: 'Avermectins' },
    {
      label: 'Mode of action',
      value: 'Activates chloride channels — disrupts nerve signals, paralysis and death in target insects and mites'
    },
    { label: 'Action type', value: 'Contact & stomach; limited systemic (translaminar)' },
    {
      label: 'Target pests',
      value: 'Mites (red spider, yellow mite), leaf miners, thrips, light caterpillar pressure'
    },
    {
      label: 'Target crops',
      value: 'Chilli, tomato, brinjal, okra, cotton, tea, grapes, citrus and other label-approved crops'
    },
    { label: 'Recommended dose', value: '20 ml per pump' },
    { label: 'Water volume', value: '200 litres per acre' },
    { label: 'Application method', value: 'Foliar spray' },
    { label: 'Application stage', value: 'Early signs of mite or miner infestation' },
    { label: 'Rainfastness', value: '3–4 hours after application' },
    { label: 'Re-entry interval', value: '12–24 hours with protective gear' },
    { label: 'PHI (pre-harvest interval)', value: '7–14 days (varies by crop)' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides; avoid strong alkalis' },
    { label: 'Packaging', value: '1 L bottle (multiple SKUs available)' },
    { label: 'Country of origin', value: 'Made in India' },
    { label: 'Availability', value: 'In stock (subject to region and season)' }
  ];

  modeOfAction = [
    {
      title: 'Pickup on the leaf',
      description:
        'Mites, thrips and young larvae pick up the deposit while moving or feeding. Even brief contact can start the process.'
    },
    {
      title: 'Chloride channels open wide',
      description:
        'Abamectin pushes glutamate-gated chloride channels to stay active. Nerve signalling collapses in susceptible pests.'
    },
    {
      title: 'Feeding slows quickly',
      description:
        'You usually see damage taper off soon after a good spray because feeding behaviour is disrupted early.'
    },
    {
      title: 'Use scouting to decide repeats',
      description:
        'If new adults blow in or eggs hatch, a follow-up may be needed—never stretch intervals blindly.'
    }
  ];

  safetyItems = [
    {
      title: 'Personal protective equipment',
      text: 'Long sleeves, chemical gloves, goggles and a fitted mask while pouring and spraying. Wash work clothes separately.'
    },
    {
      title: 'Mix in the right order',
      text: 'Pre-mix Dr. Supreme in a small volume of water, stir to a smooth emulsion, then add to the tank. Top up slowly and agitate.'
    },
    {
      title: 'Spray when the air is steady',
      text: 'Early morning or late afternoon cuts drift and leaf burn. Skip applications if heavy rain is hours away.'
    },
    {
      title: 'Storage',
      text: 'Original bottle, upright, locked store away from feed and seed. Keep the cap tight so the EC does not skin over.'
    },
    {
      title: 'Rinse gear properly',
      text: 'Triple-rinse the sprayer and pour rinse water back on the treated block as per local guidance—never into ponds.'
    },
    {
      title: 'Bees and water',
      text: 'Avoid blooming crops where possible. Buffer ditches and farm ponds from drift; read the danger label on pack.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Visible calm in the canopy',
      value: 'Stippling slows once coverage is good and weather cooperates.'
    },
    {
      label: 'Built for EC users',
      value: 'Familiar mixing rhythm for teams already running EC programmes across vegetables and cotton.'
    },
    {
      label: 'Holds under light showers',
      value: 'Allow a few hours on the leaf before expecting heavy rain.'
    },
    {
      label: 'Mines and undersides',
      value: 'Translaminar movement helps where pests sit under the leaf or just inside tissue.'
    }
  ];

  whyAbamectin = [
    {
      title: 'When foliage quality pays',
      paragraph:
        'Some seasons are defined by mites and thrips more than by big caterpillars. Abamectin 1.9% EC is the sort of tool growers reach for when leaf health and fruit finish need to stay market-grade.'
    },
    {
      title: 'Why Dr. Supreme in an EC',
      paragraph:
        'Harishree packages this as a straight EC so your spray team gets predictable emulsions in the tank and even film on the leaf. Dr. Supreme is our trade name on this Abamectin 1.9% EC—same discipline on QC as the rest of the portfolio.'
    },
    {
      title: 'Keep resistance in mind',
      paragraph:
        'Group 6 works beautifully until it is overused. Rotate with unrelated chemistry, preserve refuges where you can, and log what you sprayed and when.'
    }
  ];

  faqs = [
    {
      question: 'What is Abamectin 1.9% EC used for?',
      answer:
        '<strong>Dr. Supreme</strong> (Abamectin 1.9% EC) is an insecticide and acaricide used mainly for <strong>mites, thrips and leaf miners</strong> on crops such as chilli, tomato, brinjal, okra, cotton, tea, grapes and citrus where the label allows.',
      answerPlain:
        'Dr. Supreme (Abamectin 1.9% EC) is an insecticide and acaricide used mainly for mites, thrips and leaf miners on crops such as chilli, tomato, brinjal, okra, cotton, tea, grapes and citrus where the label allows.'
    },
    {
      question: 'What dose of Dr. Supreme Abamectin 1.9% EC should I use per pump?',
      answer:
        'The field recommendation we publish is <strong>20 ml per knapsack pump</strong> with roughly <strong>200 litres of water per acre</strong>. Always double-check the registered label and your local agronomist before spraying.',
      answerPlain:
        'The field recommendation we publish is 20 ml per knapsack pump with roughly 200 litres of water per acre. Always double-check the registered label and your local agronomist before spraying.'
    },
    {
      question: 'Where can I buy Dr. Supreme or check official specs?',
      answer:
        'Contact any <strong>Harishree Crop Science</strong> authorised dealer in your district. You can also cross-check listing details on our official <strong>IndiaMART</strong> product page linked from this site.',
      answerPlain:
        'Contact any Harishree Crop Science authorised dealer in your district. You can also cross-check listing details on our official IndiaMART product page linked from this site.'
    },
    {
      question: 'Is Abamectin 1.9% EC the same as Emamectin Benzoate?',
      answer:
        'No. Both sit in the avermectin family and share <strong>IRAC Group 6</strong>, but the active ingredient and label claims differ. Pick the product that matches your pest spectrum and registered crop.',
      answerPlain:
        'No. Both sit in the avermectin family and share IRAC Group 6, but the active ingredient and label claims differ. Pick the product that matches your pest spectrum and registered crop.'
    },
    {
      question: 'Can I mix Dr. Supreme with fungicides?',
      answer:
        'It is broadly compatible with many fungicides and insecticides, but <strong>avoid strong alkaline mixes</strong>. Run a jar test with the exact partners you intend to use.',
      answerPlain:
        'It is broadly compatible with many fungicides and insecticides, but avoid strong alkaline mixes. Run a jar test with the exact partners you intend to use.'
    },
    {
      question: 'How do I protect bees?',
      answer:
        'Spray in periods when bees are less active, avoid open flowers where the label restricts application, and tell neighbouring beekeepers if you farm close to apiaries.',
      answerPlain:
        'Spray in periods when bees are less active, avoid open flowers where the label restricts application, and tell neighbouring beekeepers if you farm close to apiaries.'
    },
    {
      question: 'What PHI should I follow?',
      answer:
        'Pre-harvest interval varies by crop—often <strong>roughly one to two weeks</strong>. Use only the interval printed for your crop on the official label.',
      answerPlain:
        'Pre-harvest interval varies by crop—often roughly one to two weeks. Use only the interval printed for your crop on the official label.'
    }
  ];

  testimonials = [
    {
      name: 'Kishan',
      location: 'Morbi, Gujarat',
      text: 'Thrips on chilli were burning the new flush. We ran Dr. Supreme at the advised pump dose and the scarred leaves stopped spreading within a few days.',
      rating: 5
    },
    {
      name: 'Mahesh',
      location: 'Junagadh, Gujarat',
      text: 'Spider mite patches in cotton pick up fast in dry weather. This EC mixed clean and the population crashed after one well-timed application.',
      rating: 5
    },
    {
      name: 'Vikram',
      location: 'Amreli, Gujarat',
      text: 'Leaf miner trails were all over our brinjal nursery leaves. Dealer suggested Harishree Dr. Supreme; coverage on the undersides made the difference.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Suit up', text: 'Wear gloves, goggles, long sleeves and a mask before opening the bottle.' },
    {
      name: 'Measure 20 ml',
      text: 'Draw twenty millilitres of Dr. Supreme with a graduated cylinder—no guesswork from bottle caps.'
    },
    {
      name: 'Pre-mix',
      text: 'Stir the dose into half a litre of clean water until you see a uniform milky emulsion with no oil slicks.'
    },
    {
      name: 'Charge the tank',
      text: 'Fill the knapsack partway, pour in the pre-mix, then bring to full pump volume while agitating.'
    },
    {
      name: 'Cover both leaf sides',
      text: 'Use medium droplets and enough water so the underside of leaves gets a share of the deposit.'
    },
    {
      name: 'Flush equipment',
      text: 'Triple-rinse nozzles, hoses and the measuring cup; dispose of rinsate responsibly.'
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

    this.title.setTitle('Abamectin 1.9% EC | Dr. Supreme | Harishree Crop Science');

    const desc =
      'Dr. Supreme Abamectin 1.9% EC — Harishree Crop Science EC insecticide & acaricide for mites, thrips & leaf miners. 20 ml/pump field guidance. Dealer support in Gujarat & India.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Abamectin 1.9% EC, Dr Supreme abamectin, abamectin EC insecticide, abamectin miticide, abamectin acaricide, avermectin 1.9 EC, thrips control, red spider mite spray, leaf miner insecticide, translaminar insecticide, knapsack spray dose, Harishree Crop Science, abamectin Gujarat, abamectin India, Dr Supreme crop science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Abamectin 1.9% EC | Dr. Supreme | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/abamectin-1-9-ec.png` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Abamectin 1.9% EC | Dr. Supreme | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/abamectin-1-9-ec.png` }
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
          name: 'Abamectin 1.9% EC (Dr. Supreme)',
          description:
            'Harishree Crop Science EC insecticide and acaricide for mites, thrips and leaf miners—sold as Dr. Supreme Abamectin 1.9% EC.'
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
      name: 'Abamectin 1.9% EC — Dr. Supreme by Harishree Crop Science',
      description:
        'Dr. Supreme Abamectin 1.9% EC: mites, thrips, leaf miners. Dose, crops, safety and dealer information from Harishree Crop Science.',
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
        url: `${this.baseUrl}/assets/products/abamectin-1-9-ec.png`,
        caption: 'Dr. Supreme Abamectin 1.9% EC bottle by Harishree Crop Science'
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
        { '@type': 'ListItem', position: 4, name: 'Abamectin 1.9% EC (Dr. Supreme)', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const specImgUrl = `${this.baseUrl}/${this.specFigureImage.replace(/^\//, '')}`;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Abamectin 1.9% EC',
      alternateName: [
        'Dr. Supreme',
        'Dr Supreme',
        'Dr. Supreme Abamectin 1.9% EC',
        'Abamectin EC',
        'Abamectin 1.9 EC insecticide'
      ],
      description:
        'Dr. Supreme (Abamectin 1.9% EC) from Harishree Crop Science is an emulsifiable concentrate insecticide and acaricide for mites, thrips, leaf miners and light caterpillar pressure. IRAC Group 6. Field use: about 20 ml per knapsack pump and 200 L water per acre where the label permits. Pack sizes from 100 ml to 1 L.',
      image: [`${this.baseUrl}/assets/products/abamectin-1-9-ec.png`, specImgUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: 'Dr. Supreme',
      category: 'Insecticide',
      sku: 'DS-ABAMECTIN-19EC',
      material: 'Emulsifiable concentrate',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        {
          '@type': 'PropertyValue',
          name: 'Indicative list price (incl. taxes)',
          value: `INR ${INDICATIVE_LIST_PRICE_INR}`
        },
        {
          '@type': 'PropertyValue',
          name: 'Official B2B listing URL',
          value: this.indiaMartUrl
        },
        { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Abamectin 1.9% EC' },
        { '@type': 'PropertyValue', name: 'Formulation', value: 'Emulsifiable concentrate (EC)' },
        { '@type': 'PropertyValue', name: 'IRAC group', value: 'Group 6 — chloride channel activators' },
        { '@type': 'PropertyValue', name: 'Product subclass', value: 'Insecticide / acaricide' },
        { '@type': 'PropertyValue', name: 'Dose per pump', value: '20 ml per knapsack pump' },
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
        ratingValue: '4.7',
        reviewCount: '38',
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
      name: 'Dr. Supreme Abamectin 1.9% EC — pack sizes',
      description:
        'Harishree Crop Science Dr. Supreme Abamectin 1.9% EC — available bottle sizes with indicative GST-inclusive offer prices.',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Dr. Supreme Abamectin 1.9% EC — ${p.volume}`,
          image: `${this.baseUrl}/assets/products/abamectin-1-9-ec.png`,
          sku: p.sku,
          description: `Dr. Supreme Abamectin 1.9% EC ${p.volume} from Harishree Crop Science. Insecticide/acaricide EC.`,
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
            { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Abamectin 1.9% EC' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Price including GST (INR)', value: String(p.price) }
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '38',
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
      name: 'How to mix and spray Dr. Supreme Abamectin 1.9% EC',
      description:
        'Field steps for preparing a knapsack tank of Dr. Supreme Abamectin 1.9% EC for foliar application.',
      image: `${this.baseUrl}/assets/products/abamectin-1-9-ec.png`,
      totalTime: 'PT25M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: '277'
      },
      supply: [
        { '@type': 'HowToSupply', name: 'Dr. Supreme (Abamectin 1.9% EC)' },
        { '@type': 'HowToSupply', name: 'Clean water' }
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer' },
        { '@type': 'HowToTool', name: 'Graduated measuring cylinder' },
        { '@type': 'HowToTool', name: 'Chemical-resistant gloves' },
        { '@type': 'HowToTool', name: 'Goggles and face mask' }
      ],
      step: this.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        image: `${this.baseUrl}/assets/products/abamectin-1-9-ec.png`
      }))
    };
    this.addJsonLd(data, HOWTO_SCHEMA_KEY);
  }
}
