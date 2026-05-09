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

const META_KEY = makeStateKey<boolean>('QUIZALOFOP_10_EC_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('QUIZALOFOP_HOWTO_SCHEMA');

@Component({
  selector: 'app-quizalofop-ethyl-10-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quizalofop-ethyl-10-ec.component.html',
  styleUrl: './quizalofop-ethyl-10-ec.component.scss'
})
export class QuizalofopEthyl10EcComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/quizalofop-ethyl-10-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  product = {
    name: 'T-10',
    subtitle: 'Quizalofop Ethyl 10% EC',
    image: 'assets/products/herbicide/quizalofop-ethyl-10-ec.jpg',
    description: 'Selective post-emergence herbicide for effective control of grassy weeds in broadleaf crops.'
  };

  packSizes = [
    { volume: '250 ml', price: 230, featured: false, sku: 'T10-250ML' },
    { volume: '500 ml', price: 443, featured: true, sku: 'T10-500ML' },
    { volume: '1 liter', price: 861, featured: false, sku: 'T10-1L' }
  ];

  keyBenefits = [
    {
      title: 'Selective grassy weed control',
      description: 'Excellent control of annual and perennial grasses while being safe to broadleaf crops when applied as directed.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic action',
      description: 'Absorbed through foliage and translocated to growing points, ensuring complete weed control including roots.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Rainfast formulation',
      description: 'EC formulation provides excellent rainfastness within hours of application for reliable field performance.',
      icon: 'fas fa-cloud-sun'
    },
    {
      title: 'Wide crop compatibility',
      description: 'Safe for use in major broadleaf crops including soybean, cotton, and various vegetable crops.',
      icon: 'fas fa-check-circle'
    }
  ];

  targetWeeds = [
    { name: 'Echinochloa spp. (Barnyard grass)', description: 'Effective control of barnyard grass species in rice and other crops.' },
    { name: 'Avena spp. (Wild oats)', description: 'Strong activity against wild oats in wheat, barley, and other cereals.' },
    { name: 'Setaria spp. (Foxtail)', description: 'Comprehensive control of various foxtail species affecting crop yields.' },
    { name: 'Lolium spp. (Ryegrass)', description: 'Effective management of ryegrass including herbicide-resistant populations.' },
    { name: 'Phalaris spp. (Canary grass)', description: 'Reliable control of canary grass in various cropping systems.' },
    { name: 'Digitaria spp. (Crabgrass)', description: 'Broad-spectrum activity against crabgrass species in multiple crops.' }
  ];

  applications = [
    {
      title: 'Soybean',
      description: 'Post-emergence application for grassy weed control with excellent crop safety.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cotton',
      description: 'Selective control of grasses in cotton without affecting crop development.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Groundnut',
      description: 'Effective grass management in groundnut with optimal timing for best results.',
      icon: 'fas fa-circle-dot'
    },
    {
      title: 'Sunflower',
      description: 'Safe application for controlling grasses in sunflower crops.',
      icon: 'fas fa-sun'
    },
    {
      title: 'Vegetable crops',
      description: 'Compatible with various vegetable crops for selective grass control.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Pulses',
      description: 'Suitable for pulse crops where selective grass control is essential.',
      icon: 'fas fa-leaf'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand', value: 'Harishree Crop Science' },
      { label: 'Product name', value: 'Quizalofop Ethyl 10% EC (T-10)' },
      { label: 'Active ingredient', value: 'Quizalofop Ethyl 10% EC' },
      { label: 'Formulation', value: 'Emulsifiable concentrate (EC)' },
      { label: 'Mode of action', value: 'Group A / HRAC 1 — ACCase inhibitor (systemic)' },
      { label: 'Shelf life', value: 'Use within shelf life printed on the pack; store sealed' }
    ],
    packs: [
      { label: 'Pack sizes', value: '250 ml, 500 ml, 1 liter — available through Harishree dealers' },
      { label: 'Recommended dose', value: '20-25 ml per 16-20 litre pump load (adjust to weed stage and crop growth)' },
      { label: 'Application timing', value: 'Post-emergence when grass weeds are 2-4 leaf stage' }
    ]
  };

  modeOfAction = [
    {
      title: 'Foliar absorption',
      description: 'Quizalofop Ethyl is rapidly absorbed by grass weed foliage after spray application.'
    },
    {
      title: 'ACCase inhibition',
      description: 'Inhibits acetyl-CoA carboxylase enzyme, disrupting fatty acid synthesis in grasses.'
    },
    {
      title: 'Systemic translocation',
      description: 'Moves throughout the plant including growing points and root systems for complete control.'
    },
    {
      title: 'Selective action',
      description: 'Grass-specific enzyme target ensures safety to broadleaf crops and dicots.'
    }
  ];

  safetyItems = [
    { title: 'Personal protection', text: 'Wear protective clothing, gloves, and eye protection during mixing and application.' },
    { title: 'Crop safety', text: 'Apply only to recommended crops at specified growth stages to avoid crop injury.' },
    { title: 'Timing', text: 'Apply when target grasses are actively growing and at susceptible growth stages.' },
    { title: 'Mixing', text: 'Add T-10 to water with proper agitation to ensure uniform emulsion formation.' },
    { title: 'Storage', text: 'Store in original container in cool, dry place away from food, feed, and children.' },
    { title: 'Environmental care', text: 'Avoid spray drift to non-target areas and follow buffer zone requirements.' }
  ];

  performanceHighlights = [
    { label: 'Fast knockdown', value: 'Visible weed stress within days of application.' },
    { label: 'Complete control', value: 'Systemic action ensures control of underground parts of perennial grasses.' },
    { label: 'Multiple pack options', value: '250 ml, 500 ml, and 1 liter packs for different farm sizes.' },
    { label: 'Field proven', value: 'Extensively tested across major cropping zones in India.' }
  ];

  faqs = [
    {
      question: 'What is T-10 Quizalofop Ethyl 10% EC used for?',
      answer: '<strong>T-10</strong> is a <strong>selective post-emergence herbicide</strong> containing Quizalofop Ethyl 10% EC for controlling annual and perennial grassy weeds in broadleaf crops. It provides excellent crop safety when applied as directed.',
      answerPlain: 'T-10 is a selective post-emergence herbicide containing Quizalofop Ethyl 10% EC for controlling annual and perennial grassy weeds in broadleaf crops. It provides excellent crop safety when applied as directed.'
    },
    {
      question: 'What is the recommended dose of T-10 Quizalofop Ethyl 10% EC?',
      answer: 'The recommended dose is <strong>20-25 ml per 16-20 litre pump</strong>. Apply when grass weeds are at 2-4 leaf stage for optimal control.',
      answerPlain: 'The recommended dose is 20-25 ml per 16-20 litre pump. Apply when grass weeds are at 2-4 leaf stage for optimal control.'
    },
    {
      question: 'What are T-10 Quizalofop Ethyl 10% EC prices and pack sizes?',
      answer: 'Available packs include <strong>250 ml </strong>, <strong>500 ml </strong>, and <strong>1 liter </strong>. Main item reference price: <strong>₹250</strong>.',
      answerPlain: 'Available packs include 250 ml, 500 ml, and 1 liter.'
    },
    {
      question: 'Is T-10 safe for all crops?',
      answer: '<strong>T-10</strong> is <strong>selective</strong> and safe for broadleaf crops like soybean, cotton, groundnut, and others when applied as directed. Avoid use in grass crops as it may cause injury.',
      answerPlain: 'T-10 is selective and safe for broadleaf crops like soybean, cotton, groundnut, and others when applied as directed. Avoid use in grass crops as it may cause injury.'
    },
    {
      question: 'How does T-10 Quizalofop Ethyl 10% EC work?',
      answer: 'T-10 contains <strong>Quizalofop Ethyl</strong> which inhibits the ACCase enzyme in grasses, disrupting fatty acid synthesis. This systemic action moves throughout the plant for complete control including roots.',
      answerPlain: 'T-10 contains Quizalofop Ethyl which inhibits the ACCase enzyme in grasses, disrupting fatty acid synthesis. This systemic action moves throughout the plant for complete control including roots.'
    },
    {
      question: 'Where can I buy T-10 Quizalofop Ethyl 10% EC in India?',
      answer: 'Contact <strong>Harishree Crop Science</strong> through our enquiry channels for distributor availability, pack sizes, and agronomic support for T-10 Quizalofop Ethyl 10% EC.',
      answerPlain: 'Contact Harishree Crop Science through our enquiry channels for distributor availability, pack sizes, and agronomic support for T-10 Quizalofop Ethyl 10% EC.'
    }
  ];

  testimonials = [
    { text: 'T-10 gave us excellent control of barnyard grass in soybean with no crop injury. Very selective and reliable product.' },
    { text: 'The 500 ml pack is perfect for our 5-acre cotton farm. Grass control is complete within 10 days of application.' },
    { text: 'We have been using T-10 for 3 seasons in groundnut. Consistent performance and good value for money compared to alternatives.' }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Put on gloves, protective clothing, and eye protection before handling the product.' },
    { name: 'Measure water', text: 'Fill the spray tank halfway with clean water.' },
    { name: 'Add T-10', text: 'Measure 20-25 ml per 16-20 L pump and add to the tank with proper agitation.' },
    { name: 'Complete filling', text: 'Fill remaining water and continue agitation for uniform emulsion.' },
    { name: 'Apply to weeds', text: 'Spray actively growing grass weeds at 2-4 leaf stage with uniform coverage.' },
    { name: 'Clean equipment', text: 'Triple-rinse sprayer and clean nozzles; dispose of rinsate safely.' }
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

    this.title.setTitle('Quizalofop Ethyl 10% EC Herbicide | T-10 | Harishree Crop Science');

    const desc =
      'Buy Quizalofop Ethyl 10% EC (T-10) selective herbicide for grassy weed control. Dose 20-25 ml per pump, packs 250ml-1L. Harishree Crop Science India.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Quizalofop Ethyl 10% EC, T-10, T-10 herbicide, Quizalofop Ethyl, selective herbicide, grassy weed control, post-emergence herbicide, ACCase inhibitor, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Quizalofop Ethyl 10% EC Herbicide | T-10 | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/herbicide/quizalofop-ethyl-10-ec.jpg` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Quizalofop Ethyl 10% EC Herbicide | T-10 | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/herbicide/quizalofop-ethyl-10-ec.jpg` }
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
          name: 'Quizalofop Ethyl 10% EC (T-10)',
          description: 'Quizalofop Ethyl 10% EC in a professional emulsifiable concentrate for selective grassy weed control. Absorbed through foliage and translocated to growing points, it provides excellent control of annual and perennial grasses while maintaining safety to broadleaf crops when used as directed. Ideal for post-emergence applications in soybean, cotton, groundnut, and other broadleaf crops - backed by Harishree Crop Science quality and agronomic support.',
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
      name: 'Quizalofop Ethyl 10% EC (T-10)',
      description:
        'Buy Quizalofop Ethyl 10% EC (T-10) — selective herbicide for grassy weed control. Pricing and packs from Harishree Crop Science.',
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
        url: `${this.baseUrl}/assets/products/herbicide/quizalofop-ethyl-10-ec.jpg`,
        caption: 'Quizalofop Ethyl 10% EC (T-10) bottle'
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
        { '@type': 'ListItem', position: 3, name: 'Quizalofop Ethyl 10% EC (T-10)', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Quizalofop Ethyl 10% EC',
      alternateName: ['Quizalofop Ethyl 10% EC', 'T-10 herbicide', 'T-10 Quizalofop', 'Quizalofop Ethyl herbicide'],
      description:
        'Quizalofop Ethyl 10% EC in a professional emulsifiable concentrate for selective grassy weed control. Absorbed through foliage and translocated to growing points, it provides excellent control of annual and perennial grasses while maintaining safety to broadleaf crops when used as directed. Ideal for post-emergence applications in soybean, cotton, groundnut, and other broadleaf crops - backed by Harishree Crop Science quality and agronomic support.',
      image: [`${this.baseUrl}/assets/products/herbicide/quizalofop-ethyl-10-ec.jpg`],
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
      sku: 'T10-QUIZ10EC',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '31'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Organization', name: 'Harishree Field Team' },
          reviewBody: 'Excellent selective control of grassy weeds in broadleaf crops with complete safety to the crop when applied as directed.',
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
      name: 'Quizalofop Ethyl 10% EC (T-10) pack sizes',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Quizalofop Ethyl 10% EC (T-10) ${p.volume}`,
          image: `${this.baseUrl}/assets/products/herbicide/quizalofop-ethyl-10-ec.jpg`,
          sku: p.sku,
          description: `Quizalofop Ethyl 10% EC (T-10) ${p.volume} pack from Harishree Crop Science - ${p.price} INR`,
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
            reviewCount: '31'
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
      name: 'How to mix and apply Quizalofop Ethyl 10% EC (T-10)',
      description: 'Safe mixing and application steps for Quizalofop Ethyl 10% EC (T-10) herbicide.',
      image: `${this.baseUrl}/assets/products/herbicide/quizalofop-ethyl-10-ec.jpg`,
      totalTime: 'PT20M',
      supply: [{ '@type': 'HowToSupply', name: 'Quizalofop Ethyl 10% EC (T-10)' }, { '@type': 'HowToSupply', name: 'Clean water' }],
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
