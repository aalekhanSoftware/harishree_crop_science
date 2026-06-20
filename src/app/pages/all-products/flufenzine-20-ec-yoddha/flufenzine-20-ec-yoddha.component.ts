import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'YODDHA_FLUFENZINE_20_EC';
const INDICATIVE_LIST_PRICE_INR = 1463;

@Component({
  selector: 'app-flufenzine-20-ec-yoddha',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './flufenzine-20-ec-yoddha.component.html',
  styleUrl: './flufenzine-20-ec-yoddha.component.scss'
})
export class Flufenzine20EcYoddhaComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/flufenzine-20-ec-yoddha';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/flufenzine-20-ec.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'FLUFENZINE 20% EC';
  brandName = 'YODDHA';

  featuredSnippetAnswer =
    'FLUFENZINE 20% EC (YODDHA) is a premium emulsifiable concentrate miticide and acaricide by Harishree Crop Science for controlling red spider mites, yellow mites, and broad mites on chilli, cotton, brinjal, tomato, okra, cucurbits, vegetables, fruits, and horticulture crops. Recommended dose: 25 ml per pump.';

  packSizes = [
    { volume: '250 ML', price: 738, featured: false, sku: 'YODDHA-250ML' },
    { volume: '500 ML', price: 1463, featured: true, sku: 'YODDHA-500ML' },
    { volume: '1 LTR', price: 2903, featured: false, sku: 'YODDHA-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Advanced miticide technology',
      description:
        'YODDHA delivers Flufenzine 20% EC — a modern acaricide formulation engineered for reliable mite population suppression across diverse horticulture and field crops.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Effective mite control',
      description:
        'Targets red spider mites, yellow mites, two-spotted spider mites, and broad mites through contact activity and mite growth regulation for cleaner foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual protection',
      description:
        'The EC formulation deposits evenly on leaf surfaces, maintaining protection against newly emerging mite colonies between scheduled spray intervals.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Broad spectrum activity',
      description:
        'Controls multiple mite species and life stages — eggs, nymphs, and adults — when applied at early infestation with thorough canopy coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Crop safety',
      description:
        'When used at the recommended 25 ml per pump dose and label timing, YODDHA supports crop safety on chilli, cotton, vegetables, and horticulture crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Improved plant health',
      description:
        'By reducing mite feeding damage and stippling, YODDHA helps restore leaf integrity, photosynthetic capacity, and overall crop vigour.',
      icon: 'fas fa-seedling'
    }
  ];

  keyBenefits = [
    {
      title: 'Effective red spider mite control',
      description:
        'YODDHA suppresses Tetranychus and related red spider mite species that cause bronzing, webbing, and defoliation on chilli, cotton, and vegetables.',
      icon: 'fas fa-spider'
    },
    {
      title: 'Long lasting protection',
      description:
        'Residual activity on treated foliage helps protect crops from mite resurgence during peak hot and dry periods when mite populations multiply rapidly.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop health',
      description:
        'Healthier leaves with fewer feeding punctures support stronger plant development through flowering, fruit set, and harvest stages.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Better photosynthesis',
      description:
        'Reduced stippling and chlorotic patches preserve green leaf area, allowing plants to maintain energy production during mite pressure seasons.',
      icon: 'fas fa-sun'
    },
    {
      title: 'Reduced leaf damage',
      description:
        'Timely YODDHA sprays limit mite-induced curling, bronzing, and premature leaf drop that weaken plants and reduce marketable yield.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Enhanced yield potential',
      description:
        'By protecting foliage and fruit quality during critical growth windows, growers support better productivity in chilli, cotton, and vegetable programs.',
      icon: 'fas fa-award'
    }
  ];

  whyChoose = [
    {
      title: 'Premium EC formulation',
      description:
        'Harishree\'s emulsifiable concentrate technology ensures smooth tank mixing, even spray distribution, and dependable field performance in Indian conditions.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Dedicated mite management',
      description:
        'YODDHA is purpose-built for acaricide programs — not a general insecticide repurposed for mites — giving focused control of mite complexes.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured with strict quality control, dealer support, and batch-to-batch consistency that growers and agronomists rely on season after season.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 25 ml per pump dosing, crop-wise tables, pest-wise guides, and safety notes help apply YODDHA confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Red Spider Mites',
      description:
        'Controls Tetranychus species that cause bronzing, webbing, and defoliation on chilli, cotton, brinjal, tomato, and vegetable foliage at early infestation.'
    },
    {
      name: 'Yellow Mites',
      description:
        'Effective against Polyphagotarsonemus latus and related yellow mite species that distort leaves and reduce photosynthesis in chilli and solanaceous crops.'
    },
    {
      name: 'Two-Spotted Spider Mites',
      description:
        'Manages Tetranychus urticae populations on cucumber, melon, tomato, and other horticulture crops when sprayed with underside leaf coverage.'
    },
    {
      name: 'Broad Mites',
      description:
        'Provides activity against broad mite species that cause leaf curling, russeting, and stunted growth on pepper, chilli, and ornamental horticulture crops.'
    },
    {
      name: 'Various Mite Species',
      description:
        'Broad acaricidal spectrum covers mixed mite complexes on vegetables, fruits, and horticulture crops when applied at economic threshold with full coverage.'
    }
  ];

  applications = [
    {
      title: 'Chilli',
      description: 'Leading miticide choice for red spider mite and yellow mite management during vegetative and fruit-set stages in chilli fields.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Cotton',
      description: 'Protects cotton foliage from red spider mite damage during square, flowering, and boll development for healthier lint quality.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Brinjal',
      description: 'Controls mite-induced leaf bronzing and distortion on brinjal during vegetative growth and flowering for cleaner harvest.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Tomato',
      description: 'Manages spider mite outbreaks on tomato foliage and supports fruit quality when applied at early mite colonization.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Okra',
      description: 'Defends okra leaves and pods from mite feeding damage during pod formation and harvest windows.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cucurbits',
      description: 'Effective on cucumber, melon, and gourd crops facing two-spotted spider mite pressure in protected and open-field cultivation.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Vegetables',
      description: 'Broad fit across brinjal, okra, beans, and mixed vegetable crops under mite pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Fruits',
      description: 'Supports mite management on fruit crops and orchard intercrops where spider mite outbreaks threaten leaf health and yield.',
      icon: 'fas fa-lemon'
    },
    {
      title: 'Horticulture Crops',
      description: 'Trusted acaricide for nursery stock, floriculture, and high-value horticulture crops requiring clean, mite-free foliage.',
      icon: 'fas fa-spa'
    }
  ];

  cropWiseUsage = [
    { crop: 'Chilli', pests: 'Red spider mite, yellow mite', dose: '25 ml/pump', timing: 'At ETL during vegetative and fruit-set stages' },
    { crop: 'Cotton', pests: 'Red spider mite', dose: '25 ml/pump', timing: 'Early infestation at square and boll stages' },
    { crop: 'Brinjal', pests: 'Red spider mite, broad mite', dose: '25 ml/pump', timing: 'First sign of mite colonization on leaves' },
    { crop: 'Tomato', pests: 'Two-spotted spider mite', dose: '25 ml/pump', timing: 'Early webbing or stippling on lower leaves' },
    { crop: 'Okra', pests: 'Red spider mite', dose: '25 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Cucurbits', pests: 'Two-spotted spider mite', dose: '25 ml/pump', timing: 'Early infestation on vine and leaf undersides' },
    { crop: 'Vegetables', pests: 'Mixed mite species', dose: '25 ml/pump', timing: 'At economic threshold with full coverage' },
    { crop: 'Fruits', pests: 'Spider mites', dose: '25 ml/pump', timing: 'Preventive or curative at early colony stage' },
    { crop: 'Horticulture', pests: 'Broad mite, spider mites', dose: '25 ml/pump', timing: 'Scout-based application at first mite signs' }
  ];

  pestWiseControl = [
    { pest: 'Red Spider Mite', crops: 'Chilli, cotton, brinjal, tomato', mode: 'Contact + growth regulation', efficacy: 'High at early infestation' },
    { pest: 'Yellow Mite', crops: 'Chilli, brinjal, vegetables', mode: 'Contact activity', efficacy: 'High with underside coverage' },
    { pest: 'Two-Spotted Spider Mite', crops: 'Tomato, cucurbits, vegetables', mode: 'Contact + residual', efficacy: 'High at colony initiation' },
    { pest: 'Broad Mite', crops: 'Chilli, pepper, horticulture', mode: 'Contact activity', efficacy: 'Moderate to high at early stage' },
    { pest: 'Mixed Mite Complex', crops: 'Vegetables, fruits, horticulture', mode: 'Broad acaricidal', efficacy: 'High with timely spray' }
  ];

  comparisonTraditional = [
    { feature: 'Primary target', yoddha: 'Dedicated miticide/acaricide for mite life stages', traditional: 'General insecticides with limited acaricidal activity' },
    { feature: 'Mite spectrum', yoddha: 'Red spider, yellow, two-spotted, and broad mites', traditional: 'Often ineffective on resistant mite populations' },
    { feature: 'Life stage control', yoddha: 'Eggs, nymphs, and adults via contact and growth disruption', traditional: 'Mostly adult knockdown only' },
    { feature: 'Residual activity', yoddha: 'Long-lasting EC deposit on foliage', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Crop safety', yoddha: 'Designed for horticulture and field crops at label dose', traditional: 'Phytotoxicity risk with repeated harsh chemistry' },
    { feature: 'Application dose', yoddha: '25 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' }
  ];

  comparisonFlufenzineTraditional = [
    { feature: 'Active chemistry', yoddha: 'Flufenzine 20% EC — modern acaricide', traditional: 'Older organophosphates or pyrethroids for mites' },
    { feature: 'Mode of action', yoddha: 'Contact + mite growth regulation', traditional: 'Primarily nerve-channel disruption only' },
    { feature: 'Resistance profile', yoddha: 'Lower cross-resistance when rotated in IPM', traditional: 'High resistance in mite populations after repeated use' },
    { feature: 'Formulation', yoddha: 'EC — easy mixing and uniform spray', traditional: 'Varies; some formulations settle in tank' },
    { feature: 'Leaf coverage', yoddha: 'Even spread with underside spray emphasis', traditional: 'Uneven control on lower leaf surfaces' },
    { feature: 'IPM compatibility', yoddha: 'Supports rotation with other MOA classes', traditional: 'Limited rotation value; harms beneficials' }
  ];

  comparisonResidual = [
    { feature: 'Protection duration', yoddha: 'Long residual miticide — extended field persistence', contact: 'Contact-only miticides — short protection window' },
    { feature: 'New colony suppression', yoddha: 'Controls emerging nymphs on treated foliage', contact: 'Requires immediate re-spray when mites return' },
    { feature: 'Spray frequency', yoddha: 'Fewer applications during peak mite season', contact: 'More frequent sprays increase labour and cost' },
    { feature: 'Egg control', yoddha: 'Activity on eggs and early instars', contact: 'Limited effect on unhatched eggs' },
    { feature: 'Season-long value', yoddha: 'Better cost-efficiency across crop cycle', contact: 'Higher cumulative spray cost' },
    { feature: 'Resistance risk', yoddha: 'Rotation with contact MOAs reduces selection pressure', contact: 'Repeated contact-only use accelerates resistance' }
  ];

  comparisonEcFormulation = [
    { feature: 'Tank mixing', yoddha: 'EC disperses easily in water for uniform emulsion', other: 'WP/DF may require more agitation' },
    { feature: 'Spray uniformity', yoddha: 'Fine droplet spread across leaf surfaces', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', yoddha: '25 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', yoddha: 'Stable EC liquid in sealed original container', other: 'Stability varies; some need special storage' },
    { feature: 'Coverage on waxy leaves', yoddha: 'Good spread on chilli and cotton foliage', other: 'May bead on certain leaf types' },
    { feature: 'Dealer handling', yoddha: 'Standard liquid pack — easy transport and measure', other: 'Bulk or powder forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'YODDHA' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Miticide/Acaricide)' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Flufenzine 20% EC' },
      { label: 'Chemical group', value: 'Miticide / Acaricide' },
      { label: 'Mode of action', value: 'Contact activity with mite growth regulation' },
      { label: 'Action type', value: 'Contact action with residual activity' },
      { label: 'Target pests', value: 'Red spider mites, yellow mites, two-spotted spider mites, broad mites' },
      { label: 'Target crops', value: 'Chilli, cotton, brinjal, tomato, okra, cucurbits, vegetables, fruits, horticulture crops' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 250 ML, 500 ML, 1 LTR' },
      { label: 'Recommended dose', value: '25 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early mite infestation or as per ETL/label' },
      { label: 'Coverage', value: 'Spray leaf undersides where mites colonize' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'YODDHA' },
    { label: 'Brand / Trade Name', value: 'YODDHA' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Flufenzine 20% EC' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Chemical Group', value: 'Miticide / Acaricide' },
    { label: 'Mode of Action', value: 'Contact activity with mite growth regulation and reproductive cycle disruption' },
    { label: 'Action Type', value: 'Contact action with residual activity' },
    { label: 'Target Mites', value: 'Red spider mites, yellow mites, two-spotted spider mites, broad mites, various mite species' },
    { label: 'Target Crops', value: 'Chilli, cotton, brinjal, tomato, okra, cucurbits, vegetables, fruits, horticulture crops' },
    { label: 'Recommended Dose', value: '25 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early mite infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide (Miticide/Acaricide)' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (250 ML, 500 ML, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Contact activity on mites',
      description:
        'On application, YODDHA forms an even EC deposit on leaf surfaces. Mites contacting treated foliage absorb the active ingredient, disrupting normal feeding and movement.'
    },
    {
      title: 'Mite growth disruption',
      description:
        'Flufenzine interferes with mite development pathways, affecting moulting and growth regulation so nymphs fail to reach reproductive adulthood.'
    },
    {
      title: 'Reproductive cycle control',
      description:
        'By impacting egg viability and nymph survival, YODDHA breaks the mite reproductive cycle, preventing rapid population explosions during hot dry periods.'
    },
    {
      title: 'Residual protection',
      description:
        'The EC formulation adheres to foliage and maintains acaricidal activity on treated surfaces, protecting against newly colonizing mite populations between sprays.'
    },
    {
      title: 'Long-term mite suppression',
      description:
        'Combined contact knockdown and growth regulation deliver sustained mite population suppression when applied at economic threshold with thorough coverage.'
    },
    {
      title: 'Crop protection benefits',
      description:
        'Reduced mite feeding preserves leaf integrity, photosynthetic area, and plant vigour — supporting healthier chilli, cotton, and vegetable crops through harvest.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 25 ml dose',
      text: 'Measure exactly 25 ml per pump to maintain efficacy, protect crops, and slow resistance development in mite populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides where red spider mites, yellow mites, and broad mites colonize and feed.'
    },
    {
      title: 'Safe storage',
      text: 'Store upright in original container in a cool, dry, locked place away from food, feed, seed, and children.'
    },
    {
      title: 'Container disposal',
      text: 'Triple-rinse empty bottles, puncture them, and dispose as per local pesticide container management rules.'
    },
    {
      title: 'First aid readiness',
      text: 'If product contacts skin or eyes, wash thoroughly with water. If swallowed or symptoms appear, seek medical help immediately with the label.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Reduced mite population',
      value: 'Growers report visible decline in mite colonies and webbing within days of a well-timed YODDHA spray at early infestation.'
    },
    {
      label: 'Improved leaf health',
      value: 'Cleaner foliage with less bronzing and stippling supports stronger canopy development through critical growth stages.'
    },
    {
      label: 'Better plant growth',
      value: 'Protected leaves maintain photosynthetic capacity, supporting healthier vegetative and reproductive growth in treated crops.'
    },
    {
      label: 'Enhanced crop vigour',
      value: 'Reduced mite stress helps plants recover vigour during hot dry periods when mite pressure typically peaks.'
    },
    {
      label: 'Increased yield potential',
      value: 'Timely mite control on chilli, cotton, and vegetables helps preserve fruit quality and marketable yield at harvest.'
    }
  ];

  relatedProducts = [
    {
      name: 'CHILLI H (Fipronil 2.92% EC)',
      description: 'Specialized EC insecticide for chilli thrips and mite management with strong field performance.',
      route: '/products/insecticide/fipronil-2-92-ec',
      image: 'assets/products/insecticide/fipronil-2-92-ec.jpg',
      imageAlt: 'CHILLI H Fipronil 2.92% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA MIDA 70 (Imidacloprid 70% WG)',
      description: 'Systemic neonicotinoid for whiteflies, aphids, jassids, and sucking pests in cotton and vegetables.',
      route: '/product/imidacloprid-70-wg',
      image: 'assets/products/insecticide/imidacloprid-70-wg.jpg',
      imageAlt: 'EXTRA MIDA 70 Imidacloprid 70% WG insecticide by Harishree Crop Science'
    },
    {
      name: 'H GOR (Dimethoate 30% EC)',
      description: 'Systemic and contact organophosphate for aphids, thrips, and jassids in field and vegetable crops.',
      route: '/products/insecticide/dimethoate-30-ec-h-gor',
      image: 'assets/products/insecticide/dimethoate-30-ec.jpg',
      imageAlt: 'H GOR Dimethoate 30% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'AMPIGO (Chlorantraniliprole + Lambda Cyhalothrin ZC)',
      description: 'Dual-action ZC insecticide for caterpillars, borers, and fall armyworm in cotton, maize, and vegetables.',
      route: '/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc',
      image: 'assets/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc.png',
      imageAlt: 'AMPIGO Chlorantraniliprole Lambda Cyhalothrin ZC insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is FLUFENZINE 20% EC used for?',
      answer:
        '<strong>FLUFENZINE 20% EC</strong> (marketed as <strong>YODDHA</strong>) is a miticide and acaricide for controlling red spider mites, yellow mites, two-spotted spider mites, and broad mites on chilli, cotton, brinjal, tomato, okra, cucurbits, vegetables, fruits, and horticulture crops.',
      answerPlain:
        'FLUFENZINE 20% EC (marketed as YODDHA) is a miticide and acaricide for controlling red spider mites, yellow mites, two-spotted spider mites, and broad mites on chilli, cotton, brinjal, tomato, okra, cucurbits, vegetables, fruits, and horticulture crops.'
    },
    {
      question: 'How much YODDHA should be used per pump?',
      answer:
        'The standard recommended dose of <strong>YODDHA</strong> is <strong>25 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of YODDHA is 25 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'What is Flufenzine dose per pump?',
      answer:
        'The recommended <strong>Flufenzine dose per pump</strong> for YODDHA is <strong>25 ml</strong> in a 15-litre knapsack sprayer filled with clean water.',
      answerPlain:
        'The recommended Flufenzine dose per pump for YODDHA is 25 ml in a 15-litre knapsack sprayer filled with clean water.'
    },
    {
      question: 'Which crops can use YODDHA?',
      answer:
        '<strong>YODDHA</strong> is used on chilli, cotton, brinjal, tomato, okra, cucurbits, vegetables, fruits, and horticulture crops. Follow label recommendations for crop-specific guidance.',
      answerPlain:
        'YODDHA is used on chilli, cotton, brinjal, tomato, okra, cucurbits, vegetables, fruits, and horticulture crops. Follow label recommendations for crop-specific guidance.'
    },
    {
      question: 'Which mites does YODDHA control?',
      answer:
        'YODDHA controls <strong>red spider mites, yellow mites, two-spotted spider mites, broad mites, and various mite species</strong> when applied at early infestation with thorough leaf underside coverage.',
      answerPlain:
        'YODDHA controls red spider mites, yellow mites, two-spotted spider mites, broad mites, and various mite species when applied at early infestation with thorough leaf underside coverage.'
    },
    {
      question: 'Is YODDHA a miticide or acaricide?',
      answer:
        'Yes. <strong>YODDHA</strong> is both a <strong>miticide and acaricide</strong> — a specialized crop protection product designed primarily for mite population management.',
      answerPlain:
        'Yes. YODDHA is both a miticide and acaricide — a specialized crop protection product designed primarily for mite population management.'
    },
    {
      question: 'How does FLUFENZINE 20% EC work?',
      answer:
        'Flufenzine acts through <strong>contact activity</strong> on mites plus <strong>growth regulation</strong> that disrupts moulting, egg development, and reproductive cycles for long-term mite suppression.',
      answerPlain:
        'Flufenzine acts through contact activity on mites plus growth regulation that disrupts moulting, egg development, and reproductive cycles for long-term mite suppression.'
    },
    {
      question: 'Can YODDHA be used for red spider mite control in chilli?',
      answer:
        'Yes. <strong>YODDHA</strong> is widely used for <strong>red spider mite control in chilli</strong> when applied at economic threshold with 25 ml per pump and full canopy coverage.',
      answerPlain:
        'Yes. YODDHA is widely used for red spider mite control in chilli when applied at economic threshold with 25 ml per pump and full canopy coverage.'
    },
    {
      question: 'Is YODDHA effective for yellow mite control?',
      answer:
        'Yes. <strong>YODDHA</strong> provides strong activity against <strong>yellow mites</strong> on chilli and brinjal when sprayed early with emphasis on leaf undersides.',
      answerPlain:
        'Yes. YODDHA provides strong activity against yellow mites on chilli and brinjal when sprayed early with emphasis on leaf undersides.'
    },
    {
      question: 'Can I use YODDHA on cotton?',
      answer:
        'Yes. <strong>YODDHA</strong> is effective for <strong>cotton red spider mite</strong> management during square, flowering, and boll stages at 25 ml per pump.',
      answerPlain:
        'Yes. YODDHA is effective for cotton red spider mite management during square, flowering, and boll stages at 25 ml per pump.'
    },
    {
      question: 'How do I mix YODDHA for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>25 ml of YODDHA</strong>, top up with water, and agitate. The EC formulation emulsifies easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 25 ml of YODDHA, top up with water, and agitate. The EC formulation emulsifies easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for YODDHA?',
      answer:
        '<strong>YODDHA</strong> is available in <strong>250 ML, 500 ML, and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'YODDHA is available in 250 ML, 500 ML, and 1 LTR packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is FLUFENZINE 20% EC price in India?',
      answer:
        '<strong>YODDHA</strong> is available through authorized Harishree dealers in 250 ML, 500 ML, and 1 LTR packs. Pricing varies by region — contact your nearest dealer or Harishree directly for current rates.',
      answerPlain:
        'YODDHA is available through authorized Harishree dealers in 250 ML, 500 ML, and 1 LTR packs. Pricing varies by region — contact your nearest dealer or Harishree directly for current rates.'
    },
    {
      question: 'When is the best time to spray YODDHA?',
      answer:
        'Spray at <strong>early mite infestation</strong> or when mites reach economic threshold, preferably during calm morning or evening hours with full leaf underside coverage.',
      answerPlain:
        'Spray at early mite infestation or when mites reach economic threshold, preferably during calm morning or evening hours with full leaf underside coverage.'
    },
    {
      question: 'Is YODDHA safe for crops?',
      answer:
        'Yes, when used at the recommended 25 ml per pump dose and timing, YODDHA is crop-safe on labeled crops. Avoid overdosing and always follow the label.',
      answerPlain:
        'Yes, when used at the recommended 25 ml per pump dose and timing, YODDHA is crop-safe on labeled crops. Avoid overdosing and always follow the label.'
    },
    {
      question: 'What precautions should I take when using YODDHA?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'Is YODDHA compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'What is the shelf life of YODDHA?',
      answer:
        'When stored sealed in a cool, dry place, <strong>YODDHA</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, YODDHA has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'How should YODDHA be stored?',
      answer:
        'Store in the original sealed container in a <strong>cool, dry, ventilated</strong> place away from food, feed, seed, and direct sunlight.',
      answerPlain:
        'Store in the original sealed container in a cool, dry, ventilated place away from food, feed, seed, and direct sunlight.'
    },
    {
      question: 'Can YODDHA be tank mixed with fungicides?',
      answer:
        'YODDHA is generally compatible with commonly used fungicides, but always perform a <strong>jar test</strong> first and follow label directions for tank-mix partners.',
      answerPlain:
        'YODDHA is generally compatible with commonly used fungicides, but always perform a jar test first and follow label directions for tank-mix partners.'
    },
    {
      question: 'How does YODDHA help with resistance management?',
      answer:
        'Rotate <strong>YODDHA</strong> with miticides and insecticides from other mode-of-action groups across the season to reduce selection pressure on mite populations.',
      answerPlain:
        'Rotate YODDHA with miticides and insecticides from other mode-of-action groups across the season to reduce selection pressure on mite populations.'
    },
    {
      question: 'What is the technical name of YODDHA insecticide?',
      answer:
        'The technical composition is <strong>FLUFENZINE 20% EC</strong>. YODDHA is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is FLUFENZINE 20% EC. YODDHA is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'Is YODDHA a broad spectrum miticide?',
      answer:
        'Yes. <strong>YODDHA</strong> is a <strong>broad spectrum miticide</strong> effective against red spider mites, yellow mites, two-spotted spider mites, and broad mites on multiple crops.',
      answerPlain:
        'Yes. YODDHA is a broad spectrum miticide effective against red spider mites, yellow mites, two-spotted spider mites, and broad mites on multiple crops.'
    },
    {
      question: 'Can YODDHA be used on vegetables?',
      answer:
        'Yes. <strong>YODDHA</strong> is effective on brinjal, tomato, okra, cucurbits, and mixed vegetable crops facing mite pressure at 25 ml per pump.',
      answerPlain:
        'Yes. YODDHA is effective on brinjal, tomato, okra, cucurbits, and mixed vegetable crops facing mite pressure at 25 ml per pump.'
    },
    {
      question: 'What is YODDHA insecticide dose per acre?',
      answer:
        'Field dose varies by crop and water volume. The standard knapsack guidance is <strong>25 ml per 15-litre pump</strong>. Consult the label and local advisory for acre-wise calculations.',
      answerPlain:
        'Field dose varies by crop and water volume. The standard knapsack guidance is 25 ml per 15-litre pump. Consult the label and local advisory for acre-wise calculations.'
    },
    {
      question: 'How soon after spraying YODDHA can I re-enter the field?',
      answer:
        'Observe a <strong>24-hour re-entry interval</strong> wearing appropriate PPE before entering treated fields, unless local label guidance specifies otherwise.',
      answerPlain:
        'Observe a 24-hour re-entry interval wearing appropriate PPE before entering treated fields, unless local label guidance specifies otherwise.'
    },
    {
      question: 'Where can I buy YODDHA insecticide in India?',
      answer:
        'Contact <strong>Harishree Crop Science</strong> or your nearest authorized agricultural dealer for YODDHA availability, pricing, and crop-specific usage guidance.',
      answerPlain:
        'Contact Harishree Crop Science or your nearest authorized agricultural dealer for YODDHA availability, pricing, and crop-specific usage guidance.'
    },
    {
      question: 'Is YODDHA the best miticide for chilli?',
      answer:
        '<strong>YODDHA</strong> is a trusted <strong>miticide for chilli</strong> programs targeting red spider mites and yellow mites when applied at ETL with 25 ml per pump and underside coverage.',
      answerPlain:
        'YODDHA is a trusted miticide for chilli programs targeting red spider mites and yellow mites when applied at ETL with 25 ml per pump and underside coverage.'
    },
    {
      question: 'Does YODDHA control mite eggs?',
      answer:
        'Yes. <strong>Flufenzine</strong> in YODDHA provides activity on <strong>mite eggs and nymphs</strong> in addition to adult suppression when applied with thorough coverage.',
      answerPlain:
        'Yes. Flufenzine in YODDHA provides activity on mite eggs and nymphs in addition to adult suppression when applied with thorough coverage.'
    },
    {
      question: 'What is an EC formulation insecticide?',
      answer:
        'EC (Emulsifiable Concentrate) is a liquid formulation that disperses in water to form a uniform emulsion for <strong>even spray coverage and easy field mixing</strong>.',
      answerPlain:
        'EC (Emulsifiable Concentrate) is a liquid formulation that disperses in water to form a uniform emulsion for even spray coverage and easy field mixing.'
    },
    {
      question: 'How does YODDHA compare to conventional miticides?',
      answer:
        'Unlike many conventional sprays, <strong>YODDHA</strong> combines dedicated acaricidal chemistry with growth regulation for broader mite life-stage control and longer residual protection.',
      answerPlain:
        'Unlike many conventional sprays, YODDHA combines dedicated acaricidal chemistry with growth regulation for broader mite life-stage control and longer residual protection.'
    },
    {
      question: 'Can YODDHA be used in horticulture crops?',
      answer:
        'Yes. <strong>YODDHA</strong> is suitable as an <strong>agricultural miticide for horticulture crops</strong> including nursery stock, floriculture, and high-value produce facing mite outbreaks.',
      answerPlain:
        'Yes. YODDHA is suitable as an agricultural miticide for horticulture crops including nursery stock, floriculture, and high-value produce facing mite outbreaks.'
    }
  ];

  testimonials = [
    { name: 'Rajesh Kumar', location: 'Andhra Pradesh', text: 'YODDHA controlled red spider mites in my chilli field within days. Leaves recovered colour and pods looked much cleaner at harvest.', rating: 5 },
    { name: 'Mohan Patel', location: 'Gujarat', text: '25 ml per pump is easy to follow. YODDHA mixed smoothly and gave good mite control on my cotton crop during peak summer.', rating: 5 },
    { name: 'Suresh Reddy', location: 'Telangana', text: 'Yellow mite damage on brinjal dropped after one well-timed YODDHA spray. I now keep it in my regular IPM rotation.', rating: 5 },
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '68',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure YODDHA', text: 'Accurately measure 25 ml of FLUFENZINE 20% EC (YODDHA) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the miticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 25 ml into the water. The EC formulation emulsifies easily into a uniform spray mix.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage in calm weather, covering leaf undersides where red spider mites and yellow mites colonize.' },
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
      productImageAlt: 'YODDHA FLUFENZINE 20% EC Insecticide',
      productImageCaption: 'YODDHA FLUFENZINE 20% EC insecticide pack by Harishree Crop Science',
      description:
        'YODDHA (FLUFENZINE 20% EC) by Harishree Crop Science is a premium miticide and acaricide for red spider mites, yellow mites, and broad mites on chilli, cotton, brinjal, tomato, vegetables, and horticulture crops. Dose: 25 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'YODDHA-FLUFENZINE-20-EC',
      mpn: 'YODDHA-FLUFENZINE-20-EC',
      dose: '25 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply YODDHA (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of YODDHA (FLUFENZINE 20% EC) for foliar application at 25 ml/pump.',
      alternateNames: [
        'YODDHA',
        'YODDHA Insecticide',
        'YODDHA Flufenzine 20 EC',
        'Flufenzine 20 EC',
        'Flufenzine Insecticide',
        'Flufenzine Miticide',
        'Flufenzine Acaricide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `YODDHA (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'YODDHA FLUFENZINE 20% EC miticide by Harishree Crop Science. Control red spider mites, yellow mites & broad mites on chilli, cotton & vegetables. Dose: 25 ml/pump.';

    this.seo.setAll(
      {
        title: 'FLUFENZINE 20% EC | YODDHA Miticide | Harishree',
        description: desc,
        keywords:
          'FLUFENZINE 20% EC, YODDHA, Flufenzine 20 EC, Flufenzine Insecticide, Flufenzine 20 EC Uses, Flufenzine 20 EC Dose, Flufenzine Dose Per Pump, Flufenzine Miticide, Flufenzine Acaricide, Flufenzine for Mite Control, Red Spider Mite Control, Yellow Mite Control, Broad Spectrum Miticide, Agricultural Miticide, Crop Protection Insecticide, Flufenzine for Chilli, Flufenzine for Cotton, Flufenzine for Vegetables, Mite Control Solution, Spider Mite Control Insecticide, YODDHA Insecticide, YODDHA Flufenzine 20 EC, FLUFENZINE 20% EC for Chilli, FLUFENZINE 20% EC for Cotton, FLUFENZINE 20% EC Mode of Action, Best Miticide for Chilli, Best Red Spider Mite Control Solution, Agricultural Miticide for Horticulture Crops, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'FLUFENZINE 20% EC (YODDHA) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'FLUFENZINE 20% EC | YODDHA Miticide',
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
