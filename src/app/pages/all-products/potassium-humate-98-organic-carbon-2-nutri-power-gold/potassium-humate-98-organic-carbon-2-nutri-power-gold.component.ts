import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'NUTRI_POWER_GOLD_POTASSIUM_HUMATE_PGR';
const INDICATIVE_LIST_PRICE_INR = 201;

@Component({
  selector: 'app-potassium-humate-98-organic-carbon-2-nutri-power-gold',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './potassium-humate-98-organic-carbon-2-nutri-power-gold.component.html',
  styleUrl: './potassium-humate-98-organic-carbon-2-nutri-power-gold.component.scss'
})
export class PotassiumHumate98OrganicCarbon2NutriPowerGoldComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/potassium-humate-98-organic-carbon-2-nutri-power-gold';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/PGR/potassium-humate-98.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Potassium Humate 98% + Organic Carbon 2%';
  brandName = 'NUTRI POWER GOLD';

  featuredSnippetAnswer =
    'NUTRI POWER GOLD (Potassium Humate 98% + Organic Carbon 2%) is a premium humic acid based soil conditioner and plant growth regulator by Harishree Crop Science. It improves soil structure, enhances nutrient availability, strengthens root growth, boosts water retention and microbial activity, and increases crop productivity in cotton, groundnut, wheat, paddy, maize, soybean, chilli, tomato, onion, and fruits & vegetables. Recommended dose: 25 gm per pump.';

  packSizes = [
    { volume: '500 gm', price: 201, featured: true, sku: 'NUTRI-POWER-GOLD-500GM' },
    { volume: '1 Kg', price: 389, featured: false, sku: 'NUTRI-POWER-GOLD-1KG' }
  ];

  quickHighlights = [
    {
      title: 'High-grade potassium humate',
      description:
        'NUTRI POWER GOLD delivers 98% potassium humate with 2% organic carbon — a concentrated humic acid soil conditioner for strong root and soil performance.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Improved soil structure',
      description:
        'Humic substances promote soil aggregation, improving aeration, root penetration, and overall tilth in the root zone.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Enhanced nutrient availability',
      description:
        'Increases cation exchange capacity and chelates nutrients, making applied and native nutrients more available to the crop.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Strong root growth',
      description:
        'Stimulates root initiation and branching for a deep, healthy root system that supports vigorous crop growth.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better water retention',
      description:
        'Improved soil structure holds moisture longer in the root zone, helping crops withstand dry spells.',
      icon: 'fas fa-water'
    },
    {
      title: 'Increased microbial activity',
      description:
        'Organic carbon feeds beneficial soil micro-organisms, building a living, active rhizosphere.',
      icon: 'fas fa-bacteria'
    },
    {
      title: 'Higher crop productivity',
      description:
        'Better soil health and nutrient efficiency translate to stronger, more productive crops.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better nutrient efficiency',
      description:
        'Reduces nutrient lock-up and loss, improving the return from your fertilizer programme.',
      icon: 'fas fa-recycle'
    },
    {
      title: 'Improved crop quality',
      description:
        'Balanced soil nutrition supports better size, colour, and uniformity of produce.',
      icon: 'fas fa-award'
    },
    {
      title: 'Wide crop compatibility',
      description:
        'Suitable for cotton, groundnut, wheat, paddy, maize, soybean, chilli, tomato, onion, and fruits & vegetables.',
      icon: 'fas fa-tractor'
    }
  ];

  whyChoose = [
    {
      title: 'Concentrated 98% humate',
      description:
        'NUTRI POWER GOLD provides a high 98% potassium humate grade with organic carbon — more active soil conditioning per gram than diluted products.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Better soil and roots',
      description:
        'Improves soil structure, water retention, and microbial activity while stimulating strong root growth for healthier crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Higher nutrient efficiency',
      description:
        'Increases cation exchange capacity and chelates nutrients so crops use applied fertilizers more efficiently.',
      icon: 'fas fa-recycle'
    },
    {
      title: 'Better value for farmers',
      description:
        'Available in 500 gm at Rs.201 and 1 Kg at Rs.389 with a simple 25 gm per pump dose for strong return on investment.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Improved soil structure',
      description:
        'Promotes soil aggregation and aeration, improving root penetration and overall soil tilth.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Enhanced nutrient availability',
      description:
        'Raises cation exchange capacity and chelates nutrients for better uptake by the crop.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Strong root growth',
      description:
        'Stimulates root initiation and branching for a robust root system and stronger establishment.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better water retention',
      description:
        'Improves moisture holding capacity in the root zone, helping crops through dry periods.',
      icon: 'fas fa-water'
    },
    {
      title: 'Increased microbial activity',
      description:
        'Organic carbon feeds beneficial microbes, building a living and active soil biology.',
      icon: 'fas fa-bacteria'
    },
    {
      title: 'Higher crop productivity',
      description:
        'Healthier soil and efficient nutrition support higher and more consistent yields.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better nutrient efficiency',
      description:
        'Reduces nutrient lock-up and loss, improving the value of your fertilizer programme.',
      icon: 'fas fa-recycle'
    },
    {
      title: 'Improved crop quality',
      description:
        'Balanced soil nutrition supports better size, colour, and uniformity of produce.',
      icon: 'fas fa-award'
    },
    {
      title: 'Improved soil fertility',
      description:
        'Builds soil organic carbon and structure over time for long-term land productivity.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Stress tolerance support',
      description:
        'A healthier root zone helps crops better withstand drought and nutrient stress.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Easy to use',
      description:
        'Dissolves for soil application or drip and mixes easily as part of a regular nutrition program.',
      icon: 'fas fa-prescription-bottle'
    },
    {
      title: 'Increased farm profitability',
      description:
        'Better soil and nutrient efficiency help protect the investment in seed, fertilizer, and irrigation.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'NUTRI POWER GOLD is a premium plant growth regulator and soil conditioner from HARISHREE CROP SCIENCE, formulated with Potassium Humate 98% + Organic Carbon 2%. Indian farmers increasingly rely on high-grade potassium humate to rebuild soil structure, improve nutrient availability, and strengthen root systems. NUTRI POWER GOLD delivers this proven humic acid technology in a concentrated, easy-to-use form for healthier soils and more productive crops.';

  aboutOverview =
    'NUTRI POWER GOLD dissolves easily for soil, drip, or foliar use at the recommended 25 gm per pump dose. It supports improved soil structure, stronger root growth, better water retention, increased microbial activity, and higher crop productivity across cotton, groundnut, wheat, paddy, maize, soybean, chilli, tomato, onion, and fruits & vegetables. For dealers and agronomists, it is a dependable soil fertility improver backed by Harishree quality control.';

  aboutPotassiumHumate =
    'Potassium humate is the potassium salt of humic acid. At 98% grade it is highly soluble and rich in active humic molecules that improve soil aggregation, raise cation exchange capacity, and stimulate root growth — making it one of the most effective soil conditioners for Indian cropping systems.';

  aboutOrganicCarbon =
    'The 2% organic carbon component is the energy source for soil micro-organisms. By feeding soil biology and supporting humus formation, organic carbon enhances long-term soil fertility and keeps the rhizosphere active around the roots.';

  aboutSoilAggregation =
    'By binding fine soil particles into stable aggregates, NUTRI POWER GOLD improves aeration, water infiltration, and moisture retention. Better soil structure means roots can explore more soil volume and access more water and nutrients.';

  aboutChelation =
    'Humic substances chelate nutrients — holding them in plant-available forms and reducing lock-up and leaching. This nutrient chelation process improves the efficiency of applied fertilizers and native soil nutrients.';

  aboutCombined =
    'Together, potassium humate and organic carbon deliver root stimulation, soil structure improvement, efficient nutrient chelation, and enhanced soil biological activity. This balanced action builds healthier soil and stronger crops with higher yield potential than ordinary fertilizers alone.';

  targetCropsTable = [
    { crop: 'Cotton', role: 'Soil conditioning, root vigour, boll development' },
    { crop: 'Groundnut', role: 'Root and peg development, soil health' },
    { crop: 'Wheat', role: 'Root mass, tillering, nutrient efficiency' },
    { crop: 'Paddy', role: 'Root growth, soil structure, productivity' },
    { crop: 'Maize', role: 'Root development, nutrient uptake' },
    { crop: 'Soybean', role: 'Root growth, pod set, soil fertility' },
    { crop: 'Chilli', role: 'Root vigour, flowering, fruit set' },
    { crop: 'Tomato', role: 'Transplant recovery, fruit development' },
    { crop: 'Onion', role: 'Root development, bulb sizing' },
    { crop: 'Fruits & Vegetables', role: 'Soil health, quality, yield' }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Conditions soil and strengthens roots for better vigour and boll development through the season.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Groundnut',
      description:
        'Improves soil health and supports root and peg development for better pod filling.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Wheat & Paddy',
      description:
        'Builds root mass and improves nutrient efficiency during vegetative and grain-fill stages.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Maize & Soybean',
      description:
        'Supports strong roots, better nutrient uptake, and improved soil fertility for higher yields.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Chilli, Tomato & Onion',
      description:
        'Aids transplant recovery, root vigour, flowering, and fruit or bulb development in vegetables.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Fruits & Vegetables',
      description:
        'Improves soil structure, crop quality, and yield across fruit and vegetable crops.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', purpose: 'Soil conditioning, root vigour', dose: '25 gm/pump', timing: 'Early growth and as needed' },
    { crop: 'Groundnut', purpose: 'Root, peg, soil health', dose: '25 gm/pump', timing: 'Vegetative to pegging stage' },
    { crop: 'Wheat / Paddy', purpose: 'Root mass, nutrient efficiency', dose: '25 gm/pump', timing: 'Tillering stage onwards' },
    { crop: 'Maize / Soybean', purpose: 'Root growth, soil fertility', dose: '25 gm/pump', timing: 'Vegetative and flowering' },
    { crop: 'Chilli / Tomato / Onion', purpose: 'Transplant recovery, fruit/bulb set', dose: '25 gm/pump', timing: 'After transplant and flowering' },
    { crop: 'Fruits & Vegetables', purpose: 'Soil health and quality', dose: '25 gm/pump', timing: 'Active growth stages' }
  ];

  applicationGuidelines = [
    { application: 'Application method', recommendation: 'Soil application, drip, or foliar spray' },
    { application: 'Dose', recommendation: '25 gm per pump' },
    { application: 'Timing', recommendation: 'Early growth and active stages' },
    { application: 'Repeat', recommendation: 'As per crop stage and advisory' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'NUTRI POWER GOLD' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Product type', value: 'Plant Growth Regulator (PGR) / Soil Conditioner' },
      { label: 'Composition', value: 'Potassium Humate 98% + Organic Carbon 2%' },
      { label: 'Action type', value: 'Soil conditioner and root growth promoter' },
      { label: 'Key role', value: 'Soil structure, nutrient availability, root growth' },
      { label: 'Target crops', value: 'Cotton, groundnut, wheat, paddy, maize, soybean, chilli, tomato, onion, fruits & vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack sizes 500 gm, 1 Kg' },
      { label: 'Recommended dose', value: '25 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer' },
      { label: 'Application method', value: 'Soil application, drip, or foliar spray' },
      { label: 'Application stage', value: 'Early growth and active crop stages' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'NUTRI POWER GOLD' },
    { label: 'Brand / Trade Name', value: 'NUTRI POWER GOLD' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Composition', value: 'Potassium Humate 98% + Organic Carbon 2%' },
    { label: 'Product Type', value: 'Plant Growth Regulator (PGR) / Soil Conditioner' },
    { label: 'Action Type', value: 'Soil conditioner / root growth promoter' },
    { label: 'Key Benefits', value: 'Soil structure, nutrient availability, root growth, productivity' },
    { label: 'Target Crops', value: 'Cotton, groundnut, wheat, paddy, maize, soybean, chilli, tomato, onion, fruits & vegetables' },
    { label: 'Recommended Dose', value: '25 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Soil application, drip, or foliar spray' },
    { label: 'Application Stage', value: 'Early growth and active crop stages' },
    { label: 'Pack Sizes', value: '500 gm, 1 Kg' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or applying NUTRI POWER GOLD.'
    },
    {
      title: 'Wear protective equipment',
      text: 'Use gloves and basic protective clothing when handling the product or preparing the spray mix.'
    },
    {
      title: 'Avoid spraying during strong winds',
      text: 'Apply in calm morning or evening hours to ensure uniform application and avoid drift.'
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
      text: 'Keep sealed packs in a cool, dry, ventilated area away from direct sunlight and moisture.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Use 25 gm per pump as recommended. Over-dosing does not improve results.'
    }
  ];

  relatedProducts = [
    {
      name: 'Humic 98% (Humic Acid 98%)',
      description: 'High-grade humic acid plant growth regulator and soil conditioner for root development.',
      route: '/products/humic-98-plant-growth-regulator',
      image: 'assets/products/PGR/potassium-humate-98.jpg',
      imageAlt: 'Humic 98% Humic Acid plant growth regulator by Harishree Crop Science'
    },
    {
      name: 'DR. ROOT (Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon)',
      description: 'Root growth promoter for stronger roots, better nutrient uptake, and higher yield.',
      route: '/products/dr-root-humic-amino-fulvic-vitamin-organic-carbon',
      image: 'assets/products/PGR/dr-root.jpg',
      imageAlt: 'DR. ROOT Humic Amino Fulvic root growth promoter by Harishree Crop Science'
    },
    {
      name: 'Black Diamond (Humic Acid 98%)',
      description: 'Premium humic acid soil conditioner for stronger, healthier roots and plants.',
      route: '/products',
      image: 'assets/products/PGR/black-diamond.jpg',
      imageAlt: 'Black Diamond humic acid soil conditioner by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is NUTRI POWER GOLD used for?',
      answer:
        '<strong>NUTRI POWER GOLD</strong> (<strong>Potassium Humate 98% + Organic Carbon 2%</strong>) is a <strong>soil conditioner and plant growth regulator</strong> used to improve soil structure, enhance nutrient availability, strengthen root growth, and increase crop productivity across most field and horticultural crops.',
      answerPlain:
        'NUTRI POWER GOLD (Potassium Humate 98% + Organic Carbon 2%) is a soil conditioner and plant growth regulator used to improve soil structure, enhance nutrient availability, strengthen root growth, and increase crop productivity across most field and horticultural crops.'
    },
    {
      question: 'What are the benefits of potassium humate 98%?',
      answer:
        '<strong>Potassium humate 98%</strong> improves <strong>soil structure</strong>, raises <strong>nutrient availability</strong>, strengthens <strong>root growth</strong>, boosts water retention and microbial activity, and increases crop productivity and nutrient efficiency.',
      answerPlain:
        'Potassium humate 98% improves soil structure, raises nutrient availability, strengthens root growth, boosts water retention and microbial activity, and increases crop productivity and nutrient efficiency.'
    },
    {
      question: 'Which crops can benefit from NUTRI POWER GOLD?',
      answer:
        '<strong>NUTRI POWER GOLD</strong> benefits <strong>cotton, groundnut, wheat, paddy, maize, soybean, chilli, tomato, onion, and fruits & vegetables</strong>. It is a versatile soil fertility improver for field and horticultural crops.',
      answerPlain:
        'NUTRI POWER GOLD benefits cotton, groundnut, wheat, paddy, maize, soybean, chilli, tomato, onion, and fruits & vegetables. It is a versatile soil fertility improver for field and horticultural crops.'
    },
    {
      question: 'What is the recommended dose of NUTRI POWER GOLD?',
      answer:
        'The recommended dose of <strong>NUTRI POWER GOLD</strong> is <strong>25 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The recommended dose of NUTRI POWER GOLD is 25 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'How does potassium humate improve soil?',
      answer:
        '<strong>Potassium humate</strong> binds soil particles into stable aggregates and raises cation exchange capacity, improving aeration, water retention, and nutrient holding in the root zone.',
      answerPlain:
        'Potassium humate binds soil particles into stable aggregates and raises cation exchange capacity, improving aeration, water retention, and nutrient holding in the root zone.'
    },
    {
      question: 'What is the role of organic carbon?',
      answer:
        '<strong>Organic carbon</strong> is the energy source for soil micro-organisms. It feeds soil biology, supports humus formation, and enhances long-term soil fertility around the roots.',
      answerPlain:
        'Organic carbon is the energy source for soil micro-organisms. It feeds soil biology, supports humus formation, and enhances long-term soil fertility around the roots.'
    },
    {
      question: 'When should NUTRI POWER GOLD be applied?',
      answer:
        'Apply <strong>NUTRI POWER GOLD</strong> during <strong>early growth and active crop stages</strong> as a soil application, through drip, or as a foliar spray. Repeat as per crop stage and advisory for best results.',
      answerPlain:
        'Apply NUTRI POWER GOLD during early growth and active crop stages as a soil application, through drip, or as a foliar spray. Repeat as per crop stage and advisory for best results.'
    },
    {
      question: 'What pack sizes are available?',
      answer:
        '<strong>NUTRI POWER GOLD</strong> is available in <strong>500 gm at Rs.201</strong> and <strong>1 Kg at Rs.389</strong>. Contact Harishree Crop Science dealers for availability across India.',
      answerPlain:
        'NUTRI POWER GOLD is available in 500 gm at Rs.201 and 1 Kg at Rs.389. Contact Harishree Crop Science dealers for availability across India.'
    }
  ];

  testimonials = [
    {
      name: 'Mahesh',
      location: 'Gujarat',
      text:
        'I used this potassium humate on my cotton soil and the difference in soil softness and root growth was clear. The crop held moisture better and stayed strong even during a dry spell.',
      rating: 5
    },
    {
      name: 'Anil',
      location: 'Madhya Pradesh',
      text:
        'Applied it on wheat and the roots developed well with better tillering. My fertilizer seemed to work more efficiently and the field looked more uniform this season.',
      rating: 5
    },
    {
      name: 'Praveen',
      location: 'Telangana',
      text:
        'Used it on chilli and tomato through drip. Soil quality improved over time and the plants showed good vigour and fruit set. Easy 25 gm per pump dose to follow.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation', text: 'Wear gloves and keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water.' },
    { name: 'Measure NUTRI POWER GOLD', text: 'Accurately measure 25 gm of NUTRI POWER GOLD for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add to the water, top up the tank, and agitate until fully dissolved and uniform.' },
    { name: 'Apply uniformly', text: 'Apply as a soil drench near the root zone, through drip, or as a foliar spray in calm hours.' },
    { name: 'Repeat as needed', text: 'Repeat at active crop stages as per crop advisory for best soil and yield response.' },
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
        'NUTRI POWER GOLD Potassium Humate 98% + Organic Carbon 2% Soil Conditioner and Root Growth Promoter',
      productImageCaption:
        'Plant Growth Regulator and Soil Conditioner for Root Growth, Soil Health and Higher Yield',
      description:
        'NUTRI POWER GOLD (Potassium Humate 98% + Organic Carbon 2%) by Harishree Crop Science is a humic acid soil conditioner and root growth promoter for better soil, stronger roots, and higher yield. Dose: 25 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'NUTRI POWER GOLD',
      category: 'Plant Growth Regulator',
      sku: 'NUTRI-POWER-GOLD-POTASSIUM-HUMATE-PGR',
      mpn: 'NUTRI-POWER-GOLD-POTASSIUM-HUMATE-PGR',
      dose: '25 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply NUTRI POWER GOLD (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer of NUTRI POWER GOLD (Potassium Humate 98% + Organic Carbon 2%) for soil, drip, or foliar application at 25 gm/pump.',
      alternateNames: [
        'NUTRI POWER GOLD',
        'Potassium Humate 98%'
      ],
      targetPests: [],
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `NUTRI POWER GOLD (${this.productTitle})`,
      breadcrumbCategory: 'Plant Growth Regulators',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'Plant Growth Regulator'
    };
  }

  private applySeo(): void {
    const desc =
      'NUTRI POWER GOLD Potassium Humate 98% + Organic Carbon 2% — humic acid soil conditioner & root growth promoter for better soil, strong roots & higher yield. Harishree Crop Science.';

    this.seo.setAll(
      {
        title: 'Potassium Humate 98% + Organic Carbon 2% | NUTRI POWER GOLD',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Potassium Humate 98% + Organic Carbon 2% (NUTRI POWER GOLD) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'NUTRI POWER GOLD | Potassium Humate 98% Soil Conditioner',
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
