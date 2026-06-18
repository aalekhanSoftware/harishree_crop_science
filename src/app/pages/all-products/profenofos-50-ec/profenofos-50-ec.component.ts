import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'EXTRA_PROFEX_PROFENOFOS_50_EC';
const INDICATIVE_LIST_PRICE_INR = 153;

@Component({
  selector: 'app-profenofos-50-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profenofos-50-ec.component.html',
  styleUrl: './profenofos-50-ec.component.scss'
})
export class ProfenofosFiftyEcComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/profenofos-50-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/profenofos-50-ec.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Profenofos 50% EC';
  brandName = 'EXTRA PROFEX';

  featuredSnippetAnswer =
    'Profenofos 50% EC (EXTRA PROFEX) is a broad-spectrum organophosphate insecticide with contact and stomach action for controlling bollworms, whiteflies, aphids, thrips, jassids, and leaf-eating caterpillars in cotton, chilli, vegetables, and other crops. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '250 ml', price: 153, featured: false, sku: 'EXTRA-PROFEX-250ML' },
    { volume: '500 ml', price: 289, featured: true, sku: 'EXTRA-PROFEX-500ML' },
    { volume: '1 LTR', price: 555, featured: false, sku: 'EXTRA-PROFEX-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls sucking and chewing pests including bollworms, whiteflies, aphids, thrips, and jassids across cotton, chilli, and vegetables.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast knockdown effect',
      description:
        'Profenofos delivers rapid feeding cessation and visible pest drop when sprayed at early infestation with good canopy coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Contact and stomach action',
      description:
        'Non-systemic organophosphate chemistry works on contact and through ingestion, reaching pests on leaf surfaces and undersides.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long lasting pest control',
      description:
        'The EC formulation adheres well to foliage and provides dependable residual protection between spray intervals.',
      icon: 'fas fa-clock'
    }
  ];

  keyBenefits = [
    {
      title: 'Effective against sucking and chewing pests',
      description:
        'EXTRA PROFEX manages bollworms, whiteflies, aphids, thrips, jassids, and caterpillars when applied at economic threshold with thorough spray coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast action against insects',
      description:
        'Profenofos inhibits acetylcholinesterase in insect nerve tissue, causing rapid paralysis and quick cessation of feeding damage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual control',
      description:
        'The emulsifiable concentrate deposit continues working on treated foliage, reducing the need for frequent repeat sprays during pest pressure.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop protection',
      description:
        'Used at the recommended 30 ml per pump dose and correct crop stage, EXTRA PROFEX supports cleaner foliage and healthier plant growth.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Better yield potential',
      description:
        'By controlling key pests during critical crop stages, growers protect squares, bolls, fruits, and pods for improved harvest quality.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Proven organophosphate chemistry',
      description:
        'Profenofos is a trusted active ingredient used widely across India for cotton bollworm and mixed pest complexes in vegetables.',
      icon: 'fas fa-flask'
    }
  ];

  whyChoose = [
    {
      title: 'Premium EC formulation',
      description:
        'Harishree\'s optimized emulsifiable concentrate ensures uniform dispersion, excellent leaf spread, and dependable spray stability in the tank.',
      icon: 'fas fa-award'
    },
    {
      title: 'Broad pest spectrum',
      description:
        'One product addresses both sucking pests (whitefly, aphid, thrips, jassid) and chewing pests (bollworm, caterpillar) in a single spray.',
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
        'Clear 30 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply EXTRA PROFEX confidently.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Bollworms',
      description:
        'Controls bollworm larvae that damage cotton squares and bolls, protecting lint yield and fibre quality during square and boll formation.'
    },
    {
      name: 'American Bollworm',
      description:
        'Effective against Helicoverpa armigera larvae — a major bollworm species across cotton, chilli, tomato, and pulses.'
    },
    {
      name: 'Spotted Bollworm',
      description:
        'Manages Earias spp. larvae that bore into cotton squares and bolls, reducing boll set and marketable lint.'
    },
    {
      name: 'Pink Bollworm',
      description:
        'Provides activity against Pectinophora gossypiella larvae inside cotton bolls when applied at early infestation with good coverage.'
    },
    {
      name: 'Whiteflies',
      description:
        'Knocks down whitefly adults and nymphs that suck sap and transmit viral diseases in cotton, chilli, and vegetables.'
    },
    {
      name: 'Aphids',
      description:
        'Controls aphid colonies on tender shoots and undersides of leaves that cause curling, honeydew, and sooty mould.'
    },
    {
      name: 'Thrips',
      description:
        'Effective against thrips that scar leaves, flowers, and fruits — a critical pest in chilli and vegetable crops.'
    },
    {
      name: 'Jassids',
      description:
        'Manages jassid populations that cause hopper burn, leaf curling, and reduced photosynthesis in cotton and pulses.'
    },
    {
      name: 'Leaf Eating Caterpillars',
      description:
        'Controls defoliating caterpillars including armyworms and loopers that strip foliage and reduce photosynthetic area.'
    },
    {
      name: 'Tobacco Caterpillar',
      description:
        'Provides strong activity against Spodoptera litura and related species that cause heavy defoliation in chilli and vegetables.'
    },
    {
      name: 'Stem Borers',
      description:
        'Suppresses stem-boring larvae that tunnel into stalks and weaken plant vigour in cotton, brinjal, and other crops.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'A leading choice for bollworm, whitefly, aphid, and jassid management during square and boll stages with dependable residual cover.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects against thrips, mites, fruit borers, and Spodoptera that damage pods, colour, and export quality in chilli fields.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Brinjal',
      description:
        'Controls shoot and fruit borers, jassids, and leaf-eating caterpillars to reduce fruit drop and improve harvest grade.',
      icon: 'fas fa-eggplant'
    },
    {
      title: 'Tomato',
      description:
        'Manages fruit borers, whiteflies, and leaf-eating caterpillars during fruit development for cleaner, marketable produce.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Okra',
      description:
        'Defends against jassids, fruit borers, and caterpillars during flowering and pod formation stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cabbage',
      description:
        'Controls diamondback moth, aphids, and caterpillars that damage heads and reduce cole crop marketability.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Cauliflower',
      description:
        'Protects curds and foliage from borer, aphid, and caterpillar damage during head development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Pulses',
      description:
        'Manages pod borers, aphids, and jassids during pod-setting windows in gram, pigeon pea, and other pulses.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Oilseeds',
      description:
        'Controls aphids, jassids, and caterpillars in soybean, groundnut, and mustard during critical growth stages.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Vegetables',
      description:
        'Broad fit across solanaceous and cole crops facing mixed sucking and chewing pest pressure.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Bollworms, whiteflies, aphids, jassids, thrips', dose: '30 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, mites, fruit borer, Spodoptera', dose: '30 ml/pump', timing: 'Early infestation at fruit set' },
    { crop: 'Brinjal', pests: 'Shoot borer, fruit borer, jassids', dose: '30 ml/pump', timing: 'First sign of borer or jassid damage' },
    { crop: 'Tomato', pests: 'Fruit borer, whitefly, caterpillars', dose: '30 ml/pump', timing: 'Early larval stage on fruits and foliage' },
    { crop: 'Okra', pests: 'Jassids, fruit borer, caterpillars', dose: '30 ml/pump', timing: 'Flowering to pod formation' },
    { crop: 'Cabbage', pests: 'Diamondback moth, aphids, caterpillars', dose: '30 ml/pump', timing: 'Preventive at head formation' },
    { crop: 'Cauliflower', pests: 'Diamondback moth, aphids, borers', dose: '30 ml/pump', timing: 'Early curd stage protection' },
    { crop: 'Pulses', pests: 'Pod borer, aphids, jassids', dose: '30 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Oilseeds', pests: 'Aphids, jassids, caterpillars', dose: '30 ml/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Vegetables', pests: 'Mixed sucking and chewing pests', dose: '30 ml/pump', timing: 'Early infestation with good coverage' }
  ];

  pestWiseControl = [
    { pest: 'Bollworms', crops: 'Cotton, pulses', mode: 'Contact + stomach', efficacy: 'High at early larval stage' },
    { pest: 'Whiteflies', crops: 'Cotton, chilli, vegetables', mode: 'Contact', efficacy: 'High with underside spray' },
    { pest: 'Aphids', crops: 'Vegetables, pulses, cotton', mode: 'Contact + stomach', efficacy: 'High on active colonies' },
    { pest: 'Thrips', crops: 'Chilli, cotton, vegetables', mode: 'Contact', efficacy: 'High with good coverage' },
    { pest: 'Jassids', crops: 'Cotton, pulses, okra', mode: 'Contact', efficacy: 'High at early infestation' },
    { pest: 'Spodoptera', crops: 'Chilli, vegetables', mode: 'Contact + stomach', efficacy: 'High on young instars' },
    { pest: 'Stem Borers', crops: 'Cotton, brinjal', mode: 'Contact + stomach', efficacy: 'Moderate to high at early stage' },
    { pest: 'Leaf Eating Caterpillars', crops: 'Vegetables, cole crops', mode: 'Contact + stomach', efficacy: 'High with full canopy spray' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', profex: 'Organophosphate — contact and stomach action', traditional: 'Single chemistry with limited spectrum' },
    { feature: 'Pest spectrum', profex: 'Broad — sucking and chewing pests', traditional: 'Often targets only one pest group' },
    { feature: 'Knockdown speed', profex: 'Fast feeding cessation via AChE inhibition', traditional: 'Varies; some products slower on tough pests' },
    { feature: 'Residual control', profex: 'Good EC deposit on foliage', traditional: 'Shorter residual on some conventional sprays' },
    { feature: 'Crop fit', profex: 'Cotton, chilli, vegetables, pulses, oilseeds', traditional: 'Limited crop labels on older products' },
    { feature: 'Application dose', profex: '30 ml per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonOrganophosphate = [
    { feature: 'Active ingredient', profex: 'Profenofos 50% EC — premium formulation', other: 'Dimethoate, chlorpyriphos, or older OP actives' },
    { feature: 'Pest spectrum', profex: 'Broad lepidopteran + sucking pest control', other: 'Narrower spectrum per individual OP' },
    { feature: 'Formulation quality', profex: 'Optimized EC with even dispersion', other: 'Varies by manufacturer and batch' },
    { feature: 'Residual duration', profex: 'Good field persistence on foliage', other: 'Some OPs degrade faster in sunlight' },
    { feature: 'Crop safety', profex: 'Crop-safe at 30 ml/pump on labeled crops', other: 'Phytotoxicity risk varies by product and dose' },
    { feature: 'Value per acre', profex: 'One product, proven dose, broad spectrum', other: 'May need multiple products or tank mixes' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'EXTRA PROFEX' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid emulsion' },
      { label: 'Active ingredient', value: 'Profenofos 50% EC' },
      { label: 'Chemical group', value: 'Organophosphate' },
      {
        label: 'Mode of action',
        value: 'Inhibits acetylcholinesterase (AChE) — contact and stomach action (IRAC Group 1B)'
      },
      { label: 'Action type', value: 'Contact and stomach; non-systemic' },
      {
        label: 'Target pests',
        value: 'Bollworms, Whiteflies, Aphids, Thrips, Jassids, Leaf eating caterpillars, Tobacco caterpillar, Stem borers'
      },
      { label: 'Target crops', value: 'Cotton, Chilli, Brinjal, Tomato, Okra, Cabbage, Cauliflower, Pulses, Oilseeds, Vegetables' }
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
    { label: 'Product Name', value: 'EXTRA PROFEX' },
    { label: 'Brand / Trade Name', value: 'EXTRA PROFEX' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Active Ingredient', value: 'Profenofos 50% EC' },
    { label: 'Chemical Group', value: 'Organophosphate' },
    {
      label: 'Mode of Action',
      value:
        'Profenofos inhibits acetylcholinesterase in insect nerve tissue, disrupting nerve signal transmission and causing paralysis (IRAC Group 1B)'
    },
    { label: 'Action Type', value: 'Contact and stomach; non-systemic' },
    {
      label: 'Target Pests',
      value: 'Bollworms, American bollworm, Spotted bollworm, Pink bollworm, Whiteflies, Aphids, Thrips, Jassids, Leaf eating caterpillars, Tobacco caterpillar, Stem borers'
    },
    { label: 'Target Crops', value: 'Cotton, Chilli, Brinjal, Tomato, Okra, Cabbage, Cauliflower, Pulses, Oilseeds, Vegetables' },
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
      title: 'Spray deposit on foliage',
      description:
        'On application, EXTRA PROFEX forms an even EC film on leaf surfaces. Pests ingest or contact the active deposit while feeding on treated foliage.'
    },
    {
      title: 'Contact action on pest body',
      description:
        'Profenofos penetrates the insect cuticle on direct contact, rapidly affecting nerve function and stopping pest movement and feeding.'
    },
    {
      title: 'Stomach action through ingestion',
      description:
        'When pests feed on treated plant tissue, Profenofos is ingested and inhibits acetylcholinesterase, causing paralysis and death.'
    },
    {
      title: 'Residual protection on crop',
      description:
        'The EC deposit continues working on foliage between sprays, protecting squares, bolls, fruits, and pods from newly arriving pests.'
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
      text: 'Apply in calm weather and cover leaf undersides where whiteflies, thrips, and caterpillars hide for maximum control.'
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
      value: 'Growers report lower whitefly, aphid, and bollworm counts within days of a well-timed spray at 30 ml per pump.'
    },
    {
      label: 'Better crop health',
      value: 'Cleaner foliage with less hopper burn, curling, and feeding scars improves overall plant vigour and photosynthesis.'
    },
    {
      label: 'Improved plant protection',
      value: 'The EC deposit continues working between sprays, lowering spray frequency during peak pest pressure.'
    },
    {
      label: 'Enhanced productivity',
      value: 'Protecting squares, bolls, and fruits during critical stages supports better yield and marketable produce quality.'
    }
  ];

  relatedProducts = [
    {
      name: 'Profenofos 40% + Cypermethrin 4% EC',
      description: 'MPIRE 404 for broad-spectrum contact and stomach action on mixed pest complexes.',
      route: '/product/profenofos-40-cypermethrin-4-ec',
      image: 'assets/products/MPIRE-404.png',
      imageAlt: 'Profenofos 40% + Cypermethrin 4% EC MPIRE 404 insecticide by Harishree Crop Science'
    },
    {
      name: 'Chlorantraniliprole 18.5% SC',
      description: 'Cora-5 for borer and larval pest management with systemic and contact action.',
      route: '/product/chlorantraniliprole-18-5-sc',
      image: 'assets/products/chlorantraniliprole-18-5-sc.png',
      imageAlt: 'Chlorantraniliprole 18.5% SC Cora-5 insecticide by Harishree Crop Science'
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
      question: 'What is Profenofos 50% EC used for?',
      answer:
        '<strong>Profenofos 50% EC</strong> (marketed as <strong>EXTRA PROFEX</strong>) is a broad-spectrum organophosphate insecticide for controlling bollworms, whiteflies, aphids, thrips, jassids, and caterpillars in cotton, chilli, brinjal, tomato, vegetables, pulses, and oilseeds.',
      answerPlain:
        'Profenofos 50% EC (marketed as EXTRA PROFEX) is a broad-spectrum organophosphate insecticide for controlling bollworms, whiteflies, aphids, thrips, jassids, and caterpillars in cotton, chilli, brinjal, tomato, vegetables, pulses, and oilseeds.'
    },
    {
      question: 'What is the dose of Profenofos 50 EC per pump?',
      answer:
        'The standard recommended dose of <strong>EXTRA PROFEX</strong> is <strong>30 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of EXTRA PROFEX is 30 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which pests does EXTRA PROFEX control?',
      answer:
        'EXTRA PROFEX controls <strong>bollworms, whiteflies, aphids, thrips, jassids, leaf-eating caterpillars, tobacco caterpillar, and stem borers</strong> when applied at early infestation with thorough coverage.',
      answerPlain:
        'EXTRA PROFEX controls bollworms, whiteflies, aphids, thrips, jassids, leaf-eating caterpillars, tobacco caterpillar, and stem borers when applied at early infestation with thorough coverage.'
    },
    {
      question: 'Is Profenofos effective against bollworms?',
      answer:
        'Yes. <strong>Profenofos 50% EC</strong> is widely used for cotton bollworm management including American, spotted, and pink bollworm when applied at economic threshold with 30 ml per pump.',
      answerPlain:
        'Yes. Profenofos 50% EC is widely used for cotton bollworm management including American, spotted, and pink bollworm when applied at economic threshold with 30 ml per pump.'
    },
    {
      question: 'Can Profenofos be used on cotton crops?',
      answer:
        'Yes. <strong>EXTRA PROFEX</strong> is a popular cotton insecticide for bollworms, whiteflies, aphids, jassids, and thrips when applied at the right crop stage with 30 ml per pump.',
      answerPlain:
        'Yes. EXTRA PROFEX is a popular cotton insecticide for bollworms, whiteflies, aphids, jassids, and thrips when applied at the right crop stage with 30 ml per pump.'
    },
    {
      question: 'How does Profenofos work?',
      answer:
        '<strong>Profenofos</strong> inhibits acetylcholinesterase (AChE) in insect nerve tissue, disrupting nerve signal transmission. It acts through <strong>contact and stomach action</strong> — non-systemic.',
      answerPlain:
        'Profenofos inhibits acetylcholinesterase (AChE) in insect nerve tissue, disrupting nerve signal transmission. It acts through contact and stomach action — non-systemic.'
    },
    {
      question: 'When should Profenofos be sprayed?',
      answer:
        'Spray at <strong>early pest infestation</strong> or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage.',
      answerPlain:
        'Spray at early pest infestation or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage.'
    },
    {
      question: 'Is Profenofos a systemic insecticide?',
      answer:
        'No. <strong>Profenofos 50% EC</strong> is a <strong>non-systemic</strong> insecticide with contact and stomach action. It does not translocate inside the plant but protects treated leaf surfaces.',
      answerPlain:
        'No. Profenofos 50% EC is a non-systemic insecticide with contact and stomach action. It does not translocate inside the plant but protects treated leaf surfaces.'
    },
    {
      question: 'Is Profenofos effective against whiteflies and thrips?',
      answer:
        'Yes. <strong>EXTRA PROFEX</strong> provides strong activity against whiteflies and thrips when sprayed with good coverage of leaf undersides where these pests feed and breed.',
      answerPlain:
        'Yes. EXTRA PROFEX provides strong activity against whiteflies and thrips when sprayed with good coverage of leaf undersides where these pests feed and breed.'
    },
    {
      question: 'Can Profenofos be used on chilli crops?',
      answer:
        'Yes. <strong>EXTRA PROFEX</strong> is widely used on chilli for thrips, mites, fruit borers, and Spodoptera when applied at the right crop stage with 30 ml per pump.',
      answerPlain:
        'Yes. EXTRA PROFEX is widely used on chilli for thrips, mites, fruit borers, and Spodoptera when applied at the right crop stage with 30 ml per pump.'
    },
    {
      question: 'How do I mix EXTRA PROFEX for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>30 ml of EXTRA PROFEX</strong>, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 30 ml of EXTRA PROFEX, top up with water, and agitate. The EC formulation disperses easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for EXTRA PROFEX?',
      answer:
        '<strong>EXTRA PROFEX</strong> is available in <strong>250 ml, 500 ml, and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'EXTRA PROFEX is available in 250 ml, 500 ml, and 1 LTR packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is the shelf life of EXTRA PROFEX?',
      answer:
        'When stored sealed in a cool, dry place, <strong>EXTRA PROFEX</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, EXTRA PROFEX has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'Is EXTRA PROFEX compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'What precautions should I take when using EXTRA PROFEX?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'Is Profenofos safe for crops?',
      answer:
        'Yes, when used at the recommended dose and timing, EXTRA PROFEX is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, EXTRA PROFEX is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'What is the technical name of EXTRA PROFEX insecticide?',
      answer:
        'The technical composition is <strong>Profenofos 50% EC</strong>. EXTRA PROFEX is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is Profenofos 50% EC. EXTRA PROFEX is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'Is EXTRA PROFEX a broad spectrum insecticide?',
      answer:
        'Yes. <strong>EXTRA PROFEX</strong> is a <strong>broad-spectrum insecticide</strong> effective against both sucking pests (whitefly, aphid, thrips, jassid) and chewing pests (bollworm, caterpillar).',
      answerPlain:
        'Yes. EXTRA PROFEX is a broad-spectrum insecticide effective against both sucking pests (whitefly, aphid, thrips, jassid) and chewing pests (bollworm, caterpillar).'
    },
    {
      question: 'How does EXTRA PROFEX compare to conventional insecticides?',
      answer:
        'Unlike narrow-spectrum products, <strong>EXTRA PROFEX</strong> combines proven Profenofos chemistry with a premium EC formulation for broad pest control, fast knockdown, and dependable residual activity in one spray.',
      answerPlain:
        'Unlike narrow-spectrum products, EXTRA PROFEX combines proven Profenofos chemistry with a premium EC formulation for broad pest control, fast knockdown, and dependable residual activity in one spray.'
    },
    {
      question: 'Can Profenofos be used on vegetables?',
      answer:
        'Yes. <strong>EXTRA PROFEX</strong> is used on brinjal, tomato, okra, cabbage, cauliflower, and other vegetables for mixed sucking and chewing pest control at 30 ml per pump.',
      answerPlain:
        'Yes. EXTRA PROFEX is used on brinjal, tomato, okra, cabbage, cauliflower, and other vegetables for mixed sucking and chewing pest control at 30 ml per pump.'
    },
    {
      question: 'What is Profenofos 50 EC dose per acre?',
      answer:
        'Field dose varies by crop and water volume. A common knapsack recommendation is <strong>30 ml per pump</strong> (15-litre sprayer). For acre-level rates, follow the printed label — typically around 400 ml per acre for cotton.',
      answerPlain:
        'Field dose varies by crop and water volume. A common knapsack recommendation is 30 ml per pump (15-litre sprayer). For acre-level rates, follow the printed label — typically around 400 ml per acre for cotton.'
    },
    {
      question: 'Is Profenofos effective against aphids and jassids?',
      answer:
        'Yes. <strong>Profenofos 50% EC</strong> provides effective contact and stomach action against aphid colonies and jassid populations on cotton, pulses, and vegetables.',
      answerPlain:
        'Yes. Profenofos 50% EC provides effective contact and stomach action against aphid colonies and jassid populations on cotton, pulses, and vegetables.'
    }
  ];

  testimonials = [
    { name: 'Ramesh', location: 'Gujarat', text: 'EXTRA PROFEX gave excellent bollworm and whitefly control in my cotton. Pests stopped feeding within two days.', rating: 5 },
    { name: 'Suresh', location: 'Maharashtra', text: 'I used EXTRA PROFEX on chilli for thrips. The knockdown was fast and the crop stayed clean through harvest.', rating: 5 },
    { name: 'Kiran', location: 'Karnataka', text: '30 ml per pump is easy to remember. EXTRA PROFEX mixed smoothly and controlled aphids in tomato effectively.', rating: 5 },
    { name: 'Prakash', location: 'Andhra Pradesh', text: 'Whitefly pressure in my cotton dropped noticeably after one well-timed EXTRA PROFEX spray at square stage.', rating: 4 },
    { name: 'Anil', location: 'Rajasthan', text: 'Harishree EXTRA PROFEX is now my go-to for mixed pest outbreaks. Residual effect lasted longer than expected.', rating: 5 },
    { name: 'Vijay', location: 'Tamil Nadu', text: 'Brinjal shoot borer damage reduced after EXTRA PROFEX. Fruits were cleaner at market.', rating: 4 },
    { name: 'Hitesh', location: 'Gujarat', text: 'Good results on cotton jassids and aphids. I rotate EXTRA PROFEX with other MOAs for resistance management.', rating: 5 },
    { name: 'Mahesh', location: 'Madhya Pradesh', text: 'The EC formulation spreads well. EXTRA PROFEX controlled Spodoptera in my chilli field effectively.', rating: 5 },
    { name: 'Dinesh', location: 'Gujarat', text: 'Dealer recommended EXTRA PROFEX for cotton bollworm. Visible improvement in boll quality after spraying.', rating: 4 },
    { name: 'Bhavesh', location: 'Gujarat', text: 'Reliable pest control across seasons. EXTRA PROFEX has become a fixed part of my crop protection program.', rating: 5 },
    { name: 'Sanjay', location: 'Punjab', text: 'Used EXTRA PROFEX on okra for jassids and fruit borer. Quick action and good crop safety at 30 ml per pump.', rating: 5 },
    { name: 'Ravi', location: 'Telangana', text: 'Thrips in chilli were controlled well with EXTRA PROFEX. Will buy again next season.', rating: 4 }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '124',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure EXTRA PROFEX', text: 'Accurately measure 30 ml of Profenofos 50% EC (EXTRA PROFEX) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 30 ml into the water. The EC formulation disperses easily into a uniform emulsion.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage in calm weather, covering leaf undersides where whiteflies, thrips, and caterpillars feed.' },
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
      productImageAlt: 'EXTRA PROFEX Profenofos 50% EC Insecticide',
      productImageCaption: 'EXTRA PROFEX Profenofos 50% EC insecticide pack by Harishree Crop Science',
      description:
        'EXTRA PROFEX (Profenofos 50% EC) by Harishree Crop Science is a premium broad-spectrum organophosphate insecticide for bollworms, whiteflies, aphids, thrips, and caterpillars in cotton, chilli, and vegetables. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'EXTRA-PROFEX-PROFENOFOS-50-EC',
      mpn: 'EXTRA-PROFEX-PROFENOFOS-50-EC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply EXTRA PROFEX (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of EXTRA PROFEX (Profenofos 50% EC) for foliar application at 30 ml/pump.',
      alternateNames: [
        'EXTRA PROFEX',
        'EXTRA PROFEX Insecticide',
        'EXTRA PROFEX Profenofos 50 EC',
        'Profenofos 50 EC',
        'Profenofos Insecticide',
        'Profenofos 50% EC Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `EXTRA PROFEX (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout']
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Profenofos 50% EC (EXTRA PROFEX) broad-spectrum insecticide by Harishree Crop Science. Controls bollworms, whiteflies, aphids & thrips. Dose: 30 ml/pump.';

    this.seo.setAll(
      {
        title: 'Profenofos 50% EC | EXTRA PROFEX Insecticide | Harishree',
        description: desc,
        keywords:
          'Profenofos 50% EC, EXTRA PROFEX, Profenofos 50 EC, Profenofos Insecticide, Profenofos 50% EC Insecticide, Profenofos Uses, Profenofos Dose, Profenofos 50 EC Dose Per Pump, Profenofos for Cotton, Profenofos for Chilli, Profenofos for Vegetables, Profenofos for Whitefly, Profenofos for Thrips, Profenofos for Aphids, Profenofos for Bollworms, Broad Spectrum Insecticide, Contact and Stomach Action Insecticide, Cotton Pest Control Insecticide, Agricultural Insecticide, Crop Protection Solution, Best Insecticide for Bollworms, Best Insecticide for Sucking Pests, EXTRA PROFEX Insecticide, EXTRA PROFEX Profenofos 50 EC, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Profenofos 50% EC (EXTRA PROFEX) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Profenofos 50% EC | EXTRA PROFEX Insecticide',
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
