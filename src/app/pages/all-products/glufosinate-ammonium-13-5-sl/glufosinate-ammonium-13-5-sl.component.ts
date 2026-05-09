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

  packSizes = [
    { volume: '500 ml', price: 236, featured: false, sku: 'GLUFO13-500ML' },
    { volume: '1 liter', price: 448, featured: true, sku: 'GLUFO13-1L' }
  ];

  keyBenefits = [
    {
      title: 'Fast visible weed knockdown',
      description: 'Starts acting quickly on actively growing weeds for faster visual suppression in field operations.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad-spectrum non-selective control',
      description: 'Effective on many annual grasses and broadleaf weeds in directed and non-crop use patterns.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Resistance management support',
      description: 'Useful as an alternative herbicide mode of action in integrated weed management programs.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Easy SL formulation',
      description: 'Simple to measure and mix in knapsack sprays for consistent field execution.',
      icon: 'fas fa-tint'
    }
  ];

  targetWeeds = [
    { name: 'Annual grasses', description: 'Strong activity on many grassy weeds when treated at younger stages.' },
    { name: 'Broadleaf weeds', description: 'Controls broadleaf species competing with crop nutrition and light.' },
    { name: 'Volunteer growth', description: 'Helps clear volunteer plants and mixed weed flora in non-selective programs.' },
    { name: 'Glyphosate-tolerant escapes', description: 'Offers a useful alternative where glyphosate response is reduced.' },
    { name: 'Inter-row vegetation', description: 'Suitable for directed spray in orchards and plantations to keep basins clean.' },
    { name: 'Farmyard and perimeter weeds', description: 'Maintains cleaner non-crop edges and infrastructure zones.' }
  ];

  applications = [
    { title: 'Orchards', description: 'Directed sprays in fruit orchards while avoiding contact with green bark and leaves.', icon: 'fas fa-tree' },
    { title: 'Plantation crops', description: 'Useful in tea, coffee, rubber, and similar plantation weed programs as per label.', icon: 'fas fa-mountain' },
    { title: 'Vineyards', description: 'Inter-row and under-vine weed control with shielded application technique.', icon: 'fas fa-wine-bottle' },
    { title: 'Non-crop areas', description: 'Farm paths, bunds, and utility zones where total weed suppression is needed.', icon: 'fas fa-road' },
    { title: 'Pre-plant cleanup', description: 'Burndown of emerged weeds before field preparation and planting operations.', icon: 'fas fa-tractor' },
    { title: 'Spot treatment', description: 'Targeted application for stubborn weed patches in integrated programs.', icon: 'fas fa-crosshairs' }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand', value: 'Harishree Crop Science' },
      { label: 'Product name', value: 'GLUFO 13' },
      { label: 'Active ingredient', value: 'Glufosinate ammonium 13.5% SL' },
      { label: 'Formulation', value: 'Soluble liquid (SL)' }
    ],
    packs: [
      { label: 'Pack sizes', value: '500 ml, 1 liter' },
      { label: 'Dose', value: '100 ml per pump' },
      { label: 'Use note', value: 'Apply on actively growing weeds with uniform spray coverage.' }
    ]
  };

  modeOfAction = [
    { title: 'Foliar absorption', description: 'GLUFO 13 is absorbed by green tissues after spray deposition on leaves.' },
    { title: 'Enzyme inhibition', description: 'It inhibits glutamine synthetase in susceptible plants after uptake.' },
    { title: 'Ammonia accumulation', description: 'Toxic ammonia accumulation disrupts photosynthesis and cellular function.' },
    { title: 'Weed desiccation', description: 'Treated weeds gradually lose vigor and dry down, reducing crop competition.' }
  ];

  safetyItems = [
    { title: 'Wear PPE', text: 'Use gloves, protective clothing, and eye protection during mixing and spraying.' },
    { title: 'Calibrate sprayer', text: 'Use proper nozzle and pressure for uniform coverage and dose accuracy.' },
    { title: 'Avoid drift', text: 'Spray during calm weather and protect nearby desirable plants from contact.' },
    { title: 'Directed spray only', text: 'Do not spray directly on green crop tissue unless label specifically allows it.' },
    { title: 'Storage', text: 'Keep sealed in original container, away from children, feed, and direct sunlight.' },
    { title: 'Disposal', text: 'Rinse containers safely and dispose according to local agricultural regulations.' }
  ];

  performanceHighlights = [
    { label: 'Quick visual effect', value: 'Visible suppression starts quickly under active growth conditions.' },
    { label: 'Operational flexibility', value: 'Practical for orchards, plantations, and non-crop maintenance programs.' },
    { label: 'Two key pack options', value: '500 ml and 1 liter packs suit small and larger acreage needs.' },
    { label: 'Field support', value: 'Guidance and supply support through Harishree dealer channels.' }
  ];

  faqs = [
    {
      question: 'What is GLUFO 13 used for?',
      answer: '<strong>GLUFO 13</strong> is a <strong>Glufosinate ammonium 13.5% SL</strong> non-selective herbicide for controlling emerged weeds in orchards, plantations, and non-crop areas when used as directed.',
      answerPlain: 'GLUFO 13 is a Glufosinate ammonium 13.5% SL non-selective herbicide for controlling emerged weeds in orchards, plantations, and non-crop areas when used as directed.'
    },
    {
      question: 'What is the recommended dose of GLUFO 13?',
      answer: 'The standard field guideline on this page is <strong>100 ml per pump</strong>. Always confirm crop-stage and local label recommendations before application.',
      answerPlain: 'The standard field guideline on this page is 100 ml per pump. Always confirm crop-stage and local label recommendations before application.'
    },
    {
      question: 'Can GLUFO 13 help in resistance management?',
      answer: 'Yes. It is often used as an alternative herbicide chemistry in integrated weed management programs to reduce overdependence on a single mode of action.',
      answerPlain: 'Yes. It is often used as an alternative herbicide chemistry in integrated weed management programs to reduce overdependence on a single mode of action.'
    },
    {
      question: 'Is GLUFO 13 safe for all crops?',
      answer: 'It is <strong>non-selective</strong> and can injure any green plant it touches. Use directed spray practices and avoid contact with crop foliage and green stems.',
      answerPlain: 'It is non-selective and can injure any green plant it touches. Use directed spray practices and avoid contact with crop foliage and green stems.'
    }
  ];

  testimonials = [
    { text: 'GLUFO 13 gave us fast cleanup in orchard basins and reduced manual weeding rounds.' },
    { text: 'The 1 liter pack is economical for our plantation blocks and coverage is consistent.' },
    { text: 'Good option in our weed program where we need an alternative to routine glyphosate sprays.' }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Put on gloves, mask, eye protection, and full clothing before handling product.' },
    { name: 'Half-fill tank', text: 'Fill sprayer tank halfway with clean water.' },
    { name: 'Measure GLUFO 13', text: 'Measure 100 ml per pump and add to the tank.' },
    { name: 'Top up and agitate', text: 'Fill remaining water and agitate properly for a uniform spray mix.' },
    { name: 'Apply to weeds', text: 'Spray actively growing weeds with uniform coverage and minimal drift.' },
    { name: 'Clean equipment', text: 'Rinse sprayer and dispose rinse water per local guidance.' }
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

    this.title.setTitle('Glufosinate ammonium 13.5% SL Herbicide | GLUFO 13 | Harishree Crop Science');
    const desc =
      'Buy Glufosinate ammonium 13.5% SL (GLUFO 13) herbicide. Broad-spectrum non-selective weed control, dose 100 ml per pump, packs 500 ml and 1 liter.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Glufosinate ammonium 13.5% SL, GLUFO 13, Glufosinate herbicide, non-selective herbicide India, weed killer for orchards, herbicide for plantations, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'GLUFO 13 | Glufosinate ammonium 13.5% SL' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/glufosinate-ammonium-13-5-sl.png` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'GLUFO 13 Glufosinate ammonium 13.5% SL' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/glufosinate-ammonium-13-5-sl.png` }
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
      telephone: '+919898197196'
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
      department: [
        {
          '@type': 'LocalBusiness',
          name: 'GLUFO 13 - Glufosinate ammonium 13.5% SL',
          description:
            'GLUFO 13 is a broad-spectrum non-selective herbicide for rapid knockdown of emerged weeds in orchards, plantations, and non-crop areas.'
        }
      ]
    };
    this.addJsonLd(data, LOCALBUSINESS_SCHEMA_KEY);
  }

  private setWebPageSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.pageUrl}#webpage`,
      url: this.pageUrl,
      name: 'Glufosinate ammonium 13.5% SL (GLUFO 13)',
      description:
        'Glufosinate ammonium 13.5% SL (GLUFO 13) product page with uses, dosage, pricing, and safety for Glufosinate ammonium 13.5% SL.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${this.baseUrl}/#website`,
        url: this.baseUrl,
        name: 'Harishree Crop Science'
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${this.baseUrl}/assets/products/glufosinate-ammonium-13-5-sl.png`,
        caption: 'Glufosinate ammonium 13.5% SL (GLUFO 13) bottle'
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
        { '@type': 'ListItem', position: 3, name: 'Glufosinate ammonium 13.5% SL (GLUFO 13)', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Glufosinate ammonium 13.5% SL',
      alternateName: ['Glufosinate ammonium 13.5% SL (GLUFO 13)', 'Glufosinate ammonium 13.5% SL herbicide', 'Glufo 13 herbicide'],
      description:
        'Glufosinate ammonium 13.5% SL (GLUFO 13) is a non-selective herbicide for broad-spectrum weed control in orchards, plantations, and non-crop zones.',
      image: [`${this.baseUrl}/assets/products/glufosinate-ammonium-13-5-sl.png`],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: this.baseUrl,
        logo: `${this.baseUrl}/assets/logo/HARISHREE.png`
      },
      category: 'Herbicide',
      sku: 'GLUFO13-SL',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '26'
      },
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
      name: 'Glufosinate ammonium 13.5% SL (GLUFO 13) pack variants',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Glufosinate ammonium 13.5% SL (GLUFO 13) ${p.volume}`,
          image: `${this.baseUrl}/assets/products/glufosinate-ammonium-13-5-sl.png`,
          sku: p.sku,
          description: `Glufosinate ammonium 13.5% SL (GLUFO 13) ${p.volume} pack of Glufosinate ammonium 13.5% SL - ${p.price} INR`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          offers: {
            '@type': 'Offer',
            price: p.price.toString(),
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: this.pageUrl,
            priceValidUntil: getOfferPriceValidUntil(),
            hasMerchantReturnPolicy: merchantReturnPolicySchema(),
            shippingDetails: offerShippingDetailsSchema()
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
      name: 'How to mix and apply Glufosinate ammonium 13.5% SL (GLUFO 13)',
      description: 'Safe mixing and application steps for Glufosinate ammonium 13.5% SL (GLUFO 13).',
      image: `${this.baseUrl}/assets/products/glufosinate-ammonium-13-5-sl.png`,
      totalTime: 'PT20M',
      supply: [{ '@type': 'HowToSupply', name: 'Glufosinate ammonium 13.5% SL (GLUFO 13)' }, { '@type': 'HowToSupply', name: 'Clean water' }],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer' },
        { '@type': 'HowToTool', name: 'Measuring cup' },
        { '@type': 'HowToTool', name: 'PPE' }
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
