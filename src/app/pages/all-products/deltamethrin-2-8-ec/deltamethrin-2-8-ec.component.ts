import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import {
  getOfferPriceValidUntil,
  merchantReturnPolicySchema,
  offerShippingDetailsSchema
} from '../../../shared/schema/product-offer-jsonld';

const META_KEY = makeStateKey<boolean>('DELTA28_META');
const ORG_SCHEMA_KEY = makeStateKey<string>('DELTA28_ORG_SCHEMA');
const LOCALBUSINESS_SCHEMA_KEY = makeStateKey<string>('DELTA28_LB_SCHEMA');
const WEBPAGE_SCHEMA_KEY = makeStateKey<string>('DELTA28_WEBPAGE_SCHEMA');
const BREADCRUMB_SCHEMA_KEY = makeStateKey<string>('DELTA28_BREADCRUMB_SCHEMA');
const PRODUCT_SCHEMA_KEY = makeStateKey<string>('DELTA28_PRODUCT_SCHEMA');
const ITEMLIST_SCHEMA_KEY = makeStateKey<string>('DELTA28_ITEMLIST_SCHEMA');
const FAQ_SCHEMA_KEY = makeStateKey<string>('DELTA28_FAQ_SCHEMA');
const HOWTO_SCHEMA_KEY = makeStateKey<string>('DELTA28_HOWTO_SCHEMA');

/** Indicative list price for schema only; pack-wise offers. */
const INDICATIVE_LIST_PRICE_INR = 141;

@Component({
  selector: 'app-deltamethrin-2-8-ec',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deltamethrin-2-8-ec.component.html',
  styleUrl: './deltamethrin-2-8-ec.component.scss'
})
export class Deltamethrin28EcComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/deltamethrin-2-8-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;

  /** Used for hero + og image and JSON-LD. */
  readonly productImageUrl = `${this.baseUrl}/assets/products/insecticide/dr-delta.jpg`;

  productTitle = 'Deltamethrin 2.8% EC';

  packSizes = [
    { volume: '250 ml', price: 141, featured: false, sku: 'DR-DELTA-250ML' },
    { volume: '500 ml', price: 254, featured: true, sku: 'DR-DELTA-500ML' },
    { volume: '1 LTR', price: 484, featured: false, sku: 'DR-DELTA-1LTR' }
  ];

  quickHighlights = [
    { title: 'Fast knockdown action', description: 'Pests stop feeding within minutes of contact for rapid, visible relief.', icon: 'fas fa-bolt' },
    { title: 'Broad spectrum control', description: 'Manages bollworms, caterpillars, thrips, aphids, jassids, and whiteflies together.', icon: 'fas fa-shield-alt' },
    { title: 'Long residual effect', description: 'A stable EC film keeps protecting foliage between spray windows.', icon: 'fas fa-clock' },
    { title: 'Easy application', description: 'Mixes cleanly in water at 15 ml/pump with no nozzle clogging.', icon: 'fas fa-spray-can' }
  ];

  keyBenefits = [
    {
      title: 'Lightning-fast knockdown',
      description:
        'Deltamethrin 2.8% EC is a Type II synthetic pyrethroid that disrupts insect nerves on contact, delivering quick paralysis and visible pest reduction soon after spraying.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad-spectrum pest control',
      description:
        'DR. DELTA controls a wide pest complex including bollworms, caterpillars, thrips, aphids, jassids, and whiteflies across cotton, chilli, vegetables, and pulses.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Strong residual protection',
      description:
        'The advanced emulsifiable concentrate spreads evenly and resists wash-off, extending protection so fewer sprays are needed during peak pest pressure.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Both contact and stomach action',
      description:
        'Deltamethrin works on contact and through ingestion, hitting hidden larvae and exposed sucking pests for dependable, all-round field performance.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Low dose, high efficiency',
      description:
        'A simple 15 ml per pump dose keeps spray costs low while the high intrinsic activity of deltamethrin delivers excellent value per acre.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Crop-safe when label-directed',
      description:
        'Used at the recommended dose and timing, DR. DELTA is gentle on crops and fits neatly into integrated pest management and resistance-rotation plans.',
      icon: 'fas fa-seedling'
    }
  ];

  targetPests = [
    {
      name: 'Bollworms',
      description:
        'Strong control of American, pink, and spotted bollworm larvae that bore into cotton bolls and reduce lint quality and yield.'
    },
    {
      name: 'Caterpillars',
      description:
        'Effective against leaf-eating caterpillars and fruit borers in vegetables, pulses, and oilseeds when sprayed at early larval stages.'
    },
    {
      name: 'Thrips',
      description:
        'Reduces thrips populations that cause leaf curling, silvering, and scarring on chilli, cotton, and vegetable crops.'
    },
    {
      name: 'Aphids',
      description:
        'Knocks down sap-sucking aphid colonies that weaken plants and spread viral diseases across multiple crops.'
    },
    {
      name: 'Jassids',
      description:
        'Controls jassids (leafhoppers) responsible for hopper burn, leaf yellowing, and stunted growth in cotton and okra.'
    },
    {
      name: 'Whiteflies',
      description:
        'Suppresses whitefly activity on cotton, brinjal, and tomato, helping limit sooty mould and virus transmission.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'A trusted choice against bollworms, jassids, thrips, and whiteflies during the high-pressure flowering and boll stages.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description: 'Controls thrips and fruit-damaging caterpillars to protect pod set, colour, and marketable quality.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Brinjal',
      description: 'Targets shoot and fruit borers along with sucking pests to keep brinjal fruits clean and tender.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Tomato',
      description: 'Manages fruit borers, aphids, and whiteflies to reduce fruit drop and improve harvest grade.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Okra',
      description: 'Protects against jassids, fruit borers, and whiteflies for straight, healthy, blemish-free pods.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Cabbage & Cauliflower',
      description: 'Controls diamondback moth and leaf-eating caterpillars that damage heads and curds in cole crops.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Pulses',
      description: 'Defends pod borers and defoliators in gram, pigeon pea, and other pulses during pod development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Oilseeds',
      description: 'Safeguards mustard, groundnut, and soybean from caterpillars and sucking pests in active growth.',
      icon: 'fas fa-sun'
    }
  ];

  technicalSpecs: { productInfo: Array<{ label: string; value: string }>; packs: Array<{ label: string; value: string }> } = {
    productInfo: [
      { label: 'Product name', value: 'DR. DELTA' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Concentration / Composition', value: 'Deltamethrin 2.8% EC' },
      { label: 'Insecticide type', value: 'Contact and stomach pyrethroid insecticide' },
      { label: 'Chemical group', value: 'Synthetic Pyrethroid (Type II)' },
      {
        label: 'Mode of action',
        value: 'Disrupts sodium channels in the insect nervous system; rapid contact and stomach action'
      },
      { label: 'Action type', value: 'Contact and stomach poison' },
      {
        label: 'Target pests',
        value: 'Bollworms, Caterpillars, Thrips, Aphids, Jassids, Whiteflies and other sucking pests'
      },
      { label: 'Target crops', value: 'Cotton, Chilli, Brinjal, Tomato, Okra, Cabbage, Cauliflower, Pulses, Oilseeds' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '15 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early pest infestation or as per ETL/label' },
      { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries on foliage' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides (jar test before mixing)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  /** Exact parameter rows for the technical spec table and JSON-LD additionalProperty. */
  officialProductDetails = [
    { label: 'Product Name', value: 'DR. DELTA' },
    { label: 'Brand / Trade Name', value: 'DR. DELTA' },
    { label: 'Technical Composition', value: 'Deltamethrin 2.8% EC' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Insecticide Type', value: 'Contact and stomach pyrethroid insecticide' },
    { label: 'Chemical Group', value: 'Synthetic Pyrethroid (Type II)' },
    {
      label: 'Mode of Action',
      value:
        'Acts on the insect nervous system by keeping sodium channels open, causing hyper-excitation and paralysis; contact and stomach action'
    },
    { label: 'Action Type', value: 'Contact and stomach poison' },
    {
      label: 'Target Pests',
      value: 'Bollworms, Caterpillars, Thrips, Aphids, Jassids, Whiteflies and other sucking pests'
    },
    { label: 'Target Crops', value: 'Cotton, Chilli, Brinjal, Tomato, Okra, Cabbage, Cauliflower, Pulses, Oilseeds' },
    { label: 'Recommended Dose', value: '15 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early pest infestation or as per ETL/label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides (always jar test first)' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Formulation Type', value: 'EC' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (250 ml, 500 ml, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'Rapid contact uptake',
      description:
        'On spraying, Deltamethrin 2.8% EC quickly contacts the insect cuticle and is absorbed, while crawling and feeding pests also ingest the deposit.'
    },
    {
      title: 'Sodium channel disruption',
      description:
        'As a Type II pyrethroid, deltamethrin keeps voltage-gated sodium channels open in nerve cells, causing continuous firing of the insect nervous system.'
    },
    {
      title: 'Hyper-excitation and paralysis',
      description:
        'The sustained nerve activity leads to tremors, loss of coordination, and rapid paralysis of the pest within minutes of exposure.'
    },
    {
      title: 'Feeding stops and pest dies',
      description:
        'Affected insects stop feeding almost immediately, halting further crop damage, and die shortly after, protecting yield and quality.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, full protective clothing, a fitted mask, and eye protection when handling the concentrate or spray mix.'
    },
    {
      title: 'Accurate 15 ml dose',
      text: 'Measure exactly 15 ml per pump to maintain efficacy, protect crops, and slow the build-up of pest resistance.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Spray during calm hours and cover leaf undersides where caterpillars, thrips, and whiteflies hide for best results.'
    },
    {
      title: 'Protect the environment',
      text: 'Do not spray near water bodies or during active bee foraging; pyrethroids are toxic to fish and pollinators.'
    },
    {
      title: 'Storage and disposal',
      text: 'Store upright in a cool, dry place away from children and feed. Triple-rinse and puncture empty containers before safe disposal.'
    },
    {
      title: 'First aid readiness',
      text: 'In case of contact, wash thoroughly with soap and water; if swallowed or symptoms appear, seek medical help with the product label.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Quick knockdown',
      value: 'Visible drop in pest activity within minutes to hours of a well-timed, well-covered spray.'
    },
    {
      label: 'Clean produce',
      value: 'Fewer borer holes and feeding marks help improve marketable grade in cotton, chilli, and vegetables.'
    },
    {
      label: 'Residual cover',
      value: 'The EC deposit keeps working between sprays, reducing the number of applications during peak pressure.'
    },
    {
      label: 'Value per acre',
      value: 'A low 15 ml/pump dose and strong activity deliver cost-effective, dependable pest control.'
    }
  ];

  whyChoose = [
    {
      title: 'Premium EC formulation',
      description:
        'DR. DELTA uses an advanced solvent and emulsifier system that improves spread, leaf coverage, and rainfastness for consistent results.',
      icon: 'fas fa-award'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured by Harishree Crop Science with strict quality control, dealer support, and reliable batch-to-batch consistency.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Resistance-smart chemistry',
      description:
        'A pyrethroid mode of action makes DR. DELTA a strong rotation partner with neonicotinoids and diamides in IPM programs.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Simple, farmer-friendly dose',
      description:
        'An easy 15 ml per pump recommendation removes guesswork and keeps spray preparation fast and accurate in the field.',
      icon: 'fas fa-hand-holding-water'
    }
  ];

  relatedProducts = [
    {
      name: 'DELTA PLUS (Deltamethrin 11% w/w EC)',
      description: 'High-strength deltamethrin pyrethroid for bollworms, borers, caterpillars, thrips, and aphids.',
      route: '/products/insecticide/deltamethrin-11-w-w-ec-delta-plus',
      image: 'assets/products/insecticide/deltamethrin-11-w-w-ec.png',
      imageAlt: 'DELTA PLUS Deltamethrin 11% w/w EC insecticide by Harishree Crop Science'
    },
    {
      name: 'Cypermethrin 25% EC',
      description: 'Fast-acting synthetic pyrethroid for broad-spectrum chewing and sucking pest control.',
      route: '/product/cypermethrin-25-ec',
      image: 'assets/products/insecticide/cypermethrin-25-ec.jpg',
      imageAlt: 'Cypermethrin 25% EC insecticide pack by Harishree Crop Science'
    },
    {
      name: 'Chlorpyriphos 50% + Cypermethrin 5% EC',
      description: 'Dual-action combination insecticide for tough, mixed pest pressure.',
      route: '/product/chlorpyriphos-50-cypermethrin-5-ec',
      image: 'assets/products/chlorpyriphos-50-cypermethrin-5-ec.png',
      imageAlt: 'Chlorpyriphos 50% plus Cypermethrin 5% EC combination insecticide by Harishree Crop Science'
    },
    {
      name: 'Thiamethoxam 75% SG',
      description: 'High-strength systemic neonicotinoid for aphids, jassids, whiteflies, and thrips.',
      route: '/product/thiamethoxam-75-sg',
      image: 'assets/products/insecticide/thiamethoxam-75-sg.jpg',
      imageAlt: 'Thiamethoxam 75% SG Thio-H 75 insecticide pack by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Deltamethrin 2.8% EC (DR. DELTA) used for?',
      answer:
        '<strong>Deltamethrin 2.8% EC</strong> (marketed as <strong>DR. DELTA</strong>) is a fast-acting synthetic pyrethroid insecticide used to control bollworms, caterpillars, thrips, aphids, jassids, and whiteflies in cotton, chilli, vegetables, pulses, and oilseeds.',
      answerPlain:
        'Deltamethrin 2.8% EC (marketed as DR. DELTA) is a fast-acting synthetic pyrethroid insecticide used to control bollworms, caterpillars, thrips, aphids, jassids, and whiteflies in cotton, chilli, vegetables, pulses, and oilseeds.'
    },
    {
      question: 'What is the recommended dose of Deltamethrin 2.8% EC?',
      answer:
        'The standard recommended dose of <strong>DR. DELTA</strong> is <strong>15 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of DR. DELTA is 15 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'How does Deltamethrin 2.8% EC work against pests?',
      answer:
        'Deltamethrin is a Type II pyrethroid that disrupts sodium channels in the insect nervous system. This causes hyper-excitation and rapid paralysis, so pests stop feeding within minutes and die soon after.',
      answerPlain:
        'Deltamethrin is a Type II pyrethroid that disrupts sodium channels in the insect nervous system. This causes hyper-excitation and rapid paralysis, so pests stop feeding within minutes and die soon after.'
    },
    {
      question: 'Which crops can DR. DELTA be used on?',
      answer:
        '<strong>DR. DELTA</strong> is widely used on cotton, chilli, brinjal, tomato, okra, cabbage, cauliflower, pulses, and oilseeds. Always follow label recommendations for crop-specific use.',
      answerPlain:
        'DR. DELTA is widely used on cotton, chilli, brinjal, tomato, okra, cabbage, cauliflower, pulses, and oilseeds. Always follow label recommendations for crop-specific use.'
    },
    {
      question: 'Which pests does Deltamethrin 2.8 EC control?',
      answer:
        'It controls a broad pest complex including <strong>bollworms, caterpillars, fruit and shoot borers, thrips, aphids, jassids, and whiteflies</strong>, along with other sucking pests on labeled crops.',
      answerPlain:
        'It controls a broad pest complex including bollworms, caterpillars, fruit and shoot borers, thrips, aphids, jassids, and whiteflies, along with other sucking pests on labeled crops.'
    },
    {
      question: 'Is Deltamethrin 2.8% EC a contact or systemic insecticide?',
      answer:
        'Deltamethrin 2.8% EC is a <strong>contact and stomach</strong> insecticide, not systemic. It works on direct contact and when pests ingest treated plant surfaces, so thorough spray coverage is important.',
      answerPlain:
        'Deltamethrin 2.8% EC is a contact and stomach insecticide, not systemic. It works on direct contact and when pests ingest treated plant surfaces, so thorough spray coverage is important.'
    },
    {
      question: 'How fast does DR. DELTA work?',
      answer:
        'Being a pyrethroid, <strong>DR. DELTA</strong> gives a fast knockdown. Affected pests usually stop feeding within minutes of contact, with visible reduction in pest activity within hours.',
      answerPlain:
        'Being a pyrethroid, DR. DELTA gives a fast knockdown. Affected pests usually stop feeding within minutes of contact, with visible reduction in pest activity within hours.'
    },
    {
      question: 'How do I mix and spray Deltamethrin 2.8% EC?',
      answer:
        'Half-fill the sprayer with clean water, add <strong>15 ml of DR. DELTA per pump</strong>, top up with water, and agitate. Spray uniformly on foliage including leaf undersides during calm weather.',
      answerPlain:
        'Half-fill the sprayer with clean water, add 15 ml of DR. DELTA per pump, top up with water, and agitate. Spray uniformly on foliage including leaf undersides during calm weather.'
    },
    {
      question: 'Which pack sizes are available for DR. DELTA?',
      answer:
        '<strong>DR. DELTA</strong> (Deltamethrin 2.8% EC) is available in convenient <strong>250 ml, 500 ml, and 1 LTR</strong> packs. Contact Harishree Crop Science for dealer availability.',
      answerPlain:
        'DR. DELTA (Deltamethrin 2.8% EC) is available in convenient 250 ml, 500 ml, and 1 LTR packs. Contact Harishree Crop Science for dealer availability.'
    },
    {
      question: 'Is Deltamethrin 2.8% EC safe for crops?',
      answer:
        'Yes, when used at the recommended dose and timing, Deltamethrin 2.8% EC is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.',
      answerPlain:
        'Yes, when used at the recommended dose and timing, Deltamethrin 2.8% EC is crop-safe on labeled crops. Avoid overdosing and always follow the label to protect the crop and beneficial insects.'
    },
    {
      question: 'Can DR. DELTA be used for cotton pest control?',
      answer:
        'Absolutely. <strong>DR. DELTA</strong> is a popular cotton pest control insecticide, especially effective against bollworms, jassids, thrips, and whiteflies during flowering and boll formation.',
      answerPlain:
        'Absolutely. DR. DELTA is a popular cotton pest control insecticide, especially effective against bollworms, jassids, thrips, and whiteflies during flowering and boll formation.'
    },
    {
      question: 'What precautions should I take while using Deltamethrin 2.8 EC?',
      answer:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash thoroughly after use, and store the product safely away from children, food, and feed.',
      answerPlain:
        'Wear full PPE, avoid spraying near water bodies, do not spray during active bee foraging, wash thoroughly after use, and store the product safely away from children, food, and feed.'
    },
    {
      question: 'Is Deltamethrin 2.8% EC compatible with other pesticides?',
      answer:
        'It is generally compatible with most commonly used insecticides and fungicides. Always perform a small jar test before tank-mixing to confirm physical compatibility.',
      answerPlain:
        'It is generally compatible with most commonly used insecticides and fungicides. Always perform a small jar test before tank-mixing to confirm physical compatibility.'
    },
    {
      question: 'What is the shelf life of DR. DELTA?',
      answer:
        'When stored sealed in a cool, dry, ventilated place, <strong>DR. DELTA</strong> has a shelf life of around <strong>24 months</strong> from the date of manufacture. Refer to the pack for the exact expiry.',
      answerPlain:
        'When stored sealed in a cool, dry, ventilated place, DR. DELTA has a shelf life of around 24 months from the date of manufacture. Refer to the pack for the exact expiry.'
    },
    {
      question: 'What is the difference between Deltamethrin 2.8% EC and DR. DELTA?',
      answer:
        '<strong>Deltamethrin 2.8% EC</strong> is the technical composition, while <strong>DR. DELTA</strong> is the brand name under which Harishree Crop Science supplies this deltamethrin insecticide.',
      answerPlain:
        'Deltamethrin 2.8% EC is the technical composition, while DR. DELTA is the brand name under which Harishree Crop Science supplies this deltamethrin insecticide.'
    }
  ];

  testimonials = [
    {
      name: 'Mahesh',
      location: 'Gujarat',
      text: 'DR. DELTA gave very fast control of bollworms in my cotton. The knockdown was visible the same day and the crop stayed clean.',
      rating: 5
    },
    {
      name: 'Dinesh',
      location: 'Gujarat',
      text: 'Just 15 ml per pump and my chilli thrips problem reduced quickly. Mixing is easy and there is no clogging in the sprayer.',
      rating: 5
    },
    {
      name: 'Bhavesh',
      location: 'Gujarat',
      text: 'I used Deltamethrin 2.8% EC on brinjal and okra for borers and jassids. Results were dependable and the produce quality improved.',
      rating: 4
    }
  ];

  howToSteps = [
    { name: 'Wear PPE', text: 'Wear gloves, goggles, and a mask before opening the bottle. Keep children and animals away from the mixing area.' },
    {
      name: 'Measure DR. DELTA',
      text: 'Accurately measure 15 ml of Deltamethrin 2.8% EC (DR. DELTA) for a standard 15-litre knapsack pump.'
    },
    { name: 'Half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide.' },
    {
      name: 'Add product and stir',
      text: 'Pour the measured 15 ml into the water. The EC formulation emulsifies easily for a uniform spray mix.'
    },
    {
      name: 'Top up and agitate',
      text: 'Fill the rest of the tank with water and agitate gently to ensure an even solution.'
    },
    {
      name: 'Spray with full coverage',
      text: 'Spray evenly over foliage in calm weather, covering leaf undersides where pests hide for maximum efficacy.'
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.setMetaData();
    this.injectStructuredData();
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({ duration: 800, easing: 'ease-in-out', once: true });
    }
  }

  ngOnDestroy(): void {
    this.transferState.remove(META_KEY);
    this.transferState.remove(ORG_SCHEMA_KEY);
    this.transferState.remove(LOCALBUSINESS_SCHEMA_KEY);
    this.transferState.remove(WEBPAGE_SCHEMA_KEY);
    this.transferState.remove(BREADCRUMB_SCHEMA_KEY);
    this.transferState.remove(PRODUCT_SCHEMA_KEY);
    this.transferState.remove(ITEMLIST_SCHEMA_KEY);
    this.transferState.remove(FAQ_SCHEMA_KEY);
    this.transferState.remove(HOWTO_SCHEMA_KEY);
  }

  private setMetaData(): void {
    if (this.transferState.hasKey(META_KEY)) {
      return;
    }

    this.title.setTitle('Deltamethrin 2.8% EC | DR. DELTA Insecticide | Harishree');
    const desc =
      'Buy Deltamethrin 2.8% EC (DR. DELTA) fast-knockdown pyrethroid insecticide by Harishree Crop Science. Broad-spectrum control of bollworms, caterpillars & sucking pests. Dose: 15 ml/pump.';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: desc },
      {
        name: 'keywords',
        content:
          'Deltamethrin 2.8% EC, DR. DELTA, Deltamethrin 2.8 EC, Deltamethrin 2.8 EC Insecticide, Deltamethrin Insecticide, Deltamethrin 2.8 EC Uses, Deltamethrin 2.8 EC Dose, Deltamethrin EC Insecticide, Best Deltamethrin Insecticide, Cotton Pest Control Insecticide, Agricultural Insecticide, Crop Protection Insecticide, Deltamethrin for Cotton, Deltamethrin for Vegetables, Deltamethrin Technical Details, Deltamethrin Pest Control, DR. DELTA Insecticide, DR. DELTA Deltamethrin 2.8 EC, Harishree Crop Science'
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: environment.metaDefaults.author },
      { name: 'canonical', content: this.pageUrl },
      { property: 'og:title', content: `Deltamethrin 2.8% EC (DR. DELTA) | Harishree Crop Science` },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: this.pageUrl },
      { property: 'og:image', content: this.productImageUrl },
      { property: 'og:locale', content: 'en_IN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Deltamethrin 2.8% EC | DR. DELTA Insecticide' },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: this.productImageUrl }
    ];

    metaTags.forEach((tag) => this.meta.updateTag(tag));
    this.transferState.set(META_KEY, true);
  }

  private injectStructuredData(): void {
    this.setOrganizationSchema();
    this.setLocalBusinessSchema();
    this.setWebPageSchema();
    this.setBreadcrumbSchema();
    this.setProductSchema();
    this.setItemListSchema();
    this.setFaqSchema();
    this.setHowToSchema();
  }

  private addJsonLd(json: object, key: ReturnType<typeof makeStateKey<string>>): void {
    const str = JSON.stringify(json);
    if (this.transferState.hasKey(key)) {
      // Already injected during SSR/SSG; prerendered HTML already contains these scripts.
      return;
    }
    this.transferState.set(key, str);
    this.appendScript(str);
  }

  private appendScript(text: string): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = text;
    this.document.head.appendChild(script);
  }

  private manufacturerAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
      addressLocality:
        'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
      addressRegion: 'Gujarat',
      postalCode: '360110',
      addressCountry: 'IN'
    };
  }

  private departmentPostalAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360110',
      addressCountry: {
        '@type': 'Country',
        name: 'IN'
      }
    };
  }

  private setOrganizationSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${this.baseUrl}/#organization`,
      name: 'Harishree Crop Science',
      url: this.baseUrl,
      logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
      email: 'harishreecropscience@gmail.com',
      telephone: '+919898197196',
      sameAs: [
        'https://twitter.com/harishreecrop',
        'https://www.facebook.com/profile.php?id=61573857659074',
        'https://instagram.com/harishree_crop_science',
        'https://linkedin.com/company/harishree-crop-science'
      ],
      address: this.manufacturerAddress()
    };
    this.addJsonLd(data, ORG_SCHEMA_KEY);
  }

  private setLocalBusinessSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Harishree Crop Science',
      image: `${this.baseUrl}/assets/logo/HARISHREE.png`,
      url: this.baseUrl,
      telephone: '+919898197196',
      email: 'harishreecropscience@gmail.com',
      priceRange: 'INR',
      address: this.manufacturerAddress(),
      areaServed: [
        { '@type': 'City', name: 'Rajkot' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' }
      ],
      department: [
        {
          '@type': 'LocalBusiness',
          name: `DR. DELTA (${this.productTitle})`,
          description:
            'Harishree Crop Science manufacturing and supply unit for DR. DELTA (Deltamethrin 2.8% EC) — a premium fast-knockdown synthetic pyrethroid insecticide for broad-spectrum control of bollworms, caterpillars, and sucking pests in cotton, chilli, vegetables, pulses, and oilseeds.',
          telephone: '+919898197196',
          email: 'harishreecropscience@gmail.com',
          address: this.departmentPostalAddress()
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/harishree-crop-science',
        'https://www.instagram.com/harishree_crop_science',
        'https://www.facebook.com/harishreecropscience'
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.377391787234835',
        longitude: '70.68967331867736'
      }
    };
    this.addJsonLd(data, LOCALBUSINESS_SCHEMA_KEY);
  }

  private setWebPageSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.pageUrl}#webpage`,
      url: this.pageUrl,
      name: `DR. DELTA (${this.productTitle}) by Harishree Crop Science`,
      description:
        `DR. DELTA (Deltamethrin 2.8% EC) product page with dose, crops, pests, safety, and pack guidance. Primary keyword: ${this.productTitle}. Secondary: DR. DELTA.`,
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${this.baseUrl}/#website`,
        url: this.baseUrl,
        name: 'Harishree Crop Science',
        publisher: { '@id': `${this.baseUrl}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${this.baseUrl}/products?search={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: this.productImageUrl,
        caption: `DR. DELTA ${this.productTitle} insecticide pack by Harishree Crop Science`
      },
      breadcrumb: {
        '@id': `${this.pageUrl}#breadcrumb`
      }
    };
    this.addJsonLd(data, WEBPAGE_SCHEMA_KEY);
  }

  private setBreadcrumbSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${this.pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${this.baseUrl}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: `${this.baseUrl}/products`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Insecticides',
          item: `${this.baseUrl}/products`
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: `DR. DELTA (${this.productTitle})`,
          item: this.pageUrl
        }
      ]
    };
    this.addJsonLd(data, BREADCRUMB_SCHEMA_KEY);
  }

  private setProductSchema(): void {
    const prices = this.packSizes.map((p) => p.price);

    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.productTitle,
      alternateName: ['DR. DELTA', 'Deltamethrin 2.8 EC', 'Deltamethrin 2.8% EC Insecticide', 'Deltamethrin EC'],
      description:
        'DR. DELTA (Deltamethrin 2.8% EC) by Harishree Crop Science is a premium fast-knockdown synthetic pyrethroid insecticide for broad-spectrum control of bollworms, caterpillars, thrips, aphids, jassids, and whiteflies in cotton, chilli, vegetables, pulses, and oilseeds. Dose: 15 ml/pump.',
      image: [this.productImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: 'DR. DELTA',
      category: 'Agricultural Insecticide',
      sku: 'DR-DELTA-2.8-EC',
      material: 'EC (Emulsifiable Concentrate)',
      activeIngredient: 'Deltamethrin 2.8% EC',
      additionalProperty: [
        ...this.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        {
          '@type': 'PropertyValue',
          name: 'Indicative list price (all taxes)',
          value: `INR ${INDICATIVE_LIST_PRICE_INR}`
        },
        {
          '@type': 'PropertyValue',
          name: 'DR. DELTA dose per pump',
          value: '15 ml/pump'
        },
        { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Deltamethrin 2.8% EC' },
        { '@type': 'PropertyValue', name: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
        { '@type': 'PropertyValue', name: 'Chemical group', value: 'Synthetic Pyrethroid (Type II)' },
        { '@type': 'PropertyValue', name: 'Manufacturer', value: 'Harishree Crop Science' }
      ],
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: this.baseUrl,
        logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
        address: this.manufacturerAddress()
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '53',
        bestRating: '5',
        worstRating: '1'
      },
      review: this.testimonials.map((item) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: item.name
        },
        reviewBody: item.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: item.rating.toString(),
          bestRating: '5'
        }
      })),
      offers: {
        '@type': 'AggregateOffer',
        offerCount: this.packSizes.length,
        lowPrice: Math.min(...prices).toString(),
        highPrice: Math.max(...prices).toString(),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: this.pageUrl,
        priceValidUntil: getOfferPriceValidUntil(),
        hasMerchantReturnPolicy: merchantReturnPolicySchema(),
        shippingDetails: offerShippingDetailsSchema(),
        seller: { '@id': `${this.baseUrl}/#organization` }
      }
    };
    this.addJsonLd(data, PRODUCT_SCHEMA_KEY);
  }

  private setItemListSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Deltamethrin 2.8% EC (DR. DELTA) pack sizes',
      description: 'Harishree Crop Science DR. DELTA (Deltamethrin 2.8% EC) pack sizes with schema-only pricing.',
      numberOfItems: this.packSizes.length,
      itemListElement: this.packSizes.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: `Deltamethrin 2.8% EC (DR. DELTA) ${p.volume}`,
          image: this.productImageUrl,
          sku: p.sku,
          description: `Deltamethrin 2.8% EC (DR. DELTA) ${p.volume} pack - ${p.price} INR`,
          brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
          manufacturer: {
            '@type': 'Organization',
            name: 'Harishree Crop Science',
            url: this.baseUrl,
            logo: `${this.baseUrl}/assets/logo/HARISHREE.png`,
            address: this.manufacturerAddress()
          },
          category: 'Agricultural Insecticide',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Active ingredient', value: 'Deltamethrin 2.8% EC' },
            { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
            { '@type': 'PropertyValue', name: 'Recommended dose', value: '15 ml/pump' },
            { '@type': 'PropertyValue', name: 'Water volume', value: '15-litre knapsack sprayer' },
            { '@type': 'PropertyValue', name: 'Application method', value: 'Foliar spray using knapsack or power sprayer' }
          ],
          offers: {
            '@type': 'Offer',
            price: p.price.toString(),
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: this.pageUrl,
            priceValidUntil: getOfferPriceValidUntil(),
            hasMerchantReturnPolicy: merchantReturnPolicySchema(),
            shippingDetails: offerShippingDetailsSchema(),
            seller: { '@id': `${this.baseUrl}/#organization` }
          }
        }
      }))
    };
    this.addJsonLd(data, ITEMLIST_SCHEMA_KEY);
  }

  private setFaqSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answerPlain
        }
      }))
    };
    this.addJsonLd(data, FAQ_SCHEMA_KEY);
  }

  private setHowToSchema(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `How to mix and apply DR. DELTA (${this.productTitle})`,
      description:
        'Field steps for preparing a knapsack sprayer tank of DR. DELTA (Deltamethrin 2.8% EC) for foliar application at 15 ml/pump.',
      image: this.productImageUrl,
      totalTime: 'PT15M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: String(INDICATIVE_LIST_PRICE_INR)
      },
      supply: [
        { '@type': 'HowToSupply', name: 'DR. DELTA (Deltamethrin 2.8% EC)' },
        { '@type': 'HowToSupply', name: 'Clean water' }
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer (15 Litre)' },
        { '@type': 'HowToTool', name: 'Measuring cup' },
        { '@type': 'HowToTool', name: 'Personal Protective Equipment (PPE)' }
      ],
      step: this.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        image: this.productImageUrl
      }))
    };
    this.addJsonLd(data, HOWTO_SCHEMA_KEY);
  }
}
