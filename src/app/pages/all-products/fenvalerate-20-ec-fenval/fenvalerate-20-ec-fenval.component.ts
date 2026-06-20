import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'FENVAL_FENVALERATE_20_EC';
const INDICATIVE_LIST_PRICE_INR = 207;

@Component({
  selector: 'app-fenvalerate-20-ec-fenval',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fenvalerate-20-ec-fenval.component.html',
  styleUrl: './fenvalerate-20-ec-fenval.component.scss'
})
export class Fenvalerate20EcFenvalComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/fenvalerate-20-ec-fenval';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/fenvalerate-20-ec.png';
  readonly productImageWebpPath = 'assets/products/insecticide/fenvalerate-20-ec.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Fenvalerate 20% EC';
  brandName = 'FENVAL';

  featuredSnippetAnswer =
    'Fenvalerate 20% EC (FENVAL) is a premium synthetic pyrethroid insecticide by Harishree Crop Science with strong contact and stomach action for controlling bollworms, caterpillars, fruit borers, shoot borers, pod borers, and leaf-eating chewing pests on cotton, chilli, brinjal, tomato, okra, pulses, oilseed crops, and vegetables. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 53, featured: false, sku: 'FENVAL-100ML' },
    { volume: '250 ml', price: 112, featured: false, sku: 'FENVAL-250ML' },
    { volume: '500 ml', price: 207, featured: true, sku: 'FENVAL-500ML' },
    { volume: '1 LTR', price: 389, featured: false, sku: 'FENVAL-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Fast knockdown action',
      description:
        'FENVAL delivers rapid pest paralysis through sodium channel modulation — chewing pests stop feeding quickly when sprayed at early infestation with good canopy coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Contact and stomach action',
      description:
        'This non-systemic synthetic pyrethroid insecticide works on contact and through ingestion, reaching caterpillars, borers, and bollworms on leaf surfaces and undersides.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Broad spectrum control',
      description:
        'Controls bollworms, caterpillars, fruit borers, shoot borers, pod borers, and leaf-eating defoliators across cotton, chilli, vegetables, pulses, and oilseed crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual protection',
      description:
        'The EC formulation adheres well to foliage and provides dependable residual field persistence between spray intervals, reducing pest resurgence.',
      icon: 'fas fa-clock'
    }
  ];

  keyBenefits = [
    {
      title: 'Fast knockdown action',
      description:
        'Fenvalerate disrupts nerve function in insect pests, causing rapid paralysis and visible cessation of feeding damage within hours of a well-timed FENVAL spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad spectrum control',
      description:
        'FENVAL manages multiple chewing pest species — bollworms, caterpillars, borers, and leaf feeders — in a single broad spectrum insecticide application.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Effective against bollworms',
      description:
        'American, spotted, and pink bollworm larvae in cotton are controlled when FENVAL is applied at economic threshold during square, flowering, and boll stages.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Caterpillar management',
      description:
        'Tobacco caterpillar, Spodoptera, and leaf-eating caterpillars on chilli and vegetables are suppressed through contact and stomach poison insecticide activity.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Fruit borer control',
      description:
        'Shoot and fruit borers in tomato, brinjal, and chilli are managed when FENVAL is sprayed early with emphasis on fruits, shoots, and leaf undersides.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Pod borer protection',
      description:
        'Pod borers in pulses and oilseed crops are controlled before larval entry into developing pods, supporting better grain fill and harvest quality.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Long residual activity',
      description:
        'The emulsifiable concentrate deposit maintains contact insecticide activity on treated foliage, extending crop protection between scheduled sprays.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Better crop protection',
      description:
        'Used at the recommended 30 ml per pump dose, FENVAL supports cleaner foliage, reduced borer holes, and healthier plant growth through critical crop windows.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Improved yield potential',
      description:
        'By controlling key chewing pests during flowering and fruit set, growers protect squares, bolls, fruits, and pods for improved marketable yield.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Easy application',
      description:
        'Clear 30 ml per pump dosing, smooth EC mixing, and straightforward knapsack application make FENVAL convenient for field use across Indian farming systems.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Cost effective pest management',
      description:
        'Competitive pack pricing from 100 ml to 1 litre makes FENVAL an economical contact insecticide solution for bollworm and caterpillar control programs.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Proven field performance',
      description:
        'Fenvalerate is a trusted synthetic pyrethroid active used widely across India for cotton bollworm and mixed chewing pest complexes in vegetables.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Suitable for IPM programs',
      description:
        'Distinct pyrethroid chemistry makes FENVAL a valuable rotation partner alongside IGRs, organophosphates, and other MOA classes in integrated pest management.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Excellent crop protection',
      description:
        'Full canopy spray coverage with FENVAL protects cotton, chilli, brinjal, tomato, okra, and pulse crops from defoliation and borer damage.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures FENVAL with strict quality control for uniform EC dispersion, dependable spray stability, and consistent field results.',
      icon: 'fas fa-certificate'
    }
  ];

  whyChoose = [
    {
      title: 'Economical solution',
      description:
        'FENVAL offers competitive pricing across 100 ml to 1 litre packs, delivering strong bollworm and caterpillar control at an affordable cost per acre.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Broad-spectrum activity',
      description:
        'One product addresses bollworms, caterpillars, borers, and leaf-eating pests in cotton, chilli, vegetables, pulses, and oilseed crops.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Easy tank mixing',
      description:
        'The EC formulation disperses easily in water for uniform emulsion — perform a jar test before combining with fungicides or other insecticides.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Quick visible results',
      description:
        'Farmers see rapid knockdown of active feeders when FENVAL is applied at early infestation with thorough leaf surface and underside coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured with batch-to-batch consistency, dealer support, and farmer-focused guidance that growers rely on season after season.',
      icon: 'fas fa-award'
    }
  ];

  targetPests = [
    {
      name: 'American Bollworm',
      description:
        'Controls Helicoverpa armigera larvae in cotton squares and bolls through contact and stomach action when sprayed at early infestation with full canopy coverage.'
    },
    {
      name: 'Spotted Bollworm',
      description:
        'Effective against spotted bollworm species that attack cotton bolls and squares, causing feeding scars and yield loss during peak boll development.'
    },
    {
      name: 'Pink Bollworm',
      description:
        'Provides activity against pink bollworm larvae that bore into cotton bolls, protecting fibre quality and boll weight when applied at economic threshold.'
    },
    {
      name: 'Tobacco Caterpillar',
      description:
        'Manages tobacco caterpillar and allied defoliating species that strip foliage and weaken plant vigour in chilli and vegetable crops.'
    },
    {
      name: 'Leaf Eating Caterpillars',
      description:
        'Knocks down defoliating caterpillars and loopers that reduce photosynthetic leaf area when applied at economic threshold with thorough spray coverage.'
    },
    {
      name: 'Fruit Borers',
      description:
        'Controls shoot and fruit borer larvae in tomato, brinjal, and chilli that tunnel into tender fruits and cause premature drop or unmarketable produce.'
    },
    {
      name: 'Shoot Borers',
      description:
        'Manages shoot borer larvae that damage growing tips and stems in brinjal, chilli, and vegetable crops during vegetative and flowering stages.'
    },
    {
      name: 'Pod Borers',
      description:
        'Controls pod borers in pulses and soybean that attack developing pods, causing shriveled grains and yield loss before larval entry.'
    },
    {
      name: 'Spodoptera',
      description:
        'Effective against Spodoptera litura and allied armyworm species causing heavy defoliation in chilli, cotton, and mixed vegetable fields.'
    },
    {
      name: 'Leaf Feeders & Defoliators',
      description:
        'Broad activity against leaf feeders and defoliators that strip crop canopy, reducing plant vigour and harvest potential across labeled crops.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Leading synthetic pyrethroid choice for American, spotted, and pink bollworm management during square, flowering, and boll stages with fast knockdown.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects chilli pods and foliage from fruit borers, Spodoptera, tobacco caterpillar, and leaf-eating pests during vegetative and fruit-set windows.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Brinjal',
      description:
        'Manages shoot and fruit borer larvae that bore into tender brinjal fruits during flowering and continuous harvest cycles.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Tomato',
      description:
        'Controls fruit borers and caterpillars that damage flowers and fruits, supporting cleaner harvest grade and reduced fruit drop.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Okra',
      description:
        'Defends okra pods and leaves from caterpillar and borer feeding damage during pod formation and harvest cycles.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Pulses',
      description:
        'Supports pod borer and Helicoverpa management in gram, pigeon pea, and other pulse crops at critical pod-setting stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Oilseed Crops',
      description:
        'Controls pod borers and defoliating caterpillars in soybean, groundnut, and other oilseed crops during pod initiation and fill.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Vegetable Crops',
      description:
        'Broad fit across brinjal, okra, beans, cabbage, and mixed vegetable crops facing caterpillar and borer pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'American, spotted, pink bollworm', dose: '30 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Fruit borer, Spodoptera, caterpillars', dose: '30 ml/pump', timing: 'Early larval stage at fruit set' },
    { crop: 'Brinjal', pests: 'Shoot and fruit borer', dose: '30 ml/pump', timing: 'Early larval colonization on shoots and fruits' },
    { crop: 'Tomato', pests: 'Fruit borer, leaf-eating caterpillars', dose: '30 ml/pump', timing: 'First sign of borer damage on fruits' },
    { crop: 'Okra', pests: 'Fruit borer, caterpillars', dose: '30 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Pulses', pests: 'Pod borer, Helicoverpa', dose: '30 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Soybean', pests: 'Pod borer, defoliators', dose: '30 ml/pump', timing: 'Pod initiation to pod fill' },
    { crop: 'Groundnut', pests: 'Leaf caterpillars, pod borers', dose: '30 ml/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Vegetables', pests: 'Mixed borers and caterpillars', dose: '30 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'American Bollworm', crops: 'Cotton, pulses', mode: 'Contact + stomach — sodium channel', efficacy: 'High at early larval stage' },
    { pest: 'Spotted Bollworm', crops: 'Cotton', mode: 'Contact + stomach action', efficacy: 'High with full coverage' },
    { pest: 'Pink Bollworm', crops: 'Cotton', mode: 'Contact + stomach action', efficacy: 'High at early infestation' },
    { pest: 'Fruit Borer', crops: 'Tomato, chilli, brinjal', mode: 'Contact + stomach poison', efficacy: 'High at early larval stage' },
    { pest: 'Pod Borer', crops: 'Pulses, soybean', mode: 'Contact + stomach action', efficacy: 'High before pod entry' },
    { pest: 'Spodoptera', crops: 'Chilli, vegetables, cotton', mode: 'Pyrethroid knockdown', efficacy: 'High with underside coverage' },
    { pest: 'Tobacco Caterpillar', crops: 'Chilli, vegetables', mode: 'Contact + ingestion', efficacy: 'High on active feeders' },
    { pest: 'Leaf Eating Caterpillar', crops: 'Vegetables, cotton', mode: 'Contact insecticide', efficacy: 'High with timely spray' },
    { pest: 'Shoot Borer', crops: 'Brinjal, chilli', mode: 'Contact + stomach action', efficacy: 'Moderate to high at early stage' },
    { pest: 'Defoliators', crops: 'Vegetables, oilseeds', mode: 'Broad spectrum pyrethroid', efficacy: 'High with full canopy spray' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', fenval: 'Synthetic pyrethroid — contact + stomach action', traditional: 'Older single-MOA sprays with declining efficacy' },
    { feature: 'Knockdown speed', fenval: 'Fast paralysis of active feeders within hours', traditional: 'Slower or inconsistent knockdown on large larvae' },
    { feature: 'Chewing pest spectrum', fenval: 'Bollworms, caterpillars, borers, defoliators', traditional: 'Often limited to one pest group per product' },
    { feature: 'Residual protection', fenval: 'EC deposit maintains field persistence', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', fenval: '30 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', fenval: 'Competitive pricing from 100 ml to 1 litre', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonPyrethroidContact = [
    { feature: 'Active chemistry', fenval: 'Fenvalerate 20% EC — Type-II pyrethroid', contact: 'Generic pyrethroid or organophosphate mixes' },
    { feature: 'Knockdown mechanism', fenval: 'Sodium channel modulation — rapid paralysis', contact: 'Varies by active ingredient and formulation' },
    { feature: 'Stomach action', fenval: 'Strong ingestion route for chewing pests', contact: 'Primarily contact-only on many alternatives' },
    { feature: 'EC formulation quality', fenval: 'Harishree EC — uniform dispersion and spread', contact: 'Formulation quality varies by brand' },
    { feature: 'Bollworm efficacy', fenval: 'Proven on cotton bollworm complex', contact: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', fenval: '30 ml/pump — straightforward dosing', contact: 'Dose calculations vary by product' }
  ];

  comparisonPyrethroidTraditional = [
    { feature: 'Active chemistry', fenval: 'Fenvalerate 20% EC — modern pyrethroid', traditional: 'Older organophosphates for caterpillars' },
    { feature: 'Mode of action', fenval: 'Contact + stomach — nerve channel disruption', traditional: 'Primarily acetylcholinesterase inhibition' },
    { feature: 'Knockdown speed', fenval: 'Rapid visible pest drop after spray', traditional: 'Effective but often slower visual response' },
    { feature: 'Residual activity', fenval: 'Good EC deposit persistence on foliage', traditional: 'Shorter field life on some OP products' },
    { feature: 'IPM rotation value', fenval: 'Distinct MOA for pyrethroid rotation slot', traditional: 'OP resistance common after repeated use' },
    { feature: 'Application convenience', fenval: 'EC — easy mixing at 30 ml/pump', traditional: 'Varies; some need complex tank mixes' }
  ];

  comparisonEcFormulation = [
    { feature: 'Tank mixing', fenval: 'EC disperses easily in water for uniform emulsion', other: 'WP/SC may require more agitation or settle in tank' },
    { feature: 'Spray uniformity', fenval: 'Fine droplet spread across leaf surfaces', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', fenval: '30 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', fenval: 'Stable EC liquid in sealed original container', other: 'Stability varies; some need special storage' },
    { feature: 'Coverage on dense canopy', fenval: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', fenval: 'Standard liquid pack — easy transport and measure', other: 'Bulk or powder forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'FENVAL' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Synthetic Pyrethroid)' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Fenvalerate 20% EC' },
      { label: 'Chemical group', value: 'Type-II Pyrethroid — IRAC Group 3A' },
      { label: 'Mode of action', value: 'Contact + stomach action; sodium channel modulator' },
      { label: 'Action type', value: 'Non-systemic contact and stomach poison insecticide' },
      {
        label: 'Target pests',
        value: 'Bollworms, caterpillars, fruit borers, shoot borers, pod borers, Spodoptera, leaf feeders, defoliators'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, brinjal, tomato, okra, pulses, oilseed crops, vegetables'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 100 ml, 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early larval infestation or as per ETL/label' },
      { label: 'Coverage', value: 'Spray both leaf surfaces and undersides where pests feed' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'FENVAL' },
    { label: 'Brand / Trade Name', value: 'FENVAL' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Fenvalerate 20% EC' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Chemical Group', value: 'Type-II Pyrethroid — IRAC Group 3A' },
    { label: 'Mode of Action', value: 'Contact + stomach action; disrupts sodium channels in nerve tissue' },
    { label: 'Action Type', value: 'Non-systemic contact and stomach poison insecticide' },
    {
      label: 'Target Pests',
      value: 'American bollworm, spotted bollworm, pink bollworm, tobacco caterpillar, leaf-eating caterpillars, fruit borers, shoot borers, pod borers, Spodoptera, leaf feeders, defoliators'
    },
    { label: 'Target Crops', value: 'Cotton, chilli, brinjal, tomato, okra, pulses, oilseed crops, vegetables' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early larval infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spray drift; keep away from children; follow label instructions' },
    { label: 'Pesticide Type', value: 'Insecticide (Synthetic Pyrethroid)' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (100 ml, 250 ml, 500 ml, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'EC deposit on foliage',
      description:
        'On application, FENVAL forms an even emulsifiable concentrate film on leaf surfaces. Chewing pests ingest or contact treated foliage during feeding, absorbing Fenvalerate through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid paralysis',
      description:
        'Fenvalerate acts on contact, disrupting sodium channels in insect nerve tissue. Pests exposed to the spray deposit experience rapid paralysis and immediate cessation of feeding damage.'
    },
    {
      title: 'Stomach action — chewing pest control',
      description:
        'When caterpillars, borers, and bollworms ingest treated plant tissue, Fenvalerate delivers strong stomach poison insecticide activity — effective control of hidden feeders on leaf undersides.'
    },
    {
      title: 'Sodium channel modulation',
      description:
        'As a Type-II synthetic pyrethroid, Fenvalerate prolongs sodium channel opening in nerve axons, causing uncontrolled nerve firing, knockdown, and death of target chewing pests.'
    },
    {
      title: 'Residual field protection',
      description:
        'The EC formulation adheres to foliage and maintains contact insecticide activity on treated surfaces, protecting crops from pest resurgence between scheduled spray intervals.'
    },
    {
      title: 'Crop protection benefits',
      description:
        'Reduced borer and caterpillar feeding preserves leaf integrity, fruit quality, and plant vigour — supporting healthier cotton, chilli, tomato, and vegetable crops through harvest.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 30 ml dose',
      text: 'Measure exactly 30 ml per pump to maintain efficacy, protect crops, and slow resistance development in bollworm and caterpillar populations.'
    },
    {
      title: 'Avoid spray drift',
      text: 'Apply in calm weather, avoid spraying near water bodies, and keep children, animals, and beehives away from the application zone.'
    },
    {
      title: 'Safe storage',
      text: 'Store upright in original container in a cool, dry, locked place away from direct sunlight, food, feed, seed, and children.'
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
      label: 'Rapid pest knockdown',
      value: 'Growers report visible decline in caterpillar and bollworm feeding within hours of a well-timed FENVAL spray at early larval stage.'
    },
    {
      label: 'Cleaner fruits and bolls',
      value: 'Fewer borer holes and feeding scars improve marketable grade in chilli, tomato, brinjal, and cotton crops at harvest.'
    },
    {
      label: 'Healthier canopy',
      value: 'Protected leaves maintain photosynthetic capacity, supporting stronger vegetative and reproductive growth in treated crops.'
    },
    {
      label: 'Extended residual cover',
      value: 'EC deposit on foliage helps suppress newly active chewing pests between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely bollworm and caterpillar control on cotton, chilli, and vegetables helps preserve boll weight, pod fill, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'RUNNER (Novaluron 10% EC)',
      description: 'IGR insecticide for fruit borers, pod borers, bollworms, and caterpillars with chitin synthesis inhibition.',
      route: '/products/insecticide/novaluron-10-ec-runner',
      image: 'assets/products/insecticide/novaluron-10-ec.png',
      imageAlt: 'RUNNER Novaluron 10% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA PROFEX (Profenofos 50% EC)',
      description: 'Broad-spectrum organophosphate for bollworms, whiteflies, aphids, thrips, and caterpillars in cotton and vegetables.',
      route: '/products/insecticide/profenofos-50-ec',
      image: 'assets/products/insecticide/profenofos-50-ec.jpg',
      imageAlt: 'EXTRA PROFEX Profenofos 50% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'TURBO (Novaluron + Indoxacarb SC)',
      description: 'Dual-action IGR and oxadiazine insecticide for caterpillar and borer control with knockdown plus moult disruption.',
      route: '/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'TURBO Novaluron Indoxacarb SC insecticide by Harishree Crop Science'
    },
    {
      name: 'H-CYPER 25 (Cypermethrin 25% EC)',
      description: 'Synthetic pyrethroid insecticide for bollworms, caterpillars, and chewing pests in cotton and vegetables.',
      route: '/product/cypermethrin-25-ec',
      image: 'assets/products/insecticide/cypermethrin-25-ec.jpg',
      imageAlt: 'H-CYPER 25 Cypermethrin 25% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'DR. DELTA (Deltamethrin 2.8% EC)',
      description: 'Pyrethroid insecticide for bollworms, caterpillars, and leaf-eating pests with fast knockdown action.',
      route: '/product/deltamethrin-2-8-ec',
      image: 'assets/products/insecticide/deltamethrin-11-w-w-ec.png',
      imageAlt: 'DR. DELTA Deltamethrin 2.8% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'PRO-5G (Emamectin + Fipronil SC)',
      description: 'Dual-action insecticide for bollworms, fruit borers, thrips, and mixed pest complexes in cotton and vegetables.',
      route: '/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g',
      image: 'assets/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc.jpg',
      imageAlt: 'PRO-5G Emamectin Fipronil SC insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Fenvalerate 20% EC?',
      answer:
        '<strong>Fenvalerate 20% EC</strong> is a synthetic pyrethroid insecticide formulated as an emulsifiable concentrate (EC). It delivers strong contact and stomach action against bollworms, caterpillars, borers, and leaf-eating chewing pests on cotton, chilli, vegetables, pulses, and oilseed crops.',
      answerPlain:
        'Fenvalerate 20% EC is a synthetic pyrethroid insecticide formulated as an emulsifiable concentrate (EC). It delivers strong contact and stomach action against bollworms, caterpillars, borers, and leaf-eating chewing pests on cotton, chilli, vegetables, pulses, and oilseed crops.'
    },
    {
      question: 'What is FENVAL insecticide?',
      answer:
        '<strong>FENVAL</strong> is Harishree Crop Science\'s brand of <strong>Fenvalerate 20% EC</strong> — a broad spectrum insecticide for bollworm control, caterpillar control, and fruit borer control in Indian field and vegetable crops. Recommended dose: 30 ml per pump.',
      answerPlain:
        'FENVAL is Harishree Crop Science\'s brand of Fenvalerate 20% EC — a broad spectrum insecticide for bollworm control, caterpillar control, and fruit borer control in Indian field and vegetable crops. Recommended dose: 30 ml per pump.'
    },
    {
      question: 'How does Fenvalerate work?',
      answer:
        'Fenvalerate is a Type-II synthetic pyrethroid that modulates sodium channels in insect nerve tissue. It works through <strong>contact action</strong> on exposed pests and <strong>stomach action</strong> when chewing insects ingest treated foliage, causing rapid paralysis and knockdown.',
      answerPlain:
        'Fenvalerate is a Type-II synthetic pyrethroid that modulates sodium channels in insect nerve tissue. It works through contact action on exposed pests and stomach action when chewing insects ingest treated foliage, causing rapid paralysis and knockdown.'
    },
    {
      question: 'What pests does FENVAL control?',
      answer:
        '<strong>FENVAL</strong> controls American, spotted, and pink bollworms, tobacco caterpillar, leaf-eating caterpillars, fruit borers, shoot borers, pod borers, Spodoptera, and leaf feeders when applied at early larval stages with thorough coverage.',
      answerPlain:
        'FENVAL controls American, spotted, and pink bollworms, tobacco caterpillar, leaf-eating caterpillars, fruit borers, shoot borers, pod borers, Spodoptera, and leaf feeders when applied at early larval stages with thorough coverage.'
    },
    {
      question: 'What is the dose of FENVAL?',
      answer:
        'The standard recommended dose of <strong>FENVAL</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of FENVAL is 30 ml per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Can FENVAL be used in cotton and vegetables?',
      answer:
        'Yes. <strong>FENVAL</strong> is widely used on <strong>cotton</strong> for bollworm control and on <strong>vegetables</strong> including brinjal, tomato, okra, and chilli for caterpillar and borer management at 30 ml per pump.',
      answerPlain:
        'Yes. FENVAL is widely used on cotton for bollworm control and on vegetables including brinjal, tomato, okra, and chilli for caterpillar and borer management at 30 ml per pump.'
    },
    {
      question: 'Is Fenvalerate systemic? How quickly does it work?',
      answer:
        'No, Fenvalerate is <strong>not systemic</strong> — it is a contact and stomach poison insecticide. FENVAL delivers <strong>fast knockdown</strong>; chewing pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.',
      answerPlain:
        'No, Fenvalerate is not systemic — it is a contact and stomach poison insecticide. FENVAL delivers fast knockdown; chewing pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.'
    },
    {
      question: 'Why choose FENVAL from Harishree Crop Science?',
      answer:
        '<strong>Harishree Crop Science</strong> manufactures <strong>FENVAL</strong> with strict quality control, reliable EC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Fenvalerate 20% EC insecticide at best price.',
      answerPlain:
        'Harishree Crop Science manufactures FENVAL with strict quality control, reliable EC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Fenvalerate 20% EC insecticide at best price.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh Patel',
      location: 'Gujarat',
      text: 'FENVAL gave excellent bollworm control in my cotton field. Pests stopped feeding within a day and bolls looked much cleaner at harvest.',
      rating: 5
    },
    {
      name: 'Suresh Reddy',
      location: 'Andhra Pradesh',
      text: 'I used FENVAL on chilli for fruit borers and caterpillars. The knockdown was fast and the crop stayed clean through the season.',
      rating: 5
    },
    {
      name: 'Kiran Desai',
      location: 'Maharashtra',
      text: '30 ml per pump is easy to remember. FENVAL mixed smoothly and controlled caterpillars in my brinjal and tomato fields effectively.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '86',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Measure FENVAL', text: 'Accurately measure 30 ml of Fenvalerate 20% EC (FENVAL) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 30 ml into the water. The EC formulation emulsifies easily into a uniform spray mix. Top up and agitate.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on leaf undersides where pests feed.' },
    { name: 'Cover both leaf surfaces', text: 'Ensure full canopy coverage on cotton, chilli, and vegetable crops — contact insecticide efficacy depends on thorough spray deposit.' },
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
      productImageAlt: 'FENVAL Fenvalerate 20% EC Insecticide',
      productImageCaption: 'FENVAL Fenvalerate 20% EC insecticide pack by Harishree Crop Science',
      description:
        'FENVAL (Fenvalerate 20% EC) by Harishree Crop Science is a premium synthetic pyrethroid insecticide for bollworms, caterpillars, borers, and chewing pests on cotton, chilli, and vegetables. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'FENVAL-FENVALERATE-20-EC',
      mpn: 'FENVAL-FENVALERATE-20-EC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply FENVAL (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of FENVAL (Fenvalerate 20% EC) for foliar application at 30 ml/pump.',
      alternateNames: [
        'FENVAL',
        'FENVAL Insecticide',
        'FENVAL Fenvalerate 20 EC',
        'Fenvalerate 20 EC',
        'Fenvalerate Insecticide',
        'Fenvalerate 20% EC Insecticide',
        'Best Fenvalerate 20 EC'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `FENVAL (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Fenvalerate 20% EC (FENVAL) — broad spectrum insecticide for caterpillar & bollworm control. Best price. Harishree Crop Science. Dose: 30 ml/pump.';

    this.seo.setAll(
      {
        title: 'Fenvalerate 20% EC | FENVAL | Buy Online Best Price',
        description: desc,
        keywords:
          'Fenvalerate 20% EC, FENVAL, Fenvalerate 20 EC, Fenvalerate Insecticide, Best Fenvalerate 20 EC, Fenvalerate 20 EC Price, Fenvalerate 20 EC Uses, FENVAL Insecticide, Fenvalerate Insecticide for Cotton, Fenvalerate Insecticide for Vegetables, Bollworm Control Insecticide, Caterpillar Control Insecticide, Leaf Eating Pest Control, Synthetic Pyrethroid Insecticide, Contact Insecticide for Crops, Stomach Poison Insecticide, Best Insecticide for Chewing Pests, Cotton Bollworm Insecticide, Insecticide for Fruit Borers, Insecticide for Pod Borers, Broad Spectrum Insecticide, Pest Management, Crop Protection, Agricultural Insecticide, Crop Yield Improvement, Pest Control Solution, Insect Attack Prevention, Field Crop Protection, Fenvalerate Dose Per Pump, FENVAL Fenvalerate 20 EC, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Fenvalerate 20% EC (FENVAL) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Fenvalerate 20% EC | FENVAL Insecticide',
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
