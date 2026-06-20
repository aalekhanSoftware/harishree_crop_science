import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'DELTA_PLUS_DELTAMETHRIN_11_EC';
const INDICATIVE_LIST_PRICE_INR = 543;

@Component({
  selector: 'app-deltamethrin-11-w-w-ec-delta-plus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deltamethrin-11-w-w-ec-delta-plus.component.html',
  styleUrl: './deltamethrin-11-w-w-ec-delta-plus.component.scss'
})
export class Deltamethrin11WwEcDeltaPlusComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/deltamethrin-11-w-w-ec-delta-plus';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/deltamethrin-11-w-w-ec.png';
  readonly productImageWebpPath = 'assets/products/insecticide/deltamethrin-11-w-w-ec.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Deltamethrin 11% w/w EC';
  brandName = 'DELTA PLUS';

  featuredSnippetAnswer =
    'Deltamethrin 11% w/w EC (DELTA PLUS) is a highly effective synthetic pyrethroid insecticide by Harishree Crop Science with strong contact and stomach action for controlling bollworms, fruit borers, stem borers, leaf-eating caterpillars, thrips, aphids, and various chewing and sucking pests on cotton, chilli, tomato, brinjal, okra, paddy, pulses, oilseed crops, and vegetables. Recommended dose: 10 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 118, featured: false, sku: 'DELTA-PLUS-100ML' },
    { volume: '250 ml', price: 283, featured: false, sku: 'DELTA-PLUS-250ML' },
    { volume: '500 ml', price: 543, featured: true, sku: 'DELTA-PLUS-500ML' },
    { volume: '1 LTR', price: 1062, featured: false, sku: 'DELTA-PLUS-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Fast knockdown effect',
      description:
        'DELTA PLUS delivers rapid pest paralysis through sodium channel disruption — bollworms, caterpillars, thrips, and aphids stop feeding quickly when sprayed at early infestation with good canopy coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Contact and stomach action',
      description:
        'This non-systemic synthetic pyrethroid insecticide works on contact and through ingestion, reaching hidden caterpillars, borers, thrips, and aphids on leaf surfaces and undersides.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Broad spectrum control',
      description:
        'Controls bollworms, fruit borers, stem borers, caterpillars, thrips, aphids, and leaf-eating pests across cotton, chilli, vegetables, paddy, pulses, and oilseed crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual activity',
      description:
        'The EC formulation adheres well to foliage and provides dependable residual field persistence between spray intervals, reducing pest resurgence.',
      icon: 'fas fa-clock'
    }
  ];

  keyBenefits = [
    {
      title: 'Fast knockdown effect',
      description:
        'Deltamethrin disrupts nerve function in insect pests, causing rapid paralysis and visible cessation of feeding damage within hours of a well-timed DELTA PLUS spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad spectrum control',
      description:
        'DELTA PLUS manages multiple chewing and sucking pest species — bollworms, borers, caterpillars, thrips, and aphids — in a single broad spectrum insecticide application.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Bollworm management',
      description:
        'American, spotted, and pink bollworm larvae in cotton are controlled when DELTA PLUS is applied at economic threshold during square, flowering, and boll stages.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Fruit borer control',
      description:
        'Shoot and fruit borers in tomato, brinjal, and chilli are managed when DELTA PLUS is sprayed early with emphasis on fruits, shoots, and leaf undersides.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Stem borer control',
      description:
        'Stem borer larvae that damage growing tips and stems in brinjal, chilli, and vegetable crops are suppressed through contact and stomach poison insecticide activity.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Caterpillar suppression',
      description:
        'Tobacco caterpillar, Spodoptera, and leaf-eating caterpillars on chilli and vegetables are knocked down through contact and stomach action on treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Thrips control',
      description:
        'Thrips that scar chilli pods, cotton squares, and vegetable foliage are managed when DELTA PLUS is applied with thorough spray coverage at early infestation.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Aphid management',
      description:
        'Aphid colonies on cotton, chilli, and vegetable crops are suppressed through contact insecticide activity when sprayed before heavy population buildup.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Long residual activity',
      description:
        'The emulsifiable concentrate deposit maintains contact insecticide activity on treated foliage, extending crop protection between scheduled sprays.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop protection',
      description:
        'Used at the recommended 10 ml per pump dose, DELTA PLUS supports cleaner foliage, reduced borer holes, and healthier plant growth through critical crop windows.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Better yield potential',
      description:
        'By controlling key chewing and sucking pests during flowering and fruit set, growers protect squares, bolls, fruits, and pods for improved marketable yield.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Cost effective pest management',
      description:
        'Competitive pack pricing from 100 ml to 1 litre makes DELTA PLUS an economical contact insecticide solution for bollworm, caterpillar, thrips, and aphid control programs.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Easy application',
      description:
        'Clear 10 ml per pump dosing, smooth EC mixing, and straightforward knapsack application make DELTA PLUS convenient for field use across Indian farming systems.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Proven field performance',
      description:
        'Deltamethrin is a trusted synthetic pyrethroid active used widely across India for cotton bollworm and mixed pest complexes in vegetables and field crops.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Suitable for IPM programs',
      description:
        'Distinct pyrethroid chemistry makes DELTA PLUS a valuable rotation partner alongside IGRs, organophosphates, and other MOA classes in integrated pest management.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Effective pest suppression',
      description:
        'Contact and stomach action delivers dependable suppression of active feeders, reducing crop damage and supporting cleaner harvest grade at market.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Reduced crop damage',
      description:
        'Timely DELTA PLUS application at economic threshold limits defoliation, fruit scarring, and boll damage from bollworms, borers, thrips, and caterpillars.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures DELTA PLUS with strict quality control for uniform EC dispersion, dependable spray stability, and consistent field results.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Excellent crop protection',
      description:
        'Full canopy spray coverage with DELTA PLUS protects cotton, chilli, brinjal, tomato, okra, paddy, and pulse crops from defoliation and borer damage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Consistent field performance',
      description:
        'Growers across India rely on DELTA PLUS for quick visible results, broad-spectrum effectiveness, and dependable pest control season after season.',
      icon: 'fas fa-award'
    }
  ];

  whyChoose = [
    {
      title: 'Quick visible results',
      description:
        'Farmers see rapid knockdown of active feeders when DELTA PLUS is applied at early infestation with thorough leaf surface and underside coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad-spectrum effectiveness',
      description:
        'One product addresses bollworms, borers, caterpillars, thrips, and aphids in cotton, chilli, vegetables, paddy, pulses, and oilseed crops.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Economical pest control',
      description:
        'DELTA PLUS offers competitive pricing across 100 ml to 1 litre packs, delivering strong pest control at an affordable cost per acre with 10 ml per pump dosing.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Easy application',
      description:
        'The EC formulation disperses easily in water for uniform emulsion — perform a jar test before combining with fungicides or other insecticides.',
      icon: 'fas fa-tint'
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
      name: 'Fruit Borers',
      description:
        'Controls shoot and fruit borer larvae in tomato, brinjal, and chilli that tunnel into tender fruits and cause premature drop or unmarketable produce.'
    },
    {
      name: 'Stem Borers',
      description:
        'Manages stem borer larvae that damage growing tips and stems in brinjal, chilli, and vegetable crops during vegetative and flowering stages.'
    },
    {
      name: 'Leaf Eating Caterpillars',
      description:
        'Knocks down defoliating caterpillars and loopers that reduce photosynthetic leaf area when applied at economic threshold with thorough spray coverage.'
    },
    {
      name: 'Thrips',
      description:
        'Suppresses thrips that scar chilli pods, cotton squares, and vegetable foliage through contact insecticide activity on treated plant surfaces.'
    },
    {
      name: 'Aphids',
      description:
        'Controls aphid colonies on cotton, chilli, and vegetable crops when sprayed before heavy population buildup with full canopy coverage.'
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
        'Protects chilli pods and foliage from fruit borers, thrips, aphids, Spodoptera, and leaf-eating pests during vegetative and fruit-set windows.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Tomato',
      description:
        'Controls fruit borers and caterpillars that damage flowers and fruits, supporting cleaner harvest grade and reduced fruit drop.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Brinjal',
      description:
        'Manages shoot and fruit borer larvae and stem borers that bore into tender brinjal fruits during flowering and continuous harvest cycles.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Okra',
      description:
        'Defends okra pods and leaves from caterpillar, thrips, and borer feeding damage during pod formation and harvest cycles.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Paddy',
      description:
        'Supports stem borer and leaf folder management in rice when used as per label guidance with thorough foliar spray coverage.',
      icon: 'fas fa-water'
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
        'Broad fit across brinjal, okra, beans, cabbage, and mixed vegetable crops facing caterpillar, thrips, and borer pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'American, spotted, pink bollworm, thrips, aphids', dose: '10 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Fruit borer, thrips, aphids, caterpillars', dose: '10 ml/pump', timing: 'Early larval stage at fruit set' },
    { crop: 'Brinjal', pests: 'Shoot and fruit borer, stem borer', dose: '10 ml/pump', timing: 'Early larval colonization on shoots and fruits' },
    { crop: 'Tomato', pests: 'Fruit borer, leaf-eating caterpillars', dose: '10 ml/pump', timing: 'First sign of borer damage on fruits' },
    { crop: 'Okra', pests: 'Fruit borer, caterpillars, thrips', dose: '10 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Paddy', pests: 'Stem borer, leaf folder', dose: '10 ml/pump', timing: 'As per label and local advisory' },
    { crop: 'Pulses', pests: 'Pod borer, Helicoverpa', dose: '10 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Soybean', pests: 'Pod borer, defoliators', dose: '10 ml/pump', timing: 'Pod initiation to pod fill' },
    { crop: 'Vegetables', pests: 'Mixed borers, caterpillars, thrips', dose: '10 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'American Bollworm', crops: 'Cotton, pulses', mode: 'Contact + stomach — sodium channel', efficacy: 'High at early larval stage' },
    { pest: 'Spotted Bollworm', crops: 'Cotton', mode: 'Contact + stomach action', efficacy: 'High with full coverage' },
    { pest: 'Pink Bollworm', crops: 'Cotton', mode: 'Contact + stomach action', efficacy: 'High at early infestation' },
    { pest: 'Fruit Borer', crops: 'Tomato, chilli, brinjal', mode: 'Contact + stomach poison', efficacy: 'High at early larval stage' },
    { pest: 'Stem Borer', crops: 'Brinjal, chilli, paddy', mode: 'Contact + stomach action', efficacy: 'Moderate to high at early stage' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Contact insecticide', efficacy: 'High with thorough coverage' },
    { pest: 'Aphids', crops: 'Cotton, chilli, vegetables', mode: 'Contact insecticide', efficacy: 'High before heavy buildup' },
    { pest: 'Leaf Eating Caterpillar', crops: 'Vegetables, cotton', mode: 'Contact insecticide', efficacy: 'High with timely spray' },
    { pest: 'Spodoptera', crops: 'Chilli, vegetables, cotton', mode: 'Pyrethroid knockdown', efficacy: 'High with underside coverage' },
    { pest: 'Defoliators', crops: 'Vegetables, oilseeds', mode: 'Broad spectrum pyrethroid', efficacy: 'High with full canopy spray' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', deltaPlus: 'Synthetic pyrethroid — contact + stomach action', traditional: 'Older single-MOA sprays with declining efficacy' },
    { feature: 'Knockdown speed', deltaPlus: 'Fast paralysis of active feeders within hours', traditional: 'Slower or inconsistent knockdown on large larvae' },
    { feature: 'Pest spectrum', deltaPlus: 'Bollworms, borers, caterpillars, thrips, aphids', traditional: 'Often limited to one pest group per product' },
    { feature: 'Residual protection', deltaPlus: 'EC deposit maintains field persistence', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', deltaPlus: '10 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', deltaPlus: 'Competitive pricing from 100 ml to 1 litre', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonGeneric = [
    { feature: 'Active chemistry', deltaPlus: 'Deltamethrin 11% w/w EC — Type-II pyrethroid', generic: 'Generic deltamethrin or lower-concentration products' },
    { feature: 'Knockdown mechanism', deltaPlus: 'Sodium channel modulation — rapid paralysis', generic: 'Formulation quality varies by brand' },
    { feature: 'Stomach action', deltaPlus: 'Strong ingestion route for chewing pests', generic: 'May lack consistent stomach poison activity' },
    { feature: 'EC formulation quality', deltaPlus: 'Harishree EC — uniform dispersion and spread', generic: 'Formulation quality varies by manufacturer' },
    { feature: 'Bollworm efficacy', deltaPlus: 'Proven on cotton bollworm complex at 11% w/w', generic: 'Lower concentration may need higher dose' },
    { feature: 'Field convenience', deltaPlus: '10 ml/pump — straightforward dosing', generic: 'Dose calculations vary by product strength' }
  ];

  comparisonEcFormulation = [
    { feature: 'Tank mixing', deltaPlus: 'EC disperses easily in water for uniform emulsion', other: 'WP/SC may require more agitation or settle in tank' },
    { feature: 'Spray uniformity', deltaPlus: 'Fine droplet spread across leaf surfaces', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', deltaPlus: '10 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', deltaPlus: 'Stable EC liquid in sealed original container', other: 'Stability varies; some need special storage' },
    { feature: 'Coverage on dense canopy', deltaPlus: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', deltaPlus: 'Standard liquid pack — easy transport and measure', other: 'Bulk or powder forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'DELTA PLUS' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Synthetic Pyrethroid)' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Deltamethrin 11% w/w EC' },
      { label: 'Chemical group', value: 'Type-II Pyrethroid — IRAC Group 3A' },
      { label: 'Mode of action', value: 'Contact + stomach action; sodium channel modulator' },
      { label: 'Action type', value: 'Non-systemic contact and stomach poison insecticide' },
      {
        label: 'Target pests',
        value: 'Bollworms, fruit borers, stem borers, caterpillars, thrips, aphids, leaf feeders, defoliators'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, brinjal, tomato, okra, paddy, pulses, oilseed crops, vegetables'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 100 ml, 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '10 ml/pump' },
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
    { label: 'Product Name', value: 'DELTA PLUS' },
    { label: 'Brand / Trade Name', value: 'DELTA PLUS' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Deltamethrin 11% w/w EC' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Chemical Group', value: 'Type-II Pyrethroid — IRAC Group 3A' },
    { label: 'Mode of Action', value: 'Contact + stomach action; disrupts sodium channels in nerve tissue' },
    { label: 'Action Type', value: 'Non-systemic contact and stomach poison insecticide' },
    {
      label: 'Target Pests',
      value: 'American bollworm, spotted bollworm, pink bollworm, fruit borers, stem borers, leaf-eating caterpillars, thrips, aphids, leaf feeders, defoliators'
    },
    { label: 'Target Crops', value: 'Cotton, chilli, brinjal, tomato, okra, paddy, pulses, oilseed crops, vegetables' },
    { label: 'Recommended Dose', value: '10 ml/pump' },
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
        'On application, DELTA PLUS forms an even emulsifiable concentrate film on leaf surfaces. Chewing and sucking pests ingest or contact treated foliage during feeding, absorbing Deltamethrin through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid paralysis',
      description:
        'Deltamethrin acts on contact, disrupting sodium channels in insect nerve tissue. Pests exposed to the spray deposit experience rapid paralysis and immediate cessation of feeding damage.'
    },
    {
      title: 'Stomach action — chewing pest control',
      description:
        'When caterpillars, borers, and bollworms ingest treated plant tissue, Deltamethrin delivers strong stomach poison insecticide activity — effective control of hidden feeders on leaf undersides.'
    },
    {
      title: 'Nervous system disruption',
      description:
        'As a Type-II synthetic pyrethroid, Deltamethrin prolongs sodium channel opening in nerve axons, causing uncontrolled nerve firing, knockdown, and death of target pests.'
    },
    {
      title: 'Residual field protection',
      description:
        'The EC formulation adheres to foliage and maintains contact insecticide activity on treated surfaces, protecting crops from pest resurgence between scheduled spray intervals.'
    },
    {
      title: 'Resistance management benefits',
      description:
        'Rotate DELTA PLUS with IGRs, organophosphates, and other MOA groups across the season to reduce selection pressure on bollworm, caterpillar, thrips, and aphid populations.'
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
      value: 'Growers report visible decline in caterpillar, bollworm, thrips, and aphid feeding within hours of a well-timed DELTA PLUS spray at early larval stage.'
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
      value: 'EC deposit on foliage helps suppress newly active chewing and sucking pests between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely bollworm, caterpillar, thrips, and aphid control on cotton, chilli, and vegetables helps preserve boll weight, pod fill, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'DR. DELTA (Deltamethrin 2.8% EC)',
      description: 'Lower-concentration deltamethrin pyrethroid for bollworms, caterpillars, and leaf-eating pests with fast knockdown action.',
      route: '/product/deltamethrin-2-8-ec',
      image: 'assets/products/insecticide/dr-delta.jpg',
      imageAlt: 'DR. DELTA Deltamethrin 2.8% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'FENVAL (Fenvalerate 20% EC)',
      description: 'Synthetic pyrethroid insecticide for bollworms, caterpillars, and chewing pests in cotton and vegetables.',
      route: '/products/insecticide/fenvalerate-20-ec-fenval',
      image: 'assets/products/insecticide/fenvalerate-20-ec.png',
      imageAlt: 'FENVAL Fenvalerate 20% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'H-CYPER 25 (Cypermethrin 25% EC)',
      description: 'Synthetic pyrethroid insecticide for bollworms, caterpillars, and chewing pests in cotton and vegetables.',
      route: '/product/cypermethrin-25-ec',
      image: 'assets/products/insecticide/cypermethrin-25-ec.jpg',
      imageAlt: 'H-CYPER 25 Cypermethrin 25% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA PROFEX (Profenofos 50% EC)',
      description: 'Broad-spectrum organophosphate for bollworms, whiteflies, aphids, thrips, and caterpillars in cotton and vegetables.',
      route: '/products/insecticide/profenofos-50-ec',
      image: 'assets/products/insecticide/profenofos-50-ec.jpg',
      imageAlt: 'EXTRA PROFEX Profenofos 50% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'MEGNUM (Tolfenpyrad + Bifenthrin SE)',
      description: 'Dual-action insecticide for thrips, whiteflies, aphids, jassids, and mites in cotton and vegetables.',
      route: '/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se-megnum',
      image: 'assets/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se.png',
      imageAlt: 'MEGNUM Tolfenpyrad 15% + Bifenthrin 7.5% SE insecticide by Harishree Crop Science'
    },
    {
      name: 'TURBO (Novaluron + Indoxacarb SC)',
      description: 'Dual-action IGR and oxadiazine insecticide for caterpillar and borer control with knockdown plus moult disruption.',
      route: '/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'TURBO Novaluron Indoxacarb SC insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Deltamethrin 11% w/w EC?',
      answer:
        '<strong>Deltamethrin 11% w/w EC</strong> is a highly effective synthetic pyrethroid insecticide formulated as an emulsifiable concentrate (EC). It delivers strong contact and stomach action against bollworms, fruit borers, stem borers, caterpillars, thrips, aphids, and leaf-eating pests on cotton, chilli, vegetables, paddy, pulses, and oilseed crops.',
      answerPlain:
        'Deltamethrin 11% w/w EC is a highly effective synthetic pyrethroid insecticide formulated as an emulsifiable concentrate (EC). It delivers strong contact and stomach action against bollworms, fruit borers, stem borers, caterpillars, thrips, aphids, and leaf-eating pests on cotton, chilli, vegetables, paddy, pulses, and oilseed crops.'
    },
    {
      question: 'What is DELTA PLUS insecticide?',
      answer:
        '<strong>DELTA PLUS</strong> is Harishree Crop Science\'s brand of <strong>Deltamethrin 11% w/w EC</strong> — a broad spectrum insecticide for bollworm control, fruit borer control, stem borer control, thrips control, and aphid management in Indian field and vegetable crops. Recommended dose: 10 ml per pump.',
      answerPlain:
        'DELTA PLUS is Harishree Crop Science\'s brand of Deltamethrin 11% w/w EC — a broad spectrum insecticide for bollworm control, fruit borer control, stem borer control, thrips control, and aphid management in Indian field and vegetable crops. Recommended dose: 10 ml per pump.'
    },
    {
      question: 'How does Deltamethrin work?',
      answer:
        'Deltamethrin is a Type-II synthetic pyrethroid that modulates sodium channels in insect nerve tissue. It works through <strong>contact action</strong> on exposed pests and <strong>stomach action</strong> when chewing insects ingest treated foliage, causing rapid paralysis and knockdown.',
      answerPlain:
        'Deltamethrin is a Type-II synthetic pyrethroid that modulates sodium channels in insect nerve tissue. It works through contact action on exposed pests and stomach action when chewing insects ingest treated foliage, causing rapid paralysis and knockdown.'
    },
    {
      question: 'What pests does DELTA PLUS control?',
      answer:
        '<strong>DELTA PLUS</strong> controls American, spotted, and pink bollworms, fruit borers, stem borers, leaf-eating caterpillars, thrips, aphids, Spodoptera, and leaf feeders when applied at early larval stages with thorough coverage.',
      answerPlain:
        'DELTA PLUS controls American, spotted, and pink bollworms, fruit borers, stem borers, leaf-eating caterpillars, thrips, aphids, Spodoptera, and leaf feeders when applied at early larval stages with thorough coverage.'
    },
    {
      question: 'What is the dose of DELTA PLUS?',
      answer:
        'The standard recommended dose of <strong>DELTA PLUS</strong> is <strong>10 ml per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of DELTA PLUS is 10 ml per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Can DELTA PLUS be used in cotton, chilli, paddy, and vegetables?',
      answer:
        'Yes. <strong>DELTA PLUS</strong> is widely used on <strong>cotton</strong> for bollworm control, on <strong>chilli</strong> for fruit borers and thrips, on <strong>paddy</strong> as per label guidance, and on <strong>vegetables</strong> including brinjal, tomato, and okra for caterpillar and borer management at 10 ml per pump.',
      answerPlain:
        'Yes. DELTA PLUS is widely used on cotton for bollworm control, on chilli for fruit borers and thrips, on paddy as per label guidance, and on vegetables including brinjal, tomato, and okra for caterpillar and borer management at 10 ml per pump.'
    },
    {
      question: 'Is Deltamethrin systemic? How quickly does it work?',
      answer:
        'No, Deltamethrin is <strong>not systemic</strong> — it is a contact and stomach poison insecticide. DELTA PLUS delivers <strong>fast knockdown</strong>; chewing and sucking pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.',
      answerPlain:
        'No, Deltamethrin is not systemic — it is a contact and stomach poison insecticide. DELTA PLUS delivers fast knockdown; chewing and sucking pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.'
    },
    {
      question: 'Why choose DELTA PLUS from Harishree Crop Science?',
      answer:
        '<strong>Harishree Crop Science</strong> manufactures <strong>DELTA PLUS</strong> with strict quality control, reliable EC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Deltamethrin 11% w/w EC insecticide at best price.',
      answerPlain:
        'Harishree Crop Science manufactures DELTA PLUS with strict quality control, reliable EC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Deltamethrin 11% w/w EC insecticide at best price.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh Patel',
      location: 'Gujarat',
      text: 'DELTA PLUS gave excellent bollworm control in my cotton field. Pests stopped feeding within a day and bolls looked much cleaner at harvest.',
      rating: 5
    },
    {
      name: 'Suresh Reddy',
      location: 'Andhra Pradesh',
      text: 'I used DELTA PLUS on chilli for fruit borers and thrips. The knockdown was fast and the crop stayed clean through the season.',
      rating: 5
    },
    {
      name: 'Kiran Desai',
      location: 'Maharashtra',
      text: '10 ml per pump is easy to remember. DELTA PLUS mixed smoothly and controlled caterpillars and aphids in my brinjal and tomato fields effectively.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '90',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Measure DELTA PLUS', text: 'Accurately measure 10 ml of Deltamethrin 11% w/w EC (DELTA PLUS) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 10 ml into the water. The EC formulation emulsifies easily into a uniform spray mix. Top up and agitate.' },
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
      productImageAlt: 'DELTA PLUS Deltamethrin 11% w/w EC Insecticide',
      productImageCaption: 'DELTA PLUS Deltamethrin 11% w/w EC insecticide pack by Harishree Crop Science',
      description:
        'DELTA PLUS (Deltamethrin 11% w/w EC) by Harishree Crop Science is a premium synthetic pyrethroid insecticide for bollworms, fruit borers, stem borers, caterpillars, thrips, and aphids on cotton, chilli, and vegetables. Dose: 10 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'DELTA-PLUS-DELTAMETHRIN-11-EC',
      mpn: 'DELTA-PLUS-DELTAMETHRIN-11-EC',
      dose: '10 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply DELTA PLUS (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of DELTA PLUS (Deltamethrin 11% w/w EC) for foliar application at 10 ml/pump.',
      alternateNames: [
        'DELTA PLUS',
        'DELTA PLUS Insecticide',
        'DELTA PLUS Deltamethrin 11 EC',
        'Deltamethrin 11 EC',
        'Deltamethrin Insecticide',
        'Deltamethrin 11% w/w EC Insecticide',
        'Best Deltamethrin Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `DELTA PLUS (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Deltamethrin 11% w/w EC (DELTA PLUS) — broad spectrum insecticide for bollworm control, fruit borer control & thrips. Best price. Dose: 10 ml/pump. Harishree Crop Science.';

    this.seo.setAll(
      {
        title: 'Deltamethrin 11% w/w EC | DELTA PLUS | Buy Online',
        description: desc,
        keywords:
          'Deltamethrin 11% w/w EC, DELTA PLUS, Deltamethrin 11 EC, Deltamethrin Insecticide, Best Deltamethrin Insecticide, Deltamethrin 11 EC Uses, Deltamethrin 11 EC Price, Synthetic Pyrethroid Insecticide, Bollworm Control Insecticide, Fruit Borer Control Insecticide, Stem Borer Insecticide, Caterpillar Control Insecticide, Thrips Control Insecticide, Aphid Control Insecticide, Contact and Stomach Action Insecticide, Cotton Insecticide, Chilli Insecticide, Vegetable Insecticide, Broad Spectrum Insecticide, Fast Knockdown Insecticide, DELTA PLUS Insecticide, Deltamethrin EC, Pest Management, Crop Protection, Agricultural Insecticide, Crop Yield Improvement, Chewing Pest Control, Sucking Pest Management, Field Crop Protection, Insect Attack Prevention, Deltamethrin Dose Per Pump, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Deltamethrin 11% w/w EC (DELTA PLUS) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Deltamethrin 11% w/w EC | DELTA PLUS Insecticide',
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
