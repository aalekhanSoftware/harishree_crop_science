import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'HUMIC_98_PGR';
const INDICATIVE_LIST_PRICE_INR = 5000;

@Component({
  selector: 'app-humic-98-plant-growth-regulator',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './humic-98-plant-growth-regulator.component.html',
  styleUrl: './humic-98-plant-growth-regulator.component.scss'
})
export class Humic98PlantGrowthRegulatorComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/humic-98-plant-growth-regulator';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/PGR/potassium-humate-98.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Humic Acid 98%';
  brandName = 'HUMIC';

  featuredSnippetAnswer =
    'HUMIC 98% (Humic Acid 98%) is a high-grade humic acid plant growth regulator and soil conditioner by Harishree Crop Science. It enhances root development, improves nutrient absorption, builds better soil structure, increases microbial activity and stress tolerance, and improves flowering, fruiting, and productivity in cotton, paddy, wheat, maize, groundnut, soybean, chilli, tomato, onion, and fruits & vegetables. Recommended dose: 25 gm per pump.';

  packSizes = [
    { volume: '25 Kg', price: 5000, featured: true, sku: 'HUMIC-98-25KG' }
  ];

  quickHighlights = [
    {
      title: 'High-grade 98% humic acid',
      description:
        'HUMIC 98% delivers concentrated humic acid for powerful soil conditioning and root stimulation in one agricultural-grade product.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Enhanced root development',
      description:
        'Stimulates root initiation, elongation, and branching to build a strong root system for vigorous crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved nutrient absorption',
      description:
        'Chelates nutrients and raises cation exchange capacity so crops absorb applied and native nutrients efficiently.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Better soil structure',
      description:
        'Promotes soil aggregation and aeration, improving root penetration and overall soil tilth.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Increased microbial activity',
      description:
        'Supports beneficial soil micro-organisms, building a living, active rhizosphere around the roots.',
      icon: 'fas fa-bacteria'
    },
    {
      title: 'Higher stress tolerance',
      description:
        'A healthier root zone helps crops better withstand drought, salinity, and nutrient stress.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Better flowering and fruiting',
      description:
        'Improved root function and nutrition support stronger flowering, fruit set, and crop development.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Improved crop vigour',
      description:
        'Balanced soil conditioning keeps crops green, uniform, and vigorous through the season.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Higher productivity',
      description:
        'Better soil health and nutrient efficiency translate to higher and more consistent yields.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Wide crop compatibility',
      description:
        'Suitable for cotton, paddy, wheat, maize, groundnut, soybean, chilli, tomato, onion, and fruits & vegetables.',
      icon: 'fas fa-tractor'
    }
  ];

  whyChoose = [
    {
      title: 'Concentrated 98% grade',
      description:
        'HUMIC 98% provides a high humic acid grade — more active soil conditioning per kilogram than diluted humic products.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Stronger roots and soil',
      description:
        'Improves soil structure, microbial activity, and water retention while stimulating strong root growth.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better nutrient efficiency',
      description:
        'Raises cation exchange capacity and chelates nutrients so crops use applied fertilizers more efficiently.',
      icon: 'fas fa-recycle'
    },
    {
      title: 'Value for large areas',
      description:
        'The 25 Kg bulk pack at Rs.5000 and a simple 25 gm per pump dose make it economical for broad-acre use.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Enhanced root development',
      description:
        'Stimulates initiation, elongation, and branching of roots for a strong foundation and better establishment.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved nutrient absorption',
      description:
        'Chelates nutrients and raises cation exchange capacity for more efficient uptake by the crop.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Better soil structure',
      description:
        'Promotes soil aggregation and aeration, improving root penetration and overall tilth.',
      icon: 'fas fa-mountain'
    },
    {
      title: 'Increased microbial activity',
      description:
        'Supports beneficial soil microbes, building a living and active rhizosphere.',
      icon: 'fas fa-bacteria'
    },
    {
      title: 'Higher stress tolerance',
      description:
        'A healthier root zone helps crops withstand drought, salinity, and nutrient stress.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Better flowering and fruiting',
      description:
        'Improved root function and nutrition support stronger flowering, fruit set, and development.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Improved crop vigour',
      description:
        'Balanced soil conditioning keeps crops green, uniform, and vigorous through the season.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Higher productivity',
      description:
        'Healthier soil and efficient nutrition support higher and more consistent yields.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better water retention',
      description:
        'Improved soil structure holds moisture longer in the root zone, helping crops through dry spells.',
      icon: 'fas fa-water'
    },
    {
      title: 'Improved soil fertility',
      description:
        'Builds soil organic matter and structure over time for long-term land productivity.',
      icon: 'fas fa-mountain'
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
    'HUMIC 98% is a high-grade plant growth regulator and soil conditioner from HARISHREE CROP SCIENCE, formulated with Humic Acid 98%. Humic acid is one of the most trusted soil inputs in modern agriculture for rebuilding soil structure, stimulating roots, and improving nutrient efficiency. HUMIC 98% delivers this proven technology in a concentrated, agricultural-grade form for healthier soils and stronger crops.';

  aboutOverview =
    'HUMIC 98% dissolves easily for soil, drip, or foliar use at the recommended 25 gm per pump dose. It supports enhanced root development, improved nutrient absorption, better soil structure, increased microbial activity, higher stress tolerance, and improved productivity across cotton, paddy, wheat, maize, groundnut, soybean, chilli, tomato, onion, and fruits & vegetables. For dealers and agronomists, it is a dependable soil conditioner and root growth promoter backed by Harishree quality control.';

  aboutMolecular =
    'Humic acid is a complex of large, naturally occurring organic molecules. Its active functional groups bind soil particles, hold and release nutrients, and stimulate plant cell activity — driving the soil conditioning and root-promoting effects that make humic acid 98% so valuable in agriculture.';

  aboutSoilConditioning =
    'By improving soil aggregation, HUMIC 98% enhances aeration, water infiltration, and moisture retention. Better soil structure allows roots to explore more soil volume and access more water and nutrients, supporting steadier crop growth.';

  aboutChelation =
    'Humic acid chelates nutrients — holding them in plant-available forms and reducing lock-up and leaching. This nutrient chelation mechanism improves the efficiency of applied fertilizers and native soil nutrients.';

  aboutRootStimulation =
    'Humic substances stimulate root initiation and branching, increasing the absorptive surface area of the root system. A larger, healthier root system improves the uptake of water and nutrients throughout the crop cycle.';

  aboutMicrobial =
    'By feeding beneficial soil micro-organisms and supporting humus formation, HUMIC 98% enhances soil biological activity. An active rhizosphere improves nutrient cycling and overall soil health around the roots.';

  aboutCombined =
    'Together, these effects — molecular activity, soil conditioning, nutrient chelation, root stimulation, microbial support, and water retention — make HUMIC 98% a complete soil and root improver that builds healthier soils and stronger, higher-yielding crops over time.';

  targetCropsTable = [
    { crop: 'Cotton', role: 'Soil conditioning, root vigour, boll development' },
    { crop: 'Paddy', role: 'Root growth, soil structure, productivity' },
    { crop: 'Wheat', role: 'Root mass, tillering, nutrient efficiency' },
    { crop: 'Maize', role: 'Root development, nutrient uptake' },
    { crop: 'Groundnut', role: 'Root and peg development, soil health' },
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
      title: 'Paddy & Wheat',
      description:
        'Builds root mass and improves nutrient efficiency during vegetative and grain-fill stages.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Maize & Groundnut',
      description:
        'Supports strong root and peg development, soil health, and better nutrient uptake.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Soybean',
      description:
        'Improves root growth, pod set, and soil fertility for stronger, more uniform stands.',
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
    { crop: 'Paddy / Wheat', purpose: 'Root mass, nutrient efficiency', dose: '25 gm/pump', timing: 'Tillering stage onwards' },
    { crop: 'Maize / Groundnut', purpose: 'Root development, soil health', dose: '25 gm/pump', timing: 'Vegetative to pegging stage' },
    { crop: 'Soybean', purpose: 'Root growth, soil fertility', dose: '25 gm/pump', timing: 'Vegetative and flowering' },
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
      { label: 'Product name', value: 'HUMIC' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Product type', value: 'Plant Growth Regulator (PGR) / Soil Conditioner' },
      { label: 'Composition', value: 'Humic Acid 98%' },
      { label: 'Action type', value: 'Soil conditioner and root growth promoter' },
      { label: 'Key role', value: 'Root development, nutrient absorption, soil structure' },
      { label: 'Target crops', value: 'Cotton, paddy, wheat, maize, groundnut, soybean, chilli, tomato, onion, fruits & vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack size 25 Kg' },
      { label: 'Recommended dose', value: '25 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer' },
      { label: 'Application method', value: 'Soil application, drip, or foliar spray' },
      { label: 'Application stage', value: 'Early growth and active crop stages' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'HUMIC' },
    { label: 'Brand / Trade Name', value: 'HUMIC' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Composition', value: 'Humic Acid 98%' },
    { label: 'Product Type', value: 'Plant Growth Regulator (PGR) / Soil Conditioner' },
    { label: 'Action Type', value: 'Soil conditioner / root growth promoter' },
    { label: 'Key Benefits', value: 'Root development, nutrient absorption, soil structure, productivity' },
    { label: 'Target Crops', value: 'Cotton, paddy, wheat, maize, groundnut, soybean, chilli, tomato, onion, fruits & vegetables' },
    { label: 'Recommended Dose', value: '25 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Soil application, drip, or foliar spray' },
    { label: 'Application Stage', value: 'Early growth and active crop stages' },
    { label: 'Pack Size', value: '25 Kg' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or applying HUMIC 98%.'
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
      name: 'Nutri Power Gold (Potassium Humate 98% + Organic Carbon 2%)',
      description: 'Premium potassium humate soil conditioner and root growth promoter for stronger crops.',
      route: '/products/potassium-humate-98-organic-carbon-2-nutri-power-gold',
      image: 'assets/products/PGR/potassium-humate-98.jpg',
      imageAlt: 'Nutri Power Gold Potassium Humate 98% by Harishree Crop Science'
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
      question: 'What is HUMIC 98% used for?',
      answer:
        '<strong>HUMIC 98%</strong> (<strong>Humic Acid 98%</strong>) is a <strong>plant growth regulator and soil conditioner</strong> used to enhance root development, improve nutrient absorption, build better soil structure, and increase crop productivity across most field and horticultural crops.',
      answerPlain:
        'HUMIC 98% (Humic Acid 98%) is a plant growth regulator and soil conditioner used to enhance root development, improve nutrient absorption, build better soil structure, and increase crop productivity across most field and horticultural crops.'
    },
    {
      question: 'What are the benefits of humic acid 98%?',
      answer:
        '<strong>Humic acid 98%</strong> delivers <strong>enhanced root development</strong>, <strong>improved nutrient absorption</strong>, better soil structure, increased microbial activity, higher stress tolerance, better flowering and fruiting, improved crop vigour, and higher productivity.',
      answerPlain:
        'Humic acid 98% delivers enhanced root development, improved nutrient absorption, better soil structure, increased microbial activity, higher stress tolerance, better flowering and fruiting, improved crop vigour, and higher productivity.'
    },
    {
      question: 'Which crops can benefit from HUMIC 98%?',
      answer:
        '<strong>HUMIC 98%</strong> benefits <strong>cotton, paddy, wheat, maize, groundnut, soybean, chilli, tomato, onion, and fruits & vegetables</strong>. It is a versatile soil conditioner for field and horticultural crops.',
      answerPlain:
        'HUMIC 98% benefits cotton, paddy, wheat, maize, groundnut, soybean, chilli, tomato, onion, and fruits & vegetables. It is a versatile soil conditioner for field and horticultural crops.'
    },
    {
      question: 'What is the recommended dose of HUMIC 98%?',
      answer:
        'The recommended dose of <strong>HUMIC 98%</strong> is <strong>25 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The recommended dose of HUMIC 98% is 25 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'How does humic acid 98% improve soil and roots?',
      answer:
        '<strong>Humic acid</strong> binds soil particles into stable aggregates, raises cation exchange capacity, and stimulates root growth — improving soil structure, water retention, and nutrient holding in the root zone.',
      answerPlain:
        'Humic acid binds soil particles into stable aggregates, raises cation exchange capacity, and stimulates root growth — improving soil structure, water retention, and nutrient holding in the root zone.'
    },
    {
      question: 'How is HUMIC 98% applied?',
      answer:
        '<strong>HUMIC 98%</strong> can be applied as a <strong>soil application</strong>, through <strong>drip</strong>, or as a <strong>foliar spray</strong> at 25 gm per pump. Apply at early growth and active crop stages for best response.',
      answerPlain:
        'HUMIC 98% can be applied as a soil application, through drip, or as a foliar spray at 25 gm per pump. Apply at early growth and active crop stages for best response.'
    },
    {
      question: 'When should HUMIC 98% be applied?',
      answer:
        'Apply <strong>HUMIC 98%</strong> during <strong>early growth and active crop stages</strong>. Repeat as per crop stage and advisory for best root, soil, and yield response.',
      answerPlain:
        'Apply HUMIC 98% during early growth and active crop stages. Repeat as per crop stage and advisory for best root, soil, and yield response.'
    },
    {
      question: 'What pack size is available?',
      answer:
        '<strong>HUMIC 98%</strong> is available in a <strong>25 Kg pack at Rs.5000</strong>, ideal for broad-acre use. Contact Harishree Crop Science dealers for availability across India.',
      answerPlain:
        'HUMIC 98% is available in a 25 Kg pack at Rs.5000, ideal for broad-acre use. Contact Harishree Crop Science dealers for availability across India.'
    }
  ];

  testimonials = [
    {
      name: 'Vijay',
      location: 'Maharashtra',
      text:
        'I used this humic acid across my cotton fields and noticed softer soil and stronger root growth. The crop stayed green and held up well, and my fertilizer seemed to go further.',
      rating: 5
    },
    {
      name: 'Rakesh',
      location: 'Punjab',
      text:
        'Applied it on wheat and paddy through the season. Root development and tillering improved and the soil worked better over time. Good value in the 25 Kg pack for large areas.',
      rating: 5
    },
    {
      name: 'Naresh',
      location: 'Andhra Pradesh',
      text:
        'Used it on chilli and onion. Plants showed better vigour, flowering, and bulb development. The 25 gm per pump dose is simple and the results on soil health were clear.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '72',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation', text: 'Wear gloves and keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water.' },
    { name: 'Measure HUMIC 98%', text: 'Accurately measure 25 gm of HUMIC 98% for one knapsack pump.' },
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
        'HUMIC 98% Humic Acid 98% Plant Growth Regulator and Soil Conditioner for Root Development',
      productImageCaption:
        'Plant Growth Regulator and Soil Conditioner for Root Growth, Soil Health and Higher Yield',
      description:
        'HUMIC 98% (Humic Acid 98%) by Harishree Crop Science is a humic acid soil conditioner and root growth promoter for better soil, stronger roots, and higher yield. Dose: 25 gm/pump.',
      primaryKeyword: 'HUMIC 98%',
      secondaryKeyword: 'HUMIC',
      category: 'Plant Growth Regulator',
      sku: 'HUMIC-98-PGR',
      mpn: 'HUMIC-98-PGR',
      dose: '25 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply HUMIC 98% (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer of HUMIC 98% (Humic Acid 98%) for soil, drip, or foliar application at 25 gm/pump.',
      alternateNames: [
        'HUMIC',
        'HUMIC 98%'
      ],
      targetPests: [],
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `HUMIC 98% (${this.productTitle})`,
      breadcrumbCategory: 'Plant Growth Regulators',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'Plant Growth Regulator'
    };
  }

  private applySeo(): void {
    const desc =
      'HUMIC 98% (Humic Acid 98%) — humic acid soil conditioner & root growth promoter for better soil, strong roots & higher yield. Harishree Crop Science.';

    this.seo.setAll(
      {
        title: 'HUMIC 98% | Humic Acid 98% Plant Growth Regulator',
        description: desc,
        keywords: 'HUMIC 98%',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'HUMIC 98% (Humic Acid 98%) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'HUMIC 98% | Humic Acid Soil Conditioner',
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
