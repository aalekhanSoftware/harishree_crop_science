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

const META_KEY = makeStateKey<boolean>('THIAMETHOXAM30FS_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('THIAMETHOXAM30FS_HOWTO_SCHEMA');

const INDICATIVE_LIST_PRICE_INR = 566;

@Component({
  selector: 'app-thiamethoxam-30-fs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thiamethoxam-30-fs.component.html',
  styleUrl: './thiamethoxam-30-fs.component.scss'
})
export class Thiamethoxam30FsComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/all-products/thiamethoxam-30-fs';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productTitle = 'Thiamethoxam 30% FS';
  readonly productName = 'Super FS';
  readonly indiaMartUrl = 'https://www.indiamart.com/proddetail/super-fs-thiamethoxam-30-fs-insecticide-2855027703088.html';
  readonly bottleImageUrl = `${this.baseUrl}/assets/products/thiamethoxam-30-fs.png`;

  packSizes = [
    { volume: '100 ml', price: 71, featured: false, sku: 'SUPER-FS-100ML' },
    { volume: '250 ml', price: 153, featured: false, sku: 'SUPER-FS-250ML' },
    { volume: '500 ml', price: 295, featured: true, sku: 'SUPER-FS-500ML' },
    { volume: '1 Ltr', price: 566, featured: false, sku: 'SUPER-FS-1LTR' }
  ];

  keyBenefits = [
    {
      title: 'Strong early-stage seedling protection',
      description:
        'Super FS supports uniform crop establishment by protecting seeds and young seedlings from early pest attack in the first critical growth phase.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Systemic support from seed treatment stage',
      description:
        'With Thiamethoxam 30% FS, seeds get a treatment layer that helps protect emerging plants through practical systemic movement in early growth.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Field-practical FS liquid handling',
      description:
        'The liquid FS format is easy to measure and coat uniformly, helping growers maintain consistency across small and large seed lots.',
      icon: 'fas fa-prescription-bottle'
    },
    {
      title: 'Useful against key sucking and early pests',
      description:
        'Fits programs where termites, jassids, aphids and thrips pressure can affect plant stand and early crop vigor.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Supports stronger crop start in multiple crops',
      description:
        'Can be integrated in seed treatment schedules for cotton, maize, paddy nursery, wheat, soybean and pulse crops as per advisory.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Simple dose guidance for farm teams',
      description:
        'A clear recommendation of 15 ml per pump keeps treatment planning straightforward and avoids inconsistency during seed coating.',
      icon: 'fas fa-bullseye'
    }
  ];

  targetPests = [
    { name: 'Termites', description: 'Helps reduce early root-zone pest pressure during germination and crop establishment.', icon: 'fas fa-bug' },
    { name: 'Jassids', description: 'Supports early control in susceptible crops where jassid feeding can stunt growth.', icon: 'fas fa-bug' },
    { name: 'Aphids', description: 'Useful in managing early sucking pest pressure around initial crop development.', icon: 'fas fa-bug' },
    { name: 'Thrips', description: 'Can be part of preventive seed treatment strategy where thrips pressure is recurring.', icon: 'fas fa-bug' },
    { name: 'Shoot fly', description: 'Supports protection against early-stage damage in cereal and related crops.', icon: 'fas fa-bug' },
    { name: 'Early-season sucking pests', description: 'Helps growers secure a cleaner start before foliar intervention windows begin.', icon: 'fas fa-bug' }
  ];

  applications = [
    { title: 'Cotton', description: 'Seed treatment support for cleaner establishment and reduced early sucking pest stress.', icon: 'fas fa-seedling' },
    { title: 'Maize and sorghum', description: 'Useful in managing early pest attack during germination and stand development.', icon: 'fas fa-leaf' },
    { title: 'Paddy (nursery stage)', description: 'Fits nursery programs where early crop protection is important before transplanting.', icon: 'fas fa-spa' },
    { title: 'Wheat', description: 'Supports a healthier crop start where soil and sucking pest pressure is expected.', icon: 'fas fa-wheat-awn' },
    { title: 'Chickpea, pigeon pea, soybean, groundnut', description: 'Suitable in pulse and oilseed seed-treatment schedules as per local advisory.', icon: 'fas fa-seedling' },
    { title: 'Application timing', description: 'Treat seeds before sowing, ideally 1-2 hours prior to planting for best coating quality.', icon: 'fas fa-clock' }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: this.productName },
      { label: 'Technical composition', value: 'Thiamethoxam 30% FS (Flowable Suspension for Seed Treatment)' },
      { label: 'Type', value: 'Systemic neonicotinoid insecticide for seed treatment' },
      { label: 'Formulation', value: 'FS (Flowable Concentrate for Seed Treatment)' },
      { label: 'Chemical group', value: 'Neonicotinoid' },
      { label: 'Form', value: 'Liquid' },
      { label: 'Country of origin', value: 'Made in India' }
    ],
    packs: [
      { label: 'Recommended dose', value: '15 ml/pump' },
      { label: 'Pack sizes in schema', value: '100 ml, 250 ml, 500 ml, 1 Ltr' },
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'SUPER FS' },
    { label: 'Technical Composition', value: 'Thiamethoxam 30% FS (Flowable Suspension for seed treatment)' },
    { label: 'Type', value: 'Systemic neonicotinoid insecticide for seed treatment' },
    { label: 'Formulation', value: 'FS (Flowable Concentrate for Seed Treatment)' },
    { label: 'Chemical Group', value: 'Neonicotinoid' },
    { label: 'Mode of Action', value: 'Interferes with nicotinic acetylcholine receptors in insect nerves causing paralysis and death' },
    { label: 'Action Type', value: 'Systemic, contact, and stomach action' },
    { label: 'Target Pests', value: 'Termites, Jassids, Aphids, Thrips, Shoot fly, early-season sucking pests' },
    { label: 'Target Crops', value: 'Cotton, Maize, Sorghum, Paddy (nursery), Wheat, Chickpea, Pigeon pea, Soybean, Groundnut' },
    { label: 'Recommended Dose', value: '15 ml/pump' },
    { label: 'Application Method', value: 'Uniform seed coating using seed treater or manual treatment with sticking agent (gum/water)' },
    { label: 'Time of Application', value: 'Before sowing (at least 1-2 hours prior to planting)' },
    { label: 'Residual Effect', value: 'Protects seedlings for 15-20 days after germination' },
    { label: 'Re-entry Interval', value: 'Not applicable (used before sowing)' },
    { label: 'Pre-Harvest Interval', value: 'Not applicable' },
    { label: 'Compatibility', value: 'Avoid mixing with fungicides unless label-approved; avoid excessive seed moisture' },
    { label: 'Precautions', value: 'Do not use treated seeds for food/feed; wear gloves; dry treated seeds in shade' },
    { label: 'Official B2B source', value: this.indiaMartUrl }
  ];

  modeOfAction = [
    {
      title: 'Targets nicotinic acetylcholine receptors',
      description:
        'Thiamethoxam affects receptor function in insect nerves, causing nervous disruption that reduces feeding and active movement.'
    },
    {
      title: 'Systemic seedling-phase protection',
      description:
        'As seeds germinate, treated seeds support early protection of young plants during vulnerable growth stages.'
    },
    {
      title: 'Multi-path field activity',
      description:
        'The product contributes systemic, contact and stomach action profile in practical integrated pest management schedules.'
    },
    {
      title: 'Best results with timely pre-sowing treatment',
      description:
        'Uniform seed coating before sowing helps improve protection consistency and supports stronger early crop stand.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear PPE while treating seed',
      text: 'Use gloves, mask and basic protective clothing when measuring and coating seeds.'
    },
    {
      title: 'Measure exact dose before mixing',
      text: 'Use recommended dose of 15 ml/pump and avoid over-concentration during treatment.'
    },
    {
      title: 'Ensure uniform coating',
      text: 'Use a seed treater or manual mixing with sticking agent to achieve even seed coverage.'
    },
    {
      title: 'Treat seeds before sowing window',
      text: 'Plan treatment at least 1-2 hours before sowing for practical handling and drying.'
    },
    {
      title: 'Dry treated seed in shade only',
      text: 'Avoid direct sunlight after treatment; allow seeds to dry under shade conditions.'
    },
    {
      title: 'Keep treated seeds out of food chain',
      text: 'Never use treated seeds for food, feed, or oil extraction and store them separately.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Cleaner crop start in practical field conditions',
      value: 'Growers use Super FS to improve early establishment where sucking and soil-side pest pressure is common.'
    },
    {
      label: 'Useful residual support for seedling phase',
      value: 'The treatment profile supports seedling protection for around 15-20 days after germination.'
    },
    {
      label: 'Simple treatment workflow for farm teams',
      value: 'Liquid FS format and clear dose guidance make planning and seed-treatment execution easier.'
    },
    {
      label: 'Fits integrated, crop-specific advisory plans',
      value: 'Works best when paired with scouting, local recommendations and crop-stage based protection strategy.'
    }
  ];

  faqs = [
    {
      question: 'What is Super FS (Thiamethoxam 30% FS) mainly used for?',
      answer:
        '<strong>Super FS</strong> is a seed-treatment insecticide used to protect emerging seedlings from early pest pressure such as termites, jassids, aphids and thrips.',
      answerPlain:
        'Super FS is a seed-treatment insecticide used to protect emerging seedlings from early pest pressure such as termites, jassids, aphids and thrips.'
    },
    {
      question: 'What is the recommended dose of Thiamethoxam 30% FS?',
      answer:
        'The practical recommendation is <strong>15 ml per pump</strong>. Always align final use with product label and local agronomy advisory.',
      answerPlain:
        'The practical recommendation is 15 ml per pump. Always align final use with product label and local agronomy advisory.'
    },
    {
      question: 'When should treated seeds be sown?',
      answer:
        'Treat seeds and sow ideally within <strong>1-2 hours</strong> after treatment, once coating is uniform and seeds are shade-dried.',
      answerPlain:
        'Treat seeds and sow ideally within 1-2 hours after treatment, once coating is uniform and seeds are shade-dried.'
    },
    {
      question: 'How long does early protection usually last?',
      answer:
        'Under practical use conditions, seedling protection support is commonly observed for around <strong>15-20 days</strong> after germination.',
      answerPlain:
        'Under practical use conditions, seedling protection support is commonly observed for around 15-20 days after germination.'
    },
    {
      question: 'Can treated seeds be used for food or feed?',
      answer:
        'No. <strong>Treated seeds must never be used for food, feed, or oil extraction</strong>. Keep them strictly for sowing purpose only.',
      answerPlain:
        'No. Treated seeds must never be used for food, feed, or oil extraction. Keep them strictly for sowing purpose only.'
    },
    {
      question: 'Where can I verify official commercial reference details?',
      answer:
        'You can review technical parameters in this page and cross-check listing-level data on the official IndiaMART reference.',
      answerPlain:
        'You can review technical parameters in this page and cross-check listing-level data on the official IndiaMART reference.'
    }
  ];

  testimonials = [
    {
      name: 'Dilip',
      location: 'Rajkot district',
      text: 'We treated cotton seed with Super FS before sowing and got a cleaner crop start. Early pest pressure was clearly lower than previous season.',
      rating: 5
    },
    {
      name: 'Harendra',
      location: 'Jamnagar belt',
      text: 'The 15 ml per pump guidance is easy for our team. Coating is smooth and nursery establishment in paddy was more uniform.',
      rating: 5
    },
    {
      name: 'Bhavesh',
      location: 'Paddhari zone',
      text: 'For soybean and chickpea seed treatment, Super FS has been practical and consistent when used exactly as advised.',
      rating: 5
    }
  ];

  howToSteps = [
    { name: 'Prepare safety gear', text: 'Wear gloves, mask and protective clothing before opening product container.' },
    { name: 'Measure dose accurately', text: 'Measure 15 ml per pump with a clean measuring cup.' },
    { name: 'Make treatment slurry', text: 'Pre-mix with a small amount of water or sticking agent for even coating.' },
    { name: 'Coat seed uniformly', text: 'Treat seeds in seed treater or manually until all seeds are evenly covered.' },
    { name: 'Shade-dry treated seed', text: 'Dry treated seeds under shade and avoid direct sunlight exposure.' },
    { name: 'Sow within planned window', text: 'Use treated seed for sowing, ideally 1-2 hours after treatment.' }
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

    const titleText = `${this.productTitle} | ${this.productName} Seed Treatment Insecticide | Harishree Crop Science`;
    this.title.setTitle(titleText);

    const desc =
      `${this.productName} is Harishree Crop Science ${this.productTitle} seed-treatment insecticide. Dose: 15 ml/pump. Explore technical specifications, target pests, crops, usage guidance, FAQs and official product reference.`;

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Thiamethoxam 30% FS, Super FS, Thiamethoxam seed treatment, Thiamethoxam 30 FS insecticide, seed treatment insecticide, neonicotinoid seed treatment, 15 ml per pump dose, Harishree Crop Science'
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
        'https://linkedin.com/company/harishree-crop-science',
        this.indiaMartUrl
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
          description: `${this.productName} is Harishree Crop Science ${this.productTitle} formulation for seed treatment and early-stage crop protection.`
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/harishree-crop-science',
        'https://www.instagram.com/harishree_crop_science',
        'https://www.facebook.com/harishreecropscience',
        this.indiaMartUrl
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
        `${this.productTitle} (${this.productName}) product page with technical specifications, pests, crops, FAQ and usage guidance.`,
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
      alternateName: [this.productName, 'Thiamethoxam 30 FS', 'Thiamethoxam 30% FS Insecticide'],
      description:
        `${this.productName} (${this.productTitle}) is a liquid flowable seed-treatment insecticide with systemic support against early-stage pest pressure.`,
      image: [this.bottleImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: this.productName,
      category: 'Seed Treatment Insecticide',
      sku: 'SUPER-FS-THIAMETHOXAM-30-FS',
      material: 'FS (Liquid)',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        { '@type': 'PropertyValue', name: 'Dose', value: '15 ml/pump' }
      ],
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: this.baseUrl,
        logo: `${this.baseUrl}/assets/logo/HARISHREE.png`
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '9',
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
      name: `${this.productName} (${this.productTitle}) - pack sizes`,
      description: `${this.productTitle} pack size list with schema-only.`,
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `${this.productName} (${this.productTitle}) - ${p.volume}`,
          image: this.bottleImageUrl,
          sku: p.sku,
          description: `${this.productName} ${this.productTitle} ${p.volume} pack by Harishree Crop Science.`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          category: 'Seed Treatment Insecticide',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Technical composition', value: 'Thiamethoxam 30% FS' },
            { '@type': 'PropertyValue', name: 'Formulation', value: 'FS (Flowable Seed Treatment)' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Dose', value: '15 ml/pump' },
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
      name: `How to apply ${this.productName} (${this.productTitle}) for seed treatment`,
      description: `Step-by-step guidance for safe and effective seed treatment using ${this.productTitle}.`,
      image: this.bottleImageUrl,
      totalTime: 'PT20M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: String(INDICATIVE_LIST_PRICE_INR)
      },
      supply: [
        { '@type': 'HowToSupply', name: this.productName },
        { '@type': 'HowToSupply', name: 'Clean water or approved sticking solution' }
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Seed treatment drum / seed treater' },
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
