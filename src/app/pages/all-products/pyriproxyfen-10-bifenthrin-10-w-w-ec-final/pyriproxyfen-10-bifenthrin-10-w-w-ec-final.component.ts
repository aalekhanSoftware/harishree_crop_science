import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'FINAL_PYRIPROXYFEN_10_BIFENTHRIN_10_EC';
const INDICATIVE_LIST_PRICE_INR = 454;

@Component({
  selector: 'app-pyriproxyfen-10-bifenthrin-10-w-w-ec-final',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pyriproxyfen-10-bifenthrin-10-w-w-ec-final.component.html',
  styleUrl: './pyriproxyfen-10-bifenthrin-10-w-w-ec-final.component.scss'
})
export class Pyriproxyfen10Bifenthrin10WwEcFinalComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/pyriproxyfen-10-bifenthrin-10-w-w-ec';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/pyriproxyfen-10-bifenthrin-10-w-w-ec.png';
  readonly productImageWebpPath = 'assets/products/insecticide/pyriproxyfen-10-bifenthrin-10-w-w-ec.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC';
  brandName = 'FINAL';

  featuredSnippetAnswer =
    'Pyriproxyfen 10% + Bifenthrin 10% w/w EC (FINAL) is a dual-action insecticide by Harishree Crop Science combining insect growth regulation with contact and stomach action for fast knockdown and long-term suppression of whiteflies, thrips, mites, aphids, jassids, and other sucking pests on cotton, chilli, brinjal, tomato, okra, cabbage, cauliflower, and vegetable crops. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 100, featured: false, sku: 'FINAL-100ML' },
    { volume: '250 ml', price: 235, featured: false, sku: 'FINAL-250ML' },
    { volume: '500 ml', price: 454, featured: true, sku: 'FINAL-500ML' },
    { volume: '1 LTR', price: 885, featured: false, sku: 'FINAL-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredient technology',
      description:
        'FINAL pairs Pyriproxyfen (IRAC 7D IGR) with Bifenthrin (IRAC 3A) in an EC formulation for knockdown plus long-term population suppression on cotton and vegetables.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Fast knockdown effect',
      description:
        'Bifenthrin delivers rapid nervous-system disruption while Pyriproxyfen interrupts pest development — visible whitefly, thrips, and aphid suppression soon after a well-timed spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Insect growth regulation',
      description:
        'Pyriproxyfen mimics juvenile hormone, preventing normal pest development and breaking whitefly and aphid reproductive cycles for sustained population control.',
      icon: 'fas fa-dna'
    },
    {
      title: 'Long residual protection',
      description:
        'The emulsifiable concentrate adheres evenly to foliage and provides lasting protection against newly active sucking pests between spray intervals.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls whiteflies, thrips, mites, aphids, jassids, and other sucking pests across cotton, chilli, brinjal, tomato, okra, and major vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Resistance management support',
      description:
        'Two distinct IRAC groups (7D + 3A) in one product reduce selection pressure and support rotation in integrated pest management programs.',
      icon: 'fas fa-sync-alt'
    }
  ];

  keyBenefits = [
    {
      title: 'Whitefly control',
      description:
        'Cotton whitefly and vegetable whitefly populations are managed through IGR lifecycle disruption plus Bifenthrin contact and stomach action when applied at economic threshold.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Thrips management',
      description:
        'Chilli thrips and vegetable thrips are suppressed when FINAL is sprayed at early infestation with full canopy and flower coverage at 30 ml per pump.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Mite suppression',
      description:
        'Red spider mites and yellow mites on cotton, chilli, and vegetables are controlled when FINAL is applied with emphasis on undersides of leaves.',
      icon: 'fas fa-spider'
    },
    {
      title: 'Aphid control',
      description:
        'Cotton aphids and vegetable aphids are managed when FINAL reaches colonized leaf undersides and tender shoots with thorough spray deposit.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Jassid management',
      description:
        'Jassids in cotton and vegetables are controlled through dual MOA activity that interrupts feeding and reduces hopper burn on treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Fast knockdown effect',
      description:
        'Bifenthrin disrupts sodium channels for rapid paralysis while Pyriproxyfen stops nymph development — sucking pests stop feeding quickly after FINAL application.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual protection',
      description:
        'The EC formulation deposits a stable film on foliage, maintaining protection against newly active sucking pests between scheduled spray intervals.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Population suppression',
      description:
        'Pyriproxyfen IGR activity reduces egg hatchability and controls immature stages, preventing future whitefly and aphid infestations between sprays.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Broad spectrum control',
      description:
        'FINAL manages whiteflies, thrips, mites, aphids, jassids, and allied sucking pests in a single broad spectrum insecticide application.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Dual action formula',
      description:
        'Pyriproxyfen insecticide and Bifenthrin insecticide work together — insect growth regulation plus contact and stomach action for complete pest suppression.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Reduced pest damage',
      description:
        'Timely FINAL sprays limit silvering from thrips, honeydew from whiteflies, and curling from aphids — preserving leaf quality and harvest potential.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Improved crop quality',
      description:
        'Cleaner foliage, fewer scarred fruits, and healthier plant vigour support better marketable grade in chilli, cotton, tomato, and vegetable programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Better yield potential',
      description:
        'By controlling key sucking pests during flowering and fruit set, growers protect bolls, pods, and fruits for improved productivity.',
      icon: 'fas fa-chart-bar'
    },
    {
      title: 'Effective resistance management',
      description:
        'Two distinct chemistry groups (7D + 3A) in one dual action insecticide reduce selection pressure when rotated with other MOA classes.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'Crop protection',
      description:
        'Full canopy spray coverage with FINAL protects cotton, chilli, brinjal, tomato, okra, and vegetable crops from sucking pest damage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Easy application',
      description:
        'Clear 30 ml per pump dosing, smooth EC mixing, and straightforward knapsack application make FINAL convenient for Indian farming systems.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Cost effective pest management',
      description:
        'Competitive pack pricing from 100 ml to 1 litre makes FINAL an economical cotton insecticide and vegetable insecticide solution.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Insect growth regulator activity',
      description:
        'Pyriproxyfen prevents normal moulting and egg development, interrupting pest life cycles at source for long-term population suppression.',
      icon: 'fas fa-dna'
    },
    {
      title: 'Contact and stomach action',
      description:
        'Bifenthrin delivers contact and stomach poison insecticide activity on exposed and feeding pests for immediate and sustained control.',
      icon: 'fas fa-hand-paper'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures FINAL with strict quality control for uniform EC dispersion, dependable spray stability, and consistent field results.',
      icon: 'fas fa-industry'
    }
  ];

  whyChoose = [
    {
      title: 'Premium EC formulation',
      description:
        'Harishree\'s emulsifiable concentrate technology ensures uniform dispersion, excellent leaf spread, and dependable tank stability in the field.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven dual-action synergy',
      description:
        'Combining Pyriproxyfen IGR with Bifenthrin addresses both active feeders and immature life stages for more complete whitefly and thrips management.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured with strict quality control, dealer support, and batch-to-batch consistency growers rely on season after season.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Competitive pricing',
      description:
        'FINAL offers value across 100 ml to 1 litre packs, delivering dual-action sucking pest control at an affordable cost per acre.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 30 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply FINAL confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Whiteflies',
      description:
        'Manages cotton whitefly and vegetable whitefly species causing honeydew, sooty mould, and virus transmission risk. FINAL combines IGR egg suppression with Bifenthrin knockdown when applied at economic threshold.'
    },
    {
      name: 'Thrips',
      description:
        'Controls chilli thrips and vegetable thrips that scar flowers, silver leaves, and reduce fruit quality — apply at early colonization with full canopy coverage at 30 ml per pump.'
    },
    {
      name: 'Mites',
      description:
        'Effective against red spider mites and yellow mites causing stippling, bronzing, and webbing on cotton, chilli, and vegetable foliage with emphasis on leaf undersides.'
    },
    {
      name: 'Aphids',
      description:
        'Suppresses cotton aphids and vegetable aphids that colonize tender shoots and leaf undersides, causing curling, stunting, and yield loss through contact and IGR activity.'
    },
    {
      name: 'Jassids',
      description:
        'Controls jassids (leafhoppers) that cause hopper burn, leaf edge browning, and reduced photosynthesis in cotton and vegetable crops.'
    },
    {
      name: 'Cotton Whitefly',
      description:
        'Whitefly control in cotton supports cleaner bolls, reduced honeydew deposition, and healthier fibre quality. Pyriproxyfen disrupts nymph development while Bifenthrin delivers rapid knockdown.'
    },
    {
      name: 'Chilli Thrips',
      description:
        'Dedicated thrips control in chilli protects flowers and pods from scarring that reduces export quality and marketable yield.'
    },
    {
      name: 'Red Spider Mites',
      description:
        'Red spider mite infestations on cotton and vegetables cause leaf stippling and bronzing. FINAL suppresses active mite populations with contact and residual activity on treated foliage.'
    },
    {
      name: 'Yellow Mites',
      description:
        'Yellow mites on chilli and vegetable crops are managed when FINAL reaches colonized leaf surfaces with thorough underside spray coverage.'
    },
    {
      name: 'Other Sucking Pests',
      description:
        'Broad activity against mixed sucking pest populations including mealybug nymphs and allied sap feeders on registered crops.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Leading dual action insecticide choice for whitefly, aphid, jassid, and mite management during square, flowering, and boll stages with fast knockdown and IGR population control.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects chilli pods and foliage from thrips, aphids, mites, and whiteflies during vegetative, flowering, and fruit-set windows — essential for chilli whitefly control.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Brinjal',
      description:
        'Manages aphids, jassids, whiteflies, and mites that weaken brinjal plants and reduce fruit quality during continuous harvest cycles.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Tomato',
      description:
        'Controls whiteflies, aphids, thrips, and mites that transmit stress and reduce fruit set, supporting cleaner harvest grade.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Okra',
      description:
        'Defends okra pods and leaves from jassids, aphids, and whiteflies during pod formation and harvest cycles.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Cabbage',
      description:
        'Supports aphid and thrips management on cabbage heads and wrapper leaves with thorough foliar coverage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Cauliflower',
      description:
        'Protects curds and foliage from aphids, thrips, and whiteflies that cause discolouration and unmarketable produce.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Vegetable Crops',
      description:
        'Broad fit across brinjal, okra, beans, capsicum, and mixed vegetable crops facing sucking pest pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Horticultural Crops',
      description:
        'Reliable cotton insecticide and vegetable insecticide for horticultural programs requiring fast knockdown and IGR-based population suppression.',
      icon: 'fas fa-tree'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Whitefly, aphids, jassids, mites', dose: '30 ml/pump', timing: 'At ETL during vegetative and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, mites, whitefly', dose: '30 ml/pump', timing: 'Early colonization at flowering and fruit set' },
    { crop: 'Brinjal', pests: 'Aphids, jassids, whiteflies, mites', dose: '30 ml/pump', timing: 'First sign of sucking pest buildup' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips, mites', dose: '30 ml/pump', timing: 'Early infestation with underside coverage' },
    { crop: 'Okra', pests: 'Jassids, aphids, whiteflies', dose: '30 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Cabbage', pests: 'Aphids, thrips', dose: '30 ml/pump', timing: 'Head formation stage as per ETL' },
    { crop: 'Cauliflower', pests: 'Aphids, thrips, whitefly', dose: '30 ml/pump', timing: 'Curd development with full coverage' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '30 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'Whiteflies', crops: 'Cotton, tomato, brinjal', mode: 'IGR + contact + stomach', efficacy: 'High with full coverage' },
    { pest: 'Thrips', crops: 'Chilli, vegetables', mode: 'Contact + IGR lifecycle disruption', efficacy: 'High at early colonization' },
    { pest: 'Mites', crops: 'Cotton, chilli, vegetables', mode: 'Contact insecticide + residual', efficacy: 'Moderate to high with underside spray' },
    { pest: 'Aphids', crops: 'Cotton, vegetables', mode: 'Dual MOA — IGR + sodium channel', efficacy: 'High at early infestation' },
    { pest: 'Jassids', crops: 'Cotton, okra, brinjal', mode: 'Contact + stomach action', efficacy: 'High with timely spray' },
    { pest: 'Chilli Thrips', crops: 'Chilli', mode: 'Knockdown + nymph suppression', efficacy: 'High at flower and pod stage' },
    { pest: 'Cotton Whitefly', crops: 'Cotton', mode: 'Dual action insecticide', efficacy: 'High at ETL' },
    { pest: 'Red Spider Mites', crops: 'Cotton, vegetables', mode: 'Contact + residual EC deposit', efficacy: 'High with underside coverage' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', final: 'Dual MOA — Pyriproxyfen IGR + Bifenthrin (7D + 3A)', traditional: 'Single-active sprays with limited sucking pest spectrum' },
    { feature: 'Knockdown speed', final: 'Fast paralysis via Bifenthrin plus lifecycle disruption via Pyriproxyfen', traditional: 'Slower or inconsistent knockdown on mixed pest complexes' },
    { feature: 'Long-term control', final: 'IGR suppresses eggs and nymphs for population management', traditional: 'Adult-only control; rapid pest resurgence' },
    { feature: 'Sucking pest spectrum', final: 'Whiteflies, thrips, mites, aphids, jassids', traditional: 'Often limited to one pest group per product' },
    { feature: 'Application dose', final: '30 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', final: 'Competitive pricing from 100 ml to 1 litre', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonDualAction = [
    { feature: 'Active chemistry', final: 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC', contact: 'Single-active pyrethroid or neonicotinoid sprays' },
    { feature: 'Knockdown mechanism', final: 'Sodium channel + insect growth regulation', contact: 'Single MOA — faster resistance selection' },
    { feature: 'Life cycle control', final: 'Pyriproxyfen disrupts egg hatch and nymph development', contact: 'No dedicated IGR component' },
    { feature: 'Stomach action', final: 'Bifenthrin ingestion route for hidden feeders', contact: 'Primarily contact-only on many alternatives' },
    { feature: 'Whitefly and thrips efficacy', final: 'Proven dual-action on sucking pest complexes', contact: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', final: '30 ml/pump — straightforward dosing', contact: 'Dose calculations vary by product' }
  ];

  comparisonPyriproxyfenOnly = [
    { feature: 'Active chemistry', final: 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC', traditional: 'Generic Pyriproxyfen-only EC products' },
    { feature: 'Mode of action', final: 'IGR lifecycle disruption + contact/stomach pyrethroid', traditional: 'Insect growth regulation only (IRAC 7D)' },
    { feature: 'Knockdown speed', final: 'Rapid visible pest drop from Bifenthrin component', traditional: 'Effective nymph suppression; slower visible knockdown' },
    { feature: 'Whitefly and thrips', final: 'Dual MOA for high-pressure sucking pest outbreaks', traditional: 'Good IGR activity; may need partner in heavy pressure' },
    { feature: 'IPM rotation value', final: 'Two MOA groups in one application', traditional: 'Single MOA — rotate with pyrethroids separately' },
    { feature: 'Application convenience', final: 'EC — stable mix at 30 ml/pump', traditional: 'EC — dose and efficacy vary by brand quality' }
  ];

  comparisonEcFormulation = [
    { feature: 'Tank mixing', final: 'EC emulsifies evenly in water for uniform spray mix', other: 'WP/SC may require more agitation or settle in tank' },
    { feature: 'Spray uniformity', final: 'Fine droplet spread across leaf surfaces and undersides', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', final: '30 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', final: 'Stable EC liquid in sealed original container', other: 'Stability varies; some need special storage' },
    { feature: 'Coverage on dense canopy', final: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', final: 'Standard liquid pack — easy transport and measure', other: 'Bulk or powder forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'FINAL' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Dual Action)' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC' },
      { label: 'Chemical groups', value: 'IGR (Pyriproxyfen, IRAC 7D) + Pyrethroid (Bifenthrin, IRAC 3A)' },
      { label: 'Mode of action', value: 'IGR + Contact + Stomach Action' },
      { label: 'Action type', value: 'Non-systemic dual action insecticide with residual activity' },
      {
        label: 'Target pests',
        value: 'Whiteflies, thrips, mites, aphids, jassids, other sucking pests'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, brinjal, tomato, okra, cabbage, cauliflower, vegetables, horticultural crops'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (EC liquid); sizes 100 ml, 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early sucking pest infestation or as per ETL/label' },
      { label: 'Coverage', value: 'Spray both leaf surfaces and undersides where pests feed' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'FINAL' },
    { label: 'Brand / Trade Name', value: 'FINAL' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Category', value: 'Insecticide' },
    { label: 'Chemical Groups', value: 'IGR (Pyriproxyfen, IRAC 7D) + Pyrethroid (Bifenthrin, IRAC 3A)' },
    { label: 'Mode of Action', value: 'IGR + Contact + Stomach Action' },
    { label: 'Action Type', value: 'Non-systemic dual action insecticide for sucking pests' },
    {
      label: 'Target Pests',
      value: 'Whiteflies, thrips, mites, aphids, jassids, cotton whitefly, chilli thrips, red spider mites, yellow mites, other sucking pests'
    },
    { label: 'Suitable Crops', value: 'Cotton, Chilli, Tomato, Brinjal, Okra, Cabbage, Cauliflower, Vegetables' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early sucking pest infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spray drift; keep away from children; follow label instructions' },
    { label: 'Pesticide Type', value: 'Insecticide (Dual Action)' },
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
        'On application, FINAL forms an even emulsifiable concentrate film on leaf surfaces. Sucking pests contact or ingest treated foliage, absorbing Pyriproxyfen and Bifenthrin through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid paralysis',
      description:
        'Bifenthrin acts on contact, disrupting sodium channels in insect nerve tissue. Whiteflies, thrips, and aphids exposed to the spray deposit experience rapid paralysis and immediate cessation of feeding damage.'
    },
    {
      title: 'Stomach action — hidden feeder control',
      description:
        'When sucking pests ingest treated plant tissue, Bifenthrin delivers strong stomach poison insecticide activity — effective control of pests on leaf undersides and in dense canopy.'
    },
    {
      title: 'Insect growth regulation — Pyriproxyfen',
      description:
        'Pyriproxyfen (IRAC Group 7D) mimics juvenile hormone, preventing whitefly and aphid eggs from hatching and stopping nymphs from completing moults — breaking the pest reproductive cycle at source.'
    },
    {
      title: 'Reproductive disruption & life cycle interruption',
      description:
        'Combined IGR and contact effects suppress whitefly, thrips, and aphid populations across multiple life stages — reducing egg hatchability, controlling immature stages, and preventing future infestations.'
    },
    {
      title: 'Long residual field protection',
      description:
        'The EC formulation adheres to foliage and maintains contact insecticide and IGR activity on treated surfaces, protecting crops from pest resurgence between scheduled spray intervals.'
    },
    {
      title: 'Resistance management benefits',
      description:
        'Two distinct MOA groups (7D + 3A) in one application reduce selection pressure. Rotate FINAL with neonicotinoids, organophosphates, and other MOA classes across the season.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 30 ml dose',
      text: 'Measure exactly 30 ml per pump to maintain efficacy, protect crops, and slow resistance development in whitefly, thrips, and aphid populations.'
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
      value: 'Growers report visible decline in whitefly, thrips, and aphid activity within hours of a well-timed FINAL spray at early infestation.'
    },
    {
      label: 'Cleaner foliage and fruits',
      value: 'Reduced silvering, honeydew, and curling improve marketable grade in chilli, cotton, tomato, and vegetable crops at harvest.'
    },
    {
      label: 'Long-term population control',
      value: 'Pyriproxyfen IGR activity suppresses egg hatch and nymph development, reducing pest resurgence between spray intervals.'
    },
    {
      label: 'Extended residual cover',
      value: 'EC deposit on foliage helps suppress newly active sucking pests between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely whitefly and thrips control on cotton and chilli helps preserve boll weight, pod quality, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'PILOT (Pyriproxyfen + Dinotefuran + Diafenthiuron SC)',
      description: 'Triple-action systemic insecticide for whitefly, aphids, thrips, and jassids with IGR lifecycle disruption.',
      route: '/products/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc-pilot',
      image: 'assets/products/insecticide/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc.jpg',
      imageAlt: 'PILOT Pyriproxyfen Dinotefuran Diafenthiuron SC insecticide by Harishree Crop Science'
    },
    {
      name: 'MEGNUM (Tolfenpyrad + Bifenthrin SE)',
      description: 'Dual-action insecticide for thrips, whiteflies, aphids, jassids, and mites in cotton and vegetables.',
      route: '/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se-megnum',
      image: 'assets/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se.png',
      imageAlt: 'MEGNUM Tolfenpyrad Bifenthrin SE insecticide by Harishree Crop Science'
    },
    {
      name: 'DELTA PLUS (Deltamethrin 11% w/w EC)',
      description: 'Synthetic pyrethroid insecticide for bollworms, caterpillars, thrips, and aphids with fast knockdown action.',
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
      name: 'FENVAL (Fenvalerate 20% EC)',
      description: 'Synthetic pyrethroid insecticide for bollworms, caterpillars, and chewing pests in cotton and vegetables.',
      route: '/products/insecticide/fenvalerate-20-ec-fenval',
      image: 'assets/products/insecticide/fenvalerate-20-ec.png',
      imageAlt: 'FENVAL Fenvalerate 20% EC insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Pyriproxyfen 10% + Bifenthrin 10% w/w EC?',
      answer:
        '<strong>Pyriproxyfen 10% + Bifenthrin 10% w/w EC</strong> is a dual-action emulsifiable concentrate insecticide combining Pyriproxyfen (insect growth regulator, IRAC 7D) with Bifenthrin (pyrethroid contact and stomach action, IRAC 3A) for broad-spectrum control of whiteflies, thrips, mites, aphids, jassids, and other sucking pests on cotton, chilli, and vegetable crops.',
      answerPlain:
        'Pyriproxyfen 10% + Bifenthrin 10% w/w EC is a dual-action emulsifiable concentrate insecticide combining Pyriproxyfen (insect growth regulator, IRAC 7D) with Bifenthrin (pyrethroid contact and stomach action, IRAC 3A) for broad-spectrum control of whiteflies, thrips, mites, aphids, jassids, and other sucking pests on cotton, chilli, and vegetable crops.'
    },
    {
      question: 'What is FINAL insecticide?',
      answer:
        '<strong>FINAL</strong> is Harishree Crop Science\'s brand of <strong>Pyriproxyfen 10% + Bifenthrin 10% w/w EC</strong> — a dual action insecticide for whitefly control, thrips control, mite control, aphid control, and jassid control in Indian cotton and vegetable programs. Recommended dose: 30 ml per pump.',
      answerPlain:
        'FINAL is Harishree Crop Science\'s brand of Pyriproxyfen 10% + Bifenthrin 10% w/w EC — a dual action insecticide for whitefly control, thrips control, mite control, aphid control, and jassid control in Indian cotton and vegetable programs. Recommended dose: 30 ml per pump.'
    },
    {
      question: 'How does FINAL work?',
      answer:
        'FINAL works through three complementary modes: <strong>contact action</strong> and <strong>stomach action</strong> from Bifenthrin (sodium channel disruption) plus <strong>insect growth regulation</strong> from Pyriproxyfen (juvenile hormone mimic). This dual MOA delivers fast knockdown and long-term population suppression of sucking pests.',
      answerPlain:
        'FINAL works through three complementary modes: contact action and stomach action from Bifenthrin (sodium channel disruption) plus insect growth regulation from Pyriproxyfen (juvenile hormone mimic). This dual MOA delivers fast knockdown and long-term population suppression of sucking pests.'
    },
    {
      question: 'What pests does FINAL control?',
      answer:
        '<strong>FINAL</strong> controls whiteflies (including cotton whitefly), thrips (including chilli thrips), mites (red spider and yellow mites), aphids, jassids, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage.',
      answerPlain:
        'FINAL controls whiteflies (including cotton whitefly), thrips (including chilli thrips), mites (red spider and yellow mites), aphids, jassids, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage.'
    },
    {
      question: 'What is the dose of FINAL?',
      answer:
        'The standard recommended dose of <strong>FINAL</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of FINAL is 30 ml per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Can FINAL be used in cotton, chilli, and vegetables?',
      answer:
        'Yes. <strong>FINAL</strong> is widely used on <strong>cotton</strong> for whitefly and aphid control, on <strong>chilli</strong> for thrips and whitefly control, and on <strong>vegetables</strong> including brinjal, tomato, okra, cabbage, and cauliflower at 30 ml per pump.',
      answerPlain:
        'Yes. FINAL is widely used on cotton for whitefly and aphid control, on chilli for thrips and whitefly control, and on vegetables including brinjal, tomato, okra, cabbage, and cauliflower at 30 ml per pump.'
    },
    {
      question: 'Is Pyriproxyfen systemic? How quickly does FINAL work?',
      answer:
        'No, Pyriproxyfen in <strong>FINAL</strong> is <strong>not systemic</strong> — it is an insect growth regulator with contact/translaminar activity. <strong>FINAL</strong> delivers <strong>fast knockdown</strong> from Bifenthrin; sucking pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.',
      answerPlain:
        'No, Pyriproxyfen in FINAL is not systemic — it is an insect growth regulator with contact/translaminar activity. FINAL delivers fast knockdown from Bifenthrin; sucking pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.'
    },
    {
      question: 'Why choose FINAL from Harishree Crop Science?',
      answer:
        '<strong>Harishree Crop Science</strong> manufactures <strong>FINAL</strong> with strict quality control, reliable EC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Pyriproxyfen 10% + Bifenthrin 10% w/w EC insecticide at best price.',
      answerPlain:
        'Harishree Crop Science manufactures FINAL with strict quality control, reliable EC formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Pyriproxyfen 10% + Bifenthrin 10% w/w EC insecticide at best price.'
    }
  ];

  testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Gujarat',
      text: 'FINAL gave excellent whitefly control in my cotton field. Populations dropped within a day and the IGR effect kept them low through the boll stage.',
      rating: 5
    },
    {
      name: 'Priya Naidu',
      location: 'Andhra Pradesh',
      text: 'I used FINAL on chilli for thrips scarring on flowers. The dual action worked fast and pods looked much better at harvest.',
      rating: 5
    },
    {
      name: 'Sanjay More',
      location: 'Maharashtra',
      text: '30 ml per pump is easy to remember. FINAL mixed smoothly and controlled aphids and mites in my brinjal and tomato fields effectively.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '85',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Measure FINAL', text: 'Accurately measure 30 ml of Pyriproxyfen 10% + Bifenthrin 10% w/w EC (FINAL) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 30 ml into the water. The EC formulation emulsifies easily into a uniform spray mix. Top up and agitate.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on leaf undersides where sucking pests feed.' },
    { name: 'Ensure complete crop coverage', text: 'Cover both leaf surfaces on cotton, chilli, and vegetable crops — dual action insecticide efficacy depends on thorough spray deposit.' },
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
      productImageAlt: 'FINAL Pyriproxyfen 10% + Bifenthrin 10% w/w EC Insecticide',
      productImageCaption: 'FINAL Pyriproxyfen 10% + Bifenthrin 10% w/w EC insecticide pack by Harishree Crop Science',
      description:
        'FINAL (Pyriproxyfen 10% + Bifenthrin 10% w/w EC) by Harishree Crop Science is a dual-action insecticide for whiteflies, thrips, mites, aphids, and jassids on cotton, chilli, and vegetables. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'FINAL-PYRIPROXYFEN-10-BIFENTHRIN-10-EC',
      mpn: 'FINAL-PYRIPROXYFEN-10-BIFENTHRIN-10-EC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply FINAL (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of FINAL (Pyriproxyfen 10% + Bifenthrin 10% w/w EC) for foliar application at 30 ml/pump.',
      alternateNames: [
        'FINAL',
        'FINAL Insecticide',
        'FINAL Pyriproxyfen Bifenthrin EC',
        'Pyriproxyfen 10 Bifenthrin 10 EC',
        'Pyriproxyfen Bifenthrin insecticide',
        'Pyriproxyfen insecticide',
        'Bifenthrin insecticide',
        'Dual action insecticide',
        'Best insecticide for whitefly',
        'Best insecticide for thrips',
        'Insect growth regulator insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `FINAL (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Pyriproxyfen 10% + Bifenthrin 10% w/w EC (FINAL) — dual action insecticide for whitefly, thrips & mite control. Best price. Dose: 30 ml/pump. Harishree Crop Science.';

    this.seo.setAll(
      {
        title: 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC | FINAL Buy Online',
        description: desc,
        keywords:
          'Pyriproxyfen 10% + Bifenthrin 10% w/w EC, Pyriproxyfen 10 Bifenthrin 10 EC, FINAL, FINAL insecticide, Pyriproxyfen Bifenthrin insecticide, Pyriproxyfen insecticide, Bifenthrin insecticide, Whitefly control insecticide, Thrips control insecticide, Mite control insecticide, Aphid control insecticide, Jassid control insecticide, Best insecticide for sucking pests, Dual action insecticide, Insect growth regulator insecticide, Cotton insecticide, Chilli whitefly control, Vegetable pest control, Broad spectrum insecticide, Long residual insecticide, Fast knockdown insecticide, Pyriproxyfen 10% + Bifenthrin 10% w/w EC Price, FINAL Insecticide Price, Whitefly control, Thrips control, Mite control, Aphid control, Jassid control, Pest management, Crop protection, Agricultural insecticide, Integrated pest management, Modern insecticide technology, Crop yield improvement, Sucking pest control, Harishree Crop Science, Buy Online, Best Price',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC (FINAL) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Pyriproxyfen 10% + Bifenthrin 10% w/w EC | FINAL Insecticide',
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
