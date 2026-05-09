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

const META_KEY = makeStateKey<boolean>('TOLPY_15_EC_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('TOLPY_15_EC_HOWTO_SCHEMA');

/** Indicative list price for schema only; pack-wise offers use AggregateOffer min/max from packSizes. */
const INDICATIVE_LIST_PRICE_INR = 250;

@Component({
  selector: 'app-tolfenpyrad-15-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tolfenpyrad-15-ec.component.html',
  styleUrl: './tolfenpyrad-15-ec.component.scss'
})
export class Tolfenpyrad15EcComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/tolfenpyrad-15-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly indiaMartUrl =
    'https://www.indiamart.com/proddetail/h-fun-tolfenpyrad-15-ec-insecticide-2855027666830.html';

  /** Public URL for hero / OG (spaces encoded). */
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/${encodeURIComponent('tolfenpyrad-15-ec.png')}`;

  product = {
    name: 'Tolfenpyrad 15% EC (H Fun)',
    subtitle: 'Tolfenpyrad 15% EC',
    image: 'assets/products/tolfenpyrad-15-ec.png',
    description:
      'Contact-stomach EC insecticide for aphids, whiteflies, thrips, mites and young caterpillars when you need a clean canopy without guesswork.'
  };

  specFigureImage = 'assets/products/h-fun-indiamart-spec-reference.png';
  packSizes = [
    { volume: '100 ml', price: 124, featured: false, sku: 'HFUN-TOL-100ML' },
    { volume: '250 ml', price: 324, featured: true, sku: 'HFUN-TOL-250ML' },
    { volume: '500 ml', price: 631, featured: false, sku: 'HFUN-TOL-500ML' },
    { volume: '1 Ltr', price: 1239, featured: false, sku: 'HFUN-TOL-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'EC film that actually wets the leaf',
      description:
        'The concentrate emulsifies into water without leaving oily streaks, so sucking pests pick up an even deposit instead of hopping over dry patches.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Complex I — energy tap turned off',
      description:
        'Tolfenpyrad blocks mitochondrial electron transport at Complex I. Susceptible insects lose steam fast once they contact or ingest the spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Built for mixed pest pressure',
      description:
        'Useful when aphids, whiteflies, thrips and mites show up together, or when young caterpillars are still small enough to manage on foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Fits vegetable and row-crop rotations',
      description:
        'Paddy, cotton, soybean, chilli and groundnut sit in many programmes; brinjal, tomato, cabbage, okra and tea where your label allows.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Rain window you can work with',
      description:
        'Plan for a couple of hours on the leaf before a downpour; early morning or calm evening sprays usually beat midday drift.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Rotation discipline',
      description:
        'IRAC Group 21A chemistry earns its keep in a programme—pair with unrelated modes of action and scout so you are not spraying from habit.',
      icon: 'fas fa-shield-alt'
    }
  ];

  targetPests = [
    {
      name: 'Aphids',
      description:
        'Colonies on new flush and undersides strip vigour quickly; a timely foliar pass helps when scouting says the patch is still manageable.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Whiteflies',
      description:
        'Sticky honeydew and sooty mould ruin market leaves. Contact plus stomach pickup catches adults and nymphs that move through the deposit.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Thrips',
      description:
        'Silvering and scarring on chilli or tomato hurts prices. Spray at first movement—not after every flower has been scarred.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Mites',
      description:
        'Fine stippling and early webbing are warning signs. Good coverage on both leaf sides matters more than turning the pump to maximum pressure.',
      icon: 'fas fa-bug'
    },
    {
      name: 'Young caterpillars (early instars)',
      description:
        'Small larvae still grazing the leaf surface can be checked if you catch them early; heavy borer loads need a different tool from the kit.',
      icon: 'fas fa-bug'
    }
  ];

  applications = [
    {
      title: 'Paddy & soybean',
      description:
        'Sucking pest flushes after weather shifts can move fast. Walk the field, confirm threshold, then spray with enough water to reach the lower canopy.',
      icon: 'fas fa-water'
    },
    {
      title: 'Cotton & groundnut',
      description:
        'Whitefly and mite pressure often spike in dry pockets. Keep intervals honest and rotate chemistry so the same block is not hammered week on week.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Chilli & tomato',
      description:
        'Thrips and mites are daily headaches here. Hit early infestation before scarring spreads wall to wall—always match PHI to your market.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Brinjal, cabbage & okra',
      description:
        'Leaf quality drives the carton price. Medium droplets and slower passes beat a mist that never reaches the underside.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Tea',
      description:
        'Bush tea needs leaf that plucks clean. Time sprays so residue rules and buyer specs stay on the right side of the ledger.',
      icon: 'fas fa-mug-hot'
    },
    {
      title: 'Other registered crops',
      description:
        'If your agronomist points to Tolfenpyrad 15% EC on the label for your district, run jar tests before tank mixes and log every application.',
      icon: 'fas fa-tractor'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Trade name', value: 'H Fun' },
      { label: 'Technical name', value: 'Tolfenpyrad 15% EC' },
      { label: 'Product type', value: 'Insecticide' },
      { label: 'Formulation', value: 'Emulsifiable concentrate (EC)' },
      { label: 'Chemical group', value: 'Pyrazole derivative' },
      { label: 'Mode of action', value: 'IRAC Group 21A — mitochondrial electron transport inhibitor (Complex I)' },
      { label: 'Action type', value: 'Contact and stomach' }
    ],
    packs: [
      { label: 'Pack sizes', value: '100 ml, 250 ml, 500 ml, 1 Ltr (bottle)' },
      { label: 'Recommended dose', value: '30 ml per knapsack pump (confirm on label and with local advisory)' },
      { label: 'Water volume', value: 'About 200 litres per acre (adjust for canopy)' },
      { label: 'Application', value: 'Foliar spray — knapsack or power sprayer' },
      { label: 'Best timing', value: 'Early infestation or first clear pest appearance' },
      { label: 'Rainfastness', value: 'Roughly 2-3 hours after application' },
      { label: 'Re-entry', value: '24 hours with proper PPE' },
      { label: 'PHI', value: 'About 7-10 days depending on crop (label-specific)' }
    ]
  };

  officialProductDetails = [
    { label: 'Product name', value: 'H Fun' },
    { label: 'Technical name', value: 'Tolfenpyrad 15% EC' },
    { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Physical form', value: 'Liquid' },
    { label: 'Brand', value: 'Harishree Crop Science' },
    { label: 'Insecticide type', value: 'Contact insecticide' },
    { label: 'Chemical group', value: 'Pyrazole derivative' },
    {
      label: 'Mode of action',
      value: 'Inhibits mitochondrial electron transport at Complex I — disrupts energy production, leading to pest death'
    },
    { label: 'Action type', value: 'Contact and stomach' },
    {
      label: 'Target pests',
      value: 'Aphids, whiteflies, thrips, mites, caterpillars (early instars)'
    },
    {
      label: 'Target crops',
      value: 'Cotton, chilli, brinjal, tomato, cabbage, okra, groundnut, tea; also paddy, soybean and others where registered'
    },
    { label: 'Recommended dose', value: '30 ml per pump' },
    { label: 'Water volume', value: '200 litres per acre' },
    { label: 'Application method', value: 'Foliar spray' },
    { label: 'Application stage', value: 'Early infestation or pest appearance' },
    { label: 'Rainfastness', value: '2-3 hours after application' },
    { label: 'Re-entry interval', value: '24 hours with PPE' },
    { label: 'PHI (pre-harvest interval)', value: '7-10 days (varies by crop)' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides; avoid strong alkaline pH' },
    { label: 'Grade standard', value: 'Bio Tech Grade' },
    { label: 'Packaging', value: 'Bottle — 100 ml to 1 L' },
    { label: 'Country of origin', value: 'Made in India' },
    { label: 'Availability', value: 'In stock (subject to region and season)' }
  ];

  modeOfAction = [
    {
      title: 'Deposit on the leaf surface',
      description:
        'Aphids, whiteflies, thrips and mites walk or feed through the EC film. Stomach pickup matters for chewing stages that actually swallow treated tissue.'
    },
    {
      title: 'Complex I is the choke point',
      description:
        'Tolfenpyrad jams mitochondrial electron transport at Complex I. ATP production stumbles and susceptible pests lose the energy to feed and move normally.'
    },
    {
      title: 'Knockdown you can see in the scouting book',
      description:
        'Good coverage and sensible water volume beat doubling the dose. Come back in a few days, count pests again, then decide if a follow-up is warranted.'
    },
    {
      title: 'Keep programmes honest',
      description:
        'Overuse of any single MoA invites resistance. Log sprays, rotate with unrelated chemistry, and preserve beneficials where the label allows.'
    }
  ];

  safetyItems = [
    {
      title: 'Personal protective equipment',
      text: 'Chemical gloves, goggles, long sleeves and a fitted mask while measuring and spraying. Change out of work clothes before sitting in the cab.'
    },
    {
      title: 'Mix Tolfenpyrad 15% EC (H Fun) like any serious EC',
      text: 'Pre-mix the measured dose in a small volume of clean water, stir to a smooth emulsion, then pour into the tank while agitation is running.'
    },
    {
      title: 'Spray in steady air',
      text: 'Early morning or late afternoon cuts drift and leaf burn. If heavy rain is forecast inside a couple of hours, wait for a better window.'
    },
    {
      title: 'Storage',
      text: 'Original bottle, cap tight, upright in a locked store away from feed, seed and food. Keep the POISON label visible to everyone on the farm.'
    },
    {
      title: 'Rinse and dispose responsibly',
      text: 'Triple-rinse the sprayer; use rinsate according to local guidance—never dump into drains or farm ponds.'
    },
    {
      title: 'Bees, buffers and drift',
      text: 'Avoid open blooms where the label restricts spraying. Leave buffers to non-target crops and water bodies; read the hazard panel before each season.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Canopy quiets down',
      value: 'When coverage and timing line up, stippling and honeydew pressure usually ease within the scouting cycle.'
    },
    {
      label: 'Familiar EC handling',
      value: 'Teams already running EC programmes get the same mixing rhythm—just respect the 30 ml pump guidance.'
    },
    {
      label: 'Rainfast in a few hours',
      value: 'Give the deposit two to three hours on the leaf before expecting a cloudburst.'
    },
    {
      label: 'Sucking-pest sweet spot',
      value: 'Strong fit where aphids, whiteflies, thrips or mites are the main headache on label crops.'
    }
  ];

  faqs = [
    {
      question: 'What is Tolfenpyrad 15% EC used for?',
      answer:
        '<strong>Tolfenpyrad 15% EC (H Fun)</strong> is a Harishree Crop Science insecticide aimed at <strong>aphids, whiteflies, thrips, mites and early-instar caterpillars</strong> on crops such as cotton, chilli, tomato, brinjal, okra, groundnut, tea, paddy and soybean where the registered label allows.',
      answerPlain:
        'H Fun (Tolfenpyrad 15% EC) is a Harishree Crop Science insecticide aimed at aphids, whiteflies, thrips, mites and early-instar caterpillars on crops such as cotton, chilli, tomato, brinjal, okra, groundnut, tea, paddy and soybean where the registered label allows.'
    },
    {
      question: 'What dose of Tolfenpyrad 15% EC (H Fun) should I use per pump?',
      answer:
        'We publish <strong>30 ml per knapsack pump</strong> with roughly <strong>200 litres of spray water per acre</strong> as field guidance. Always confirm against your printed label and district advisory before spraying.',
      answerPlain:
        'We publish 30 ml per knapsack pump with roughly 200 litres of spray water per acre as field guidance. Always confirm against your printed label and district advisory before spraying.'
    },
    {
      question: 'How rainfast is Tolfenpyrad 15% EC?',
      answer:
        'Under normal conditions, allow about <strong>2-3 hours</strong> on the foliage before expecting heavy rain. If a storm is imminent, postpone rather than gamble.',
      answerPlain:
        'Under normal conditions, allow about 2-3 hours on the foliage before expecting heavy rain. If a storm is imminent, postpone rather than gamble.'
    },
    {
      question: 'What PHI and re-entry should I follow for Tolfenpyrad 15% EC (H Fun)?',
      answer:
        'Plan for roughly <strong>7-10 days pre-harvest</strong> depending on crop, and <strong>24 hours re-entry with full PPE</strong> unless your label states differently.',
      answerPlain:
        'Plan for roughly 7-10 days pre-harvest depending on crop, and 24 hours re-entry with full PPE unless your label states differently.'
    },
    {
      question: 'Can I mix Tolfenpyrad 15% EC (H Fun) with fungicides or other insecticides?',
      answer:
        'It is broadly compatible with many partners, but <strong>steer clear of strongly alkaline tanks</strong>. Run a jar test with the exact products and water source you will use in the field.',
      answerPlain:
        'It is broadly compatible with many partners, but steer clear of strongly alkaline tanks. Run a jar test with the exact products and water source you will use in the field.'
    },
    {
      question: 'Where can I buy Tolfenpyrad 15% EC (H Fun) or verify specs?',
      answer:
        'Speak to any <strong>Harishree Crop Science</strong> authorised dealer. You can also cross-check parameters on our official <strong>IndiaMART</strong> listing linked from this page.',
      answerPlain:
        'Speak to any Harishree Crop Science authorised dealer. You can also cross-check parameters on our official IndiaMART listing linked from this page.'
    },
    {
      question: 'Is Tolfenpyrad 15% EC (H Fun) the same as other pyrazole insecticides?',
      answer:
        'Trade names differ. <strong>H Fun</strong> is our pack of <strong>Tolfenpyrad 15% EC</strong>; always match the active ingredient, dose and crop register to your requirement.',
      answerPlain:
        'Trade names differ. H Fun is our pack of Tolfenpyrad 15% EC; always match the active ingredient, dose and crop register to your requirement.'
    }
  ];

  testimonials = [
    {
      name: 'Jayesh',
      location: 'Rajkot district, Gujarat',
      text: 'Whitefly was climbing on brinjal after a dry week. We ran Tolfenpyrad 15% EC (H Fun) at the 30 ml pump rate with full water—sticky leaves calmed down before the next picking.',
      rating: 5
    },
    {
      name: 'Sanjay',
      location: 'Gondal, Gujarat',
      text: 'Thrips on chilli were scarring flowers. Dealer pushed Harishree Tolfenpyrad EC; mixed clean in the tank and saw less fresh scarring within days.',
      rating: 5
    },
    {
      name: 'Ramesh',
      location: 'Jamnagar, Gujarat',
      text: 'Cotton mites in a corner of the field were turning leaves bronze. One well-timed spray with good underside coverage saved us from stretching the season blind.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Suit up', text: 'Wear gloves, goggles, long sleeves and a mask before opening the bottle.' },
    {
      name: 'Measure 30 ml',
      text: 'Draw thirty millilitres of Tolfenpyrad 15% EC (H Fun) with a graduated cylinder—keep cap threads clean.'
    },
    {
      name: 'Pre-mix',
      text: 'Stir the dose into half a litre of clean water until the emulsion looks even with no oil floating on top.'
    },
    {
      name: 'Charge the tank',
      text: 'Add the pre-mix to a partly filled knapsack, agitate, then bring the volume toward roughly 200 litres per acre equivalent while keeping agitation on.'
    },
    {
      name: 'Cover both leaf sides',
      text: 'Use medium droplets and enough pressure to wet the underside—thrips and mites hide where mist never reaches.'
    },
    {
      name: 'Flush equipment',
      text: 'Triple-rinse hoses, nozzles and measuring tools; dispose of rinsate per local guidance.'
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

    this.title.setTitle('Tolfenpyrad 15% EC (H Fun) | Harishree Crop Science');

    const desc =
      'Tolfenpyrad 15% EC (H Fun) — Harishree Crop Science contact-stomach insecticide for aphids, whiteflies, thrips & mites. 30 ml/pump field guide. Dealers across Gujarat & India.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Tolfenpyrad 15% EC (H Fun), Tolfenpyrad 15% EC, Tolfenpyrad EC, pyrazole insecticide, Complex I insecticide, IRAC 21A, aphid spray India, whitefly control, thrips chilli, mite spray cotton, knapsack dose 30ml, Harishree Crop Science, Tolfenpyrad Gujarat, tolfenpyrad insecticide India, H Fun crop science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Tolfenpyrad 15% EC | H Fun | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: this.bottleImageUrl },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Tolfenpyrad 15% EC | H Fun | Harishree Crop Science' },
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
          name: 'Tolfenpyrad 15% EC (H Fun)',
          description:
            'Harishree Crop Science Tolfenpyrad 15% EC insecticide—sold under the H Fun trade name for sucking pests and early caterpillars on registered crops.'
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
      name: 'Tolfenpyrad 15% EC — H Fun by Harishree Crop Science',
      description:
        'H Fun Tolfenpyrad 15% EC: aphids, whiteflies, thrips, mites, early caterpillars. Dose, crops, safety, IndiaMART reference and dealer support from Harishree Crop Science.',
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
        caption: 'H Fun Tolfenpyrad 15% EC insecticide bottle by Harishree Crop Science'
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
        { '@type': 'ListItem', position: 4, name: 'Tolfenpyrad 15% EC (H Fun)', item: this.pageUrl }
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
      name: 'Tolfenpyrad 15% EC',
      alternateName: [
        'H Fun',
        'H-FUN',
        'H Fun Tolfenpyrad 15% EC',
        'Tolfenpyrad EC',
        'Tolfenpyrad 15 EC insecticide',
        'टॉल्फेंपायराड 15% ईसी कीटनाशक'
      ],
      description:
        'H Fun (Tolfenpyrad 15% EC) from Harishree Crop Science is an emulsifiable concentrate insecticide with contact and stomach action for aphids, whiteflies, thrips, mites and early-instar caterpillars on registered crops. IRAC Group 21A (Complex I). Field guidance: about 30 ml per knapsack pump and 200 L water per acre. Pack sizes from 100 ml to 1 L.',
      image: [this.bottleImageUrl, specImgUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: 'H Fun',
      category: 'Insecticide',
      sku: 'HFUN-TOLFENPYRAD-15EC',
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
        { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Tolfenpyrad 15% EC' },
        { '@type': 'PropertyValue', name: 'Formulation', value: 'Emulsifiable concentrate (EC)' },
        { '@type': 'PropertyValue', name: 'IRAC group', value: 'Group 21A — mitochondrial Complex I inhibitors' },
        { '@type': 'PropertyValue', name: 'Product subclass', value: 'Insecticide' },
        { '@type': 'PropertyValue', name: 'Dose per pump', value: '30 ml per knapsack pump' },
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
        reviewCount: '34',
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
      name: 'Tolfenpyrad 15% EC — pack sizes',
      description:
        'Harishree Crop Science Tolfenpyrad 15% EC — bottle sizes with indicative offer prices for schema.',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Tolfenpyrad 15% EC — ${p.volume}`,
          image: this.bottleImageUrl,
          sku: p.sku,
          description: `Tolfenpyrad 15% EC ${p.volume} (H Fun) from Harishree Crop Science. EC insecticide.`,
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
            { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Tolfenpyrad 15% EC' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '34',
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
      name: 'How to mix and spray Tolfenpyrad 15% EC (H Fun)',
      description:
        'Field steps for preparing a knapsack tank of Tolfenpyrad 15% EC (H Fun) for foliar application.',
      image: this.bottleImageUrl,
      totalTime: 'PT25M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: '324'
      },
      supply: [
        { '@type': 'HowToSupply', name: 'Tolfenpyrad 15% EC (H Fun)' },
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
        image: this.bottleImageUrl
      }))
    };
    this.addJsonLd(data, HOWTO_SCHEMA_KEY);
  }
}
