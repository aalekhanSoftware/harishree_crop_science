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

const META_KEY = makeStateKey<boolean>('TEMBOTRIONE_34_4_SC_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('TEMBOTRIONE_HOWTO_SCHEMA');

@Component({
  selector: 'app-tembotrione-34-4-w-w-sc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tembotrione-34-4-w-w-sc.component.html',
  styleUrl: './tembotrione-34-4-w-w-sc.component.scss'
})
export class Tembotrione344WwScComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/tembotrione-34-4-w-w-sc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  product = {
    name: 'Tembo-H',
    subtitle: 'Tembotrione 34.4% w/w SC',
    image: 'assets/products/herbicide/tembotrione-34-4-w-w-sc.jpg',
    description: 'Premium early post-emergence herbicide for comprehensive control of broadleaf and grassy weeds in maize (corn).'
  };

  packSizes = [
    { volume: '250 ml', price: 230, featured: false, sku: 'TEMBO-250ML' },
    { volume: '500 ml', price: 443, featured: true, sku: 'TEMBO-500ML' },
    { volume: '1 liter', price: 861, featured: false, sku: 'TEMBO-1L' },
    { volume: '5 liter', price: 2000, featured: false, sku: 'TEMBO-5L' }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum weed control',
      description: 'Provides powerful control over a wide range of tough broadleaf weeds and annual grasses simultaneously.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Bleaching action',
      description: 'Quickly halts weed growth by inhibiting pigment synthesis, causing visible bleaching symptoms in days.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Excellent crop safety',
      description: 'Highly selective formulation ensuring maximum safety for maize (corn) crops at recommended doses.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Rainfast formulation',
      description: 'SC formulation provides superior absorption and excellent rainfastness within hours of application.',
      icon: 'fas fa-cloud-rain'
    }
  ];

  targetWeeds = [
    { name: 'Echinochloa spp. (Barnyard grass)', description: 'Effective early post-emergence control of barnyard grass in maize.' },
    { name: 'Amaranthus spp. (Pigweed)', description: 'Strong bleaching activity against tough pigweed populations.' },
    { name: 'Digitaria spp. (Crabgrass)', description: 'Reliable control of various crabgrass species.' },
    { name: 'Trianthema portulacastrum (Horse purslane)', description: 'Excellent control of horse purslane competing with the crop.' },
    { name: 'Eleusine indica (Goosegrass)', description: 'Provides dependable control of goosegrass in maize fields.' },
    { name: 'Parthenium hysterophorus', description: 'Strong systemic activity against Parthenium and other broadleaf weeds.' }
  ];

  applications = [
    {
      title: 'Maize (Corn)',
      description: 'Early post-emergence application (2-4 weed leaf stage) for broad-spectrum weed management with exceptional crop safety.',
      icon: 'fas fa-seedling'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand', value: 'Tembo-H' },
      { label: 'Company', value: 'Harishree Crop Science' },
      { label: 'Active ingredient', value: 'Tembotrione 34.4% w/w SC' },
      { label: 'Formulation', value: 'Suspension Concentrate (SC)' },
      { label: 'Mode of action', value: 'HPPD inhibitor (Bleaching action)' },
      { label: 'Shelf life', value: 'Store in original container; use within printed shelf life' }
    ],
    packs: [
      { label: 'Pack sizes', value: '250 ml, 500 ml, 1 liter, 5 liter' },
      { label: 'Recommended dose', value: '20 ml per 16-20 litre pump load' },
      { label: 'Application timing', value: 'Early post-emergence (when weeds are at 2-4 leaf stage)' }
    ]
  };

  modeOfAction = [
    {
      title: 'Foliar absorption',
      description: 'Tembotrione 34.4% w/w SC is rapidly absorbed by weed foliage after spray application.'
    },
    {
      title: 'HPPD inhibition',
      description: 'Inhibits the 4-HPPD enzyme, disrupting the synthesis of plastoquinone and carotenoids.'
    },
    {
      title: 'Bleaching effect',
      description: 'Without protective pigments, chlorophyll is destroyed by sunlight, causing newly emerged tissue to turn white.'
    },
    {
      title: 'Systemic translocation',
      description: 'Moves systemically throughout the weed, resulting in complete necrosis and death within days.'
    }
  ];

  safetyItems = [
    { title: 'Personal protection', text: 'Wear protective clothing, gloves, and eye protection during mixing and application.' },
    { title: 'Crop compatibility', text: 'Apply specifically to recommended crops like maize to avoid off-target injury.' },
    { title: 'Timing', text: 'Apply when target weeds are young, actively growing, and at the 2-4 leaf stage.' },
    { title: 'Mixing', text: 'Add Tembo-H to clean water with proper agitation to ensure uniform suspension.' },
    { title: 'Storage', text: 'Store in the tightly sealed original container in a cool, dry place away from children.' },
    { title: 'Environmental care', text: 'Avoid spray drift to non-target areas and water bodies.' }
  ];

  performanceHighlights = [
    { label: 'Visual action', value: 'Distinct bleaching symptoms visible on weeds shortly after application.' },
    { label: 'Complete control', value: 'Systemic movement ensures control of both foliage and growing points.' },
    { label: 'Value packaging', value: 'Available in sizes from 250 ml to 5 liter to suit any farm size.' },
    { label: 'Field proven', value: 'Trusted by maize farmers across India for clean, high-yielding fields.' }
  ];

  faqs = [
    {
      question: 'What is Tembo-H (Tembotrione 34.4% w/w SC) used for?',
      answer: '<strong>Tembo-H</strong> is a premium early post-emergence herbicide containing <strong>Tembotrione 34.4% w/w SC</strong>. It is primarily used for the control of both broadleaf and grassy weeds in maize (corn) crops, offering excellent crop safety.',
      answerPlain: 'Tembo-H is a premium early post-emergence herbicide containing Tembotrione 34.4% w/w SC. It is primarily used for the control of both broadleaf and grassy weeds in maize (corn) crops, offering excellent crop safety.'
    },
    {
      question: 'What is the recommended dose for Tembotrione 34.4% w/w SC?',
      answer: 'The recommended dose for <strong>Tembo-H</strong> is <strong>20 ml per 16-20 litre pump</strong>. For best results, apply early post-emergence when the weeds are actively growing at the 2-4 leaf stage.',
      answerPlain: 'The recommended dose for Tembo-H is 20 ml per 16-20 litre pump. For best results, apply early post-emergence when the weeds are actively growing at the 2-4 leaf stage.'
    },
    {
      question: 'What are the pack sizes and prices for Tembo-H?',
      answer: '<strong>Tembo-H</strong> is available in multiple pack sizes: <strong>250 ml </strong>, <strong>500 ml </strong>, <strong>1 liter </strong>, and <strong>5 liter </strong>. The main item reference price is <strong>₹250</strong>.',
      answerPlain: 'Tembo-H is available in multiple pack sizes: 250 ml, 500 ml, 1 liter, and 5 liter.'
    },
    {
      question: 'How does Tembotrione 34.4% w/w SC work?',
      answer: '<strong>Tembotrione 34.4% w/w SC</strong> works as an HPPD inhibitor. It disrupts the plant\'s ability to produce protective pigments. Driven by sunlight, this causes the weed\'s chlorophyll to break down, resulting in rapid bleaching (whitening) and eventual death.',
      answerPlain: 'Tembotrione 34.4% w/w SC works as an HPPD inhibitor. It disrupts the plant\'s ability to produce protective pigments. Driven by sunlight, this causes the weed\'s chlorophyll to break down, resulting in rapid bleaching (whitening) and eventual death.'
    },
    {
      question: 'Is Tembo-H safe for my maize crop?',
      answer: 'Yes, <strong>Tembo-H (Tembotrione 34.4% w/w SC)</strong> is highly selective and provides excellent crop safety for maize (corn) when applied at the recommended dose and correct growth stages.',
      answerPlain: 'Yes, Tembo-H (Tembotrione 34.4% w/w SC) is highly selective and provides excellent crop safety for maize (corn) when applied at the recommended dose and correct growth stages.'
    },
    {
      question: 'Where can I buy Tembotrione 34.4% w/w SC in India?',
      answer: 'You can contact <strong>Harishree Crop Science</strong> directly through our website or reach out to our authorized distributor network across India for genuine Tembo-H availability.',
      answerPlain: 'You can contact Harishree Crop Science directly through our website or reach out to our authorized distributor network across India for genuine Tembo-H availability.'
    }
  ];

  testimonials = [
    { text: 'Tembo-H is highly effective against both grassy and broadleaf weeds. Within a week of application, we saw the weeds turn completely white and die, leaving our maize crop healthy and untouched.' },
    { text: 'The 5-liter pack is perfect for large maize farms. The 20 ml per pump dosage makes it highly economical, and the results are unmatched compared to other products.' },
    { text: 'We rely on Tembotrione 34.4% SC from Harishree Crop Science every season. We get clean maize fields and higher yields without worrying about crop injury.' }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Put on gloves, protective clothing, and eyewear before handling Tembo-H.' },
    { name: 'Measure water', text: 'Fill the reliable knapsack spray tank halfway with clean water.' },
    { name: 'Add Tembo-H', text: 'Carefully measure 20 ml of Tembotrione 34.4% SC per 16-20 L pump and add it to the tank.' },
    { name: 'Complete mixing', text: 'Top up the remaining water and agitate well for a uniform suspension.' },
    { name: 'Application', text: 'Spray uniformly over actively growing weeds in the maize field at the 2-4 leaf stage.' },
    { name: 'Equipment care', text: 'Triple-rinse the sprayer thoroughly after use and dispose of the rinsate safely.' }
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

    this.title.setTitle('Tembotrione 34.4% w/w SC | Tembo-H Herbicide | Harishree Crop Science');

    const desc =
      'Buy Tembotrione 34.4% w/w SC (Tembo-H) selective herbicide for advanced broadleaf and grassy weed control in maize. Dose 20 ml/pump, packs 250ml to 5L. Harishree Crop Science.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Tembotrione 34.4% w/w SC, Tembo-H, Tembotrione herbicide, maize herbicide, early post-emergence herbicide, weed control in maize, Harishree Crop Science, HPPD inhibitor, selective herbicide'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Tembotrione 34.4% w/w SC | Tembo-H Herbicide | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/herbicide/tembotrione-34-4-w-w-sc.jpg` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Tembotrione 34.4% w/w SC | Tembo-H Herbicide | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/herbicide/tembotrione-34-4-w-w-sc.jpg` }
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
          name: 'Tembotrione 34.4% w/w SC (Tembo-H)',
          description: 'Tembo-H, featuring Tembotrione 34.4% w/w SC, is a highly effective early post-emergence herbicide. It delivers powerful bleaching action to control a broad spectrum of grassy and broadleaf weeds in maize. Designed for professional use, it ensures unmatched crop safety and superior yield potential. Backed by Harishree Crop Science.',
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
      name: 'Tembotrione 34.4% w/w SC (Tembo-H)',
      description:
        'Buy Tembotrione 34.4% w/w SC (Tembo-H) — selective bleaching herbicide for comprehensive weed control in maize. Pricing and packs from Harishree Crop Science.',
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
        url: `${this.baseUrl}/assets/products/herbicide/tembotrione-34-4-w-w-sc.jpg`,
        caption: 'Tembotrione 34.4% w/w SC (Tembo-H) bottle'
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
        { '@type': 'ListItem', position: 3, name: 'Tembotrione 34.4% w/w SC', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Tembotrione 34.4% w/w SC',
      alternateName: ['Tembotrione 34.4% w/w SC', 'Tembo-H herbicide', 'Tembo-H', 'Tembotrione herbicide maize'],
      description:
        'Tembo-H, featuring Tembotrione 34.4% w/w SC, is an advanced early post-emergence herbicide. It provides exceptional broad-spectrum control over grassy and broadleaf weeds in maize through its powerful bleaching action. Highly selective and crop-safe, it ensures clean fields and high yields. Backed by Harishree Crop Science.',
      image: [`${this.baseUrl}/assets/products/herbicide/tembotrione-34-4-w-w-sc.jpg`],
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
      sku: 'TEMBO-344SC',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '47'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Organization', name: 'Harishree Field Team' },
          reviewBody: 'Outstanding bleaching action on difficult broadleaf weeds in maize with total crop safety at 20 ml per pump dosage.',
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
      name: 'Tembotrione 34.4% w/w SC (Tembo-H) pack sizes',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Tembotrione 34.4% w/w SC (Tembo-H) ${p.volume}`,
          image: `${this.baseUrl}/assets/products/herbicide/tembotrione-34-4-w-w-sc.jpg`,
          sku: p.sku,
          description: `Tembotrione 34.4% w/w SC (Tembo-H) ${p.volume} pack from Harishree Crop Science - ${p.price} INR`,
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
            ratingValue: '4.8',
            reviewCount: '47'
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
      name: 'How to mix and apply Tembotrione 34.4% w/w SC (Tembo-H)',
      description: 'Safe mixing and application steps for Tembotrione 34.4% w/w SC herbicide for maize crops.',
      image: `${this.baseUrl}/assets/products/herbicide/tembotrione-34-4-w-w-sc.jpg`,
      totalTime: 'PT20M',
      supply: [{ '@type': 'HowToSupply', name: 'Tembotrione 34.4% w/w SC (Tembo-H)' }, { '@type': 'HowToSupply', name: 'Clean water' }],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer' },
        { '@type': 'HowToTool', name: 'Measuring cylinder' },
        { '@type': 'HowToTool', name: 'PPE (gloves, eyewear)' }
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
