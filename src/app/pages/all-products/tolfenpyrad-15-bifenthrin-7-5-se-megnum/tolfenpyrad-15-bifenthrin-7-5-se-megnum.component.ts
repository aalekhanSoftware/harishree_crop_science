import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'MEGNUM_TOLFENPYRAD_15_BIFENTHRIN_7_5_SE';
const INDICATIVE_LIST_PRICE_INR = 838;

@Component({
  selector: 'app-tolfenpyrad-15-bifenthrin-7-5-se-megnum',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tolfenpyrad-15-bifenthrin-7-5-se-megnum.component.html',
  styleUrl: './tolfenpyrad-15-bifenthrin-7-5-se-megnum.component.scss'
})
export class Tolfenpyrad15Bifenthrin75SeMegnumComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se-megnum';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se.png';
  readonly productImageWebpPath = 'assets/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Tolfenpyrad 15% + Bifenthrin 7.5% SE';
  brandName = 'MEGNUM';

  featuredSnippetAnswer =
    'Tolfenpyrad 15% + Bifenthrin 7.5% SE (MEGNUM) is a dual-action broad-spectrum insecticide by Harishree Crop Science combining mitochondrial respiration inhibition with contact and stomach action for fast knockdown and long-lasting control of thrips, whiteflies, aphids, jassids, mites, and other sucking pests on cotton, chilli, brinjal, tomato, okra, cabbage, cauliflower, and vegetable crops. Recommended dose: 25 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 177, featured: false, sku: 'MEGNUM-100ML' },
    { volume: '250 ml', price: 425, featured: false, sku: 'MEGNUM-250ML' },
    { volume: '500 ml', price: 838, featured: true, sku: 'MEGNUM-500ML' },
    { volume: '1 LTR', price: 1652, featured: false, sku: 'MEGNUM-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredient technology',
      description:
        'MEGNUM pairs Tolfenpyrad (IRAC 21A) with Bifenthrin (IRAC 3A) in an advanced SE formulation for knockdown plus extended sucking pest control on cotton and vegetables.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Fast knockdown effect',
      description:
        'Bifenthrin delivers rapid nervous-system disruption while Tolfenpyrad stops feeding — visible thrips, whitefly, and aphid suppression soon after a well-timed spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual protection',
      description:
        'The suspension emulsion adheres evenly to foliage and provides lasting protection against newly active sucking pests between spray intervals.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls thrips, whiteflies, aphids, jassids, mites, and other sucking pests across cotton, chilli, brinjal, tomato, okra, and major vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Insecticide for sucking pests',
      description:
        'Purpose-built dual action insecticide for high-pressure thrips, whitefly, and aphid outbreaks when scouting confirms economic threshold.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Resistance management support',
      description:
        'Two distinct IRAC groups (21A + 3A) in one product reduce selection pressure and support rotation in integrated pest management programs.',
      icon: 'fas fa-sync-alt'
    }
  ];

  keyBenefits = [
    {
      title: 'Fast knockdown effect',
      description:
        'Bifenthrin disrupts sodium channels for rapid paralysis while Tolfenpyrad inhibits mitochondrial respiration — sucking pests stop feeding quickly after MEGNUM application.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad spectrum control',
      description:
        'MEGNUM manages thrips, whiteflies, aphids, jassids, mites, and allied sucking pests in a single broad spectrum insecticide application.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Thrips management',
      description:
        'Chilli thrips and vegetable thrips are suppressed when MEGNUM is sprayed at early infestation with full canopy and flower coverage at 25 ml per pump.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Whitefly control',
      description:
        'Cotton whitefly and vegetable whitefly populations are managed through contact, stomach, and respiratory inhibition when applied at economic threshold.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Aphid suppression',
      description:
        'Cotton aphids and vegetable aphids are controlled when MEGNUM reaches colonized leaf undersides and tender shoots with thorough spray deposit.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Jassid control',
      description:
        'Jassids in cotton and vegetables are managed through dual MOA activity that interrupts feeding and reduces hopper burn on treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Mite control',
      description:
        'Spider mites and allied mite species on cotton, chilli, and vegetables are suppressed when MEGNUM is applied with emphasis on undersides of leaves.',
      icon: 'fas fa-spider'
    },
    {
      title: 'Long residual protection',
      description:
        'The SE formulation deposits a stable film on foliage, maintaining protection against newly active sucking pests between scheduled spray intervals.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Advanced dual action formula',
      description:
        'Tolfenpyrad insecticide and Bifenthrin insecticide work together — respiratory inhibition plus contact and stomach action for complete pest suppression.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Reduced pest damage',
      description:
        'Timely MEGNUM sprays limit silvering from thrips, honeydew from whiteflies, and curling from aphids — preserving leaf quality and harvest potential.',
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
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Effective resistance management',
      description:
        'Two distinct chemistry groups (21A + 3A) in one dual action insecticide reduce selection pressure when rotated with other MOA classes.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'High pest pressure performance',
      description:
        'MEGNUM performs reliably in fields facing mixed thrips, whitefly, and aphid complexes when applied at ETL with full coverage.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Easy application',
      description:
        'Clear 25 ml per pump dosing, smooth SE mixing, and straightforward knapsack application make MEGNUM convenient for Indian farming systems.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Cost effective pest management',
      description:
        'Competitive pack pricing from 100 ml to 1 litre makes MEGNUM an economical cotton insecticide and vegetable insecticide solution.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Proven field performance',
      description:
        'Tolfenpyrad Bifenthrin combination chemistry is trusted widely across India for sucking pest complexes in cotton and horticultural crops.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Contact and stomach action',
      description:
        'Bifenthrin delivers contact and stomach poison insecticide activity on exposed and feeding pests for immediate and sustained control.',
      icon: 'fas fa-hand-paper'
    },
    {
      title: 'Respiratory inhibition',
      description:
        'Tolfenpyrad blocks mitochondrial Complex I, interrupting energy production in susceptible pests and stopping feeding rapidly.',
      icon: 'fas fa-battery-quarter'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures MEGNUM with strict quality control for uniform SE dispersion, dependable spray stability, and consistent field results.',
      icon: 'fas fa-industry'
    }
  ];

  whyChoose = [
    {
      title: 'Advanced SE formulation',
      description:
        'Harishree\'s suspension emulsion technology ensures uniform dispersion, excellent leaf spread, and dependable tank stability in the field.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven dual-action synergy',
      description:
        'Combining Tolfenpyrad and Bifenthrin addresses both active feeders and hidden sucking pests for more complete thrips and whitefly management.',
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
        'MEGNUM offers value across 100 ml to 1 litre packs, delivering dual-action sucking pest control at an affordable cost per acre.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 25 ml per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply MEGNUM confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Thrips',
      description:
        'Controls chilli thrips and vegetable thrips that scar flowers, silver leaves, and reduce fruit quality — apply at early colonization with full canopy coverage.'
    },
    {
      name: 'Whiteflies',
      description:
        'Manages cotton whitefly and vegetable whitefly species causing honeydew, sooty mould, and virus transmission risk when populations exceed economic threshold.'
    },
    {
      name: 'Aphids',
      description:
        'Suppresses cotton aphids and vegetable aphids that colonize tender shoots and leaf undersides, causing curling, stunting, and yield loss.'
    },
    {
      name: 'Jassids',
      description:
        'Controls jassids (leafhoppers) that cause hopper burn, leaf edge browning, and reduced photosynthesis in cotton and vegetable crops.'
    },
    {
      name: 'Mites',
      description:
        'Effective against spider mites and allied mite species causing stippling, bronzing, and webbing on cotton, chilli, and vegetable foliage.'
    },
    {
      name: 'Leaf Feeders',
      description:
        'Provides activity against early-instar leaf feeders and allied soft-bodied pests when present alongside primary sucking pest complexes.'
    },
    {
      name: 'Other Sucking Pests',
      description:
        'Broad activity against mixed sucking pest populations including mealybug nymphs and allied sap feeders on registered crops.'
    },
    {
      name: 'Chilli Thrips',
      description:
        'Dedicated thrips control in chilli protects flowers and pods from scarring that reduces export quality and marketable yield.'
    },
    {
      name: 'Cotton Whitefly',
      description:
        'Whitefly control in cotton supports cleaner bolls, reduced honeydew deposition, and healthier fibre quality at harvest.'
    },
    {
      name: 'Vegetable Aphids',
      description:
        'Aphid control insecticide activity on brinjal, tomato, okra, cabbage, and cauliflower preserves leaf integrity and fruit development.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Leading dual action insecticide choice for whitefly, aphid, jassid, and mite management during square, flowering, and boll stages with fast knockdown.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects chilli pods and foliage from thrips, aphids, mites, and whiteflies during vegetative, flowering, and fruit-set windows.',
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
        'Supports aphid and diamondback moth ally pest management on cabbage heads and wrapper leaves with thorough foliar coverage.',
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
        'Reliable cotton insecticide and vegetable insecticide for horticultural programs requiring fast knockdown and residual sucking pest protection.',
      icon: 'fas fa-tree'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Whitefly, aphids, jassids, mites', dose: '25 ml/pump', timing: 'At ETL during vegetative and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, mites, whitefly', dose: '25 ml/pump', timing: 'Early colonization at flowering and fruit set' },
    { crop: 'Brinjal', pests: 'Aphids, jassids, whiteflies, mites', dose: '25 ml/pump', timing: 'First sign of sucking pest buildup' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips, mites', dose: '25 ml/pump', timing: 'Early infestation with underside coverage' },
    { crop: 'Okra', pests: 'Jassids, aphids, whiteflies', dose: '25 ml/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Cabbage', pests: 'Aphids, thrips', dose: '25 ml/pump', timing: 'Head formation stage as per ETL' },
    { crop: 'Cauliflower', pests: 'Aphids, thrips, whitefly', dose: '25 ml/pump', timing: 'Curd development with full coverage' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '25 ml/pump', timing: 'Early infestation with full coverage' }
  ];

  pestWiseControl = [
    { pest: 'Thrips', crops: 'Chilli, vegetables', mode: 'Contact + respiratory inhibition', efficacy: 'High at early colonization' },
    { pest: 'Whiteflies', crops: 'Cotton, tomato, brinjal', mode: 'Contact + stomach + respiration', efficacy: 'High with full coverage' },
    { pest: 'Aphids', crops: 'Cotton, vegetables', mode: 'Dual MOA — Complex I + sodium channel', efficacy: 'High at early infestation' },
    { pest: 'Jassids', crops: 'Cotton, okra, brinjal', mode: 'Contact + stomach action', efficacy: 'High with timely spray' },
    { pest: 'Mites', crops: 'Cotton, chilli, vegetables', mode: 'Contact insecticide + respiration', efficacy: 'Moderate to high with underside spray' },
    { pest: 'Chilli Thrips', crops: 'Chilli', mode: 'Knockdown + feeding cessation', efficacy: 'High at flower and pod stage' },
    { pest: 'Cotton Whitefly', crops: 'Cotton', mode: 'Dual action insecticide', efficacy: 'High at ETL' },
    { pest: 'Vegetable Aphids', crops: 'Tomato, brinjal, okra', mode: 'Contact + stomach poison', efficacy: 'High on colonized shoots' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', megnum: 'Dual MOA — Tolfenpyrad + Bifenthrin (21A + 3A)', traditional: 'Single-active sprays with limited sucking pest spectrum' },
    { feature: 'Knockdown speed', megnum: 'Fast paralysis via Bifenthrin plus feeding stop via Tolfenpyrad', traditional: 'Slower or inconsistent knockdown on mixed pest complexes' },
    { feature: 'Sucking pest spectrum', megnum: 'Thrips, whiteflies, aphids, jassids, mites', traditional: 'Often limited to one pest group per product' },
    { feature: 'Residual protection', megnum: 'SE deposit maintains field persistence', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', megnum: '25 ml per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', megnum: 'Competitive pricing from 100 ml to 1 litre', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonDualAction = [
    { feature: 'Active chemistry', megnum: 'Tolfenpyrad 15% + Bifenthrin 7.5% SE', contact: 'Single-active pyrethroid or neonicotinoid sprays' },
    { feature: 'Knockdown mechanism', megnum: 'Sodium channel + mitochondrial Complex I inhibition', contact: 'Single MOA — faster resistance selection' },
    { feature: 'Stomach action', megnum: 'Bifenthrin ingestion route for hidden feeders', contact: 'Primarily contact-only on many alternatives' },
    { feature: 'SE formulation quality', megnum: 'Harishree SE — uniform suspension and spread', contact: 'Formulation quality varies by brand' },
    { feature: 'Thrips and whitefly efficacy', megnum: 'Proven dual-action on sucking pest complexes', contact: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', megnum: '25 ml/pump — straightforward dosing', contact: 'Dose calculations vary by product' }
  ];

  comparisonTolfenpyradOnly = [
    { feature: 'Active chemistry', megnum: 'Tolfenpyrad 15% + Bifenthrin 7.5% SE', traditional: 'Tolfenpyrad 15% EC alone (e.g. H Fun)' },
    { feature: 'Mode of action', megnum: 'Respiratory inhibition + contact/stomach pyrethroid', traditional: 'Complex I inhibition only (IRAC 21A)' },
    { feature: 'Knockdown speed', megnum: 'Rapid visible pest drop from Bifenthrin component', traditional: 'Effective feeding stop; slower visible knockdown' },
    { feature: 'Whitefly and thrips', megnum: 'Dual MOA for high-pressure sucking pest outbreaks', traditional: 'Good activity; may need partner in heavy pressure' },
    { feature: 'IPM rotation value', megnum: 'Two MOA groups in one application', traditional: 'Single MOA — rotate with pyrethroids separately' },
    { feature: 'Application convenience', megnum: 'SE — stable mix at 25 ml/pump', traditional: 'EC — 30 ml/pump typical for H Fun' }
  ];

  comparisonSeFormulation = [
    { feature: 'Tank mixing', megnum: 'SE disperses evenly in water for uniform suspension', other: 'EC/WP may require more agitation or settle in tank' },
    { feature: 'Spray uniformity', megnum: 'Fine droplet spread across leaf surfaces and undersides', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', megnum: '25 ml/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', megnum: 'Stable SE liquid in sealed original container', other: 'Stability varies; some need special storage' },
    { feature: 'Coverage on dense canopy', megnum: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', megnum: 'Standard liquid pack — easy transport and measure', other: 'Bulk or powder forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'MEGNUM' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Dual Action)' },
      { label: 'Formulation type', value: 'SE (Suspension Emulsion)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Tolfenpyrad 15% + Bifenthrin 7.5% SE' },
      { label: 'Chemical groups', value: 'IRAC 21A (Tolfenpyrad) + IRAC 3A (Bifenthrin)' },
      { label: 'Mode of action', value: 'Contact + stomach action + respiratory inhibition' },
      { label: 'Action type', value: 'Non-systemic contact and stomach poison with respiration inhibitor' },
      {
        label: 'Target pests',
        value: 'Thrips, whiteflies, aphids, jassids, mites, leaf feeders, other sucking pests'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, brinjal, tomato, okra, cabbage, cauliflower, vegetables, horticultural crops'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle (SE liquid); sizes 100 ml, 250 ml, 500 ml, 1 LTR' },
      { label: 'Recommended dose', value: '25 ml/pump' },
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
    { label: 'Product Name', value: 'MEGNUM' },
    { label: 'Brand / Trade Name', value: 'MEGNUM' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Tolfenpyrad 15% + Bifenthrin 7.5% SE' },
    { label: 'Formulation', value: 'SE (Suspension Emulsion)' },
    { label: 'Chemical Groups', value: 'IRAC 21A (Tolfenpyrad) + IRAC 3A (Bifenthrin)' },
    { label: 'Mode of Action', value: 'Contact + stomach action + mitochondrial respiratory inhibition' },
    { label: 'Action Type', value: 'Non-systemic dual action insecticide for sucking pests' },
    {
      label: 'Target Pests',
      value: 'Thrips, whiteflies, aphids, jassids, mites, leaf feeders, chilli thrips, cotton whitefly, vegetable aphids, other sucking pests'
    },
    { label: 'Target Crops', value: 'Cotton, chilli, brinjal, tomato, okra, cabbage, cauliflower, vegetables, horticultural crops' },
    { label: 'Recommended Dose', value: '25 ml/pump' },
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
      title: 'SE deposit on foliage',
      description:
        'On application, MEGNUM forms an even suspension emulsion film on leaf surfaces. Sucking pests contact or ingest treated foliage, absorbing Tolfenpyrad and Bifenthrin through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid paralysis',
      description:
        'Bifenthrin acts on contact, disrupting sodium channels in insect nerve tissue. Thrips, whiteflies, and aphids exposed to the spray deposit experience rapid paralysis and immediate cessation of feeding damage.'
    },
    {
      title: 'Stomach action — hidden feeder control',
      description:
        'When sucking and chewing pests ingest treated plant tissue, Bifenthrin delivers strong stomach poison insecticide activity — effective control of pests on leaf undersides and in dense canopy.'
    },
    {
      title: 'Respiratory inhibition — Tolfenpyrad',
      description:
        'Tolfenpyrad (IRAC Group 21A) blocks mitochondrial electron transport at Complex I. ATP production stumbles and susceptible pests lose the energy to feed and move normally — a powerful Tolfenpyrad insecticide mechanism.'
    },
    {
      title: 'Knockdown effect',
      description:
        'The dual MOA combination delivers fast knockdown insecticide performance — visible pest decline within hours when MEGNUM is applied at economic threshold with thorough coverage.'
    },
    {
      title: 'Long residual field protection',
      description:
        'The SE formulation adheres to foliage and maintains contact insecticide and respiration inhibitor activity on treated surfaces, protecting crops from pest resurgence between scheduled spray intervals.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 25 ml dose',
      text: 'Measure exactly 25 ml per pump to maintain efficacy, protect crops, and slow resistance development in thrips, whitefly, and aphid populations.'
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
      value: 'Growers report visible decline in thrips, whitefly, and aphid activity within hours of a well-timed MEGNUM spray at early infestation.'
    },
    {
      label: 'Cleaner foliage and fruits',
      value: 'Reduced silvering, honeydew, and curling improve marketable grade in chilli, cotton, tomato, and vegetable crops at harvest.'
    },
    {
      label: 'Healthier canopy',
      value: 'Protected leaves maintain photosynthetic capacity, supporting stronger vegetative and reproductive growth in treated crops.'
    },
    {
      label: 'Extended residual cover',
      value: 'SE deposit on foliage helps suppress newly active sucking pests between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely thrips and whitefly control on cotton and chilli helps preserve boll weight, pod quality, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'FINAL (Pyriproxyfen + Bifenthrin EC)',
      description: 'Dual-action IGR and pyrethroid insecticide for whitefly, thrips, mite, aphid, and jassid control.',
      route: '/product/pyriproxyfen-10-bifenthrin-10-w-w-ec',
      image: 'assets/products/insecticide/pyriproxyfen-10-bifenthrin-10-w-w-ec.png',
      imageAlt: 'FINAL Pyriproxyfen Bifenthrin EC insecticide by Harishree Crop Science'
    },
    {
      name: 'H Fun (Tolfenpyrad 15% EC)',
      description: 'Single-active Tolfenpyrad insecticide for aphids, whiteflies, thrips, and mites via IRAC 21A Complex I inhibition.',
      route: '/product/tolfenpyrad-15-ec',
      image: 'assets/products/tolfenpyrad-15-ec.png',
      imageAlt: 'H Fun Tolfenpyrad 15% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA PROFEX (Profenofos 50% EC)',
      description: 'Broad-spectrum organophosphate for bollworms, whiteflies, aphids, thrips, and caterpillars in cotton and vegetables.',
      route: '/products/insecticide/profenofos-50-ec',
      image: 'assets/products/insecticide/profenofos-50-ec.jpg',
      imageAlt: 'EXTRA PROFEX Profenofos 50% EC insecticide by Harishree Crop Science'
    },
    {
      name: 'AMPIGO (Chlorantraniliprole + Lambda Cyhalothrin ZC)',
      description: 'Dual-action insecticide for caterpillars, borers, and fall armyworm with knockdown plus residual control.',
      route: '/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc',
      image: 'assets/products/insecticide/chlorantraniliprole-9-3-lambda-cyhalothrin-4-6-zc.png',
      imageAlt: 'AMPIGO dual-action insecticide by Harishree Crop Science'
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
      question: 'What is Tolfenpyrad 15% + Bifenthrin 7.5% SE?',
      answer:
        '<strong>Tolfenpyrad 15% + Bifenthrin 7.5% SE</strong> is a dual-action suspension emulsion insecticide combining Tolfenpyrad (mitochondrial respiration inhibitor, IRAC 21A) with Bifenthrin (pyrethroid contact and stomach action, IRAC 3A) for broad-spectrum control of thrips, whiteflies, aphids, jassids, mites, and other sucking pests on cotton, chilli, and vegetable crops.',
      answerPlain:
        'Tolfenpyrad 15% + Bifenthrin 7.5% SE is a dual-action suspension emulsion insecticide combining Tolfenpyrad (mitochondrial respiration inhibitor, IRAC 21A) with Bifenthrin (pyrethroid contact and stomach action, IRAC 3A) for broad-spectrum control of thrips, whiteflies, aphids, jassids, mites, and other sucking pests on cotton, chilli, and vegetable crops.'
    },
    {
      question: 'What is MEGNUM insecticide?',
      answer:
        '<strong>MEGNUM</strong> is Harishree Crop Science\'s brand of <strong>Tolfenpyrad 15% + Bifenthrin 7.5% SE</strong> — a dual action insecticide for thrips control, whitefly control, aphid control, jassid control, and mite control in Indian cotton and vegetable programs. Recommended dose: 25 ml per pump.',
      answerPlain:
        'MEGNUM is Harishree Crop Science\'s brand of Tolfenpyrad 15% + Bifenthrin 7.5% SE — a dual action insecticide for thrips control, whitefly control, aphid control, jassid control, and mite control in Indian cotton and vegetable programs. Recommended dose: 25 ml per pump.'
    },
    {
      question: 'How does MEGNUM work?',
      answer:
        'MEGNUM works through three complementary modes: <strong>contact action</strong> and <strong>stomach action</strong> from Bifenthrin (sodium channel disruption) plus <strong>respiratory inhibition</strong> from Tolfenpyrad (Complex I block). This dual MOA delivers fast knockdown and long-lasting sucking pest suppression.',
      answerPlain:
        'MEGNUM works through three complementary modes: contact action and stomach action from Bifenthrin (sodium channel disruption) plus respiratory inhibition from Tolfenpyrad (Complex I block). This dual MOA delivers fast knockdown and long-lasting sucking pest suppression.'
    },
    {
      question: 'What pests does MEGNUM control?',
      answer:
        '<strong>MEGNUM</strong> controls thrips (including chilli thrips), whiteflies (including cotton whitefly), aphids, jassids, mites, leaf feeders, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage.',
      answerPlain:
        'MEGNUM controls thrips (including chilli thrips), whiteflies (including cotton whitefly), aphids, jassids, mites, leaf feeders, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage.'
    },
    {
      question: 'What is the dose of MEGNUM?',
      answer:
        'The standard recommended dose of <strong>MEGNUM</strong> is <strong>25 ml per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of MEGNUM is 25 ml per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Can MEGNUM be used in cotton, chilli, and vegetables?',
      answer:
        'Yes. <strong>MEGNUM</strong> is widely used on <strong>cotton</strong> for whitefly and aphid control, on <strong>chilli</strong> for thrips control, and on <strong>vegetables</strong> including brinjal, tomato, okra, cabbage, and cauliflower at 25 ml per pump.',
      answerPlain:
        'Yes. MEGNUM is widely used on cotton for whitefly and aphid control, on chilli for thrips control, and on vegetables including brinjal, tomato, okra, cabbage, and cauliflower at 25 ml per pump.'
    },
    {
      question: 'Is MEGNUM systemic? How quickly does it work?',
      answer:
        'No, MEGNUM is <strong>not systemic</strong> — it is a contact and stomach poison insecticide with respiratory inhibition. MEGNUM delivers <strong>fast knockdown</strong>; sucking pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.',
      answerPlain:
        'No, MEGNUM is not systemic — it is a contact and stomach poison insecticide with respiratory inhibition. MEGNUM delivers fast knockdown; sucking pests typically stop feeding within hours when sprayed at early infestation with full canopy coverage.'
    },
    {
      question: 'Why choose MEGNUM from Harishree Crop Science?',
      answer:
        '<strong>Harishree Crop Science</strong> manufactures <strong>MEGNUM</strong> with strict quality control, reliable SE formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Tolfenpyrad 15% + Bifenthrin 7.5% SE insecticide at best price.',
      answerPlain:
        'Harishree Crop Science manufactures MEGNUM with strict quality control, reliable SE formulation, competitive pricing, and farmer-focused support. Buy through authorized dealers for authentic Tolfenpyrad 15% + Bifenthrin 7.5% SE insecticide at best price.'
    }
  ];

  testimonials = [
    {
      name: 'Vijay Sharma',
      location: 'Gujarat',
      text: 'MEGNUM gave excellent whitefly control in my cotton field. Populations dropped within a day and leaves looked much cleaner through the boll stage.',
      rating: 5
    },
    {
      name: 'Lakshmi Reddy',
      location: 'Andhra Pradesh',
      text: 'I used MEGNUM on chilli for thrips scarring on flowers. The dual action worked fast and pods looked much better at harvest.',
      rating: 5
    },
    {
      name: 'Anil Patil',
      location: 'Maharashtra',
      text: '25 ml per pump is easy to remember. MEGNUM mixed smoothly and controlled aphids and jassids in my brinjal and tomato fields effectively.',
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
    { name: 'Measure MEGNUM', text: 'Accurately measure 25 ml of Tolfenpyrad 15% + Bifenthrin 7.5% SE (MEGNUM) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 25 ml into the water. The SE formulation suspends easily into a uniform spray mix. Top up and agitate.' },
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
      productImageAlt: 'MEGNUM Tolfenpyrad 15% + Bifenthrin 7.5% SE Insecticide',
      productImageCaption: 'MEGNUM Tolfenpyrad 15% + Bifenthrin 7.5% SE insecticide pack by Harishree Crop Science',
      description:
        'MEGNUM (Tolfenpyrad 15% + Bifenthrin 7.5% SE) by Harishree Crop Science is a dual-action broad-spectrum insecticide for thrips, whiteflies, aphids, jassids, and mites on cotton, chilli, and vegetables. Dose: 25 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'MEGNUM-TOLFENPYRAD-BIFENTHRIN-SE',
      mpn: 'MEGNUM-TOLFENPYRAD-BIFENTHRIN-SE',
      dose: '25 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply MEGNUM (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of MEGNUM (Tolfenpyrad 15% + Bifenthrin 7.5% SE) for foliar application at 25 ml/pump.',
      alternateNames: [
        'MEGNUM',
        'MEGNUM Insecticide',
        'MEGNUM Tolfenpyrad Bifenthrin SE',
        'Tolfenpyrad 15 Bifenthrin 7.5 SE',
        'Tolfenpyrad Bifenthrin insecticide',
        'Tolfenpyrad insecticide',
        'Bifenthrin insecticide',
        'Dual action insecticide',
        'Best insecticide for thrips',
        'Best insecticide for whitefly'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `MEGNUM (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SE (Suspension Emulsion)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Tolfenpyrad 15% + Bifenthrin 7.5% SE (MEGNUM) dual-action insecticide for thrips, whitefly & aphids. Best price. Harishree Crop Science. 25 ml/pump.';

    this.seo.setAll(
      {
        title: 'Tolfenpyrad 15% + Bifenthrin 7.5% SE | MEGNUM | Buy Online',
        description: desc,
        keywords:
          'Tolfenpyrad 15% + Bifenthrin 7.5% SE, Tolfenpyrad 15 Bifenthrin 7.5 SE, MEGNUM, MEGNUM insecticide, Tolfenpyrad Bifenthrin insecticide, Tolfenpyrad insecticide, Bifenthrin insecticide, Best insecticide for thrips, Best insecticide for whitefly, Aphid control insecticide, Jassid control insecticide, Mite control insecticide, Broad spectrum insecticide, Dual action insecticide, Contact and stomach action insecticide, Insecticide for sucking pests, Cotton insecticide, Chilli thrips control, Whitefly control in cotton, Thrips control in chilli, Insecticide for vegetable crops, Fast knockdown insecticide, Tolfenpyrad 15% + Bifenthrin 7.5% SE Price, MEGNUM Insecticide Price, Thrips control, Whitefly control, Aphid control, Jassid control, Mite control, Pest management, Crop protection, Agricultural insecticide, Integrated pest management, Modern insecticide technology, Crop yield improvement, Insect attack prevention, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Tolfenpyrad 15% + Bifenthrin 7.5% SE (MEGNUM) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Tolfenpyrad 15% + Bifenthrin 7.5% SE | MEGNUM Insecticide',
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
