import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'EXTRA_H_GOR_DIMETHOATE_30_EC';
const INDICATIVE_LIST_PRICE_INR = 141;

@Component({
  selector: 'app-dimethoate-30-ec-h-gor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dimethoate-30-ec-h-gor.component.html',
  styleUrl: './dimethoate-30-ec-h-gor.component.scss'
})
export class Dimethoate30EcHGorComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/dimethoate-30-ec-h-gor';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/dimethoate-30-ec.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Dimethoate 30% EC';
  brandName = 'H GOR';

  featuredSnippetAnswer =
    'Dimethoate 30% EC (H GOR) is a systemic and contact organophosphate insecticide that controls aphids, jassids, whiteflies, thrips, leafhoppers, and mites in cotton, chilli, vegetables, pulses, and oilseed crops. It absorbs into plant tissue and protects new growth. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '250 ml', price: 141, featured: false, sku: 'H-GOR-250ML' },
    { volume: '500 ml', price: 266, featured: true, sku: 'H-GOR-500ML' },
    { volume: '1 LTR', price: 507, featured: false, sku: 'H-GOR-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Systemic insecticide',
      description:
        'Dimethoate translocates within plant tissues after absorption, protecting new shoots and leaves from hidden sucking pests that contact-only sprays miss.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Broad spectrum protection',
      description:
        'Controls aphids, jassids, whiteflies, thrips, leafhoppers, plant hoppers, and mites across cotton, chilli, brinjal, tomato, okra, mustard, pulses, and vegetables.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Effective against sucking pests',
      description:
        'H GOR is a trusted choice for hopper burn, aphid colonies, whitefly outbreaks, and thrips damage when applied at economic threshold with full coverage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Fast absorption',
      description:
        'The EC formulation penetrates leaf cuticle quickly, delivering both immediate contact knockdown and systemic follow-through inside the plant.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long lasting control',
      description:
        'Systemic movement plus surface deposit provides dependable residual protection between spray intervals during peak sucking pest pressure.',
      icon: 'fas fa-clock'
    }
  ];

  keyBenefits = [
    {
      title: 'Rapid pest control',
      description:
        'Dimethoate inhibits acetylcholinesterase in insect nerve tissue, causing fast paralysis and quick cessation of sap-sucking damage on treated crops.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Effective against sucking pests',
      description:
        'H GOR manages aphids, jassids, whiteflies, thrips, leafhoppers, and mites when applied at early infestation with thorough canopy coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Excellent crop protection',
      description:
        'Systemic action protects tender new growth that contact-only insecticides cannot reach, supporting cleaner foliage and healthier plant vigour.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Long lasting performance',
      description:
        'The emulsifiable concentrate deposit and internal plant movement continue working between sprays, lowering repeat application frequency.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Better yield potential',
      description:
        'By controlling key sucking pests during square, boll, fruit, and pod stages, growers protect yield quality and marketable produce.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Proven organophosphate chemistry',
      description:
        'Dimethoate is a widely used systemic active ingredient across India for cotton jassids, chilli thrips, and vegetable aphid management.',
      icon: 'fas fa-flask'
    }
  ];

  whyChoose = [
    {
      title: 'Premium systemic EC formulation',
      description:
        'Harishree\'s optimized emulsifiable concentrate ensures uniform dispersion, rapid leaf uptake, and dependable systemic movement within the plant.',
      icon: 'fas fa-award'
    },
    {
      title: 'Dual mode of action',
      description:
        'H GOR combines systemic translocation with contact activity — one spray addresses pests on leaf surfaces and those feeding inside treated tissue.',
      icon: 'fas fa-layer-group'
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
        'Clear 30 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply H GOR confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Aphids',
      description:
        'Controls aphid colonies on tender shoots and leaf undersides that cause curling, honeydew deposition, and sooty mould in cotton, vegetables, and pulses.'
    },
    {
      name: 'Jassids',
      description:
        'Manages jassid populations that cause hopper burn, leaf curling, and reduced photosynthesis — a critical pest in cotton and okra fields.'
    },
    {
      name: 'Whiteflies',
      description:
        'Knocks down whitefly adults and nymphs that suck sap and transmit viral diseases in cotton, chilli, brinjal, and vegetable crops.'
    },
    {
      name: 'Thrips',
      description:
        'Effective against thrips that scar leaves, flowers, and fruits — a major pest concern in chilli and vegetable production.'
    },
    {
      name: 'Leafhoppers',
      description:
        'Provides activity against leafhopper species that feed on phloem sap and cause stippling, yellowing, and reduced plant vigour.'
    },
    {
      name: 'Plant Hoppers',
      description:
        'Suppresses plant hopper populations on rice, cotton, and other crops when applied at early infestation with good spray coverage.'
    },
    {
      name: 'Mites',
      description:
        'Offers acaricidal activity against spider mites and related species that cause bronzing and defoliation under hot, dry conditions.'
    },
    {
      name: 'Sucking Insects',
      description:
        'Broad activity against mixed sucking pest complexes that damage foliage, reduce photosynthesis, and lower crop productivity.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'A leading systemic choice for jassid, aphid, and whitefly management during square and boll stages with dependable internal plant protection.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects against thrips, aphids, mites, and whiteflies that damage pods, reduce colour intensity, and affect export quality.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Brinjal',
      description:
        'Controls jassids, aphids, and whiteflies to reduce leaf damage, fruit drop, and quality loss during flowering and fruiting.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Tomato',
      description:
        'Manages whiteflies, aphids, and thrips during vegetative and fruit development for cleaner, marketable produce.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Okra',
      description:
        'Defends against jassids and aphids during flowering and pod formation — critical stages for okra yield and pod quality.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Mustard',
      description:
        'Controls aphids and other sucking pests during rosette and flowering stages in mustard and other brassica oilseed crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Pulses',
      description:
        'Manages aphids and jassids during pod-setting windows in gram, pigeon pea, and other pulse crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Oilseed Crops',
      description:
        'Controls aphids, jassids, and thrips in soybean, groundnut, mustard, and sunflower during critical growth stages.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Vegetables',
      description:
        'Broad fit across solanaceous and cole crops facing mixed sucking pest pressure throughout the growing season.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Jassids, aphids, whiteflies, thrips', dose: '30 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, mites, whiteflies', dose: '30 ml/pump', timing: 'Early infestation at vegetative and fruit set' },
    { crop: 'Brinjal', pests: 'Jassids, aphids, whiteflies', dose: '30 ml/pump', timing: 'First sign of hopper burn or aphid colonies' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips', dose: '30 ml/pump', timing: 'Early pest buildup on foliage' },
    { crop: 'Okra', pests: 'Jassids, aphids', dose: '30 ml/pump', timing: 'Flowering to pod formation' },
    { crop: 'Mustard', pests: 'Aphids, thrips', dose: '30 ml/pump', timing: 'At early aphid colony formation' },
    { crop: 'Pulses', pests: 'Aphids, jassids, thrips', dose: '30 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Oilseeds', pests: 'Aphids, jassids, thrips', dose: '30 ml/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '30 ml/pump', timing: 'Early infestation with good coverage' }
  ];

  pestWiseControl = [
    { pest: 'Aphids', crops: 'Cotton, vegetables, pulses, mustard', mode: 'Systemic + contact', efficacy: 'High on active colonies' },
    { pest: 'Jassids', crops: 'Cotton, okra, pulses', mode: 'Systemic + contact', efficacy: 'High at early infestation' },
    { pest: 'Whiteflies', crops: 'Cotton, chilli, vegetables', mode: 'Systemic + contact', efficacy: 'High with underside spray' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Systemic + contact', efficacy: 'High with good coverage' },
    { pest: 'Leafhoppers', crops: 'Cotton, pulses, vegetables', mode: 'Systemic + contact', efficacy: 'Moderate to high' },
    { pest: 'Plant Hoppers', crops: 'Rice, cotton', mode: 'Systemic + contact', efficacy: 'Moderate at early stage' },
    { pest: 'Mites', crops: 'Chilli, vegetables, cotton', mode: 'Contact + translaminar', efficacy: 'Moderate to high' },
    { pest: 'Sucking Insects', crops: 'All labeled crops', mode: 'Systemic + contact', efficacy: 'High with timely application' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', hgor: 'Systemic + contact organophosphate', traditional: 'Contact-only with limited internal protection' },
    { feature: 'Pest spectrum', hgor: 'Broad — aphids, jassids, whiteflies, thrips, mites', traditional: 'Often targets only one pest group' },
    { feature: 'New growth protection', hgor: 'Systemic movement protects emerging shoots', traditional: 'Only protects sprayed leaf surfaces' },
    { feature: 'Knockdown speed', hgor: 'Fast via AChE inhibition + systemic follow-through', traditional: 'Varies; slower on hidden pests' },
    { feature: 'Crop fit', hgor: 'Cotton, chilli, vegetables, pulses, oilseeds, mustard', traditional: 'Limited crop labels on older products' },
    { feature: 'Application dose', hgor: '30 ml per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonSystemic = [
    { feature: 'Active ingredient', hgor: 'Dimethoate 30% EC — proven systemic OP', other: 'Contact-only pyrethroids or non-systemic OPs' },
    { feature: 'Internal plant movement', hgor: 'Yes — translocates to protect new growth', other: 'No — surface deposit only' },
    { feature: 'Hidden pest control', hgor: 'Reaches pests feeding inside treated tissue', other: 'Misses pests on unsprayed new shoots' },
    { feature: 'Pest spectrum', hgor: 'Specialist sucking pest control', other: 'Often chewing pest focused' },
    { feature: 'Residual duration', hgor: 'Good field persistence with systemic action', other: 'Shorter residual on some contact products' },
    { feature: 'Value per acre', hgor: 'One product, proven dose, systemic protection', other: 'May need multiple products or tank mixes' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'H GOR' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid emulsion' },
      { label: 'Active ingredient', value: 'Dimethoate 30% EC' },
      { label: 'Chemical group', value: 'Organophosphate' },
      {
        label: 'Mode of action',
        value: 'Inhibits acetylcholinesterase (AChE) — systemic and contact action (IRAC Group 1B)'
      },
      { label: 'Action type', value: 'Systemic and contact' },
      {
        label: 'Target pests',
        value: 'Aphids, Jassids, Whiteflies, Thrips, Leafhoppers, Plant hoppers, Mites, Sucking insects'
      },
      { label: 'Target crops', value: 'Cotton, Chilli, Brinjal, Tomato, Okra, Mustard, Pulses, Oilseed crops, Vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '30 ml/pump' },
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
    { label: 'Product Name', value: 'H GOR' },
    { label: 'Brand / Trade Name', value: 'H GOR' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Active Ingredient', value: 'Dimethoate 30% EC' },
    { label: 'Chemical Group', value: 'Organophosphate' },
    {
      label: 'Mode of Action',
      value:
        'Dimethoate inhibits acetylcholinesterase in insect nerve tissue, disrupting nerve signal transmission and causing paralysis (IRAC Group 1B)'
    },
    { label: 'Action Type', value: 'Systemic and contact' },
    {
      label: 'Target Pests',
      value: 'Aphids, Jassids, Whiteflies, Thrips, Leafhoppers, Plant hoppers, Mites, Sucking insects'
    },
    { label: 'Target Crops', value: 'Cotton, Chilli, Brinjal, Tomato, Okra, Mustard, Pulses, Oilseed crops, Vegetables' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
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
    { label: 'Physical Form', value: 'Liquid emulsion' },
    { label: 'Packaging Type', value: 'Bottle (250 ml, 500 ml, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Rapid leaf absorption',
      description:
        'On application, H GOR is absorbed through the leaf cuticle and enters the plant vascular system, beginning systemic translocation within hours.'
    },
    {
      title: 'Contact action on pest body',
      description:
        'Dimethoate penetrates the insect cuticle on direct contact, rapidly affecting nerve function and stopping pest movement and sap feeding.'
    },
    {
      title: 'Systemic movement within plant',
      description:
        'The active ingredient moves through phloem and xylem tissues, reaching new shoots and leaves that were not directly sprayed.'
    },
    {
      title: 'Nervous system disruption',
      description:
        'Dimethoate inhibits acetylcholinesterase (AChE), causing accumulation of acetylcholine and continuous nerve stimulation leading to paralysis and death.'
    },
    {
      title: 'Residual protection on crop',
      description:
        'Combined surface deposit and internal plant concentration continue working between sprays, protecting foliage from newly arriving sucking pests.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 30 ml dose',
      text: 'Measure exactly 30 ml per pump to maintain efficacy, protect crops, and slow resistance development in pest populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides where whiteflies, thrips, and aphids congregate for maximum systemic uptake.'
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
      label: 'Reduced pest population',
      value: 'Growers report lower aphid, jassid, and whitefly counts within days of a well-timed spray at 30 ml per pump.'
    },
    {
      label: 'Better crop health',
      value: 'Cleaner foliage with less hopper burn, curling, and honeydew improves overall plant vigour and photosynthesis.'
    },
    {
      label: 'Improved growth',
      value: 'Systemic protection of new shoots supports uninterrupted vegetative and reproductive development during pest pressure.'
    },
    {
      label: 'Higher yield potential',
      value: 'Protecting squares, bolls, fruits, and pods during critical stages supports better yield and marketable produce quality.'
    }
  ];

  relatedProducts = [
    {
      name: 'HIL THENE (Acephate 75% SP)',
      description: 'Single-AI organophosphate insecticide for thrips, aphids, whiteflies, jassids, and bollworm control in cotton, chilli, and vegetables.',
      route: '/product/acephate-75-sp',
      image: 'assets/products/insecticide/acephate-75-sp.jpg',
      imageAlt: 'HIL THENE Acephate 75% SP insecticide by Harishree Crop Science'
    },
    {
      name: 'Profenofos 50% EC (EXTRA PROFEX)',
      description: 'Broad-spectrum organophosphate for bollworms, whiteflies, aphids, and caterpillars in cotton and vegetables.',
      route: '/products/insecticide/profenofos-50-ec',
      image: 'assets/products/insecticide/profenofos-50-ec.jpg',
      imageAlt: 'Profenofos 50% EC EXTRA PROFEX insecticide by Harishree Crop Science'
    },
    {
      name: 'Novaluron 5.25% + Indoxacarb 4.5% SC (Turbo)',
      description: 'Dual-action IGR and oxadiazine for caterpillar and borer control in cotton, chilli, and vegetables.',
      route: '/product/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'Novaluron Indoxacarb Turbo insecticide by Harishree Crop Science'
    },
    {
      name: 'Cypermethrin 25% EC (H-Cyper 25)',
      description: 'Fast knockdown pyrethroid for bollworms, aphids, jassids, and thrips with contact and stomach action.',
      route: '/product/cypermethrin-25-ec',
      image: 'assets/products/insecticide/cypermethrin-25-ec.jpg',
      imageAlt: 'Cypermethrin 25% EC H-Cyper 25 insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is DIMETHOATE 30% EC used for?',
      answer:
        '<strong>Dimethoate 30% EC</strong> (marketed as <strong>H GOR</strong>) is a systemic and contact organophosphate insecticide for controlling aphids, jassids, whiteflies, thrips, leafhoppers, and mites in cotton, chilli, brinjal, tomato, okra, mustard, pulses, oilseeds, and vegetables.',
      answerPlain:
        'Dimethoate 30% EC (marketed as H GOR) is a systemic and contact organophosphate insecticide for controlling aphids, jassids, whiteflies, thrips, leafhoppers, and mites in cotton, chilli, brinjal, tomato, okra, mustard, pulses, oilseeds, and vegetables.'
    },
    {
      question: 'What is the dose of DIMETHOATE 30% EC per pump?',
      answer:
        'The standard recommended dose of <strong>H GOR</strong> is <strong>30 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of H GOR is 30 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Is DIMETHOATE systemic?',
      answer:
        'Yes. <strong>Dimethoate 30% EC</strong> is a <strong>systemic insecticide</strong> that absorbs into plant tissue and translocates to protect new growth, in addition to providing contact action on sprayed surfaces.',
      answerPlain:
        'Yes. Dimethoate 30% EC is a systemic insecticide that absorbs into plant tissue and translocates to protect new growth, in addition to providing contact action on sprayed surfaces.'
    },
    {
      question: 'Which crops can use DIMETHOATE 30% EC?',
      answer:
        '<strong>H GOR</strong> is used on <strong>cotton, chilli, brinjal, tomato, okra, mustard, pulses, oilseed crops, and vegetables</strong> when applied at the right crop stage with 30 ml per pump.',
      answerPlain:
        'H GOR is used on cotton, chilli, brinjal, tomato, okra, mustard, pulses, oilseed crops, and vegetables when applied at the right crop stage with 30 ml per pump.'
    },
    {
      question: 'Which pests does H GOR control?',
      answer:
        '<strong>H GOR</strong> controls <strong>aphids, jassids, whiteflies, thrips, leafhoppers, plant hoppers, mites, and sucking insects</strong> when applied at early infestation with thorough coverage.',
      answerPlain:
        'H GOR controls aphids, jassids, whiteflies, thrips, leafhoppers, plant hoppers, mites, and sucking insects when applied at early infestation with thorough coverage.'
    },
    {
      question: 'How does DIMETHOATE work?',
      answer:
        '<strong>Dimethoate</strong> inhibits acetylcholinesterase (AChE) in insect nerve tissue, disrupting nerve signal transmission. It acts through <strong>systemic and contact action</strong>, absorbing into plant tissue and reaching hidden pests.',
      answerPlain:
        'Dimethoate inhibits acetylcholinesterase (AChE) in insect nerve tissue, disrupting nerve signal transmission. It acts through systemic and contact action, absorbing into plant tissue and reaching hidden pests.'
    },
    {
      question: 'Is DIMETHOATE effective against aphids?',
      answer:
        'Yes. <strong>Dimethoate 30% EC</strong> provides strong systemic and contact activity against aphid colonies on cotton, vegetables, pulses, and mustard when applied at economic threshold.',
      answerPlain:
        'Yes. Dimethoate 30% EC provides strong systemic and contact activity against aphid colonies on cotton, vegetables, pulses, and mustard when applied at economic threshold.'
    },
    {
      question: 'Is DIMETHOATE effective against whiteflies?',
      answer:
        'Yes. <strong>H GOR</strong> controls whitefly adults and nymphs when sprayed with good coverage of leaf undersides where these pests feed and breed.',
      answerPlain:
        'Yes. H GOR controls whitefly adults and nymphs when sprayed with good coverage of leaf undersides where these pests feed and breed.'
    },
    {
      question: 'When should DIMETHOATE be sprayed?',
      answer:
        'Spray at <strong>early pest infestation</strong> or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and systemic uptake.',
      answerPlain:
        'Spray at early pest infestation or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and systemic uptake.'
    },
    {
      question: 'What is the recommended dose of H GOR?',
      answer:
        'The recommended dose of <strong>H GOR</strong> is <strong>30 ml per pump</strong> in a standard 15-litre knapsack sprayer. Confirm crop-wise rates on the printed label.',
      answerPlain:
        'The recommended dose of H GOR is 30 ml per pump in a standard 15-litre knapsack sprayer. Confirm crop-wise rates on the printed label.'
    },
    {
      question: 'Can Dimethoate be used on cotton crops?',
      answer:
        'Yes. <strong>H GOR</strong> is widely used on cotton for jassids, aphids, and whiteflies when applied at square and boll stages with 30 ml per pump.',
      answerPlain:
        'Yes. H GOR is widely used on cotton for jassids, aphids, and whiteflies when applied at square and boll stages with 30 ml per pump.'
    },
    {
      question: 'Can Dimethoate be used on chilli crops?',
      answer:
        'Yes. <strong>H GOR</strong> is effective on chilli for thrips, aphids, mites, and whiteflies when applied at the right crop stage with 30 ml per pump.',
      answerPlain:
        'Yes. H GOR is effective on chilli for thrips, aphids, mites, and whiteflies when applied at the right crop stage with 30 ml per pump.'
    },
    {
      question: 'How do I mix H GOR for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>30 ml of H GOR</strong>, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 30 ml of H GOR, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for H GOR?',
      answer:
        '<strong>H GOR</strong> is available in <strong>250 ml, 500 ml, and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'H GOR is available in 250 ml, 500 ml, and 1 LTR packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is the shelf life of H GOR?',
      answer:
        'When stored sealed in a cool, dry place, <strong>H GOR</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, H GOR has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'Is H GOR compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'What precautions should I take when using H GOR?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'Is Dimethoate safe for crops?',
      answer:
        'Yes, when used at the recommended dose and timing, H GOR is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, H GOR is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'What is the technical name of H GOR insecticide?',
      answer:
        'The technical composition is <strong>Dimethoate 30% EC</strong>. H GOR is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is Dimethoate 30% EC. H GOR is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'Is H GOR a broad spectrum insecticide?',
      answer:
        'Yes. <strong>H GOR</strong> is a <strong>broad-spectrum insecticide</strong> effective against sucking pests including aphids, jassids, whiteflies, thrips, leafhoppers, and mites.',
      answerPlain:
        'Yes. H GOR is a broad-spectrum insecticide effective against sucking pests including aphids, jassids, whiteflies, thrips, leafhoppers, and mites.'
    },
    {
      question: 'How does H GOR compare to conventional insecticides?',
      answer:
        'Unlike contact-only products, <strong>H GOR</strong> combines proven Dimethoate systemic chemistry with contact action for internal plant protection and dependable residual activity in one spray.',
      answerPlain:
        'Unlike contact-only products, H GOR combines proven Dimethoate systemic chemistry with contact action for internal plant protection and dependable residual activity in one spray.'
    },
    {
      question: 'Can Dimethoate be used on vegetables?',
      answer:
        'Yes. <strong>H GOR</strong> is used on brinjal, tomato, okra, and other vegetables for aphid, jassid, and whitefly control at 30 ml per pump.',
      answerPlain:
        'Yes. H GOR is used on brinjal, tomato, okra, and other vegetables for aphid, jassid, and whitefly control at 30 ml per pump.'
    },
    {
      question: 'What is Dimethoate 30 EC dose per acre?',
      answer:
        'Field dose varies by crop and water volume. A common knapsack recommendation is <strong>30 ml per pump</strong> (15-litre sprayer). For acre-level rates, follow the printed label — typically around 300–400 ml per acre for cotton.',
      answerPlain:
        'Field dose varies by crop and water volume. A common knapsack recommendation is 30 ml per pump (15-litre sprayer). For acre-level rates, follow the printed label — typically around 300–400 ml per acre for cotton.'
    },
    {
      question: 'Is Dimethoate effective against jassids and thrips?',
      answer:
        'Yes. <strong>Dimethoate 30% EC</strong> provides effective systemic and contact action against jassid populations and thrips on cotton, chilli, and vegetables.',
      answerPlain:
        'Yes. Dimethoate 30% EC provides effective systemic and contact action against jassid populations and thrips on cotton, chilli, and vegetables.'
    },
    {
      question: 'What is H GOR Dimethoate 30 EC?',
      answer:
        '<strong>H GOR</strong> is Harishree Crop Science\'s brand of <strong>Dimethoate 30% EC</strong> — a premium systemic and contact organophosphate insecticide for sucking pest control in Indian agriculture.',
      answerPlain:
        'H GOR is Harishree Crop Science\'s brand of Dimethoate 30% EC — a premium systemic and contact organophosphate insecticide for sucking pest control in Indian agriculture.'
    },
    {
      question: 'Is Dimethoate an organophosphate insecticide?',
      answer:
        'Yes. <strong>Dimethoate</strong> belongs to the <strong>organophosphate</strong> chemical group (IRAC Group 1B) and works by inhibiting acetylcholinesterase in insect nervous systems.',
      answerPlain:
        'Yes. Dimethoate belongs to the organophosphate chemical group (IRAC Group 1B) and works by inhibiting acetylcholinesterase in insect nervous systems.'
    }
  ];

  testimonials = [
    { name: 'Ramesh', location: 'Gujarat', text: 'H GOR gave excellent jassid and aphid control in my cotton. Hopper burn stopped within two days of spraying.', rating: 5 },
    { name: 'Suresh', location: 'Maharashtra', text: 'I used H GOR on chilli for thrips. The systemic action kept new leaves clean through the season.', rating: 5 },
    { name: 'Kiran', location: 'Karnataka', text: '30 ml per pump is easy to remember. H GOR mixed smoothly and controlled whiteflies in tomato effectively.', rating: 5 },
    { name: 'Prakash', location: 'Andhra Pradesh', text: 'Aphid pressure in my cotton dropped noticeably after one well-timed H GOR spray at square stage.', rating: 4 },
    { name: 'Anil', location: 'Rajasthan', text: 'Harishree H GOR is now my go-to for sucking pest outbreaks. Systemic effect lasted longer than expected.', rating: 5 },
    { name: 'Vijay', location: 'Tamil Nadu', text: 'Jassid damage in brinjal reduced after H GOR. Fruits were cleaner at market.', rating: 4 },
    { name: 'Hitesh', location: 'Gujarat', text: 'Good results on cotton jassids and aphids. I rotate H GOR with other MOAs for resistance management.', rating: 5 },
    { name: 'Mahesh', location: 'Madhya Pradesh', text: 'The EC formulation spreads well. H GOR controlled thrips in my chilli field effectively.', rating: 5 },
    { name: 'Dinesh', location: 'Gujarat', text: 'Dealer recommended H GOR for cotton whitefly. Visible improvement in leaf health after spraying.', rating: 4 },
    { name: 'Bhavesh', location: 'Gujarat', text: 'Reliable sucking pest control across seasons. H GOR has become a fixed part of my crop protection program.', rating: 5 },
    { name: 'Sanjay', location: 'Punjab', text: 'Used H GOR on okra for jassids. Quick action and good crop safety at 30 ml per pump.', rating: 5 },
    { name: 'Ravi', location: 'Telangana', text: 'Thrips in chilli were controlled well with H GOR. Will buy again next season.', rating: 4 }
  ];

  aggregateRating = {
    ratingValue: '4.7',
    reviewCount: '118',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure H GOR', text: 'Accurately measure 30 ml of Dimethoate 30% EC (H GOR) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 30 ml into the water. The EC formulation disperses easily into a uniform emulsion.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage in calm weather, covering leaf undersides where whiteflies, thrips, and aphids feed.' },
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
      productImageAlt: 'H GOR DIMETHOATE 30% EC Insecticide',
      productImageCaption: 'H GOR Dimethoate 30% EC insecticide pack by Harishree Crop Science',
      description:
        'H GOR (Dimethoate 30% EC) by Harishree Crop Science is a premium systemic and contact organophosphate insecticide for aphids, jassids, whiteflies, thrips, and mites in cotton, chilli, and vegetables. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'H-GOR-DIMETHOATE-30-EC',
      mpn: 'H-GOR-DIMETHOATE-30-EC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply H GOR (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of H GOR (Dimethoate 30% EC) for foliar application at 30 ml/pump.',
      alternateNames: [
        'H GOR',
        'H GOR Insecticide',
        'H GOR Dimethoate 30 EC',
        'Dimethoate 30 EC',
        'Dimethoate Insecticide',
        'Dimethoate 30% EC Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `H GOR (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout']
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Dimethoate 30% EC (H GOR) systemic insecticide by Harishree Crop Science. Controls aphids, jassids, whiteflies & thrips. Dose: 30 ml/pump.';

    this.seo.setAll(
      {
        title: 'Dimethoate 30% EC | H GOR Insecticide | Harishree',
        description: desc,
        keywords:
          'Dimethoate 30% EC, H GOR, Dimethoate 30 EC, Dimethoate Insecticide, Dimethoate 30% EC Insecticide, Dimethoate Uses, Dimethoate Dose, Dimethoate 30 EC Dose Per Pump, Dimethoate for Cotton, Dimethoate for Chilli, Dimethoate for Vegetables, Dimethoate for Aphids, Dimethoate for Jassids, Dimethoate for Thrips, Dimethoate for Whiteflies, Systemic Insecticide, Organophosphate Insecticide, Agricultural Insecticide, Crop Protection Solution, Cotton Pest Control, Broad Spectrum Insecticide, Best Insecticide for Sucking Pests, H GOR Insecticide, H GOR Dimethoate 30 EC, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Dimethoate 30% EC (H GOR) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Dimethoate 30% EC | H GOR Insecticide',
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
