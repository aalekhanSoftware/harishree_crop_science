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

const META_KEY = makeStateKey<boolean>('PROF404_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('PROF404_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('PROF404_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('PROF404_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('PROF404_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('PROF404_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('PROF404_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('PROF404_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('PROF404_HOWTO_SCHEMA');

const INDICATIVE_LIST_PRICE_INR = 555;

@Component({
  selector: 'app-profenofos-40-cypermethrin-4-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profenofos-40-cypermethrin-4-ec.component.html',
  styleUrl: './profenofos-40-cypermethrin-4-ec.component.scss'
})
export class Profenofos40Cypermethrin4EcComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/profenofos-40-cypermethrin-4-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productTitle = 'Profenofos 40% + Cypermethrin 4% EC';
  readonly productName = 'Mpire 404';
  readonly indiaMartUrl = 'https://www.indiamart.com/proddetail/mpire-404-profenofos-40-cypermethrin-4-e-c-2855406578555.html';
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/MPIRE-404.png`;

  packSizes = [
    { label: '500 ml', volume: '500 ml', price: 289, sku: 'MPIRE404-500ML' },
    { label: '1 Ltr', volume: '1 Ltr', price: 555, sku: 'MPIRE404-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'Dual-action control for faster field response',
      description:
        'Profenofos 40% + Cypermethrin 4% EC combines Profenofos and Cypermethrin to manage both chewing and sucking pest pressure in one practical spray program.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Reliable contact and stomach action',
      description:
        'The formulation supports quick knockdown and dependable control when applied early at ETL and with full canopy coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Straightforward dose discipline',
      description:
        'A clear recommendation of 30 ml per pump helps teams maintain consistency and reduce application errors in the field.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Works well in multi-crop pest schedules',
      description:
        'Useful in cotton, paddy, soybean and vegetable programs where mixed infestations are common during active crop stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Strong fit for rotation-based IPM',
      description:
        'Best performance comes with scouting, threshold-based sprays and chemistry rotation for resistance management.',
      icon: 'fas fa-rotate-right'
    },
    {
      title: 'Field-ready EC formulation',
      description:
        'The EC format supports smooth tank preparation and uniform spray behavior in both knapsack and power sprayer operations.',
      icon: 'fas fa-prescription-bottle'
    }
  ];

  targetPests = [
    { name: 'Aphids', description: 'Supports better sap-feeding pest control in early and mid crop stages.', icon: 'fas fa-bug' },
    { name: 'Helicoverpa', description: 'Helps manage chewing pressure before visible economic damage expands.', icon: 'fas fa-bug' },
    { name: 'Whitefly', description: 'Fits practical schedules for whitefly suppression in sensitive growth windows.', icon: 'fas fa-bug' },
    { name: 'Thrips', description: 'Useful where leaf-surface feeding and curling pressure starts building.', icon: 'fas fa-bug' },
    { name: 'Leaf folders', description: 'Supports cleaner foliage where folded-leaf feeding impacts vigor.', icon: 'fas fa-bug' },
    { name: 'Stem borers', description: 'Can be positioned in threshold-based plans for early borer pressure.', icon: 'fas fa-bug' }
  ];

  applications = [
    { title: 'Cotton', description: 'Positioned in ETL-based programs where sucking and chewing pests overlap.', icon: 'fas fa-seedling' },
    { title: 'Paddy', description: 'Used during active infestation windows to protect tillers and foliage.', icon: 'fas fa-water' },
    { title: 'Soybean', description: 'Supports broad-spectrum insect management in intensive crop blocks.', icon: 'fas fa-leaf' },
    { title: 'Groundnut', description: 'Included in practical insect schedules for healthy crop progression.', icon: 'fas fa-spa' },
    { title: 'Vegetables', description: 'Useful for chilli, brinjal and tomato advisory-led pest management.', icon: 'fas fa-carrot' },
    { title: 'Application stage', description: 'Apply at early appearance of pests or as per ETL and local advisory.', icon: 'fas fa-clock' }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; fieldGuidance: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: this.productName },
      { label: 'Technical composition', value: this.productTitle },
      { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Form', value: 'Liquid' },
      { label: 'Packaging type', value: 'Bottle' },
      { label: 'Grade standard', value: 'Bio Tech Grade' },
      { label: 'Country of origin', value: 'Made in India' }
    ],
    fieldGuidance: [
      { label: 'Recommended dose', value: '30 ml / pump' },
      { label: 'Water volume', value: '200 liters/acre' },
      { label: 'Application method', value: 'Foliar spray using knapsack/power sprayer' },
      { label: 'Application stage', value: 'At early appearance of pests or as per ETL' },
      { label: 'Rainfastness', value: '2-3 hours after application' },
      { label: 'Re-entry interval', value: '24 hours (with protective clothing)' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: this.productName },
    { label: 'Technical Composition', value: this.productTitle },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Insecticide Type', value: 'Broad-spectrum contact and stomach insecticide' },
    { label: 'Chemical Groups', value: 'Profenofos: Organophosphate; Cypermethrin: Synthetic Pyrethroid' },
    { label: 'Mode of Action', value: 'Profenofos inhibits acetylcholinesterase; Cypermethrin blocks sodium channels' },
    { label: 'Action Type', value: 'Contact, stomach and light fumigant action' },
    { label: 'Target Pests', value: 'Bollworms, aphids, thrips, whiteflies, leaf folders, stem borers' },
    { label: 'Target Crops', value: 'Cotton, paddy, groundnut, soybean, chilli, brinjal, tomato' },
    { label: 'Recommended Dose', value: '30 ml / pump' },
    { label: 'Water Volume', value: '200 liters/acre' },
    { label: 'Application Method', value: 'Foliar spray with knapsack/power sprayer' },
    { label: 'Application Stage', value: 'At early appearance of pests or as per ETL' },
    { label: 'Rainfastness', value: '2-3 hours after application' },
    { label: 'Re-entry Interval', value: '24 hours (with protective clothing)' },
    { label: 'Compatibility', value: 'Compatible with most agrochemicals (avoid strong alkaline solutions)' },
    { label: 'Precautions', value: 'Use PPE, avoid drift to sensitive crops, do not exceed recommended dose' },
    { label: 'Availability', value: 'In stock' },
    { label: 'Official B2B source', value: this.indiaMartUrl }
  ];

  modeOfAction = [
    {
      title: 'Profenofos pathway',
      description:
        'Profenofos inhibits acetylcholinesterase in insects, which interrupts nerve impulse transmission and reduces active feeding behavior.'
    },
    {
      title: 'Cypermethrin pathway',
      description:
        'Cypermethrin affects sodium channels in nerve membranes, causing hyperexcitation, paralysis and eventual pest mortality.'
    },
    {
      title: 'Combined field impact',
      description:
        'The dual chemistry helps in practical management of mixed infestations where both sucking and chewing pests are active together.'
    },
    {
      title: 'Timing-first performance',
      description:
        'Better outcomes are achieved when application starts at threshold stage with calibrated spraying and full coverage discipline.'
    }
  ];

  safetyItems = [
    { title: 'Wear PPE before mixing', text: 'Use gloves, mask, goggles and full-sleeve clothing while handling and spraying.' },
    { title: 'Measure dose accurately', text: 'Use 30 ml per pump and avoid overdosing to maintain crop safety and responsible residue levels.' },
    { title: 'Prepare a premix first', text: 'Mix measured quantity in a small water volume, then top up tank with continuous agitation.' },
    { title: 'Spray in suitable weather', text: 'Avoid high wind, peak heat and immediate rain windows to reduce drift and runoff loss.' },
    { title: 'Follow re-entry guidance', text: 'Allow 24 hours before re-entry and ensure protective clothing for necessary field operations.' },
    { title: 'Store and dispose safely', text: 'Keep away from food/feed and dispose containers according to label and local regulations.' }
  ];

  performanceHighlights = [
    { label: 'Fast visible suppression', value: 'Growers report cleaner fields when Profenofos 40% + Cypermethrin 4% EC is used at early infestation windows.' },
    { label: 'Consistent field practicality', value: 'The 30 ml/pump recommendation supports easier training and dose consistency for spray teams.' },
    { label: 'Useful in mixed pest pressure', value: 'Dual-action chemistry helps where one crop block faces chewing and sucking pests together.' },
    { label: 'Reliable fit in IPM plans', value: 'Best used as part of scouting, ETL, rotation and interval-based pest management programs.' }
  ];

  faqs = [
    {
      question: 'What is Profenofos 40% + Cypermethrin 4% EC used for?',
      answer:
        '<strong>Profenofos 40% + Cypermethrin 4% EC</strong> is used for broad-spectrum management of sucking and chewing pests in commercial crops.',
      answerPlain:
        'Profenofos 40% + Cypermethrin 4% EC is used for broad-spectrum management of sucking and chewing pests in commercial crops.'
    },
    {
      question: 'What is the recommended dose of Profenofos 40% + Cypermethrin 4% EC?',
      answer:
        'Standard field guidance is <strong>30 ml per pump</strong>. Final usage should follow crop label and local agronomy advisory.',
      answerPlain:
        'Standard field guidance is 30 ml per pump. Final usage should follow crop label and local agronomy advisory.'
    },
    {
      question: 'Which crops are commonly covered under Profenofos 40% + Cypermethrin 4% EC programs?',
      answer:
        'Common references include <strong>cotton, paddy, soybean, groundnut and vegetable crops</strong> depending on infestation stage.',
      answerPlain:
        'Common references include cotton, paddy, soybean, groundnut and vegetable crops depending on infestation stage.'
    },
    {
      question: 'Can Profenofos 40% + Cypermethrin 4% EC be mixed with other crop-protection products?',
      answer:
        'It is generally compatible with many agrochemicals, but avoid strong alkaline products and run a jar test before large tank mixing.',
      answerPlain:
        'It is generally compatible with many agrochemicals, but avoid strong alkaline products and run a jar test before large tank mixing.'
    },
    {
      question: 'How soon is Profenofos 40% + Cypermethrin 4% EC rainfast after spraying?',
      answer: 'Typical rainfastness is around <strong>2-3 hours after application</strong> under normal field conditions.',
      answerPlain: 'Typical rainfastness is around 2-3 hours after application under normal field conditions.'
    },
    {
      question: 'Where can I verify technical details?',
      answer:
        'You can review the technical specification table on this page and cross-check with our official IndiaMART listing reference.',
      answerPlain:
        'You can review the technical specification table on this page and cross-check with our official IndiaMART listing reference.'
    }
  ];

  testimonials = [
    {
      name: 'Anil',
      location: 'Rajkot district',
      text: 'We used Profenofos 40% + Cypermethrin 4% EC at the first sign of aphid and whitefly pressure. The crop stabilized quickly and follow-up sprays reduced.',
      rating: 5
    },
    {
      name: 'Bhavesh',
      location: 'Jamnagar belt',
      text: 'Dose clarity at 30 ml per pump made execution easy for our team. Coverage and consistency were much better this season.',
      rating: 5
    },
    {
      name: 'Ketan',
      location: 'Surendranagar region',
      text: 'In mixed pest windows, Profenofos 40% + Cypermethrin 4% EC gave dependable control when we followed ETL and interval discipline.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Use gloves, mask, goggles and protective clothing before opening the bottle.' },
    { name: 'Measure dose', text: 'Measure 30 ml per pump with a clean measuring cup.' },
    { name: 'Prepare premix', text: 'Mix measured quantity in a small quantity of water.' },
    { name: 'Top up and agitate', text: 'Add remaining water and maintain agitation for uniform spray mixture.' },
    { name: 'Spray at threshold stage', text: 'Apply during early infestation for best practical field response.' },
    { name: 'Clean equipment', text: 'Clean sprayer and dispose leftovers as per label and local regulations.' }
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
      `${this.productName} is Harishree Crop Science ${this.productTitle} EC insecticide. Dose: 30 ml/pump. Explore technical specifications, pests, crops, mode of action, safety guidance and FAQ.`;

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Profenofos 40% + Cypermethrin 4% EC, Mpire 404, profenofos cypermethrin insecticide, mpire 404 dose, 30 ml pump dose, profenofos 40 cypermethrin 4 ec price, broad-spectrum insecticide, cotton pest control, paddy pest control, Harishree Crop Science'
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
        `${this.productTitle} (${this.productName}) product page with technical specifications, usage guidance, FAQ and crop application reference.`,
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
        'Mpire 404 insecticide',
        'Profenofos 40 + Cypermethrin 4 EC',
        'Profenofos 40% + Cypermethrin 4% EC insecticide'
      ],
      description:
        `${this.productName} (${this.productTitle}) is a broad-spectrum EC insecticide with contact and stomach action for practical crop pest management.`,
      image: [this.bottleImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: this.productName,
      category: 'Insecticide',
      sku: 'MPIRE-404',
      material: 'EC (Liquid)',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        { '@type': 'PropertyValue', name: 'Dose', value: '30 ml/pump' },
        { '@type': 'PropertyValue', name: 'Primary keyword', value: this.productTitle },
        { '@type': 'PropertyValue', name: 'Secondary keyword', value: this.productName },
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
      name: `${this.productTitle} - schema pack list`,
      description: `${this.productTitle} schema-only item list with GST-inclusive pricing.`,
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `${this.productTitle} ${p.label}`,
          image: this.bottleImageUrl,
          sku: p.sku,
          description: `${this.productTitle} ${p.label} pack by Harishree Crop Science.`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          category: 'Insecticide',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Technical composition', value: this.productTitle },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Dose', value: '30 ml/pump' }
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
