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

const META_KEY = makeStateKey<boolean>('GLYPHOSATE_41_SL_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('GLYPHOSATE_HOWTO_SCHEMA');

@Component({
  selector: 'app-glyphosate-41-sl',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './glyphosate-41-sl.component.html',
  styleUrl: './glyphosate-41-sl.component.scss'
})
export class Glyphosate41SlComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/glyphosate-41-sl';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  product = {
    name: 'H ROUND',
    subtitle: 'Glyphosate 41% SL',
    image: 'assets/products/herbicide/glyphosate-41-sl.jpg',
    description: 'Professional non-selective systemic herbicide for broad-spectrum weed and vegetation control.'
  };

  packSizes = [
    { volume: '500 ml', price: 177, featured: false, sku: 'HROUND-500ML' },
    { volume: '1 litre', price: 330, featured: true, sku: 'HROUND-1L' },
    { volume: '5 litre', price: 1617, featured: false, sku: 'HROUND-5L' },
  ];

  keyBenefits = [
    {
      title: 'Systemic translocation',
      description: 'Absorbed through foliage and moved through the plant to roots and rhizomes for thorough control of tough perennial weeds.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Broad-spectrum vegetation control',
      description: 'Effective on a wide range of annual and perennial grasses and broadleaf weeds when applied as directed.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Soluble liquid formulation',
      description: 'Easy to measure, mix, and spray with standard knapsack and field equipment for consistent coverage.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Field-proven surfactant system',
      description: 'Quality SL base supports leaf uptake and rainfastness when label directions are followed.',
      icon: 'fas fa-cloud-sun'
    }
  ];

  targetWeeds = [
    { name: 'Annual grasses', description: 'Controls many annual grass weeds in fallow, bunds, and directed spray situations.' },
    { name: 'Broadleaf weeds', description: 'Helps manage a wide range of broadleaf species competing with crops or in non-crop areas.' },
    { name: 'Perennial grasses & sedges', description: 'Systemic activity supports control of difficult perennial grasses when regrowth is adequately covered.' },
    { name: 'Problem brush & hard weeds', description: 'Useful in programs targeting woody brush and stubborn stands where label rates and timing apply.' },
    { name: 'Volunteer & ratoon growth', description: 'Suitable for cleanup of unwanted vegetation in approved non-selective use patterns.' },
    { name: 'Weed escapes before planting', description: 'Supports burndown and land preparation when used as part of your weed management plan.' }
  ];

  applications = [
    {
      title: 'Pre-plant burndown',
      description: 'Prepare clean seedbeds by controlling existing vegetation before sowing or transplanting, per local label guidance.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Orchards & plantations',
      description: 'Directed sprays along tree basins and inter-rows to manage weeds without contacting desirable bark or foliage.',
      icon: 'fas fa-tree'
    },
    {
      title: 'Fallow & bund management',
      description: 'Maintain firebreaks, bunds, and non-cropped strips where total vegetation control is required.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Non-crop areas',
      description: 'Paths, farmyards, and industrial perimeters where labelled non-crop uses are permitted.',
      icon: 'fas fa-road'
    },
    {
      title: 'Fence lines & water channels',
      description: 'Spot or strip applications to reduce weed competition along infrastructure—mind drift and buffer zones.',
      icon: 'fas fa-water'
    },
    {
      title: 'Harvest aid programs',
      description: 'Where permitted, supports uniform dry-down; always follow crop-specific pre-harvest intervals.',
      icon: 'fas fa-check-double'
    }
  ];

  technicalSpecs = {
    productInfo: [
      { label: 'Brand', value: 'Harishree Crop Science' },
      { label: 'Active ingredient', value: 'Glyphosate 41% SL (isopropylamine salt)' },
      { label: 'Formulation', value: 'Soluble liquid (SL)' },
      { label: 'Mode of action', value: 'Group G / HRAC 9 — EPSP synthase inhibitor (systemic)' },
      { label: 'Shelf life', value: 'Use within shelf life printed on the pack; store sealed' }
    ],
    packs: [
      { label: 'Pack sizes', value: '500 ml, 1 L, 5 L, 20 L — available through Harishree dealers' },
      { label: 'Recommended dose (knapsack)', value: '150-200 ml per 16-20 litre pump load (adjust to weed stage and water volume as directed)' },
      { label: 'Spray quality', value: 'Medium to coarse droplets; avoid drift to desirable plants' }
    ]
  };

  modeOfAction = [
    {
      title: 'Foliar uptake',
      description: 'The solution is retained on leaf surfaces and absorbed into living green tissue for movement through the plant.'
    },
    {
      title: 'Translocation',
      description: 'Glyphosate moves with assimilates to growing points, including roots and underground storage organs on susceptible species.'
    },
    {
      title: 'EPSP synthase inhibition',
      description: 'Disrupts aromatic amino acid biosynthesis, leading to gradual yellowing and collapse of treated weeds over several days.'
    },
    {
      title: 'Complete burn-down',
      description: 'Susceptible weeds stop competing with crops or clear the area for replanting once degradation aligns with your program.'
    }
  ];

  safetyItems = [
    { title: 'Personal protection', text: 'Wear full-length clothing, chemical-resistant gloves, and eye protection. Use a face shield or mist mask if drift is possible.' },
    { title: 'Non-selective hazard', text: 'H ROUND kills green plants it contacts. Shield desirable crops and ornamentals from spray drift.' },
    { title: 'Mixing order', text: 'Half-fill the tank with clean water, add product as directed, agitate, then top up. Rinse measuring tools safely.' },
    { title: 'Storage', text: 'Keep the original container closed, away from food, feed, and children. Store in a cool, dry, locked area.' },
    { title: 'Disposal', text: 'Triple-rinse empties; dispose of rinsate and containers per local regulations.' },
    { title: 'Environmental care', text: 'Avoid spray near water bodies unless permitted; respect label buffer distances.' }
  ];

  performanceHighlights = [
    { label: 'Systemic program fit', value: 'Pairs with tillage and rotation for durable weed management.' },
    { label: 'Flexible packs', value: 'From 500 ml to 20 L for farms of every scale.' },
    { label: 'Dealer network', value: 'Supply and guidance through authorized Harishree partners.' },
    { label: 'Support', value: 'Harishree agronomy team helps you plan safe, effective applications.' }
  ];

  faqs = [
    {
      question: 'What is H ROUND Glyphosate 41% SL used for?',
      answer: '<strong>H ROUND</strong> is a <strong>non-selective systemic herbicide</strong> for controlling many annual and perennial weeds and unwanted vegetation in approved burndown, directed, and non-crop uses. Always read and follow the product label and local regulations.',
      answerPlain: 'H ROUND is a non-selective systemic herbicide for controlling many annual and perennial weeds and unwanted vegetation in approved burndown, directed, and non-crop uses. Always read and follow the product label and local regulations.'
    },
    {
      question: 'How much H ROUND should I mix per pump?',
      answer: 'For typical knapsack applications, use <strong>150-200 ml per 16-20 litre pump</strong> of spray solution unless your agronomist recommends a different rate for weed size and water volume.',
      answerPlain: 'For typical knapsack applications, use 150-200 ml per 16-20 litre pump of spray solution unless your agronomist recommends a different rate for weed size and water volume.'
    },
    {
      question: 'Is H ROUND safe for all crops?',
      answer: 'Glyphosate is <strong>non-selective</strong>: it can injure any green plant it contacts. Use directed sprays, shields, or pre-plant timings to protect crops. Never spray over the top of desirable vegetation unless the label explicitly allows it for that crop.',
      answerPlain: 'Glyphosate is non-selective: it can injure any green plant it contacts. Use directed sprays, shields, or pre-plant timings to protect crops.'
    },
    {
      question: 'How does H ROUND compare with contact herbicides?',
      answer: 'Contact herbicides mainly burn foliage. <strong>H ROUND</strong> moves systemically in susceptible weeds, improving control of perennials with strong root systems when coverage is good and weeds are actively growing.',
      answerPlain: 'Contact herbicides mainly burn foliage. H ROUND moves systemically in susceptible weeds, improving control of perennials with strong root systems when coverage is good and weeds are actively growing.'
    },
    {
      question: 'Where can I buy H ROUND in India?',
      answer: 'Contact <strong>Harishree Crop Science</strong> through our enquiry channels for distributor availability, pack sizes, and agronomic support.',
      answerPlain: 'Contact Harishree Crop Science through our enquiry channels for distributor availability, pack sizes, and agronomic support.'
    }
  ];

  testimonials = [
    { text: 'We use H ROUND for orchard basins and bunds. Clean fields with one well-timed spray and no surprise drift when we follow wind guidelines.' },
    { text: 'The 1 L pack suits our vegetable rotation—burndown before ploughing saves us a cultivation pass.' },
    { text: 'Harishree support helped us calibrate knapsack volume so 150-200 ml per tank works out consistently across the farm.' }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Put on gloves, long sleeves, eye protection, and sturdy footwear before opening the container.' },
    { name: 'Measure water', text: 'Fill the spray tank halfway with clean water.' },
    { name: 'Add H ROUND', text: 'Measure 150-200 ml per 16-20 L load (or labelled rate) and pour into the tank.' },
    { name: 'Agitate', text: 'Agitate to disperse the product, then fill to final volume.' },
    { name: 'Spray', text: 'Apply to actively growing weeds with medium-coarse nozzles; avoid drift to desirable plants.' },
    { name: 'Rinse equipment', text: 'Triple-rinse the tank and clean nozzles; dispose of rinsate safely.' }
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

    this.title.setTitle('Glyphosate 41% SL Herbicide | H ROUND | Harishree Crop Science');

    const desc =
      'Glyphosate 41% SL (H ROUND) systemic herbicide for burndown and weed control. Packs 500 ml-20 L, dose 150-200 ml per pump. Buy through Harishree Crop Science India.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Glyphosate 41% SL, H ROUND, H ROUND herbicide, glyphosate SL, non-selective herbicide, systemic weed killer, burndown herbicide India, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: 'Glyphosate 41% SL Herbicide | H ROUND | Harishree Crop Science' },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: `${this.baseUrl}/assets/products/herbicide/glyphosate-41-sl.jpg` },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Glyphosate 41% SL Herbicide | H ROUND | Harishree Crop Science' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: `${this.baseUrl}/assets/products/herbicide/glyphosate-41-sl.jpg` }
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
      // '@id': `${this.baseUrl}/#localbusiness`,
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
          name: 'Glyphosate 41% SL (H ROUND)',
          description: 'Glyphosate 41% SL in a professional soluble liquid for burndown and vegetation management. Absorbed through green tissue and translocated through the plant, it supports control of annual and perennial weeds when used as directed. Ideal for pre-plant preparation, directed sprays, and approved non-crop programs - backed by Harishree Crop Science quality and agronomic support.',
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
      name: 'Glyphosate 41% SL (H ROUND)',
      description:
        'Buy H ROUND Glyphosate 41% SL — systemic non-selective herbicide for weed control. Pricing and packs from Harishree Crop Science.',
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
        url: `${this.baseUrl}/assets/products/herbicide/glyphosate-41-sl.jpg`,
        caption: 'Glyphosate 41% SL (H ROUND) bottle'
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
        { '@type': 'ListItem', position: 3, name: 'Glyphosate 41% SL (H ROUND)', item: this.pageUrl }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Glyphosate 41% SL',
      alternateName: ['Glyphosate 41% SL', 'H ROUND herbicide', 'Round herbicide Harishree'],
      description:
        'Glyphosate 41% SL in a professional soluble liquid for burndown and vegetation management. Absorbed through green tissue and translocated through the plant, it supports control of annual and perennial weeds when used as directed. Ideal for pre-plant preparation, directed sprays, and approved non-crop programs - backed by Harishree Crop Science quality and agronomic support.',
      image: [`${this.baseUrl}/assets/products/herbicide/glyphosate-41-sl.jpg`],
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
      sku: 'HROUND-GLY41',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '24'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Organization', name: 'Harishree Field Team' },
          reviewBody: 'Reliable broad-spectrum weed control with good systemic movement when used as directed.',
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
      name: 'H ROUND Glyphosate 41% SL pack sizes',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `H ROUND ${p.volume}`,
          image: `${this.baseUrl}/assets/products/herbicide/glyphosate-41-sl.jpg`,
          sku: p.sku,
          // price: p.price.toString(),
          // priceCurrency: 'INR',
          // availability: 'https://schema.org/InStock',
          description: `H ROUND ${p.volume} pack of Glyphosate 41% SL herbicide from Harishree Crop Science - ${p.price} INR`,
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
            ratingValue: '5',
            reviewCount: '24'
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
      name: 'How to mix and apply H ROUND Glyphosate 41% SL',
      description: 'Safe knapsack mixing and application steps for H ROUND herbicide.',
      image: `${this.baseUrl}/assets/products/herbicide/glyphosate-41-sl.jpg`,
      totalTime: 'PT20M',
      supply: [{ '@type': 'HowToSupply', name: 'H ROUND Glyphosate 41% SL' }, { '@type': 'HowToSupply', name: 'Clean water' }],
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
