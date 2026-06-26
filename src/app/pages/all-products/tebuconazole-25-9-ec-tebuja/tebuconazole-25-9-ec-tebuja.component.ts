import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'TEBUJA_TEBUCONAZOLE_25_9_EC';
const INDICATIVE_LIST_PRICE_INR = 413;

@Component({
  selector: 'app-tebuconazole-25-9-ec-tebuja',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tebuconazole-25-9-ec-tebuja.component.html',
  styleUrl: './tebuconazole-25-9-ec-tebuja.component.scss'
})
export class Tebuconazole259EcTebujaComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/tebuconazole-25-9-ec-tebuja';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/tebuconazole-25-9--ec.jpg';
  readonly productImageWebpPath = 'assets/products/fungicide/tebuconazole-25-9--ec.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Tebuconazole 25.9% EC';
  brandName = 'Tebuja';

  featuredSnippetAnswer =
    'Tebuconazole 25.9% EC (Tebuja) is a systemic triazole fungicide by Harishree Crop Science for rust, powdery mildew, leaf spot, anthracnose, sheath blight, and blast control in paddy, groundnut, soybean, chilli, tomato, wheat, and maize. Recommended dose: 25 ml per pump.';

  packSizes = [
    { volume: '250 ml', price: 212, featured: false, sku: 'TEBUJA-250ML' },
    { volume: '500 ml', price: 413, featured: true, sku: 'TEBUJA-500ML' },
    { volume: '1 Ltr', price: 802, featured: false, sku: 'TEBUJA-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Triazole fungicide technology',
      description:
        'Tebuja delivers Tebuconazole 25.9% EC — a proven triazole chemistry that inhibits ergosterol biosynthesis for dependable broad spectrum fungicide activity.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Systemic crop protection',
      description:
        'Tebuconazole absorbs rapidly into plant tissue and translocates through vascular channels, protecting new growth and reaching diseases on unsprayed foliage.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Rust control fungicide',
      description:
        'Highly effective against rust diseases on groundnut, wheat, soybean, and horticultural crops when applied at early pustule stage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Powdery mildew control',
      description:
        'Suppresses powdery mildew on chilli, tomato, vegetables, and fruit crops through systemic triazole activity and long residual protection.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Leaf spot & anthracnose control',
      description:
        'Controls leaf spot and anthracnose complexes that reduce photosynthetic area and fruit quality across multiple crop systems.',
      icon: 'fas fa-circle'
    },
    {
      title: 'Long residual activity',
      description:
        'Systemic tebuconazole activity within plant tissue maintains protection against newly active fungal pathogens between spray intervals.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Preventive & curative action',
      description:
        'Stops existing infections and prevents future disease outbreaks — ideal for integrated disease management programs.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Easy EC mixing',
      description:
        'Tebuja EC dissolves readily in water for uniform spray suspension — straightforward 25 ml per pump dosing for Indian knapsack sprayers.',
      icon: 'fas fa-spray-can'
    }
  ];

  keyBenefits = [
    {
      title: 'Rust control',
      description:
        'Tebuja controls rust pustules on groundnut, wheat, and soybean through ergosterol biosynthesis inhibition, preserving leaf health and yield.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Powdery mildew control',
      description:
        'Systemic tebuconazole suppresses powdery mildew colonies on chilli, tomato, and vegetable crops with preventive and curative activity.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Anthracnose management',
      description:
        'Effective against anthracnose fruit and leaf lesions on chilli, tomato, and horticultural crops when sprayed at early infection.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Leaf spot protection',
      description:
        'Controls cercospora and alternaria leaf spots that cause premature defoliation and reduce marketable yield.',
      icon: 'fas fa-circle'
    },
    {
      title: 'Sheath blight control',
      description:
        'Manages sheath blight in paddy through systemic movement into leaf sheaths during humid growing conditions.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Systemic action',
      description:
        'Tebuconazole translocates through plant vascular tissue after foliar uptake, protecting new shoots and internal plant parts.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Curative activity',
      description:
        'Stops existing fungal infections by disrupting cell membrane formation in active pathogen tissue.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Preventive protection',
      description:
        'Builds internal defence before disease spreads — essential for crop disease management in high-pressure seasons.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual effect',
      description:
        'Extended protection reduces the number of sprays needed across the season for cost-effective disease management.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Broad spectrum disease control',
      description:
        'One tebuconazole fungicide manages rust, powdery mildew, leaf spot, anthracnose, sheath blight, and blast across diverse crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Better crop health',
      description:
        'Timely Tebuja sprays preserve green leaf area, supporting stronger photosynthesis and reproductive development.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Improved yield',
      description:
        'By controlling key fungal diseases during flowering and fruit set, growers protect pods, grains, and fruits for higher productivity.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Enhanced crop quality',
      description:
        'Cleaner harvest grade and reduced disease scarring improve marketability in chilli, tomato, and groundnut programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Cost-effective protection',
      description:
        'Competitive pricing at ₹212 for 250 ml, ₹413 for 500 ml, and ₹802 for 1 Ltr makes Tebuja an economical systemic fungicide solution.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Proven field performance',
      description:
        'Tebuconazole 25.9% EC chemistry is trusted widely across India for crop disease control in paddy, groundnut, soybean, and vegetables.',
      icon: 'fas fa-certificate'
    }
  ];

  whyChoose = [
    {
      title: 'Premium EC formulation',
      description:
        'Harishree\'s emulsifiable concentrate technology mixes rapidly in water, ensuring uniform spray suspension and dependable tank stability.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven systemic performance',
      description:
        'Tebuconazole 25.9% EC addresses preventive and curative fungal diseases for complete rust, mildew, and leaf spot management in one pack.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured with strict quality control, dealer support, and batch-to-batch consistency growers rely on season after season.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Competitive pricing',
      description:
        'Tebuja offers value at ₹413 per 500 ml — best price for a premium systemic triazole fungicide with broad crop fit.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 25 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply Tebuja confidently.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems reduce photosynthesis. Tebuja inhibits ergosterol biosynthesis, halting rust sporulation and spread.'
    },
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves, stems, and fruits. Systemic tebuconazole penetrates tissue to stop mildew development and protect new growth.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Circular brown or grey lesions from Cercospora and Alternaria species. Tebuja suppresses lesion expansion and protects remaining leaf area.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and leaves. Curative tebuconazole activity limits anthracnose damage on chilli, tomato, and horticultural crops.'
    },
    {
      name: 'Sheath Blight',
      description:
        'Greenish-grey sheath lesions in dense paddy stands. Tebuja systemic movement limits Rhizoctonia spread along leaf sheaths.'
    },
    {
      name: 'Blast Disease',
      description:
        'Diamond-shaped leaf and neck lesions in rice. Tebuja supports paddy blast management when integrated into a fungicide rotation program.'
    },
    {
      name: 'Early Blight',
      description:
        'Concentric ring spots on tomato and potato foliage. Preventive Tebuja sprays protect canopy health during fruit development.'
    },
    {
      name: 'Other Fungal Diseases',
      description:
        'Broad triazole activity against multiple foliar pathogens when applied at early disease appearance with full canopy coverage.'
    }
  ];

  applications = [
    {
      title: 'Paddy',
      description:
        'Systemic fungicide for sheath blight, blast, and brown spot management during tillering and panicle stages in Indian rice programs.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Groundnut',
      description:
        'Controls rust and leaf spot that defoliate groundnut canopies and reduce pod filling — apply at early pustule or lesion stage.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Soybean',
      description:
        'Manages rust, powdery mildew, and leaf spot during vegetative and pod-fill windows for healthier soybean stands.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Chilli',
      description:
        'Protects chilli pods and foliage from anthracnose, powdery mildew, and fruit rot during flowering and harvest cycles.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Tomato',
      description:
        'Controls early blight, leaf spot, and anthracnose that reduce fruit quality during continuous harvest cycles.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Wheat',
      description:
        'Rust control fungicide for yellow and brown rust management during flag leaf and grain-fill stages.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Maize',
      description:
        'Manages rust and leaf blight complexes that weaken maize stands and reduce grain weight at harvest.',
      icon: 'fas fa-corn'
    },
    {
      title: 'Vegetable & Horticultural Crops',
      description:
        'Broad fit across brinjal, capsicum, grapes, and mixed horticultural crops facing foliar fungal disease pressure.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Paddy', pests: 'Sheath blight, blast, brown spot', dose: '25 ml/pump', timing: 'Early disease or preventive at tillering' },
    { crop: 'Groundnut', pests: 'Rust, leaf spot', dose: '25 ml/pump', timing: 'At first pustule or lesion appearance' },
    { crop: 'Soybean', pests: 'Rust, powdery mildew', dose: '25 ml/pump', timing: 'Early infestation during vegetative stage' },
    { crop: 'Chilli', pests: 'Anthracnose, powdery mildew', dose: '25 ml/pump', timing: 'Flowering and fruit-set window' },
    { crop: 'Tomato', pests: 'Early blight, leaf spot', dose: '25 ml/pump', timing: 'Early lesion sighting with full coverage' },
    { crop: 'Wheat', pests: 'Rust', dose: '25 ml/pump', timing: 'Flag leaf stage or per advisory' },
    { crop: 'Maize', pests: 'Rust, leaf blight', dose: '25 ml/pump', timing: 'Early disease appearance' },
    { crop: 'Vegetables', pests: 'Mixed fungal diseases', dose: '25 ml/pump', timing: 'Preventive or early curative spray' }
  ];

  pestWiseControl = [
    { pest: 'Rust', crops: 'Groundnut, wheat, soybean', mode: 'Systemic triazole', efficacy: 'High at early pustules' },
    { pest: 'Powdery Mildew', crops: 'Chilli, tomato, vegetables', mode: 'Ergosterol inhibition', efficacy: 'High at early colonies' },
    { pest: 'Leaf Spot', crops: 'Groundnut, tomato, soybean', mode: 'Systemic tebuconazole', efficacy: 'High at early lesions' },
    { pest: 'Anthracnose', crops: 'Chilli, tomato', mode: 'Curative + preventive', efficacy: 'High with timely spray' },
    { pest: 'Sheath Blight', crops: 'Paddy', mode: 'Systemic movement', efficacy: 'Moderate to high' },
    { pest: 'Blast', crops: 'Paddy', mode: 'Triazole systemic', efficacy: 'Moderate to high in rotation' },
    { pest: 'Early Blight', crops: 'Tomato, potato', mode: 'Preventive systemic', efficacy: 'High at early spots' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', prideH: 'Systemic triazole — Tebuconazole 25.9% EC (FRAC 3)', traditional: 'Contact-only fungicides with limited systemic reach' },
    { feature: 'Systemic protection', prideH: 'Tebuconazole translocates inside plant tissue', traditional: 'Surface protection only; no internal crop defence' },
    { feature: 'Disease spectrum', prideH: 'Rust, powdery mildew, leaf spot, anthracnose, sheath blight', traditional: 'Often limited to one disease group per product' },
    { feature: 'Residual protection', prideH: 'Long-lasting systemic activity in plant tissue', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', prideH: '25 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', prideH: 'Competitive pricing — ₹413/500 ml', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonDualAction = [
    { feature: 'Active chemistry', prideH: 'Tebuconazole 25.9% EC — high-load triazole', singleAi: 'Lower concentration generics with inconsistent quality' },
    { feature: 'Knockdown mechanism', prideH: 'Ergosterol biosynthesis inhibition', singleAi: 'Older contact chemistry with faster resistance selection' },
    { feature: 'Systemic action', prideH: 'Protects new growth internally', singleAi: 'Limited systemic reach on many alternatives' },
    { feature: 'EC formulation quality', prideH: 'Harishree EC — rapid emulsification and spread', singleAi: 'Formulation quality varies by brand' },
    { feature: 'Rust and mildew efficacy', prideH: 'Proven tebuconazole activity on foliar pathogens', singleAi: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', prideH: '25 ml/pump — straightforward dosing', singleAi: 'Dose calculations vary by product' }
  ];

  comparisonAcephateOnly = [
    { feature: 'Active chemistry', prideH: 'Tebuconazole 25.9% EC (FRAC 3 triazole)', generic: 'Generic copper or contact fungicide sprays' },
    { feature: 'Mode of action', prideH: 'Systemic ergosterol biosynthesis inhibitor', generic: 'Primarily contact; limited internal protection' },
    { feature: 'Systemic protection', prideH: 'Tebuconazole translocates through plant tissue', generic: 'No systemic protection of new growth' },
    { feature: 'Rust and anthracnose', prideH: 'Purpose-built for high-pressure foliar fungal outbreaks', generic: 'May need partner products in heavy pressure' },
    { feature: 'Crop safety profile', prideH: 'Modern triazole with favourable use profile when used as directed', generic: 'Older chemistry with stricter handling requirements' },
    { feature: 'Application convenience', prideH: 'EC — mixes easily at 25 ml/pump', generic: 'Dose and mixing vary by product type' }
  ];

  comparisonSpFormulation = [
    { feature: 'Tank mixing', prideH: 'EC emulsifies evenly in water for uniform suspension', other: 'WP may require more agitation; SC mixes differ' },
    { feature: 'Spray uniformity', prideH: 'Fine droplet spread across leaf surfaces', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', prideH: '25 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', prideH: 'Stable EC liquid in sealed original container', other: 'Powder formulations may need special storage' },
    { feature: 'Coverage on dense canopy', prideH: 'Good spread on chilli and groundnut foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', prideH: 'Standard bottle pack — easy transport and measure', other: 'Bulk forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Tebuja' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Tebuconazole 25.9% EC' },
      { label: 'Chemical group', value: 'FRAC 3 (Triazole)' },
      { label: 'Mode of action', value: 'Systemic triazole fungicide' },
      { label: 'Action type', value: 'Preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Rust, powdery mildew, leaf spot, anthracnose, sheath blight, blast, early blight' },
      { label: 'Suitable crops', value: 'Paddy, groundnut, soybean, chilli, tomato, wheat, maize, vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 250 ml, 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '25 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or preventive as per label' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Tebuja' },
    { label: 'Brand / Trade Name', value: 'Tebuja' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Tebuconazole 25.9% EC' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Chemical Group', value: 'FRAC 3 (Triazole)' },
    { label: 'Mode of Action', value: 'Systemic — ergosterol biosynthesis inhibition' },
    { label: 'Action Type', value: 'Preventive and curative fungicide' },
    { label: 'Diseases Controlled', value: 'Rust, powdery mildew, leaf spot, anthracnose, sheath blight, blast, early blight' },
    { label: 'Suitable Crops', value: 'Paddy, groundnut, soybean, chilli, tomato, wheat, maize, vegetables' },
    { label: 'Recommended Dose', value: '25 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance or preventive per label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Jar test before tank-mixing with other fungicides/insecticides' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (250 ml, 500 ml, 1 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'EC emulsification and foliar deposit',
      description:
        'On application, Tebuja emulsifies rapidly in water and forms an even spray deposit on leaf surfaces. Fungal spores contact treated foliage, absorbing tebuconazole through cuticle and plant tissue.'
    },
    {
      title: 'Rapid plant absorption',
      description:
        'Tebuconazole penetrates leaf cuticle within hours of application and enters the plant vascular system for internal disease protection.'
    },
    {
      title: 'Systemic movement',
      description:
        'The active ingredient translocates via xylem to protect new shoots, leaves, and fruits that were not directly sprayed — a powerful systemic fungicide mechanism.'
    },
    {
      title: 'Ergosterol biosynthesis inhibition',
      description:
        'Tebuconazole blocks demethylation of lanosterol, preventing ergosterol formation in fungal cell membranes. Without ergosterol, pathogens cannot grow or reproduce.'
    },
    {
      title: 'Curative action on active infections',
      description:
        'When applied at early lesion stage, tebuconazole stops existing infections from expanding, limiting crop damage before full mortality occurs.'
    },
    {
      title: 'Long residual field protection',
      description:
        'Systemic tebuconazole activity within plant tissue maintains protection against newly active fungal pathogens between scheduled spray intervals.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 25 ml dose',
      text: 'Measure exactly 25 ml per pump to maintain efficacy, protect crops, and slow resistance development in fungal populations.'
    },
    {
      title: 'Avoid spray drift',
      text: 'Apply in calm weather, avoid spraying near water bodies, and keep children, animals, and beehives away from the application zone.'
    },
    {
      title: 'Safe storage',
      text: 'Store in original sealed container in a cool, dry, locked place away from direct sunlight, moisture, food, feed, seed, and children.'
    },
    {
      title: 'Environmental precautions',
      text: 'Do not contaminate ponds, canals, or drinking water sources. Triple-rinse empty bottles before disposal per local rules.'
    },
    {
      title: 'First aid readiness',
      text: 'If product contacts skin or eyes, wash thoroughly with water. If swallowed or symptoms appear, seek medical help immediately with the label.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Rapid disease control',
      value: 'Growers report visible decline in rust pustules and mildew colonies within days of a well-timed Tebuja spray at early infestation.'
    },
    {
      label: 'Cleaner foliage and fruits',
      value: 'Reduced leaf spot and anthracnose improve marketable grade in chilli, tomato, and groundnut crops at harvest.'
    },
    {
      label: 'Healthier canopy',
      value: 'Systemic protection maintains photosynthetic capacity on new growth, supporting stronger vegetative and reproductive development.'
    },
    {
      label: 'Extended systemic cover',
      value: 'Tebuconazole movement inside plant tissue helps suppress newly active fungal pathogens between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely rust and anthracnose control on groundnut and chilli helps preserve pod weight, fruit quality, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'X PRO (Azoxystrobin + Tricyclazole SC)',
      description: 'Dual-action systemic fungicide for rice blast, sheath blight, and brown spot in paddy.',
      route: '/products/x-pro-azoxystrobin-16-7-tricyclazole-33-3-sc',
      image: 'assets/products/X-PRO.png',
      imageAlt: 'X PRO Azoxystrobin Tricyclazole fungicide by Harishree Crop Science'
    },
    {
      name: 'Super COC (Copper Oxychloride 50% WP)',
      description: 'Broad-spectrum contact fungicide for blight, anthracnose, and bacterial diseases.',
      route: '/product/super-coc',
      image: 'assets/products/fungicide/copper-oxychloride-50-wp.jpg',
      imageAlt: 'Super COC Copper Oxychloride fungicide by Harishree Crop Science'
    },
    {
      name: 'H-Tilt (Propiconazole 25% EC)',
      description: 'Systemic triazole fungicide for rusts, leaf spots, and sheath blight in cereals and horticulture.',
      route: '/products',
      image: 'assets/products/fungicide/propiconazole-25-ec.jpg',
      imageAlt: 'H-Tilt Propiconazole fungicide by Harishree Crop Science'
    },
    {
      name: 'Confer Plus (Hexaconazole 5% SC)',
      description: 'Systemic triazole fungicide for powdery mildew, sheath blight, and leaf spots.',
      route: '/products',
      image: 'assets/products/fungicide/confer-plus.jpg',
      imageAlt: 'Confer Plus Hexaconazole fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Tebuconazole 25.9% EC?',
      answer:
        '<strong>Tebuconazole 25.9% EC</strong> is an emulsifiable concentrate fungicide containing tebuconazole at 25.9% concentration. It is a systemic triazole fungicide for broad-spectrum control of rust, powdery mildew, leaf spot, anthracnose, and sheath blight on paddy, groundnut, soybean, chilli, and tomato.',
      answerPlain:
        'Tebuconazole 25.9% EC is an emulsifiable concentrate fungicide containing tebuconazole at 25.9% concentration. It is a systemic triazole fungicide for broad-spectrum control of rust, powdery mildew, leaf spot, anthracnose, and sheath blight on paddy, groundnut, soybean, chilli, and tomato.'
    },
    {
      question: 'What is Tebuja fungicide?',
      answer:
        '<strong>Tebuja</strong> is Harishree Crop Science\'s brand of <strong>Tebuconazole 25.9% EC</strong> — a premium systemic fungicide for rust control, powdery mildew control, leaf spot control, and anthracnose control. Recommended dose: 25 ml per pump.',
      answerPlain:
        'Tebuja is Harishree Crop Science\'s brand of Tebuconazole 25.9% EC — a premium systemic fungicide for rust control, powdery mildew control, leaf spot control, and anthracnose control. Recommended dose: 25 ml per pump.'
    },
    {
      question: 'Which diseases does Tebuja control?',
      answer:
        '<strong>Tebuja</strong> controls rust, powdery mildew, leaf spot, anthracnose, sheath blight, blast disease, and early blight when applied at early infestation with thorough foliar coverage.',
      answerPlain:
        'Tebuja controls rust, powdery mildew, leaf spot, anthracnose, sheath blight, blast disease, and early blight when applied at early infestation with thorough foliar coverage.'
    },
    {
      question: 'Is Tebuja effective against rust disease?',
      answer:
        'Yes. <strong>Tebuja</strong> (Tebuconazole 25.9% EC) is highly effective against rust on groundnut, wheat, and soybean when sprayed at early pustule stage with emphasis on full leaf coverage.',
      answerPlain:
        'Yes. Tebuja (Tebuconazole 25.9% EC) is highly effective against rust on groundnut, wheat, and soybean when sprayed at early pustule stage with emphasis on full leaf coverage.'
    },
    {
      question: 'Can it control powdery mildew and leaf spot?',
      answer:
        'Yes. <strong>Tebuja</strong> controls both powdery mildew and leaf spot through systemic tebuconazole activity. Apply at early colonization on chilli and vegetables for mildew, and on groundnut for leaf spot at 25 ml per pump.',
      answerPlain:
        'Yes. Tebuja controls both powdery mildew and leaf spot through systemic tebuconazole activity. Apply at early colonization on chilli and vegetables for mildew, and on groundnut for leaf spot at 25 ml per pump.'
    },
    {
      question: 'What is the recommended dose of Tebuja?',
      answer:
        'The standard recommended dose of <strong>Tebuja</strong> is <strong>25 ml per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of Tebuja is 25 ml per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can use Tebuconazole 25.9% EC?',
      answer:
        '<strong>Tebuconazole 25.9% EC</strong> (Tebuja) is widely used on <strong>paddy</strong> for sheath blight, on <strong>groundnut</strong> for rust, on <strong>chilli</strong> for anthracnose, and on <strong>soybean, tomato, wheat, and maize</strong> at 25 ml per pump.',
      answerPlain:
        'Tebuconazole 25.9% EC (Tebuja) is widely used on paddy for sheath blight, on groundnut for rust, on chilli for anthracnose, and on soybean, tomato, wheat, and maize at 25 ml per pump.'
    },
    {
      question: 'How should Tebuja be applied?',
      answer:
        'Fill a 15-litre knapsack sprayer with clean water, add <strong>25 ml of Tebuja</strong>, mix thoroughly until the EC emulsifies, and spray uniformly over foliage. Apply in calm morning or evening hours for best rust, mildew, and leaf spot control.',
      answerPlain:
        'Fill a 15-litre knapsack sprayer with clean water, add 25 ml of Tebuja, mix thoroughly until the EC emulsifies, and spray uniformly over foliage. Apply in calm morning or evening hours for best rust, mildew, and leaf spot control.'
    }
  ];

  testimonials = [
    {
      name: 'Suresh Kumar',
      location: 'Andhra Pradesh',
      text:
        'I used Tebuja on my paddy field when sheath blight started spreading. One spray at 25 ml per pump controlled the disease and tillers stayed green through harvest. Tebuconazole 25.9% EC mixed smoothly in my knapsack.',
      rating: 5
    },
    {
      name: 'Lakshmi Reddy',
      location: 'Andhra Pradesh',
      text:
        'Tebuja controlled anthracnose on my chilli crop during the rainy season. Fruits looked much cleaner at market and the ₹413 price for 500 ml is very competitive for a systemic fungicide.',
      rating: 5
    },
    {
      name: 'Rajesh Patel',
      location: 'Gujarat',
      text:
        'Rust was damaging my groundnut leaves badly. Tebuja stopped pustule spread within a week and pod filling improved. I now keep Tebuconazole 25.9% EC in my regular crop disease management program.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '92',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the fungicide.' },
    { name: 'Measure Tebuja', text: 'Accurately measure 25 ml of Tebuconazole 25.9% EC (Tebuja) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 25 ml into the water. The EC formulation emulsifies into a uniform spray mix. Top up and agitate.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on diseased areas and new growth.' },
    { name: 'Ensure complete crop coverage', text: 'Cover leaves, stems, and fruits on paddy, groundnut, chilli, and vegetable crops — systemic efficacy depends on thorough spray deposit.' },
    { name: 'Safety measures — post spray', text: 'Wash exposed skin, clean equipment, and store leftover product safely. Observe re-entry interval before field work.' }
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
      productImageAlt: 'Tebuja Tebuconazole 25.9% EC Systemic Fungicide by Harishree Crop Science',
      productImageCaption: 'Tebuconazole 25.9% EC fungicide pack for rust, powdery mildew, and leaf spot control',
      description:
        'Tebuja (Tebuconazole 25.9% EC) by Harishree Crop Science is a systemic triazole fungicide for rust, powdery mildew, leaf spot, anthracnose, and sheath blight on paddy, groundnut, soybean, chilli, and tomato. Dose: 25 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'Tebuja',
      category: 'Agricultural Fungicide',
      sku: 'TEBUJA-TEBUCONAZOLE-25-9-EC',
      mpn: 'TEBUJA-TEBUCONAZOLE-25-9-EC',
      dose: '25 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Tebuja (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Tebuja (Tebuconazole 25.9% EC) for foliar application at 25 ml/pump.',
      alternateNames: [
        'Tebuja',
        'Tebuja Fungicide',
        'Tebuja Tebuconazole EC',
        'Tebuconazole 25.9 EC',
        'Tebuconazole fungicide',
        'Buy Tebuconazole 25.9% EC online',
        'Systemic fungicide',
        'Broad spectrum fungicide',
        'Rust control fungicide',
        'Powdery mildew control fungicide',
        'Leaf spot control fungicide',
        'Anthracnose control fungicide',
        'Sheath blight control fungicide',
        'Chilli fungicide',
        'Groundnut fungicide',
        'Paddy fungicide',
        'Soybean fungicide',
        'Crop disease control fungicide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Tebuja (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Tebuconazole 25.9% EC (Tebuja) for rust, powdery mildew & leaf spot control. Systemic fungicide by Harishree. Best price ₹413/500ml. 25 ml/pump dose.';

    this.seo.setAll(
      {
        title: 'Tebuconazole 25.9% EC | Tebuja Fungicide Best Price',
        description: desc,
        keywords:
          'Tebuconazole 25.9% EC, Tebuconazole 25.9 EC, Tebuja, Tebuja fungicide, Tebuconazole fungicide, Buy Tebuconazole 25.9% EC online, Systemic fungicide, Broad spectrum fungicide, Rust control fungicide, Powdery mildew control fungicide, Leaf spot control fungicide, Anthracnose control fungicide, Sheath blight control fungicide, Chilli fungicide, Groundnut fungicide, Paddy fungicide, Soybean fungicide, Crop disease control fungicide, crop disease management, agricultural fungicide, disease protection, yield improvement, plant health management, integrated disease management, Harishree Crop Science, Tebuja price',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Tebuconazole 25.9% EC (Tebuja) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Tebuconazole 25.9% EC | Tebuja Fungicide',
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
