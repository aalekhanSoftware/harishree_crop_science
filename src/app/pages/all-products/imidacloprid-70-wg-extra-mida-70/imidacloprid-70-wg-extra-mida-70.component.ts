import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'EXTRA_MIDA_70_IMIDACLOPRID_70_WG';
const INDICATIVE_LIST_PRICE_INR = 602;

@Component({
  selector: 'app-imidacloprid-70-wg-extra-mida-70',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './imidacloprid-70-wg-extra-mida-70.component.html',
  styleUrl: './imidacloprid-70-wg-extra-mida-70.component.scss'
})
export class Imidacloprid70WgExtraMida70Component implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/imidacloprid-70-wg-extra-mida-70';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/imidacloprid-70-wg.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Imidacloprid 70% WG';
  brandName = 'EXTRA MIDA 70';

  featuredSnippetAnswer =
    'Imidacloprid 70% WG (EXTRA MIDA 70) is a neonicotinoid systemic insecticide in water-dispersible granule form that controls whiteflies, aphids, jassids, thrips, and other sucking pests in cotton, chilli, paddy, sugarcane, citrus, and vegetables. It absorbs rapidly into plant tissue for long residual protection. Recommended dose: 7 gm per pump.';

  packSizes = [
    { volume: '50 GM', price: 248, featured: false, sku: 'EXTRA-MIDA-70-50GM' },
    { volume: '100 GM', price: 402, featured: false, sku: 'EXTRA-MIDA-70-100GM' },
    { volume: '250 GM', price: 602, featured: true, sku: 'EXTRA-MIDA-70-250GM' },
    { volume: '1 KG', price: 2360, featured: false, sku: 'EXTRA-MIDA-70-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Systemic insecticide',
      description:
        'Imidacloprid translocates through xylem and phloem after foliar uptake, protecting new shoots and leaves that contact-only sprays cannot reach.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Fast absorption',
      description:
        'The WG formulation disperses quickly in water and penetrates leaf cuticle rapidly, delivering both immediate contact activity and internal plant protection.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual protection',
      description:
        'Neonicotinoid chemistry provides extended field persistence, reducing repeat spray frequency during peak whitefly and aphid pressure.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Effective against sucking pests',
      description:
        'EXTRA MIDA 70 is engineered for whiteflies, aphids, jassids, thrips, leafhoppers, psylla, mealybugs, and mixed sucking pest complexes.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Broad spectrum control',
      description:
        'One premium WG product addresses multiple sucking pest groups across cotton, chilli, paddy, sugarcane, citrus, tomato, brinjal, okra, pulses, and vegetables.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Advanced WG formulation',
      description:
        'Water-dispersible granules mix cleanly, reduce dust exposure during handling, and deliver uniform active ingredient distribution in the spray tank.',
      icon: 'fas fa-flask'
    }
  ];

  keyBenefits = [
    {
      title: 'Excellent whitefly control',
      description:
        'Imidacloprid disrupts nicotinic acetylcholine receptors, stopping whitefly feeding and reproduction when applied with good underside coverage at economic threshold.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Superior aphid control',
      description:
        'Systemic movement reaches aphid colonies on tender shoots and leaf undersides, providing dependable control on cotton, vegetables, and pulse crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Effective thrips management',
      description:
        'EXTRA MIDA 70 controls thrips that scar leaves, flowers, and fruits — a critical pest in chilli and vegetable production during flowering stages.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual protection',
      description:
        'Combined surface deposit and internal plant concentration continue working between sprays, protecting foliage from newly arriving sucking pests.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Better crop health',
      description:
        'By controlling key sucking pests early, growers maintain cleaner foliage, stronger photosynthesis, and healthier plant vigour through critical growth stages.',
      icon: 'fas fa-heart'
    },
    {
      title: 'Improved yield potential',
      description:
        'Protecting squares, bolls, pods, and fruits during peak pest pressure supports better yield quality and marketable produce at harvest.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Premium 70% WG formulation',
      description:
        'Harishree\'s optimized water-dispersible granule ensures rapid tank dispersion, fast leaf uptake, and dependable systemic movement within treated crops.',
      icon: 'fas fa-award'
    },
    {
      title: 'Triple mode of action',
      description:
        'EXTRA MIDA 70 combines systemic, contact, and stomach action — one spray addresses pests on leaf surfaces and those feeding inside treated tissue.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured with strict quality control, dealer support, and batch-to-batch consistency growers rely on season after season across India.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 7 gm per pump dosing, crop-wise tables, pest-wise control guides, and safety notes help agronomists apply EXTRA MIDA 70 confidently.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Whiteflies',
      description:
        'Controls whitefly adults and nymphs that suck sap, deposit honeydew, and transmit viral diseases in cotton, chilli, brinjal, and vegetable crops.'
    },
    {
      name: 'Aphids',
      description:
        'Manages aphid colonies on tender shoots and leaf undersides that cause curling, honeydew deposition, and sooty mould across multiple crop types.'
    },
    {
      name: 'Jassids',
      description:
        'Effective against jassid populations causing hopper burn, leaf curling, and reduced photosynthesis — a critical pest in cotton and okra fields.'
    },
    {
      name: 'Thrips',
      description:
        'Controls thrips that scar leaves, flowers, and fruits — a major concern in chilli, cotton, and vegetable production during flowering.'
    },
    {
      name: 'Leafhoppers',
      description:
        'Provides activity against leafhopper species that feed on phloem sap and cause stippling, yellowing, and reduced plant vigour.'
    },
    {
      name: 'Plant Hoppers',
      description:
        'Suppresses plant hopper populations on paddy, cotton, and other crops when applied at early infestation with thorough spray coverage.'
    },
    {
      name: 'Psylla',
      description:
        'Offers control of psylla species affecting citrus and other crops, reducing leaf damage and supporting cleaner orchard health.'
    },
    {
      name: 'Termites',
      description:
        'Can be used in labeled soil and foliar programs where imidacloprid termite management is recommended per local label guidance.'
    },
    {
      name: 'Mealybugs',
      description:
        'Provides activity against mealybug infestations on stems, leaves, and fruits when applied at early colony formation with full coverage.'
    },
    {
      name: 'Sucking Pests',
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
        'Protects against thrips, aphids, and whiteflies that damage pods, reduce colour intensity, and affect export quality.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Paddy',
      description:
        'Controls plant hoppers, leafhoppers, and other sucking pests during vegetative and reproductive stages in rice cultivation.',
      icon: 'fas fa-water'
    },
    {
      title: 'Sugarcane',
      description:
        'Manages termites, whiteflies, and sucking pest pressure during tillering and grand growth stages for healthier cane stands.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Citrus',
      description:
        'Defends against psylla, aphids, and whiteflies to reduce leaf damage, support cleaner fruit, and maintain orchard productivity.',
      icon: 'fas fa-lemon'
    },
    {
      title: 'Tomato',
      description:
        'Controls whiteflies, aphids, and thrips during vegetative and fruit development for cleaner, marketable produce.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Brinjal',
      description:
        'Manages jassids, aphids, and whiteflies to reduce leaf damage, fruit drop, and quality loss during flowering and fruiting.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Okra',
      description:
        'Defends against jassids and aphids during flowering and pod formation — critical stages for okra yield and pod quality.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Vegetables',
      description:
        'Broad fit across solanaceous and cole crops facing mixed sucking pest pressure throughout the growing season.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Pulses',
      description:
        'Manages aphids and jassids during pod-setting windows in gram, pigeon pea, and other pulse crops.',
      icon: 'fas fa-seedling'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Jassids, aphids, whiteflies, thrips', dose: '7 gm/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, whiteflies', dose: '7 gm/pump', timing: 'Early infestation at vegetative and fruit set' },
    { crop: 'Paddy', pests: 'Plant hoppers, leafhoppers', dose: '7 gm/pump', timing: 'At early hopper buildup as per ETL' },
    { crop: 'Sugarcane', pests: 'Termites, whiteflies, sucking pests', dose: '7 gm/pump', timing: 'Early infestation during active growth' },
    { crop: 'Citrus', pests: 'Psylla, aphids, whiteflies', dose: '7 gm/pump', timing: 'At first sign of psylla or aphid colonies' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips', dose: '7 gm/pump', timing: 'Early pest buildup on foliage' },
    { crop: 'Brinjal', pests: 'Jassids, aphids, whiteflies', dose: '7 gm/pump', timing: 'First sign of hopper burn or aphid colonies' },
    { crop: 'Okra', pests: 'Jassids, aphids', dose: '7 gm/pump', timing: 'Flowering to pod formation' },
    { crop: 'Pulses', pests: 'Aphids, jassids', dose: '7 gm/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '7 gm/pump', timing: 'Early infestation with good coverage' }
  ];

  pestWiseControl = [
    { pest: 'Whiteflies', crops: 'Cotton, chilli, brinjal, vegetables', mode: 'Systemic + contact + stomach', efficacy: 'High with underside spray' },
    { pest: 'Aphids', crops: 'Cotton, vegetables, pulses, citrus', mode: 'Systemic + contact', efficacy: 'High on active colonies' },
    { pest: 'Jassids', crops: 'Cotton, okra, pulses', mode: 'Systemic + contact', efficacy: 'High at early infestation' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Systemic + contact', efficacy: 'High with good coverage' },
    { pest: 'Leafhoppers', crops: 'Paddy, cotton, vegetables', mode: 'Systemic + contact', efficacy: 'Moderate to high' },
    { pest: 'Plant Hoppers', crops: 'Paddy, cotton', mode: 'Systemic + contact', efficacy: 'High at early stage' },
    { pest: 'Psylla', crops: 'Citrus', mode: 'Systemic + contact', efficacy: 'Moderate to high' },
    { pest: 'Mealybugs', crops: 'Vegetables, citrus, cotton', mode: 'Systemic + contact', efficacy: 'Moderate at early stage' },
    { pest: 'Termites', crops: 'Sugarcane (as per label)', mode: 'Systemic', efficacy: 'Label-dependent' },
    { pest: 'Sucking Pests', crops: 'All labeled crops', mode: 'Systemic + contact + stomach', efficacy: 'High with timely application' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', mida70: 'Systemic + contact + stomach neonicotinoid', traditional: 'Contact-only with limited internal protection' },
    { feature: 'Pest spectrum', mida70: 'Broad — whiteflies, aphids, jassids, thrips, hoppers', traditional: 'Often targets only one pest group' },
    { feature: 'New growth protection', mida70: 'Systemic movement protects emerging shoots', traditional: 'Only protects sprayed leaf surfaces' },
    { feature: 'Residual duration', mida70: 'Long neonicotinoid residual with systemic action', traditional: 'Shorter residual on many contact products' },
    { feature: 'Formulation', mida70: 'WG — clean mixing, low dust', traditional: 'Varies; some older formulations harder to mix' },
    { feature: 'Application dose', mida70: '7 gm per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonSystemic = [
    { feature: 'Active ingredient', mida70: 'Imidacloprid 70% WG — proven systemic neonicotinoid', other: 'Contact-only pyrethroids or non-systemic OPs' },
    { feature: 'Internal plant movement', mida70: 'Yes — translocates to protect new growth', other: 'No — surface deposit only' },
    { feature: 'Hidden pest control', mida70: 'Reaches pests feeding inside treated tissue', other: 'Misses pests on unsprayed new shoots' },
    { feature: 'Feeding cessation', mida70: 'Rapid cessation via nicotinic receptor disruption', other: 'Knockdown varies; slower on hidden pests' },
    { feature: 'Crop fit', mida70: 'Cotton, chilli, paddy, sugarcane, citrus, vegetables', other: 'Limited crop labels on older products' },
    { feature: 'Value per acre', mida70: 'One product, proven dose, systemic protection', other: 'May need multiple products or tank mixes' }
  ];

  comparisonWgFormulation = [
    { feature: 'Mixing behaviour', mida70: 'WG disperses cleanly in water with minimal agitation', other: 'WP/EC types may need more careful mixing' },
    { feature: 'Dust exposure', mida70: 'Low-dust granule safer to handle', other: 'Some WP formulations create more dust' },
    { feature: 'Tank stability', mida70: 'Uniform suspension when agitated properly', other: 'Stability varies by formulation type' },
    { feature: 'Active concentration', mida70: '70% WG — high AI loading per gram', other: 'Lower AI products need higher application rates' },
    { feature: 'Storage', mida70: 'Stable granule in sealed packs', other: 'Liquid EC may require more careful storage' },
    { feature: 'Field performance', mida70: 'Fast uptake and long residual from WG base', other: 'Performance depends on formulation quality' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'EXTRA MIDA 70' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'WG (Water Dispersible Granule)' },
      { label: 'Physical form', value: 'Granules' },
      { label: 'Active ingredient', value: 'Imidacloprid 70% WG' },
      { label: 'Chemical group', value: 'Neonicotinoid (IRAC Group 4A)' },
      {
        label: 'Mode of action',
        value: 'Disrupts nicotinic acetylcholine receptors — systemic, contact, and stomach action'
      },
      { label: 'Action type', value: 'Systemic, contact, and stomach' },
      {
        label: 'Target pests',
        value: 'Whiteflies, Aphids, Jassids, Thrips, Leafhoppers, Plant hoppers, Psylla, Termites, Mealybugs, Sucking pests'
      },
      { label: 'Target crops', value: 'Cotton, Chilli, Paddy, Sugarcane, Citrus, Tomato, Brinjal, Okra, Vegetables, Pulses' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pouch/bottle (WG granules); sizes 50 GM, 100 GM, 250 GM, 1 KG' },
      { label: 'Recommended dose', value: '7 gm/pump' },
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
    { label: 'Product Name', value: 'EXTRA MIDA 70' },
    { label: 'Brand / Trade Name', value: 'EXTRA MIDA 70' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'WG (Water Dispersible Granule)' },
    { label: 'Active Ingredient', value: 'Imidacloprid 70% WG' },
    { label: 'Chemical Group', value: 'Neonicotinoid (IRAC Group 4A)' },
    {
      label: 'Mode of Action',
      value:
        'Imidacloprid disrupts nicotinic acetylcholine receptors in insect nerve tissue, causing feeding cessation, paralysis, and death through systemic, contact, and stomach action'
    },
    { label: 'Systemic Action', value: 'Yes — translocates within plant vascular system' },
    { label: 'Contact Action', value: 'Yes — activity on pests touching treated surfaces' },
    { label: 'Stomach Action', value: 'Yes — activity when pests ingest treated plant tissue' },
    { label: 'Long Residual Activity', value: 'Extended field persistence typical of neonicotinoid chemistry' },
    { label: 'Fast Uptake by Plant', value: 'Rapid foliar absorption after WG spray application' },
    {
      label: 'Target Pests',
      value: 'Whiteflies, Aphids, Jassids, Thrips, Leafhoppers, Plant hoppers, Psylla, Termites, Mealybugs, Sucking pests'
    },
    { label: 'Target Crops', value: 'Cotton, Chilli, Paddy, Sugarcane, Citrus, Tomato, Brinjal, Okra, Vegetables, Pulses' },
    { label: 'Recommended Dose', value: '7 gm/pump' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Stage', value: 'At early pest infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Physical Form', value: 'Granules (WG)' },
    { label: 'Packaging Type', value: 'Pouch/bottle (50 GM, 100 GM, 250 GM, 1 KG)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Manufacturer', value: 'Harishree Crop Science' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Rapid foliar absorption',
      description:
        'On application, EXTRA MIDA 70 WG disperses in water and is absorbed through the leaf cuticle, entering the plant vascular system within hours.'
    },
    {
      title: 'Contact action on pest body',
      description:
        'Imidacloprid affects pests on direct contact, rapidly disrupting nerve function and stopping sap-sucking damage on treated foliage.'
    },
    {
      title: 'Stomach action via ingestion',
      description:
        'Pests feeding on treated plant tissue ingest imidacloprid, leading to feeding cessation and mortality even when not directly sprayed.'
    },
    {
      title: 'Systemic movement within plant',
      description:
        'The active ingredient translocates through xylem and phloem, reaching new shoots and leaves that were not directly sprayed.'
    },
    {
      title: 'Nervous system disruption',
      description:
        'Imidacloprid binds to nicotinic acetylcholine receptors (IRAC Group 4A), causing continuous nerve stimulation, paralysis, and death.'
    },
    {
      title: 'Long lasting protection',
      description:
        'Combined surface deposit and internal plant concentration continue working between sprays, protecting crops from newly arriving sucking pests.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 7 gm dose',
      text: 'Measure exactly 7 gm per pump to maintain efficacy, protect crops, and slow resistance development in pest populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides where whiteflies, thrips, and aphids congregate for maximum systemic uptake.'
    },
    {
      title: 'Safe storage',
      text: 'Store in original sealed container in a cool, dry, locked place away from food, feed, seed, and children.'
    },
    {
      title: 'Container disposal',
      text: 'Triple-rinse empty containers, puncture them, and dispose as per local pesticide container management rules.'
    },
    {
      title: 'First aid readiness',
      text: 'If product contacts skin or eyes, wash thoroughly with water. If swallowed or symptoms appear, seek medical help immediately with the label.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Reduced sucking pest infestation',
      value: 'Growers report lower whitefly, aphid, and jassid counts within days of a well-timed spray at 7 gm per pump.'
    },
    {
      label: 'Better crop health',
      value: 'Cleaner foliage with less hopper burn, curling, and honeydew improves overall plant vigour and photosynthesis.'
    },
    {
      label: 'Improved plant growth',
      value: 'Systemic protection of new shoots supports uninterrupted vegetative and reproductive development during pest pressure.'
    },
    {
      label: 'Enhanced productivity',
      value: 'Healthier plants with fewer pest-damaged leaves and fruits support stronger crop development through the season.'
    },
    {
      label: 'Higher yield potential',
      value: 'Protecting squares, bolls, pods, and fruits during critical stages supports better yield and marketable produce quality.'
    }
  ];

  relatedProducts = [
    {
      name: 'Fipronil 40% + Imidacloprid 40% WG (FI 40)',
      description: 'Dual-action WG for chewing and sucking pest complexes with contact and systemic protection.',
      route: '/product/fipronil-40-imidacloprid-40-wg',
      image: 'assets/products/insecticide/fipronil-40-imidacloprid-40-wg.jpg',
      imageAlt: 'Fipronil Imidacloprid FI 40 insecticide by Harishree Crop Science'
    },
    {
      name: 'Thiamethoxam 75% SG (Thio-H 75)',
      description: 'Neonicotinoid systemic insecticide for aphids, jassids, whiteflies, and thrips in multiple crops.',
      route: '/product/thiamethoxam-75-sg',
      image: 'assets/products/insecticide/thiamethoxam-75-sg.jpg',
      imageAlt: 'Thiamethoxam 75% SG Thio-H insecticide by Harishree Crop Science'
    },
    {
      name: 'Dimethoate 30% EC (H GOR)',
      description: 'Systemic organophosphate for aphids, jassids, whiteflies, and thrips in cotton and vegetables.',
      route: '/products/insecticide/dimethoate-30-ec-h-gor',
      image: 'assets/products/insecticide/dimethoate-30-ec.jpg',
      imageAlt: 'Dimethoate 30% EC H GOR insecticide by Harishree Crop Science'
    },
    {
      name: 'Chlorantraniliprole 9.3% + Lambda Cyhalothrin 4.6% ZC (AMPIGO)',
      description: 'Dual-action ZC insecticide for caterpillars, bollworms, and borers in cotton, maize, and vegetables.',
      route: '/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc',
      image: 'assets/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc.png',
      imageAlt: 'AMPIGO Chlorantraniliprole Lambda Cyhalothrin insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is IMIDACLOPRID 70% WG used for?',
      answer:
        '<strong>Imidacloprid 70% WG</strong> (marketed as <strong>EXTRA MIDA 70</strong>) is a systemic neonicotinoid insecticide for controlling whiteflies, aphids, jassids, thrips, leafhoppers, and other sucking pests in cotton, chilli, paddy, sugarcane, citrus, tomato, brinjal, okra, vegetables, and pulses.',
      answerPlain:
        'Imidacloprid 70% WG (marketed as EXTRA MIDA 70) is a systemic neonicotinoid insecticide for controlling whiteflies, aphids, jassids, thrips, leafhoppers, and other sucking pests in cotton, chilli, paddy, sugarcane, citrus, tomato, brinjal, okra, vegetables, and pulses.'
    },
    {
      question: 'What is the dose of IMIDACLOPRID 70% WG per pump?',
      answer:
        'The standard recommended dose of <strong>EXTRA MIDA 70</strong> is <strong>7 gm per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of EXTRA MIDA 70 is 7 gm per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Is Imidacloprid 70% WG a systemic insecticide?',
      answer:
        'Yes. <strong>Imidacloprid 70% WG</strong> is a <strong>systemic insecticide</strong> that absorbs into plant tissue and translocates to protect new growth, in addition to providing contact and stomach action on sprayed surfaces.',
      answerPlain:
        'Yes. Imidacloprid 70% WG is a systemic insecticide that absorbs into plant tissue and translocates to protect new growth, in addition to providing contact and stomach action on sprayed surfaces.'
    },
    {
      question: 'Which crops can use EXTRA MIDA 70?',
      answer:
        '<strong>EXTRA MIDA 70</strong> is used on <strong>cotton, chilli, paddy, sugarcane, citrus, tomato, brinjal, okra, vegetables, and pulses</strong> when applied at the right crop stage with 7 gm per pump.',
      answerPlain:
        'EXTRA MIDA 70 is used on cotton, chilli, paddy, sugarcane, citrus, tomato, brinjal, okra, vegetables, and pulses when applied at the right crop stage with 7 gm per pump.'
    },
    {
      question: 'Which pests does EXTRA MIDA 70 control?',
      answer:
        '<strong>EXTRA MIDA 70</strong> controls <strong>whiteflies, aphids, jassids, thrips, leafhoppers, plant hoppers, psylla, mealybugs, and sucking pests</strong> when applied at early infestation with thorough coverage.',
      answerPlain:
        'EXTRA MIDA 70 controls whiteflies, aphids, jassids, thrips, leafhoppers, plant hoppers, psylla, mealybugs, and sucking pests when applied at early infestation with thorough coverage.'
    },
    {
      question: 'How does Imidacloprid 70% WG work?',
      answer:
        '<strong>Imidacloprid</strong> disrupts nicotinic acetylcholine receptors (IRAC Group 4A) in insect nerve tissue. It acts through <strong>systemic, contact, and stomach action</strong>, absorbing into plant tissue and reaching hidden pests.',
      answerPlain:
        'Imidacloprid disrupts nicotinic acetylcholine receptors (IRAC Group 4A) in insect nerve tissue. It acts through systemic, contact, and stomach action, absorbing into plant tissue and reaching hidden pests.'
    },
    {
      question: 'Is Imidacloprid effective against whiteflies?',
      answer:
        'Yes. <strong>Imidacloprid 70% WG</strong> provides strong systemic and contact activity against whitefly adults and nymphs when applied at economic threshold with good underside coverage.',
      answerPlain:
        'Yes. Imidacloprid 70% WG provides strong systemic and contact activity against whitefly adults and nymphs when applied at economic threshold with good underside coverage.'
    },
    {
      question: 'Is Imidacloprid effective against aphids?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> controls aphid colonies on cotton, vegetables, pulses, and citrus when applied at early infestation with systemic follow-through inside the plant.',
      answerPlain:
        'Yes. EXTRA MIDA 70 controls aphid colonies on cotton, vegetables, pulses, and citrus when applied at early infestation with systemic follow-through inside the plant.'
    },
    {
      question: 'When should Imidacloprid 70% WG be sprayed?',
      answer:
        'Spray at <strong>early pest infestation</strong> or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and systemic uptake.',
      answerPlain:
        'Spray at early pest infestation or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and systemic uptake.'
    },
    {
      question: 'What is the recommended dose of EXTRA MIDA 70?',
      answer:
        'The recommended dose of <strong>EXTRA MIDA 70</strong> is <strong>7 gm per pump</strong> in a standard 15-litre knapsack sprayer. Confirm crop-wise rates on the printed label.',
      answerPlain:
        'The recommended dose of EXTRA MIDA 70 is 7 gm per pump in a standard 15-litre knapsack sprayer. Confirm crop-wise rates on the printed label.'
    },
    {
      question: 'Can Imidacloprid 70% WG be used on cotton crops?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> is widely used on cotton for jassids, aphids, and whiteflies when applied at square and boll stages with 7 gm per pump.',
      answerPlain:
        'Yes. EXTRA MIDA 70 is widely used on cotton for jassids, aphids, and whiteflies when applied at square and boll stages with 7 gm per pump.'
    },
    {
      question: 'Can Imidacloprid 70% WG be used on chilli crops?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> is effective on chilli for thrips, aphids, and whiteflies when applied at the right crop stage with 7 gm per pump.',
      answerPlain:
        'Yes. EXTRA MIDA 70 is effective on chilli for thrips, aphids, and whiteflies when applied at the right crop stage with 7 gm per pump.'
    },
    {
      question: 'How do I mix EXTRA MIDA 70 for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>7 gm of EXTRA MIDA 70</strong>, top up with water, and agitate. The WG formulation disperses easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 7 gm of EXTRA MIDA 70, top up with water, and agitate. The WG formulation disperses easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for EXTRA MIDA 70?',
      answer:
        '<strong>EXTRA MIDA 70</strong> is available in <strong>50 GM, 100 GM, 250 GM, and 1 KG</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'EXTRA MIDA 70 is available in 50 GM, 100 GM, 250 GM, and 1 KG packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is the shelf life of EXTRA MIDA 70?',
      answer:
        'When stored sealed in a cool, dry place, <strong>EXTRA MIDA 70</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, EXTRA MIDA 70 has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'Is EXTRA MIDA 70 compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'What precautions should I take when using EXTRA MIDA 70?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'Is Imidacloprid safe for crops when used correctly?',
      answer:
        'Yes, when used at the recommended dose and timing, EXTRA MIDA 70 is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, EXTRA MIDA 70 is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'What is the technical name of EXTRA MIDA 70 insecticide?',
      answer:
        'The technical composition is <strong>Imidacloprid 70% WG</strong>. EXTRA MIDA 70 is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is Imidacloprid 70% WG. EXTRA MIDA 70 is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'Is EXTRA MIDA 70 a broad spectrum insecticide?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> is a <strong>broad-spectrum systemic insecticide</strong> effective against sucking pests including whiteflies, aphids, jassids, thrips, and leafhoppers.',
      answerPlain:
        'Yes. EXTRA MIDA 70 is a broad-spectrum systemic insecticide effective against sucking pests including whiteflies, aphids, jassids, thrips, and leafhoppers.'
    },
    {
      question: 'How does EXTRA MIDA 70 compare to conventional insecticides?',
      answer:
        'Unlike contact-only products, <strong>EXTRA MIDA 70</strong> combines proven Imidacloprid systemic chemistry with contact and stomach action for internal plant protection and long residual activity in one spray.',
      answerPlain:
        'Unlike contact-only products, EXTRA MIDA 70 combines proven Imidacloprid systemic chemistry with contact and stomach action for internal plant protection and long residual activity in one spray.'
    },
    {
      question: 'Can Imidacloprid be used on vegetables?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> is used on brinjal, tomato, okra, and other vegetables for aphid, jassid, and whitefly control at 7 gm per pump.',
      answerPlain:
        'Yes. EXTRA MIDA 70 is used on brinjal, tomato, okra, and other vegetables for aphid, jassid, and whitefly control at 7 gm per pump.'
    },
    {
      question: 'What is Imidacloprid 70 WG dose per acre?',
      answer:
        'Field dose varies by crop and water volume. A common knapsack recommendation is <strong>7 gm per pump</strong> (15-litre sprayer). For acre-level rates, follow the printed label guidance for your crop.',
      answerPlain:
        'Field dose varies by crop and water volume. A common knapsack recommendation is 7 gm per pump (15-litre sprayer). For acre-level rates, follow the printed label guidance for your crop.'
    },
    {
      question: 'Is Imidacloprid effective against jassids and thrips?',
      answer:
        'Yes. <strong>Imidacloprid 70% WG</strong> provides effective systemic and contact action against jassid populations and thrips on cotton, chilli, and vegetables.',
      answerPlain:
        'Yes. Imidacloprid 70% WG provides effective systemic and contact action against jassid populations and thrips on cotton, chilli, and vegetables.'
    },
    {
      question: 'What is EXTRA MIDA 70 Imidacloprid 70% WG?',
      answer:
        '<strong>EXTRA MIDA 70</strong> is Harishree Crop Science\'s brand of <strong>Imidacloprid 70% WG</strong> — a premium systemic neonicotinoid insecticide for sucking pest control in Indian agriculture.',
      answerPlain:
        'EXTRA MIDA 70 is Harishree Crop Science\'s brand of Imidacloprid 70% WG — a premium systemic neonicotinoid insecticide for sucking pest control in Indian agriculture.'
    },
    {
      question: 'Is Imidacloprid a neonicotinoid insecticide?',
      answer:
        'Yes. <strong>Imidacloprid</strong> belongs to the <strong>neonicotinoid</strong> chemical group (IRAC Group 4A) and works by disrupting nicotinic acetylcholine receptors in insect nervous systems.',
      answerPlain:
        'Yes. Imidacloprid belongs to the neonicotinoid chemical group (IRAC Group 4A) and works by disrupting nicotinic acetylcholine receptors in insect nervous systems.'
    },
    {
      question: 'Can Imidacloprid 70% WG be used on paddy?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> controls plant hoppers and leafhoppers in paddy when applied at early infestation with 7 gm per pump as per label guidance.',
      answerPlain:
        'Yes. EXTRA MIDA 70 controls plant hoppers and leafhoppers in paddy when applied at early infestation with 7 gm per pump as per label guidance.'
    },
    {
      question: 'Can Imidacloprid 70% WG be used on sugarcane?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> is used on sugarcane for termites and sucking pest management when applied as per crop label and local advisory at 7 gm per pump.',
      answerPlain:
        'Yes. EXTRA MIDA 70 is used on sugarcane for termites and sucking pest management when applied as per crop label and local advisory at 7 gm per pump.'
    },
    {
      question: 'What is the best insecticide for sucking pests?',
      answer:
        '<strong>Imidacloprid 70% WG</strong> (EXTRA MIDA 70) is among the most trusted systemic choices for sucking pest complexes when applied at ETL with proper coverage and IPM rotation.',
      answerPlain:
        'Imidacloprid 70% WG (EXTRA MIDA 70) is among the most trusted systemic choices for sucking pest complexes when applied at ETL with proper coverage and IPM rotation.'
    },
    {
      question: 'What is the best whitefly control insecticide?',
      answer:
        'For whitefly outbreaks, <strong>EXTRA MIDA 70</strong> (Imidacloprid 70% WG) delivers systemic uptake, feeding cessation, and long residual protection when sprayed with good underside coverage.',
      answerPlain:
        'For whitefly outbreaks, EXTRA MIDA 70 (Imidacloprid 70% WG) delivers systemic uptake, feeding cessation, and long residual protection when sprayed with good underside coverage.'
    },
    {
      question: 'What is Imidacloprid 70% WG price in India?',
      answer:
        'Pack pricing varies by dealer and region. <strong>EXTRA MIDA 70</strong> is available in 50 GM, 100 GM, 250 GM, and 1 KG packs — contact Harishree Crop Science or your local dealer for current rates.',
      answerPlain:
        'Pack pricing varies by dealer and region. EXTRA MIDA 70 is available in 50 GM, 100 GM, 250 GM, and 1 KG packs — contact Harishree Crop Science or your local dealer for current rates.'
    },
    {
      question: 'How does EXTRA MIDA 70 help with resistance management?',
      answer:
        'Rotate <strong>EXTRA MIDA 70</strong> with insecticides from other IRAC groups (organophosphates, pyrethroids, IGRs) across the season and avoid repeated neonicotinoid-only applications to slow resistance build-up.',
      answerPlain:
        'Rotate EXTRA MIDA 70 with insecticides from other IRAC groups (organophosphates, pyrethroids, IGRs) across the season and avoid repeated neonicotinoid-only applications to slow resistance build-up.'
    },
    {
      question: 'Is Imidacloprid 70% WG effective for citrus psylla control?',
      answer:
        'Yes. <strong>EXTRA MIDA 70</strong> provides systemic and contact activity against psylla in citrus orchards when applied at early colony formation with thorough canopy coverage.',
      answerPlain:
        'Yes. EXTRA MIDA 70 provides systemic and contact activity against psylla in citrus orchards when applied at early colony formation with thorough canopy coverage.'
    },
    {
      question: 'Where can I buy EXTRA MIDA 70 insecticide in India?',
      answer:
        'Contact <strong>Harishree Crop Science</strong> or your nearest authorized agricultural dealer for EXTRA MIDA 70 availability, pricing, and crop-specific usage guidance.',
      answerPlain:
        'Contact Harishree Crop Science or your nearest authorized agricultural dealer for EXTRA MIDA 70 availability, pricing, and crop-specific usage guidance.'
    }
  ];

  testimonials = [
    { name: 'Ramesh Patel', location: 'Gujarat', text: 'EXTRA MIDA 70 gave excellent whitefly and jassid control in my cotton. Hopper burn stopped within days of spraying at 7 gm per pump.', rating: 5 },
    { name: 'Suresh Kulkarni', location: 'Maharashtra', text: 'I used EXTRA MIDA 70 on chilli for thrips. The systemic action kept new leaves clean through the fruiting season.', rating: 5 },
    { name: 'Kiran Reddy', location: 'Andhra Pradesh', text: '7 gm per pump is easy to remember. EXTRA MIDA 70 mixed smoothly and controlled aphids in tomato effectively.', rating: 5 },
    { name: 'Prakash Singh', location: 'Madhya Pradesh', text: 'Whitefly pressure in my cotton dropped noticeably after one well-timed EXTRA MIDA 70 spray at square stage.', rating: 4 },
    { name: 'Anil Sharma', location: 'Rajasthan', text: 'Harishree EXTRA MIDA 70 is now my go-to for sucking pest outbreaks. Systemic effect lasted longer than expected.', rating: 5 },
    { name: 'Vijay Kumar', location: 'Tamil Nadu', text: 'Jassid damage in brinjal reduced after EXTRA MIDA 70. Fruits were cleaner at market.', rating: 4 },
    { name: 'Hitesh Desai', location: 'Gujarat', text: 'Good results on cotton whiteflies. I rotate EXTRA MIDA 70 with other MOAs for resistance management.', rating: 5 },
    { name: 'Mahesh Yadav', location: 'Uttar Pradesh', text: 'The WG formulation disperses well. EXTRA MIDA 70 controlled thrips in my chilli field effectively.', rating: 5 },
    { name: 'Dinesh Choudhary', location: 'Gujarat', text: 'Dealer recommended EXTRA MIDA 70 for cotton aphids. Visible improvement in leaf health after spraying.', rating: 4 },
    { name: 'Bhavesh Mehta', location: 'Gujarat', text: 'Reliable sucking pest control across seasons. EXTRA MIDA 70 has become a fixed part of my crop protection program.', rating: 5 },
    { name: 'Sanjay Rao', location: 'Karnataka', text: 'Used EXTRA MIDA 70 on okra for jassids. Quick action and good crop safety at 7 gm per pump.', rating: 5 },
    { name: 'Ravi Shankar', location: 'Telangana', text: 'Plant hopper control in paddy was effective with EXTRA MIDA 70. Will buy again next kharif season.', rating: 4 }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '96',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure EXTRA MIDA 70', text: 'Accurately measure 7 gm of Imidacloprid 70% WG (EXTRA MIDA 70) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 7 gm into the water. The WG formulation disperses easily into a uniform suspension.' },
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
      productImageAlt: 'EXTRA MIDA 70 IMIDACLOPRID 70% WG Insecticide',
      productImageCaption: 'EXTRA MIDA 70 Imidacloprid 70% WG insecticide pack by Harishree Crop Science',
      description:
        'EXTRA MIDA 70 (Imidacloprid 70% WG) by Harishree Crop Science is a premium systemic neonicotinoid insecticide for whiteflies, aphids, jassids, thrips, and sucking pests in cotton, chilli, paddy, sugarcane, citrus, and vegetables. Dose: 7 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'EXTRA-MIDA-70-IMIDACLOPRID-70-WG',
      mpn: 'EXTRA-MIDA-70-IMIDACLOPRID-70-WG',
      dose: '7 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply EXTRA MIDA 70 (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of EXTRA MIDA 70 (Imidacloprid 70% WG) for foliar application at 7 gm/pump.',
      alternateNames: [
        'EXTRA MIDA 70',
        'EXTRA MIDA 70 Insecticide',
        'EXTRA MIDA 70 Imidacloprid 70 WG',
        'Imidacloprid 70 WG',
        'Imidacloprid 70% WG Insecticide',
        'Imidacloprid Systemic Insecticide',
        'Neonicotinoid Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `EXTRA MIDA 70 (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WG (Water Dispersible Granule)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Imidacloprid 70% WG (EXTRA MIDA 70) systemic neonicotinoid by Harishree. Controls whiteflies, aphids, jassids & thrips. Dose: 7 gm/pump. Enquire now.';

    this.seo.setAll(
      {
        title: 'Imidacloprid 70% WG | EXTRA MIDA 70 Insecticide',
        description: desc,
        keywords:
          'Imidacloprid 70% WG, EXTRA MIDA 70, Imidacloprid 70 WG, Imidacloprid 70% WG Insecticide, Imidacloprid Uses, Imidacloprid 70 WG Uses, Imidacloprid Dose Per Pump, Imidacloprid 70 WG Dose, Imidacloprid Systemic Insecticide, Imidacloprid for Cotton, Imidacloprid for Chilli, Imidacloprid for Vegetables, Imidacloprid for Paddy, Imidacloprid for Sugarcane, Imidacloprid for Citrus, Whitefly Control Insecticide, Aphid Control Insecticide, Jassid Control Insecticide, Thrips Control Insecticide, Sucking Pest Control, Broad Spectrum Systemic Insecticide, Neonicotinoid Insecticide, Agricultural Insecticide, Crop Protection Solution, EXTRA MIDA 70 Insecticide, Imidacloprid 70% WG Uses, Imidacloprid 70% WG Dose, Imidacloprid 70% WG Price, Imidacloprid 70% WG for Cotton, Imidacloprid 70% WG for Chilli, Imidacloprid 70% WG for Paddy, Imidacloprid 70% WG for Sugarcane, Imidacloprid 70% WG for Whitefly Control, Imidacloprid 70% WG for Aphid Control, Imidacloprid 70% WG Mode of Action, Best Insecticide for Sucking Pests, Best Whitefly Control Insecticide, Systemic Insecticide for Cotton and Vegetables, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Imidacloprid 70% WG (EXTRA MIDA 70) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Imidacloprid 70% WG | EXTRA MIDA 70 Insecticide',
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
