import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'DR_ROOT_HUMIC_AMINO_FULVIC_PGR';
const INDICATIVE_LIST_PRICE_INR = 224;

@Component({
  selector: 'app-dr-root-humic-amino-fulvic-vitamin-organic-carbon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dr-root-humic-amino-fulvic-vitamin-organic-carbon.component.html',
  styleUrl: './dr-root-humic-amino-fulvic-vitamin-organic-carbon.component.scss'
})
export class DrRootHumicAminoFulvicVitaminOrganicCarbonComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/dr-root-humic-amino-fulvic-vitamin-organic-carbon';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/PGR/dr-root.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon';
  brandName = 'DR. ROOT';

  featuredSnippetAnswer =
    'DR. ROOT (Humic Acid + Amino Acid + Fulvic Acid + Vitamin C & E + Organic Carbon) is a premium plant growth regulator and root growth promoter by Harishree Crop Science. It strengthens root development, improves nutrient uptake, boosts soil microbial activity, and enhances crop vigour and yield in cotton, groundnut, wheat, paddy, soybean, chilli, tomato, onion, cumin, and fruits & vegetables. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '12.5 gm', price: 224, featured: true, sku: 'DR-ROOT-12-5GM' }
  ];

  quickHighlights = [
    {
      title: 'Multi-nutrient bio formulation',
      description:
        'DR. ROOT blends humic acid, amino acid, fulvic acid, vitamin C & E, and organic carbon into one plant growth regulator for complete root-zone nutrition.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Strong root development',
      description:
        'Stimulates root initiation, elongation, and branching to build a deep, dense root system that anchors the crop and explores more soil volume.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better nutrient uptake',
      description:
        'Fulvic acid chelates nutrients and carries them into roots, improving the efficiency of applied fertilizers and native soil nutrients.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Improved soil microbial activity',
      description:
        'Organic carbon and humic substances feed beneficial soil microbes, building a living rhizosphere around active roots.',
      icon: 'fas fa-bacteria'
    },
    {
      title: 'Enhanced stress tolerance',
      description:
        'Vitamin C & E act as antioxidants that help plants manage heat, drought, transplant shock, and other abiotic stress.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Better flowering and fruit set',
      description:
        'Amino acids support metabolism and energy supply during reproductive stages for stronger flowering and improved fruit setting.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Better crop vigour',
      description:
        'A healthier root system and balanced nutrition translate to greener, more uniform, and more vigorous crop stands.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Higher yield potential',
      description:
        'Stronger roots, better nutrient efficiency, and improved fruit set support higher yield potential across field and horticultural crops.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Improved soil fertility',
      description:
        'Regular use improves soil structure, water retention, and organic carbon status for long-term soil health.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Wide crop compatibility',
      description:
        'Suitable for cotton, groundnut, wheat, paddy, soybean, chilli, tomato, onion, cumin, and fruits & vegetables.',
      icon: 'fas fa-tractor'
    }
  ];

  whyChoose = [
    {
      title: 'Complete root-zone formula',
      description:
        'DR. ROOT combines humic, amino, fulvic, vitamin C & E, and organic carbon in one product — a complete root growth promoter instead of single-input tonics.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Visible root response',
      description:
        'Farmers see denser white root mass and stronger establishment after early-stage application, supporting better nutrient and water capture.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Reliable crop vigour',
      description:
        'Balanced bio-nutrition keeps crops green and uniform through stress periods, supporting better flowering, fruiting, and yield.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Better value for farmers',
      description:
        'A farmer-friendly 12.5 gm pack at Rs.224 and a simple 30 ml per pump dose deliver strong return on investment per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Strong root development',
      description:
        'Stimulates initiation, elongation, and branching of roots, creating a strong foundation for water and nutrient absorption.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better nutrient uptake',
      description:
        'Fulvic and humic substances chelate and transport nutrients into the plant, improving fertilizer use efficiency.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Improved soil microbial activity',
      description:
        'Organic carbon feeds beneficial microbes, building an active rhizosphere that supports healthy root function.',
      icon: 'fas fa-bacteria'
    },
    {
      title: 'Enhanced stress tolerance',
      description:
        'Vitamin C & E antioxidant action helps crops recover from transplant shock, heat, and drought stress.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Improved flowering and fruit setting',
      description:
        'Amino acid driven metabolism supports better flowering, pollination, and fruit retention during reproductive stages.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Better crop vigour',
      description:
        'Healthier roots and balanced nutrition produce greener, more uniform, and stronger growing crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Higher yield potential',
      description:
        'A robust root system and efficient nutrition support higher and more consistent yields across crops.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Improved soil fertility',
      description:
        'Builds soil organic carbon and structure over time, improving water retention and long-term land productivity.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Better water retention',
      description:
        'Humic substances improve soil aggregation and moisture holding around the root zone for steadier crop growth.',
      icon: 'fas fa-water'
    },
    {
      title: 'Improved crop quality',
      description:
        'Balanced bio-nutrition supports better size, colour, and uniformity of produce for improved market value.',
      icon: 'fas fa-award'
    },
    {
      title: 'Easy tank compatibility',
      description:
        'Mixes easily in water for foliar or soil application as part of a regular crop nutrition program.',
      icon: 'fas fa-prescription-bottle'
    },
    {
      title: 'Increased farm profitability',
      description:
        'Stronger roots and better nutrient efficiency help protect the investment in seed, fertilizer, and irrigation.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'DR. ROOT is a premium plant growth regulator and root growth promoter from HARISHREE CROP SCIENCE, formulated with Humic Acid + Amino Acid + Fulvic Acid + Vitamin C & E + Organic Carbon. Indian farmers increasingly rely on humic-fulvic-amino acid based bio-formulations to build strong root systems, improve nutrient uptake, and protect crops from abiotic stress. DR. ROOT brings these proven inputs together in one balanced product for healthier, more productive crops.';

  aboutOverview =
    'DR. ROOT mixes easily in water and is suited to both soil and foliar application at the recommended 30 ml per pump dose. It supports stronger root development, better soil microbial activity, improved flowering and fruit set, and higher yield potential across cotton, groundnut, wheat, paddy, soybean, chilli, tomato, onion, cumin, and fruits & vegetables. For dealers and agronomists, DR. ROOT is a dependable root development booster backed by Harishree quality control.';

  aboutHumic =
    'Humic acid improves soil structure and cation exchange capacity, helping the soil hold and release nutrients to the root zone. It stimulates root growth, enhances water retention, and creates a favourable environment for beneficial microbes.';

  aboutFulvic =
    'Fulvic acid is a small, highly active molecule that chelates nutrients and carries them across cell membranes into the plant. This nutrient-transport role improves the uptake and utilisation of both applied fertilizers and native soil nutrients.';

  aboutAmino =
    'Amino acids are the building blocks of proteins and enzymes. They support plant metabolism, provide ready energy during critical growth stages, and improve flowering, pollination, and recovery from stress.';

  aboutVitamins =
    'Vitamin C and Vitamin E act as antioxidants inside the plant, helping manage oxidative stress caused by heat, drought, salinity, and transplant shock — keeping crops resilient through challenging conditions.';

  aboutOrganicCarbon =
    'Organic carbon is the energy source for soil micro-organisms. By feeding the soil biology and improving soil aggregation, organic carbon enhances long-term soil fertility and supports a living, active rhizosphere around the roots.';

  aboutCombined =
    'Together these inputs deliver root-zone stimulation: stronger roots, efficient nutrient transport, active soil biology, and better stress tolerance. This balanced combination supports healthier crops, improved flowering and fruit set, and higher yield potential that single-input tonics struggle to match.';

  targetCropsTable = [
    { crop: 'Cotton', role: 'Root establishment, vigour, boll development' },
    { crop: 'Groundnut', role: 'Root and peg development, pod filling' },
    { crop: 'Wheat', role: 'Root mass, tillering, grain fill' },
    { crop: 'Paddy', role: 'Root growth, tillering, nutrient uptake' },
    { crop: 'Soybean', role: 'Root nodulation support, pod set' },
    { crop: 'Chilli', role: 'Root vigour, flowering, fruit set' },
    { crop: 'Tomato', role: 'Transplant recovery, root and fruit development' },
    { crop: 'Onion', role: 'Root development, bulb sizing' },
    { crop: 'Cumin', role: 'Root vigour, uniform growth' },
    { crop: 'Fruits & Vegetables', role: 'Root health, quality, yield' }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Builds a strong root system early and supports vigour and boll development through the season.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Groundnut',
      description:
        'Encourages root and peg development and supports better pod filling for improved yields.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Wheat & Paddy',
      description:
        'Promotes root mass, tillering, and nutrient uptake during vegetative and grain-fill stages.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Soybean',
      description:
        'Supports healthy root development and pod set for stronger, more uniform stands.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Chilli, Tomato & Onion',
      description:
        'Aids transplant recovery, root vigour, flowering, and fruit or bulb development in vegetables.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Cumin, Fruits & Vegetables',
      description:
        'Improves root health, crop quality, and yield across spice, fruit, and vegetable crops.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', purpose: 'Root development, crop vigour', dose: '30 ml/pump', timing: 'Early growth and as needed' },
    { crop: 'Groundnut', purpose: 'Root, peg, and pod development', dose: '30 ml/pump', timing: 'Vegetative to pegging stage' },
    { crop: 'Wheat / Paddy', purpose: 'Root mass and tillering', dose: '30 ml/pump', timing: 'Tillering stage onwards' },
    { crop: 'Soybean', purpose: 'Root growth and pod set', dose: '30 ml/pump', timing: 'Vegetative and flowering' },
    { crop: 'Chilli / Tomato / Onion', purpose: 'Transplant recovery, fruit/bulb set', dose: '30 ml/pump', timing: 'After transplant and flowering' },
    { crop: 'Fruits & Vegetables', purpose: 'Root health and quality', dose: '30 ml/pump', timing: 'Active growth stages' }
  ];

  applicationGuidelines = [
    { application: 'Application method', recommendation: 'Soil drench or foliar spray' },
    { application: 'Dose', recommendation: '30 ml per pump' },
    { application: 'Timing', recommendation: 'Early growth and active stages' },
    { application: 'Repeat', recommendation: 'As per crop stage and advisory' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'DR. ROOT' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Product type', value: 'Plant Growth Regulator (PGR)' },
      { label: 'Composition', value: 'Humic Acid + Amino Acid + Fulvic Acid + Vitamin C & E + Organic Carbon' },
      { label: 'Action type', value: 'Root growth promoter and crop tonic' },
      { label: 'Key role', value: 'Root development, nutrient uptake, stress tolerance' },
      { label: 'Target crops', value: 'Cotton, groundnut, wheat, paddy, soybean, chilli, tomato, onion, cumin, fruits & vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack size 12.5 gm' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer' },
      { label: 'Application method', value: 'Soil application or foliar spray' },
      { label: 'Application stage', value: 'Early growth and active crop stages' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'DR. ROOT' },
    { label: 'Brand / Trade Name', value: 'DR. ROOT' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Composition', value: 'Humic Acid + Amino Acid + Fulvic Acid + Vitamin C & E + Organic Carbon' },
    { label: 'Product Type', value: 'Plant Growth Regulator (PGR)' },
    { label: 'Action Type', value: 'Root growth promoter / plant tonic' },
    { label: 'Key Benefits', value: 'Root development, nutrient uptake, stress tolerance, yield' },
    { label: 'Target Crops', value: 'Cotton, groundnut, wheat, paddy, soybean, chilli, tomato, onion, cumin, fruits & vegetables' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Soil application or foliar spray' },
    { label: 'Application Stage', value: 'Early growth and active crop stages' },
    { label: 'Pack Size', value: '12.5 gm' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or applying DR. ROOT.'
    },
    {
      title: 'Wear protective equipment',
      text: 'Use gloves and basic protective clothing when handling the product or preparing the spray mix.'
    },
    {
      title: 'Avoid spraying during strong winds',
      text: 'Spray in calm morning or evening hours to ensure uniform application and avoid drift.'
    },
    {
      title: 'Keep away from children',
      text: 'Store in the original sealed container away from food, feed, seed, and out of reach of children and animals.'
    },
    {
      title: 'Avoid contamination of water bodies',
      text: 'Do not let the product enter ponds, canals, or drinking water sources. Dispose of empty packs responsibly.'
    },
    {
      title: 'Store in a cool dry place',
      text: 'Keep sealed packs in a cool, dry, ventilated area away from direct sunlight.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Use 30 ml per pump as recommended. Over-dosing does not improve results.'
    }
  ];

  relatedProducts = [
    {
      name: 'Nutri Power Gold (Potassium Humate 98% + Organic Carbon 2%)',
      description: 'Premium potassium humate soil conditioner and root growth promoter for stronger crops.',
      route: '/products/potassium-humate-98-organic-carbon-2-nutri-power-gold',
      image: 'assets/products/PGR/potassium-humate-98.jpg',
      imageAlt: 'Nutri Power Gold Potassium Humate 98% by Harishree Crop Science'
    },
    {
      name: 'Humic 98% (Humic Acid 98%)',
      description: 'High-grade humic acid plant growth regulator and soil conditioner for root development.',
      route: '/products/humic-98-plant-growth-regulator',
      image: 'assets/products/PGR/potassium-humate-98.jpg',
      imageAlt: 'Humic 98% Humic Acid plant growth regulator by Harishree Crop Science'
    },
    {
      name: 'Bonus Plus (Plant Growth Promoter)',
      description: 'Professional plant growth promoter for stronger vegetative and reproductive development.',
      route: '/products',
      image: 'assets/products/PGR/bonus-plus.jpg',
      imageAlt: 'Bonus Plus plant growth promoter by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is DR. ROOT used for?',
      answer:
        '<strong>DR. ROOT</strong> (<strong>Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon</strong>) is a <strong>root growth promoter and plant growth regulator</strong> used to strengthen root development, improve nutrient uptake, boost soil microbial activity, and enhance crop vigour and yield across most field and horticultural crops.',
      answerPlain:
        'DR. ROOT (Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon) is a root growth promoter and plant growth regulator used to strengthen root development, improve nutrient uptake, boost soil microbial activity, and enhance crop vigour and yield across most field and horticultural crops.'
    },
    {
      question: 'What are the benefits of humic, amino, fulvic, vitamin C & E?',
      answer:
        'This combination delivers <strong>strong root development</strong>, <strong>better nutrient uptake</strong>, <strong>improved soil microbial activity</strong>, <strong>enhanced stress tolerance</strong>, better flowering and fruit set, improved crop vigour, and higher yield potential.',
      answerPlain:
        'This combination delivers strong root development, better nutrient uptake, improved soil microbial activity, enhanced stress tolerance, better flowering and fruit set, improved crop vigour, and higher yield potential.'
    },
    {
      question: 'Which crops can benefit from DR. ROOT?',
      answer:
        '<strong>DR. ROOT</strong> benefits <strong>cotton, groundnut, wheat, paddy, soybean, chilli, tomato, onion, cumin, and fruits & vegetables</strong>. It is a versatile root development booster for field and horticultural crops.',
      answerPlain:
        'DR. ROOT benefits cotton, groundnut, wheat, paddy, soybean, chilli, tomato, onion, cumin, and fruits & vegetables. It is a versatile root development booster for field and horticultural crops.'
    },
    {
      question: 'What is the recommended dose of DR. ROOT?',
      answer:
        'The recommended dose of <strong>DR. ROOT</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The recommended dose of DR. ROOT is 30 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'How does humic and fulvic acid help root growth?',
      answer:
        '<strong>Humic acid</strong> improves soil structure and stimulates root growth, while <strong>fulvic acid</strong> chelates and transports nutrients into the roots — together building a stronger, more efficient root system.',
      answerPlain:
        'Humic acid improves soil structure and stimulates root growth, while fulvic acid chelates and transports nutrients into the roots — together building a stronger, more efficient root system.'
    },
    {
      question: 'How do Vitamin C and E help crops?',
      answer:
        '<strong>Vitamin C and E</strong> act as antioxidants inside the plant, helping crops manage heat, drought, salinity, and transplant shock for better stress tolerance and faster recovery.',
      answerPlain:
        'Vitamin C and E act as antioxidants inside the plant, helping crops manage heat, drought, salinity, and transplant shock for better stress tolerance and faster recovery.'
    },
    {
      question: 'When should DR. ROOT be applied?',
      answer:
        'Apply <strong>DR. ROOT</strong> during <strong>early growth and active crop stages</strong> as a soil application or foliar spray. Repeat as per crop stage and advisory for best root and yield response.',
      answerPlain:
        'Apply DR. ROOT during early growth and active crop stages as a soil application or foliar spray. Repeat as per crop stage and advisory for best root and yield response.'
    },
    {
      question: 'What pack size is available?',
      answer:
        '<strong>DR. ROOT</strong> is available in a convenient <strong>12.5 gm pack at Rs.224</strong>. Contact Harishree Crop Science dealers for availability across India.',
      answerPlain:
        'DR. ROOT is available in a convenient 12.5 gm pack at Rs.224. Contact Harishree Crop Science dealers for availability across India.'
    }
  ];

  testimonials = [
    {
      name: 'Kiran',
      location: 'Gujarat',
      text:
        'I applied this root promoter on my cotton soon after sowing and the root system was noticeably stronger. The crop stood up better in dry spells and stayed green and vigorous through the season.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Maharashtra',
      text:
        'After transplanting chilli I used this product and the plants recovered quickly with good white roots. Flowering and fruit set improved compared to last season.',
      rating: 5
    },
    {
      name: 'Ramesh',
      location: 'Rajasthan',
      text:
        'Used it on cumin and groundnut for root development. The crop looked healthier and more uniform, and the simple 30 ml per pump dose made it easy to apply.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '57',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation', text: 'Wear gloves and keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water.' },
    { name: 'Measure DR. ROOT', text: 'Accurately measure 30 ml of DR. ROOT for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into the water, top up the tank, and agitate until uniformly mixed.' },
    { name: 'Apply uniformly', text: 'Apply as a soil drench near the root zone or as a foliar spray in calm morning or evening hours.' },
    { name: 'Repeat as needed', text: 'Repeat at active crop stages as per crop advisory for best root and yield response.' },
    { name: 'Post-application care', text: 'Wash hands, clean equipment, and store leftover product safely.' }
  ];

  constructor(
    private seo: SeoService,
    private productSchema: ProductSchemaService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.applySeo();
    this.applyStructuredData();
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({ duration: 800, easing: 'ease-in-out', once: true });
    }
  }

  ngOnDestroy(): void {
    this.seo.removeStateKey(this.metaStateKey);
    this.seo.removeSchema(this.canonicalStateKey);
    this.schemaKeys.forEach((key) => this.seo.removeSchema(key));
  }

  private getSeoData(): ProductSeoData {
    return {
      baseUrl: this.baseUrl,
      pageUrl: this.pageUrl,
      productPath: this.productPath,
      productTitle: this.productTitle,
      brandName: this.brandName,
      productImageUrl: this.productImageUrl,
      productImagePath: this.productImagePath,
      productImageAlt:
        'DR. ROOT Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon Root Growth Promoter',
      productImageCaption:
        'Plant Growth Regulator for Root Development, Nutrient Uptake and Higher Yield',
      description:
        'DR. ROOT (Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon) by Harishree Crop Science is a root growth promoter and plant growth regulator for stronger roots, better nutrient uptake, and higher yield. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'DR. ROOT',
      category: 'Plant Growth Regulator',
      sku: 'DR-ROOT-HUMIC-AMINO-FULVIC-PGR',
      mpn: 'DR-ROOT-HUMIC-AMINO-FULVIC-PGR',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply DR. ROOT (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer of DR. ROOT (Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon) for soil or foliar application at 30 ml/pump.',
      alternateNames: [
        'DR. ROOT',
        'DR. ROOT PGR'
      ],
      targetPests: [],
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `DR. ROOT (${this.productTitle})`,
      breadcrumbCategory: 'Plant Growth Regulators',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'Plant Growth Regulator'
    };
  }

  private applySeo(): void {
    const desc =
      'DR. ROOT Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon — root growth promoter for stronger roots, better nutrient uptake & higher yield. Harishree Crop Science.';

    this.seo.setAll(
      {
        title: 'Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon | DR. ROOT',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon (DR. ROOT) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'DR. ROOT | Humic Amino Fulvic Root Growth Promoter',
          description: desc,
          image: this.productImageUrl,
          card: 'summary_large_image'
        }
      },
      this.metaStateKey,
      this.canonicalStateKey
    );
  }

  private applyStructuredData(): void {
    const seoData = this.getSeoData();

    this.productSchema.injectAll(seoData, (json, suffix) => {
      const key = this.seo.createSchemaStateKey(`${SEO_PAGE_ID}_${suffix}`);
      this.schemaKeys.push(key);
      this.seo.injectSchema(json, key);
    });
  }
}
