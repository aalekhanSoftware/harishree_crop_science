import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'TURBO_NOVALURON_INDOXACARB';
const INDICATIVE_LIST_PRICE_INR = 366;

@Component({
  selector: 'app-novaluron-5-25-indoxacarb-4-5-sc-turbo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './novaluron-5-25-indoxacarb-4-5-sc-turbo.component.html',
  styleUrl: './novaluron-5-25-indoxacarb-4-5-sc-turbo.component.scss'
})
export class Novaluron525Indoxacarb45ScTurboComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/novaluron-5-25-indoxacarb-4-5-sc-turbo';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Novaluron 5.25% + Indoxacarb 4.5% w/w SC';
  brandName = 'TURBO';

  featuredSnippetAnswer =
    'Novaluron 5.25% + Indoxacarb 4.5% w/w SC (TURBO) is a dual-action suspension concentrate insecticide combining an insect growth regulator with an oxadiazine for powerful control of lepidopteran larvae including bollworms, fruit borers, pod borers, and leaf-eating caterpillars in cotton, chilli, tomato, and vegetables. Recommended dose: 20 ml per pump.';

  packSizes = [
    { volume: '250 ml', price: 366, featured: false, sku: 'TURBO-250ML' },
    { volume: '500 ml', price: 720, featured: true, sku: 'TURBO-500ML' },
    { volume: '1 LTR', price: 1416, featured: false, sku: 'TURBO-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual action technology',
      description: 'Pairs Novaluron (IGR) with Indoxacarb (oxadiazine) for knockdown plus long residual caterpillar control.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Caterpillar control',
      description: 'Targets bollworms, fruit borers, pod borers, stem borers, and leaf-eating caterpillars at early larval stages.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual effect',
      description: 'The SC formulation spreads evenly and keeps protecting foliage between spray intervals.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Effective crop protection',
      description: 'Trusted across cotton, chilli, tomato, cole crops, soybean, pulses, and vegetables.',
      icon: 'fas fa-seedling'
    }
  ];

  keyBenefits = [
    {
      title: 'Two complementary modes of action',
      description:
        'Novaluron disrupts chitin synthesis (IRAC Group 15) while Indoxacarb blocks sodium channels (IRAC Group 22A), hitting caterpillars through different biochemical pathways for stronger, resistance-smart control.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad lepidopteran spectrum',
      description:
        'TURBO manages bollworms, Helicoverpa, Spodoptera, fruit borers, pod borers, stem borers, and leaf-eating caterpillars when sprayed at early infestation with good canopy coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Extended residual protection',
      description:
        'The suspension concentrate adheres well to foliage and delivers lasting protection, reducing the frequency of sprays during peak borer pressure.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Crop-safe when label-directed',
      description:
        'Used at the recommended 20 ml per pump dose and correct crop stage, TURBO supports clean foliage and marketable produce on labeled crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Practical field dose',
      description:
        'A simple 20 ml per pump recommendation keeps mixing fast and accurate for knapsack sprayers in everyday farm operations.',
      icon: 'fas fa-tint'
    },
    {
      title: 'IPM-friendly rotation partner',
      description:
        'Distinct chemistry from pyrethroids and organophosphates makes TURBO a valuable rotation option in integrated pest management programs.',
      icon: 'fas fa-sync-alt'
    }
  ];

  whyChoose = [
    {
      title: 'Premium SC formulation',
      description:
        'Harishree\'s advanced suspension concentrate ensures uniform dispersion, excellent leaf spread, and dependable spray stability in the tank.',
      icon: 'fas fa-award'
    },
    {
      title: 'Proven dual-active synergy',
      description:
        'Combining Novaluron and Indoxacarb addresses both feeding larvae and developing instars for more complete caterpillar management.',
      icon: 'fas fa-handshake'
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
        'Clear 20 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply TURBO confidently.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Bollworms',
      description:
        'Controls American, pink, and spotted bollworm larvae that damage cotton squares and bolls, protecting lint yield and quality.'
    },
    {
      name: 'Fruit Borers',
      description:
        'Effective against shoot and fruit borers in tomato, brinjal, and chilli that bore into tender fruits and reduce market grade.'
    },
    {
      name: 'Pod Borers',
      description:
        'Manages pod borers in pulses and soybean that attack developing pods and cause shriveled, unmarketable grains.'
    },
    {
      name: 'Stem Borers',
      description:
        'Suppresses stem-boring larvae that tunnel into stalks and weaken plant vigour in cotton, maize, and vegetable crops.'
    },
    {
      name: 'Leaf Eating Caterpillars',
      description:
        'Knocks down defoliating caterpillars including armyworms and loopers that strip foliage and reduce photosynthetic area.'
    },
    {
      name: 'Tobacco Caterpillar / Spodoptera',
      description:
        'Provides strong activity against Spodoptera litura and related species that cause heavy defoliation in chilli and vegetables.'
    },
    {
      name: 'Helicoverpa',
      description:
        'Targets Helicoverpa armigera larvae — a major bollworm and fruit borer species across cotton, pulses, and solanaceous crops.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'A leading choice for bollworm management during square and boll formation stages with dependable residual cover.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description: 'Protects against fruit borers and Spodoptera that damage pods, colour, and export quality in chilli fields.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Tomato',
      description: 'Controls fruit borers and leaf-eating caterpillars to reduce fruit drop and improve harvest grade.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Cabbage',
      description: 'Manages diamondback moth and other caterpillars that damage heads and reduce cole crop marketability.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Cauliflower',
      description: 'Defends curds and foliage from borer and caterpillar damage during head development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Soybean',
      description: 'Controls pod borers and defoliating caterpillars during pod-fill for better grain weight and quality.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Pulses',
      description: 'Protects gram, pigeon pea, and other pulses from pod borers during critical pod-setting windows.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Vegetables',
      description: 'Broad fit across brinjal, okra, and other vegetables facing mixed caterpillar and borer pressure.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Bollworms, Helicoverpa, Spodoptera', dose: '20 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Fruit borer, Spodoptera, leaf caterpillars', dose: '20 ml/pump', timing: 'Early larval stage at fruit set' },
    { crop: 'Tomato', pests: 'Fruit borer, leaf miners, caterpillars', dose: '20 ml/pump', timing: 'First sign of borer damage on fruits' },
    { crop: 'Cabbage', pests: 'Diamondback moth, caterpillars', dose: '20 ml/pump', timing: 'Preventive at head formation' },
    { crop: 'Cauliflower', pests: 'Diamondback moth, borers', dose: '20 ml/pump', timing: 'Early curd stage protection' },
    { crop: 'Soybean', pests: 'Pod borer, leaf caterpillars', dose: '20 ml/pump', timing: 'Pod initiation to pod fill' },
    { crop: 'Pulses', pests: 'Pod borer, Helicoverpa', dose: '20 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Vegetables', pests: 'Mixed borers and caterpillars', dose: '20 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'Bollworms', crops: 'Cotton, pulses', mode: 'Contact + IGR', efficacy: 'High at early larval stage' },
    { pest: 'Fruit Borers', crops: 'Tomato, chilli, brinjal', mode: 'Contact + stomach', efficacy: 'High with good coverage' },
    { pest: 'Pod Borers', crops: 'Pulses, soybean', mode: 'Contact + IGR', efficacy: 'High before pod entry' },
    { pest: 'Stem Borers', crops: 'Cotton, maize', mode: 'Contact', efficacy: 'Moderate to high at early stage' },
    { pest: 'Spodoptera', crops: 'Chilli, vegetables', mode: 'Contact + stomach', efficacy: 'High on young instars' },
    { pest: 'Helicoverpa', crops: 'Cotton, tomato, pulses', mode: 'Dual action', efficacy: 'High at early infestation' },
    { pest: 'Leaf Eating Caterpillars', crops: 'Vegetables, cole crops', mode: 'Contact + IGR', efficacy: 'High with underside spray' },
    { pest: 'Diamondback Moth', crops: 'Cabbage, cauliflower', mode: 'IGR + contact', efficacy: 'Moderate to high' }
  ];

  comparisonTraditional = [
    { feature: 'Mode of action', turbo: 'Dual: IGR (Novaluron) + oxadiazine (Indoxacarb)', traditional: 'Single MOA — pyrethroid or OP only' },
    { feature: 'Caterpillar spectrum', turbo: 'Broad lepidopteran including resistant Spodoptera', traditional: 'Limited or declining efficacy on tough caterpillars' },
    { feature: 'Residual control', turbo: 'Long-lasting SC deposit on foliage', traditional: 'Shorter residual; more frequent sprays needed' },
    { feature: 'Resistance risk', turbo: 'Two IRAC groups reduce resistance build-up', traditional: 'Higher resistance risk with repeated single-MOA use' },
    { feature: 'Crop safety', turbo: 'Crop-safe at 20 ml/pump on labeled crops', traditional: 'Varies; some products cause phytotoxicity at high dose' },
    { feature: 'Application dose', turbo: '20 ml per pump — simple and consistent', traditional: 'Often higher volumes or complex tank mixes' }
  ];

  comparisonSingleIngredient = [
    { feature: 'Novaluron alone', turbo: 'Novaluron + Indoxacarb combination', single: 'IGR only — slower knockdown on large larvae' },
    { feature: 'Indoxacarb alone', turbo: 'Novaluron + Indoxacarb combination', single: 'Fast knockdown but no IGR effect on moulting' },
    { feature: 'Larval stages covered', turbo: 'Early to mid instars plus active feeders', single: 'Each single active covers a narrower larval window' },
    { feature: 'Residual duration', turbo: 'Extended protection from IGR component', single: 'Shorter field persistence alone' },
    { feature: 'Resistance management', turbo: 'Two MOAs in one spray', single: 'Requires separate rotation products' },
    { feature: 'Cost efficiency', turbo: 'One product, one mix, dual action', single: 'May need tank mix or sequential sprays' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'TURBO' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid suspension' },
      { label: 'Active ingredients', value: 'Novaluron 5.25% + Indoxacarb 4.5% w/w' },
      { label: 'Chemical group', value: 'Benzoylurea (IGR) + Oxadiazine' },
      {
        label: 'Mode of action',
        value: 'Novaluron inhibits chitin synthesis (IRAC 15); Indoxacarb blocks sodium channels (IRAC 22A)'
      },
      { label: 'Action type', value: 'Contact, stomach, and insect growth regulator' },
      {
        label: 'Target pests',
        value: 'Bollworms, Fruit borers, Pod borers, Stem borers, Leaf eating caterpillars, Spodoptera, Helicoverpa'
      },
      { label: 'Target crops', value: 'Cotton, Chilli, Tomato, Cabbage, Cauliflower, Soybean, Pulses, Vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (SC liquid); sizes 250 ml, 500 ml, 1 LTR' },
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
    { label: 'Product Name', value: 'TURBO' },
    { label: 'Brand / Trade Name', value: 'TURBO' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Active Ingredients', value: 'Novaluron 5.25% + Indoxacarb 4.5% w/w' },
    { label: 'Chemical Group', value: 'Benzoylurea (IGR) + Oxadiazine' },
    {
      label: 'Mode of Action',
      value:
        'Novaluron inhibits chitin biosynthesis disrupting moulting (IRAC Group 15); Indoxacarb blocks voltage-gated sodium channels causing paralysis (IRAC Group 22A)'
    },
    { label: 'Action Type', value: 'Contact, stomach, and insect growth regulator' },
    {
      label: 'Target Pests',
      value: 'Bollworms, Fruit borers, Pod borers, Stem borers, Leaf eating caterpillars, Tobacco caterpillar, Spodoptera, Helicoverpa'
    },
    { label: 'Target Crops', value: 'Cotton, Chilli, Tomato, Cabbage, Cauliflower, Soybean, Pulses, Vegetables' },
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
    { label: 'Physical Form', value: 'Liquid suspension' },
    { label: 'Packaging Type', value: 'Bottle (250 ml, 500 ml, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Spray deposit on foliage',
      description:
        'On application, TURBO forms an even SC film on leaf surfaces. Caterpillars ingest or contact the active deposit while feeding on treated foliage.'
    },
    {
      title: 'Indoxacarb — rapid feeding cessation',
      description:
        'Indoxacarb is activated inside the caterpillar gut and blocks sodium channels in nerve cells, causing paralysis and quick cessation of feeding.'
    },
    {
      title: 'Novaluron — moult disruption',
      description:
        'Novaluron inhibits chitin synthesis, preventing larvae from completing moulting. Affected instars cannot develop to the next stage and die.'
    },
    {
      title: 'Dual-action residual protection',
      description:
        'The combination delivers immediate knockdown plus extended control of newly hatched larvae, protecting crop yield and foliage quality between sprays.'
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
      text: 'Apply in calm weather and cover leaf undersides where caterpillars and borers hide for maximum control.'
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
      label: 'Visible caterpillar drop',
      value: 'Growers report reduced larval feeding and lower pest counts within days of a well-timed spray.'
    },
    {
      label: 'Cleaner produce',
      value: 'Fewer borer holes and feeding scars improve marketable grade in cotton, chilli, and vegetables.'
    },
    {
      label: 'Residual canopy cover',
      value: 'The SC deposit continues working between sprays, lowering spray frequency during peak pressure.'
    },
    {
      label: 'Value per acre',
      value: 'A practical 20 ml/pump dose with dual-active power delivers cost-effective caterpillar management.'
    }
  ];

  relatedProducts = [
    {
      name: 'Chlorantraniliprole 18.5% SC',
      description: 'Cora-5 for borer and larval pest management with systemic and contact action.',
      route: '/product/chlorantraniliprole-18-5-sc',
      image: 'assets/products/chlorantraniliprole-18-5-sc.png',
      imageAlt: 'Chlorantraniliprole 18.5% SC Cora-5 insecticide by Harishree Crop Science'
    },
    {
      name: 'Emamectin Benzoate 1.9% EC',
      description: 'Buldozer for fast knockdown of caterpillars, leaf miners, and borers.',
      route: '/product/emamectin-benzoate-1-9-ec',
      image: 'assets/products/Buldozer.png',
      imageAlt: 'Emamectin Benzoate 1.9% EC Buldozer insecticide by Harishree Crop Science'
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
      question: 'What is Novaluron 5.25% + Indoxacarb 4.5% w/w SC used for?',
      answer:
        '<strong>Novaluron 5.25% + Indoxacarb 4.5% w/w SC</strong> (marketed as <strong>TURBO</strong>) is a dual-action insecticide for controlling bollworms, fruit borers, pod borers, stem borers, and leaf-eating caterpillars in cotton, chilli, tomato, cole crops, soybean, pulses, and vegetables.',
      answerPlain:
        'Novaluron 5.25% + Indoxacarb 4.5% w/w SC (marketed as TURBO) is a dual-action insecticide for controlling bollworms, fruit borers, pod borers, stem borers, and leaf-eating caterpillars in cotton, chilli, tomato, cole crops, soybean, pulses, and vegetables.'
    },
    {
      question: 'How much TURBO should be used per pump?',
      answer:
        'The standard recommended dose of <strong>TURBO</strong> is <strong>20 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of TURBO is 20 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can use TURBO?',
      answer:
        '<strong>TURBO</strong> is used on cotton, chilli, tomato, cabbage, cauliflower, soybean, pulses, and a wide range of vegetables. Follow label recommendations for crop-specific guidance.',
      answerPlain:
        'TURBO is used on cotton, chilli, tomato, cabbage, cauliflower, soybean, pulses, and a wide range of vegetables. Follow label recommendations for crop-specific guidance.'
    },
    {
      question: 'Which pests does TURBO control?',
      answer:
        'TURBO controls <strong>bollworms, fruit borers, pod borers, stem borers, leaf-eating caterpillars, Spodoptera, and Helicoverpa</strong> when applied at early larval stages with thorough coverage.',
      answerPlain:
        'TURBO controls bollworms, fruit borers, pod borers, stem borers, leaf-eating caterpillars, Spodoptera, and Helicoverpa when applied at early larval stages with thorough coverage.'
    },
    {
      question: 'Is TURBO safe for crops?',
      answer:
        'Yes, when used at the recommended dose and timing, TURBO is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, TURBO is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'What is the dose of TURBO?',
      answer:
        'The recommended dose is <strong>20 ml per pump</strong> of a 15-litre knapsack sprayer. Adjust water volume based on crop canopy density and local advisory.',
      answerPlain:
        'The recommended dose is 20 ml per pump of a 15-litre knapsack sprayer. Adjust water volume based on crop canopy density and local advisory.'
    },
    {
      question: 'How does TURBO work against caterpillars?',
      answer:
        'TURBO combines two modes of action: <strong>Indoxacarb</strong> blocks sodium channels for rapid feeding stop, while <strong>Novaluron</strong> inhibits chitin synthesis to disrupt larval moulting.',
      answerPlain:
        'TURBO combines two modes of action: Indoxacarb blocks sodium channels for rapid feeding stop, while Novaluron inhibits chitin synthesis to disrupt larval moulting.'
    },
    {
      question: 'What is the difference between TURBO and single-ingredient insecticides?',
      answer:
        'TURBO delivers <strong>two complementary actives</strong> in one spray — knockdown plus IGR residual — whereas single-ingredient products cover only one mode of action and may need tank mixes.',
      answerPlain:
        'TURBO delivers two complementary actives in one spray — knockdown plus IGR residual — whereas single-ingredient products cover only one mode of action and may need tank mixes.'
    },
    {
      question: 'Can TURBO be used for cotton bollworm control?',
      answer:
        'Yes. <strong>TURBO</strong> is widely used for cotton bollworm and Helicoverpa management during square and boll formation when applied at economic threshold.',
      answerPlain:
        'Yes. TURBO is widely used for cotton bollworm and Helicoverpa management during square and boll formation when applied at economic threshold.'
    },
    {
      question: 'Is TURBO effective against Spodoptera?',
      answer:
        'TURBO provides strong activity against <strong>Spodoptera litura</strong> and related species when sprayed on young larvae with good coverage of leaf undersides.',
      answerPlain:
        'TURBO provides strong activity against Spodoptera litura and related species when sprayed on young larvae with good coverage of leaf undersides.'
    },
    {
      question: 'How do I mix TURBO for spraying?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>20 ml of TURBO</strong>, top up with water, and agitate. The SC formulation disperses easily for a uniform spray mix.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 20 ml of TURBO, top up with water, and agitate. The SC formulation disperses easily for a uniform spray mix.'
    },
    {
      question: 'What pack sizes are available for TURBO?',
      answer:
        '<strong>TURBO</strong> is available in <strong>250 ml, 500 ml, and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability in your area.',
      answerPlain:
        'TURBO is available in 250 ml, 500 ml, and 1 LTR packs. Contact Harishree Crop Science for dealer availability in your area.'
    },
    {
      question: 'What is the shelf life of TURBO?',
      answer:
        'When stored sealed in a cool, dry place, <strong>TURBO</strong> has a shelf life of approximately <strong>24 months</strong> from the date of manufacture.',
      answerPlain:
        'When stored sealed in a cool, dry place, TURBO has a shelf life of approximately 24 months from the date of manufacture.'
    },
    {
      question: 'Is TURBO compatible with other pesticides?',
      answer:
        'It is generally compatible with commonly used products, but always perform a <strong>jar test</strong> before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with commonly used products, but always perform a jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'When is the best time to spray TURBO?',
      answer:
        'Spray at <strong>early larval infestation</strong> or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage.',
      answerPlain:
        'Spray at early larval infestation or when pests reach economic threshold, preferably during calm morning or evening hours for best coverage.'
    },
    {
      question: 'What precautions should I take when using TURBO?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash after use, and store safely away from children and food.'
    },
    {
      question: 'What is Novaluron in TURBO?',
      answer:
        '<strong>Novaluron</strong> is a benzoylurea insect growth regulator (IRAC Group 15) that prevents caterpillars from completing moulting by inhibiting chitin formation.',
      answerPlain:
        'Novaluron is a benzoylurea insect growth regulator (IRAC Group 15) that prevents caterpillars from completing moulting by inhibiting chitin formation.'
    },
    {
      question: 'What is Indoxacarb in TURBO?',
      answer:
        '<strong>Indoxacarb</strong> is an oxadiazine insecticide (IRAC Group 22A) that blocks sodium channels in caterpillar nerve cells, stopping feeding quickly after ingestion.',
      answerPlain:
        'Indoxacarb is an oxadiazine insecticide (IRAC Group 22A) that blocks sodium channels in caterpillar nerve cells, stopping feeding quickly after ingestion.'
    },
    {
      question: 'Can TURBO be used in chilli crops?',
      answer:
        'Yes. <strong>TURBO</strong> is a popular chilli insecticide for fruit borers and Spodoptera when applied at the right crop stage with 20 ml per pump.',
      answerPlain:
        'Yes. TURBO is a popular chilli insecticide for fruit borers and Spodoptera when applied at the right crop stage with 20 ml per pump.'
    },
    {
      question: 'What is the technical name of TURBO insecticide?',
      answer:
        'The technical composition is <strong>Novaluron 5.25% + Indoxacarb 4.5% w/w SC</strong>. TURBO is the brand name under which Harishree Crop Science markets this product.',
      answerPlain:
        'The technical composition is Novaluron 5.25% + Indoxacarb 4.5% w/w SC. TURBO is the brand name under which Harishree Crop Science markets this product.'
    },
    {
      question: 'Is TURBO a broad spectrum insecticide?',
      answer:
        'TURBO is a <strong>broad-spectrum lepidopteran insecticide</strong> focused on caterpillars and borers. It is not primarily designed for sucking pests like aphids or whiteflies.',
      answerPlain:
        'TURBO is a broad-spectrum lepidopteran insecticide focused on caterpillars and borers. It is not primarily designed for sucking pests like aphids or whiteflies.'
    },
    {
      question: 'How does TURBO compare to traditional pyrethroid sprays?',
      answer:
        'Unlike pyrethroids that rely on a single nerve-action MOA, <strong>TURBO</strong> combines IGR and oxadiazine chemistry for stronger caterpillar control and better resistance-management value.',
      answerPlain:
        'Unlike pyrethroids that rely on a single nerve-action MOA, TURBO combines IGR and oxadiazine chemistry for stronger caterpillar control and better resistance-management value.'
    }
  ];

  testimonials = [
    { name: 'Ramesh', location: 'Gujarat', text: 'TURBO gave excellent bollworm control in my cotton. Larvae stopped feeding within two days and the crop stayed clean.', rating: 5 },
    { name: 'Suresh', location: 'Maharashtra', text: 'I used TURBO on chilli for Spodoptera. The dual-action formula worked better than my old single-product spray.', rating: 5 },
    { name: 'Kiran', location: 'Karnataka', text: '20 ml per pump is easy to remember. TURBO mixed smoothly and gave good fruit borer control in tomato.', rating: 5 },
    // { name: 'Prakash', location: 'Andhra Pradesh', text: 'Pod borer damage in my pigeon pea dropped noticeably after one well-timed TURBO spray at pod set.', rating: 4 },
    // { name: 'Anil', location: 'Rajasthan', text: 'Harishree TURBO is now my go-to for caterpillar outbreaks. Residual effect lasted longer than expected.', rating: 5 },
    // { name: 'Vijay', location: 'Tamil Nadu', text: 'Cabbage diamondback moth pressure reduced after TURBO. Heads were cleaner at harvest.', rating: 4 },
    // { name: 'Hitesh', location: 'Gujarat', text: 'Good results on soybean pod borer. I rotate TURBO with other MOAs for resistance management.', rating: 5 },
    // { name: 'Mahesh', location: 'Madhya Pradesh', text: 'The SC formulation spreads well. TURBO controlled Helicoverpa in my tomato field effectively.', rating: 5 },
    // { name: 'Dinesh', location: 'Gujarat', text: 'Dealer recommended TURBO for cotton bollworm. Visible improvement in boll quality after spraying.', rating: 4 },
    // { name: 'Bhavesh', location: 'Gujarat', text: 'Reliable caterpillar control across seasons. TURBO has become a fixed part of my IPM program.', rating: 5 }
  ];

  aggregateRating = {
    ratingValue: '4.9',
    reviewCount: '67',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure TURBO', text: 'Accurately measure 20 ml of Novaluron 5.25% + Indoxacarb 4.5% SC (TURBO) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 20 ml into the water. The SC formulation disperses easily into a uniform suspension.' },
    { name: 'Spraying — top up and agitate', text: 'Fill the rest of the tank with water and agitate gently. Spray within the same day for best results.' },
    { name: 'Spraying — full canopy coverage', text: 'Spray evenly over foliage in calm weather, covering leaf undersides where caterpillars and borers feed.' },
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
      productImageAlt: 'TURBO Novaluron 5.25% + Indoxacarb 4.5% w/w SC Insecticide',
      productImageCaption: 'TURBO Novaluron 5.25% + Indoxacarb 4.5% w/w SC insecticide pack by Harishree Crop Science',
      description:
        'TURBO (Novaluron 5.25% + Indoxacarb 4.5% w/w SC) by Harishree Crop Science is a premium dual-action insecticide for bollworms, fruit borers, pod borers, and caterpillars in cotton, chilli, tomato, and vegetables. Dose: 20 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'TURBO-NOVALURON-INDOXACARB-SC',
      mpn: 'TURBO-NOVALURON-INDOXACARB-SC',
      dose: '20 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply TURBO (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of TURBO (Novaluron 5.25% + Indoxacarb 4.5% w/w SC) for foliar application at 20 ml/pump.',
      alternateNames: [
        'TURBO',
        'TURBO Insecticide',
        'TURBO Novaluron Indoxacarb',
        'Novaluron 5.25 Indoxacarb 4.5 SC',
        'Novaluron + Indoxacarb Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `TURBO (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout']
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Novaluron 5.25% + Indoxacarb 4.5% w/w SC (TURBO) dual-action insecticide by Harishree Crop Science. Broad-spectrum control of bollworms, fruit borers & caterpillars. Dose: 20 ml/pump.';

    this.seo.setAll(
      {
        title: 'Novaluron 5.25% + Indoxacarb 4.5% w/w SC | TURBO Insecticide | Harishree',
        description: desc,
        keywords:
          'Novaluron 5.25% + Indoxacarb 4.5% w/w SC, TURBO, Novaluron 5.25 Indoxacarb 4.5 SC, Novaluron + Indoxacarb Insecticide, Novaluron 5.25% SC, Indoxacarb 4.5% SC, Novaluron Insecticide, Indoxacarb Insecticide, Caterpillar Control Insecticide, Bollworm Control Insecticide, Pod Borer Control Insecticide, Fruit Borer Control, Stem Borer Control, Cotton Insecticide, Chilli Insecticide, Tomato Insecticide, Broad Spectrum Insecticide, Best Insecticide for Caterpillars, Best Insecticide for Cotton, Agricultural Insecticide, Crop Protection Solution, TURBO Insecticide, TURBO Novaluron Indoxacarb, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Novaluron 5.25% + Indoxacarb 4.5% w/w SC (TURBO) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Novaluron 5.25% + Indoxacarb 4.5% w/w SC | TURBO Insecticide',
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
