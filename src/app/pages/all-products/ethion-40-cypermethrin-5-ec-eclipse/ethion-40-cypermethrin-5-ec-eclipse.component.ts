import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'ECLIPSE_ETHION_40_CYPERMETHRIN_5_EC';
const INDICATIVE_LIST_PRICE_INR = 313;

@Component({
  selector: 'app-ethion-40-cypermethrin-5-ec-eclipse',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ethion-40-cypermethrin-5-ec-eclipse.component.html',
  styleUrl: './ethion-40-cypermethrin-5-ec-eclipse.component.scss'
})
export class Ethion40Cypermethrin5EcEclipseComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/ethion-40-cypermethrin-5-ec-eclipse';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/ethion-40-cypermethrin-5-ec.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Ethion 40% + Cypermethrin 5% EC';
  brandName = 'ECLIPSE';

  featuredSnippetAnswer =
    'Ethion 40% + Cypermethrin 5% EC (ECLIPSE) is a dual-action organophosphate and pyrethroid insecticide that controls bollworms, thrips, aphids, whiteflies, jassids, and caterpillars in cotton, chilli, and vegetables. It delivers fast knockdown with long residual protection. Recommended dose: 25 ml per pump.';

  packSizes = [
    { volume: '500 ml', price: 313, featured: true, sku: 'ECLIPSE-500ML' },
    { volume: '1 LTR', price: 602, featured: false, sku: 'ECLIPSE-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredient technology',
      description:
        'Ethion and Cypermethrin combine organophosphate and synthetic pyrethroid chemistry for complementary contact, stomach, and knockdown action against mixed pest complexes.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls chewing and sucking pests including bollworms, thrips, aphids, whiteflies, jassids, and caterpillars across cotton, chilli, vegetables, pulses, and oilseeds.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast knockdown effect',
      description:
        'Cypermethrin delivers rapid paralysis of exposed pests while Ethion provides dependable follow-through on hidden and residual populations.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual control',
      description:
        'The EC formulation adheres well to foliage and maintains field activity between spray intervals during peak pest pressure seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Sucking and chewing pest control',
      description:
        'One spray addresses bollworm larvae, thrips, aphids, whiteflies, and jassids — reducing the need for multiple single-action products.',
      icon: 'fas fa-bug'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad spectrum pest control',
      description:
        'ECLIPSE manages bollworms, thrips, aphids, whiteflies, jassids, leaf-eating caterpillars, and borers when applied at early infestation with full canopy coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast knockdown performance',
      description:
        'Cypermethrin disrupts sodium channels for immediate pest paralysis while Ethion inhibits acetylcholinesterase for sustained nerve disruption.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual activity',
      description:
        'Surface deposit and stomach action continue working between sprays, protecting squares, bolls, fruits, and pods during critical growth stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Effective resistance management',
      description:
        'Two distinct modes of action (IRAC Group 1B + 3A) help slow resistance development when rotated with other chemistry classes in IPM programs.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Enhanced crop protection',
      description:
        'Dual-action coverage protects foliage, flowers, and developing produce from mixed chewing and sucking pest damage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Better yield potential',
      description:
        'By controlling key pests during square, boll, fruit, and pod stages, growers protect yield quality and marketable produce.',
      icon: 'fas fa-seedling'
    }
  ];

  whyChoose = [
    {
      title: 'Premium dual-action EC formulation',
      description:
        'Harishree\'s optimized emulsifiable concentrate ensures uniform dispersion, rapid leaf uptake, and dependable dual-mode pest control in one application.',
      icon: 'fas fa-award'
    },
    {
      title: 'Organopho sphate + pyrethroid synergy',
      description:
        'Ethion and Cypermethrin complement each other — fast knockdown meets long-lasting contact and stomach action for comprehensive field protection.',
      icon: 'fas fa-flask'
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
        'Clear 25 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply ECLIPSE confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Bollworms',
      description:
        'Controls American bollworm, pink bollworm, and spotted bollworm larvae that damage squares and bolls in cotton through contact and stomach action.'
    },
    {
      name: 'American Bollworm',
      description:
        'Effective against Helicoverpa armigera larvae feeding on cotton bolls, chilli pods, and vegetable fruits when applied at early larval stage.'
    },
    {
      name: 'Pink Bollworm',
      description:
        'Manages pink bollworm infestations in cotton that bore into developing bolls and reduce fibre quality and yield.'
    },
    {
      name: 'Spotted Bollworm',
      description:
        'Suppresses spotted bollworm populations on cotton and other labeled crops during flowering and boll development stages.'
    },
    {
      name: 'Thrips',
      description:
        'Knocks down thrips that scar leaves, flowers, and fruits — a major pest concern in chilli and vegetable production.'
    },
    {
      name: 'Aphids',
      description:
        'Controls aphid colonies on tender shoots and leaf undersides that cause curling, honeydew deposition, and sooty mould.'
    },
    {
      name: 'Whiteflies',
      description:
        'Manages whitefly adults and nymphs that suck sap and transmit viral diseases in cotton, chilli, brinjal, and vegetable crops.'
    },
    {
      name: 'Jassids',
      description:
        'Provides activity against jassid species that cause hopper burn, leaf curling, and reduced photosynthesis in cotton and okra.'
    },
    {
      name: 'Leaf Eating Caterpillars',
      description:
        'Controls defoliating caterpillar species that strip foliage and reduce photosynthetic capacity during vegetative growth.'
    },
    {
      name: 'Tobacco Caterpillar',
      description:
        'Effective against Spodoptera litura and related caterpillar species on cotton, chilli, and solanaceous vegetables.'
    },
    {
      name: 'Fruit Borers',
      description:
        'Protects developing fruits in chilli, tomato, and brinjal from borer damage that causes fruit drop and quality loss.'
    },
    {
      name: 'Stem Borers',
      description:
        'Offers activity against stem borer larvae that tunnel into plant stems and disrupt nutrient flow in labeled crops.'
    },
    {
      name: 'Pod Borers',
      description:
        'Manages pod borer infestations in pulses and oilseed crops during pod-setting windows for cleaner harvests.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'A leading dual-action choice for bollworm, jassid, aphid, and whitefly management during square and boll stages with fast knockdown and residual follow-through.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects against thrips, aphids, fruit borers, and caterpillars that damage pods, reduce colour intensity, and affect export quality.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Tomato',
      description:
        'Controls fruit borers, whiteflies, aphids, and thrips during vegetative and fruit development for cleaner, marketable produce.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Brinjal',
      description:
        'Manages shoot and fruit borers, jassids, and whiteflies to reduce leaf damage, fruit drop, and quality loss during flowering and fruiting.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Okra',
      description:
        'Defends against jassids, aphids, and fruit borers during flowering and pod formation — critical stages for okra yield and pod quality.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cabbage',
      description:
        'Controls diamondback moth, aphids, and caterpillars in cole crops when applied at early larval stage with thorough canopy coverage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Cauliflower',
      description:
        'Protects curd development from caterpillar and sucking pest damage during head formation for market-ready produce.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Pulses',
      description:
        'Manages pod borers, aphids, and jassids during pod-setting windows in gram, pigeon pea, and other pulse crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Oilseeds',
      description:
        'Controls aphids, jassids, and caterpillars in soybean, groundnut, mustard, and sunflower during critical growth stages.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Vegetable Crops',
      description:
        'Broad fit across solanaceous and cole crops facing mixed chewing and sucking pest pressure throughout the growing season.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Bollworms, jassids, aphids, whiteflies', dose: '25 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, fruit borers, caterpillars', dose: '25 ml/pump', timing: 'Early infestation at vegetative and fruit set' },
    { crop: 'Tomato', pests: 'Fruit borer, whitefly, aphids, thrips', dose: '25 ml/pump', timing: 'Early pest buildup on foliage and fruits' },
    { crop: 'Brinjal', pests: 'Shoot/fruit borer, jassids, whiteflies', dose: '25 ml/pump', timing: 'First sign of borer or sucking pest damage' },
    { crop: 'Okra', pests: 'Jassids, aphids, fruit borers', dose: '25 ml/pump', timing: 'Flowering to pod formation' },
    { crop: 'Cabbage', pests: 'Diamondback moth, aphids, caterpillars', dose: '25 ml/pump', timing: 'At early larval stage' },
    { crop: 'Cauliflower', pests: 'Caterpillars, aphids, thrips', dose: '25 ml/pump', timing: 'During head formation as per ETL' },
    { crop: 'Pulses', pests: 'Pod borers, aphids, jassids', dose: '25 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Oilseeds', pests: 'Aphids, jassids, caterpillars', dose: '25 ml/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Vegetables', pests: 'Mixed chewing and sucking pests', dose: '25 ml/pump', timing: 'Early infestation with good coverage' }
  ];

  pestWiseControl = [
    { pest: 'Bollworms', crops: 'Cotton, chilli, vegetables', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'American Bollworm', crops: 'Cotton, chilli, tomato', mode: 'Contact + stomach', efficacy: 'High with timely spray' },
    { pest: 'Pink Bollworm', crops: 'Cotton', mode: 'Contact + stomach', efficacy: 'High at early infestation' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Contact + knockdown', efficacy: 'High with good coverage' },
    { pest: 'Aphids', crops: 'Cotton, vegetables, pulses', mode: 'Contact + stomach', efficacy: 'High on active colonies' },
    { pest: 'Whiteflies', crops: 'Cotton, chilli, vegetables', mode: 'Contact + knockdown', efficacy: 'High with underside spray' },
    { pest: 'Jassids', crops: 'Cotton, okra, pulses', mode: 'Contact + knockdown', efficacy: 'High at early infestation' },
    { pest: 'Fruit Borers', crops: 'Chilli, tomato, brinjal', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Caterpillars', crops: 'Cotton, vegetables, pulses', mode: 'Contact + stomach', efficacy: 'High with full coverage' },
    { pest: 'Pod Borers', crops: 'Pulses, oilseeds', mode: 'Contact + stomach', efficacy: 'Moderate to high' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', eclipse: 'Dual — organophosphate + pyrethroid (contact + stomach + knockdown)', traditional: 'Single mode with limited pest spectrum' },
    { feature: 'Pest spectrum', eclipse: 'Broad — bollworms, thrips, aphids, whiteflies, jassids, caterpillars', traditional: 'Often targets only one pest group' },
    { feature: 'Knockdown speed', eclipse: 'Fast via Cypermethrin + Ethion follow-through', traditional: 'Varies; slower on mixed pest complexes' },
    { feature: 'Resistance management', eclipse: 'Two IRAC groups (1B + 3A) in one spray', traditional: 'Single MOA increases resistance risk' },
    { feature: 'Crop fit', eclipse: 'Cotton, chilli, vegetables, pulses, oilseeds', traditional: 'Limited crop labels on older products' },
    { feature: 'Application dose', eclipse: '25 ml per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonDualAction = [
    { feature: 'Active ingredients', eclipse: 'Ethion 40% + Cypermethrin 5% EC — proven combination', other: 'Single active ingredient products' },
    { feature: 'Contact action', eclipse: 'Yes — Cypermethrin fast knockdown on exposed pests', other: 'Depends on chemistry class' },
    { feature: 'Stomach action', eclipse: 'Yes — Ethion ingestion toxicity on feeding larvae', other: 'Limited or absent in contact-only products' },
    { feature: 'Pest spectrum', eclipse: 'Chewing + sucking pest control in one spray', other: 'Often chewing OR sucking focused' },
    { feature: 'Residual duration', eclipse: 'Good field persistence with dual-mode deposit', other: 'Shorter residual on some single-action products' },
    { feature: 'Value per acre', eclipse: 'One product, proven dose, dual protection', other: 'May need multiple products or tank mixes' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'ECLIPSE' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid emulsion' },
      { label: 'Active ingredient', value: 'Ethion 40% + Cypermethrin 5% EC' },
      { label: 'Chemical group', value: 'Organophosphate + Synthetic Pyrethroid' },
      {
        label: 'Mode of action',
        value: 'Contact, stomach, and knockdown action — Ethion (IRAC Group 1B) + Cypermethrin (IRAC Group 3A)'
      },
      { label: 'Action type', value: 'Contact and stomach' },
      {
        label: 'Target pests',
        value: 'Bollworms, Thrips, Aphids, Whiteflies, Jassids, Caterpillars, Fruit borers, Stem borers, Pod borers'
      },
      { label: 'Target crops', value: 'Cotton, Chilli, Tomato, Brinjal, Okra, Cabbage, Cauliflower, Pulses, Oilseeds, Vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '25 ml/pump' },
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
    { label: 'Product Name', value: 'ECLIPSE' },
    { label: 'Brand / Trade Name', value: 'ECLIPSE' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Active Ingredient', value: 'Ethion 40% + Cypermethrin 5% EC' },
    { label: 'Chemical Group', value: 'Organophosphate + Synthetic Pyrethroid Combination' },
    {
      label: 'Mode of Action',
      value:
        'Ethion inhibits acetylcholinesterase (IRAC Group 1B); Cypermethrin disrupts sodium channels (IRAC Group 3A) — contact, stomach, and knockdown action'
    },
    { label: 'Action Type', value: 'Contact and stomach' },
    {
      label: 'Target Pests',
      value: 'Bollworms, American bollworm, Pink bollworm, Thrips, Aphids, Whiteflies, Jassids, Caterpillars, Fruit borers, Stem borers, Pod borers'
    },
    { label: 'Target Crops', value: 'Cotton, Chilli, Tomato, Brinjal, Okra, Cabbage, Cauliflower, Pulses, Oilseeds, Vegetable crops' },
    { label: 'Recommended Dose', value: '25 ml/pump' },
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
    { label: 'Packaging Type', value: 'Bottle (500 ml, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Role of Ethion (organophosphate)',
      description:
        'Ethion inhibits acetylcholinesterase in insect nerve tissue, causing accumulation of acetylcholine and continuous nerve stimulation leading to paralysis and death through stomach and contact action.'
    },
    {
      title: 'Role of Cypermethrin (pyrethroid)',
      description:
        'Cypermethrin disrupts sodium channels in nerve membranes, delivering rapid knockdown and contact action against exposed pests on leaf surfaces.'
    },
    {
      title: 'Synergistic dual-mode effect',
      description:
        'The combination provides complementary modes of action — fast visible knockdown from Cypermethrin plus sustained stomach and contact activity from Ethion on feeding larvae.'
    },
    {
      title: 'Nervous system disruption',
      description:
        'Both actives target insect nervous systems through different biochemical pathways (IRAC Group 1B + 3A), improving control of resistant pest populations.'
    },
    {
      title: 'Long lasting protection',
      description:
        'Surface deposit and ingestion toxicity continue working between sprays, protecting foliage from newly arriving chewing and sucking pests.'
    },
    {
      title: 'Resistance management benefits',
      description:
        'Dual chemistry reduces selection pressure on any single mode of action, supporting sustainable pest management when rotated with other IRAC groups.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 25 ml dose',
      text: 'Measure exactly 25 ml per pump to maintain efficacy, protect crops, and slow resistance development in pest populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides where whiteflies, thrips, and aphids congregate for maximum pest contact.'
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
      value: 'Growers report lower bollworm, thrips, and whitefly counts within days of a well-timed spray at 25 ml per pump.'
    },
    {
      label: 'Better crop health',
      value: 'Cleaner foliage with less boll damage, curling, and honeydew improves overall plant vigour and photosynthesis.'
    },
    {
      label: 'Increased plant vigour',
      value: 'Dual-action protection supports uninterrupted vegetative and reproductive development during pest pressure.'
    },
    {
      label: 'Improved productivity',
      value: 'Protecting squares, bolls, fruits, and pods during critical stages supports better yield and marketable produce quality.'
    }
  ];

  relatedProducts = [
    {
      name: 'Chlorpyriphos 50% + Cypermethrin 5% EC (Combi 505)',
      description: 'Dual-action organophosphate and pyrethroid for bollworms, aphids, and mixed pest pressure in cotton and vegetables.',
      route: '/product/chlorpyriphos-50-cypermethrin-5-ec',
      image: 'assets/products/chlorpyriphos-50-cypermethrin-5-ec.png',
      imageAlt: 'Chlorpyriphos Cypermethrin Combi 505 insecticide by Harishree Crop Science'
    },
    {
      name: 'Profenofos 40% + Cypermethrin 4% EC (Mpire 404)',
      description: 'Combination insecticide for chewing and sucking pest control in cotton, chilli, and vegetables.',
      route: '/product/profenofos-40-cypermethrin-4-ec',
      image: 'assets/products/MPIRE-404.png',
      imageAlt: 'Profenofos Cypermethrin Mpire 404 insecticide by Harishree Crop Science'
    },
    {
      name: 'Cypermethrin 25% EC (H-Cyper 25)',
      description: 'Fast knockdown pyrethroid for bollworms, aphids, jassids, and thrips with contact and stomach action.',
      route: '/product/cypermethrin-25-ec',
      image: 'assets/products/insecticide/cypermethrin-25-ec.jpg',
      imageAlt: 'Cypermethrin 25% EC H-Cyper 25 insecticide by Harishree Crop Science'
    },
  ];

  faqs = [
    {
      question: 'What is ETHION 40% + CYPERMETHRIN 5% EC used for?',
      answer:
        '<strong>Ethion 40% + Cypermethrin 5% EC</strong> (marketed as <strong>ECLIPSE</strong>) is a dual-action insecticide for controlling bollworms, thrips, aphids, whiteflies, jassids, and caterpillars in cotton, chilli, vegetables, pulses, and oilseeds.',
      answerPlain:
        'Ethion 40% + Cypermethrin 5% EC (marketed as ECLIPSE) is a dual-action insecticide for controlling bollworms, thrips, aphids, whiteflies, jassids, and caterpillars in cotton, chilli, vegetables, pulses, and oilseeds.'
    },
    {
      question: 'What is the dose of ECLIPSE per pump?',
      answer:
        'The standard recommended dose of <strong>ECLIPSE</strong> is <strong>25 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of ECLIPSE is 25 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can use ECLIPSE?',
      answer:
        '<strong>ECLIPSE</strong> is used on <strong>cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, oilseeds, and vegetables</strong> when applied at the right crop stage with 25 ml per pump.',
      answerPlain:
        'ECLIPSE is used on cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, oilseeds, and vegetables when applied at the right crop stage with 25 ml per pump.'
    },
    {
      question: 'Which pests does ECLIPSE control?',
      answer:
        '<strong>ECLIPSE</strong> controls <strong>bollworms, thrips, aphids, whiteflies, jassids, caterpillars, fruit borers, stem borers, and pod borers</strong> when applied at early infestation with thorough coverage.',
      answerPlain:
        'ECLIPSE controls bollworms, thrips, aphids, whiteflies, jassids, caterpillars, fruit borers, stem borers, and pod borers when applied at early infestation with thorough coverage.'
    },
    {
      question: 'How does ETHION + CYPERMETHRIN work?',
      answer:
        '<strong>Ethion</strong> inhibits acetylcholinesterase (IRAC Group 1B) while <strong>Cypermethrin</strong> disrupts sodium channels (IRAC Group 3A). Together they provide <strong>contact, stomach, and knockdown action</strong> against chewing and sucking pests.',
      answerPlain:
        'Ethion inhibits acetylcholinesterase (IRAC Group 1B) while Cypermethrin disrupts sodium channels (IRAC Group 3A). Together they provide contact, stomach, and knockdown action against chewing and sucking pests.'
    },
    {
      question: 'Is ECLIPSE effective against bollworms?',
      answer:
        'Yes. <strong>ECLIPSE</strong> provides strong contact and stomach activity against American bollworm, pink bollworm, and spotted bollworm when applied at early larval stage on cotton and chilli.',
      answerPlain:
        'Yes. ECLIPSE provides strong contact and stomach activity against American bollworm, pink bollworm, and spotted bollworm when applied at early larval stage on cotton and chilli.'
    },
    {
      question: 'Can ECLIPSE be used in cotton?',
      answer:
        'Yes. <strong>ECLIPSE</strong> is widely used on cotton for bollworms, jassids, aphids, and whiteflies when applied at square and boll stages with 25 ml per pump.',
      answerPlain:
        'Yes. ECLIPSE is widely used on cotton for bollworms, jassids, aphids, and whiteflies when applied at square and boll stages with 25 ml per pump.'
    },
    {
      question: 'Can ECLIPSE control thrips?',
      answer:
        'Yes. <strong>ECLIPSE</strong> controls thrips on chilli, cotton, and vegetables when sprayed with good coverage of leaf undersides and flowers where these pests feed.',
      answerPlain:
        'Yes. ECLIPSE controls thrips on chilli, cotton, and vegetables when sprayed with good coverage of leaf undersides and flowers where these pests feed.'
    },
    {
      question: 'What is the best spray timing for ECLIPSE?',
      answer:
        'Spray at <strong>early pest infestation</strong> or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and knockdown effect.',
      answerPlain:
        'Spray at early pest infestation or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage and knockdown effect.'
    },
    {
      question: 'What are the benefits of dual-action insecticides?',
      answer:
        'Dual-action products like <strong>ECLIPSE</strong> combine two modes of action in one spray, controlling mixed pest complexes, delivering faster knockdown, and supporting resistance management.',
      answerPlain:
        'Dual-action products like ECLIPSE combine two modes of action in one spray, controlling mixed pest complexes, delivering faster knockdown, and supporting resistance management.'
    },
    {
      question: 'Is ETHION + CYPERMETHRIN systemic?',
      answer:
        'No. <strong>ECLIPSE</strong> acts primarily through <strong>contact and stomach action</strong>. Ethion and Cypermethrin do not translocate systemically within plant tissue but provide strong surface and ingestion toxicity.',
      answerPlain:
        'No. ECLIPSE acts primarily through contact and stomach action. Ethion and Cypermethrin do not translocate systemically within plant tissue but provide strong surface and ingestion toxicity.'
    },
    {
      question: 'How long does pest control last with ECLIPSE?',
      answer:
        'Field residual activity typically lasts <strong>7–14 days</strong> depending on pest pressure, crop stage, and weather. Re-scout and re-spray as per ETL and label guidance.',
      answerPlain:
        'Field residual activity typically lasts 7–14 days depending on pest pressure, crop stage, and weather. Re-scout and re-spray as per ETL and label guidance.'
    },
    {
      question: 'How do I mix ECLIPSE for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>25 ml of ECLIPSE</strong>, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 25 ml of ECLIPSE, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for ECLIPSE?',
      answer:
        '<strong>ECLIPSE</strong> is available in <strong>500 ml and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'ECLIPSE is available in 500 ml and 1 LTR packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is the shelf life of ECLIPSE?',
      answer:
        'When stored sealed in a cool, dry place, <strong>ECLIPSE</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, ECLIPSE has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'Is ECLIPSE compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'What precautions should I take when using ECLIPSE?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'Is ECLIPSE safe for crops?',
      answer:
        'Yes, when used at the recommended dose and timing, ECLIPSE is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, ECLIPSE is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'What is the technical name of ECLIPSE insecticide?',
      answer:
        'The technical composition is <strong>Ethion 40% + Cypermethrin 5% EC</strong>. ECLIPSE is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is Ethion 40% + Cypermethrin 5% EC. ECLIPSE is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'Is ECLIPSE a broad spectrum insecticide?',
      answer:
        'Yes. <strong>ECLIPSE</strong> is a <strong>broad-spectrum insecticide</strong> effective against both chewing pests (bollworms, caterpillars, borers) and sucking pests (thrips, aphids, whiteflies, jassids).',
      answerPlain:
        'Yes. ECLIPSE is a broad-spectrum insecticide effective against both chewing pests (bollworms, caterpillars, borers) and sucking pests (thrips, aphids, whiteflies, jassids).'
    },
    {
      question: 'Can Ethion Cypermethrin be used on chilli crops?',
      answer:
        'Yes. <strong>ECLIPSE</strong> is effective on chilli for thrips, aphids, fruit borers, and caterpillars when applied at the right crop stage with 25 ml per pump.',
      answerPlain:
        'Yes. ECLIPSE is effective on chilli for thrips, aphids, fruit borers, and caterpillars when applied at the right crop stage with 25 ml per pump.'
    },
    {
      question: 'Can Ethion Cypermethrin be used on vegetables?',
      answer:
        'Yes. <strong>ECLIPSE</strong> is used on tomato, brinjal, okra, cabbage, cauliflower, and other vegetables for mixed pest control at 25 ml per pump.',
      answerPlain:
        'Yes. ECLIPSE is used on tomato, brinjal, okra, cabbage, cauliflower, and other vegetables for mixed pest control at 25 ml per pump.'
    },
    {
      question: 'What is Ethion Cypermethrin dose per acre?',
      answer:
        'Field dose varies by crop and water volume. A common knapsack recommendation is <strong>25 ml per pump</strong> (15-litre sprayer). For acre-level rates, follow the printed label.',
      answerPlain:
        'Field dose varies by crop and water volume. A common knapsack recommendation is 25 ml per pump (15-litre sprayer). For acre-level rates, follow the printed label.'
    },
    {
      question: 'Is ECLIPSE effective against whiteflies and aphids?',
      answer:
        'Yes. <strong>ECLIPSE</strong> provides effective contact and knockdown action against whitefly and aphid populations on cotton, chilli, and vegetables when applied at economic threshold.',
      answerPlain:
        'Yes. ECLIPSE provides effective contact and knockdown action against whitefly and aphid populations on cotton, chilli, and vegetables when applied at economic threshold.'
    },
    {
      question: 'What is ECLIPSE Ethion Cypermethrin insecticide?',
      answer:
        '<strong>ECLIPSE</strong> is Harishree Crop Science\'s brand of <strong>Ethion 40% + Cypermethrin 5% EC</strong> — a premium dual-action organophosphate and pyrethroid insecticide for Indian agriculture.',
      answerPlain:
        'ECLIPSE is Harishree Crop Science\'s brand of Ethion 40% + Cypermethrin 5% EC — a premium dual-action organophosphate and pyrethroid insecticide for Indian agriculture.'
    },
    {
      question: 'How does ECLIPSE compare to single-ingredient insecticides?',
      answer:
        'Unlike single-action products, <strong>ECLIPSE</strong> combines Ethion and Cypermethrin for broader pest spectrum, faster knockdown, and better resistance management in one spray.',
      answerPlain:
        'Unlike single-action products, ECLIPSE combines Ethion and Cypermethrin for broader pest spectrum, faster knockdown, and better resistance management in one spray.'
    }
  ];

  testimonials = [
    { name: 'Ramesh', location: 'Gujarat', text: 'ECLIPSE gave excellent bollworm control in my cotton. Boll damage stopped within two days of spraying at square stage.', rating: 5 },
    { name: 'Suresh', location: 'Maharashtra', text: 'I used ECLIPSE on chilli for thrips and fruit borers. The dual action kept pods clean through the season.', rating: 5 },
    { name: 'Kiran', location: 'Karnataka', text: '25 ml per pump is easy to remember. ECLIPSE mixed smoothly and controlled whiteflies in tomato effectively.', rating: 5 },
    { name: 'Prakash', location: 'Andhra Pradesh', text: 'Bollworm pressure in my cotton dropped noticeably after one well-timed ECLIPSE spray.', rating: 4 },
    { name: 'Anil', location: 'Rajasthan', text: 'Harishree ECLIPSE is now my go-to for mixed pest outbreaks. Knockdown was faster than my old single-action spray.', rating: 5 },
    { name: 'Vijay', location: 'Tamil Nadu', text: 'Thrips in chilli reduced after ECLIPSE. Fruits were cleaner at market.', rating: 4 },
    { name: 'Hitesh', location: 'Gujarat', text: 'Good results on cotton bollworms and jassids. I rotate ECLIPSE with other MOAs for resistance management.', rating: 5 },
    { name: 'Mahesh', location: 'Madhya Pradesh', text: 'The EC formulation spreads well. ECLIPSE controlled caterpillars in my brinjal field effectively.', rating: 5 },
    { name: 'Dinesh', location: 'Gujarat', text: 'Dealer recommended ECLIPSE for cotton whitefly. Visible improvement in leaf health after spraying.', rating: 4 },
    { name: 'Bhavesh', location: 'Gujarat', text: 'Reliable dual-action pest control across seasons. ECLIPSE has become a fixed part of my crop protection program.', rating: 5 },
    { name: 'Sanjay', location: 'Punjab', text: 'Used ECLIPSE on okra for jassids and fruit borers. Quick action and good crop safety at 25 ml per pump.', rating: 5 },
    { name: 'Ravi', location: 'Telangana', text: 'American bollworm in cotton was controlled well with ECLIPSE. Will buy again next season.', rating: 4 }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '124',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure ECLIPSE', text: 'Accurately measure 25 ml of Ethion 40% + Cypermethrin 5% EC (ECLIPSE) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 25 ml into the water. The EC formulation disperses easily into a uniform emulsion.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage in calm weather, covering leaf undersides where whiteflies, thrips, and bollworm larvae feed.' },
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
      productImageAlt: 'ECLIPSE ETHION 40% + CYPERMETHRIN 5% EC Insecticide',
      productImageCaption: 'ECLIPSE Ethion 40% + Cypermethrin 5% EC insecticide pack by Harishree Crop Science',
      description:
        'ECLIPSE (Ethion 40% + Cypermethrin 5% EC) by Harishree Crop Science is a premium dual-action organophosphate and pyrethroid insecticide for bollworms, thrips, aphids, whiteflies, and caterpillars in cotton, chilli, and vegetables. Dose: 25 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'ECLIPSE-ETHION-40-CYPERMETHRIN-5-EC',
      mpn: 'ECLIPSE-ETHION-40-CYPERMETHRIN-5-EC',
      dose: '25 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply ECLIPSE (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of ECLIPSE (Ethion 40% + Cypermethrin 5% EC) for foliar application at 25 ml/pump.',
      alternateNames: [
        'ECLIPSE',
        'ECLIPSE Insecticide',
        'ECLIPSE Ethion Cypermethrin',
        'Ethion 40 Cypermethrin 5 EC',
        'Ethion Cypermethrin Insecticide',
        'Ethion 40% + Cypermethrin 5% EC Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `ECLIPSE (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout']
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Ethion 40% + Cypermethrin 5% EC (ECLIPSE) dual-action insecticide by Harishree. Controls bollworms, thrips & whiteflies. Dose: 25 ml/pump.';

    this.seo.setAll(
      {
        title: 'Ethion 40% + Cypermethrin 5% EC | ECLIPSE',
        description: desc,
        keywords:
          'Ethion 40% + Cypermethrin 5% EC, ECLIPSE, Ethion 40 Cypermethrin 5 EC, Ethion Cypermethrin Insecticide, Ethion 40% + Cypermethrin 5% EC Insecticide, Ethion Cypermethrin Uses, Ethion Cypermethrin Dose, Ethion Cypermethrin Dose Per Pump, Ethion Cypermethrin for Cotton, Ethion Cypermethrin for Chilli, Ethion Cypermethrin for Vegetables, Ethion Cypermethrin for Bollworm, Ethion Cypermethrin for Thrips, Ethion Cypermethrin for Whiteflies, Ethion Cypermethrin for Aphids, Dual Action Insecticide, Broad Spectrum Insecticide, Contact and Stomach Action Insecticide, Organophosphate and Pyrethroid Insecticide, Cotton Pest Control Insecticide, Agricultural Insecticide, Crop Protection Solution, ECLIPSE Insecticide, ECLIPSE Ethion Cypermethrin, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Ethion 40% + Cypermethrin 5% EC (ECLIPSE) | Harishree',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Ethion 40% + Cypermethrin 5% EC | ECLIPSE',
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
