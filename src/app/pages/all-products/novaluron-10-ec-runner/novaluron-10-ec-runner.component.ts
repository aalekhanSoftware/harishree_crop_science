import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'RUNNER_NOVALURON_10_EC';
const INDICATIVE_LIST_PRICE_INR = 720;

@Component({
  selector: 'app-novaluron-10-ec-runner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './novaluron-10-ec-runner.component.html',
  styleUrl: './novaluron-10-ec-runner.component.scss'
})
export class Novaluron10EcRunnerComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/novaluron-10-ec-runner';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/novaluron-10-ec.png';
  readonly productImageWebpPath = 'assets/products/insecticide/novaluron-10-ec.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'NOVALURON 10% EC';
  brandName = 'RUNNER';

  featuredSnippetAnswer =
    'NOVALURON 10% EC (RUNNER) is a premium emulsifiable concentrate insect growth regulator by Harishree Crop Science for controlling fruit borers, pod borers, bollworms, Spodoptera, armyworms, diamondback moth, and leaf-eating caterpillars on cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, and vegetables. Recommended dose: 20 ml per pump.';

  packSizes = [
    { volume: '100 ML', price: 153, featured: false, sku: 'RUNNER-100ML' },
    { volume: '250 ML', price: 366, featured: false, sku: 'RUNNER-250ML' },
    { volume: '500 ML', price: 720, featured: true, sku: 'RUNNER-500ML' },
    { volume: '1 LTR', price: 1416, featured: false, sku: 'RUNNER-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dedicated IGR technology',
      description:
        'RUNNER delivers Novaluron 10% EC — a benzoylurea insect growth regulator that disrupts caterpillar moulting for sustained larval population suppression across field and vegetable crops.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Caterpillar & borer control',
      description:
        'Targets fruit borers, pod borers, bollworms, Spodoptera, armyworms, diamondback moth, and leaf-eating caterpillars through chitin synthesis inhibition at early larval stages.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual IGR activity',
      description:
        'The EC formulation deposits evenly on foliage, maintaining insect growth regulator activity against newly hatched larvae between scheduled spray intervals.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Broad lepidopteran spectrum',
      description:
        'Controls multiple caterpillar and borer species across cotton, chilli, tomato, cole crops, pulses, soybean, and mixed vegetable programs when applied at economic threshold.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Crop safety at label dose',
      description:
        'When used at the recommended 20 ml per pump dose and correct timing, RUNNER supports crop safety on labeled horticulture and field crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Healthier harvest potential',
      description:
        'By reducing borer holes and defoliation damage, RUNNER helps preserve leaf area, fruit quality, and overall crop vigour through critical growth windows.',
      icon: 'fas fa-seedling'
    }
  ];

  keyBenefits = [
    {
      title: 'Effective fruit borer management',
      description:
        'RUNNER suppresses shoot and fruit borer larvae in tomato, brinjal, and chilli that bore into tender fruits and reduce marketable grade at harvest.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Reliable bollworm control',
      description:
        'Novaluron IGR activity helps manage cotton bollworm and Helicoverpa larvae during square, flowering, and boll development when sprayed at early infestation.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Extended larval protection',
      description:
        'Residual IGR activity on treated foliage protects crops from caterpillar resurgence during peak borer pressure seasons without relying solely on contact knockdown.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved canopy health',
      description:
        'Reduced defoliation from armyworms and leaf-eating caterpillars preserves green leaf area, supporting stronger plant development through flowering and fruit set.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Reduced pod and boll damage',
      description:
        'Timely RUNNER sprays limit pod borer entry in pulses and soybean and bollworm feeding scars in cotton that weaken yield and quality.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'IPM rotation value',
      description:
        'Distinct IRAC Group 15 chemistry makes RUNNER a valuable rotation partner alongside contact insecticides and other MOA classes in integrated pest management.',
      icon: 'fas fa-sync-alt'
    }
  ];

  whyChoose = [
    {
      title: 'Premium EC formulation',
      description:
        'Harishree\'s emulsifiable concentrate technology ensures smooth tank mixing, even spray distribution, and dependable IGR field performance in Indian conditions.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Focused IGR chemistry',
      description:
        'RUNNER is purpose-built for caterpillar and borer programs — delivering dedicated benzoylurea growth regulation rather than general knockdown-only sprays.',
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
        'Clear 20 ml per pump dosing, crop-wise tables, pest-wise guides, and safety notes help apply RUNNER confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Fruit Borer',
      description:
        'Manages shoot and fruit borer larvae in tomato, brinjal, and chilli that tunnel into fruits and cause premature drop or unmarketable produce at early larval stage.'
    },
    {
      name: 'Pod Borer',
      description:
        'Controls pod borers in pulses and soybean that attack developing pods, causing shriveled grains and yield loss when sprayed before larval entry.'
    },
    {
      name: 'Bollworm',
      description:
        'Suppresses American, pink, and spotted bollworm larvae in cotton squares and bolls through IGR-mediated moulting disruption at early infestation.'
    },
    {
      name: 'Tobacco Caterpillar',
      description:
        'Provides activity against tobacco caterpillar and related defoliating species that strip foliage and weaken plant vigour in chilli and vegetable crops.'
    },
    {
      name: 'Spodoptera',
      description:
        'Effective against Spodoptera litura and allied armyworm species causing heavy defoliation in chilli, cotton, and mixed vegetable fields with thorough coverage.'
    },
    {
      name: 'Leaf Eating Caterpillar',
      description:
        'Knocks down defoliating caterpillars and loopers that reduce photosynthetic leaf area when applied at economic threshold with full canopy spray.'
    },
    {
      name: 'Diamond Back Moth',
      description:
        'Manages diamondback moth larvae in cabbage and cauliflower through IGR activity on early instars before head and curd damage intensifies.'
    },
    {
      name: 'Armyworm',
      description:
        'Controls armyworm outbreaks that march across seedling and vegetative crops, protecting young plants during vulnerable establishment stages.'
    },
    {
      name: 'Helicoverpa',
      description:
        'Targets Helicoverpa armigera larvae — a major bollworm and fruit borer species across cotton, pulses, tomato, and chilli at early larval stages.'
    },
    {
      name: 'Cutworms',
      description:
        'Provides supplementary activity against cutworm larvae that clip seedlings and young transplants at soil-line feeding zones with directed foliar coverage.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description: 'Leading IGR choice for bollworm and Helicoverpa management during square, flowering, and boll stages with dependable residual larval control.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description: 'Protects chilli pods and foliage from fruit borers, Spodoptera, and leaf-eating caterpillars during vegetative and fruit-set windows.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Tomato',
      description: 'Controls fruit borers and caterpillars that damage flowers and fruits, supporting cleaner harvest grade and reduced fruit drop.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Brinjal',
      description: 'Manages shoot and fruit borer larvae that bore into tender brinjal fruits during flowering and harvest stages.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Okra',
      description: 'Defends okra pods and leaves from caterpillar and borer feeding damage during pod formation and continuous harvest cycles.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cabbage',
      description: 'Effective on diamondback moth and leaf-eating caterpillars that damage outer leaves and reduce cole crop marketability.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Cauliflower',
      description: 'Protects curds and foliage from borer and caterpillar damage during head development with early IGR intervention.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Pulses',
      description: 'Supports pod borer and Helicoverpa management in gram, pigeon pea, and other pulse crops at critical pod-setting stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Soybean',
      description: 'Controls pod borers and defoliating caterpillars during pod initiation and fill for better grain weight and quality.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Vegetables',
      description: 'Broad fit across brinjal, okra, beans, and mixed vegetable crops facing caterpillar and borer pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Bollworm, Helicoverpa, Spodoptera', dose: '20 ml/pump', timing: 'At ETL during square and boll stages' },
    { crop: 'Chilli', pests: 'Fruit borer, Spodoptera, leaf caterpillars', dose: '20 ml/pump', timing: 'Early larval stage at fruit set' },
    { crop: 'Tomato', pests: 'Fruit borer, leaf-eating caterpillars', dose: '20 ml/pump', timing: 'First sign of borer damage on fruits' },
    { crop: 'Brinjal', pests: 'Shoot and fruit borer', dose: '20 ml/pump', timing: 'Early larval colonization on shoots and fruits' },
    { crop: 'Okra', pests: 'Fruit borer, caterpillars', dose: '20 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Cabbage', pests: 'Diamondback moth, caterpillars', dose: '20 ml/pump', timing: 'Preventive at head formation' },
    { crop: 'Cauliflower', pests: 'Diamondback moth, borers', dose: '20 ml/pump', timing: 'Early curd stage protection' },
    { crop: 'Pulses', pests: 'Pod borer, Helicoverpa', dose: '20 ml/pump', timing: 'At pod formation as per ETL' },
    { crop: 'Soybean', pests: 'Pod borer, armyworm', dose: '20 ml/pump', timing: 'Pod initiation to pod fill' },
    { crop: 'Vegetables', pests: 'Mixed borers and caterpillars', dose: '20 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'Fruit Borer', crops: 'Tomato, chilli, brinjal', mode: 'IGR — chitin synthesis inhibition', efficacy: 'High at early larval stage' },
    { pest: 'Pod Borer', crops: 'Pulses, soybean', mode: 'IGR — moult disruption', efficacy: 'High before pod entry' },
    { pest: 'Bollworm', crops: 'Cotton, pulses', mode: 'IGR — larval development stop', efficacy: 'High at early infestation' },
    { pest: 'Spodoptera', crops: 'Chilli, vegetables, cotton', mode: 'IGR on young instars', efficacy: 'High with underside coverage' },
    { pest: 'Helicoverpa', crops: 'Cotton, tomato, pulses', mode: 'IGR — benzoylurea MOA', efficacy: 'High at early larval stage' },
    { pest: 'Diamond Back Moth', crops: 'Cabbage, cauliflower', mode: 'IGR on early instars', efficacy: 'Moderate to high' },
    { pest: 'Armyworm', crops: 'Vegetables, cotton', mode: 'IGR + residual deposit', efficacy: 'Moderate to high at early stage' },
    { pest: 'Leaf Eating Caterpillar', crops: 'Vegetables, cole crops', mode: 'IGR — growth regulation', efficacy: 'High with timely spray' },
    { pest: 'Cutworms', crops: 'Vegetables, seedlings', mode: 'IGR on exposed larvae', efficacy: 'Moderate with directed spray' },
    { pest: 'Tobacco Caterpillar', crops: 'Chilli, vegetables', mode: 'IGR — moulting block', efficacy: 'High on young instars' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', runner: 'IGR — inhibits chitin synthesis (IRAC Group 15)', traditional: 'Contact/stomach nerve-action chemistry only' },
    { feature: 'Larval stage control', runner: 'Disrupts moulting in early to mid instars', traditional: 'Mostly adult and large larva knockdown only' },
    { feature: 'Borer spectrum', runner: 'Fruit borers, pod borers, bollworms, Spodoptera', traditional: 'Often declining efficacy on resistant caterpillars' },
    { feature: 'Residual IGR activity', runner: 'Long-lasting EC deposit protects new hatchlings', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Resistance management', runner: 'Distinct MOA for IPM rotation programs', traditional: 'Higher resistance risk with repeated pyrethroids/OPs' },
    { feature: 'Application dose', runner: '20 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' }
  ];

  comparisonNovaluronContact = [
    { feature: 'Protection mechanism', runner: 'IGR residual — stops larvae completing moults', contact: 'Contact-only — kills exposed larvae on contact' },
    { feature: 'New hatchling suppression', runner: 'Controls larvae emerging on treated foliage', contact: 'Requires immediate re-spray when pests return' },
    { feature: 'Spray frequency', runner: 'Fewer applications during peak caterpillar season', contact: 'More frequent sprays increase labour and cost' },
    { feature: 'Large larva control', runner: 'Best on early instars; pair with knockdown partner if needed', contact: 'Better immediate knockdown on active feeders' },
    { feature: 'Season-long value', runner: 'Better cost-efficiency across crop cycle', contact: 'Higher cumulative spray cost over season' },
    { feature: 'IPM fit', runner: 'Ideal rotation partner with contact insecticides', contact: 'Repeated contact-only use accelerates resistance' }
  ];

  comparisonIgrTraditional = [
    { feature: 'Active chemistry', runner: 'Novaluron 10% EC — modern benzoylurea IGR', traditional: 'Older organophosphates or pyrethroids for caterpillars' },
    { feature: 'Mode of action', runner: 'Chitin synthesis inhibition — growth regulation', traditional: 'Primarily nerve-channel disruption only' },
    { feature: 'Resistance profile', runner: 'Lower cross-resistance when rotated in IPM', traditional: 'High resistance in caterpillar populations after repeated use' },
    { feature: 'Beneficial insect profile', runner: 'IGR selectivity supports broader IPM compatibility', traditional: 'Broad-spectrum knockdown may affect beneficials' },
    { feature: 'Larval life-stage coverage', runner: 'Eggs to early instars via residual IGR deposit', traditional: 'Limited effect on unhatched eggs and moulting larvae' },
    { feature: 'Field convenience', runner: 'EC — easy mixing at 20 ml/pump', traditional: 'Varies; some formulations need complex tank mixes' }
  ];

  comparisonEcFormulation = [
    { feature: 'Tank mixing', runner: 'EC disperses easily in water for uniform emulsion', other: 'WP/SC may require more agitation or settle in tank' },
    { feature: 'Spray uniformity', runner: 'Fine droplet spread across leaf surfaces', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', runner: '20 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', runner: 'Stable EC liquid in sealed original container', other: 'Stability varies; some need special storage' },
    { feature: 'Coverage on dense canopy', runner: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', runner: 'Standard liquid pack — easy transport and measure', other: 'Bulk or powder forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'RUNNER' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Insect Growth Regulator)' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Novaluron 10% EC' },
      { label: 'Chemical group', value: 'Benzoylurea (IGR) — IRAC Group 15' },
      { label: 'Mode of action', value: 'Inhibits chitin synthesis; disrupts larval moulting' },
      { label: 'Action type', value: 'Insect growth regulator with residual activity' },
      {
        label: 'Target pests',
        value: 'Fruit borers, pod borers, bollworms, Spodoptera, armyworms, diamondback moth, leaf-eating caterpillars, Helicoverpa, cutworms'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, vegetables'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 100 ML, 250 ML, 500 ML, 1 LTR' },
      { label: 'Recommended dose', value: '20 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early larval infestation or as per ETL/label' },
      { label: 'Coverage', value: 'Spray leaf undersides where caterpillars feed and hide' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'RUNNER' },
    { label: 'Brand / Trade Name', value: 'RUNNER' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Novaluron 10% EC' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Chemical Group', value: 'Benzoylurea (IGR) — IRAC Group 15' },
    { label: 'Mode of Action', value: 'Inhibits chitin biosynthesis; disrupts larval moulting and development' },
    { label: 'Action Type', value: 'Insect growth regulator with residual activity' },
    {
      label: 'Target Pests',
      value: 'Fruit borers, pod borers, bollworms, tobacco caterpillar, Spodoptera, leaf-eating caterpillars, diamondback moth, armyworm, Helicoverpa, cutworms'
    },
    { label: 'Target Crops', value: 'Cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, vegetables' },
    { label: 'Recommended Dose', value: '20 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early larval infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spraying near water bodies; protect pollinators during foraging hours' },
    { label: 'Pesticide Type', value: 'Insecticide (Insect Growth Regulator)' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (100 ML, 250 ML, 500 ML, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'EC deposit on foliage',
      description:
        'On application, RUNNER forms an even emulsifiable concentrate film on leaf surfaces. Caterpillars ingest or contact treated foliage during feeding, absorbing Novaluron into their system.'
    },
    {
      title: 'Chitin synthesis inhibition',
      description:
        'Novaluron blocks chitin biosynthesis — the structural protein larvae need to form a new exoskeleton. Without functional chitin, moulting cannot complete successfully.'
    },
    {
      title: 'Moulting disruption',
      description:
        'Affected caterpillar instars fail to shed their old cuticle properly. Larvae become trapped in malformed exoskeletons and cannot advance to reproductive adulthood.'
    },
    {
      title: 'Larval population suppression',
      description:
        'By stopping development at vulnerable instars, RUNNER breaks the caterpillar reproductive cycle and prevents rapid population build-up during peak borer seasons.'
    },
    {
      title: 'Residual IGR protection',
      description:
        'The EC formulation adheres to foliage and maintains insect growth regulator activity on treated surfaces, protecting against newly hatched larvae between spray intervals.'
    },
    {
      title: 'Crop protection benefits',
      description:
        'Reduced borer feeding preserves leaf integrity, fruit quality, and plant vigour — supporting healthier cotton, chilli, tomato, and vegetable crops through harvest.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 20 ml dose',
      text: 'Measure exactly 20 ml per pump to maintain efficacy, protect crops, and slow resistance development in caterpillar populations.'
    },
    {
      title: 'Spray for full coverage',
      text: 'Apply in calm weather and cover leaf undersides where fruit borers, pod borers, and caterpillars feed and hide from direct sunlight.'
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
      label: 'Reduced larval feeding',
      value: 'Growers report visible decline in caterpillar damage and borer entry holes within days of a well-timed RUNNER spray at early larval stage.'
    },
    {
      label: 'Cleaner fruit and pods',
      value: 'Fewer borer holes and feeding scars improve marketable grade in chilli, tomato, brinjal, and pulse crops at harvest.'
    },
    {
      label: 'Healthier canopy',
      value: 'Protected leaves maintain photosynthetic capacity, supporting stronger vegetative and reproductive growth in treated crops.'
    },
    {
      label: 'Extended IGR cover',
      value: 'Residual benzoylurea activity on foliage helps suppress newly hatched larvae between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely caterpillar and borer control on cotton, chilli, and vegetables helps preserve boll weight, pod fill, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'TURBO (Novaluron + Indoxacarb SC)',
      description: 'Dual-action IGR and oxadiazine insecticide for caterpillar and borer control with knockdown plus moult disruption.',
      route: '/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'TURBO Novaluron Indoxacarb SC insecticide by Harishree Crop Science'
    },
    {
      name: 'AMPIGO (Chlorantraniliprole + Lambda Cyhalothrin ZC)',
      description: 'Dual-action ZC insecticide for caterpillars, borers, and fall armyworm in cotton, maize, and vegetables.',
      route: '/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc',
      image: 'assets/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc.png',
      imageAlt: 'AMPIGO Chlorantraniliprole Lambda Cyhalothrin ZC insecticide by Harishree Crop Science'
    },
    {
      name: 'PRO-5G (Emamectin + Fipronil SC)',
      description: 'Dual-action insecticide for bollworms, fruit borers, thrips, and mixed pest complexes in cotton and vegetables.',
      route: '/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc-pro-5g',
      image: 'assets/products/insecticide/emamectin-benzoate-1-5-fipronil-3-5-sc.jpg',
      imageAlt: 'PRO-5G Emamectin Fipronil SC insecticide by Harishree Crop Science'
    },
    {
      name: 'CHILLI H (Fipronil 2.92% EC)',
      description: 'Specialized EC insecticide for chilli thrips, stem borers, and broad-spectrum pest management.',
      route: '/products/insecticide/fipronil-2-92-ec',
      image: 'assets/products/insecticide/fipronil-2-92-ec.jpg',
      imageAlt: 'CHILLI H Fipronil 2.92% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA PROFEX (Profenofos 50% EC)',
      description: 'Organophosphate insecticide for lepidopteran larvae, thrips, and jassids in cotton and vegetable crops.',
      route: '/products/insecticide/profenofos-50-ec',
      image: 'assets/products/insecticide/profenofos-50-ec.jpg',
      imageAlt: 'EXTRA PROFEX Profenofos 50% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'YODDHA (Flufenzine 20% EC)',
      description: 'Premium miticide and acaricide for red spider mites and yellow mites on chilli, cotton, and vegetables.',
      route: '/products/insecticide/flufenzine-20-ec-yoddha',
      image: 'assets/products/insecticide/flufenzine-20-ec.jpg',
      imageAlt: 'YODDHA Flufenzine 20% EC insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is NOVALURON 10% EC used for?',
      answer:
        '<strong>NOVALURON 10% EC</strong> (marketed as <strong>RUNNER</strong>) is an insect growth regulator for controlling fruit borers, pod borers, bollworms, Spodoptera, armyworms, diamondback moth, and leaf-eating caterpillars on cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, and vegetables.',
      answerPlain:
        'NOVALURON 10% EC (marketed as RUNNER) is an insect growth regulator for controlling fruit borers, pod borers, bollworms, Spodoptera, armyworms, diamondback moth, and leaf-eating caterpillars on cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, and vegetables.'
    },
    {
      question: 'How much RUNNER should be used per pump?',
      answer:
        'The standard recommended dose of <strong>RUNNER</strong> is <strong>20 ml per pump</strong> (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of RUNNER is 20 ml per pump (typically a 15-litre knapsack sprayer). Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'What is Novaluron dose per pump for RUNNER?',
      answer:
        'The recommended <strong>Novaluron dose per pump</strong> for RUNNER is <strong>20 ml</strong> in a 15-litre knapsack sprayer filled with clean water.',
      answerPlain:
        'The recommended Novaluron dose per pump for RUNNER is 20 ml in a 15-litre knapsack sprayer filled with clean water.'
    },
    {
      question: 'Which crops can use RUNNER?',
      answer:
        '<strong>RUNNER</strong> is used on cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, and vegetables. Follow label recommendations for crop-specific guidance.',
      answerPlain:
        'RUNNER is used on cotton, chilli, tomato, brinjal, okra, cabbage, cauliflower, pulses, soybean, and vegetables. Follow label recommendations for crop-specific guidance.'
    },
    {
      question: 'Which pests does RUNNER control?',
      answer:
        'RUNNER controls <strong>fruit borers, pod borers, bollworms, tobacco caterpillar, Spodoptera, leaf-eating caterpillars, diamondback moth, armyworm, Helicoverpa, and cutworms</strong> when applied at early larval stages with thorough coverage.',
      answerPlain:
        'RUNNER controls fruit borers, pod borers, bollworms, tobacco caterpillar, Spodoptera, leaf-eating caterpillars, diamondback moth, armyworm, Helicoverpa, and cutworms when applied at early larval stages with thorough coverage.'
    },
    {
      question: 'Is RUNNER an insect growth regulator?',
      answer:
        'Yes. <strong>RUNNER</strong> is an <strong>insect growth regulator (IGR)</strong> containing Novaluron — a benzoylurea compound (IRAC Group 15) that disrupts caterpillar moulting.',
      answerPlain:
        'Yes. RUNNER is an insect growth regulator (IGR) containing Novaluron — a benzoylurea compound (IRAC Group 15) that disrupts caterpillar moulting.'
    }
  ];

  testimonials = [
    { name: 'Ramesh Patel', location: 'Gujarat', text: 'RUNNER controlled bollworm larvae in my cotton field within a week. Bolls looked cleaner and the crop stayed healthier through harvest.', rating: 5 },
    { name: 'Suresh Reddy', location: 'Andhra Pradesh', text: '20 ml per pump is easy to follow. RUNNER mixed smoothly and gave good fruit borer control on my chilli crop during peak season.', rating: 5 },
    { name: 'Kiran Desai', location: 'Maharashtra', text: 'I use RUNNER for tomato fruit borers. Larval damage dropped after one well-timed spray at early infestation.', rating: 5 }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '72',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Measure RUNNER', text: 'Accurately measure 20 ml of NOVALURON 10% EC (RUNNER) for a standard 15-litre knapsack pump.' },
    { name: 'Mixing — half-fill with water', text: 'Half-fill the sprayer tank with clean water before adding the insecticide for safe, even mixing.' },
    { name: 'Mixing — add product and stir', text: 'Pour the measured 20 ml into the water. The EC formulation emulsifies easily into a uniform spray mix.' },
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
      productImageAlt: 'RUNNER NOVALURON 10% EC Insecticide',
      productImageCaption: 'RUNNER NOVALURON 10% EC insecticide pack by Harishree Crop Science',
      description:
        'RUNNER (NOVALURON 10% EC) by Harishree Crop Science is a premium IGR insecticide for fruit borers, pod borers, bollworms, Spodoptera, and caterpillars on cotton, chilli, tomato, and vegetables. Dose: 20 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'RUNNER-NOVALURON-10-EC',
      mpn: 'RUNNER-NOVALURON-10-EC',
      dose: '20 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply RUNNER (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of RUNNER (NOVALURON 10% EC) for foliar application at 20 ml/pump.',
      alternateNames: [
        'RUNNER',
        'RUNNER Insecticide',
        'RUNNER Novaluron 10 EC',
        'Novaluron 10 EC',
        'Novaluron Insecticide',
        'Novaluron IGR',
        'Novaluron EC'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `RUNNER (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'RUNNER NOVALURON 10% EC IGR insecticide by Harishree Crop Science. Control fruit borers, pod borers, bollworms & caterpillars on cotton, chilli & vegetables. Dose: 20 ml/pump.';

    this.seo.setAll(
      {
        title: 'NOVALURON 10% EC | RUNNER | Harishree',
        description: desc,
        keywords:
          'NOVALURON 10% EC, RUNNER, Novaluron 10 EC, Novaluron Insecticide, Novaluron IGR, Novaluron EC, Novaluron 10 EC Uses, Novaluron 10 EC Dose, Novaluron Dose Per Pump, Caterpillar Control Insecticide, Fruit Borer Control, Pod Borer Control, Bollworm Control, IGR Insecticide, Benzoylurea Insecticide, IRAC Group 15, Spodoptera Control, Helicoverpa Control, Diamondback Moth Control, Armyworm Control, Cotton Insecticide, Chilli Insecticide, Tomato Insecticide, Best IGR for Caterpillars, Best Fruit Borer Control, Agricultural Insecticide, Crop Protection Solution, RUNNER Insecticide, RUNNER Novaluron 10 EC, NOVALURON 10% EC for Cotton, NOVALURON 10% EC for Chilli, NOVALURON 10% EC Mode of Action, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'NOVALURON 10% EC (RUNNER) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'NOVALURON 10% EC | RUNNER Insecticide',
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
