import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'CHILLI_H_FIPRONIL_2_92_EC';
const INDICATIVE_LIST_PRICE_INR = 353;

@Component({
  selector: 'app-fipronil-2-92-ec-chilli-h',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fipronil-2-92-ec-chilli-h.component.html',
  styleUrl: './fipronil-2-92-ec-chilli-h.component.scss'
})
export class Fipronil292EcChilliHComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/fipronil-2-92-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/fipronil-2-92-ec.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Fipronil 2.92% EC';
  brandName = 'CHILLI H';

  featuredSnippetAnswer =
    'Fipronil 2.92% EC (CHILLI H) is a phenylpyrazole broad-spectrum insecticide that controls stem borers, thrips, white grubs, termites, and soil pests through contact and stomach action. It disrupts GABA receptors in insect nervous systems for long-lasting crop protection in rice, chilli, cotton, sugarcane, and vegetables. Recommended dose: 20 ml per pump.';

  packSizes = [
    { volume: '250 ml', price: 353, featured: true, sku: 'CHILLI-H-250ML' },
    { volume: '500 ml', price: 690, featured: false, sku: 'CHILLI-H-500ML' },
    { volume: '1 LTR', price: 1357, featured: false, sku: 'CHILLI-H-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Broad spectrum insecticide',
      description:
        'Fipronil 2.92% EC delivers dependable control of stem borers, thrips, white grubs, termites, leaf feeders, and soil insects across rice, chilli, cotton, sugarcane, and vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Excellent stem borer control',
      description:
        'CHILLI H provides strong activity against yellow stem borer, pink stem borer, and other borer species that tunnel into stems and disrupt nutrient flow in rice and sugarcane.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual activity',
      description:
        'The EC formulation adheres to foliage and soil surfaces, maintaining field protection between spray intervals during peak pest pressure seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Soil and foliar pest control',
      description:
        'Effective against both above-ground sucking and chewing pests and below-ground white grubs, termites, and root feeders in a single crop protection program.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Advanced crop protection',
      description:
        'Phenylpyrazole chemistry (IRAC Group 2B) disrupts insect nervous systems for reliable pest control when applied at early infestation with full coverage.',
      icon: 'fas fa-leaf'
    }
  ];

  keyBenefits = [
    {
      title: 'Effective against multiple pest species',
      description:
        'CHILLI H manages stem borers, thrips, white grubs, termites, BPH, leaf folder, aphids, jassids, and soil insects when applied at the right crop stage with thorough coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long lasting control',
      description:
        'Fipronil deposit and ingestion toxicity continue working between sprays, protecting tillers, stems, roots, and foliage during critical growth windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Reliable crop protection',
      description:
        'Contact and stomach action protect rice, chilli, cotton, sugarcane, and vegetables from mixed foliar and soil pest damage throughout the season.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Reduced crop damage',
      description:
        'Timely application at economic threshold limits stem tunneling, root feeding, thrips scarring, and leaf damage that reduce yield and marketable quality.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better yield potential',
      description:
        'By protecting tillers, stems, roots, and developing produce during pest pressure, growers support healthier plants and improved productivity.',
      icon: 'fas fa-award'
    },
    {
      title: 'Improved plant health',
      description:
        'Cleaner foliage with less borer damage, thrips scarring, and root injury improves photosynthesis, vigour, and overall crop resilience.',
      icon: 'fas fa-heart'
    }
  ];

  whyChoose = [
    {
      title: 'Premium phenylpyra- zole EC formulation',
      description:
        'Harishree\'s optimized emulsifiable concentrate ensures uniform dispersion, rapid leaf uptake, and dependable contact and stomach action in one application.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven GABA receptor disruption',
      description:
        'Fipronil blocks GABA-gated chloride channels (IRAC Group 2B), causing hyperexcitation and paralysis — a distinct mode of action from organophosphates and pyrethroids.',
      icon: 'fas fa-bolt'
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
        'Clear 20 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply CHILLI H confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Stem Borers',
      description:
        'Controls yellow stem borer, pink stem borer, and other borer larvae that tunnel into rice and sugarcane stems through contact and stomach action.'
    },
    {
      name: 'Thrips',
      description:
        'Knocks down thrips that scar leaves, flowers, and fruits — a major pest concern in chilli and vegetable production.'
    },
    {
      name: 'White Grubs',
      description:
        'Manages white grub larvae that feed on roots and underground plant parts, reducing stand establishment and crop vigour.'
    },
    {
      name: 'Termites',
      description:
        'Provides activity against termite colonies that attack roots, stems, and crop residues in field and plantation settings.'
    },
    {
      name: 'Root Feeders',
      description:
        'Suppresses soil-dwelling insects that damage root systems and compromise nutrient uptake in rice, cotton, and vegetables.'
    },
    {
      name: 'Leaf Feeders',
      description:
        'Controls defoliating and leaf-mining insect species that reduce photosynthetic capacity during vegetative growth.'
    },
    {
      name: 'Soil Insects',
      description:
        'Offers broad activity against soil-borne pest complexes including grubs, termites, and root-feeding larvae.'
    },
    {
      name: 'Sucking Pests',
      description:
        'Manages thrips, aphids, jassids, and BPH populations on foliage when applied with good canopy coverage.'
    },
    {
      name: 'Brown Plant Hopper',
      description:
        'Provides activity against BPH in rice when applied at early infestation with thorough spray coverage.'
    },
    {
      name: 'Leaf Folder',
      description:
        'Controls leaf folder larvae that fold rice leaves and reduce photosynthesis during tillering and panicle development.'
    },
    {
      name: 'Aphids',
      description:
        'Controls aphid colonies on tender shoots and leaf undersides that cause curling, honeydew deposition, and sooty mould.'
    },
    {
      name: 'Jassids',
      description:
        'Provides activity against jassid species that cause hopper burn, leaf curling, and reduced photosynthesis in cotton and okra.'
    }
  ];

  applications = [
    {
      title: 'Rice',
      description:
        'A leading choice for stem borer, leaf folder, and BPH management during tillering and panicle stages with long residual follow-through.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Chilli',
      description:
        'Protects against thrips, aphids, and soil pests that damage pods, reduce colour intensity, and affect export quality.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Cotton',
      description:
        'Controls jassids, aphids, thrips, and soil insects during vegetative and boll development for cleaner, healthier plants.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Sugarcane',
      description:
        'Manages stem borer, white grub, and termite infestations that reduce cane weight, juice quality, and stand vigour.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Vegetables',
      description:
        'Broad fit across tomato, brinjal, okra, and cole crops facing mixed foliar and soil pest pressure throughout the growing season.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Pulses',
      description:
        'Manages pod borers, aphids, and soil insects during pod-setting windows in gram, pigeon pea, and other pulse crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Oilseed Crops',
      description:
        'Controls aphids, jassids, and soil pests in soybean, groundnut, mustard, and sunflower during critical growth stages.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Tomato',
      description:
        'Controls thrips, whiteflies, and soil pests during vegetative and fruit development for cleaner, marketable produce.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Brinjal',
      description:
        'Manages thrips, jassids, and soil insects to reduce leaf damage, fruit drop, and quality loss during flowering and fruiting.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Okra',
      description:
        'Defends against jassids, aphids, and thrips during flowering and pod formation — critical stages for okra yield and pod quality.',
      icon: 'fas fa-seedling'
    }
  ];

  cropWiseUsage = [
    { crop: 'Rice', pests: 'Stem borer, leaf folder, BPH', dose: '20 ml/pump', timing: 'At ETL during tillering and panicle initiation' },
    { crop: 'Chilli', pests: 'Thrips, aphids, soil insects', dose: '20 ml/pump', timing: 'Early infestation at vegetative and fruit set' },
    { crop: 'Cotton', pests: 'Jassids, aphids, thrips, soil pests', dose: '20 ml/pump', timing: 'Early pest buildup on foliage' },
    { crop: 'Sugarcane', pests: 'Stem borer, white grub, termites', dose: '20 ml/pump', timing: 'At early borer or soil pest damage' },
    { crop: 'Tomato', pests: 'Thrips, aphids, whiteflies', dose: '20 ml/pump', timing: 'Early pest buildup on foliage and fruits' },
    { crop: 'Brinjal', pests: 'Thrips, jassids, soil insects', dose: '20 ml/pump', timing: 'First sign of sucking pest or soil damage' },
    { crop: 'Okra', pests: 'Jassids, aphids, thrips', dose: '20 ml/pump', timing: 'Flowering to pod formation' },
    { crop: 'Pulses', pests: 'Pod borers, aphids, soil insects', dose: '20 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Oilseeds', pests: 'Aphids, jassids, soil pests', dose: '20 ml/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Vegetables', pests: 'Mixed foliar and soil pests', dose: '20 ml/pump', timing: 'Early infestation with good coverage' }
  ];

  pestWiseControl = [
    { pest: 'Stem Borers', crops: 'Rice, sugarcane, vegetables', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Contact + stomach', efficacy: 'High with good coverage' },
    { pest: 'White Grubs', crops: 'Sugarcane, cotton, vegetables', mode: 'Contact + stomach', efficacy: 'High with soil/foliar application' },
    { pest: 'Termites', crops: 'Sugarcane, cotton, field crops', mode: 'Contact + stomach', efficacy: 'High at early infestation' },
    { pest: 'Brown Plant Hopper', crops: 'Rice', mode: 'Contact + stomach', efficacy: 'Moderate to high' },
    { pest: 'Leaf Folder', crops: 'Rice', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Aphids', crops: 'Cotton, vegetables, pulses', mode: 'Contact + stomach', efficacy: 'High on active colonies' },
    { pest: 'Jassids', crops: 'Cotton, okra, pulses', mode: 'Contact + stomach', efficacy: 'High at early infestation' },
    { pest: 'Root Feeders', crops: 'Rice, cotton, vegetables', mode: 'Contact + stomach', efficacy: 'Moderate to high' },
    { pest: 'Soil Insects', crops: 'Multiple field crops', mode: 'Contact + stomach', efficacy: 'High with proper application' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', chilliH: 'Phenylpyrazole — GABA receptor disruption (IRAC Group 2B)', traditional: 'Often organophosphate or pyrethroid with limited soil activity' },
    { feature: 'Pest spectrum', chilliH: 'Broad — stem borers, thrips, grubs, termites, BPH, leaf folder', traditional: 'Often targets only foliar or only soil pests' },
    { feature: 'Residual duration', chilliH: 'Long field persistence with EC deposit', traditional: 'Shorter residual on many conventional products' },
    { feature: 'Soil pest control', chilliH: 'Strong activity against white grubs and termites', traditional: 'Limited soil pest coverage' },
    { feature: 'Crop fit', chilliH: 'Rice, chilli, cotton, sugarcane, vegetables, pulses, oilseeds', traditional: 'Limited crop labels on older products' },
    { feature: 'Application dose', chilliH: '20 ml per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonFipronil = [
    { feature: 'Active ingredient', chilliH: 'Fipronil 2.92% EC — proven phenylpyrazole', other: 'Varies — organophosphates, pyrethroids, neonicotinoids' },
    { feature: 'Contact action', chilliH: 'Yes — rapid action on exposed pests', other: 'Depends on chemistry class' },
    { feature: 'Stomach action', chilliH: 'Yes — ingestion toxicity on feeding larvae', other: 'Limited or absent in contact-only products' },
    { feature: 'GABA disruption', chilliH: 'Unique IRAC Group 2B mode of action', other: 'Different biochemical pathways' },
    { feature: 'Soil + foliar pests', chilliH: 'Controls both above and below ground pests', other: 'Often foliar OR soil focused' },
    { feature: 'Value per acre', chilliH: 'One product, proven dose, broad protection', other: 'May need multiple products or tank mixes' }
  ];

  comparisonContactSystemic = [
    { feature: 'Action type', chilliH: 'Contact and stomach — surface deposit + ingestion', systemic: 'Systemic — translocates within plant tissue' },
    { feature: 'Soil pest control', chilliH: 'Strong against grubs, termites, root feeders', systemic: 'Limited direct soil pest activity' },
    { feature: 'Knockdown speed', chilliH: 'Good visible activity on exposed pests', systemic: 'Slower initial knockdown, longer internal protection' },
    { feature: 'Stem borer control', chilliH: 'Effective when larvae feed on treated tissue', systemic: 'Depends on translocation to feeding site' },
    { feature: 'Resistance management', chilliH: 'IRAC Group 2B — rotate with other MOAs', systemic: 'Different IRAC groups — complementary rotation' },
    { feature: 'Best use case', chilliH: 'Mixed foliar and soil pest complexes', systemic: 'Sucking pests and hidden feeders in vascular tissue' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'CHILLI H' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid emulsion' },
      { label: 'Active ingredient', value: 'Fipronil 2.92% EC' },
      { label: 'Chemical group', value: 'Phenylpyrazole' },
      {
        label: 'Mode of action',
        value: 'Contact and stomach action — GABA-gated chloride channel blocker (IRAC Group 2B)'
      },
      { label: 'Action type', value: 'Contact and stomach' },
      {
        label: 'Target pests',
        value: 'Stem borers, Thrips, White grubs, Termites, Root feeders, Leaf feeders, Soil insects, BPH, Leaf folder, Aphids, Jassids'
      },
      { label: 'Target crops', value: 'Rice, Chilli, Cotton, Sugarcane, Vegetables, Pulses, Oilseeds, Tomato, Brinjal, Okra' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '20 ml/pump' },
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
    { label: 'Product Name', value: 'CHILLI H' },
    { label: 'Brand / Trade Name', value: 'CHILLI H' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Active Ingredient', value: 'Fipronil 2.92% EC' },
    { label: 'Chemical Group', value: 'Phenylpyrazole' },
    {
      label: 'Mode of Action',
      value:
        'GABA-gated chloride channel blocker (IRAC Group 2B) — contact and stomach action causing hyperexcitation and paralysis'
    },
    { label: 'Action Type', value: 'Contact and stomach' },
    {
      label: 'Target Pests',
      value: 'Stem borers, Thrips, White grubs, Termites, Root feeders, Leaf feeders, Soil insects, BPH, Leaf folder, Aphids, Jassids'
    },
    { label: 'Target Crops', value: 'Rice, Chilli, Cotton, Sugarcane, Vegetables, Pulses, Oilseed crops, Tomato, Brinjal, Okra' },
    { label: 'Recommended Dose', value: '20 ml/pump' },
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
      title: 'GABA receptor disruption',
      description:
        'Fipronil blocks GABA-gated chloride channels in insect nerve tissue, preventing normal inhibition of nerve signals and causing hyperexcitation, paralysis, and death.'
    },
    {
      title: 'Contact action',
      description:
        'Pests that come into direct contact with treated foliage or soil surfaces absorb fipronil through the cuticle, delivering rapid activity on exposed populations.'
    },
    {
      title: 'Stomach action',
      description:
        'Feeding larvae and adults ingest treated plant tissue, receiving lethal doses through the digestive tract for sustained control of hidden pests.'
    },
    {
      title: 'Nervous system impact',
      description:
        'By disrupting chloride channel function (IRAC Group 2B), fipronil affects both central and peripheral nervous systems, providing broad-spectrum pest control.'
    },
    {
      title: 'Long residual performance',
      description:
        'The EC formulation maintains active deposit on foliage and soil surfaces, continuing to protect crops from newly arriving pests between spray intervals.'
    },
    {
      title: 'Feeding control benefits',
      description:
        'Paralysis and death of feeding pests reduce crop damage from stem tunneling, root feeding, thrips scarring, and leaf defoliation during critical growth stages.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 20 ml dose',
      text: 'Measure exactly 20 ml per pump to maintain efficacy, protect crops, and slow resistance development in pest populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides, stems, and base of plants where thrips, borers, and soil pests congregate.'
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
      value: 'Growers report lower stem borer, thrips, and white grub counts within days of a well-timed spray at 20 ml per pump.'
    },
    {
      label: 'Better crop health',
      value: 'Cleaner tillers and foliage with less stem damage, thrips scarring, and root injury improves overall plant vigour.'
    },
    {
      label: 'Stronger plant growth',
      value: 'Broad-spectrum protection supports uninterrupted vegetative and reproductive development during pest pressure.'
    },
    {
      label: 'Improved productivity',
      value: 'Protecting tillers, stems, roots, and developing produce during critical stages supports better yield and marketable quality.'
    }
  ];

  relatedProducts = [
    {
      name: 'Fipronil 40% + Imidacloprid 40% WG (FI 40)',
      description: 'Dual-action fipronil and imidacloprid combination for chewing and sucking pest control with contact and systemic action.',
      route: '/product/fipronil-40-imidacloprid-40-wg',
      image: 'assets/products/insecticide/fipronil-40-imidacloprid-40-wg.jpg',
      imageAlt: 'Fipronil Imidacloprid FI 40 insecticide by Harishree Crop Science'
    },
    {
      name: 'Emamectin benzoate 1.5% + Fipronil 3.5% SC (Pro 5G)',
      description: 'Synergistic emamectin and fipronil combination for tough caterpillar and sucking pest control.',
      route: '/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g',
      image: 'assets/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc.jpg',
      imageAlt: 'Emamectin Fipronil Pro 5G insecticide by Harishree Crop Science'
    },
    {
      name: 'Novaluron 5.25% + Indoxacarb 4.5% SC (Turbo)',
      description: 'Dual-action IGR and oxadiazine insecticide for caterpillar and borer control in cotton, chilli, and vegetables.',
      route: '/product/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'Novaluron Indoxacarb Turbo insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is FIPRONIL 2.92% EC used for?',
      answer:
        '<strong>Fipronil 2.92% EC</strong> (marketed as <strong>CHILLI H</strong>) is a broad-spectrum phenylpyrazole insecticide for controlling stem borers, thrips, white grubs, termites, and soil pests in rice, chilli, cotton, sugarcane, and vegetables.',
      answerPlain:
        'Fipronil 2.92% EC (marketed as CHILLI H) is a broad-spectrum phenylpyrazole insecticide for controlling stem borers, thrips, white grubs, termites, and soil pests in rice, chilli, cotton, sugarcane, and vegetables.'
    },
    {
      question: 'What is the dose of CHILLI H per pump?',
      answer:
        'The standard recommended dose of <strong>CHILLI H</strong> is <strong>20 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of CHILLI H is 20 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which pests does CHILLI H control?',
      answer:
        '<strong>CHILLI H</strong> controls <strong>stem borers, thrips, white grubs, termites, root feeders, leaf feeders, soil insects, BPH, leaf folder, aphids, and jassids</strong> when applied at early infestation with thorough coverage.',
      answerPlain:
        'CHILLI H controls stem borers, thrips, white grubs, termites, root feeders, leaf feeders, soil insects, BPH, leaf folder, aphids, and jassids when applied at early infestation with thorough coverage.'
    },
    {
      question: 'Can FIPRONIL 2.92% EC be used in rice?',
      answer:
        'Yes. <strong>CHILLI H</strong> is widely used on rice for stem borer, leaf folder, and BPH when applied at tillering and panicle stages with 20 ml per pump.',
      answerPlain:
        'Yes. CHILLI H is widely used on rice for stem borer, leaf folder, and BPH when applied at tillering and panicle stages with 20 ml per pump.'
    },
    {
      question: 'Is FIPRONIL effective against stem borers?',
      answer:
        'Yes. <strong>CHILLI H</strong> provides strong contact and stomach activity against yellow stem borer, pink stem borer, and other borer species when applied at early larval stage on rice and sugarcane.',
      answerPlain:
        'Yes. CHILLI H provides strong contact and stomach activity against yellow stem borer, pink stem borer, and other borer species when applied at early larval stage on rice and sugarcane.'
    },
    {
      question: 'How does FIPRONIL work?',
      answer:
        '<strong>Fipronil</strong> blocks GABA-gated chloride channels (IRAC Group 2B), causing hyperexcitation and paralysis in insect nervous systems through <strong>contact and stomach action</strong>.',
      answerPlain:
        'Fipronil blocks GABA-gated chloride channels (IRAC Group 2B), causing hyperexcitation and paralysis in insect nervous systems through contact and stomach action.'
    },
    {
      question: 'What crops can use CHILLI H?',
      answer:
        '<strong>CHILLI H</strong> is used on <strong>rice, chilli, cotton, sugarcane, vegetables, pulses, oilseeds, tomato, brinjal, and okra</strong> when applied at the right crop stage with 20 ml per pump.',
      answerPlain:
        'CHILLI H is used on rice, chilli, cotton, sugarcane, vegetables, pulses, oilseeds, tomato, brinjal, and okra when applied at the right crop stage with 20 ml per pump.'
    },
    {
      question: 'What is the best spray timing for CHILLI H?',
      answer:
        'Spray at <strong>early pest infestation</strong> or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and residual protection.',
      answerPlain:
        'Spray at early pest infestation or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and residual protection.'
    },
    {
      question: 'How long does FIPRONIL protection last?',
      answer:
        'Field residual activity typically lasts <strong>10–21 days</strong> depending on pest pressure, crop stage, and weather. Re-scout and re-spray as per ETL and label guidance.',
      answerPlain:
        'Field residual activity typically lasts 10–21 days depending on pest pressure, crop stage, and weather. Re-scout and re-spray as per ETL and label guidance.'
    },
    {
      question: 'What are the benefits of FIPRONIL 2.92% EC?',
      answer:
        '<strong>CHILLI H</strong> offers broad-spectrum pest control, long residual activity, effective stem borer and soil pest management, and reliable crop protection with a simple 20 ml per pump dose.',
      answerPlain:
        'CHILLI H offers broad-spectrum pest control, long residual activity, effective stem borer and soil pest management, and reliable crop protection with a simple 20 ml per pump dose.'
    },
    {
      question: 'Is FIPRONIL 2.92% EC a broad spectrum insecticide?',
      answer:
        'Yes. <strong>CHILLI H</strong> is a <strong>broad-spectrum insecticide</strong> effective against both foliar pests (thrips, aphids, BPH) and soil pests (white grubs, termites, root feeders).',
      answerPlain:
        'Yes. CHILLI H is a broad-spectrum insecticide effective against both foliar pests (thrips, aphids, BPH) and soil pests (white grubs, termites, root feeders).'
    },
    {
      question: 'Can Fipronil be used on chilli crops?',
      answer:
        'Yes. <strong>CHILLI H</strong> is effective on chilli for thrips, aphids, and soil insects when applied at the right crop stage with 20 ml per pump.',
      answerPlain:
        'Yes. CHILLI H is effective on chilli for thrips, aphids, and soil insects when applied at the right crop stage with 20 ml per pump.'
    },
    {
      question: 'Can Fipronil be used on cotton?',
      answer:
        'Yes. <strong>CHILLI H</strong> controls jassids, aphids, thrips, and soil pests on cotton when applied at early infestation with 20 ml per pump.',
      answerPlain:
        'Yes. CHILLI H controls jassids, aphids, thrips, and soil pests on cotton when applied at early infestation with 20 ml per pump.'
    },
    {
      question: 'Is FIPRONIL effective against thrips?',
      answer:
        'Yes. <strong>CHILLI H</strong> controls thrips on chilli, cotton, and vegetables when sprayed with good coverage of leaf undersides and flowers where these pests feed.',
      answerPlain:
        'Yes. CHILLI H controls thrips on chilli, cotton, and vegetables when sprayed with good coverage of leaf undersides and flowers where these pests feed.'
    },
    {
      question: 'Is FIPRONIL effective against white grubs and termites?',
      answer:
        'Yes. <strong>CHILLI H</strong> provides activity against white grubs and termites in sugarcane, cotton, and field crops when applied with proper soil and foliar coverage.',
      answerPlain:
        'Yes. CHILLI H provides activity against white grubs and termites in sugarcane, cotton, and field crops when applied with proper soil and foliar coverage.'
    },
    {
      question: 'How do I mix CHILLI H for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>20 ml of CHILLI H</strong>, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 20 ml of CHILLI H, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for CHILLI H?',
      answer:
        '<strong>CHILLI H</strong> is available in <strong>250 ml, 500 ml, and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'CHILLI H is available in 250 ml, 500 ml, and 1 LTR packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is the shelf life of CHILLI H?',
      answer:
        'When stored sealed in a cool, dry place, <strong>CHILLI H</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, CHILLI H has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'Is CHILLI H compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'What precautions should I take when using CHILLI H?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'Is CHILLI H safe for crops?',
      answer:
        'Yes, when used at the recommended dose and timing, CHILLI H is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, CHILLI H is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'What is the technical name of CHILLI H insecticide?',
      answer:
        'The technical composition is <strong>Fipronil 2.92% EC</strong>. CHILLI H is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is Fipronil 2.92% EC. CHILLI H is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'What is Fipronil dose per acre?',
      answer:
        'Field dose varies by crop and water volume. A common knapsack recommendation is <strong>20 ml per pump</strong> (15-litre sprayer). For acre-level rates, follow the printed label.',
      answerPlain:
        'Field dose varies by crop and water volume. A common knapsack recommendation is 20 ml per pump (15-litre sprayer). For acre-level rates, follow the printed label.'
    },
    {
      question: 'Is FIPRONIL systemic or contact?',
      answer:
        'No. <strong>CHILLI H</strong> acts primarily through <strong>contact and stomach action</strong>. Fipronil does not translocate systemically within plant tissue but provides strong surface and ingestion toxicity.',
      answerPlain:
        'No. CHILLI H acts primarily through contact and stomach action. Fipronil does not translocate systemically within plant tissue but provides strong surface and ingestion toxicity.'
    },
    {
      question: 'What is CHILLI H Fipronil 2.92% EC insecticide?',
      answer:
        '<strong>CHILLI H</strong> is Harishree Crop Science\'s brand of <strong>Fipronil 2.92% EC</strong> — a premium phenylpyrazole broad-spectrum insecticide for Indian agriculture.',
      answerPlain:
        'CHILLI H is Harishree Crop Science\'s brand of Fipronil 2.92% EC — a premium phenylpyrazole broad-spectrum insecticide for Indian agriculture.'
    },
    {
      question: 'How does CHILLI H compare to conventional insecticides?',
      answer:
        'Unlike many single-action products, <strong>CHILLI H</strong> uses fipronil\'s unique GABA receptor disruption (IRAC Group 2B) for broader pest spectrum including soil pests, with long residual activity in one spray.',
      answerPlain:
        'Unlike many single-action products, CHILLI H uses fipronil\'s unique GABA receptor disruption (IRAC Group 2B) for broader pest spectrum including soil pests, with long residual activity in one spray.'
    }
  ];

  testimonials = [
    { name: 'Ramesh', location: 'Andhra Pradesh', text: 'CHILLI H gave excellent stem borer control in my rice. Dead hearts stopped within a week of spraying at tillering stage.', rating: 5 },
    { name: 'Suresh', location: 'Maharashtra', text: 'I used CHILLI H on chilli for thrips. The EC formulation kept pods clean through the season.', rating: 5 },
    { name: 'Kiran', location: 'Karnataka', text: '20 ml per pump is easy to remember. CHILLI H mixed smoothly and controlled thrips in tomato effectively.', rating: 5 },
    { name: 'Prakash', location: 'Telangana', text: 'Stem borer pressure in my rice dropped noticeably after one well-timed CHILLI H spray.', rating: 4 },
    { name: 'Anil', location: 'Gujarat', text: 'Harishree CHILLI H is now my go-to for mixed pest outbreaks. Residual protection was better than my old spray.', rating: 5 },
    { name: 'Vijay', location: 'Tamil Nadu', text: 'Thrips in chilli reduced after CHILLI H. Fruits were cleaner at market.', rating: 4 },
    { name: 'Hitesh', location: 'Punjab', text: 'Good results on sugarcane stem borer and white grub. I rotate CHILLI H with other MOAs for resistance management.', rating: 5 },
    { name: 'Mahesh', location: 'Madhya Pradesh', text: 'The EC formulation spreads well. CHILLI H controlled soil insects in my cotton field effectively.', rating: 5 },
    { name: 'Dinesh', location: 'Rajasthan', text: 'Dealer recommended CHILLI H for rice stem borer. Visible improvement in tiller health after spraying.', rating: 4 },
    { name: 'Bhavesh', location: 'Gujarat', text: 'Reliable broad-spectrum pest control across seasons. CHILLI H has become a fixed part of my crop protection program.', rating: 5 },
    { name: 'Sanjay', location: 'West Bengal', text: 'Used CHILLI H on rice for leaf folder and BPH. Good activity and crop safety at 20 ml per pump.', rating: 5 },
    { name: 'Ravi', location: 'Odisha', text: 'Yellow stem borer in rice was controlled well with CHILLI H. Will buy again next season.', rating: 4 }
  ];

  aggregateRating = {
    ratingValue: '4.7',
    reviewCount: '118',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure CHILLI H', text: 'Accurately measure 20 ml of Fipronil 2.92% EC (CHILLI H) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 20 ml into the water. The EC formulation disperses easily into a uniform emulsion.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage and base of plants in calm weather, covering leaf undersides where thrips and borers feed.' },
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
      productImageAlt: 'CHILLI H FIPRONIL 2.92% EC Insecticide',
      productImageCaption: 'CHILLI H Fipronil 2.92% EC insecticide pack by Harishree Crop Science',
      description:
        'CHILLI H (Fipronil 2.92% EC) by Harishree Crop Science is a premium phenylpyrazole broad-spectrum insecticide for stem borers, thrips, white grubs, termites, and soil pests in rice, chilli, cotton, sugarcane, and vegetables. Dose: 20 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'CHILLI-H-FIPRONIL-2-92-EC',
      mpn: 'CHILLI-H-FIPRONIL-2-92-EC',
      dose: '20 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply CHILLI H (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of CHILLI H (Fipronil 2.92% EC) for foliar application at 20 ml/pump.',
      alternateNames: [
        'CHILLI H',
        'CHILLI H Insecticide',
        'CHILLI H Fipronil 2.92% EC',
        'Fipronil 2.92 EC',
        'Fipronil 2.92% EC Insecticide',
        'Fipronil Insecticide',
        'Fipronil Uses',
        'Fipronil Dose',
        'Fipronil for Rice',
        'Fipronil for Chilli'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `CHILLI H (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Fipronil 2.92% EC (CHILLI H) broad-spectrum insecticide by Harishree. Controls stem borers, thrips & soil pests. Dose: 20 ml/pump.';

    this.seo.setAll(
      {
        title: 'Fipronil 2.92% EC | CHILLI H Insecticide',
        description: desc,
        keywords:
          'Fipronil 2.92% EC, CHILLI H, Fipronil 2.92 EC, Fipronil 2.92% EC Insecticide, Fipronil Insecticide, Fipronil Uses, Fipronil Dose, Fipronil Dose Per Pump, Fipronil for Rice, Fipronil for Chilli, Fipronil for Cotton, Fipronil for Sugarcane, Fipronil for Vegetables, Fipronil for Stem Borer, Fipronil for Thrips, Fipronil for White Grubs, Fipronil for Termites, Broad Spectrum Insecticide, Phenylpyrazole Insecticide, Agricultural Insecticide, Crop Protection Solution, CHILLI H Insecticide, CHILLI H Fipronil 2.92% EC, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Fipronil 2.92% EC (CHILLI H) | Harishree',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Fipronil 2.92% EC | CHILLI H',
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
