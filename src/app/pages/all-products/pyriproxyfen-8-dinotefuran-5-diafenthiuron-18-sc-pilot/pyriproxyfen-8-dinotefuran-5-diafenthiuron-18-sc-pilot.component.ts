import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'PILOT_PYRIPROXYFEN_DINOTEFURAN_DIAFENTHIURON_SC';
const INDICATIVE_LIST_PRICE_INR = 661;

@Component({
  selector: 'app-pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc-pilot',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc-pilot.component.html',
  styleUrl: './pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc-pilot.component.scss'
})
export class Pyriproxyfen8Dinotefuran5Diafenthiuron18ScPilotComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc-pilot';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc.jpg';
  readonly productImageWebpPath = 'assets/products/insecticide/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC';
  brandName = 'PILOT';

  featuredSnippetAnswer =
    'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC (PILOT) is a premium triple-action systemic insecticide by Harishree Crop Science for controlling Whitefly, Aphids, Thrips, and Jassids on cotton, brinjal, chilli, okra, tomato, and vegetables. It combines insect growth regulation, fast systemic knockdown, and long residual contact action. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '250 ML', price: 336, featured: false, sku: 'PILOT-250ML' },
    { volume: '500 ML', price: 661, featured: true, sku: 'PILOT-500ML' },
    { volume: '1 LTR', price: 1298, featured: false, sku: 'PILOT-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Triple action technology',
      description:
        'PILOT combines Pyriproxyfen (IGR), Dinotefuran (systemic neonicotinoid), and Diafenthiuron (contact thiourea) in one SC formulation for comprehensive sucking pest control.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Whitefly & aphid control',
      description:
        'Delivers reliable whitefly insecticide and aphid control activity on cotton, brinjal, chilli, and vegetable crops when applied at economic threshold with full canopy coverage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Thrips & jassid management',
      description:
        'Effective thrips control and jassid control through systemic uptake and contact deposit — protecting tender shoots, leaves, and developing fruits.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic insecticide action',
      description:
        'Dinotefuran moves within plant tissues to protect new growth from hidden sucking pests that contact-only sprays often miss on dense canopies.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual protection',
      description:
        'Diafenthiuron provides extended contact and translaminar activity on foliage, maintaining protection between scheduled spray intervals during peak pest seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Resistance management support',
      description:
        'Three distinct modes of action in one triple action insecticide help manage resistant whitefly and aphid populations when rotated in IPM programs.',
      icon: 'fas fa-sync-alt'
    }
  ];

  keyBenefits = [
    {
      title: 'Quick pest knockdown',
      description:
        'Dinotefuran delivers fast feeding cessation on active whitefly, aphid, thrips, and jassid colonies — reducing honeydew, sooty mould, and virus transmission risk quickly.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long-lasting field protection',
      description:
        'Combined systemic, contact, and IGR activity maintains sucking pest suppression on treated foliage for extended periods between spray applications.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Controls multiple sucking pests',
      description:
        'One spray targets whitefly, aphids, thrips, and jassids — simplifying crop protection programs on cotton, brinjal, chilli, okra, tomato, and mixed vegetables.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Improves crop health',
      description:
        'By reducing sap-feeding damage and viral vector pressure, PILOT helps restore leaf colour, vigour, and photosynthetic capacity in stressed crops.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Better yield potential',
      description:
        'Timely PILOT sprays protect flowering, fruit set, and boll development — supporting cleaner harvest grade and stronger yield potential in high-value crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Resistant whitefly management',
      description:
        'Triple MOA chemistry supports programs targeting resistant whitefly populations that no longer respond adequately to repeated single-ingredient neonic or pyrethroid sprays.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'IGR lifecycle disruption',
      description:
        'Pyriproxyfen prevents egg hatching and juvenile moulting — breaking whitefly and aphid reproductive cycles alongside adult and nymph knockdown actives.',
      icon: 'fas fa-dna'
    },
    {
      title: 'Cotton insecticide fit',
      description:
        'Trusted cotton insecticide for whitefly, aphid, and jassid complexes during square, flowering, and boll stages when integrated with scouting and ETL decisions.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Vegetable insecticide fit',
      description:
        'Broad vegetable insecticide choice for brinjal whitefly, chilli thrips, okra jassids, and tomato aphid outbreaks with crop-safe application at label dose.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'SC mixing convenience',
      description:
        'Suspension concentrate technology disperses evenly in water for uniform spray coverage — easy tank preparation at 30 ml per pump in standard knapsack sprayers.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Reduced spray frequency',
      description:
        'Long residual contact plus systemic movement can reduce repeat spray pressure compared with short-residual knockdown-only products during peak sucking pest seasons.',
      icon: 'fas fa-calendar-check'
    },
    {
      title: 'IPM rotation value',
      description:
        'Distinct IRAC groups (IGR + neonicotinoid + thiourea) make PILOT a valuable rotation partner in integrated pest management for sustainable sucking pest control.',
      icon: 'fas fa-recycle'
    }
  ];

  whyChoose = [
    {
      title: 'Premium SC formulation',
      description:
        'Harishree\'s suspension concentrate technology ensures smooth tank mixing, even spray distribution, and dependable triple-action field performance in Indian conditions.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Purpose-built triple chemistry',
      description:
        'PILOT is engineered for sucking pest programs — delivering IGR, systemic, and contact action in one product rather than complex tank mixes.',
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
        'Clear 30 ml per pump dosing, crop-wise tables, pest-wise guides, and safety notes help apply PILOT confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Whitefly',
      description:
        'Controls whitefly adults and nymphs on cotton, brinjal, chilli, and vegetables. Pyriproxyfen disrupts egg and nymph development while Dinotefuran and Diafenthiuron deliver knockdown and residual whitefly insecticide activity.'
    },
    {
      name: 'Aphids',
      description:
        'Provides strong aphid control on cotton, chilli, okra, tomato, and vegetable crops through systemic uptake and contact action — reducing curling, honeydew, and stunted shoot growth at early infestation.'
    },
    {
      name: 'Thrips',
      description:
        'Delivers effective thrips control on chilli, cotton, brinjal, and vegetables when applied with thorough coverage of tender leaves, buds, and flowers where thrips feed and hide.'
    },
    {
      name: 'Jassids',
      description:
        'Manages jassid control on cotton and okra through systemic movement and contact deposit — protecting leaf margins and reducing hopper burn and premature leaf drop.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'Leading systemic insecticide for cotton whitefly, aphids, and jassids during square, flowering, and boll development with triple-action residual protection.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Brinjal',
      description: 'Protects brinjal from whitefly and aphid complexes that cause leaf curling, sooty mould, and reduced fruit quality during vegetative and harvest stages.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Chilli',
      description: 'Controls chilli thrips, aphids, and whitefly that damage pods, reduce export quality, and transmit viral diseases during fruit-set windows.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Okra',
      description: 'Defends okra pods and foliage from jassids and aphids during continuous harvest cycles with systemic and contact sucking pest protection.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Tomato',
      description: 'Manages tomato aphids and whitefly on leaves and shoots — supporting cleaner foliage, healthier fruit development, and reduced virus vector pressure.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Vegetables',
      description: 'Broad fit across brinjal, okra, beans, and mixed vegetable crops facing whitefly, aphid, thrips, and jassid pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Whitefly, aphids, jassids', dose: '30 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Brinjal', pests: 'Whitefly, aphids', dose: '30 ml/pump', timing: 'Early colonization on undersides of leaves' },
    { crop: 'Chilli', pests: 'Thrips, aphids, whitefly', dose: '30 ml/pump', timing: 'At fruit set and peak thrips pressure' },
    { crop: 'Okra', pests: 'Jassids, aphids', dose: '30 ml/pump', timing: 'Pod formation to continuous harvest' },
    { crop: 'Tomato', pests: 'Aphids, whitefly', dose: '30 ml/pump', timing: 'Early infestation on shoots and leaves' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '30 ml/pump', timing: 'At ETL with full canopy coverage' }
  ];

  pestWiseControl = [
    { pest: 'Whitefly', crops: 'Cotton, brinjal, chilli, vegetables', mode: 'IGR + systemic + contact', efficacy: 'High at early to mid infestation' },
    { pest: 'Aphids', crops: 'Cotton, chilli, tomato, okra, vegetables', mode: 'Systemic neonic + contact thiourea', efficacy: 'High with timely spray' },
    { pest: 'Thrips', crops: 'Chilli, cotton, brinjal, vegetables', mode: 'Systemic + contact deposit', efficacy: 'High with bud and flower coverage' },
    { pest: 'Jassids', crops: 'Cotton, okra', mode: 'Systemic uptake + contact action', efficacy: 'High at economic threshold' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', pilot: 'Triple — IGR + systemic + contact (3 MOA)', traditional: 'Single MOA neonic or pyrethroid only' },
    { feature: 'Life-stage coverage', pilot: 'Eggs, nymphs, and adults via IGR + knockdown', traditional: 'Mostly adult and nymph knockdown only' },
    { feature: 'Resistant pest management', pilot: 'Three actives reduce selection pressure', traditional: 'Repeated single chemistry accelerates resistance' },
    { feature: 'Residual protection', pilot: 'Long contact + systemic movement on foliage', traditional: 'Short residual; frequent repeat sprays' },
    { feature: 'Sucking pest spectrum', pilot: 'Whitefly, aphids, thrips, jassids in one spray', traditional: 'Often needs tank mixes for full spectrum' },
    { feature: 'Application dose', pilot: '30 ml per pump — simple and consistent', traditional: 'Variable doses; higher spray frequency' }
  ];

  comparisonTripleAction = [
    { feature: 'Active ingredients', pilot: 'Pyriproxyfen + Dinotefuran + Diafenthiuron SC', dual: 'Typically 2 actives or single-ingredient products' },
    { feature: 'IGR lifecycle control', pilot: 'Pyriproxyfen stops egg hatch and nymph development', dual: 'Often lacks dedicated IGR component' },
    { feature: 'Systemic movement', pilot: 'Dinotefuran protects new growth internally', dual: 'May rely on contact-only deposit' },
    { feature: 'Resistant whitefly', pilot: 'Triple MOA supports resistant population programs', dual: 'Dual combos may still face cross-resistance' },
    { feature: 'Spray program value', pilot: 'One product covers multiple sucking pests', dual: 'May require additional tank-mix partners' },
    { feature: 'Season-long IPM fit', pilot: 'Ideal rotation anchor for sucking pest seasons', dual: 'Limited MOA diversity in repeated use' }
  ];

  comparisonIgrTraditional = [
    { feature: 'Primary chemistry', pilot: 'Modern triple-action SC with IGR backbone', traditional: 'Older organophosphates or pyrethroids for sucking pests' },
    { feature: 'Whitefly control', pilot: 'IGR + systemic + contact combined', traditional: 'Declining efficacy on resistant whitefly strains' },
    { feature: 'Aphid & thrips control', pilot: 'Systemic Dinotefuran + residual Diafenthiuron', traditional: 'Knockdown-only with limited residual' },
    { feature: 'Resistance profile', pilot: 'Lower cross-resistance when rotated in IPM', traditional: 'High resistance after repeated same-class use' },
    { feature: 'Crop safety', pilot: 'Label-directed dose supports crop safety', traditional: 'Phytotoxicity risk with some older chemistries' },
    { feature: 'Field convenience', pilot: 'SC — easy mixing at 30 ml/pump', traditional: 'Varies; some need complex tank mixes' }
  ];

  comparisonScFormulation = [
    { feature: 'Tank mixing', pilot: 'SC disperses easily in water for uniform suspension', other: 'EC/WP may require more agitation or settle in tank' },
    { feature: 'Spray uniformity', pilot: 'Fine particle spread across leaf surfaces', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', pilot: '30 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', pilot: 'Stable SC liquid in sealed original container', other: 'Stability varies; some need special storage' },
    { feature: 'Coverage on dense canopy', pilot: 'Good spread on cotton and brinjal foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', pilot: 'Standard liquid pack — easy transport and measure', other: 'Bulk or powder forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'PILOT' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Triple Action)' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC' },
      { label: 'Chemical groups', value: 'IGR (Pyriproxyfen) + Neonicotinoid (Dinotefuran) + Thiourea (Diafenthiuron)' },
      { label: 'Mode of action', value: 'Systemic + Contact + Insect Growth Regulation' },
      { label: 'Action type', value: 'Triple action insecticide with residual activity' },
      { label: 'Target pests', value: 'Whitefly, Aphids, Thrips, Jassids' },
      { label: 'Target crops', value: 'Cotton, brinjal, chilli, okra, tomato, vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (SC liquid); sizes 250 ML, 500 ML, 1 LTR' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early sucking pest infestation or as per ETL/label' },
      { label: 'Coverage', value: 'Spray leaf undersides where whitefly, aphids, and thrips feed' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'PILOT' },
    { label: 'Brand / Trade Name', value: 'PILOT' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Category', value: 'Insecticide' },
    { label: 'Mode of Action', value: 'Systemic + Contact + IGR' },
    { label: 'Action Type', value: 'Triple action insecticide with residual activity' },
    { label: 'Target Pests', value: 'Whitefly, Aphids, Thrips, Jassids' },
    { label: 'Suitable Crops', value: 'Cotton, Brinjal, Chilli, Tomato, Okra, Vegetables' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early sucking pest infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide (Triple Action)' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (250 ML, 500 ML, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'SC deposit on foliage',
      description:
        'On application, PILOT forms an even suspension concentrate film on leaf surfaces. Sucking pests ingest or contact treated foliage, absorbing all three active ingredients into their system.'
    },
    {
      title: 'Pyriproxyfen — IGR lifecycle disruption',
      description:
        'Pyriproxyfen mimics juvenile hormone, preventing whitefly and aphid eggs from hatching and stopping nymphs from completing moults — breaking the pest reproductive cycle at source.'
    },
    {
      title: 'Dinotefuran — systemic knockdown',
      description:
        'Dinotefuran is absorbed and translocated within plant tissues, delivering fast nervous-system disruption to hidden aphids, whitefly, thrips, and jassids feeding on new growth.'
    },
    {
      title: 'Diafenthiuron — contact residual control',
      description:
        'Diafenthiuron provides strong contact and translaminar activity on foliage, maintaining long residual control against exposed and resistant sucking pest populations.'
    },
    {
      title: 'Triple-action population suppression',
      description:
        'Combined IGR, systemic, and contact effects suppress whitefly, aphid, thrips, and jassid populations across multiple life stages — reducing rapid resurgence between spray intervals.'
    },
    {
      title: 'Crop protection benefits',
      description:
        'Reduced sap-feeding preserves leaf integrity, fruit quality, and plant vigour — supporting healthier cotton, brinjal, chilli, tomato, and vegetable crops through harvest.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 30 ml dose',
      text: 'Measure exactly 30 ml per pump to maintain efficacy, protect crops, and slow resistance development in sucking pest populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides where whitefly, aphids, thrips, and jassids feed and hide from direct sunlight.'
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
      label: 'Reduced sucking pest colonies',
      value: 'Growers report visible decline in whitefly and aphid populations within days of a well-timed PILOT spray at economic threshold.'
    },
    {
      label: 'Cleaner foliage and fruits',
      value: 'Less honeydew and sooty mould improve marketable grade in cotton, brinjal, chilli, and vegetable crops at harvest.'
    },
    {
      label: 'Healthier crop canopy',
      value: 'Protected leaves maintain photosynthetic capacity, supporting stronger vegetative and reproductive growth in treated crops.'
    },
    {
      label: 'Extended triple-action cover',
      value: 'Combined systemic, contact, and IGR activity helps suppress newly colonizing sucking pests between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely whitefly, aphid, and thrips control on cotton, brinjal, and vegetables helps preserve boll weight, fruit size, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'LANSER GOLD (Acephate + Imidacloprid SP)',
      description: 'Dual-mode soluble powder insecticide for fast contact and systemic control of sucking and chewing pests.',
      route: '/products',
      image: 'assets/products/insecticide/acephate-50-imidacloprid-1-8-sp.jpg',
      imageAlt: 'LANSER GOLD Acephate Imidacloprid SP insecticide by Harishree Crop Science'
    },
    {
      name: 'THIO-H 75 (Thiamethoxam 75% SG)',
      description: 'High-strength systemic neonicotinoid for aphids, jassids, whiteflies, and more on cotton and vegetables.',
      route: '/product/thiamethoxam-75-sg',
      image: 'assets/products/insecticide/thiamethoxam-75-sg.jpg',
      imageAlt: 'THIO-H 75 Thiamethoxam 75% SG insecticide by Harishree Crop Science'
    },
    {
      name: 'PRO-5G (Emamectin + Fipronil SC)',
      description: 'Dual-action insecticide for bollworms, fruit borers, thrips, and mixed pest complexes in cotton and vegetables.',
      route: '/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g',
      image: 'assets/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc.jpg',
      imageAlt: 'PRO-5G Emamectin Fipronil SC insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA PROFEX (Profenofos 50% EC)',
      description: 'Organophosphate insecticide for lepidopteran larvae, thrips, and jassids in cotton and vegetable crops.',
      route: '/products/insecticide/profenofos-50-ec',
      image: 'assets/products/insecticide/profenofos-50-ec.jpg',
      imageAlt: 'EXTRA PROFEX Profenofos 50% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'CHILLI H (Fipronil 2.92% EC)',
      description: 'Specialized EC insecticide for chilli thrips, stem borers, and broad-spectrum pest management.',
      route: '/products/insecticide/fipronil-2-92-ec',
      image: 'assets/products/insecticide/fipronil-2-92-ec.jpg',
      imageAlt: 'CHILLI H Fipronil 2.92% EC insecticide by Harishree Crop Science'
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
      question: 'What is Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC?',
      answer:
        '<strong>Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC</strong> is a triple-action suspension concentrate insecticide combining an insect growth regulator, a systemic neonicotinoid, and a contact thiourea for comprehensive sucking pest control on cotton, brinjal, chilli, okra, tomato, and vegetables.',
      answerPlain:
        'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC is a triple-action suspension concentrate insecticide combining an insect growth regulator, a systemic neonicotinoid, and a contact thiourea for comprehensive sucking pest control on cotton, brinjal, chilli, okra, tomato, and vegetables.'
    },
    {
      question: 'What is PILOT insecticide?',
      answer:
        '<strong>PILOT</strong> is the trade name for <strong>Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC</strong> by Harishree Crop Science — a premium triple action insecticide for whitefly, aphid, thrips, and jassid control in Indian agriculture.',
      answerPlain:
        'PILOT is the trade name for Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC by Harishree Crop Science — a premium triple action insecticide for whitefly, aphid, thrips, and jassid control in Indian agriculture.'
    },
    {
      question: 'What is the dose of PILOT?',
      answer:
        'The standard recommended dose of <strong>PILOT</strong> is <strong>30 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of PILOT is 30 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which pests does PILOT control?',
      answer:
        'PILOT controls <strong>whitefly, aphids, thrips, and jassids</strong> when applied at economic threshold with thorough coverage of leaf undersides and tender plant parts.',
      answerPlain:
        'PILOT controls whitefly, aphids, thrips, and jassids when applied at economic threshold with thorough coverage of leaf undersides and tender plant parts.'
    },
    {
      question: 'Can PILOT control whitefly?',
      answer:
        'Yes. <strong>PILOT</strong> is an effective <strong>whitefly insecticide</strong> combining Pyriproxyfen IGR activity with Dinotefuran systemic knockdown and Diafenthiuron contact control on cotton, brinjal, chilli, and vegetables.',
      answerPlain:
        'Yes. PILOT is an effective whitefly insecticide combining Pyriproxyfen IGR activity with Dinotefuran systemic knockdown and Diafenthiuron contact control on cotton, brinjal, chilli, and vegetables.'
    },
    {
      question: 'Is PILOT systemic?',
      answer:
        'Yes. <strong>PILOT</strong> contains <strong>Dinotefuran 5%</strong>, a systemic neonicotinoid that moves within plant tissues to protect new growth from hidden aphids, whitefly, thrips, and jassids — alongside contact and IGR actives.',
      answerPlain:
        'Yes. PILOT contains Dinotefuran 5%, a systemic neonicotinoid that moves within plant tissues to protect new growth from hidden aphids, whitefly, thrips, and jassids — alongside contact and IGR actives.'
    },
    {
      question: 'Can it be used in cotton and brinjal?',
      answer:
        'Yes. <strong>PILOT</strong> is widely used as a <strong>cotton insecticide</strong> for whitefly, aphids, and jassids, and as an <strong>insecticide for brinjal whitefly</strong> and aphid complexes at 30 ml per pump.',
      answerPlain:
        'Yes. PILOT is widely used as a cotton insecticide for whitefly, aphids, and jassids, and as an insecticide for brinjal whitefly and aphid complexes at 30 ml per pump.'
    },
    {
      question: 'Why choose PILOT from Harishree Crop Science?',
      answer:
        'Harishree Crop Science delivers <strong>PILOT</strong> with strict quality control, farmer-friendly 30 ml/pump guidance, premium SC formulation, and dependable dealer support — making it a trusted triple action insecticide for sucking pest programs across India.',
      answerPlain:
        'Harishree Crop Science delivers PILOT with strict quality control, farmer-friendly 30 ml/pump guidance, premium SC formulation, and dependable dealer support — making it a trusted triple action insecticide for sucking pest programs across India.'
    }
  ];

  testimonials = [
    { name: 'Vijay Sharma', location: 'Gujarat', text: 'PILOT brought whitefly under control in my cotton within days. Leaves looked greener and bolls developed better after one well-timed spray at 30 ml per pump.', rating: 5 },
    { name: 'Anita Reddy', location: 'Andhra Pradesh', text: 'I use PILOT for brinjal whitefly and aphid problems. The triple action formula mixed smoothly and gave lasting protection through the harvest season.', rating: 5 },
    { name: 'Ravi Kumar', location: 'Karnataka', text: 'Thrips were damaging my chilli pods badly. PILOT at early infestation reduced thrips counts and improved pod quality for export markets.', rating: 5 }
  ];

  aggregateRating = {
    ratingValue: '4.9',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure PILOT', text: 'Accurately measure 30 ml of Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC (PILOT) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 30 ml into the water. The SC formulation disperses easily into a uniform spray mix.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage in calm weather, covering leaf undersides where whitefly, aphids, thrips, and jassids feed.' },
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
      productImageAlt: 'PILOT Pyriproxyfen Dinotefuran Diafenthiuron SC Insecticide',
      productImageCaption: 'PILOT Pyriproxyfen 8% Dinotefuran 5% Diafenthiuron 18% SC insecticide pack by Harishree Crop Science',
      description:
        'PILOT (Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC) by Harishree Crop Science is a premium triple action insecticide for whitefly, aphids, thrips, and jassids on cotton, brinjal, chilli, and vegetables. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'PILOT-PYRIPROXYFEN-DINOTEFURAN-DIAFENTHIURON-SC',
      mpn: 'PILOT-PYRIPROXYFEN-DINOTEFURAN-DIAFENTHIURON-SC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply PILOT (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of PILOT (Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC) for foliar application at 30 ml/pump.',
      alternateNames: [
        'PILOT',
        'PILOT Insecticide',
        'PILOT Pyriproxyfen Insecticide',
        'Pyriproxyfen Dinotefuran Diafenthiuron Insecticide',
        'Pyriproxyfen 8 Dinotefuran 5 Diafenthiuron 18 SC',
        'Triple Action Insecticide',
        'Whitefly Control Insecticide',
        'Systemic Insecticide for Cotton'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `PILOT (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC (PILOT) for Whitefly, Aphids, Thrips & Jassids. Triple action systemic insecticide. Buy online at best price.';

    this.seo.setAll(
      {
        title: 'Pyriproxyfen 8%+Dinotefuran 5%+Diafenthiuron 18% SC | PILOT Buy',
        description: desc,
        keywords:
          'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC, Pyriproxyfen 8 Dinotefuran 5 Diafenthiuron 18 SC, PILOT, PILOT Insecticide, PILOT Pyriproxyfen Insecticide, Whitefly Control Insecticide, Thrips Control Insecticide, Aphid Control Insecticide, Jassid Control Insecticide, Best Insecticide for Sucking Pests, Triple Action Insecticide, Pyriproxyfen Dinotefuran Diafenthiuron Insecticide, Systemic Insecticide for Cotton, Insecticide for Brinjal Whitefly, Insecticide for Vegetable Sucking Pests, Best Insecticide for Resistant Whiteflies, Insecticide for Aphids and Thrips, Cotton Insecticide, Vegetable Insecticide, Dinotefuran Insecticide, Diafenthiuron Insecticide, Pyriproxyfen IGR, Harishree Crop Science, Buy Online, Best Price',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC (PILOT) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC | PILOT Insecticide',
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
