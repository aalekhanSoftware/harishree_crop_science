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

const META_KEY = makeStateKey<boolean>('PENDIMETHALIN_30_EC_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('PENDIMETHALIN_HOWTO_SCHEMA');

@Component({
  selector: 'app-pendimethalin-30-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pendimethalin-30-ec.component.html',
  styleUrl: './pendimethalin-30-ec.component.scss'
})
export class Pendimethalin30EcComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/pendimethalin-30-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  product = {
    name: 'Paddy',
    subtitle: 'Pendimethalin 30% EC',
    image: 'assets/products/herbicide/pendimethalin-30-ec.jpg',
    description: 'Premium pre-emergence herbicide for broad-spectrum control of grassy and broadleaf weeds in multiple crops.'
  };

  packSizes = [
    { volume: '500 ml', price: 177, featured: false, sku: 'PADDY-500ML' },
    { volume: '1 liter', price: 330, featured: true, sku: 'PADDY-1L' },
    { volume: '5 liter', price: 1617, featured: false, sku: 'PADDY-5L' }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum weed control',
      description: 'Effective pre-emergence control of a wide range of annual grasses and broadleaf weeds.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Excellent crop safety',
      description: 'Highly selective formulation ensuring maximum safety for crops like paddy, wheat, and soybeans.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual activity',
      description: 'Provides extended weed control, preventing weed emergence for weeks after application.',
      icon: 'fas fa-stopwatch'
    },
    {
      title: 'Versatile application',
      description: 'Suitable for a variety of soil types and agricultural farming practices.',
      icon: 'fas fa-seedling'
    }
  ];

  targetWeeds = [
    { name: 'Echinochloa spp. (Barnyard grass)', description: 'Strong pre-emergence control in paddy and other crops.' },
    { name: 'Phalaris minor', description: 'Effective suppression of troublesome Phalaris minor in wheat.' },
    { name: 'Amaranthus spp. (Pigweed)', description: 'Reliable control of various broadleaf weeds including pigweed.' },
    { name: 'Digitaria spp. (Crabgrass)', description: 'Excellent control of emerging crabgrass seedlings.' },
    { name: 'Eleusine indica (Goosegrass)', description: 'Dependable control of goosegrass in crop fields.' },
    { name: 'Portulaca oleracea (Purslane)', description: 'Prevents emergence of purslane and other competing weeds.' }
  ];

  applications = [
    {
      title: 'Paddy & Wheat',
      description: 'Pre-emergence application for comprehensive weed management with exceptional crop safety.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Soybean & Cotton',
      description: 'Reliable weed control ensuring a weed-free environment during early crop growth stages.',
      icon: 'fas fa-seedling'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand', value: 'Paddy' },
      { label: 'Company', value: 'Harishree Crop Science' },
      { label: 'Active ingredient', value: 'Pendimethalin 30% EC' },
      { label: 'Formulation', value: 'Emulsifiable Concentrate (EC)' },
      { label: 'Mode of action', value: 'Inhibitor of microtubule assembly (Cell division inhibitor)' },
      { label: 'Shelf life', value: 'Store in original container; use within printed shelf life' }
    ],
    packs: [
      { label: 'Pack sizes', value: '500 ml, 1 liter, 5 liter' },
      { label: 'Recommended dose', value: '50 ml per 16-20 litre pump load' },
      { label: 'Application timing', value: 'Pre-emergence (within 0-3 days of sowing/transplanting)' }
    ]
  };

  modeOfAction = [
    {
      title: 'Root & Shoot Absorption',
      description: 'Pendimethalin 30% EC is absorbed primarily by the roots and emerging shoots of germinating weeds.'
    },
    {
      title: 'Microtubule Inhibition',
      description: 'It acts by inhibiting microtubule assembly, which is essential for cell division and cell elongation.'
    },
    {
      title: 'Growth Arrest',
      description: 'Weed seedlings fail to emerge or die shortly after emergence due to halted root and shoot growth.'
    },
    {
      title: 'Residual Protection',
      description: 'Forms a protective chemical barrier in the top soil layer, preventing new weed flushes for an extended period.'
    }
  ];

  safetyItems = [
    { title: 'Personal protection', text: 'Wear protective clothing, gloves, and eye protection during mixing and application.' },
    { title: 'Soil moisture', text: 'For best results, apply when adequate soil moisture is present to ensure proper herbicide activation.' },
    { title: 'Timing', text: 'Apply as a pre-emergence treatment before weeds emerge, ideally within 3 days of planting.' },
    { title: 'Mixing', text: 'Add Paddy (Pendimethalin 30% EC) to clean water with proper agitation to ensure uniform emulsion.' },
    { title: 'Storage', text: 'Store in the tightly sealed original container in a cool, dry place away from children.' },
    { title: 'Environmental care', text: 'Avoid spray drift to non-target areas and water bodies.' }
  ];

  performanceHighlights = [
    { label: 'Clean Start', value: 'Ensures a weed-free environment during the critical early growth stages of crops.' },
    { label: 'Reliable Control', value: 'Consistent performance across different soil types and weather conditions.' },
    { label: 'Value packaging', value: 'Available in sizes from 500 ml to 5 liter for various farming needs.' },
    { label: 'Trusted Quality', value: 'Dependable pre-emergence protection trusted by farmers across India.' }
  ];

  faqs = [
    {
      question: 'What is Paddy (Pendimethalin 30% EC) used for?',
      answer: '<strong>Paddy</strong> is a premium pre-emergence herbicide containing <strong>Pendimethalin 30% EC</strong>. It is widely used for the control of both grassy and broadleaf weeds in various crops including paddy, wheat, soybean, and cotton.',
      answerPlain: 'Paddy is a premium pre-emergence herbicide containing Pendimethalin 30% EC. It is widely used for the control of both grassy and broadleaf weeds in various crops including paddy, wheat, soybean, and cotton.'
    },
    {
      question: 'What is the recommended dose for Pendimethalin 30% EC?',
      answer: 'The recommended dose for <strong>Pendimethalin 30% EC</strong> is <strong>50 ml per 16-20 litre pump</strong>. It should be applied as a pre-emergence spray, uniformly over the soil surface.',
      answerPlain: 'The recommended dose for Pendimethalin 30% EC is 50 ml per 16-20 litre pump. It should be applied as a pre-emergence spray, uniformly over the soil surface.'
    },
    {
      question: 'What are the pack sizes and prices for Pendimethalin 30% EC?',
      answer: '<strong>Paddy (Pendimethalin 30% EC)</strong> is available in multiple pack sizes: <strong>500 ml </strong>, <strong>1 liter </strong>, and <strong>5 liter </strong>. The main item reference price is <strong>₹250</strong>.',
      answerPlain: 'Paddy (Pendimethalin 30% EC) is available in multiple pack sizes: 500 ml, 1 liter, and 5 liter. The main item reference price is ₹250.'
    },
    {
      question: 'How does Pendimethalin 30% EC work?',
      answer: '<strong>Pendimethalin 30% EC</strong> works by inhibiting cell division and cell elongation in germinating weeds. It forms a chemical barrier in the soil, preventing weed seedlings from emerging and establishing themselves.',
      answerPlain: 'Pendimethalin 30% EC works by inhibiting cell division and cell elongation in germinating weeds. It forms a chemical barrier in the soil, preventing weed seedlings from emerging and establishing themselves.'
    },
    {
      question: 'Is Pendimethalin 30% EC safe for my crops?',
      answer: 'Yes, <strong>Paddy (Pendimethalin 30% EC)</strong> is highly selective and provides excellent crop safety when applied correctly as a pre-emergence herbicide in recommended crops.',
      answerPlain: 'Yes, Paddy (Pendimethalin 30% EC) is highly selective and provides excellent crop safety when applied correctly as a pre-emergence herbicide in recommended crops.'
    },
    {
      question: 'Where can I buy Pendimethalin 30% EC in India?',
      answer: 'You can contact <strong>Harishree Crop Science</strong> directly through our website or reach out to our authorized distributor network across India for genuine Paddy (Pendimethalin 30% EC) availability.',
      answerPlain: 'You can contact Harishree Crop Science directly through our website or reach out to our authorized distributor network across India for genuine Paddy (Pendimethalin 30% EC) availability.'
    }
  ];

  testimonials = [
    { text: 'Paddy (Pendimethalin 30% EC) gave my crop a completely clean start. There were absolutely no weeds during the first crucial month of growth. Highly recommended for pre-emergence control.' },
    { text: 'The 50 ml per pump dosage is very easy to manage. The 5-liter pack from Harishree Crop Science is economical and the results are unmatched compared to other products in the market.' },
    { text: 'We rely on Pendimethalin 30% EC every season. We get clean fields and higher yields without worrying about early weed competition hindering our crop development.' }
  ];

  howToSteps = [
    { name: 'Prepare Field', text: 'Ensure the field is well-prepared with a fine tilth and adequate soil moisture.' },
    { name: 'Wear PPE', text: 'Put on gloves, protective clothing, and eyewear before handling Pendimethalin 30% EC.' },
    { name: 'Measure water', text: 'Fill the reliable knapsack spray tank halfway with clean water.' },
    { name: 'Add Pendimethalin', text: 'Carefully measure 50 ml of Pendimethalin 30% EC per 16-20 L pump and add it to the tank.' },
    { name: 'Complete mixing', text: 'Top up the remaining water and agitate well for a uniform emulsion.' },
    { name: 'Application', text: 'Spray uniformly over the soil surface within 0-3 days of sowing/transplanting.' }
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

    this.title.setTitle('Pendimethalin 30% EC | Paddy Herbicide | Harishree Crop Science');

    const desc =
      'Buy Pendimethalin 30% EC (Paddy) selective pre-emergence herbicide for comprehensive weed control in paddy, wheat and other crops. Dose 50 ml/pump, packs 500ml to 5L. Harishree Crop Science.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Pendimethalin 30% EC, Paddy, Pendimethalin herbicide, paddy herbicide, pre-emergence herbicide, weed control in paddy, Harishree Crop Science, cell division inhibitor, selective herbicide'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Pendimethalin 30% EC | Paddy Herbicide | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/herbicide/pendimethalin-30-ec.jpg` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Pendimethalin 30% EC | Paddy Herbicide | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/herbicide/pendimethalin-30-ec.jpg` }
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
          name: 'Pendimethalin 30% EC (Paddy)',
          description: 'Paddy, featuring Pendimethalin 30% EC, is a highly effective pre-emergence herbicide. It delivers powerful weed prevention to control a broad spectrum of grassy and broadleaf weeds. Designed for professional use, it ensures unmatched crop safety and superior yield potential. Backed by Harishree Crop Science.',
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
      name: 'Pendimethalin 30% EC (Paddy)',
      description:
        'Buy Pendimethalin 30% EC (Paddy) — selective pre-emergence herbicide for comprehensive weed control in paddy and wheat. Pricing and packs from Harishree Crop Science.',
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
        url: `${this.baseUrl}/assets/products/herbicide/pendimethalin-30-ec.jpg`,
        caption: 'Pendimethalin 30% EC (Paddy) bottle'
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
        { '@type': 'ListItem', position: 3, name: 'Pendimethalin 30% EC', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Pendimethalin 30% EC',
      alternateName: ['Pendimethalin 30% EC', 'Paddy herbicide', 'Paddy', 'Pendimethalin pre emergence'],
      description:
        'Paddy, featuring Pendimethalin 30% EC, is an advanced pre-emergence herbicide. It provides exceptional broad-spectrum control over grassy and broadleaf weeds in paddy, wheat and other crops through its cell division inhibition action. Highly selective and crop-safe, it ensures clean fields and high yields. Backed by Harishree Crop Science.',
      image: [`${this.baseUrl}/assets/products/herbicide/pendimethalin-30-ec.jpg`],
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
      sku: 'PADDY-30EC',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '47'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Organization', name: 'Harishree Field Team' },
          reviewBody: 'Outstanding pre-emergence action on difficult weeds with total crop safety at 50 ml per pump dosage.',
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
      name: 'Pendimethalin 30% EC (Paddy) pack sizes',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Pendimethalin 30% EC (Paddy) ${p.volume}`,
          image: `${this.baseUrl}/assets/products/herbicide/pendimethalin-30-ec.jpg`,
          sku: p.sku,
          description: `Pendimethalin 30% EC (Paddy) ${p.volume} pack from Harishree Crop Science - ${p.price} INR`,
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
      name: 'How to mix and apply Pendimethalin 30% EC (Paddy)',
      description: 'Safe mixing and application steps for Pendimethalin 30% EC herbicide.',
      image: `${this.baseUrl}/assets/products/herbicide/pendimethalin-30-ec.jpg`,
      totalTime: 'PT20M',
      supply: [{ '@type': 'HowToSupply', name: 'Pendimethalin 30% EC (Paddy)' }, { '@type': 'HowToSupply', name: 'Clean water' }],
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
