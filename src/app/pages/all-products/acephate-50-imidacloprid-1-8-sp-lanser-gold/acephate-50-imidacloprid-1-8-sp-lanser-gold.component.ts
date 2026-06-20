import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'LANSER_GOLD_ACEPHATE_50_IMIDACLOPRID_18_SP';
const INDICATIVE_LIST_PRICE_INR = 454;

@Component({
  selector: 'app-acephate-50-imidacloprid-1-8-sp-lanser-gold',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acephate-50-imidacloprid-1-8-sp-lanser-gold.component.html',
  styleUrl: './acephate-50-imidacloprid-1-8-sp-lanser-gold.component.scss'
})
export class Acephate50Imidacloprid18SpLanserGoldComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/acephate-50-imidacloprid-1-8-sp-lanser-gold';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/acephate-50-imidacloprid-1-8-sp.jpg';
  readonly productImageWebpPath = 'assets/products/insecticide/acephate-50-imidacloprid-1-8-sp.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'ACEPHATE 50% + IMIDACLOPRID 1.8% SP';
  brandName = 'LANSER GOLD';

  featuredSnippetAnswer =
    'ACEPHATE 50% + IMIDACLOPRID 1.8% SP (LANSER GOLD) is a dual-action systemic insecticide by Harishree Crop Science combining organophosphate and neonicotinoid chemistry for fast, broad-spectrum control of whiteflies, aphids, thrips, jassids, and leafhoppers in cotton, chilli, paddy, tomato, brinjal, okra, and vegetable crops. Recommended dose: 25 gm per pump.';

  packSizes = [
    { volume: '500 GM', price: 454, featured: true, sku: 'LANSER-GOLD-500GM' },
    { volume: '1 KG', price: 885, featured: false, sku: 'LANSER-GOLD-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredient technology',
      description:
        'LANSER GOLD pairs Acephate 50% (IRAC 1B organophosphate) with Imidacloprid 1.8% (IRAC 4A neonicotinoid) in an advanced SP formulation for contact, systemic, and translaminar sucking pest control.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Systemic crop protection',
      description:
        'Imidacloprid absorbs into plant tissue and translocates through xylem, protecting new growth and reaching pests on unsprayed leaf undersides after foliar application.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Fast pest control',
      description:
        'Acephate delivers rapid contact and translaminar action while imidacloprid provides long-lasting systemic protection — visible whitefly, aphid, and thrips suppression soon after a well-timed spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking and chewing pests across cotton, chilli, paddy, tomato, brinjal, okra, and vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Insecticide for sucking pests',
      description:
        'Purpose-built dual action insecticide for high-pressure whitefly, aphid, thrips, and jassid outbreaks when scouting confirms economic threshold.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Resistance management support',
      description:
        'Two distinct IRAC groups (1B + 4A) in one product reduce selection pressure and support rotation in integrated pest management programs.',
      icon: 'fas fa-sync-alt'
    }
  ];

  keyBenefits = [
    {
      title: 'Whitefly control',
      description:
        'Cotton whitefly and vegetable whitefly populations are managed through contact, systemic, and translaminar action when LANSER GOLD is applied at economic threshold with underside coverage.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Aphid management',
      description:
        'Cotton aphids and vegetable aphids are controlled when LANSER GOLD reaches colonized leaf undersides and tender shoots through systemic imidacloprid movement.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Thrips suppression',
      description:
        'Chilli thrips and vegetable thrips are suppressed when LANSER GOLD is sprayed at early infestation with full canopy and flower coverage at 25 gm per pump.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Jassid control',
      description:
        'Jassids in cotton and vegetables are managed through dual MOA activity that interrupts feeding and reduces hopper burn on treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Leafhopper management',
      description:
        'Leafhopper species causing stippling and yellowing are controlled through systemic neonicotinoid activity combined with acephate contact action.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic protection',
      description:
        'Imidacloprid translocates through plant vascular tissue after foliar uptake, protecting new shoots and leaves that contact-only sprays cannot reach.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Broad spectrum activity',
      description:
        'LANSER GOLD manages whiteflies, aphids, thrips, jassids, leafhoppers, and allied sucking pests in a single broad spectrum insecticide application.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Fast action formula',
      description:
        'Acephate organophosphate chemistry delivers rapid nervous-system disruption on contact while imidacloprid stops feeding through systemic absorption.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual control',
      description:
        'The SP formulation dissolves cleanly and imidacloprid provides lasting systemic protection against newly active sucking pests between spray intervals.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop health',
      description:
        'Timely LANSER GOLD sprays limit honeydew from whiteflies, curling from aphids, and silvering from thrips — preserving leaf quality and photosynthetic capacity.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Better yield potential',
      description:
        'By controlling key sucking pests during flowering and fruit set, growers protect bolls, pods, and fruits for improved marketable productivity.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Reduced pest damage',
      description:
        'Dual MOA activity limits crop damage from active feeders on cotton, chilli, paddy, and vegetable programs facing mixed sucking pest complexes.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Translaminar activity',
      description:
        'Acephate moves through leaf cuticle into mesophyll tissue, reaching pests on the underside of leaves without requiring direct spray deposit on every surface.',
      icon: 'fas fa-exchange-alt'
    },
    {
      title: 'Dual mode of action',
      description:
        'Acephate insecticide and imidacloprid insecticide work together — organophosphate acetylcholinesterase inhibition plus neonicotinoid receptor disruption for complete pest suppression.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Contact and systemic action',
      description:
        'LANSER GOLD combines immediate contact kill from acephate with long-lasting systemic protection from imidacloprid in one soluble powder pack.',
      icon: 'fas fa-hand-paper'
    },
    {
      title: 'Effective resistance management',
      description:
        'Two distinct chemistry groups (1B + 4A) in one dual action insecticide reduce selection pressure when rotated with other MOA classes.',
      icon: 'fas fa-sync-alt'
    },
    {
      title: 'High pest pressure performance',
      description:
        'LANSER GOLD performs reliably in fields facing mixed whitefly, aphid, and thrips complexes when applied at ETL with full coverage.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Easy application',
      description:
        'Clear 25 gm per pump dosing, smooth SP mixing, and straightforward knapsack application make LANSER GOLD convenient for Indian farming systems.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Cost effective pest management',
      description:
        'Competitive pack pricing at ₹454 for 500 GM and ₹885 for 1 KG makes LANSER GOLD an economical cotton and vegetable insecticide solution.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Proven field performance',
      description:
        'Acephate Imidacloprid combination chemistry is trusted widely across India for sucking pest complexes in cotton, chilli, paddy, and horticultural crops.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures LANSER GOLD with strict quality control for uniform SP dissolution, dependable spray stability, and consistent field results.',
      icon: 'fas fa-industry'
    }
  ];

  whyChoose = [
    {
      title: 'Premium SP formulation',
      description:
        'Harishree\'s soluble powder technology dissolves rapidly in water, ensuring uniform spray suspension, excellent leaf spread, and dependable tank stability in the field.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven dual-action synergy',
      description:
        'Combining Acephate and Imidacloprid addresses both contact feeders and systemic sucking pests for more complete whitefly, aphid, and thrips management.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Trusted Harishree quality',
      description:
        'Manufactured with strict quality control, dealer support, and batch-to-batch consistency growers rely on season after season across India.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Competitive pricing',
      description:
        'LANSER GOLD offers value at ₹454 per 500 GM and ₹885 per 1 KG, delivering dual-action systemic pest control at an affordable cost per acre.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 25 gm per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply LANSER GOLD confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
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
      name: 'Thrips',
      description:
        'Controls chilli thrips and vegetable thrips that scar flowers, silver leaves, and reduce fruit quality — apply at early colonization with full canopy coverage.'
    },
    {
      name: 'Jassids',
      description:
        'Controls jassids (leafhoppers) that cause hopper burn, leaf edge browning, and reduced photosynthesis in cotton and vegetable crops.'
    },
    {
      name: 'Leafhoppers',
      description:
        'Provides activity against leafhopper species that feed on phloem sap and cause stippling, yellowing, and reduced plant vigour in paddy and vegetables.'
    },
    {
      name: 'Shoot Pests',
      description:
        'Systemic imidacloprid protects tender shoots and growing tips from sap-sucking pests that damage new vegetative growth after foliar application.'
    },
    {
      name: 'Leaf Feeding Pests',
      description:
        'Acephate contact and translaminar action provides activity against chewing and leaf-feeding pests when present alongside primary sucking pest complexes.'
    },
    {
      name: 'Other Sucking Pests',
      description:
        'Broad activity against mixed sucking pest populations including mealybug nymphs and allied sap feeders on registered crops.'
    },
    {
      name: 'Cotton Whitefly',
      description:
        'Whitefly control in cotton supports cleaner bolls, reduced honeydew deposition, and healthier fibre quality at harvest.'
    },
    {
      name: 'Vegetable Aphids',
      description:
        'Aphid control insecticide activity on brinjal, tomato, okra, and mixed vegetables preserves leaf integrity and fruit development.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Leading systemic insecticide choice for whitefly, aphid, and jassid management during square, flowering, and boll stages with fast dual-action protection.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects chilli pods and foliage from thrips, aphids, and whiteflies during vegetative, flowering, and fruit-set windows.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Paddy',
      description:
        'Controls plant hoppers, leafhoppers, and other sucking pests during vegetative and reproductive stages in rice cultivation.',
      icon: 'fas fa-water'
    },
    {
      title: 'Tomato',
      description:
        'Controls whiteflies, aphids, thrips, and jassids that reduce fruit set and transmit stress during flowering and fruit development.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Brinjal',
      description:
        'Manages aphids, jassids, whiteflies, and thrips that weaken brinjal plants and reduce fruit quality during continuous harvest cycles.',
      icon: 'fa-solid fa-leaf'
    },
    {
      title: 'Okra',
      description:
        'Defends okra pods and leaves from jassids, aphids, and whiteflies during pod formation and harvest cycles.',
      icon: 'fas fa-seedling'
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
        'Reliable cotton insecticide and vegetable insecticide for horticultural programs requiring systemic and contact sucking pest protection.',
      icon: 'fas fa-tree'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Whitefly, aphids, jassids', dose: '25 gm/pump', timing: 'At ETL during vegetative and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, whitefly', dose: '25 gm/pump', timing: 'Early colonization at flowering and fruit set' },
    { crop: 'Paddy', pests: 'Plant hoppers, leafhoppers', dose: '25 gm/pump', timing: 'Early infestation during vegetative stage' },
    { crop: 'Brinjal', pests: 'Aphids, jassids, whiteflies, thrips', dose: '25 gm/pump', timing: 'First sign of sucking pest buildup' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips', dose: '25 gm/pump', timing: 'Early infestation with underside coverage' },
    { crop: 'Okra', pests: 'Jassids, aphids, whiteflies', dose: '25 gm/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '25 gm/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Horticultural', pests: 'Whitefly, aphids, thrips', dose: '25 gm/pump', timing: 'At ETL with full canopy spray' }
  ];

  pestWiseControl = [
    { pest: 'Whiteflies', crops: 'Cotton, tomato, brinjal', mode: 'Contact + systemic + translaminar', efficacy: 'High with full coverage' },
    { pest: 'Aphids', crops: 'Cotton, vegetables', mode: 'Systemic imidacloprid + acephate contact', efficacy: 'High at early infestation' },
    { pest: 'Thrips', crops: 'Chilli, vegetables', mode: 'Contact + translaminar + systemic', efficacy: 'High at early colonization' },
    { pest: 'Jassids', crops: 'Cotton, okra, brinjal', mode: 'Contact + systemic action', efficacy: 'High with timely spray' },
    { pest: 'Leafhoppers', crops: 'Paddy, vegetables', mode: 'Systemic neonicotinoid + OP contact', efficacy: 'Moderate to high' },
    { pest: 'Cotton Whitefly', crops: 'Cotton', mode: 'Dual action systemic insecticide', efficacy: 'High at ETL' },
    { pest: 'Vegetable Aphids', crops: 'Tomato, brinjal, okra', mode: 'Systemic + contact', efficacy: 'High on colonized shoots' },
    { pest: 'Chilli Thrips', crops: 'Chilli', mode: 'Translaminar + systemic', efficacy: 'High at flower and pod stage' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', lanserGold: 'Dual MOA — Acephate + Imidacloprid (1B + 4A)', traditional: 'Single-active sprays with limited sucking pest spectrum' },
    { feature: 'Systemic protection', lanserGold: 'Imidacloprid translocates inside plant tissue', traditional: 'Contact-only; no internal crop protection' },
    { feature: 'Sucking pest spectrum', lanserGold: 'Whiteflies, aphids, thrips, jassids, leafhoppers', traditional: 'Often limited to one pest group per product' },
    { feature: 'Residual protection', lanserGold: 'Long-lasting systemic + translaminar activity', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', lanserGold: '25 gm per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', lanserGold: 'Competitive pricing — ₹454/500 GM, ₹885/1 KG', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonDualAction = [
    { feature: 'Active chemistry', lanserGold: 'Acephate 50% + Imidacloprid 1.8% SP', singleAi: 'Single-active neonicotinoid or organophosphate sprays' },
    { feature: 'Knockdown mechanism', lanserGold: 'AChE inhibition + nicotinic receptor disruption', singleAi: 'Single MOA — faster resistance selection' },
    { feature: 'Systemic action', lanserGold: 'Imidacloprid protects new growth internally', singleAi: 'Contact-only on many single-AI alternatives' },
    { feature: 'SP formulation quality', lanserGold: 'Harishree SP — rapid dissolution and spread', singleAi: 'Formulation quality varies by brand' },
    { feature: 'Whitefly and thrips efficacy', lanserGold: 'Proven dual-action on sucking pest complexes', singleAi: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', lanserGold: '25 gm/pump — straightforward dosing', singleAi: 'Dose calculations vary by product' }
  ];

  comparisonAcephateOnly = [
    { feature: 'Active chemistry', lanserGold: 'Acephate 50% + Imidacloprid 1.8% SP', generic: 'Generic Acephate 75% SP alone' },
    { feature: 'Mode of action', lanserGold: 'Organophosphate + neonicotinoid systemic', generic: 'Acetylcholinesterase inhibition only (IRAC 1B)' },
    { feature: 'Systemic protection', lanserGold: 'Imidacloprid translocates through plant tissue', generic: 'Limited systemic; primarily contact/translaminar' },
    { feature: 'Whitefly and thrips', lanserGold: 'Dual MOA for high-pressure sucking pest outbreaks', generic: 'Good contact activity; may need partner in heavy pressure' },
    { feature: 'IPM rotation value', lanserGold: 'Two MOA groups in one application', generic: 'Single MOA — rotate with neonicotinoids separately' },
    { feature: 'Application convenience', lanserGold: 'SP — dissolves easily at 25 gm/pump', generic: 'Dose and mixing vary by acephate product' }
  ];

  comparisonSpFormulation = [
    { feature: 'Tank mixing', lanserGold: 'SP dissolves evenly in water for uniform suspension', other: 'WP may require more agitation; EC/oil-based mixes differ' },
    { feature: 'Spray uniformity', lanserGold: 'Fine droplet spread across leaf surfaces and undersides', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', lanserGold: '25 gm/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', lanserGold: 'Stable SP powder in sealed original container', other: 'Liquid formulations may need special storage' },
    { feature: 'Coverage on dense canopy', lanserGold: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', lanserGold: 'Standard powder pack — easy transport and measure', other: 'Bulk liquid forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'LANSER GOLD' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Dual Action)' },
      { label: 'Formulation type', value: 'SP (Soluble Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredients', value: 'Acephate 50% + Imidacloprid 1.8% SP' },
      { label: 'Chemical groups', value: 'IRAC 1B (Acephate) + IRAC 4A (Imidacloprid)' },
      { label: 'Mode of action', value: 'Systemic + Contact + Translaminar' },
      { label: 'Action type', value: 'Systemic and contact insecticide with translaminar activity' },
      {
        label: 'Target pests',
        value: 'Whiteflies, aphids, thrips, jassids, leafhoppers, shoot pests, leaf feeders, other sucking pests'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, paddy, tomato, brinjal, okra, vegetables, horticultural crops'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Pouch/pack (SP powder); sizes 500 GM, 1 KG' },
      { label: 'Recommended dose', value: '25 gm/pump' },
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
    { label: 'Product Name', value: 'LANSER GOLD' },
    { label: 'Brand / Trade Name', value: 'LANSER GOLD' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Acephate 50% + Imidacloprid 1.8% SP' },
    { label: 'Formulation', value: 'SP (Soluble Powder)' },
    { label: 'Chemical Groups', value: 'IRAC 1B (Acephate) + IRAC 4A (Imidacloprid)' },
    { label: 'Mode of Action', value: 'Systemic + Contact + Translaminar' },
    { label: 'Action Type', value: 'Dual action systemic insecticide for sucking and chewing pests' },
    {
      label: 'Target Pests',
      value: 'Whiteflies, aphids, thrips, jassids, leafhoppers, shoot pests, leaf feeders, other sucking and chewing pests'
    },
    { label: 'Target Crops', value: 'Cotton, chilli, paddy, tomato, brinjal, okra, vegetables, horticultural crops' },
    { label: 'Recommended Dose', value: '25 gm/pump' },
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
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (500 GM, 1 KG)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'SP dissolution and foliar deposit',
      description:
        'On application, LANSER GOLD dissolves rapidly in water and forms an even spray deposit on leaf surfaces. Sucking pests contact or ingest treated foliage, absorbing Acephate and Imidacloprid through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid disruption',
      description:
        'Acephate acts on contact, inhibiting acetylcholinesterase in insect nerve tissue. Whiteflies, aphids, and thrips exposed to the spray deposit experience rapid nervous-system disruption and immediate cessation of feeding damage.'
    },
    {
      title: 'Translaminar movement — underside control',
      description:
        'Acephate penetrates the leaf cuticle and moves translaminarly into mesophyll tissue, reaching pests on the underside of leaves without requiring direct spray deposit on every surface.'
    },
    {
      title: 'Systemic absorption — Imidacloprid',
      description:
        'Imidacloprid (IRAC Group 4A) is absorbed through foliage and translocates via xylem and phloem, protecting new shoots and unsprayed plant parts from inside out — a powerful imidacloprid insecticide mechanism.'
    },
    {
      title: 'Feeding cessation and nervous disruption',
      description:
        'Imidacloprid binds to nicotinic acetylcholine receptors, causing continuous nerve stimulation, paralysis, and death. The dual MOA combination delivers fast action and long-lasting sucking pest suppression.'
    },
    {
      title: 'Long residual field protection',
      description:
        'Systemic imidacloprid activity within plant tissue maintains protection against newly active sucking pests between scheduled spray intervals, supporting sustainable crop protection programs.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 25 gm dose',
      text: 'Measure exactly 25 gm per pump to maintain efficacy, protect crops, and slow resistance development in whitefly, aphid, and thrips populations.'
    },
    {
      title: 'Avoid spray drift',
      text: 'Apply in calm weather, avoid spraying near water bodies, and keep children, animals, and beehives away from the application zone.'
    },
    {
      title: 'Safe storage',
      text: 'Store in original sealed container in a cool, dry, locked place away from direct sunlight, moisture, food, feed, seed, and children.'
    },
    {
      title: 'Container disposal',
      text: 'Triple-rinse empty packs, puncture them, and dispose as per local pesticide container management rules.'
    },
    {
      title: 'First aid readiness',
      text: 'If product contacts skin or eyes, wash thoroughly with water. If swallowed or symptoms appear, seek medical help immediately with the label.'
    }
  ];

  performanceHighlights = [
    {
      label: 'Rapid pest control',
      value: 'Growers report visible decline in whitefly, aphid, and thrips activity within hours of a well-timed LANSER GOLD spray at early infestation.'
    },
    {
      label: 'Cleaner foliage and fruits',
      value: 'Reduced honeydew, curling, and silvering improve marketable grade in chilli, cotton, tomato, and vegetable crops at harvest.'
    },
    {
      label: 'Healthier canopy',
      value: 'Systemic protection maintains photosynthetic capacity on new growth, supporting stronger vegetative and reproductive development.'
    },
    {
      label: 'Extended systemic cover',
      value: 'Imidacloprid movement inside plant tissue helps suppress newly active sucking pests between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely whitefly and thrips control on cotton and chilli helps preserve boll weight, pod quality, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'HIL THENE (Acephate 75% SP)',
      description: 'Single-AI organophosphate insecticide for thrips, aphids, whiteflies, jassids, and bollworm control in cotton, chilli, and vegetables.',
      route: '/product/acephate-75-sp',
      image: 'assets/products/insecticide/acephate-75-sp.jpg',
      imageAlt: 'HIL THENE Acephate 75% SP insecticide by Harishree Crop Science'
    },
    {
      name: 'EXTRA MIDA 70 (Imidacloprid 70% WG)',
      description: 'High-load systemic neonicotinoid for whitefly, aphid, jassid, and thrips control in cotton, chilli, and vegetables.',
      route: '/product/imidacloprid-70-wg',
      image: 'assets/products/insecticide/imidacloprid-70-wg.jpg',
      imageAlt: 'EXTRA MIDA 70 Imidacloprid 70% WG insecticide by Harishree Crop Science'
    },
    {
      name: 'MEGNUM (Tolfenpyrad + Bifenthrin SE)',
      description: 'Dual-action insecticide for thrips, whitefly, aphid, jassid, and mite control in cotton and vegetables.',
      route: '/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se-megnum',
      image: 'assets/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se.png',
      imageAlt: 'MEGNUM dual-action insecticide by Harishree Crop Science'
    },
    {
      name: 'PILOT (Pyriproxyfen + Dinotefuran + Diafenthiuron SC)',
      description: 'Triple-action insecticide for whitefly, aphid, thrips, and jassid control with IGR lifecycle disruption.',
      route: '/products/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc-pilot',
      image: 'assets/products/insecticide/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc.jpg',
      imageAlt: 'PILOT triple-action insecticide by Harishree Crop Science'
    },
    {
      name: 'FI 40 (Fipronil + Imidacloprid WG)',
      description: 'Dual-action WG insecticide combining fipronil and imidacloprid for chewing and sucking pest control.',
      route: '/product/fipronil-40-imidacloprid-40-wg',
      image: 'assets/products/insecticide/fipronil-40-imidacloprid-40-wg.jpg',
      imageAlt: 'FI 40 Fipronil Imidacloprid WG insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is ACEPHATE 50% + IMIDACLOPRID 1.8% SP?',
      answer:
        '<strong>ACEPHATE 50% + IMIDACLOPRID 1.8% SP</strong> is a dual-action soluble powder insecticide combining Acephate (organophosphate acetylcholinesterase inhibitor, IRAC 1B) with Imidacloprid (neonicotinoid systemic action, IRAC 4A) for broad-spectrum control of whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking pests on cotton, chilli, paddy, and vegetable crops.',
      answerPlain:
        'ACEPHATE 50% + IMIDACLOPRID 1.8% SP is a dual-action soluble powder insecticide combining Acephate (organophosphate acetylcholinesterase inhibitor, IRAC 1B) with Imidacloprid (neonicotinoid systemic action, IRAC 4A) for broad-spectrum control of whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking pests on cotton, chilli, paddy, and vegetable crops.'
    },
    {
      question: 'What is LANSER GOLD insecticide?',
      answer:
        '<strong>LANSER GOLD</strong> is Harishree Crop Science\'s brand of <strong>ACEPHATE 50% + IMIDACLOPRID 1.8% SP</strong> — a dual action systemic insecticide for whitefly control, aphid control, thrips control, jassid control, and leafhopper control in Indian cotton, chilli, paddy, and vegetable programs. Recommended dose: 25 gm per pump.',
      answerPlain:
        'LANSER GOLD is Harishree Crop Science\'s brand of ACEPHATE 50% + IMIDACLOPRID 1.8% SP — a dual action systemic insecticide for whitefly control, aphid control, thrips control, jassid control, and leafhopper control in Indian cotton, chilli, paddy, and vegetable programs. Recommended dose: 25 gm per pump.'
    },
    {
      question: 'How does LANSER GOLD work?',
      answer:
        'LANSER GOLD works through three complementary modes: <strong>contact action</strong> and <strong>translaminar activity</strong> from Acephate (acetylcholinesterase inhibition) plus <strong>systemic absorption</strong> from Imidacloprid (nicotinic receptor disruption). This dual MOA delivers fast pest control and long-lasting sucking pest suppression.',
      answerPlain:
        'LANSER GOLD works through three complementary modes: contact action and translaminar activity from Acephate (acetylcholinesterase inhibition) plus systemic absorption from Imidacloprid (nicotinic receptor disruption). This dual MOA delivers fast pest control and long-lasting sucking pest suppression.'
    },
    {
      question: 'What pests does LANSER GOLD control?',
      answer:
        '<strong>LANSER GOLD</strong> controls whiteflies, aphids, thrips, jassids, leafhoppers, shoot pests, leaf feeders, and other sucking and chewing pests when applied at early infestation with thorough leaf surface and underside coverage.',
      answerPlain:
        'LANSER GOLD controls whiteflies, aphids, thrips, jassids, leafhoppers, shoot pests, leaf feeders, and other sucking and chewing pests when applied at early infestation with thorough leaf surface and underside coverage.'
    },
    {
      question: 'What is the dose of LANSER GOLD?',
      answer:
        'The standard recommended dose of <strong>LANSER GOLD</strong> is <strong>25 gm per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of LANSER GOLD is 25 gm per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Can LANSER GOLD be used in cotton, chilli, paddy, and vegetables?',
      answer:
        'Yes. <strong>LANSER GOLD</strong> is widely used on <strong>cotton</strong> for whitefly and aphid control, on <strong>chilli</strong> for thrips control, on <strong>paddy</strong> for plant hopper and leafhopper management, and on <strong>vegetables</strong> including brinjal, tomato, and okra at 25 gm per pump.',
      answerPlain:
        'Yes. LANSER GOLD is widely used on cotton for whitefly and aphid control, on chilli for thrips control, on paddy for plant hopper and leafhopper management, and on vegetables including brinjal, tomato, and okra at 25 gm per pump.'
    },
    {
      question: 'Is LANSER GOLD systemic? What is translaminar action?',
      answer:
        'Yes, <strong>LANSER GOLD</strong> is <strong>systemic</strong> — Imidacloprid absorbs into plant tissue and translocates through vascular channels. <strong>Translaminar action</strong> from Acephate means the active ingredient moves through the leaf cuticle to reach pests on the underside without direct spray contact on every surface.',
      answerPlain:
        'Yes, LANSER GOLD is systemic — Imidacloprid absorbs into plant tissue and translocates through vascular channels. Translaminar action from Acephate means the active ingredient moves through the leaf cuticle to reach pests on the underside without direct spray contact on every surface.'
    },
    {
      question: 'Why choose LANSER GOLD from Harishree Crop Science?',
      answer:
        '<strong>Harishree Crop Science</strong> manufactures <strong>LANSER GOLD</strong> with strict quality control, reliable SP formulation, competitive pricing (₹454/500 GM), and farmer-focused support. Buy through authorized dealers for authentic ACEPHATE 50% + IMIDACLOPRID 1.8% SP insecticide at best price.',
      answerPlain:
        'Harishree Crop Science manufactures LANSER GOLD with strict quality control, reliable SP formulation, competitive pricing (₹454/500 GM), and farmer-focused support. Buy through authorized dealers for authentic ACEPHATE 50% + IMIDACLOPRID 1.8% SP insecticide at best price.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh Patel',
      location: 'Gujarat',
      text: 'LANSER GOLD gave excellent whitefly control in my cotton field. Populations dropped within a day and leaves looked much cleaner through the boll stage.',
      rating: 5
    },
    {
      name: 'Lakshmi Reddy',
      location: 'Andhra Pradesh',
      text: 'I used LANSER GOLD on chilli for thrips scarring on flowers. The systemic action worked fast and pods looked much better at harvest.',
      rating: 5
    },
    {
      name: 'Anil Kulkarni',
      location: 'Maharashtra',
      text: '25 gm per pump is easy to remember. LANSER GOLD mixed smoothly and controlled aphids and jassids in my brinjal and tomato fields effectively.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Measure LANSER GOLD', text: 'Accurately measure 25 gm of ACEPHATE 50% + IMIDACLOPRID 1.8% SP (LANSER GOLD) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 25 gm into the water. The SP formulation dissolves easily into a uniform spray mix. Top up and agitate.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on leaf undersides where sucking pests feed.' },
    { name: 'Ensure complete crop coverage', text: 'Cover both leaf surfaces on cotton, chilli, paddy, and vegetable crops — dual action insecticide efficacy depends on thorough spray deposit.' },
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
      productImageAlt: 'LANSER GOLD ACEPHATE 50% + IMIDACLOPRID 1.8% SP Insecticide',
      productImageCaption: 'LANSER GOLD ACEPHATE 50% + IMIDACLOPRID 1.8% SP insecticide pack by Harishree Crop Science',
      description:
        'LANSER GOLD (ACEPHATE 50% + IMIDACLOPRID 1.8% SP) by Harishree Crop Science is a dual-action systemic insecticide for whiteflies, aphids, thrips, jassids, and leafhoppers on cotton, chilli, paddy, and vegetables. Dose: 25 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'LANSER-GOLD-ACEPHATE-IMIDACLOPRID-SP',
      mpn: 'LANSER-GOLD-ACEPHATE-IMIDACLOPRID-SP',
      dose: '25 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply LANSER GOLD (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of LANSER GOLD (ACEPHATE 50% + IMIDACLOPRID 1.8% SP) for foliar application at 25 gm/pump.',
      alternateNames: [
        'LANSER GOLD',
        'LANSER GOLD Insecticide',
        'Lanser Gold Acephate Imidacloprid SP',
        'Acephate 50 Imidacloprid 1.8 SP',
        'Acephate Imidacloprid insecticide',
        'Acephate insecticide',
        'Imidacloprid insecticide',
        'Dual action insecticide',
        'Systemic insecticide',
        'Best insecticide for sucking pests',
        'Whitefly control insecticide',
        'Aphid control insecticide',
        'Thrips control insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `LANSER GOLD (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SP (Soluble Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy ACEPHATE 50% + IMIDACLOPRID 1.8% SP (LANSER GOLD) for whitefly, aphid & thrips control. Systemic dual-action insecticide. Best price ₹454/500g. Harishree Crop Science. 25 gm/pump.';

    this.seo.setAll(
      {
        title: 'ACEPHATE 50% + IMIDACLOPRID 1.8% SP | LANSER GOLD',
        description: desc,
        keywords:
          'ACEPHATE 50% + IMIDACLOPRID 1.8% SP, Acephate 50 Imidacloprid 1.8 SP, LANSER GOLD, LANSER GOLD insecticide, Acephate Imidacloprid insecticide, Acephate insecticide, Imidacloprid insecticide, Best insecticide for sucking pests, Whitefly control insecticide, Aphid control insecticide, Thrips control insecticide, Jassid control insecticide, Leafhopper control insecticide, Systemic insecticide, Dual action insecticide, Cotton insecticide, Chilli insecticide, Paddy insecticide, Vegetable insecticide, Broad spectrum insecticide, Fast action insecticide, Contact and systemic insecticide, Insecticide for resistant pests, Whitefly control, Aphid control, Thrips control, Jassid control, Leafhopper control, Pest management, Crop protection, Agricultural insecticide, Integrated pest management, Modern insecticide technology, Crop yield improvement, Sucking pest control, Crop health enhancement, Harishree Crop Science, LANSER GOLD price, ACEPHATE 50% + IMIDACLOPRID 1.8% SP price',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'ACEPHATE 50% + IMIDACLOPRID 1.8% SP (LANSER GOLD) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'ACEPHATE 50% + IMIDACLOPRID 1.8% SP | LANSER GOLD Insecticide',
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
