import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'PRIDE_H_ACETAMIPRID_20_SP';
const INDICATIVE_LIST_PRICE_INR = 401;

@Component({
  selector: 'app-acetamiprid-20-sp-pride-h',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acetamiprid-20-sp-pride-h.component.html',
  styleUrl: './acetamiprid-20-sp-pride-h.component.scss'
})
export class Acetamiprid20SpPrideHComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/acetamiprid-20-sp';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/acetamiprid-20-sp.png';
  readonly productImageWebpPath = 'assets/products/insecticide/acetamiprid-20-sp.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'ACETAMIPRID 20% SP';
  brandName = 'PRIDE H';

  featuredSnippetAnswer =
    'ACETAMIPRID 20% SP (PRIDE H) is a systemic neonicotinoid insecticide by Harishree Crop Science for fast, broad-spectrum control of whiteflies, aphids, thrips, jassids, and leafhoppers in cotton, chilli, tomato, brinjal, okra, cabbage, and vegetable crops. Recommended dose: 10 gm per pump.';

  packSizes = [
    { volume: '100 GM', price: 100, featured: false, sku: 'PRIDE-H-100GM' },
    { volume: '250 GM', price: 212, featured: false, sku: 'PRIDE-H-250GM' },
    { volume: '500 GM', price: 401, featured: true, sku: 'PRIDE-H-500GM' }
  ];

  quickHighlights = [
    {
      title: 'Neonicotinoid insecticide technology',
      description:
        'PRIDE H delivers Acetamiprid 20% SP (IRAC 4A neonicotinoid) in an advanced soluble powder formulation for systemic and contact sucking pest control.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Systemic crop protection',
      description:
        'Acetamiprid absorbs into plant tissue and translocates through vascular channels, protecting new growth and reaching pests on unsprayed leaf undersides.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Fast pest control',
      description:
        'Visible whitefly, aphid, and thrips suppression soon after a well-timed spray — feeding inhibition and nervous-system disruption act quickly on treated foliage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking pests across cotton, chilli, tomato, brinjal, okra, cabbage, and vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Best insecticide for sucking pests',
      description:
        'Purpose-built systemic insecticide for high-pressure whitefly, aphid, thrips, and jassid outbreaks when scouting confirms economic threshold.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual activity',
      description:
        'Systemic acetamiprid activity within plant tissue maintains protection against newly active sucking pests between scheduled spray intervals.',
      icon: 'fas fa-hourglass-half'
    }
  ];

  keyBenefits = [
    {
      title: 'Systemic protection',
      description:
        'Acetamiprid translocates through plant vascular tissue after foliar uptake, protecting new shoots and leaves that contact-only sprays cannot reach.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Whitefly control',
      description:
        'Cotton whitefly and vegetable whitefly populations are managed through systemic and contact action when PRIDE H is applied at economic threshold with underside coverage.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Aphid management',
      description:
        'Cotton aphids and vegetable aphids are controlled when PRIDE H reaches colonized leaf undersides and tender shoots through systemic acetamiprid movement.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Thrips suppression',
      description:
        'Chilli thrips and vegetable thrips are suppressed when PRIDE H is sprayed at early infestation with full canopy and flower coverage at 10 gm per pump.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Jassid control',
      description:
        'Jassids in cotton and vegetables are managed through acetamiprid activity that interrupts feeding and reduces hopper burn on treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual action',
      description:
        'The SP formulation dissolves cleanly and acetamiprid provides lasting systemic protection against newly active sucking pests between spray intervals.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Easy mixing',
      description:
        'PRIDE H SP dissolves rapidly in water for uniform spray suspension — straightforward 10 gm per pump dosing for Indian knapsack sprayer programs.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Better crop health',
      description:
        'Timely PRIDE H sprays limit honeydew from whiteflies, curling from aphids, and silvering from thrips — preserving leaf quality and photosynthetic capacity.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Improved yield',
      description:
        'By controlling key sucking pests during flowering and fruit set, growers protect bolls, pods, and fruits for improved marketable productivity.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Broad spectrum control',
      description:
        'PRIDE H manages whiteflies, aphids, thrips, jassids, leafhoppers, and allied sucking pests in a single broad spectrum insecticide application.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Neonicotinoid technology',
      description:
        'Modern IRAC 4A chemistry disrupts nicotinic acetylcholine receptors for effective feeding inhibition and nervous-system disruption in target pests.',
      icon: 'fas fa-atom'
    },
    {
      title: 'Fast action formula',
      description:
        'Acetamiprid insecticide delivers rapid feeding cessation on contact while systemic absorption stops pest damage from inside the plant.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Cost effective pest management',
      description:
        'Competitive pack pricing at ₹100 for 100 GM, ₹212 for 250 GM, and ₹401 for 500 GM makes PRIDE H an economical cotton and vegetable insecticide solution.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Proven field performance',
      description:
        'Acetamiprid 20% SP chemistry is trusted widely across India for sucking pest complexes in cotton, chilli, and horticultural crops.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures PRIDE H with strict quality control for uniform SP dissolution, dependable spray stability, and consistent field results.',
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
      title: 'Proven systemic performance',
      description:
        'Acetamiprid 20% SP addresses contact and systemic sucking pests for complete whitefly, aphid, and thrips management in one pack.',
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
        'PRIDE H offers value at ₹401 per 500 GM, delivering systemic neonicotinoid pest control at an affordable cost per acre.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 10 gm per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply PRIDE H confidently in the field.',
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
        'Provides activity against leafhopper species that feed on phloem sap and cause stippling, yellowing, and reduced plant vigour in vegetables.'
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
        'Leading systemic insecticide choice for whitefly, aphid, and jassid management during square, flowering, and boll stages with fast neonicotinoid protection.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Chilli',
      description:
        'Protects chilli pods and foliage from thrips, aphids, and whiteflies during vegetative, flowering, and fruit-set windows.',
      icon: 'fas fa-pepper-hot'
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
      title: 'Cabbage',
      description:
        'Controls aphids and allied sucking pests on cabbage and cole crops during head formation and market preparation stages.',
      icon: 'fas fa-leaf'
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
        'Reliable cotton insecticide and vegetable insecticide for horticultural programs requiring systemic sucking pest protection.',
      icon: 'fas fa-tree'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Whitefly, aphids, jassids', dose: '10 gm/pump', timing: 'At ETL during vegetative and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, whitefly', dose: '10 gm/pump', timing: 'Early colonization at flowering and fruit set' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips', dose: '10 gm/pump', timing: 'Early infestation with underside coverage' },
    { crop: 'Brinjal', pests: 'Aphids, jassids, whiteflies, thrips', dose: '10 gm/pump', timing: 'First sign of sucking pest buildup' },
    { crop: 'Okra', pests: 'Jassids, aphids, whiteflies', dose: '10 gm/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Cabbage', pests: 'Aphids, thrips', dose: '10 gm/pump', timing: 'Early infestation during head formation' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '10 gm/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Horticultural', pests: 'Whitefly, aphids, thrips', dose: '10 gm/pump', timing: 'At ETL with full canopy spray' }
  ];

  pestWiseControl = [
    { pest: 'Whiteflies', crops: 'Cotton, tomato, brinjal', mode: 'Systemic + contact', efficacy: 'High with full coverage' },
    { pest: 'Aphids', crops: 'Cotton, vegetables', mode: 'Systemic acetamiprid', efficacy: 'High at early infestation' },
    { pest: 'Thrips', crops: 'Chilli, vegetables', mode: 'Contact + systemic', efficacy: 'High at early colonization' },
    { pest: 'Jassids', crops: 'Cotton, okra, brinjal', mode: 'Systemic + contact action', efficacy: 'High with timely spray' },
    { pest: 'Leafhoppers', crops: 'Vegetables', mode: 'Systemic neonicotinoid', efficacy: 'Moderate to high' },
    { pest: 'Cotton Whitefly', crops: 'Cotton', mode: 'Systemic insecticide', efficacy: 'High at ETL' },
    { pest: 'Vegetable Aphids', crops: 'Tomato, brinjal, okra', mode: 'Systemic acetamiprid', efficacy: 'High on colonized shoots' },
    { pest: 'Chilli Thrips', crops: 'Chilli', mode: 'Systemic + contact', efficacy: 'High at flower and pod stage' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', prideH: 'Systemic neonicotinoid — Acetamiprid 20% SP (IRAC 4A)', traditional: 'Older contact-only sprays with limited systemic reach' },
    { feature: 'Systemic protection', prideH: 'Acetamiprid translocates inside plant tissue', traditional: 'Contact-only; no internal crop protection' },
    { feature: 'Sucking pest spectrum', prideH: 'Whiteflies, aphids, thrips, jassids, leafhoppers', traditional: 'Often limited to one pest group per product' },
    { feature: 'Residual protection', prideH: 'Long-lasting systemic activity in plant tissue', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', prideH: '10 gm per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', prideH: 'Competitive pricing — ₹401/500 GM', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonDualAction = [
    { feature: 'Active chemistry', prideH: 'Acetamiprid 20% SP — single high-efficacy neonicotinoid', singleAi: 'Mixed generic sprays with inconsistent formulation quality' },
    { feature: 'Knockdown mechanism', prideH: 'Nicotinic receptor disruption + feeding inhibition', singleAi: 'Older chemistry with faster resistance selection' },
    { feature: 'Systemic action', prideH: 'Acetamiprid protects new growth internally', singleAi: 'Limited systemic reach on many alternatives' },
    { feature: 'SP formulation quality', prideH: 'Harishree SP — rapid dissolution and spread', singleAi: 'Formulation quality varies by brand' },
    { feature: 'Whitefly and thrips efficacy', prideH: 'Proven acetamiprid activity on sucking pest complexes', singleAi: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', prideH: '10 gm/pump — straightforward dosing', singleAi: 'Dose calculations vary by product' }
  ];

  comparisonAcephateOnly = [
    { feature: 'Active chemistry', prideH: 'Acetamiprid 20% SP (IRAC 4A neonicotinoid)', generic: 'Generic organophosphate or pyrethroid sprays' },
    { feature: 'Mode of action', prideH: 'Systemic neonicotinoid with contact activity', generic: 'Primarily contact; limited internal protection' },
    { feature: 'Systemic protection', prideH: 'Acetamiprid translocates through plant tissue', generic: 'No systemic protection of new growth' },
    { feature: 'Whitefly and thrips', prideH: 'Purpose-built for high-pressure sucking pest outbreaks', generic: 'May need partner products in heavy pressure' },
    { feature: 'Crop safety profile', prideH: 'Modern chemistry with favourable mammalian toxicity profile', generic: 'Older chemistry with stricter handling requirements' },
    { feature: 'Application convenience', prideH: 'SP — dissolves easily at 10 gm/pump', generic: 'Dose and mixing vary by product type' }
  ];

  comparisonSpFormulation = [
    { feature: 'Tank mixing', prideH: 'SP dissolves evenly in water for uniform suspension', other: 'WP may require more agitation; EC/oil-based mixes differ' },
    { feature: 'Spray uniformity', prideH: 'Fine droplet spread across leaf surfaces and undersides', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', prideH: '10 gm/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', prideH: 'Stable SP powder in sealed original container', other: 'Liquid formulations may need special storage' },
    { feature: 'Coverage on dense canopy', prideH: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', prideH: 'Standard powder pack — easy transport and measure', other: 'Bulk liquid forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'PRIDE H' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'SP (Soluble Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Acetamiprid 20% SP' },
      { label: 'Chemical group', value: 'IRAC 4A (Neonicotinoid)' },
      { label: 'Mode of action', value: 'Systemic + Contact' },
      { label: 'Action type', value: 'Systemic insecticide with contact and feeding inhibition activity' },
      {
        label: 'Target pests',
        value: 'Whiteflies, aphids, thrips, jassids, leafhoppers, other sucking pests'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, tomato, brinjal, okra, cabbage, vegetables, horticultural crops'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Pouch/pack (SP powder); sizes 100 GM, 250 GM, 500 GM' },
      { label: 'Recommended dose', value: '10 gm/pump' },
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
    { label: 'Product Name', value: 'PRIDE H' },
    { label: 'Brand / Trade Name', value: 'PRIDE H' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Acetamiprid 20% SP' },
    { label: 'Formulation', value: 'SP (Soluble Powder)' },
    { label: 'Chemical Group', value: 'IRAC 4A (Neonicotinoid)' },
    { label: 'Mode of Action', value: 'Systemic + Contact' },
    { label: 'Action Type', value: 'Systemic insecticide for sucking pest control' },
    {
      label: 'Target Pests',
      value: 'Whiteflies, aphids, thrips, jassids, leafhoppers, other sucking pests'
    },
    { label: 'Target Crops', value: 'Cotton, chilli, tomato, brinjal, okra, cabbage, vegetables, horticultural crops' },
    { label: 'Recommended Dose', value: '10 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early sucking pest infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spray drift; keep away from children; follow label instructions' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (100 GM, 250 GM, 500 GM)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'SP dissolution and foliar deposit',
      description:
        'On application, PRIDE H dissolves rapidly in water and forms an even spray deposit on leaf surfaces. Sucking pests contact or ingest treated foliage, absorbing Acetamiprid through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid disruption',
      description:
        'Acetamiprid acts on contact, binding to nicotinic acetylcholine receptors in insect nerve tissue. Whiteflies, aphids, and thrips exposed to the spray deposit experience rapid feeding inhibition and nervous-system disruption.'
    },
    {
      title: 'Systemic absorption — Acetamiprid',
      description:
        'Acetamiprid (IRAC Group 4A) is absorbed through foliage and translocates via xylem, protecting new shoots and unsprayed plant parts from inside out — a powerful neonicotinoid insecticide mechanism.'
    },
    {
      title: 'Feeding inhibition',
      description:
        'Acetamiprid disrupts normal nerve signalling, causing continuous stimulation that stops pest feeding soon after exposure — limiting crop damage even before full mortality occurs.'
    },
    {
      title: 'Nervous system disruption',
      description:
        'The neonicotinoid mode of action causes paralysis and death in target sucking pests, delivering fast action and long-lasting suppression of whitefly, aphid, and thrips populations.'
    },
    {
      title: 'Long residual field protection',
      description:
        'Systemic acetamiprid activity within plant tissue maintains protection against newly active sucking pests between scheduled spray intervals, supporting sustainable crop protection programs.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 10 gm dose',
      text: 'Measure exactly 10 gm per pump to maintain efficacy, protect crops, and slow resistance development in whitefly, aphid, and thrips populations.'
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
      value: 'Growers report visible decline in whitefly, aphid, and thrips activity within hours of a well-timed PRIDE H spray at early infestation.'
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
      value: 'Acetamiprid movement inside plant tissue helps suppress newly active sucking pests between scheduled spray intervals.'
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
      name: 'PILOT (Pyriproxyfen + Dinotefuran + Diafenthiuron SC)',
      description: 'Triple-action insecticide for whitefly, aphid, thrips, and jassid control with IGR lifecycle disruption.',
      route: '/products/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc-pilot',
      image: 'assets/products/insecticide/pyriproxyfen-8-dinotefuran-5-diafenthiuron-18-sc.jpg',
      imageAlt: 'PILOT triple-action insecticide by Harishree Crop Science'
    },
    {
      name: 'MEGNUM (Tolfenpyrad + Bifenthrin SE)',
      description: 'Dual-action insecticide for thrips, whitefly, aphid, jassid, and mite control in cotton and vegetables.',
      route: '/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se-megnum',
      image: 'assets/products/insecticide/tolfenpyrad-15-bifenthrin-7-5-se.png',
      imageAlt: 'MEGNUM dual-action insecticide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Acetamiprid 20% SP?',
      answer:
        '<strong>Acetamiprid 20% SP</strong> is a soluble powder insecticide containing Acetamiprid (IRAC Group 4A neonicotinoid) at 20% concentration for broad-spectrum control of whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking pests on cotton, chilli, tomato, brinjal, okra, cabbage, and vegetable crops.',
      answerPlain:
        'Acetamiprid 20% SP is a soluble powder insecticide containing Acetamiprid (IRAC Group 4A neonicotinoid) at 20% concentration for broad-spectrum control of whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking pests on cotton, chilli, tomato, brinjal, okra, cabbage, and vegetable crops.'
    },
    {
      question: 'What is Pride H insecticide?',
      answer:
        '<strong>PRIDE H</strong> is Harishree Crop Science\'s brand of <strong>Acetamiprid 20% SP</strong> — a systemic neonicotinoid insecticide for whitefly control, aphid control, thrips control, and jassid control in Indian cotton, chilli, and vegetable programs. Recommended dose: 10 gm per pump.',
      answerPlain:
        'PRIDE H is Harishree Crop Science\'s brand of Acetamiprid 20% SP — a systemic neonicotinoid insecticide for whitefly control, aphid control, thrips control, and jassid control in Indian cotton, chilli, and vegetable programs. Recommended dose: 10 gm per pump.'
    },
    {
      question: 'Which pests does Pride H control?',
      answer:
        '<strong>PRIDE H</strong> controls whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage.',
      answerPlain:
        'PRIDE H controls whiteflies, aphids, thrips, jassids, leafhoppers, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage.'
    },
    {
      question: 'Is Pride H effective against whiteflies?',
      answer:
        'Yes. <strong>PRIDE H</strong> (Acetamiprid 20% SP) is highly effective against cotton whitefly and vegetable whitefly when sprayed at economic threshold with emphasis on leaf undersides where whiteflies feed and reproduce.',
      answerPlain:
        'Yes. PRIDE H (Acetamiprid 20% SP) is highly effective against cotton whitefly and vegetable whitefly when sprayed at economic threshold with emphasis on leaf undersides where whiteflies feed and reproduce.'
    },
    {
      question: 'Can it control aphids and thrips?',
      answer:
        'Yes. <strong>PRIDE H</strong> controls both aphids and thrips through systemic acetamiprid activity. Apply at early colonization on chilli for thrips and on cotton and vegetables for aphids at 10 gm per pump.',
      answerPlain:
        'Yes. PRIDE H controls both aphids and thrips through systemic acetamiprid activity. Apply at early colonization on chilli for thrips and on cotton and vegetables for aphids at 10 gm per pump.'
    },
    {
      question: 'What is the recommended dose of Pride H?',
      answer:
        'The standard recommended dose of <strong>PRIDE H</strong> is <strong>10 gm per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of PRIDE H is 10 gm per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can use Acetamiprid 20% SP?',
      answer:
        '<strong>Acetamiprid 20% SP</strong> (PRIDE H) is widely used on <strong>cotton</strong> for whitefly and aphid control, on <strong>chilli</strong> for thrips control, and on <strong>vegetables</strong> including tomato, brinjal, okra, and cabbage at 10 gm per pump.',
      answerPlain:
        'Acetamiprid 20% SP (PRIDE H) is widely used on cotton for whitefly and aphid control, on chilli for thrips control, and on vegetables including tomato, brinjal, okra, and cabbage at 10 gm per pump.'
    },
    {
      question: 'How should Pride H be applied?',
      answer:
        'Fill a 15-litre knapsack sprayer with clean water, add <strong>10 gm of PRIDE H</strong>, mix thoroughly until the SP dissolves, and spray uniformly over foliage with emphasis on leaf undersides. Apply in calm morning or evening hours for best whitefly, aphid, and thrips control.',
      answerPlain:
        'Fill a 15-litre knapsack sprayer with clean water, add 10 gm of PRIDE H, mix thoroughly until the SP dissolves, and spray uniformly over foliage with emphasis on leaf undersides. Apply in calm morning or evening hours for best whitefly, aphid, and thrips control.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh Patel',
      location: 'Gujarat',
      text: 'PRIDE H gave excellent whitefly control in my cotton field. Populations dropped within a day and leaves looked much cleaner through the boll stage. The 10 gm per pump dose is easy to follow.',
      rating: 5
    },
    {
      name: 'Lakshmi Reddy',
      location: 'Andhra Pradesh',
      text: 'I used PRIDE H on chilli for thrips scarring on flowers. The systemic action worked fast and pods looked much better at harvest. Acetamiprid 20% SP mixed smoothly in my knapsack.',
      rating: 5
    },
    {
      name: 'Anil Kulkarni',
      location: 'Maharashtra',
      text: 'PRIDE H controlled aphids and jassids in my brinjal and tomato fields effectively. The price at ₹401 for 500 gm is competitive and the results were consistent across the season.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '88',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Measure PRIDE H', text: 'Accurately measure 10 gm of Acetamiprid 20% SP (PRIDE H) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 10 gm into the water. The SP formulation dissolves easily into a uniform spray mix. Top up and agitate.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on leaf undersides where sucking pests feed.' },
    { name: 'Ensure complete crop coverage', text: 'Cover both leaf surfaces on cotton, chilli, and vegetable crops — systemic insecticide efficacy depends on thorough spray deposit.' },
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
      productImageAlt: 'PRIDE H Acetamiprid 20% SP Insecticide',
      productImageCaption: 'PRIDE H Acetamiprid 20% SP insecticide pack by Harishree Crop Science',
      description:
        'PRIDE H (Acetamiprid 20% SP) by Harishree Crop Science is a systemic neonicotinoid insecticide for whiteflies, aphids, thrips, jassids, and leafhoppers on cotton, chilli, tomato, brinjal, okra, and vegetables. Dose: 10 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'PRIDE-H-ACETAMIPRID-20-SP',
      mpn: 'PRIDE-H-ACETAMIPRID-20-SP',
      dose: '10 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply PRIDE H (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of PRIDE H (Acetamiprid 20% SP) for foliar application at 10 gm/pump.',
      alternateNames: [
        'PRIDE H',
        'PRIDE H Insecticide',
        'Pride H Acetamiprid SP',
        'Acetamiprid 20 SP',
        'Acetamiprid insecticide',
        'Neonicotinoid insecticide',
        'Systemic insecticide',
        'Best insecticide for sucking pests',
        'Whitefly control insecticide',
        'Aphid control insecticide',
        'Thrips control insecticide',
        'Jassid control insecticide',
        'Buy Acetamiprid 20 SP online',
        'Acetamiprid 20 SP price'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `PRIDE H (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SP (Soluble Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Acetamiprid 20% SP (Pride H) for whitefly control & aphid control on cotton, chilli & vegetables. Systemic neonicotinoid insecticide. Best price ₹401/500g. 10 gm/pump.';

    this.seo.setAll(
      {
        title: 'Acetamiprid 20% SP | Pride H | Best Price',
        description: desc,
        keywords:
          'Acetamiprid 20% SP, Acetamiprid 20 SP, PRIDE H, PRIDE H insecticide, Acetamiprid insecticide, Neonicotinoid insecticide, Systemic insecticide, Best insecticide for sucking pests, Whitefly control insecticide, Aphid control insecticide, Thrips control insecticide, Jassid control insecticide, Whitefly control, Aphid control, Thrips control, Jassid control, Broad spectrum insecticide, Cotton insecticide, Chilli insecticide, Acetamiprid insecticide for cotton, Acetamiprid for chilli, Acetamiprid for vegetables, Vegetable insecticide, Fast action insecticide, Pest management, Crop protection, Agricultural insecticide, Integrated pest management, Modern insecticide technology, Crop yield improvement, Sucking pest control, Crop health enhancement, Harishree Crop Science, PRIDE H price, Acetamiprid 20 SP price, Buy Acetamiprid 20 SP online',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Acetamiprid 20% SP (PRIDE H) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Acetamiprid 20% SP | PRIDE H Insecticide',
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
