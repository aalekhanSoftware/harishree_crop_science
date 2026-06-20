import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'PRO_5G_EMAMECTIN_FIPRONIL_SC';
const INDICATIVE_LIST_PRICE_INR = 690;

@Component({
  selector: 'app-emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g.component.html',
  styleUrl: './emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g.component.scss'
})
export class EmamectinBenzoate15Fipronil35ScPro5gComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC';
  brandName = 'PRO 5G';

  featuredSnippetAnswer =
    'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC (PRO 5G) is a dual-action suspension concentrate insecticide combining avermectin and phenylpyrazole chemistry for broad-spectrum control of caterpillars, bollworms, borers, thrips, aphids, and whiteflies through contact, stomach, and translaminar activity. Recommended dose: 25 ml per pump.';

  packSizes = [
    { volume: '500 ml', price: 690, featured: true, sku: 'PRO-5G-500ML' },
    { volume: '1 LTR', price: 1357, featured: false, sku: 'PRO-5G-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredient technology',
      description:
        'PRO 5G combines Emamectin Benzoate 1.5% and Fipronil 3.5% SC in one suspension concentrate for synergistic control of chewing and sucking pests in a single spray.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls bollworms, fruit borers, stem borers, pod borers, thrips, aphids, whiteflies, leaf-eating caterpillars, Spodoptera, and Helicoverpa across cotton, chilli, tomato, and vegetables.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast knockdown effect',
      description:
        'Contact and stomach action delivers visible pest suppression soon after application when larvae and sucking pests feed on or contact treated foliage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual control',
      description:
        'The SC formulation adheres uniformly to leaf surfaces with translaminar movement, maintaining protection between spray intervals during peak pest seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Sucking and chewing pest control',
      description:
        'Effective against both lepidopteran larvae and sucking pest complexes that often appear together in cotton, chilli, and vegetable crops.',
      icon: 'fas fa-bug'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad spectrum pest control',
      description:
        'PRO 5G manages bollworms, borers, thrips, aphids, whiteflies, and caterpillars when applied at economic threshold with thorough canopy coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast knockdown performance',
      description:
        'Dual chemistry disrupts insect nervous systems through GluCl and GABA pathways, stopping feeding damage quickly after a well-timed spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual activity',
      description:
        'Suspension concentrate deposit continues protecting foliage and developing produce between sprays during critical flowering and fruiting windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Effective resistance management',
      description:
        'Two distinct IRAC groups (6 + 2B) in one product support rotation strategies and reduce reliance on single-mode chemistry classes.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Enhanced crop protection',
      description:
        'Contact, stomach, and translaminar action protect cotton bolls, chilli pods, tomato fruits, and vegetable foliage from mixed pest damage.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better yield potential',
      description:
        'By limiting borer entry holes, thrips scarring, and defoliation during peak pest pressure, growers support healthier plants and improved productivity.',
      icon: 'fas fa-award'
    }
  ];

  whyChoose = [
    {
      title: 'Premium dual-action SC formulation',
      description:
        'Harishree\'s optimized suspension concentrate ensures easy mixing, stable spray suspension, and uniform leaf deposition for dependable field performance.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven avermectin + phenylpy razole synergy',
      description:
        'Emamectin disrupts GluCl channels (IRAC Group 6) while Fipronil blocks GABA receptors (IRAC Group 2B) — complementary modes of action in one application.',
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
        'Clear 25 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply PRO 5G confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    { name: 'Bollworms', description: 'Controls American bollworm, spotted bollworm, and related bollworm species on cotton and other field crops.' },
    { name: 'American Bollworm', description: 'Strong activity against Helicoverpa armigera larvae feeding on cotton bolls, chilli pods, and tomato fruits.' },
    { name: 'Pink Bollworm', description: 'Manages pink bollworm larvae that tunnel into cotton bolls and reduce fibre quality and yield.' },
    { name: 'Spotted Bollworm', description: 'Controls spotted bollworm species that damage squares and bolls during cotton flowering and boll development.' },
    { name: 'Fruit Borers', description: 'Effective against fruit borer larvae in tomato, brinjal, and chilli that bore into developing produce.' },
    { name: 'Stem Borers', description: 'Provides activity against stem borer larvae that tunnel into plant stems and disrupt nutrient flow.' },
    { name: 'Pod Borers', description: 'Controls pod borer species in pulses and vegetable crops during pod formation and grain fill stages.' },
    { name: 'Thrips', description: 'Knocks down thrips that scar leaves, flowers, and fruits — a major concern in chilli and vegetable production.' },
    { name: 'Aphids', description: 'Controls aphid colonies on tender shoots and leaf undersides that cause curling and honeydew deposition.' },
    { name: 'Whiteflies', description: 'Manages whitefly populations on tomato, cotton, and vegetables when applied with good underside coverage.' },
    { name: 'Leaf Eating Caterpillars', description: 'Controls defoliating caterpillar species that reduce photosynthetic capacity during vegetative growth.' },
    { name: 'Tobacco Caterpillar', description: 'Provides activity against Spodoptera litura and related noctuid larvae in cotton, chilli, and vegetables.' },
    { name: 'Spodoptera', description: 'Effective against Spodoptera species including armyworm and cutworm complexes in multiple crops.' },
    { name: 'Helicoverpa', description: 'Strong control of Helicoverpa bollworm and pod borer species across cotton, pulses, and vegetables.' }
  ];

  applications = [
    { title: 'Cotton', description: 'Leading fit for bollworm, thrips, aphid, and jassid management during square, flowering, and boll development stages.', icon: 'fas fa-tshirt' },
    { title: 'Chilli', description: 'Protects against fruit borer, thrips, and aphids that damage pods, reduce colour intensity, and affect market quality.', icon: 'fas fa-pepper-hot' },
    { title: 'Tomato', description: 'Controls fruit borer, whitefly, and aphid pressure during vegetative growth and fruit development for cleaner produce.', icon: 'fas fa-apple-alt' },
    { title: 'Brinjal', description: 'Manages shoot and fruit borer, thrips, and jassids to reduce leaf damage, fruit drop, and quality loss.', icon: 'fa-solid fa-leaf' },
    { title: 'Okra', description: 'Defends against fruit borer, jassids, and aphids during flowering and pod formation for better pod quality.', icon: 'fas fa-seedling' },
    { title: 'Cabbage', description: 'Controls diamondback moth, caterpillars, and aphids in cole crops during head formation and marketable stage.', icon: 'fas fa-leaf' },
    { title: 'Cauliflower', description: 'Manages caterpillar and sucking pest complexes that damage curds and reduce marketable yield.', icon: 'fas fa-seedling' },
    { title: 'Pulses', description: 'Effective against pod borers, aphids, and thrips during pod-setting windows in gram, pigeon pea, and other pulses.', icon: 'fas fa-seedling' },
    { title: 'Soybean', description: 'Controls pod borer, semilooper, and sucking pests during flowering and pod fill for better grain quality.', icon: 'fas fa-leaf' },
    { title: 'Oilseeds', description: 'Manages aphids, jassids, and caterpillars in mustard, groundnut, and sunflower during critical growth stages.', icon: 'fas fa-leaf' },
    { title: 'Vegetable Crops', description: 'Broad fit across tomato, brinjal, okra, cabbage, and cole crops facing mixed chewing and sucking pest pressure.', icon: 'fas fa-carrot' },
    { title: 'Field Crops', description: 'Supports cotton and pulse programs where bollworm and pod borer pressure peaks during reproductive stages.', icon: 'fas fa-tractor' }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Bollworms, thrips, aphids, whiteflies', dose: '25 ml/pump', timing: 'At ETL during square, flowering, and boll development' },
    { crop: 'Chilli', pests: 'Fruit borer, thrips, aphids', dose: '25 ml/pump', timing: 'Early infestation at vegetative and fruit set' },
    { crop: 'Tomato', pests: 'Fruit borer, whiteflies, aphids', dose: '25 ml/pump', timing: 'Early pest buildup on foliage and fruits' },
    { crop: 'Brinjal', pests: 'Shoot/fruit borer, thrips, jassids', dose: '25 ml/pump', timing: 'First sign of borer or sucking pest damage' },
    { crop: 'Okra', pests: 'Fruit borer, jassids, aphids', dose: '25 ml/pump', timing: 'Flowering to pod formation' },
    { crop: 'Cabbage / Cauliflower', pests: 'Diamondback moth, caterpillars, aphids', dose: '25 ml/pump', timing: 'Early larval stage or ETL' },
    { crop: 'Pulses', pests: 'Pod borers, aphids, thrips', dose: '25 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Soybean', pests: 'Pod borer, semilooper, aphids', dose: '25 ml/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Oilseeds', pests: 'Aphids, jassids, caterpillars', dose: '25 ml/pump', timing: 'Early infestation with good coverage' },
    { crop: 'Vegetables', pests: 'Mixed borers, thrips, whiteflies', dose: '25 ml/pump', timing: 'Early infestation with underside coverage' }
  ];

  pestWiseControl = [
    { pest: 'Bollworms', crops: 'Cotton, chilli, tomato', mode: 'Contact + stomach + translaminar', efficacy: 'High at early larval stage' },
    { pest: 'Fruit Borers', crops: 'Tomato, brinjal, chilli', mode: 'Contact + stomach', efficacy: 'High with good coverage' },
    { pest: 'Stem / Pod Borers', crops: 'Pulses, vegetables, cotton', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Contact + translaminar', efficacy: 'High with underside coverage' },
    { pest: 'Aphids', crops: 'Cotton, vegetables, pulses', mode: 'Contact + stomach', efficacy: 'High on active colonies' },
    { pest: 'Whiteflies', crops: 'Tomato, cotton, brinjal', mode: 'Contact + translaminar', efficacy: 'Moderate to high' },
    { pest: 'Spodoptera', crops: 'Cotton, chilli, vegetables', mode: 'Contact + stomach', efficacy: 'High at early instars' },
    { pest: 'Helicoverpa', crops: 'Cotton, pulses, vegetables', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Leaf Eating Caterpillars', crops: 'Vegetables, pulses', mode: 'Contact + stomach', efficacy: 'High with full canopy spray' },
    { pest: 'Sucking Pest Complex', crops: 'Multiple crops', mode: 'Contact + translaminar', efficacy: 'Moderate to high' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', pro5g: 'Dual IRAC 6 + 2B — GluCl disruption + GABA block', traditional: 'Often single MOA organophosphate or pyrethroid' },
    { feature: 'Pest spectrum', pro5g: 'Chewing + sucking — borers, caterpillars, thrips, aphids, whiteflies', traditional: 'Often targets only foliar or only caterpillar pests' },
    { feature: 'Knockdown speed', pro5g: 'Fast visible activity on exposed larvae and sucking pests', traditional: 'Variable; slower on hidden borers' },
    { feature: 'Residual duration', pro5g: 'Long SC deposit with translaminar follow-through', traditional: 'Shorter residual on many conventional products' },
    { feature: 'Resistance management', pro5g: 'Two active ingredients from distinct chemical groups', traditional: 'Single MOA increases resistance selection pressure' },
    { feature: 'Application dose', pro5g: '25 ml per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonDualAction = [
    { feature: 'Active ingredients', pro5g: 'Emamectin Benzoate 1.5% + Fipronil 3.5% SC', singleIngredient: 'Single AI — emamectin-only or fipronil-only products' },
    { feature: 'Pest coverage', pro5g: 'Chewing and sucking pests in one spray', singleIngredient: 'Often limited to caterpillars OR sucking pests' },
    { feature: 'IRAC groups', pro5g: 'Group 6 + Group 2B combination', singleIngredient: 'Single IRAC group only' },
    { feature: 'Translaminar activity', pro5g: 'Emamectin translaminar + fipronil contact/stomach', singleIngredient: 'Depends on single chemistry class' },
    { feature: 'Tank mix need', pro5g: 'One product, dual MOA, fewer mixes', singleIngredient: 'May require additional product for full spectrum' },
    { feature: 'Field value', pro5g: 'Broad protection with proven 25 ml/pump dose', singleIngredient: 'May need multiple sprays or partner products' }
  ];

  comparisonSingleAction = [
    { feature: 'Action type', pro5g: 'Dual contact, stomach, and translaminar', singleAction: 'Single mode — contact-only or stomach-only focus' },
    { feature: 'Borer control', pro5g: 'Strong on fruit, stem, and pod borers', singleAction: 'Limited unless specific borer chemistry used' },
    { feature: 'Sucking pest control', pro5g: 'Thrips, aphids, whiteflies in same program', singleAction: 'Often requires separate sucking pest product' },
    { feature: 'Resistance risk', pro5g: 'Lower with two MOAs in one application', singleAction: 'Higher repeated selection on single pathway' },
    { feature: 'Spray efficiency', pro5g: 'One pass covers mixed pest complexes', singleAction: 'Multiple products or passes may be needed' },
    { feature: 'Best use case', pro5g: 'Mixed caterpillar + sucking pest outbreaks', singleAction: 'Targeted single-pest situations only' }
  ];

  comparisonAvermectin = [
    { feature: 'Chemistry combination', pro5g: 'Avermectin (Emamectin) + Phenylpyrazole (Fipronil)', combination: 'Single class — avermectin OR phenylpyrazole alone' },
    { feature: 'Nervous system targets', pro5g: 'GluCl channels + GABA-gated chloride channels', combination: 'One biochemical pathway only' },
    { feature: 'Lepidopteran control', pro5g: 'Excellent emamectin activity on caterpillars and borers', combination: 'Strong but narrow without partner AI' },
    { feature: 'Sucking pest activity', pro5g: 'Fipronil enhances thrips, aphid, whitefly control', combination: 'Limited without dual formulation' },
    { feature: 'Translaminar benefit', pro5g: 'Emamectin moves into leaf tissue for hidden feeders', combination: 'Surface activity only in many single-AI products' },
    { feature: 'Program fit', pro5g: 'Premium dual-action crop protection in one bottle', combination: 'Requires rotation or tank mix for same breadth' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'PRO 5G' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid suspension' },
      { label: 'Active ingredient', value: 'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC' },
      { label: 'Chemical group', value: 'Avermectin + Phenylpyrazole combination' },
      { label: 'Mode of action', value: 'Contact, stomach, and translaminar — GluCl (IRAC 6) + GABA (IRAC 2B)' },
      { label: 'Action type', value: 'Contact, stomach, translaminar' },
      { label: 'Target pests', value: 'Bollworms, Fruit borers, Stem borers, Pod borers, Thrips, Aphids, Whiteflies, Caterpillars, Spodoptera, Helicoverpa' },
      { label: 'Target crops', value: 'Cotton, Chilli, Tomato, Brinjal, Okra, Cabbage, Cauliflower, Pulses, Soybean, Oilseeds, Vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (SC liquid); sizes 500 ml, 1 LTR' },
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
    { label: 'Product Name', value: 'PRO 5G' },
    { label: 'Brand / Trade Name', value: 'PRO 5G' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Active Ingredient', value: 'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC' },
    { label: 'Chemical Group', value: 'Avermectin (Emamectin Benzoate) + Phenylpyrazole (Fipronil)' },
    { label: 'Mode of Action', value: 'Contact, stomach, and translaminar — GluCl channel activator (IRAC 6) + GABA-gated chloride channel blocker (IRAC 2B)' },
    { label: 'Action Type', value: 'Contact, stomach, translaminar' },
    { label: 'Target Pests', value: 'Bollworms, Fruit borers, Stem borers, Pod borers, Thrips, Aphids, Whiteflies, Leaf eating caterpillars, Spodoptera, Helicoverpa' },
    { label: 'Target Crops', value: 'Cotton, Chilli, Tomato, Brinjal, Okra, Cabbage, Cauliflower, Pulses, Soybean, Oilseeds, Vegetable crops' },
    { label: 'Recommended Dose', value: '25 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early pest infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children; below 35°C' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test; avoid strong alkaline mixes' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies and beehives; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Physical Form', value: 'Liquid suspension' },
    { label: 'Packaging Type', value: 'Bottle (500 ml, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    { title: 'Dual mode of action', description: 'PRO 5G combines Emamectin Benzoate (IRAC Group 6) and Fipronil (IRAC Group 2B) for complementary nervous system disruption in one application.' },
    { title: 'Contact action', description: 'Pests contacting treated foliage absorb active ingredients through the cuticle, delivering rapid knockdown on exposed larvae and sucking pests.' },
    { title: 'Stomach action', description: 'Feeding caterpillars and borers ingest treated plant tissue, receiving lethal doses through the digestive tract.' },
    { title: 'Translaminar activity', description: 'Emamectin moves into leaf tissue, reaching pests sheltered on the underside or within partially consumed leaves.' },
    { title: 'Nervous system disruption', description: 'Emamectin activates GluCl channels while Fipronil blocks GABA receptors, causing paralysis and feeding cessation.' },
    { title: 'Resistance management benefits', description: 'Dual chemistry reduces selection pressure on a single MOA and supports sustainable rotation within IPM programs.' }
  ];

  safetyItems = [
    { title: 'Wear proper PPE', text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.' },
    { title: 'Accurate 25 ml dose', text: 'Measure exactly 25 ml per pump to maintain efficacy, protect crops, and slow resistance development in pest populations.' },
    { title: 'Spray for full coverage', text: 'Apply in calm weather and cover leaf undersides, flowers, and fruiting parts where borers and thrips feed.' },
    { title: 'Safe storage', text: 'Store upright in original container in a cool, dry, locked place away from food, feed, seed, and children.' },
    { title: 'Container disposal', text: 'Triple-rinse empty bottles, puncture them, and dispose as per local pesticide container management rules.' },
    { title: 'First aid readiness', text: 'If product contacts skin or eyes, wash thoroughly with water. If swallowed or symptoms appear, seek medical help immediately with the label.' }
  ];

  performanceHighlights = [
    { label: 'Reduced pest infestation', value: 'Growers report lower bollworm, thrips, and fruit borer counts within days of a well-timed spray at 25 ml per pump.' },
    { label: 'Better crop health', value: 'Cleaner foliage with less borer damage, thrips scarring, and defoliation improves overall plant vigour.' },
    { label: 'Increased plant vigour', value: 'Dual-action protection supports uninterrupted vegetative and reproductive development during pest pressure.' },
    { label: 'Improved productivity', value: 'Protecting bolls, pods, and fruits during critical stages supports better yield and marketable quality.' }
  ];

  relatedProducts = [
    {
      name: 'Fipronil 2.92% EC (CHILLI H)',
      description: 'Premium phenylpyrazole broad-spectrum insecticide for stem borers, thrips, and soil pests with contact and stomach action.',
      route: '/products/insecticide/fipronil-2-92-ec',
      image: 'assets/products/insecticide/fipronil-2-92-ec.jpg',
      imageAlt: 'CHILLI H Fipronil 2.92% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'Emamectin Benzoate 1.9% EC',
      description: 'Avermectin insecticide for lepidopteran larvae, bollworms, and caterpillar control in cotton and vegetables.',
      route: '/product/emamectin-benzoate-1-9-ec',
      image: 'assets/products/Buldozer.png',
      imageAlt: 'Emamectin Benzoate 1.9% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'Novaluron 5.25% + Indoxacarb 4.5% SC (Turbo)',
      description: 'Dual-action IGR and oxadiazine insecticide for caterpillar and borer control in cotton, chilli, and vegetables.',
      route: '/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'Novaluron Indoxacarb Turbo insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    { question: 'What is Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC used for?', answer: '<strong>Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC</strong> (marketed as <strong>PRO 5G</strong>) is a dual-action insecticide for controlling bollworms, fruit borers, thrips, aphids, whiteflies, and caterpillars in cotton, chilli, tomato, and vegetables.', answerPlain: 'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC (marketed as PRO 5G) is a dual-action insecticide for controlling bollworms, fruit borers, thrips, aphids, whiteflies, and caterpillars in cotton, chilli, tomato, and vegetables.' },
    { question: 'What is the dose of PRO 5G per pump?', answer: 'The standard recommended dose of <strong>PRO 5G</strong> is <strong>25 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.', answerPlain: 'The standard recommended dose of PRO 5G is 25 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.' },
    { question: 'What is Emamectin Fipronil dose per pump?', answer: '<strong>PRO 5G</strong> (Emamectin Benzoate 1.5% + Fipronil 3.5% SC) is applied at <strong>25 ml per pump</strong> in a 15-litre knapsack sprayer for most labeled crops.', answerPlain: 'PRO 5G (Emamectin Benzoate 1.5% + Fipronil 3.5% SC) is applied at 25 ml per pump in a 15-litre knapsack sprayer for most labeled crops.' },
    { question: 'Which pests does PRO 5G control?', answer: '<strong>PRO 5G</strong> controls <strong>bollworms, fruit borers, stem borers, pod borers, thrips, aphids, whiteflies, leaf-eating caterpillars, Spodoptera, and Helicoverpa</strong> when applied at early infestation with thorough coverage.', answerPlain: 'PRO 5G controls bollworms, fruit borers, stem borers, pod borers, thrips, aphids, whiteflies, leaf-eating caterpillars, Spodoptera, and Helicoverpa when applied at early infestation with thorough coverage.' },
    { question: 'What are Emamectin Benzoate Fipronil uses in agriculture?', answer: '<strong>PRO 5G</strong> is used for dual-action control of chewing pests (borers, caterpillars) and sucking pests (thrips, aphids, whiteflies) in cotton, chilli, tomato, brinjal, pulses, and vegetable crops.', answerPlain: 'PRO 5G is used for dual-action control of chewing pests (borers, caterpillars) and sucking pests (thrips, aphids, whiteflies) in cotton, chilli, tomato, brinjal, pulses, and vegetable crops.' },
    { question: 'How does Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC work?', answer: '<strong>Emamectin</strong> activates GluCl channels (IRAC Group 6) while <strong>Fipronil</strong> blocks GABA receptors (IRAC Group 2B), delivering contact, stomach, and translaminar pest control.', answerPlain: 'Emamectin activates GluCl channels (IRAC Group 6) while Fipronil blocks GABA receptors (IRAC Group 2B), delivering contact, stomach, and translaminar pest control.' },
    { question: 'What crops can use PRO 5G?', answer: '<strong>PRO 5G</strong> is used on <strong>cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, oilseeds, and vegetable crops</strong> when applied at the right stage with 25 ml per pump.', answerPlain: 'PRO 5G is used on cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, oilseeds, and vegetable crops when applied at the right stage with 25 ml per pump.' },
    { question: 'What is the best spray timing for PRO 5G?', answer: 'Spray at <strong>early pest infestation</strong> or economic threshold, preferably during calm morning or evening hours with full canopy and underside coverage.', answerPlain: 'Spray at early pest infestation or economic threshold, preferably during calm morning or evening hours with full canopy and underside coverage.' },
    { question: 'How long does PRO 5G protection last?', answer: 'Field residual activity typically lasts <strong>10–15 days</strong> depending on pest pressure, crop stage, and weather. Re-scout and re-spray as per ETL and label guidance.', answerPlain: 'Field residual activity typically lasts 10–15 days depending on pest pressure, crop stage, and weather. Re-scout and re-spray as per ETL and label guidance.' },
    { question: 'Is PRO 5G a broad spectrum insecticide?', answer: 'Yes. <strong>PRO 5G</strong> is a <strong>broad-spectrum dual-action insecticide</strong> effective against both chewing pests (borers, caterpillars) and sucking pests (thrips, aphids, whiteflies).', answerPlain: 'Yes. PRO 5G is a broad-spectrum dual-action insecticide effective against both chewing pests (borers, caterpillars) and sucking pests (thrips, aphids, whiteflies).' },
    { question: 'Can PRO 5G be used on cotton?', answer: 'Yes. <strong>PRO 5G</strong> controls bollworms, thrips, aphids, and whiteflies on cotton when applied at square, flowering, and boll stages with 25 ml per pump.', answerPlain: 'Yes. PRO 5G controls bollworms, thrips, aphids, and whiteflies on cotton when applied at square, flowering, and boll stages with 25 ml per pump.' },
    { question: 'Can PRO 5G be used on chilli?', answer: 'Yes. <strong>PRO 5G</strong> is effective on chilli for fruit borer, thrips, and aphids when applied at vegetative and fruit-set stages with 25 ml per pump.', answerPlain: 'Yes. PRO 5G is effective on chilli for fruit borer, thrips, and aphids when applied at vegetative and fruit-set stages with 25 ml per pump.' },
    { question: 'Can PRO 5G be used on tomato?', answer: 'Yes. <strong>PRO 5G</strong> manages fruit borer, whitefly, and aphid pressure on tomato when sprayed at early infestation with good fruit and foliage coverage.', answerPlain: 'Yes. PRO 5G manages fruit borer, whitefly, and aphid pressure on tomato when sprayed at early infestation with good fruit and foliage coverage.' },
    { question: 'Is PRO 5G effective against bollworms?', answer: 'Yes. <strong>PRO 5G</strong> provides strong activity against American bollworm, pink bollworm, and spotted bollworm when applied at early larval stage on cotton and other crops.', answerPlain: 'Yes. PRO 5G provides strong activity against American bollworm, pink bollworm, and spotted bollworm when applied at early larval stage on cotton and other crops.' },
    { question: 'Is PRO 5G effective against thrips and whiteflies?', answer: 'Yes. <strong>PRO 5G</strong> controls thrips and whiteflies on chilli, cotton, and vegetables when sprayed with thorough coverage of leaf undersides and flowers.', answerPlain: 'Yes. PRO 5G controls thrips and whiteflies on chilli, cotton, and vegetables when sprayed with thorough coverage of leaf undersides and flowers.' },
    { question: 'How do I mix PRO 5G for spraying?', answer: 'Half-fill the sprayer with clean water, add <strong>25 ml of PRO 5G</strong>, top up with water, and agitate. Shake the bottle before measuring for uniform suspension.', answerPlain: 'Half-fill the sprayer with clean water, add 25 ml of PRO 5G, top up with water, and agitate. Shake the bottle before measuring for uniform suspension.' },
    { question: 'What pack sizes are available for PRO 5G?', answer: '<strong>PRO 5G</strong> is available in <strong>500 ml and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability in your area.', answerPlain: 'PRO 5G is available in 500 ml and 1 LTR packs. Contact Harishree Crop Science for dealer availability in your area.' },
    { question: 'What is the shelf life of PRO 5G?', answer: 'When stored sealed in a cool, dry place below 35°C, <strong>PRO 5G</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.', answerPlain: 'When stored sealed in a cool, dry place below 35°C, PRO 5G has a shelf life of approximately 24 months from the date of manufacture.' },
    { question: 'Is PRO 5G compatible with other pesticides?', answer: 'It is generally compatible with commonly used fungicides and micronutrients, but always perform a <strong>jar test</strong> before tank-mixing. Avoid strong alkaline products.', answerPlain: 'It is generally compatible with commonly used fungicides and micronutrients, but always perform a jar test before tank-mixing. Avoid strong alkaline products.' },
    { question: 'What precautions should I take when using PRO 5G?', answer: 'Wear full PPE, avoid spraying near water bodies and beehives, do not spray during active bee foraging, wash after use, and store safely away from children and food.', answerPlain: 'Wear full PPE, avoid spraying near water bodies and beehives, do not spray during active bee foraging, wash after use, and store safely away from children and food.' },
    { question: 'Is PRO 5G safe for crops?', answer: 'Yes, when used at the recommended dose and timing, PRO 5G is crop-safe on labeled crops. Avoid overdosing and always follow the label.', answerPlain: 'Yes, when used at the recommended dose and timing, PRO 5G is crop-safe on labeled crops. Avoid overdosing and always follow the label.' },
    { question: 'What is the technical name of PRO 5G insecticide?', answer: 'The technical composition is <strong>Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC</strong>. PRO 5G is the brand name under which Harishree Crop Science markets this product.', answerPlain: 'The technical composition is Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC. PRO 5G is the brand name under which Harishree Crop Science markets this product.' },
    { question: 'What is Emamectin Fipronil dose per acre?', answer: 'Field dose varies by crop and water volume. A common knapsack recommendation is <strong>25 ml per pump</strong> (15-litre sprayer). For acre-level rates, follow the printed label.', answerPlain: 'Field dose varies by crop and water volume. A common knapsack recommendation is 25 ml per pump (15-litre sprayer). For acre-level rates, follow the printed label.' },
    { question: 'Why is dual action better than single ingredient insecticides?', answer: '<strong>PRO 5G</strong> combines two IRAC groups (6 + 2B) to control both chewing and sucking pests, reduce resistance pressure, and cover broader pest spectra in one spray.', answerPlain: 'PRO 5G combines two IRAC groups (6 + 2B) to control both chewing and sucking pests, reduce resistance pressure, and cover broader pest spectra in one spray.' },
    { question: 'How does PRO 5G help with resistance management?', answer: 'Dual active ingredients from avermectin and phenylpyrazole groups attack different nervous system pathways, making it harder for pests to develop cross-resistance when rotated properly.', answerPlain: 'Dual active ingredients from avermectin and phenylpyrazole groups attack different nervous system pathways, making it harder for pests to develop cross-resistance when rotated properly.' },
    { question: 'What is PRO 5G Emamectin Fipronil insecticide?', answer: '<strong>PRO 5G</strong> is Harishree Crop Science\'s brand of <strong>Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC</strong> — a premium dual-action insecticide for Indian agriculture.', answerPlain: 'PRO 5G is Harishree Crop Science\'s brand of Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC — a premium dual-action insecticide for Indian agriculture.' }
  ];

  testimonials = [
    { name: 'Rajesh', location: 'Gujarat', text: 'PRO 5G gave excellent bollworm control in my cotton. Boll damage dropped within a week of spraying at flowering stage.', rating: 5 },
    { name: 'Sunil', location: 'Andhra Pradesh', text: 'I used PRO 5G on chilli for thrips and fruit borer. Pods were cleaner and colour was better at market.', rating: 5 },
    { name: 'Mahesh', location: 'Maharashtra', text: '25 ml per pump is easy to remember. PRO 5G mixed smoothly and controlled fruit borer in tomato effectively.', rating: 5 },
    { name: 'Kiran', location: 'Karnataka', text: 'Dual-action formula worked well when both caterpillars and whiteflies appeared together in my brinjal field.', rating: 4 },
    { name: 'Prakash', location: 'Telangana', text: 'Harishree PRO 5G is now my go-to for mixed pest outbreaks in cotton. Residual protection was better than my old spray.', rating: 5 },
    { name: 'Anil', location: 'Madhya Pradesh', text: 'Thrips in chilli reduced after PRO 5G. The SC formulation spread evenly across the crop canopy.', rating: 4 },
    { name: 'Vijay', location: 'Tamil Nadu', text: 'Good results on tomato fruit borer and aphids. I rotate PRO 5G with other MOAs for resistance management.', rating: 5 },
    { name: 'Hitesh', location: 'Rajasthan', text: 'Dealer recommended PRO 5G for cotton bollworm. Visible improvement in boll set after one well-timed spray.', rating: 5 },
    { name: 'Dinesh', location: 'Punjab', text: 'The suspension mixes cleanly. PRO 5G controlled pod borer in my pigeon pea crop effectively.', rating: 4 },
    { name: 'Bhavesh', location: 'Gujarat', text: 'Reliable dual-action pest control across seasons. PRO 5G has become a fixed part of my crop protection program.', rating: 5 },
    { name: 'Sanjay', location: 'Odisha', text: 'Used PRO 5G on okra for fruit borer and jassids. Good activity and crop safety at 25 ml per pump.', rating: 5 },
    { name: 'Ravi', location: 'West Bengal', text: 'Cabbage caterpillar pressure was controlled well with PRO 5G. Will buy again next season.', rating: 4 }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '94',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure PRO 5G', text: 'Shake the bottle well. Accurately measure 25 ml of Emamectin Benzoate 1.5% + Fipronil 3.5% SC (PRO 5G) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 25 ml into the water. The SC formulation disperses into a uniform suspension with gentle agitation.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage, flowers, and fruits in calm weather, covering leaf undersides where thrips and borers feed.' },
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
      productImageAlt: 'PRO 5G Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC Insecticide',
      productImageCaption: 'PRO 5G Emamectin Benzoate 1.5% + Fipronil 3.5% SC insecticide pack by Harishree Crop Science',
      description:
        'PRO 5G (Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC) by Harishree Crop Science is a premium dual-action insecticide for bollworms, borers, thrips, aphids, and whiteflies in cotton, chilli, tomato, and vegetables. Dose: 25 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'PRO-5G-EMAMECTIN-FIPRONIL-SC',
      mpn: 'PRO-5G-EMAMECTIN-FIPRONIL-SC',
      dose: '25 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply PRO 5G (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of PRO 5G (Emamectin Benzoate 1.5% + Fipronil 3.5% SC) for foliar application at 25 ml/pump.',
      alternateNames: [
        'PRO 5G',
        'PRO 5G Insecticide',
        'PRO 5G Emamectin Fipronil',
        'Emamectin Benzoate 1.5% + Fipronil 3.5% SC',
        'Emamectin Fipronil Insecticide',
        'Emamectin Benzoate Fipronil Uses',
        'Emamectin Fipronil Dose',
        'Emamectin Fipronil Dose Per Pump',
        'Dual Action Insecticide',
        'Broad Spectrum Insecticide',
        'Caterpillar Control Insecticide',
        'Bollworm Control Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `PRO 5G (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC (PRO 5G) dual-action insecticide by Harishree. Controls bollworms, thrips & borers. Dose: 25 ml/pump.';

    this.seo.setAll(
      {
        title: 'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC | PRO 5G',
        description: desc,
        keywords:
          'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC, PRO 5G, Emamectin Benzoate 1.5% + Fipronil 3.5% SC, Emamectin Fipronil Insecticide, Emamectin Benzoate Fipronil Uses, Emamectin Fipronil Dose, Emamectin Fipronil Dose Per Pump, Emamectin Benzoate Insecticide, Fipronil Based Insecticide, Dual Action Insecticide, Broad Spectrum Insecticide, Caterpillar Control Insecticide, Bollworm Control Insecticide, Fruit Borer Control, Pod Borer Control, Stem Borer Control, Thrips Control Insecticide, Whitefly Control Insecticide, Cotton Insecticide, Chilli Insecticide, Tomato Insecticide, Vegetable Crop Insecticide, Agricultural Insecticide, Crop Protection Solution, PRO 5G Insecticide, PRO 5G Emamectin Fipronil, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC (PRO 5G) | Harishree',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Emamectin Benzoate 1.5% + FIPRONIL 3.5% SC | PRO 5G',
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
