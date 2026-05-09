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

const META_KEY = makeStateKey<boolean>('PARAQUAT_24_SL_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('PARAQUAT_HOWTO_SCHEMA');

@Component({
  selector: 'app-paraquat-dichloride-24-sl',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './paraquat-dichloride-24-sl.component.html',
  styleUrl: './paraquat-dichloride-24-sl.component.scss'
})
export class ParaquatDichloride24SlComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/paraquat-dichloride-24-sl';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  product = {
    name: 'Pendi Pro',
    subtitle: 'Paraquat Dichloride 24% SL',
    image: 'assets/products/herbicide/paraquat-dichloride-24-sl.jpg',
    description: 'High-performance, rapid-action, non-selective contact herbicide offering unparalleled broad-spectrum weed control.'
  };

  packSizes = [
    { volume: '500 ml', price: 148, featured: false, sku: 'PARAQUAT-500ML' },
    { volume: '1 liter', price: 271, featured: true, sku: 'PARAQUAT-1L' },
    { volume: '5 liter', price: 1322, featured: false, sku: 'PARAQUAT-5L' }
  ];

  keyBenefits = [
    {
      title: 'Rapid Burndown Action',
      description: 'Delivers visible wilting and desiccation within hours of application on actively growing weeds.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad-Spectrum Control',
      description: 'Exceptionally effective against a wide variety of annual grasses and difficult broadleaf weeds.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Environmentally Responsible',
      description: 'Rapidly deactivated upon contact with soil, leaving no biologically active residues, enabling immediate planting.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Excellent Rainfastness',
      description: 'Absorbed quickly by foliage, ensuring reliable performance even if it rains shortly after spraying.',
      icon: 'fas fa-cloud-rain'
    }
  ];

  targetWeeds = [
    { name: 'Amaranthus spp. (Pigweed)', description: 'Swiftly eliminates tough pigweed varieties competing for resources.' },
    { name: 'Echinochloa crus-galli (Barnyard grass)', description: 'Provides rapid knockdown of prolific barnyard grass populations.' },
    { name: 'Cyperus spp. (Sedges)', description: 'Suppresses above-ground foliage of resilient sedges quickly.' },
    { name: 'Trianthema portulacastrum (Horse purslane)', description: 'Highly effective against fast-spreading horse purslane.' },
    { name: 'Chenopodium album (Lambsquarters)', description: 'Ensures swift desiccation of lambsquarters in fields.' },
    { name: 'Parthenium hysterophorus (Carrot grass)', description: 'Breaks down tough Parthenium plants upon contact.' }
  ];

  applications = [
    {
      title: 'Pre-Plant Burndown & No-Till',
      description: 'Ideal for clearing fields prior to crop emergence in conservation tillage systems.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Inter-Row Weed Control',
      description: 'Excellent for directed spray and inter-row weed management in sugarcane, cotton, and orchards using protective shields.',
      icon: 'fas fa-columns'
    },
    {
      title: 'Non-Crop Areas',
      description: 'Rapid clearance of vegetation around industrial sites, railways, and borders.',
      icon: 'fas fa-road'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand', value: 'Pendi Pro' },
      { label: 'Company', value: 'Harishree Crop Science' },
      { label: 'Active ingredient', value: 'Paraquat Dichloride 24% SL' },
      { label: 'Formulation', value: 'Soluble Liquid (SL)' },
      { label: 'Mode of action', value: 'Photosystem I electron diversion (Contact)' },
      { label: 'Shelf life', value: 'Refer to packaging; store in original sealed container' }
    ],
    packs: [
      { label: 'Pack sizes', value: '500 ml, 1 liter, 5 liter' },
      { label: 'Recommended dose', value: '20 ml per 16-20 litre pump load' },
      { label: 'Application timing', value: 'Post-emergence on actively growing weeds' }
    ]
  };

  modeOfAction = [
    {
      title: 'Foliar Contact',
      description: 'The active ingredient, Paraquat Dichloride 24% SL, makes contact with the green plant tissue.'
    },
    {
      title: 'Photosynthesis Disruption',
      description: 'It intercepts electrons from Photosystem I within the chloroplasts, disrupting the photosynthesis process.'
    },
    {
      title: 'Reactive Oxygen Species Generation',
      description: 'Causes the production of highly destructive free radicals (superoxides) that destroy cell membranes.'
    },
    {
      title: 'Cellular Desiccation',
      description: 'Membrane destruction leads to rapid fluid loss, resulting in swift wilting, bleaching, and necrosis of the target weed.'
    }
  ];

  safetyItems = [
    { title: 'Personal Protection', text: 'Strictly wear protective clothing, chemical-resistant gloves, face shields, and respirators during handling and spraying.' },
    { title: 'Directed Application', text: 'Use protective spray shields when applying near sensitive, desirable crops to avoid drift damage.' },
    { title: 'Water Volume', text: 'Use adequate water volume with appropriate nozzles for complete weed coverage without excessive run-off.' },
    { title: 'Mixing Procedure', text: 'Add Pendi Pro (Paraquat Dichloride 24% SL) to clear water. Avoid using muddy water as soil particles instantly deactivate it.' },
    { title: 'Secure Storage', text: 'Store strictly in original containers under lock and key, inaccessible to children and animals.' },
    { title: 'Equipment Cleaning', text: 'Thoroughly triple-rinse all spraying equipment immediately after application.' }
  ];

  performanceHighlights = [
    { label: 'Speed of Action', value: 'Weeds show visible decline and browning within hours of application.' },
    { label: 'No Soil Residue', value: 'Instantly deactivates upon soil contact, perfectly supporting sequential planting.' },
    { label: 'Versatility', value: 'Highly dependable across diverse agricultural scenarios and weather patterns.' },
    { label: 'Economy', value: 'Offers highly cost-effective and immediate weed clearance.' }
  ];

  faqs = [
    {
      question: 'What is Pendi Pro (Paraquat Dichloride 24% SL) used for?',
      answer: '<strong>Pendi Pro</strong> is a powerful, non-selective contact herbicide featuring <strong>Paraquat Dichloride 24% SL</strong>. It is extensively used for rapid burndown of broadleaf and grassy weeds in pre-plant settings, inter-row applications (e.g., in orchards, sugarcane), and non-crop area vegetation management.',
      answerPlain: 'Pendi Pro is a powerful, non-selective contact herbicide featuring Paraquat Dichloride 24% SL. It is extensively used for rapid burndown of broadleaf and grassy weeds in pre-plant settings, inter-row applications (e.g., in orchards, sugarcane), and non-crop area vegetation management.'
    },
    {
      question: 'What is the recommended dose for Paraquat Dichloride 24% SL?',
      answer: 'The recommended dose for <strong>Paraquat Dichloride 24% SL</strong> is <strong>20 ml per 16-20 litre pump</strong>. For optimal efficacy, ensure thorough coverage of weed foliage and apply during active growth.',
      answerPlain: 'The recommended dose for Paraquat Dichloride 24% SL is 20 ml per 16-20 litre pump. For optimal efficacy, ensure thorough coverage of weed foliage and apply during active growth.'
    },
    {
      question: 'What pack sizes are available for Pendi Pro?',
      answer: '<strong>Pendi Pro (Paraquat Dichloride 24% SL)</strong> is available in convenient <strong>500 ml</strong>, <strong>1 liter</strong>, and <strong>5 liter</strong> packs. The main item index reference price is <strong>₹250</strong>.',
      answerPlain: 'Pendi Pro (Paraquat Dichloride 24% SL) is available in convenient 500 ml, 1 liter, and 5 liter packs. The main item index reference price is ₹250.'
    },
    {
      question: 'How fast does Paraquat Dichloride 24% SL work?',
      answer: '<strong>Paraquat Dichloride 24% SL</strong> is renowned for its extreme speed. It disrupts plant cell membranes efficiently, and visual symptoms like wilting and bleaching can often be observed within a few hours, especially under bright sunlight.',
      answerPlain: 'Paraquat Dichloride 24% SL is renowned for its extreme speed. It disrupts plant cell membranes efficiently, and visual symptoms like wilting and bleaching can often be observed within a few hours, especially under bright sunlight.'
    },
    {
      question: 'Is there any soil residual activity with Paraquat Dichloride 24% SL?',
      answer: 'No. Upon contact with the soil, <strong>Paraquat Dichloride 24% SL</strong> is rapidly and strongly bound to soil particles, rendering it biologically inactive. This means there is zero residual herbicidal activity, allowing for crop planting immediately after application.',
      answerPlain: 'No. Upon contact with the soil, Paraquat Dichloride 24% SL is rapidly and strongly bound to soil particles, rendering it biologically inactive. This means there is zero residual herbicidal activity, allowing for crop planting immediately after application.'
    },
    {
      question: 'Where can I buy Paraquat Dichloride 24% SL (Pendi Pro)?',
      answer: 'You can procure genuine <strong>Pendi Pro (Paraquat Dichloride 24% SL)</strong> directly from <strong>Harishree Crop Science</strong> via our website, or by visiting our authorized dealer network nationwide.',
      answerPlain: 'You can procure genuine Pendi Pro (Paraquat Dichloride 24% SL) directly from Harishree Crop Science via our website, or by visiting our authorized dealer network nationwide.'
    }
  ];

  testimonials = [
    { text: 'Paraquat Dichloride 24% SL from Harishree is unmatched for pre-plant burndown. The field was totally clean and ready for sowing within 48 hours.' },
    { text: 'We use Pendi Pro for weeding between our sugarcane rows. With a shield sprayer at 20 ml per pump, it quickly burns down the weeds without hurting the crop.' },
    { text: 'The fast action of Paraquat 24% SL is incredible. Even when it rains later in the afternoon, the morning spray holds perfectly and clears the weeds.' }
  ];

  howToSteps = [
    { name: 'Put on PPE', text: 'Wear protective coveralls, chemical-resistant gloves, goggles/face shield, and appropriate footwear before handling.' },
    { name: 'Prepare Clean Water', text: 'Fill the knapsack spray tank halfway with strictly clean water (avoid muddy water as it neutralizes the chemical).' },
    { name: 'Measure Chemical', text: 'Measure exactly 20 ml of Paraquat Dichloride 24% SL (Pendi Pro) per 16-20 L pump.' },
    { name: 'Mix Thoroughly', text: 'Add the measured chemical to the tank, fill the remaining volume with clean water, and agitate for a uniform mixture.' },
    { name: 'Directed Spraying', text: 'Spray the mixture directly onto actively growing weeds, ensuring complete foliar coverage. Use shields if spraying near crops.' },
    { name: 'Clean Equipment', text: 'Thoroughly triple-rinse all mixing and spraying equipment after use and safely dispose of wash water.' }
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

    this.title.setTitle('Paraquat Dichloride 24% SL | Pendi Pro Herbicide | Harishree Crop Science');

    const desc =
      'Buy original Paraquat Dichloride 24% SL (Pendi Pro) non-selective contact herbicide for rapid weed burndown. Dose 20 ml/pump, packs 500ml, 1L, 5L. High quality from Harishree Crop Science.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Paraquat Dichloride 24% SL, Pendi Pro, Paraquat herbicide, non-selective herbicide, contact burndown herbicide, weed control, Harishree Crop Science, rapid action herbicide'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Paraquat Dichloride 24% SL | Pendi Pro | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/herbicide/paraquat-dichloride-24-sl.jpg` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Paraquat Dichloride 24% SL | Pendi Pro | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/herbicide/paraquat-dichloride-24-sl.jpg` }
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
          name: 'Paraquat Dichloride 24% SL (Pendi Pro)',
          description: 'Pendi Pro, featuring Paraquat Dichloride 24% SL, is a premier fast-acting, non-selective contact herbicide. It provides superior broad-spectrum weed knockdown perfect for pre-plant desiccation and inter-row spraying. Exceptional quality assured by Harishree Crop Science.',
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/harishree-crop-science',
        'https://www.instagram.com/harishree_crop_science',
        'https://www.facebook.com/harishreecropscience'
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
      name: 'Paraquat Dichloride 24% SL (Pendi Pro) | Herbicide',
      description:
        'Buy Paraquat Dichloride 24% SL (Pendi Pro) — fast-acting non-selective burndown herbicide for comprehensive weed control. Best pricing and packs from Harishree Crop Science.',
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
        url: `${this.baseUrl}/assets/products/herbicide/paraquat-dichloride-24-sl.jpg`,
        caption: 'Paraquat Dichloride 24% SL (Pendi Pro) bottle'
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
        { '@type': 'ListItem', position: 3, name: 'Paraquat Dichloride 24% SL', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Paraquat Dichloride 24% SL',
      alternateName: ['Paraquat Dichloride 24% SL', 'Pendi Pro herbicide', 'Pendi Pro', 'Paraquat burndown herbicide'],
      description:
        'Pendi Pro, primarily formulated with Paraquat Dichloride 24% SL, is an outstandingly fast-acting, non-selective contact herbicide. It yields immediate desiccation and wilting of numerous annual grasses and broadleaf weeds. Rapidly inactivated on soil contact, providing safe sequential planting. Supplied by Harishree Crop Science.',
      image: [`${this.baseUrl}/assets/products/herbicide/paraquat-dichloride-24-sl.jpg`],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },      
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
      category: 'Herbicide',
      sku: 'PARAQUAT-24SL',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '83'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Organization', name: 'Harishree Technical Team' },
          reviewBody: 'Superior burndown action within hours. Absolutely essential for pre-plant fields with tough competing weed populations at 20 ml per pump dosage.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5'
          }
        }
      ],
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
      name: 'Paraquat Dichloride 24% SL (Pendi Pro) pack sizes',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Paraquat Dichloride 24% SL (Pendi Pro) ${p.volume}`,
          image: `${this.baseUrl}/assets/products/herbicide/paraquat-dichloride-24-sl.jpg`,
          sku: p.sku,
          description: `Paraquat Dichloride 24% SL (Pendi Pro) ${p.volume} pack from Harishree Crop Science - ${p.price} INR`,
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
          category: 'Herbicide',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '83'
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
          },
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
      name: 'How to mix and apply Paraquat Dichloride 24% SL (Pendi Pro)',
      description: 'Crucial safe mixing and application steps for Pendi Pro (Paraquat Dichloride 24% SL) contact herbicide.',
      image: `${this.baseUrl}/assets/products/herbicide/paraquat-dichloride-24-sl.jpg`,
      totalTime: 'PT15M',
      supply: [{ '@type': 'HowToSupply', name: 'Paraquat Dichloride 24% SL (Pendi Pro)' }, { '@type': 'HowToSupply', name: 'Clean water' }],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer' },
        { '@type': 'HowToTool', name: 'Protective shield' },
        { '@type': 'HowToTool', name: 'PPE (respirator, gloves, eyewear)' }
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
