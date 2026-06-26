import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'X_PRO_AZOXYS_TROBIN_TRICYCLOZOLE';
const INDICATIVE_LIST_PRICE_INR = 1074;

@Component({
  selector: 'app-azoxystrobin-16-7-tricyclazole-33-3-sc-x-pro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './azoxystrobin-16-7-tricyclazole-33-3-sc-x-pro.component.html',
  styleUrl: './azoxystrobin-16-7-tricyclazole-33-3-sc-x-pro.component.scss'
})
export class Azoxystrobin167Tricyclazole333ScXProComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/x-pro-azoxystrobin-16-7-tricyclazole-33-3-sc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/X-PRO.png';
  readonly productImageWebpPath = 'assets/products/X-PRO.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Azoxystrobin 16.7% + Tricyclazole 33.3% SC';
  brandName = 'X PRO';

  featuredSnippetAnswer =
    'Azoxystrobin 16.7% + Tricyclazole 33.3% SC (X PRO) is a dual-action systemic fungicide by Harishree Crop Science for rice blast control, sheath blight, and brown spot in paddy. Recommended dose: 20 ml per pump.';

  packSizes = [
    { volume: '250 ml', price: 543, featured: false, sku: 'X-PRO-250ML' },
    { volume: '500 ml', price: 1074, featured: true, sku: 'X-PRO-500ML' },
    { volume: '1 Ltr', price: 2124, featured: false, sku: 'X-PRO-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual-action technology',
      description:
        'X PRO combines Azoxystrobin 16.7% and Tricyclazole 33.3% SC in one suspension concentrate for broad spectrum rice fungicide protection against blast, sheath blight, and brown spot.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Systemic movement',
      description:
        'Both actives absorb into paddy foliage and translocate within plant tissue, protecting new tillers and unsprayed leaf surfaces from inside out.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive action',
      description:
        'Apply before disease spreads to build a protective barrier on leaf and sheath surfaces — ideal for preventive paddy disease control programs.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Stops active rice blast, sheath blight, and brown spot infections when sprayed at early disease appearance with uniform canopy coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual protection',
      description:
        'Systemic azoxystrobin and tricyclazole activity maintains protection between scheduled spray intervals during critical paddy growth stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Broad spectrum control',
      description:
        'Controls rice blast, sheath blight, and brown spot — the three most damaging fungal diseases in Indian paddy cultivation.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Fast absorption',
      description:
        'SC formulation penetrates leaf cuticle rapidly for quick uptake and dependable field performance under Indian monsoon conditions.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the spray deposit dries on foliage, X PRO adheres well and maintains activity even after light rainfall events.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Better grain quality',
      description:
        'Timely blast and sheath blight control helps preserve grain filling, reduce chaffy grains, and improve marketable paddy quality at harvest.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Higher yield potential',
      description:
        'Protecting tillers and panicles during reproductive stages supports healthier stands and improved productivity per acre.',
      icon: 'fas fa-chart-line'
    }
  ];

  keyBenefits = [
    {
      title: 'Effective blast control',
      description:
        'X PRO targets Pyricularia oryzae — the fungus behind rice blast — through dual MOA chemistry that inhibits respiration and blocks penetration.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Sheath blight management',
      description:
        'Controls Rhizoctonia solani lesions on leaf sheaths and stems, limiting spread across the paddy canopy during humid weather.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Brown spot suppression',
      description:
        'Suppresses Cochliobolus miyabeanus infections that cause oval brown lesions, reducing premature leaf senescence in paddy.',
      icon: 'fas fa-circle'
    },
    {
      title: 'Improved crop health',
      description:
        'Healthier green leaf area supports stronger photosynthesis and tillering through vegetative and reproductive paddy stages.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Enhanced tillering',
      description:
        'Early blast protection preserves young tillers that form the foundation of panicle number and final grain yield.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better grain filling',
      description:
        'Disease-free panicles fill more uniformly, reducing empty grains and improving head rice recovery at milling.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Uniform crop growth',
      description:
        'Consistent disease suppression across the field promotes even maturity and easier harvest management.',
      icon: 'fas fa-equals'
    },
    {
      title: 'Reduced disease spread',
      description:
        'Systemic and contact activity limits spore production and secondary infection cycles within the paddy stand.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Long-lasting protection',
      description:
        'Residual systemic activity inside plant tissue protects new growth between spray intervals during the kharif and rabi seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Improved grain quality',
      description:
        'Cleaner panicles and reduced blast neck infection support better grain appearance and milling recovery.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting panicles at flowering and grain-fill stages helps preserve yield when disease pressure is high.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at ₹1074 for 500 ml best value pack delivers dependable dual-action fungicide protection per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  whyChoose = [
    {
      title: 'Dual active ingredients',
      description:
        'Azoxystrobin and Tricyclazole work through complementary modes of action — respiration inhibition plus melanin biosynthesis blockade — for broader disease control.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broader disease control',
      description:
        'One product manages rice blast, sheath blight, and brown spot instead of relying on multiple single-AI fungicide sprays.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Better resistance management',
      description:
        'Two distinct MOA groups reduce selection pressure on fungal populations compared to repeated use of a single chemistry class.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Long residual action',
      description:
        'Systemic movement within paddy tissue maintains protection during extended periods of humid, disease-favourable weather.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Healthier tillers and panicles translate to stronger stands and more uniform grain development across the field.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Reliable field performance',
      description:
        'Harishree SC formulation quality ensures uniform spray suspension, dependable coverage, and consistent results season after season.',
      icon: 'fas fa-certificate'
    }
  ];

  targetPests = [
    {
      name: 'Rice Blast',
      description:
        'Diamond-shaped lesions on leaves, nodes, and panicle necks caused by Pyricularia oryzae. X PRO inhibits fungal respiration and blocks penetration to stop blast progression.'
    },
    {
      name: 'Sheath Blight',
      description:
        'Oval greenish-grey lesions on leaf sheaths near the water line from Rhizoctonia solani. Dual-action chemistry limits lesion expansion and canopy spread.'
    },
    {
      name: 'Brown Spot',
      description:
        'Small oval brown spots with grey centres on leaves and glumes from Cochliobolus miyabeanus. X PRO suppresses infection and protects grain quality.'
    },
    {
      name: 'Leaf Blast',
      description:
        'Early leaf-stage blast causing spindle-shaped lesions. Preventive X PRO sprays at tillering protect young foliage before panicle initiation.'
    },
    {
      name: 'Neck Blast',
      description:
        'Panicle neck infection causing white, unfilled grains. Timely application before flowering reduces neck blast severity at harvest.'
    },
    {
      name: 'Sheath Rot Complex',
      description:
        'Secondary sheath infections in dense, humid stands. X PRO supports cleaner sheaths when integrated into a paddy disease management program.'
    }
  ];

  applications = [
    {
      title: 'Paddy (Rice)',
      description:
        'Primary crop for X PRO — controls blast, sheath blight, and brown spot during tillering, panicle initiation, and grain-fill stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Kharif Paddy',
      description:
        'Protects monsoon-season rice when humidity and blast pressure peak during vegetative and reproductive growth.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Rabi Paddy',
      description:
        'Supports winter-season paddy programs facing sheath blight and brown spot in cooler, humid microclimates.',
      icon: 'fas fa-snowflake'
    },
    {
      title: 'Transplanted Rice',
      description:
        'Ideal for transplanted paddy where uniform foliar coverage and systemic protection support early tillering.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Direct-Seeded Rice',
      description:
        'Apply at early disease appearance with full canopy spray for blast and brown spot management in DSR systems.',
      icon: 'fas fa-tractor'
    }
  ];

  cropWiseUsage = [
    { crop: 'Paddy (Rice)', pests: 'Blast, sheath blight, brown spot', dose: '20 ml/pump', timing: 'Early disease appearance or preventive at tillering' },
    { crop: 'Kharif paddy', pests: 'Rice blast, sheath blight', dose: '20 ml/pump', timing: 'Before panicle initiation; repeat if needed' },
    { crop: 'Rabi paddy', pests: 'Brown spot, sheath blight', dose: '20 ml/pump', timing: 'At first lesion sighting with uniform coverage' },
    { crop: 'Transplanted rice', pests: 'Leaf blast, brown spot', dose: '20 ml/pump', timing: '25–35 days after transplanting or per advisory' },
    { crop: 'Direct-seeded rice', pests: 'Blast, brown spot', dose: '20 ml/pump', timing: 'Early infestation during vegetative stage' }
  ];

  pestWiseControl = [
    { pest: 'Rice Blast', crops: 'Paddy', mode: 'QoI + melanin inhibitor', efficacy: 'High at early stage' },
    { pest: 'Sheath Blight', crops: 'Paddy', mode: 'Systemic dual-action', efficacy: 'High with full coverage' },
    { pest: 'Brown Spot', crops: 'Paddy', mode: 'Systemic + contact', efficacy: 'High at early lesions' },
    { pest: 'Leaf Blast', crops: 'Paddy', mode: 'Preventive systemic', efficacy: 'High before panicle stage' },
    { pest: 'Neck Blast', crops: 'Paddy', mode: 'Curative + preventive', efficacy: 'Moderate to high if timed early' }
  ];

  comparisonTraditional = [
    { feature: 'Active chemistry', prideH: 'Azoxystrobin 16.7% + Tricyclazole 33.3% SC — dual MOA', traditional: 'Single-AI contact fungicides with limited systemic reach' },
    { feature: 'Disease spectrum', prideH: 'Blast, sheath blight, brown spot in one spray', traditional: 'Often targets one disease per product' },
    { feature: 'Systemic protection', prideH: 'Absorbs and translocates within paddy tissue', traditional: 'Surface protection only; no internal crop defence' },
    { feature: 'Resistance management', prideH: 'Two MOA groups in one formulation', traditional: 'Higher resistance risk with single chemistry' },
    { feature: 'Application dose', prideH: '20 ml per pump — simple field dosing', traditional: 'Variable rates; often higher spray frequency' },
    { feature: 'Cost efficiency', prideH: '₹1074/500 ml best value pack', traditional: 'Multiple products increase seasonal cost' }
  ];

  comparisonDualAction = [
    { feature: 'Mode of action', prideH: 'Respiration inhibition + melanin biosynthesis blockade', singleAi: 'Single-site activity only' },
    { feature: 'Blast control', prideH: 'Tricyclazole blocks fungal penetration; azoxystrobin stops energy production', singleAi: 'May need partner products for full blast program' },
    { feature: 'Sheath blight', prideH: 'Broad spectrum rice fungicide activity on Rhizoctonia', singleAi: 'Limited efficacy on some sheath diseases' },
    { feature: 'Residual activity', prideH: 'Long-lasting systemic protection in plant tissue', singleAi: 'Shorter residual; more frequent sprays' },
    { feature: 'Formulation', prideH: 'Harishree SC — uniform suspension and spread', singleAi: 'Quality varies by brand' },
    { feature: 'Field convenience', prideH: '20 ml/pump straightforward dosing', singleAi: 'Dose calculations vary' }
  ];

  comparisonAcephateOnly = [
    { feature: 'Chemistry class', prideH: 'QoI (azoxystrobin) + melanin inhibitor (tricyclazole)', generic: 'Single triazole or contact fungicide' },
    { feature: 'Blast penetration block', prideH: 'Tricyclazole inhibits melanin biosynthesis', generic: 'No melanin pathway inhibition' },
    { feature: 'Energy disruption', prideH: 'Azoxystrobin stops mitochondrial respiration', generic: 'Different or no respiration MOA' },
    { feature: 'Paddy disease range', prideH: 'Blast + sheath blight + brown spot', generic: 'Often narrower label spectrum' },
    { feature: 'Preventive + curative', prideH: 'Both actions in one dual-action fungicide', generic: 'May be preventive-only' },
    { feature: 'Brand reliability', prideH: 'Harishree Crop Science quality control', generic: 'Formulation consistency varies' }
  ];

  comparisonSpFormulation = [
    { feature: 'Tank mixing', prideH: 'SC suspends evenly in water for uniform spray', other: 'WP may need more agitation' },
    { feature: 'Leaf spread', prideH: 'Good coverage on paddy foliage and sheaths', other: 'Variable depending on formulation' },
    { feature: 'Dosing', prideH: '20 ml/pump — easy knapsack measurement', other: 'Dose varies by product type' },
    { feature: 'Rainfastness', prideH: 'Good adhesion once spray dries', other: 'May wash off more easily' },
    { feature: 'Storage', prideH: 'Stable liquid SC in sealed container', other: 'Powder forms need dry storage' },
    { feature: 'Dealer handling', prideH: 'Standard bottle pack — easy transport', other: 'Bulk handling may differ' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'X PRO' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Azoxystrobin 16.7% + Tricyclazole 33.3%' },
      { label: 'Chemical group', value: 'QoI (FRAC 11) + Melanin biosynthesis inhibitor (FRAC 3)' },
      { label: 'Mode of action', value: 'Systemic dual-action fungicide' },
      { label: 'Action type', value: 'Preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Rice blast, sheath blight, brown spot' },
      { label: 'Target crops', value: 'Paddy (rice)' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 250 ml, 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '20 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, sheaths, and panicles' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'X PRO' },
    { label: 'Brand / Trade Name', value: 'X PRO' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Azoxystrobin 16.7% + Tricyclazole 33.3%' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'QoI + Melanin biosynthesis inhibitor' },
    { label: 'Mode of Action', value: 'Systemic dual-action fungicide' },
    { label: 'Action Type', value: 'Preventive and curative paddy disease control' },
    { label: 'Diseases Controlled', value: 'Rice blast, sheath blight, brown spot' },
    { label: 'Target Crops', value: 'Paddy (rice)' },
    { label: 'Recommended Dose', value: '20 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance; follow label guidance' },
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
      title: 'Azoxystrobin 16.7% — QoI fungicide',
      description:
        'Azoxystrobin (FRAC Group 11) inhibits mitochondrial respiration in fungal cells by blocking cytochrome bc1 complex, stopping energy production and halting disease development.'
    },
    {
      title: 'Tricyclazole 33.3% — melanin biosynthesis inhibitor',
      description:
        'Tricyclazole prevents melanin formation in appressoria, blocking fungal penetration into paddy leaf tissue — critical for rice blast control fungicide programs.'
    },
    {
      title: 'Foliar absorption and systemic movement',
      description:
        'X PRO SC absorbs through leaf cuticle and translocates within plant vascular tissue, protecting new tillers and unsprayed plant parts.'
    },
    {
      title: 'Preventive disease protection',
      description:
        'Applied before infection spreads, X PRO forms a protective deposit and builds internal defence against blast, sheath blight, and brown spot.'
    },
    {
      title: 'Curative activity on active infections',
      description:
        'When sprayed at early lesion stage, dual chemistry stops existing infections from progressing to panicle and grain damage.'
    },
    {
      title: 'Combined benefit — longer protection',
      description:
        'Two MOA groups deliver preventive action, curative action, longer residual protection, and improved resistance management in paddy fields.'
    }
  ];

  safetyItems = [
    {
      title: 'Read label before use',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying X PRO.'
    },
    {
      title: 'Wear protective equipment',
      text: 'Use gloves, goggles, mask, and protective clothing when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Avoid drift during spraying',
      text: 'Spray in calm weather, avoid water bodies, and keep children, animals, and beehives away from the application zone.'
    },
    {
      title: 'Store away from children',
      text: 'Keep in original sealed container in a cool, dry, locked place away from food, feed, seed, and direct sunlight.'
    },
    {
      title: 'Do not contaminate water bodies',
      text: 'Never spray directly over ponds, canals, or drinking water sources. Triple-rinse empty containers before disposal.'
    },
    {
      title: 'Follow recommended dose',
      text: 'Measure exactly 20 ml per pump. Over-dosing does not improve control and may increase crop safety risk.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Blast suppression',
      value: 'Growers report visible reduction in leaf and neck blast lesions within days of a well-timed X PRO spray at early infestation.'
    },
    {
      label: 'Cleaner panicles',
      value: 'Reduced neck blast and brown spot help preserve grain filling and improve head rice recovery at harvest.'
    },
    {
      label: 'Healthier tillering',
      value: 'Early preventive sprays protect young tillers, supporting stronger stands through panicle initiation.'
    },
    {
      label: 'Extended field protection',
      value: 'Systemic activity helps suppress newly active fungal infections between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely paddy disease control preserves panicle number and grain weight in high-pressure blast seasons.'
    }
  ];

  relatedProducts = [
    {
      name: 'Tebuja (Tebuconazole 25.9% EC)',
      description: 'Systemic triazole fungicide for rust, powdery mildew, leaf spot, and anthracnose across multiple crops.',
      route: '/products/tebuconazole-25-9-ec-tebuja',
      image: 'assets/products/fungicide/tebuconazole-25-9--ec.jpg',
      imageAlt: 'Tebuja Tebuconazole 25.9% EC fungicide by Harishree Crop Science'
    },
    {
      name: 'Super COC (Copper Oxychloride 50% WP)',
      description: 'Broad-spectrum contact fungicide and bactericide for blight, anthracnose, and bacterial diseases.',
      route: '/product/super-coc',
      image: 'assets/products/fungicide/copper-oxychloride-50-wp.jpg',
      imageAlt: 'Super COC Copper Oxychloride fungicide by Harishree Crop Science'
    },
    {
      name: 'H-Tilt (Propiconazole 25% EC)',
      description: 'Systemic triazole fungicide for rusts, leaf spots, and sheath blight in cereals and horticultural crops.',
      route: '/products',
      image: 'assets/products/fungicide/propiconazole-25-ec.jpg',
      imageAlt: 'H-Tilt Propiconazole fungicide by Harishree Crop Science'
    },
    {
      name: 'Magic (Validamycin 3% L)',
      description: 'Specialized systemic fungicide highly effective against sheath blight in paddy and horticultural crops.',
      route: '/products',
      image: 'assets/products/fungicide/validamycin-3-l.jpg',
      imageAlt: 'Magic Validamycin fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is X Pro Fungicide used for?',
      answer:
        '<strong>X PRO</strong> (Azoxystrobin 16.7% + Tricyclazole 33.3% SC) is used for <strong>rice blast control</strong>, <strong>sheath blight</strong>, and <strong>brown spot</strong> in paddy crops. It is a dual-action systemic fungicide for paddy disease control by Harishree Crop Science.',
      answerPlain:
        'X PRO (Azoxystrobin 16.7% + Tricyclazole 33.3% SC) is used for rice blast control, sheath blight, and brown spot in paddy crops. It is a dual-action systemic fungicide for paddy disease control by Harishree Crop Science.'
    },
    {
      question: 'Which crops can be sprayed with Azoxystrobin 16.7% + Tricyclazole 33.3% SC?',
      answer:
        '<strong>Azoxystrobin 16.7% + Tricyclazole 33.3% SC</strong> (X PRO) is primarily registered for <strong>paddy (rice)</strong> to control blast, sheath blight, and brown spot. Apply at 20 ml per pump with uniform foliar coverage.',
      answerPlain:
        'Azoxystrobin 16.7% + Tricyclazole 33.3% SC (X PRO) is primarily registered for paddy (rice) to control blast, sheath blight, and brown spot. Apply at 20 ml per pump with uniform foliar coverage.'
    },
    {
      question: 'Is X Pro effective against rice blast disease?',
      answer:
        'Yes. <strong>X PRO</strong> is highly effective against <strong>rice blast disease</strong>. Tricyclazole inhibits melanin biosynthesis to block fungal penetration while azoxystrobin stops energy production in the blast pathogen.',
      answerPlain:
        'Yes. X PRO is highly effective against rice blast disease. Tricyclazole inhibits melanin biosynthesis to block fungal penetration while azoxystrobin stops energy production in the blast pathogen.'
    },
    {
      question: 'What is the recommended dose of X Pro?',
      answer:
        'The standard recommended dose of <strong>X PRO</strong> is <strong>20 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of X PRO is 20 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'When should X Pro be sprayed?',
      answer:
        'Spray <strong>X PRO</strong> at <strong>early disease appearance</strong> or preventively at tillering and panicle initiation stages. Apply in calm morning or evening hours with uniform coverage on leaves, sheaths, and panicles.',
      answerPlain:
        'Spray X PRO at early disease appearance or preventively at tillering and panicle initiation stages. Apply in calm morning or evening hours with uniform coverage on leaves, sheaths, and panicles.'
    },
    {
      question: 'How does X Pro control fungal diseases?',
      answer:
        '<strong>X PRO</strong> controls fungal diseases through dual action: <strong>azoxystrobin</strong> inhibits fungal respiration (QoI) and <strong>tricyclazole</strong> blocks melanin biosynthesis, preventing penetration and stopping disease spread in paddy.',
      answerPlain:
        'X PRO controls fungal diseases through dual action: azoxystrobin inhibits fungal respiration (QoI) and tricyclazole blocks melanin biosynthesis, preventing penetration and stopping disease spread in paddy.'
    },
    {
      question: 'Can X Pro be used preventively?',
      answer:
        'Yes. <strong>X PRO</strong> can be used <strong>preventively</strong> before blast, sheath blight, or brown spot spreads across the field. Preventive sprays at tillering build systemic protection inside plant tissue.',
      answerPlain:
        'Yes. X PRO can be used preventively before blast, sheath blight, or brown spot spreads across the field. Preventive sprays at tillering build systemic protection inside plant tissue.'
    },
    {
      question: 'What pack sizes are available?',
      answer:
        '<strong>X PRO</strong> is available in <strong>250 ml (₹543)</strong>, <strong>500 ml (₹1074)</strong> — best value pack — and <strong>1 Ltr (₹2124)</strong>. Contact Harishree dealers for current availability.',
      answerPlain:
        'X PRO is available in 250 ml (₹543), 500 ml (₹1074) — best value pack — and 1 Ltr (₹2124). Contact Harishree dealers for current availability.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh Patel',
      location: 'Gujarat',
      text:
        'I sprayed X PRO when leaf blast appeared in my kharif paddy. Lesions stopped spreading within a week and tillers looked much healthier. The 20 ml per pump dose is easy to follow, and blast pressure was clearly lower at harvest.',
      rating: 5
    },
    {
      name: 'Gurpreet Singh',
      location: 'Punjab',
      text:
        'X PRO helped control neck blast in my basmati field. Panicles filled better and grain quality improved noticeably compared to last season. Azoxystrobin and tricyclazole combination gave reliable protection when humidity was high.',
      rating: 5
    },
    {
      name: 'Venkata Rao',
      location: 'Andhra Pradesh',
      text:
        'Sheath blight and brown spot were building in my paddy plot. One timely X PRO spray at early stage protected the crop through grain fill. Yield was better than the neighbouring field that used only contact fungicide.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.9',
    reviewCount: '76',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding X PRO.' },
    { name: 'Measure X PRO', text: 'Accurately measure 20 ml of Azoxystrobin 16.7% + Tricyclazole 33.3% SC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, sheaths, and panicles where blast and sheath blight develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform spray coverage is essential for systemic fungicide efficacy on paddy blast and brown spot.' },
    { name: 'Post-spray safety', text: 'Wash exposed skin, clean equipment, and store leftover product safely. Observe re-entry interval.' }
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
      productImageAlt: 'Azoxystrobin 16.7% + Tricyclazole 33.3% SC X Pro Fungicide for Rice Blast Control',
      productImageCaption: 'Dual Action Fungicide for Blast, Sheath Blight and Brown Spot Control in Paddy',
      description:
        'X PRO (Azoxystrobin 16.7% + Tricyclazole 33.3% SC) by Harishree Crop Science is a dual-action systemic fungicide for rice blast, sheath blight, and brown spot in paddy. Dose: 20 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'X Pro Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'X-PRO-AZOXYS-TRICYCLOZOLE-SC',
      mpn: 'X-PRO-AZOXYS-TRICYCLOZOLE-SC',
      dose: '20 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply X PRO (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of X PRO (Azoxystrobin 16.7% + Tricyclazole 33.3% SC) for foliar application at 20 ml/pump.',
      alternateNames: [
        'X PRO',
        'X Pro Fungicide',
        'X Pro Azoxystrobin Tricyclazole',
        'Azoxystrobin Tricyclazole Fungicide',
        'Rice Blast Control Fungicide',
        'Paddy Blast Fungicide',
        'Blast Disease Medicine for Paddy',
        'Sheath Blight Fungicide',
        'Brown Spot Control in Rice',
        'Best Fungicide for Paddy Crop',
        'Systemic Fungicide for Rice',
        'Fungicide for Rice Blast Disease',
        'Paddy Disease Control Product',
        'Broad Spectrum Rice Fungicide',
        'Rice Crop Protection Fungicide',
        'Dual Action Fungicide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `X PRO (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'X PRO Azoxystrobin 16.7% + Tricyclazole 33.3% SC controls rice blast, sheath blight & brown spot in paddy. Dual-action fungicide by Harishree. Order now — ₹1074/500 ml.';

    this.seo.setAll(
      {
        title: 'Azoxystrobin 16.7% + Tricyclazole 33.3% SC | X Pro',
        description: desc,
        keywords:
          'Azoxystrobin 16.7% + Tricyclazole 33.3% SC, X Pro Fungicide, Azoxystrobin Tricyclazole Fungicide, Rice Blast Control Fungicide, Paddy Blast Fungicide, Blast Disease Medicine for Paddy, Sheath Blight Fungicide, Brown Spot Control in Rice, Best Fungicide for Paddy Crop, Systemic Fungicide for Rice, Fungicide for Rice Blast Disease, Paddy Disease Control Product, Broad Spectrum Rice Fungicide, Rice Crop Protection Fungicide, Dual Action Fungicide, X PRO, Harishree Crop Science, paddy fungicide, rice disease control',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Azoxystrobin 16.7% + Tricyclazole 33.3% SC (X PRO) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'X PRO | Azoxystrobin + Tricyclazole Fungicide',
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
