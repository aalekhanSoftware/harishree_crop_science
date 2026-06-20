import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'AMPIGO_CHLORANTRANILIPROLE_LAMBDA';
const INDICATIVE_LIST_PRICE_INR = 720;

@Component({
  selector: 'app-chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc-ampigo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc-ampigo.component.html',
  styleUrl: './chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc-ampigo.component.scss'
})
export class Chlorantraniliprole93LambdaCyhalothrin46ZcAmpigoComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC';
  brandName = 'AMPIGO';

  featuredSnippetAnswer =
    'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC (AMPIGO) is a dual-action ZC insecticide combining anthranilic diamide and pyrethroid chemistry for fast knockdown and long residual control of fall armyworm, bollworms, fruit borers, stem borers, and caterpillars in cotton, maize, chilli, tomato, and vegetables. Recommended dose: 10 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 159, featured: false, sku: 'AMPIGO-100ML' },
    { volume: '250 ml', price: 372, featured: false, sku: 'AMPIGO-250ML' },
    { volume: '500 ml', price: 720, featured: true, sku: 'AMPIGO-500ML' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredient technology',
      description:
        'AMPIGO pairs Chlorantraniliprole (IRAC 28) with Lambda Cyhalothrin (IRAC 3A) in an advanced ZC formulation for knockdown plus extended caterpillar and borer control.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Fast knockdown effect',
      description:
        'Lambda Cyhalothrin delivers rapid nervous-system disruption while Chlorantraniliprole stops feeding — visible pest suppression soon after a well-timed spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual control',
      description:
        'The ZC capsule suspension adheres evenly to foliage and provides lasting protection between spray intervals during peak lepidopteran pressure.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls fall armyworm, bollworms, fruit borers, pod borers, stem borers, Spodoptera, Helicoverpa, thrips, and cutworms across major field and vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Excellent caterpillar control',
      description:
        'Targets lepidopteran larvae at early instars with contact, stomach, and translaminar activity for cleaner foliage and marketable produce.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Effective fall armyworm management',
      description:
        'A trusted choice for fall armyworm outbreaks in maize and other crops when applied at economic threshold with thorough canopy coverage.',
      icon: 'fas fa-seedling'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad spectrum pest control',
      description:
        'AMPIGO manages fall armyworm, bollworms, fruit borers, pod borers, stem borers, Spodoptera, Helicoverpa, thrips, and cutworms when sprayed at early larval stages.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast knockdown performance',
      description:
        'Lambda Cyhalothrin disrupts sodium channels for rapid paralysis while Chlorantraniliprole activates ryanodine receptors — stopping feeding damage quickly.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual activity',
      description:
        'The ZC formulation deposits a stable film on foliage, maintaining protection against newly hatched larvae between scheduled spray intervals.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Effective resistance management',
      description:
        'Two distinct IRAC groups (28 + 3A) in one product reduce selection pressure and support rotation strategies in integrated pest management programs.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Enhanced crop protection',
      description:
        'Contact, stomach, and translaminar action protects cotton bolls, maize cobs, chilli pods, tomato fruits, and vegetable foliage from borer and caterpillar damage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Better yield potential',
      description:
        'By limiting borer entry, defoliation, and fruit damage during critical growth windows, growers support healthier plants and improved productivity.',
      icon: 'fas fa-award'
    }
  ];

  whyChoose = [
    {
      title: 'Advanced ZC formulation',
      description:
        'Harishree\'s zinc/capsule suspension technology ensures uniform dispersion, excellent leaf spread, and dependable spray stability in the tank.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven dual-action synergy',
      description:
        'Combining diamide and pyrethroid chemistry addresses both active feeders and developing instars for more complete caterpillar and borer management.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured with strict quality control, dealer support, and batch-to-batch consistency growers rely on season after season.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 10 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply AMPIGO confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Fall Armyworm',
      description:
        'Provides strong activity against Spodoptera frugiperda larvae in maize and other crops when sprayed at early infestation with full canopy coverage.'
    },
    {
      name: 'American Bollworm',
      description:
        'Controls Helicoverpa armigera larvae feeding on cotton bolls, chilli pods, and tomato fruits at early instar stages.'
    },
    {
      name: 'Pink Bollworm',
      description:
        'Manages pink bollworm larvae that tunnel into cotton bolls and reduce fibre quality and lint yield.'
    },
    {
      name: 'Fruit Borer',
      description:
        'Effective against shoot and fruit borer species in tomato, brinjal, and chilli that bore into developing produce.'
    },
    {
      name: 'Stem Borer',
      description:
        'Suppresses stem-boring larvae that tunnel into stalks and weaken plant vigour in cotton, maize, and vegetable crops.'
    },
    {
      name: 'Pod Borer',
      description:
        'Controls pod borer species in pulses and soybean that attack developing pods and cause shriveled grains.'
    },
    {
      name: 'Spodoptera',
      description:
        'Knocks down Spodoptera litura and related armyworm species that cause heavy defoliation in chilli and vegetables.'
    },
    {
      name: 'Helicoverpa',
      description:
        'Targets Helicoverpa armigera — a major bollworm and fruit borer species across cotton, pulses, and solanaceous crops.'
    },
    {
      name: 'Tobacco Caterpillar',
      description:
        'Provides activity against tobacco caterpillar and related noctuid larvae in cotton, chilli, and vegetable fields.'
    },
    {
      name: 'Leaf Eating Caterpillar',
      description:
        'Controls defoliating caterpillars and loopers that strip foliage and reduce photosynthetic area during vegetative growth.'
    },
    {
      name: 'Thrips',
      description:
        'Offers supplementary activity against thrips when applied with good coverage of flowers and leaf undersides.'
    },
    {
      name: 'Cutworms',
      description:
        'Manages cutworm larvae that feed at the soil line and damage seedlings and young transplants in vegetable crops.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'Leading choice for bollworm management during square and boll formation with fast knockdown and dependable residual cover.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Maize',
      description: 'Protects against fall armyworm and stem borer during vegetative and cob development stages in maize fields.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Chilli',
      description: 'Defends against fruit borers and Spodoptera that damage pods, colour, and export quality in chilli crops.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Tomato',
      description: 'Controls fruit borers and leaf-eating caterpillars to reduce fruit drop and improve harvest grade.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Brinjal',
      description: 'Manages shoot and fruit borer pressure during flowering and fruit development for cleaner produce.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Okra',
      description: 'Controls fruit borer and caterpillar damage during pod formation for better marketable yield.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cabbage',
      description: 'Manages diamondback moth and caterpillars that damage heads and reduce cole crop marketability.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Cauliflower',
      description: 'Defends curds and foliage from borer and caterpillar damage during head development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Soybean',
      description: 'Controls pod borers and defoliating caterpillars during pod-fill for better grain weight and quality.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Pulses',
      description: 'Protects gram, pigeon pea, and other pulses from pod borers during critical pod-setting windows.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Vegetable Crops',
      description: 'Broad fit across brinjal, okra, cabbage, and other vegetables facing mixed caterpillar and borer pressure.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Bollworms, Helicoverpa, Spodoptera', dose: '10 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Maize', pests: 'Fall armyworm, stem borer', dose: '10 ml/pump', timing: 'Early larval stage at vegetative and cob development' },
    { crop: 'Chilli', pests: 'Fruit borer, Spodoptera, leaf caterpillars', dose: '10 ml/pump', timing: 'Early larval stage at fruit set' },
    { crop: 'Tomato', pests: 'Fruit borer, leaf caterpillars', dose: '10 ml/pump', timing: 'First sign of borer damage on fruits' },
    { crop: 'Brinjal', pests: 'Shoot/fruit borer, Spodoptera', dose: '10 ml/pump', timing: 'Early infestation at flowering' },
    { crop: 'Okra', pests: 'Fruit borer, caterpillars', dose: '10 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Cabbage', pests: 'Diamondback moth, caterpillars', dose: '10 ml/pump', timing: 'Preventive at head formation' },
    { crop: 'Cauliflower', pests: 'Diamondback moth, borers', dose: '10 ml/pump', timing: 'Early curd stage protection' },
    { crop: 'Soybean', pests: 'Pod borer, leaf caterpillars', dose: '10 ml/pump', timing: 'Pod initiation to pod fill' },
    { crop: 'Pulses', pests: 'Pod borer, Helicoverpa', dose: '10 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Vegetables', pests: 'Mixed borers and caterpillars', dose: '10 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'Fall Armyworm', crops: 'Maize, sorghum', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Bollworms', crops: 'Cotton, pulses', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Fruit Borers', crops: 'Tomato, chilli, brinjal', mode: 'Contact + stomach', efficacy: 'High with good coverage' },
    { pest: 'Pod Borers', crops: 'Pulses, soybean', mode: 'Contact + stomach', efficacy: 'High before pod entry' },
    { pest: 'Stem Borers', crops: 'Cotton, maize', mode: 'Contact + translaminar', efficacy: 'Moderate to high at early stage' },
    { pest: 'Spodoptera', crops: 'Chilli, vegetables', mode: 'Contact + stomach', efficacy: 'High on young instars' },
    { pest: 'Helicoverpa', crops: 'Cotton, tomato, pulses', mode: 'Dual action', efficacy: 'High at early infestation' },
    { pest: 'Leaf Eating Caterpillars', crops: 'Vegetables, cole crops', mode: 'Contact + stomach', efficacy: 'High with underside spray' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Contact', efficacy: 'Moderate with good coverage' },
    { pest: 'Cutworms', crops: 'Vegetables, maize', mode: 'Contact + stomach', efficacy: 'Moderate to high at early stage' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', ampigo: 'Dual: diamide (Chlorantraniliprole) + pyrethroid (Lambda Cyhalothrin)', traditional: 'Single MOA — pyrethroid or OP only' },
    { feature: 'Caterpillar spectrum', ampigo: 'Broad lepidopteran including fall armyworm and resistant Spodoptera', traditional: 'Limited or declining efficacy on tough caterpillars' },
    { feature: 'Knockdown speed', ampigo: 'Fast knockdown from Lambda Cyhalothrin + feeding cessation from Chlorantraniliprole', traditional: 'Either fast but short-lived, or slow-acting only' },
    { feature: 'Residual control', ampigo: 'Long-lasting ZC deposit on foliage', traditional: 'Shorter residual; more frequent sprays needed' },
    { feature: 'Resistance risk', ampigo: 'Two IRAC groups reduce resistance build-up', traditional: 'Higher resistance risk with repeated single-MOA use' },
    { feature: 'Application dose', ampigo: '10 ml per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonSingleIngredient = [
    { feature: 'Chlorantraniliprole alone', ampigo: 'Chlorantraniliprole + Lambda Cyhalothrin combination', single: 'Diamide only — slower knockdown on large larvae' },
    { feature: 'Lambda Cyhalothrin alone', ampigo: 'Chlorantraniliprole + Lambda Cyhalothrin combination', single: 'Fast knockdown but limited residual on tough caterpillars' },
    { feature: 'Larval stages covered', ampigo: 'Early to mid instars plus active feeders', single: 'Each single active covers a narrower larval window' },
    { feature: 'Residual duration', ampigo: 'Extended protection from diamide component', single: 'Shorter field persistence alone' },
    { feature: 'Resistance management', ampigo: 'Two MOAs in one spray', single: 'Requires separate rotation products' },
    { feature: 'Cost efficiency', ampigo: 'One product, one mix, dual action', single: 'May need tank mix or sequential sprays' }
  ];

  comparisonZcFormulation = [
    { feature: 'Particle stability', ampigo: 'ZC capsule suspension — uniform, stable droplets', other: 'EC/SC may separate or settle in tank' },
    { feature: 'Leaf coverage', ampigo: 'Even spread with translaminar movement', other: 'Variable coverage depending on formulation' },
    { feature: 'Rainfastness', ampigo: 'Good adhesion once spray deposit dries', other: 'Varies; some formulations wash off faster' },
    { feature: 'Tank mix compatibility', ampigo: 'Stable ZC base; jar test recommended', other: 'Compatibility varies by formulation type' },
    { feature: 'Residual activity', ampigo: 'Extended field persistence from ZC deposit', other: 'Often shorter residual with conventional EC' },
    { feature: 'Application convenience', ampigo: '10 ml/pump — easy field dosing', other: 'Dose and mixing steps vary widely' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'AMPIGO' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'ZC (Zinc/Capsule Suspension)' },
      { label: 'Physical form', value: 'Liquid suspension' },
      { label: 'Active ingredients', value: 'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC' },
      { label: 'Chemical group', value: 'Anthranilic Diamide + Synthetic Pyrethroid' },
      {
        label: 'Mode of action',
        value: 'Chlorantraniliprole activates ryanodine receptors (IRAC 28); Lambda Cyhalothrin modulates sodium channels (IRAC 3A)'
      },
      { label: 'Action type', value: 'Contact, stomach, and translaminar' },
      {
        label: 'Target pests',
        value: 'Fall armyworm, Bollworms, Fruit borers, Pod borers, Stem borers, Spodoptera, Helicoverpa, Thrips, Cutworms'
      },
      { label: 'Target crops', value: 'Cotton, Maize, Chilli, Tomato, Brinjal, Okra, Cabbage, Cauliflower, Soybean, Pulses, Vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (ZC liquid); sizes 100 ml, 250 ml, 500 ml' },
      { label: 'Recommended dose', value: '10 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early pest infestation or as per ETL/label' },
      { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries on foliage' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'AMPIGO' },
    { label: 'Brand / Trade Name', value: 'AMPIGO' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'ZC (Zinc/Capsule Suspension)' },
    { label: 'Active Ingredients', value: 'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC' },
    { label: 'Chemical Group', value: 'Anthranilic Diamide + Synthetic Pyrethroid' },
    {
      label: 'Mode of Action',
      value:
        'Chlorantraniliprole activates ryanodine receptors causing feeding cessation (IRAC Group 28); Lambda Cyhalothrin modulates voltage-gated sodium channels for rapid knockdown (IRAC Group 3A)'
    },
    { label: 'Action Type', value: 'Contact, stomach, and translaminar' },
    {
      label: 'Target Pests',
      value: 'Fall armyworm, Bollworms, Fruit borers, Pod borers, Stem borers, Spodoptera, Helicoverpa, Tobacco caterpillar, Leaf eating caterpillars, Thrips, Cutworms'
    },
    { label: 'Target Crops', value: 'Cotton, Maize, Chilli, Tomato, Brinjal, Okra, Cabbage, Cauliflower, Soybean, Pulses, Vegetables' },
    { label: 'Recommended Dose', value: '10 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early pest infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Physical Form', value: 'Liquid suspension' },
    { label: 'Packaging Type', value: 'Bottle (100 ml, 250 ml, 500 ml)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Spray deposit on foliage',
      description:
        'On application, AMPIGO forms an even ZC film on leaf surfaces. Caterpillars and borers ingest or contact the active deposit while feeding on treated foliage.'
    },
    {
      title: 'Lambda Cyhalothrin — rapid knockdown',
      description:
        'Lambda Cyhalothrin binds to sodium channels in nerve cells, causing paralysis and quick cessation of movement in exposed pests.'
    },
    {
      title: 'Chlorantraniliprole — feeding cessation',
      description:
        'Chlorantraniliprole activates ryanodine receptors, depleting calcium stores in muscle cells. Affected larvae stop feeding within hours.'
    },
    {
      title: 'Dual-action residual protection',
      description:
        'The combination delivers immediate knockdown plus extended control of newly hatched larvae, protecting crop yield and foliage quality between sprays.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 10 ml dose',
      text: 'Measure exactly 10 ml per pump to maintain efficacy, protect crops, and slow resistance development in pest populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides where caterpillars, borers, and armyworm larvae hide for maximum control.'
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
      label: 'Reduced pest infestation',
      value: 'Growers report lower larval counts and visible feeding stop within days of a well-timed AMPIGO spray.'
    },
    {
      label: 'Better crop health',
      value: 'Cleaner foliage and fewer borer holes support stronger plant vigour through critical growth stages.'
    },
    {
      label: 'Increased plant vigour',
      value: 'Protected canopies maintain photosynthetic capacity, supporting healthier plants during peak pest seasons.'
    },
    {
      label: 'Improved productivity',
      value: 'Timely caterpillar and borer control helps preserve bolls, cobs, pods, and fruits for better harvest outcomes.'
    }
  ];

  relatedProducts = [
    {
      name: 'Chlorantraniliprole 18.5% SC',
      description: 'Cora-5 for borer and larval pest management with systemic and contact action.',
      route: '/product/chlorantraniliprole-18-5-sc',
      image: 'assets/products/chlorantraniliprole-18-5-sc.png',
      imageAlt: 'Chlorantraniliprole 18.5% SC Cora-5 insecticide by Harishree Crop Science'
    },
    {
      name: 'TURBO (Novaluron + Indoxacarb SC)',
      description: 'Dual-action IGR + oxadiazine insecticide for caterpillar and borer control.',
      route: '/product/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'TURBO Novaluron Indoxacarb SC insecticide by Harishree Crop Science'
    },
    {
      name: 'Deltamethrin 2.8% EC',
      description: 'DR. DELTA pyrethroid for rapid knockdown of mixed chewing and sucking pests.',
      route: '/product/deltamethrin-2-8-ec',
      image: 'assets/products/insecticide/dr-delta.jpg',
      imageAlt: 'Deltamethrin 2.8% EC DR. DELTA insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC used for?',
      answer:
        '<strong>Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC</strong> (marketed as <strong>AMPIGO</strong>) is a dual-action insecticide for controlling fall armyworm, bollworms, fruit borers, pod borers, stem borers, and caterpillars in cotton, maize, chilli, tomato, and vegetables.',
      answerPlain:
        'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC (marketed as AMPIGO) is a dual-action insecticide for controlling fall armyworm, bollworms, fruit borers, pod borers, stem borers, and caterpillars in cotton, maize, chilli, tomato, and vegetables.'
    },
    {
      question: 'How much AMPIGO should be used per pump?',
      answer:
        'The standard recommended dose of <strong>AMPIGO</strong> is <strong>10 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of AMPIGO is 10 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can use AMPIGO?',
      answer:
        '<strong>AMPIGO</strong> is used on cotton, maize, chilli, tomato, brinjal, okra, cabbage, cauliflower, soybean, pulses, and a wide range of vegetables. Follow label recommendations for crop-specific guidance.',
      answerPlain:
        'AMPIGO is used on cotton, maize, chilli, tomato, brinjal, okra, cabbage, cauliflower, soybean, pulses, and a wide range of vegetables. Follow label recommendations for crop-specific guidance.'
    },
    {
      question: 'Which pests does AMPIGO control?',
      answer:
        'AMPIGO controls <strong>fall armyworm, bollworms, fruit borers, pod borers, stem borers, Spodoptera, Helicoverpa, thrips, and cutworms</strong> when applied at early larval stages with thorough coverage.',
      answerPlain:
        'AMPIGO controls fall armyworm, bollworms, fruit borers, pod borers, stem borers, Spodoptera, Helicoverpa, thrips, and cutworms when applied at early larval stages with thorough coverage.'
    },
    {
      question: 'Is AMPIGO safe for crops?',
      answer:
        'Yes, when used at the recommended dose and timing, AMPIGO is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, AMPIGO is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'What is the dose of AMPIGO insecticide?',
      answer:
        'The recommended dose is <strong>10 ml per pump</strong> of a 15-litre knapsack sprayer. Adjust water volume based on crop canopy density and local advisory.',
      answerPlain:
        'The recommended dose is 10 ml per pump of a 15-litre knapsack sprayer. Adjust water volume based on crop canopy density and local advisory.'
    },
    {
      question: 'How does AMPIGO work against caterpillars?',
      answer:
        'AMPIGO combines two modes of action: <strong>Lambda Cyhalothrin</strong> disrupts sodium channels for rapid knockdown, while <strong>Chlorantraniliprole</strong> activates ryanodine receptors to stop feeding.',
      answerPlain:
        'AMPIGO combines two modes of action: Lambda Cyhalothrin disrupts sodium channels for rapid knockdown, while Chlorantraniliprole activates ryanodine receptors to stop feeding.'
    },
    {
      question: 'What is the difference between AMPIGO and single-ingredient insecticides?',
      answer:
        'AMPIGO delivers <strong>two complementary actives</strong> in one spray — fast knockdown plus long residual feeding cessation — whereas single-ingredient products cover only one mode of action.',
      answerPlain:
        'AMPIGO delivers two complementary actives in one spray — fast knockdown plus long residual feeding cessation — whereas single-ingredient products cover only one mode of action.'
    },
    {
      question: 'Can AMPIGO be used for cotton bollworm control?',
      answer:
        'Yes. <strong>AMPIGO</strong> is widely used for cotton bollworm and Helicoverpa management during square and boll formation when applied at economic threshold.',
      answerPlain:
        'Yes. AMPIGO is widely used for cotton bollworm and Helicoverpa management during square and boll formation when applied at economic threshold.'
    },
    {
      question: 'Is AMPIGO effective against fall armyworm?',
      answer:
        'AMPIGO provides strong activity against <strong>fall armyworm (Spodoptera frugiperda)</strong> in maize when sprayed on young larvae with good canopy coverage at economic threshold.',
      answerPlain:
        'AMPIGO provides strong activity against fall armyworm (Spodoptera frugiperda) in maize when sprayed on young larvae with good canopy coverage at economic threshold.'
    },
    {
      question: 'How do I mix AMPIGO for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>10 ml of AMPIGO</strong>, top up with water, and agitate. The ZC formulation disperses easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 10 ml of AMPIGO, top up with water, and agitate. The ZC formulation disperses easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for AMPIGO?',
      answer:
        '<strong>AMPIGO</strong> is available in <strong>100 ml, 250 ml, and 500 ml</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'AMPIGO is available in 100 ml, 250 ml, and 500 ml packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is the shelf life of AMPIGO?',
      answer:
        'When stored sealed in a cool, dry place, <strong>AMPIGO</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, AMPIGO has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'Is AMPIGO compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'When is the best time to spray AMPIGO?',
      answer:
        'Spray at <strong>early larval infestation</strong> or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage.',
      answerPlain:
        'Spray at early larval infestation or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage.'
    },
    {
      question: 'What precautions should I take when using AMPIGO?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'What is Chlorantraniliprole in AMPIGO?',
      answer:
        '<strong>Chlorantraniliprole</strong> is an anthranilic diamide insecticide (IRAC Group 28) that activates ryanodine receptors, causing feeding cessation and larval mortality in caterpillars and borers.',
      answerPlain:
        'Chlorantraniliprole is an anthranilic diamide insecticide (IRAC Group 28) that activates ryanodine receptors, causing feeding cessation and larval mortality in caterpillars and borers.'
    },
    {
      question: 'What is Lambda Cyhalothrin in AMPIGO?',
      answer:
        '<strong>Lambda Cyhalothrin</strong> is a synthetic pyrethroid (IRAC Group 3A) that modulates sodium channels in insect nerve cells, delivering rapid knockdown after contact or ingestion.',
      answerPlain:
        'Lambda Cyhalothrin is a synthetic pyrethroid (IRAC Group 3A) that modulates sodium channels in insect nerve cells, delivering rapid knockdown after contact or ingestion.'
    },
    {
      question: 'Can AMPIGO be used in maize for fall armyworm?',
      answer:
        'Yes. <strong>AMPIGO</strong> is a popular maize insecticide for fall armyworm when applied at early larval stage with 10 ml per pump and full canopy coverage.',
      answerPlain:
        'Yes. AMPIGO is a popular maize insecticide for fall armyworm when applied at early larval stage with 10 ml per pump and full canopy coverage.'
    },
    {
      question: 'Can AMPIGO be used in chilli crops?',
      answer:
        'Yes. <strong>AMPIGO</strong> is effective for fruit borers and Spodoptera in chilli when applied at the right crop stage with 10 ml per pump.',
      answerPlain:
        'Yes. AMPIGO is effective for fruit borers and Spodoptera in chilli when applied at the right crop stage with 10 ml per pump.'
    },
    {
      question: 'What is the technical name of AMPIGO insecticide?',
      answer:
        'The technical composition is <strong>Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC</strong>. AMPIGO is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC. AMPIGO is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'Is AMPIGO a broad spectrum insecticide?',
      answer:
        'AMPIGO is a <strong>broad-spectrum lepidopteran insecticide</strong> with supplementary activity on thrips. It is primarily designed for caterpillars, borers, and fall armyworm.',
      answerPlain:
        'AMPIGO is a broad-spectrum lepidopteran insecticide with supplementary activity on thrips. It is primarily designed for caterpillars, borers, and fall armyworm.'
    },
    {
      question: 'How does AMPIGO compare to conventional pyrethroid sprays?',
      answer:
        'Unlike pyrethroids alone, <strong>AMPIGO</strong> combines diamide and pyrethroid chemistry for stronger caterpillar control, feeding cessation, and better resistance-management value.',
      answerPlain:
        'Unlike pyrethroids alone, AMPIGO combines diamide and pyrethroid chemistry for stronger caterpillar control, feeding cessation, and better resistance-management value.'
    },
    {
      question: 'What is a ZC formulation insecticide?',
      answer:
        'ZC (Zinc/Capsule Suspension) is an advanced formulation where active ingredients are encapsulated for <strong>uniform dispersion, better leaf coverage, and extended residual activity</strong> compared to conventional EC sprays.',
      answerPlain:
        'ZC (Zinc/Capsule Suspension) is an advanced formulation where active ingredients are encapsulated for uniform dispersion, better leaf coverage, and extended residual activity compared to conventional EC sprays.'
    },
    {
      question: 'Does AMPIGO have translaminar activity?',
      answer:
        'Yes. <strong>Chlorantraniliprole</strong> in AMPIGO moves translaminarly into leaf tissue, protecting both upper and lower leaf surfaces where caterpillars feed.',
      answerPlain:
        'Yes. Chlorantraniliprole in AMPIGO moves translaminarly into leaf tissue, protecting both upper and lower leaf surfaces where caterpillars feed.'
    },
    {
      question: 'How does AMPIGO help with resistance management?',
      answer:
        'AMPIGO combines <strong>IRAC Group 28 and Group 3A</strong> chemistry in one application, reducing repeated exposure to a single mode of action and supporting IPM rotation programs.',
      answerPlain:
        'AMPIGO combines IRAC Group 28 and Group 3A chemistry in one application, reducing repeated exposure to a single mode of action and supporting IPM rotation programs.'
    },
    {
      question: 'What is AMPIGO insecticide dose per acre?',
      answer:
        'Field dose varies by crop and water volume. The standard knapsack guidance is <strong>10 ml per 15-litre pump</strong>. Consult the label and local advisory for acre-wise calculations.',
      answerPlain:
        'Field dose varies by crop and water volume. The standard knapsack guidance is 10 ml per 15-litre pump. Consult the label and local advisory for acre-wise calculations.'
    },
    {
      question: 'Can I tank mix AMPIGO with fungicides?',
      answer:
        'AMPIGO is generally compatible with commonly used fungicides, but always perform a <strong>jar test</strong> first and follow label directions for tank-mix partners.',
      answerPlain:
        'AMPIGO is generally compatible with commonly used fungicides, but always perform a jar test first and follow label directions for tank-mix partners.'
    },
    {
      question: 'How soon after spraying AMPIGO can I re-enter the field?',
      answer:
        'Observe a <strong>24-hour re-entry interval</strong> wearing appropriate PPE before entering treated fields, unless local label guidance specifies otherwise.',
      answerPlain:
        'Observe a 24-hour re-entry interval wearing appropriate PPE before entering treated fields, unless local label guidance specifies otherwise.'
    },
    {
      question: 'Where can I buy AMPIGO insecticide in India?',
      answer:
        'Contact <strong>Harishree Crop Science</strong> or your nearest authorized agricultural dealer for AMPIGO availability, pricing, and crop-specific usage guidance.',
      answerPlain:
        'Contact Harishree Crop Science or your nearest authorized agricultural dealer for AMPIGO availability, pricing, and crop-specific usage guidance.'
    },
    {
      question: 'Is AMPIGO effective against Spodoptera in vegetables?',
      answer:
        'Yes. <strong>AMPIGO</strong> provides strong activity against Spodoptera species in chilli, brinjal, cabbage, and other vegetables when sprayed on young larvae with underside coverage.',
      answerPlain:
        'Yes. AMPIGO provides strong activity against Spodoptera species in chilli, brinjal, cabbage, and other vegetables when sprayed on young larvae with underside coverage.'
    }
  ];

  testimonials = [
    { name: 'Ramesh Patel', location: 'Gujarat', text: 'AMPIGO gave excellent bollworm control in my cotton. Larvae stopped feeding within two days and the crop stayed clean through boll development.', rating: 5 },
    { name: 'Suresh Kulkarni', location: 'Maharashtra', text: 'I used AMPIGO on maize for fall armyworm. The dual-action formula worked better than my old single-product pyrethroid spray.', rating: 5 },
    { name: 'Kiran Reddy', location: 'Andhra Pradesh', text: '10 ml per pump is easy to remember. AMPIGO mixed smoothly and gave good fruit borer control in my tomato field.', rating: 5 },
    { name: 'Prakash Singh', location: 'Madhya Pradesh', text: 'Fall armyworm damage in my maize dropped noticeably after one well-timed AMPIGO spray at early larval stage.', rating: 4 },
    { name: 'Anil Sharma', location: 'Rajasthan', text: 'Harishree AMPIGO is now my go-to for caterpillar outbreaks. Residual effect lasted longer than expected on cotton.', rating: 5 },
    { name: 'Vijay Kumar', location: 'Tamil Nadu', text: 'Chilli Spodoptera pressure reduced after AMPIGO. Pods were cleaner and colour was better at harvest.', rating: 4 },
    { name: 'Hitesh Desai', location: 'Gujarat', text: 'Good results on soybean pod borer. I rotate AMPIGO with other MOAs for resistance management in my IPM program.', rating: 5 },
    { name: 'Mahesh Yadav', location: 'Uttar Pradesh', text: 'The ZC formulation spreads well. AMPIGO controlled Helicoverpa in my tomato field effectively with one spray.', rating: 5 },
    { name: 'Dinesh Choudhary', location: 'Gujarat', text: 'Dealer recommended AMPIGO for cotton bollworm. Visible improvement in boll quality after spraying at square stage.', rating: 4 },
    { name: 'Bhavesh Mehta', location: 'Gujarat', text: 'Reliable caterpillar control across seasons. AMPIGO has become a fixed part of my crop protection program.', rating: 5 },
    { name: 'Sanjay Rao', location: 'Karnataka', text: 'Used AMPIGO on brinjal for fruit borer. Less fruit drop and cleaner harvest compared to last season.', rating: 5 }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '72',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure AMPIGO', text: 'Accurately measure 10 ml of Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC (AMPIGO) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 10 ml into the water. The ZC formulation disperses easily into a uniform suspension.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage in calm weather, covering leaf undersides where caterpillars, borers, and armyworm larvae feed.' },
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
      productImageAlt: 'AMPIGO Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC Insecticide',
      productImageCaption: 'AMPIGO Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC insecticide pack by Harishree Crop Science',
      description:
        'AMPIGO (Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC) by Harishree Crop Science is a premium dual-action ZC insecticide for fall armyworm, bollworms, fruit borers, and caterpillars in cotton, maize, chilli, tomato, and vegetables. Dose: 10 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'AMPIGO-CHLORANTRANILIPROLE-LAMBDA-ZC',
      mpn: 'AMPIGO-CHLORANTRANILIPROLE-LAMBDA-ZC',
      dose: '10 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply AMPIGO (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of AMPIGO (Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC) for foliar application at 10 ml/pump.',
      alternateNames: [
        'AMPIGO',
        'AMPIGO Insecticide',
        'AMPIGO Chlorantraniliprole Lambda Cyhalothrin',
        'Chlorantraniliprole 9.3 Lambda Cyhalothrin 4.6 ZC',
        'Chlorantraniliprole + Lambda Cyhalothrin Insecticide',
        'Chlorantraniliprole Lambda Cyhalothrin ZC'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `AMPIGO (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'ZC (Zinc/Capsule Suspension)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC (AMPIGO) dual-action ZC insecticide by Harishree. Fast knockdown & long residual control of FAW, bollworms & caterpillars. Dose: 10 ml/pump.';

    this.seo.setAll(
      {
        title: 'Chlorantraniliprole 9.3 + Lambda Cyhalothrin 4.6 ZC | AMPIGO',
        description: desc,
        keywords:
          'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC, AMPIGO, Chlorantraniliprole 9.3 Lambda Cyhalothrin 4.6 ZC, Chlorantraniliprole Lambda Cyhalothrin Insecticide, Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC Uses, Chlorantraniliprole Lambda Cyhalothrin Dose, Chlorantraniliprole Lambda Cyhalothrin Dose Per Pump, Chlorantraniliprole Insecticide, Lambda Cyhalothrin Insecticide, ZC Formulation Insecticide, Dual Action Insecticide, Broad Spectrum Insecticide, Fall Armyworm Insecticide, Caterpillar Control Insecticide, Bollworm Control Insecticide, Fruit Borer Control, Stem Borer Control, Pod Borer Control, Cotton Insecticide, Maize Insecticide, Chilli Insecticide, Tomato Insecticide, Vegetable Crop Insecticide, Agricultural Insecticide, Crop Protection Solution, AMPIGO Insecticide, AMPIGO Chlorantraniliprole Lambda Cyhalothrin, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC (AMPIGO) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC | AMPIGO Insecticide',
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
