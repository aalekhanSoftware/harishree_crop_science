import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'INTERPRID_CHLORFENAPYR_10_SC';
const INDICATIVE_LIST_PRICE_INR = 1463;

@Component({
  selector: 'app-chlorfenapyr-10-sc-interprid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chlorfenapyr-10-sc-interprid.component.html',
  styleUrl: './chlorfenapyr-10-sc-interprid.component.scss'
})
export class Chlorfenapyr10ScInterpridComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/chlorfenapyr-10-sc-interprid';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/chlorfenapyr-10-sc.png';
  readonly productImageWebpPath = 'assets/products/insecticide/chlorfenapyr-10-sc.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Chlorfenapyr 10% SC';
  brandName = 'INTERPRID';

  featuredSnippetAnswer =
    'Chlorfenapyr 10% SC (INTERPRID) is a premium pyrrole-group insecticide and acaricide by Harishree Crop Science that disrupts cellular energy production to control resistant thrips, mites, caterpillars, diamondback moth, fruit borers, and shoot borers on chilli, cotton, brinjal, tomato, cabbage, cauliflower, okra, and vegetable crops. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 307, featured: false, sku: 'INTERPRID-100ML' },
    { volume: '250 ml', price: 738, featured: false, sku: 'INTERPRID-250ML' },
    { volume: '500 ml', price: 1463, featured: true, sku: 'INTERPRID-500ML' },
    { volume: '1 LTR', price: 2903, featured: false, sku: 'INTERPRID-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Pyrrole insecticide technology',
      description:
        'INTERPRID uses Chlorfenapyr pyrrole chemistry (IRAC Group 13) with a unique mode of action — cellular energy disruption — different from conventional pyrethroids and organophosphates for resistant pest management.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Controls resistant pests',
      description:
        'Effective against thrips, mites, caterpillars, diamondback moth, and fruit borers that have developed tolerance to older insecticide classes when applied at early infestation with thorough coverage.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Thrips, mite & caterpillar control',
      description:
        'Broad-spectrum insecticide and acaricide activity suppresses chilli thrips, red spider mites, yellow mites, leaf-eating caterpillars, DBM, and borers in a single modern crop protection application.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual protection',
      description:
        'The SC suspension concentrate adheres well to foliage and provides dependable residual field persistence between spray intervals, reducing pest resurgence on treated crops.',
      icon: 'fas fa-clock'
    }
  ];

  keyBenefits = [
    {
      title: 'Controls resistant pests',
      description:
        'Chlorfenapyr disrupts mitochondrial ATP production — a distinct MOA that remains effective against pest populations resistant to pyrethroids, organophosphates, and neonicotinoids.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Thrips management',
      description:
        'INTERPRID suppresses chilli thrips and vegetable thrips that scar pods and foliage when sprayed at early infestation with full canopy and underside coverage at 30 ml per pump.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Mite control',
      description:
        'Red spider mites and yellow mites on cotton, chilli, and vegetables are managed through acaricidal activity when INTERPRID is applied with thorough spray deposit on leaf surfaces.',
      icon: 'fas fa-spider'
    },
    {
      title: 'Caterpillar suppression',
      description:
        'Leaf-eating caterpillars, tobacco caterpillars, and Spodoptera larvae stop feeding progressively when they contact or ingest Chlorfenapyr 10% SC treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Diamondback moth control',
      description:
        'DBM larvae on cabbage, cauliflower, and cole crops are suppressed when INTERPRID is timed at early larval stage before populations build inside dense heads.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Fruit borer control',
      description:
        'Shoot and fruit borers in tomato, brinjal, and chilli are managed when INTERPRID is sprayed early with emphasis on fruits, shoots, and leaf undersides.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Shoot borer management',
      description:
        'Shoot borer larvae that damage growing tips in brinjal, chilli, and vegetable crops are suppressed through ingestion and contact on treated plant tissue.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Broad spectrum activity',
      description:
        'INTERPRID manages multiple chewing and sucking pest species — thrips, mites, caterpillars, DBM, and borers — in one broad spectrum insecticide application.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Long residual protection',
      description:
        'The SC formulation maintains insecticide and acaricide activity on treated foliage, extending crop protection between scheduled sprays.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Modern chemistry advantages',
      description:
        'Pyrrole insecticide technology delivers a resistance-breaking MOA valuable for rotation in integrated pest management programs across Indian farming systems.',
      icon: 'fas fa-atom'
    },
    {
      title: 'Improved crop health',
      description:
        'Used at the recommended 30 ml per pump dose, INTERPRID supports cleaner foliage, reduced pest scarring, and healthier plant growth through critical crop windows.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Better yield potential',
      description:
        'By controlling key thrips, mites, caterpillars, and borers during flowering and fruit set, growers protect pods, fruits, and bolls for improved marketable yield.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely INTERPRID application at economic threshold limits defoliation, fruit scarring, and boll damage from resistant pest complexes.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Cost effective pest management',
      description:
        'Competitive pack pricing from 100 ml to 1 litre makes INTERPRID an economical pyrrole insecticide solution for thrips, mite, and caterpillar control programs.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Easy application',
      description:
        'Clear 30 ml per pump dosing, smooth SC mixing, and straightforward knapsack application make INTERPRID convenient for field use across Indian farming systems.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Proven field performance',
      description:
        'Chlorfenapyr is a trusted pyrrole active used widely across India for resistant thrips, mite, and caterpillar complexes in chilli, cotton, and vegetables.',
      icon: 'fas fa-award'
    },
    {
      title: 'Suitable for IPM programs',
      description:
        'Distinct IRAC Group 13 chemistry makes INTERPRID a valuable rotation partner alongside pyrethroids, IGRs, and other MOA classes in integrated pest management.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Vegetable crop protection',
      description:
        'Full canopy spray coverage with INTERPRID protects brinjal, tomato, okra, cabbage, cauliflower, and mixed vegetable crops from thrips, mites, and caterpillar damage.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Cotton insecticide solution',
      description:
        'INTERPRID supports mite and caterpillar management in cotton when integrated into season-long pest programs with scouting and MOA rotation.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures INTERPRID with strict quality control for uniform SC dispersion, dependable spray stability, and consistent field results.',
      icon: 'fas fa-certificate'
    }
  ];

  whyChoose = [
    {
      title: 'Modern pyrrole chemistry',
      description:
        'Farmers choose INTERPRID for Chlorfenapyr\'s unique cellular energy disruption MOA — effective where conventional insecticides have lost efficacy on resistant pests.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Excellent efficacy spectrum',
      description:
        'One product addresses thrips, mites, caterpillars, diamondback moth, fruit borers, and shoot borers in chilli, cotton, brinjal, tomato, and vegetable crops.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Resistance management support',
      description:
        'INTERPRID is a proven rotational tool in IPM programs, breaking cross-resistance patterns when alternated with pyrethroids, organophosphates, and neonicotinoids.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Economical pest control',
      description:
        'INTERPRID offers competitive pricing across 100 ml to 1 litre packs, delivering strong resistant pest control at an affordable cost per acre with 30 ml per pump dosing.',
      icon: 'fas fa-rupee-sign'
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
      name: 'Thrips',
      description:
        'Suppresses chilli thrips and vegetable thrips that scar pods, flowers, and foliage through contact and ingestion on treated plant surfaces at early infestation.'
    },
    {
      name: 'Red Spider Mites',
      description:
        'Controls red spider mite populations on cotton, chilli, and vegetables through acaricidal activity when sprayed with thorough leaf surface coverage.'
    },
    {
      name: 'Yellow Mites',
      description:
        'Manages yellow mite infestations that cause leaf bronzing and reduced photosynthesis on chilli and vegetable crops during hot, dry periods.'
    },
    {
      name: 'Leaf Eating Caterpillars',
      description:
        'Progressive mortality of defoliating caterpillars and loopers that reduce photosynthetic leaf area when applied at economic threshold with thorough spray coverage.'
    },
    {
      name: 'Tobacco Caterpillar',
      description:
        'Effective against Spodoptera and tobacco caterpillar larvae on chilli and vegetables through ingestion of Chlorfenapyr-treated foliage.'
    },
    {
      name: 'Diamondback Moth',
      description:
        'Suppresses DBM larvae on cabbage, cauliflower, and cole crops when timed at early larval stage before populations build inside dense heads.'
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
      name: 'Other Resistant Pests',
      description:
        'Broad activity against pest populations that have developed tolerance to pyrethroids, organophosphates, and other conventional insecticide classes.'
    }
  ];

  applications = [
    {
      title: 'Chilli',
      description:
        'Leading pyrrole insecticide choice for chilli thrips, mites, fruit borers, and caterpillars during vegetative and fruit-set windows with resistant pest management.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Cotton',
      description:
        'Protects cotton from red spider mites, yellow mites, and caterpillar complexes when integrated into season-long pest programs with MOA rotation.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Brinjal',
      description:
        'Manages shoot and fruit borer larvae, thrips, and mites that damage tender brinjal fruits during flowering and continuous harvest cycles.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Tomato',
      description:
        'Controls fruit borers, caterpillars, and mite infestations that damage flowers and fruits, supporting cleaner harvest grade and reduced fruit drop.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Cabbage',
      description:
        'Defends cabbage heads from diamondback moth larvae and caterpillar feeding damage during head formation and pre-harvest windows.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Cauliflower',
      description:
        'Protects cauliflower curds from DBM and leaf-eating caterpillars when applied at early larval infestation with thorough foliar coverage.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Okra',
      description:
        'Defends okra pods and leaves from caterpillar, thrips, and mite feeding damage during pod formation and harvest cycles.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Vegetable Crops',
      description:
        'Broad fit across brinjal, okra, beans, cabbage, cauliflower, and mixed vegetable crops facing thrips, mite, and caterpillar pressure.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Horticultural Crops',
      description:
        'Supports pest management in high-value horticultural programs where resistant thrips, mites, and caterpillars threaten crop quality and marketability.',
      icon: 'fas fa-tree'
    }
  ];

  cropWiseUsage = [
    { crop: 'Chilli', pests: 'Thrips, mites, fruit borers, caterpillars', dose: '30 ml/pump', timing: 'Early infestation at fruit set' },
    { crop: 'Cotton', pests: 'Red spider mites, yellow mites, caterpillars', dose: '30 ml/pump', timing: 'At ETL during vegetative and boll stages' },
    { crop: 'Brinjal', pests: 'Shoot/fruit borer, thrips, mites', dose: '30 ml/pump', timing: 'Early larval colonization on shoots and fruits' },
    { crop: 'Tomato', pests: 'Fruit borer, caterpillars, mites', dose: '30 ml/pump', timing: 'First sign of borer or mite damage' },
    { crop: 'Cabbage', pests: 'Diamondback moth, caterpillars', dose: '30 ml/pump', timing: 'Early DBM larval stage' },
    { crop: 'Cauliflower', pests: 'DBM, leaf-eating caterpillars', dose: '30 ml/pump', timing: 'Before larvae enter curds' },
    { crop: 'Okra', pests: 'Fruit borer, caterpillars, thrips', dose: '30 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Vegetables', pests: 'Mixed thrips, mites, caterpillars, borers', dose: '30 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'Chilli Thrips', crops: 'Chilli, vegetables', mode: 'Cellular energy disruption — contact/ingestion', efficacy: 'High at early infestation' },
    { pest: 'Red Spider Mites', crops: 'Cotton, chilli, vegetables', mode: 'Acaricidal — ATP inhibition', efficacy: 'High with thorough coverage' },
    { pest: 'Yellow Mites', crops: 'Chilli, vegetables', mode: 'Acaricidal activity', efficacy: 'High at early buildup' },
    { pest: 'Leaf Eating Caterpillar', crops: 'Vegetables, chilli', mode: 'Ingestion — progressive mortality', efficacy: 'High with timely spray' },
    { pest: 'Diamondback Moth', crops: 'Cabbage, cauliflower', mode: 'Pyrrole MOA — larval control', efficacy: 'High at early larval stage' },
    { pest: 'Fruit Borer', crops: 'Tomato, chilli, brinjal', mode: 'Contact + ingestion', efficacy: 'High at early larval stage' },
    { pest: 'Shoot Borer', crops: 'Brinjal, chilli', mode: 'Ingestion on treated tissue', efficacy: 'Moderate to high at early stage' },
    { pest: 'Tobacco Caterpillar', crops: 'Chilli, vegetables', mode: 'Pyrrole insecticide — feeding cessation', efficacy: 'High with underside coverage' },
    { pest: 'Resistant Pest Complex', crops: 'Multiple crops', mode: 'IRAC Group 13 — unique MOA', efficacy: 'High vs resistant populations' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', interprid: 'Pyrrole — cellular ATP disruption (IRAC Group 13)', traditional: 'Pyrethroids, OPs with declining efficacy on resistant pests' },
    { feature: 'Resistant pest control', interprid: 'Effective against thrips, mites, caterpillars tolerant to older MOAs', traditional: 'Often fails on resistant pest populations' },
    { feature: 'Pest spectrum', interprid: 'Thrips, mites, caterpillars, DBM, fruit borers, shoot borers', traditional: 'Often limited to one pest group per product' },
    { feature: 'Acaricidal activity', interprid: 'Built-in mite control alongside insect control', traditional: 'Many insecticides lack acaricidal activity' },
    { feature: 'Application dose', interprid: '30 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'IPM rotation value', interprid: 'Distinct MOA for resistance management', traditional: 'Repeated same-MOA sprays accelerate resistance' }
  ];

  comparisonGeneric = [
    { feature: 'Active chemistry', interprid: 'Chlorfenapyr 10% SC — premium Harishree formulation', generic: 'Generic chlorfenapyr products with variable quality' },
    { feature: 'Formulation quality', interprid: 'Uniform SC suspension — dependable spray stability', generic: 'Particle size and dispersion may vary by brand' },
    { feature: 'Mite + insect control', interprid: 'Proven dual insecticide and acaricide activity', generic: 'Efficacy inconsistent without quality SC formulation' },
    { feature: 'Thrips efficacy', interprid: 'Reliable thrips suppression on chilli and vegetables', generic: 'Coverage and residual may differ by formulation' },
    { feature: 'Field convenience', interprid: '30 ml/pump — straightforward dosing', generic: 'Dose calculations vary by product strength' },
    { feature: 'Dealer support', interprid: 'Harishree Crop Science — farmer-focused guidance', generic: 'Support and advisory quality varies' }
  ];

  comparisonThrips = [
    { feature: 'Thrips control mechanism', interprid: 'Pyrrole MOA — cellular energy disruption', other: 'Pyrethroid/neonicotinoid sprays with resistance issues' },
    { feature: 'Resistant chilli thrips', interprid: 'Effective on populations tolerant to conventional sprays', other: 'Often provides only partial suppression' },
    { feature: 'Mite co-control', interprid: 'Simultaneous mite management in same application', other: 'Requires separate acaricide spray' },
    { feature: 'Residual activity', interprid: 'Long-lasting SC deposit on foliage', other: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Caterpillar coverage', interprid: 'Broad spectrum — thrips plus caterpillars and borers', other: 'Thrips-only products miss caterpillar damage' },
    { feature: 'IPM fit', interprid: 'Rotation partner with distinct MOA', other: 'Repeated thrips sprays select for resistance' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'INTERPRID' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide & Acaricide (Pyrrole)' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid suspension' },
      { label: 'Active ingredient', value: 'Chlorfenapyr 10% SC' },
      { label: 'Chemical group', value: 'Pyrrole — IRAC Group 13' },
      { label: 'Mode of action', value: 'Cellular energy disruption — inhibits mitochondrial ATP production' },
      { label: 'Action type', value: 'Contact and ingestion insecticide and acaricide' },
      {
        label: 'Target pests',
        value: 'Thrips, red spider mites, yellow mites, caterpillars, diamondback moth, fruit borers, shoot borers, resistant pests'
      },
      {
        label: 'Target crops',
        value: 'Chilli, cotton, brinjal, tomato, cabbage, cauliflower, okra, vegetables, horticultural crops'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (SC liquid); sizes 100 ml, 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (adjust per canopy)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early infestation or as per ETL/label' },
      { label: 'Coverage', value: 'Spray both leaf surfaces and undersides where pests feed' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'INTERPRID' },
    { label: 'Brand / Trade Name', value: 'INTERPRID' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Chlorfenapyr 10% SC' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'Pyrrole — IRAC Group 13' },
    { label: 'Mode of Action', value: 'Cellular energy disruption — inhibits mitochondrial ATP production' },
    { label: 'Action Type', value: 'Contact and ingestion insecticide and acaricide' },
    {
      label: 'Target Pests',
      value: 'Thrips, red spider mites, yellow mites, leaf-eating caterpillars, diamondback moth, fruit borers, shoot borers, tobacco caterpillar, resistant pests'
    },
    { label: 'Target Crops', value: 'Chilli, cotton, brinjal, tomato, cabbage, cauliflower, okra, vegetables, horticultural crops' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spray drift; keep away from children; follow label instructions' },
    { label: 'Pesticide Type', value: 'Insecticide & Acaricide (Pyrrole)' },
    { label: 'Physical Form', value: 'Liquid suspension' },
    { label: 'Packaging Type', value: 'Bottle (100 ml, 250 ml, 500 ml, 1 LTR)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'SC deposit on foliage',
      description:
        'On application, INTERPRID forms an even suspension concentrate film on leaf surfaces. Thrips, mites, caterpillars, and borers ingest or contact treated foliage during feeding, absorbing Chlorfenapyr through cuticle and gut.'
    },
    {
      title: 'Cellular respiration disruption',
      description:
        'Chlorfenapyr is metabolized in the pest to an active form that uncouples oxidative phosphorylation in mitochondria, disrupting cellular respiration and stopping energy generation in target pests.'
    },
    {
      title: 'Energy production inhibition',
      description:
        'By interfering with ATP production, INTERPRID depletes the energy reserves pests need for feeding, movement, and survival — causing progressive weakness and mortality over 2–5 days.'
    },
    {
      title: 'Pest feeding reduction',
      description:
        'Affected thrips, mites, and caterpillars show reduced feeding activity soon after exposure, limiting further crop damage even before complete pest mortality occurs.'
    },
    {
      title: 'Long lasting control',
      description:
        'The SC formulation adheres to foliage and maintains insecticide and acaricide activity on treated surfaces, protecting crops from pest resurgence between scheduled spray intervals.'
    },
    {
      title: 'Resistance breaking capability',
      description:
        'Distinct IRAC Group 13 MOA makes INTERPRID effective against pest populations resistant to pyrethroids, organophosphates, and neonicotinoids — a valuable rotational tool in IPM.'
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
      label: 'Thrips suppression',
      value: 'Growers report visible decline in chilli thrips and vegetable thrips scarring within days of a well-timed INTERPRID spray at early infestation.'
    },
    {
      label: 'Mite population control',
      value: 'Red spider mite and yellow mite infestations on cotton and chilli are suppressed with thorough foliar coverage at 30 ml per pump.'
    },
    {
      label: 'Caterpillar knockdown',
      value: 'Leaf-eating caterpillars and DBM larvae show progressive feeding cessation and mortality when INTERPRID is applied at early larval stage.'
    },
    {
      label: 'Cleaner harvest grade',
      value: 'Fewer thrips scars, mite bronzing, and borer holes improve marketable quality in chilli, tomato, brinjal, and cole crops at harvest.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely thrips, mite, caterpillar, and borer control on chilli, cotton, and vegetables helps preserve pod fill, fruit weight, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'MEGNUM (Tolfenpyrad + Bifenthrin SE)',
      description: 'Dual-action insecticide for thrips, whiteflies, aphids, jassids, and mites in cotton and vegetables.',
      route: '/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se',
      image: 'assets/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se.png',
      imageAlt: 'MEGNUM Tolfenpyrad 15% + Bifenthrin 7.5% SE insecticide by Harishree Crop Science'
    },
    {
      name: 'TURBO (Novaluron + Indoxacarb SC)',
      description: 'Dual-action IGR and oxadiazine insecticide for caterpillar, DBM, and borer control with knockdown plus moult disruption.',
      route: '/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo',
      image: 'assets/products/insecticide/novaluron-5-25-indoxacarb-4-5-sc-turbo.jpg',
      imageAlt: 'TURBO Novaluron Indoxacarb SC insecticide by Harishree Crop Science'
    },
    {
      name: 'DELTA PLUS (Deltamethrin 11% w/w EC)',
      description: 'Synthetic pyrethroid insecticide for bollworms, caterpillars, thrips, and aphids in cotton and vegetables.',
      route: '/products/insecticide/deltamethrin-11-w-w-ec-delta-plus',
      image: 'assets/products/insecticide/deltamethrin-11-w-w-ec.png',
      imageAlt: 'DELTA PLUS Deltamethrin 11% w/w EC insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA PROFEX (Profenofos 50% EC)',
      description: 'Broad-spectrum organophosphate for bollworms, whiteflies, aphids, thrips, and caterpillars in cotton and vegetables.',
      route: '/products/insecticide/profenofos-50-ec',
      image: 'assets/products/insecticide/profenofos-50-ec.jpg',
      imageAlt: 'EXTRA PROFEX Profenofos 50% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'RUNNER (Novaluron 10% EC)',
      description: 'IGR insecticide for caterpillar and DBM control through moult disruption in vegetables and cole crops.',
      route: '/products/insecticide/novaluron-10-ec-runner',
      image: 'assets/products/insecticide/novaluron-10-ec.png',
      imageAlt: 'RUNNER Novaluron 10% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'FENVAL (Fenvalerate 20% EC)',
      description: 'Synthetic pyrethroid insecticide for bollworms, caterpillars, and chewing pests in cotton and vegetables.',
      route: '/products/insecticide/fenvalerate-20-ec-fenval',
      image: 'assets/products/insecticide/fenvalerate-20-ec.png',
      imageAlt: 'FENVAL Fenvalerate 20% EC insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Chlorfenapyr 10% SC?',
      answer:
        '<strong>Chlorfenapyr 10% SC</strong> is a pyrrole-group insecticide and acaricide formulated as a suspension concentrate (SC). It disrupts cellular energy production to control thrips, mites, caterpillars, diamondback moth, fruit borers, and resistant pest populations on chilli, cotton, brinjal, tomato, cabbage, cauliflower, okra, and vegetable crops.',
      answerPlain:
        'Chlorfenapyr 10% SC is a pyrrole-group insecticide and acaricide formulated as a suspension concentrate (SC). It disrupts cellular energy production to control thrips, mites, caterpillars, diamondback moth, fruit borers, and resistant pest populations on chilli, cotton, brinjal, tomato, cabbage, cauliflower, okra, and vegetable crops.'
    },
    {
      question: 'What is INTERPRID insecticide?',
      answer:
        '<strong>INTERPRID</strong> is Harishree Crop Science\'s brand of <strong>Chlorfenapyr 10% SC</strong> — a modern pyrrole insecticide for thrips control, mite control, caterpillar control, diamondback moth control, and fruit borer management in Indian field and vegetable crops. Recommended dose: 30 ml per pump.',
      answerPlain:
        'INTERPRID is Harishree Crop Science\'s brand of Chlorfenapyr 10% SC — a modern pyrrole insecticide for thrips control, mite control, caterpillar control, diamondback moth control, and fruit borer management in Indian field and vegetable crops. Recommended dose: 30 ml per pump.'
    },
    {
      question: 'How does Chlorfenapyr work?',
      answer:
        'Chlorfenapyr (IRAC Group 13) is metabolized in pests to an active compound that <strong>disrupts mitochondrial ATP production</strong>, stopping cellular energy generation. Pests exposed through contact or ingestion show reduced feeding followed by progressive mortality — effective against populations resistant to conventional insecticides.',
      answerPlain:
        'Chlorfenapyr (IRAC Group 13) is metabolized in pests to an active compound that disrupts mitochondrial ATP production, stopping cellular energy generation. Pests exposed through contact or ingestion show reduced feeding followed by progressive mortality — effective against populations resistant to conventional insecticides.'
    },
    {
      question: 'What pests does INTERPRID control?',
      answer:
        '<strong>INTERPRID</strong> controls thrips, red spider mites, yellow mites, leaf-eating caterpillars, tobacco caterpillar, diamondback moth, fruit borers, shoot borers, and other resistant pest populations when applied at early infestation with thorough coverage.',
      answerPlain:
        'INTERPRID controls thrips, red spider mites, yellow mites, leaf-eating caterpillars, tobacco caterpillar, diamondback moth, fruit borers, shoot borers, and other resistant pest populations when applied at early infestation with thorough coverage.'
    },
    {
      question: 'What is the dose of INTERPRID?',
      answer:
        'The standard recommended dose of <strong>INTERPRID</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of INTERPRID is 30 ml per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Can INTERPRID be used in chilli, cotton, and vegetables?',
      answer:
        'Yes. <strong>INTERPRID</strong> is widely used on <strong>chilli</strong> for thrips and mite control, on <strong>cotton</strong> for mite and caterpillar management, and on <strong>vegetables</strong> including brinjal, tomato, cabbage, cauliflower, and okra for caterpillar, DBM, and borer control at 30 ml per pump.',
      answerPlain:
        'Yes. INTERPRID is widely used on chilli for thrips and mite control, on cotton for mite and caterpillar management, and on vegetables including brinjal, tomato, cabbage, cauliflower, and okra for caterpillar, DBM, and borer control at 30 ml per pump.'
    },
    {
      question: 'Is Chlorfenapyr systemic? How quickly does it work?',
      answer:
        'Chlorfenapyr has <strong>limited systemic movement</strong> — it acts primarily through contact and ingestion on treated foliage. INTERPRID shows <strong>feeding reduction within 1–2 days</strong> and progressive pest mortality over 2–5 days when sprayed at early infestation with full canopy coverage.',
      answerPlain:
        'Chlorfenapyr has limited systemic movement — it acts primarily through contact and ingestion on treated foliage. INTERPRID shows feeding reduction within 1–2 days and progressive pest mortality over 2–5 days when sprayed at early infestation with full canopy coverage.'
    },
    {
      question: 'Why choose INTERPRID from Harishree Crop Science?',
      answer:
        '<strong>Harishree Crop Science</strong> manufactures <strong>INTERPRID</strong> with strict quality control, reliable SC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Chlorfenapyr 10% SC insecticide at best price.',
      answerPlain:
        'Harishree Crop Science manufactures INTERPRID with strict quality control, reliable SC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Chlorfenapyr 10% SC insecticide at best price.'
    }
  ];

  testimonials = [
    {
      name: 'Venkat Rao',
      location: 'Andhra Pradesh',
      text: 'INTERPRID gave excellent thrips control in my chilli field. Pod scarring reduced noticeably and the crop stayed cleaner through harvest.',
      rating: 5
    },
    {
      name: 'Prakash Sharma',
      location: 'Gujarat',
      text: 'I used INTERPRID on cotton for red spider mites. Mite populations dropped within a week and the leaves looked much healthier.',
      rating: 5
    },
    {
      name: 'Anita Patil',
      location: 'Maharashtra',
      text: '30 ml per pump is easy to follow. INTERPRID controlled caterpillars and DBM in my cabbage and tomato fields effectively.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '92',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Measure INTERPRID', text: 'Accurately measure 30 ml of Chlorfenapyr 10% SC (INTERPRID) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 30 ml into the water. Agitate well to form a uniform suspension. Top up and agitate again.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on leaf undersides where thrips and mites feed.' },
    { name: 'Ensure complete coverage', text: 'Cover both leaf surfaces on chilli, cotton, and vegetable crops — efficacy depends on thorough spray deposit on pest feeding sites.' },
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
      productImageAlt: 'INTERPRID Chlorfenapyr 10% SC Insecticide',
      productImageCaption: 'INTERPRID Chlorfenapyr 10% SC insecticide pack by Harishree Crop Science',
      description:
        'INTERPRID (Chlorfenapyr 10% SC) by Harishree Crop Science is a premium pyrrole insecticide and acaricide for thrips, mites, caterpillars, DBM, and fruit borers on chilli, cotton, and vegetables. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'INTERPRID-CHLORFENAPYR-10-SC',
      mpn: 'INTERPRID-CHLORFENAPYR-10-SC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply INTERPRID (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of INTERPRID (Chlorfenapyr 10% SC) for foliar application at 30 ml/pump.',
      alternateNames: [
        'INTERPRID',
        'INTERPRID Insecticide',
        'INTERPRID Chlorfenapyr 10 SC',
        'Chlorfenapyr 10 SC',
        'Chlorfenapyr Insecticide',
        'Chlorfenapyr 10% SC Insecticide',
        'Best Chlorfenapyr Insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `INTERPRID (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Chlorfenapyr 10% SC (INTERPRID) insecticide for thrips control, mite control & caterpillar control at best price. Dose: 30 ml/pump. Harishree Crop Science.';

    this.seo.setAll(
      {
        title: 'Chlorfenapyr 10% SC | INTERPRID | Buy Online Best Price',
        description: desc,
        keywords:
          'Chlorfenapyr 10% SC, INTERPRID, Chlorfenapyr 10 SC, Chlorfenapyr Insecticide, Best Chlorfenapyr Insecticide, Chlorfenapyr 10 SC Price, Chlorfenapyr Uses, Pyrrole Insecticide, Thrips Control Insecticide, Mite Control Insecticide, Caterpillar Control Insecticide, Diamondback Moth Control, Fruit Borer Control Insecticide, Resistant Pest Management, Broad Spectrum Insecticide, Vegetable Insecticide, Cotton Insecticide, Insecticide for Chilli Thrips, Mite Control in Vegetables, Modern Insecticide Technology, INTERPRID Insecticide, Chlorfenapyr SC, Pest Management, Crop Protection, Agricultural Insecticide, Integrated Pest Management, Resistant Pest Control, Crop Health Management, Chlorfenapyr Dose Per Pump, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Chlorfenapyr 10% SC (INTERPRID) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Chlorfenapyr 10% SC | INTERPRID Insecticide',
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
