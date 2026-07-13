import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'HIL_THENE_ACEPHATE_75_SP';
const INDICATIVE_LIST_PRICE_INR = 277;

@Component({
  selector: 'app-acephate-75-sp-hil-thene',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acephate-75-sp-hil-thene.component.html',
  styleUrl: './acephate-75-sp-hil-thene.component.scss'
})
export class Acephate75SpHilTheneComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/product/acephate-75-sp';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/acephate-75-sp.jpg';
  readonly productImageWebpPath = 'assets/products/insecticide/acephate-75-sp.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'ACEPHATE 75% SP';
  brandName = 'HIL THENE';

  featuredSnippetAnswer =
    'ACEPHATE 75% SP (HIL THENE) is a systemic and contact organophosphate insecticide by Harishree Crop Science for broad-spectrum control of thrips, aphids, whiteflies, jassids, bollworms, and leaf-eating caterpillars in cotton, chilli, paddy, tomato, brinjal, okra, and vegetable crops. Recommended dose: 25 gm per pump.';

  packSizes = [
    { volume: '250 GM', price: 147, featured: false, sku: 'HIL-THENE-250GM' },
    { volume: '500 GM', price: 277, featured: true, sku: 'HIL-THENE-500GM' },
    { volume: '1 KG', price: 531, featured: false, sku: 'HIL-THENE-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Organophosphate insecticide technology',
      description:
        'HIL THENE delivers Acephate 75% SP (IRAC 1B organophosphate) in a premium soluble powder formulation for systemic and contact broad-spectrum pest control.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Systemic crop protection',
      description:
        'Acephate absorbs into plant tissue and translocates through vascular channels, protecting new growth and reaching pests on unsprayed leaf undersides.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Quick knockdown',
      description:
        'Visible thrips, aphid, and whitefly suppression soon after a well-timed spray — acetylcholinesterase inhibition delivers fast pest knockdown on treated foliage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls thrips, aphids, whiteflies, jassids, bollworms, leafhoppers, and leaf-eating caterpillars across cotton, chilli, paddy, tomato, brinjal, okra, and vegetables.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Best insecticide for sucking pests',
      description:
        'Purpose-built systemic insecticide for high-pressure thrips, aphid, whitefly, and jassid outbreaks when scouting confirms economic threshold.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Long residual activity',
      description:
        'Systemic acephate activity within plant tissue maintains protection against newly active sucking and chewing pests between scheduled spray intervals.',
      icon: 'fas fa-hourglass-half'
    }
  ];

  keyBenefits = [
    {
      title: 'Systemic protection',
      description:
        'Acephate translocates through plant vascular tissue after foliar uptake, protecting new shoots and leaves that contact-only sprays cannot reach.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Broad spectrum control',
      description:
        'HIL THENE manages sucking and chewing pests in a single broad spectrum insecticide application — thrips, aphids, whiteflies, jassids, and bollworms.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Thrips management',
      description:
        'Chilli thrips and vegetable thrips are suppressed when HIL THENE is sprayed at early infestation with full canopy and flower coverage at 25 gm per pump.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Aphid control',
      description:
        'Cotton aphids and vegetable aphids are controlled when HIL THENE reaches colonized leaf undersides and tender shoots through systemic acephate movement.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Whitefly suppression',
      description:
        'Cotton whitefly and vegetable whitefly populations are managed through systemic and contact action when HIL THENE is applied at economic threshold.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Jassid control',
      description:
        'Jassids in cotton and vegetables are managed through acephate activity that interrupts feeding and reduces hopper burn on treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Bollworm management',
      description:
        'Bollworm larvae on cotton are controlled through acephate contact and translaminar action when applied at early larval stage with thorough canopy coverage.',
      icon: 'fas fa-spider'
    },
    {
      title: 'Quick knockdown',
      description:
        'Acephate insecticide delivers rapid nervous-system disruption on contact while systemic absorption stops pest damage from inside the plant.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual activity',
      description:
        'The SP formulation dissolves cleanly and acephate provides lasting systemic protection against newly active pests between spray intervals.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Better crop health',
      description:
        'Timely HIL THENE sprays limit honeydew from whiteflies, curling from aphids, and silvering from thrips — preserving leaf quality and photosynthetic capacity.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Improved yield',
      description:
        'By controlling key pests during flowering and fruit set, growers protect bolls, pods, and fruits for improved marketable productivity.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Cost effective protection',
      description:
        'Competitive pack pricing at ₹147 for 250 GM, ₹277 for 500 GM, and ₹531 for 1 KG makes HIL THENE an economical cotton and vegetable insecticide solution.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Easy application',
      description:
        'HIL THENE SP dissolves rapidly in water for uniform spray suspension — straightforward 25 gm per pump dosing for Indian knapsack sprayer programs.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Proven field performance',
      description:
        'Acephate 75% SP chemistry is trusted widely across India for pest complexes in cotton, chilli, paddy, and horticultural crops.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'Reliable Harishree formulation',
      description:
        'Harishree Crop Science manufactures HIL THENE with strict quality control for uniform SP dissolution, dependable spray stability, and consistent field results.',
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
        'Acephate 75% SP addresses contact and systemic sucking and chewing pests for complete thrips, aphid, whitefly, and bollworm management in one pack.',
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
        'HIL THENE offers value at ₹277 per 500 GM, delivering systemic organophosphate pest control at an affordable cost per acre.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 25 gm per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply HIL THENE confidently in the field.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  targetPests = [
    {
      name: 'Thrips',
      description:
        'Controls chilli thrips and vegetable thrips that scar flowers, silver leaves, and reduce export quality — apply at early colonization with full canopy coverage.'
    },
    {
      name: 'Aphids',
      description:
        'Suppresses cotton aphids and vegetable aphids that colonize tender shoots and leaf undersides, causing curling, stunting, and yield loss.'
    },
    {
      name: 'Whiteflies',
      description:
        'Manages cotton whitefly and vegetable whitefly species causing honeydew, sooty mould, and virus transmission risk when populations exceed economic threshold.'
    },
    {
      name: 'Jassids',
      description:
        'Controls jassids (leafhoppers) that cause hopper burn, leaf edge browning, and reduced photosynthesis in cotton and vegetable crops.'
    },
    {
      name: 'Leafhoppers',
      description:
        'Provides activity against leafhopper species that feed on phloem sap and cause stippling, yellowing, and reduced plant vigour in vegetables and paddy.'
    },
    {
      name: 'Bollworms',
      description:
        'Controls bollworm larvae on cotton through acephate contact and translaminar action when applied at early larval stage with thorough canopy spray.'
    },
    {
      name: 'Leaf Eating Caterpillars',
      description:
        'Acephate contact and translaminar action provides activity against leaf-feeding caterpillars when present alongside primary sucking pest complexes.'
    },
    {
      name: 'Other Sucking and Chewing Pests',
      description:
        'Broad activity against mixed sucking and chewing pest populations on registered crops when applied at economic threshold with full coverage.'
    }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Leading organophosphate insecticide choice for jassid, bollworm, whitefly, and aphid management during square, flowering, and boll stages.',
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
        'Controls stem borer, leaf folder, plant hoppers, and green leafhopper in rice when applied as per label and local advisory guidance.',
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
        'Broad fit across brinjal, okra, beans, capsicum, and mixed vegetable crops facing sucking and chewing pest pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Horticultural Crops',
      description:
        'Reliable cotton insecticide and vegetable insecticide for horticultural programs requiring systemic and contact pest protection.',
      icon: 'fas fa-tree'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Jassids, bollworms, whitefly, aphids', dose: '25 gm/pump', timing: 'At ETL during vegetative and boll stages' },
    { crop: 'Chilli', pests: 'Thrips, aphids, whitefly', dose: '25 gm/pump', timing: 'Early colonization at flowering and fruit set' },
    { crop: 'Paddy', pests: 'Stem borer, leaf folder, hoppers', dose: '25 gm/pump', timing: 'At ETL during vegetative and reproductive stages' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips', dose: '25 gm/pump', timing: 'Early infestation with underside coverage' },
    { crop: 'Brinjal', pests: 'Aphids, jassids, whiteflies, thrips', dose: '25 gm/pump', timing: 'First sign of sucking pest buildup' },
    { crop: 'Okra', pests: 'Jassids, aphids, whiteflies', dose: '25 gm/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Vegetables', pests: 'Mixed sucking and chewing pests', dose: '25 gm/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Horticultural', pests: 'Thrips, whitefly, aphids, bollworms', dose: '25 gm/pump', timing: 'At ETL with full canopy spray' }
  ];

  pestWiseControl = [
    { pest: 'Thrips', crops: 'Chilli, vegetables', mode: 'Contact + systemic acephate', efficacy: 'High at early colonization' },
    { pest: 'Aphids', crops: 'Cotton, vegetables', mode: 'Systemic + contact acephate', efficacy: 'High at early infestation' },
    { pest: 'Whiteflies', crops: 'Cotton, tomato, brinjal', mode: 'Systemic + contact', efficacy: 'High with full coverage' },
    { pest: 'Jassids', crops: 'Cotton, okra, brinjal', mode: 'Systemic + contact action', efficacy: 'High with timely spray' },
    { pest: 'Bollworms', crops: 'Cotton', mode: 'Contact + translaminar acephate', efficacy: 'High at early larval stage' },
    { pest: 'Leafhoppers', crops: 'Paddy, vegetables', mode: 'Systemic organophosphate', efficacy: 'Moderate to high' },
    { pest: 'Leaf Eating Caterpillars', crops: 'Cotton, vegetables', mode: 'Contact + translaminar', efficacy: 'Moderate to high' },
    { pest: 'Chilli Thrips', crops: 'Chilli', mode: 'Systemic + contact', efficacy: 'High at flower and pod stage' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', hilThene: 'Systemic + contact — Acephate 75% SP (IRAC 1B)', traditional: 'Older contact-only sprays with limited systemic reach' },
    { feature: 'Systemic protection', hilThene: 'Acephate translocates inside plant tissue', traditional: 'Contact-only; no internal crop protection' },
    { feature: 'Pest spectrum', hilThene: 'Thrips, aphids, whiteflies, jassids, bollworms, caterpillars', traditional: 'Often limited to one pest group per product' },
    { feature: 'Residual protection', hilThene: 'Long-lasting systemic activity in plant tissue', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', hilThene: '25 gm per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', hilThene: 'Competitive pricing — ₹277/500 GM', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonDualAction = [
    { feature: 'Active chemistry', hilThene: 'Acephate 75% SP — single high-load organophosphate', singleAi: 'Mixed generic sprays with inconsistent formulation quality' },
    { feature: 'Knockdown mechanism', hilThene: 'Acetylcholinesterase inhibition + systemic absorption', singleAi: 'Older chemistry with faster resistance selection' },
    { feature: 'Systemic action', hilThene: 'Acephate protects new growth internally', singleAi: 'Limited systemic reach on many alternatives' },
    { feature: 'SP formulation quality', hilThene: 'Harishree SP — rapid dissolution and spread', singleAi: 'Formulation quality varies by brand' },
    { feature: 'Thrips and bollworm efficacy', hilThene: 'Proven acephate activity on sucking and chewing pests', singleAi: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', hilThene: '25 gm/pump — straightforward dosing', singleAi: 'Dose calculations vary by product' }
  ];

  comparisonAcephateOnly = [
    { feature: 'Active chemistry', hilThene: 'Acephate 75% SP (IRAC 1B organophosphate)', generic: 'Generic Acephate 75% SP from unverified sources' },
    { feature: 'Formulation quality', hilThene: 'Harishree SP — uniform dissolution and spray stability', generic: 'Formulation quality varies by manufacturer' },
    { feature: 'Systemic protection', hilThene: 'Acephate translocates through plant tissue', generic: 'May vary with generic product quality' },
    { feature: 'Pricing', hilThene: 'Competitive — ₹277/500 GM from authorized dealers', generic: 'Price and authenticity may vary' },
    { feature: 'Dealer support', hilThene: 'Harishree farmer-focused guidance and crop-wise tables', generic: 'Limited technical support from unknown brands' },
    { feature: 'Application convenience', hilThene: 'SP — dissolves easily at 25 gm/pump', generic: 'Dose and mixing vary by acephate product' }
  ];

  comparisonLanserGold = [
    { feature: 'Active chemistry', hilThene: 'Acephate 75% SP — single-AI organophosphate', lanserGold: 'Acephate 50% + Imidacloprid 1.8% SP — dual-AI' },
    { feature: 'Mode of action', hilThene: 'Systemic + contact organophosphate (IRAC 1B)', lanserGold: 'Dual MOA — organophosphate + neonicotinoid (1B + 4A)' },
    { feature: 'Best fit', hilThene: 'Affordable broad-spectrum acephate for sucking and chewing pests', lanserGold: 'Premium dual-action for resistant sucking pest complexes' },
    { feature: 'Dose', hilThene: '25 gm per pump', lanserGold: '25 gm per pump' },
    { feature: 'Pricing', hilThene: '₹277/500 GM — cost-effective single-AI option', lanserGold: '₹454/500 GM — premium dual-AI formulation' },
    { feature: 'Resistance management', hilThene: 'Rotate with neonicotinoids and other MOA groups', lanserGold: 'Built-in dual MOA for resistance-prone whitefly and thrips' }
  ];

  comparisonSpFormulation = [
    { feature: 'Tank mixing', hilThene: 'SP dissolves evenly in water for uniform suspension', other: 'WP may require more agitation; EC/oil-based mixes differ' },
    { feature: 'Spray uniformity', hilThene: 'Fine droplet spread across leaf surfaces and undersides', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', hilThene: '25 gm/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', hilThene: 'Stable SP powder in sealed original container', other: 'Liquid formulations may need special storage' },
    { feature: 'Coverage on dense canopy', hilThene: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', hilThene: 'Standard powder pack — easy transport and measure', other: 'Bulk liquid forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Hil Thene' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide' },
      { label: 'Formulation type', value: 'SP (Soluble Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Acephate 75% SP' },
      { label: 'Chemical group', value: 'IRAC 1B (Organophosphate)' },
      { label: 'Mode of action', value: 'Systemic + Contact' },
      { label: 'Action type', value: 'Systemic and contact organophosphate insecticide' },
      {
        label: 'Target pests',
        value: 'Thrips, aphids, whiteflies, jassids, bollworms, leafhoppers, leaf-eating caterpillars'
      },
      {
        label: 'Target crops',
        value: 'Cotton, chilli, paddy, tomato, brinjal, okra, vegetables, horticultural crops'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Pouch/pack (SP powder); sizes 250 GM, 500 GM, 1 KG' },
      { label: 'Recommended dose', value: '25 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'At early pest infestation or as per ETL/label' },
      { label: 'Coverage', value: 'Spray both leaf surfaces and undersides where pests feed' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Compatibility', value: 'Jar test before tank-mixing with other products' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Hil Thene' },
    { label: 'Brand / Trade Name', value: 'HIL THENE' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Acephate 75% SP' },
    { label: 'Formulation', value: 'SP (Soluble Powder)' },
    { label: 'Chemical Group', value: 'IRAC 1B (Organophosphate)' },
    { label: 'Mode of Action', value: 'Systemic + Contact' },
    { label: 'Action Type', value: 'Systemic and contact organophosphate insecticide' },
    {
      label: 'Target Pests',
      value: 'Thrips, aphids, whiteflies, jassids, bollworms, leafhoppers, leaf-eating caterpillars'
    },
    { label: 'Target Crops', value: 'Cotton, chilli, paddy, tomato, brinjal, okra, vegetables, horticultural crops' },
    { label: 'Recommended Dose', value: '25 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'At early pest infestation or as per ETL/label guidance' },
    { label: 'Shelf Life', value: '24 months from date of manufacture (sealed, proper storage)' },
    { label: 'Storage Conditions', value: 'Store in a cool, dry, ventilated place away from food, feed, and children' },
    { label: 'Compatibility', value: 'Compatible with most insecticides/fungicides after jar test' },
    { label: 'Rainfastness', value: 'Good adhesion once the spray deposit dries on the leaf surface' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid spray drift; keep away from children; follow label instructions' },
    { label: 'Pesticide Type', value: 'Insecticide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (250 GM, 500 GM, 1 KG)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  modeOfAction = [
    {
      title: 'SP dissolution and foliar deposit',
      description:
        'On application, HIL THENE dissolves rapidly in water and forms an even spray deposit on leaf surfaces. Pests contact or ingest treated foliage, absorbing Acephate through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid knockdown',
      description:
        'Acephate acts on contact, inhibiting acetylcholinesterase in insect nerve tissue. Thrips, whiteflies, aphids, and jassids exposed to the spray deposit experience rapid nervous-system disruption and immediate cessation of feeding damage.'
    },
    {
      title: 'Systemic absorption — Acephate',
      description:
        'Acephate (IRAC Group 1B) is absorbed through foliage and translocates via xylem, protecting new shoots and unsprayed plant parts from inside out — a proven organophosphate insecticide mechanism.'
    },
    {
      title: 'Feeding disruption',
      description:
        'Acephate disrupts normal nerve signalling through acetylcholinesterase inhibition, causing continuous stimulation that stops pest feeding soon after exposure — limiting crop damage even before full mortality occurs.'
    },
    {
      title: 'Nervous system impact',
      description:
        'The organophosphate mode of action causes paralysis and death in target sucking and chewing pests, delivering fast action and long-lasting suppression of thrips, aphid, whitefly, and bollworm populations.'
    },
    {
      title: 'Long residual field protection',
      description:
        'Systemic acephate activity within plant tissue maintains protection against newly active pests between scheduled spray intervals, supporting sustainable crop protection programs.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 25 gm dose',
      text: 'Measure exactly 25 gm per pump to maintain efficacy, protect crops, and slow resistance development in thrips, aphid, and whitefly populations.'
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
      value: 'Growers report visible decline in thrips, aphid, and whitefly activity within hours of a well-timed HIL THENE spray at early infestation.'
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
      value: 'Acephate movement inside plant tissue helps suppress newly active sucking and chewing pests between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely thrips and bollworm control on cotton and chilli helps preserve boll weight, pod quality, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'PRIDE H (Acetamiprid 20% SP)',
      description: 'Systemic neonicotinoid insecticide for whitefly, aphid, thrips, and jassid control in cotton, chilli, and vegetables.',
      route: '/product/acetamiprid-20-sp',
      image: 'assets/products/insecticide/acetamiprid-20-sp.png',
      imageAlt: 'PRIDE H Acetamiprid 20% SP insecticide by Harishree Crop Science'
    },
    {
      name: 'H GOR (Dimethoate 30% EC)',
      description: 'Systemic and contact organophosphate for aphids, thrips, and jassids in cotton, chilli, and vegetable crops.',
      route: '/products/insecticide/dimethoate-30-ec-h-gor',
      image: 'assets/products/insecticide/dimethoate-30-ec.jpg',
      imageAlt: 'H GOR Dimethoate 30% EC insecticide by Harishree Crop Science'
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
      question: 'What is Acephate 75% SP?',
      answer:
        '<strong>Acephate 75% SP</strong> is a soluble powder insecticide containing Acephate (IRAC Group 1B organophosphate) at 75% concentration for broad-spectrum control of thrips, aphids, whiteflies, jassids, bollworms, leafhoppers, and other sucking and chewing pests on cotton, chilli, paddy, tomato, brinjal, okra, and vegetable crops.',
      answerPlain:
        'Acephate 75% SP is a soluble powder insecticide containing Acephate (IRAC Group 1B organophosphate) at 75% concentration for broad-spectrum control of thrips, aphids, whiteflies, jassids, bollworms, leafhoppers, and other sucking and chewing pests on cotton, chilli, paddy, tomato, brinjal, okra, and vegetable crops.'
    },
    {
      question: 'What is Hil Thene insecticide?',
      answer:
        '<strong>HIL THENE</strong> is Harishree Crop Science\'s brand of <strong>Acephate 75% SP</strong> — a systemic and contact organophosphate insecticide for thrips control, aphid control, whitefly control, jassid control, and bollworm control in Indian cotton, chilli, paddy, and vegetable programs. Recommended dose: 25 gm per pump.',
      answerPlain:
        'HIL THENE is Harishree Crop Science\'s brand of Acephate 75% SP — a systemic and contact organophosphate insecticide for thrips control, aphid control, whitefly control, jassid control, and bollworm control in Indian cotton, chilli, paddy, and vegetable programs. Recommended dose: 25 gm per pump.'
    },
    {
      question: 'Which pests does Hil Thene control?',
      answer:
        '<strong>HIL THENE</strong> controls thrips, aphids, whiteflies, jassids, bollworms, leafhoppers, leaf-eating caterpillars, and other sucking and chewing pests when applied at early infestation with thorough leaf surface and underside coverage.',
      answerPlain:
        'HIL THENE controls thrips, aphids, whiteflies, jassids, bollworms, leafhoppers, leaf-eating caterpillars, and other sucking and chewing pests when applied at early infestation with thorough leaf surface and underside coverage.'
    },
    {
      question: 'Is Hil Thene effective against thrips?',
      answer:
        'Yes. <strong>HIL THENE</strong> (Acephate 75% SP) is highly effective against chilli thrips and vegetable thrips when sprayed at economic threshold with emphasis on flowers, pods, and leaf undersides where thrips feed and reproduce.',
      answerPlain:
        'Yes. HIL THENE (Acephate 75% SP) is highly effective against chilli thrips and vegetable thrips when sprayed at economic threshold with emphasis on flowers, pods, and leaf undersides where thrips feed and reproduce.'
    },
    {
      question: 'Can it control aphids and whiteflies?',
      answer:
        'Yes. <strong>HIL THENE</strong> controls both aphids and whiteflies through systemic and contact acephate activity. Apply at early colonization on cotton and vegetables for aphids and whiteflies at 25 gm per pump.',
      answerPlain:
        'Yes. HIL THENE controls both aphids and whiteflies through systemic and contact acephate activity. Apply at early colonization on cotton and vegetables for aphids and whiteflies at 25 gm per pump.'
    },
    {
      question: 'What is the recommended dose of Hil Thene?',
      answer:
        'The standard recommended dose of <strong>HIL THENE</strong> is <strong>25 gm per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of HIL THENE is 25 gm per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can use Acephate 75% SP?',
      answer:
        '<strong>Acephate 75% SP</strong> (HIL THENE) is widely used on <strong>cotton</strong> for jassid and bollworm control, on <strong>chilli</strong> for thrips control, on <strong>paddy</strong> for hopper and borer management, and on <strong>vegetables</strong> including tomato, brinjal, and okra at 25 gm per pump.',
      answerPlain:
        'Acephate 75% SP (HIL THENE) is widely used on cotton for jassid and bollworm control, on chilli for thrips control, on paddy for hopper and borer management, and on vegetables including tomato, brinjal, and okra at 25 gm per pump.'
    },
    {
      question: 'How should Hil Thene be applied?',
      answer:
        'Fill a 15-litre knapsack sprayer with clean water, add <strong>25 gm of HIL THENE</strong>, mix thoroughly until the SP dissolves, and spray uniformly over foliage with emphasis on leaf undersides. Apply in calm morning or evening hours for best thrips, aphid, and whitefly control.',
      answerPlain:
        'Fill a 15-litre knapsack sprayer with clean water, add 25 gm of HIL THENE, mix thoroughly until the SP dissolves, and spray uniformly over foliage with emphasis on leaf undersides. Apply in calm morning or evening hours for best thrips, aphid, and whitefly control.'
    }
  ];

  testimonials = [
    {
      name: 'Suresh Desai',
      location: 'Gujarat',
      text: 'HIL THENE gave excellent jassid and bollworm control in my cotton field. Populations dropped within a day and leaves looked much healthier through the boll stage. The 25 gm per pump dose is easy to follow.',
      rating: 5
    },
    {
      name: 'Lakshmi Reddy',
      location: 'Andhra Pradesh',
      text: 'I used HIL THENE on chilli for thrips scarring on flowers. The systemic acephate action worked fast and pods looked much better at harvest. Acephate 75% SP mixed smoothly in my knapsack.',
      rating: 5
    },
    {
      name: 'Anil Kulkarni',
      location: 'Maharashtra',
      text: 'HIL THENE controlled aphids and whiteflies in my brinjal and tomato fields effectively. The price at ₹277 for 500 gm is competitive and the results were consistent across the season.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '76',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Fill spray tank with water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Add required quantity', text: 'Accurately measure 25 gm of Acephate 75% SP (HIL THENE) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 25 gm into the water. The SP formulation dissolves easily into a uniform spray mix. Top up and agitate.' },
    { name: 'Maintain agitation', text: 'Keep the spray mix agitated during application to maintain uniform suspension of acephate in the tank.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on leaf undersides where pests feed.' },
    { name: 'Ensure complete crop coverage', text: 'Cover both leaf surfaces on cotton, chilli, and vegetable crops — systemic insecticide efficacy depends on thorough spray deposit.' }
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
      productImageAlt: 'HIL THENE Acephate 75% SP Insecticide',
      productImageCaption: 'HIL THENE Acephate 75% SP insecticide pack by Harishree Crop Science',
      description:
        'HIL THENE (Acephate 75% SP) by Harishree Crop Science is a systemic and contact organophosphate insecticide for thrips, aphids, whiteflies, jassids, and bollworms on cotton, chilli, paddy, tomato, brinjal, okra, and vegetables. Dose: 25 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'HIL-THENE-ACEPHATE-75-SP',
      mpn: 'HIL-THENE-ACEPHATE-75-SP',
      dose: '25 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply HIL THENE (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of HIL THENE (Acephate 75% SP) for foliar application at 25 gm/pump.',
      alternateNames: [
        'HIL THENE',
        'Hil Thene',
        'Hil Thene Insecticide',
        'HIL THENE Insecticide',
        'Acephate 75 SP',
        'Acephate insecticide',
        'Organophosphate insecticide',
        'Systemic insecticide',
        'Broad spectrum insecticide',
        'Best insecticide for sucking pests',
        'Thrips control insecticide',
        'Aphid control insecticide',
        'Whitefly control insecticide',
        'Jassid control insecticide',
        'Bollworm control insecticide',
        'Cotton insecticide',
        'Chilli insecticide',
        'Vegetable insecticide',
        'Buy Acephate 75 SP online',
        'Acephate 75 SP price'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `HIL THENE (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SP (Soluble Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Acephate 75% SP (Hil Thene) for thrips, aphid & whitefly control. Systemic organophosphate insecticide. Best price ₹277/500g. Harishree Crop Science. 25 gm/pump.';

    this.seo.setAll(
      {
        title: 'Acephate 75% SP | Hil Thene | Best Price',
        description: desc,
        keywords:
          'Acephate 75% SP, Acephate 75 SP, HIL THENE, Hil Thene, Hil Thene insecticide, Acephate insecticide, Organophosphate insecticide, Systemic insecticide, Broad spectrum insecticide, Best insecticide for sucking pests, Thrips control insecticide, Aphid control insecticide, Whitefly control insecticide, Jassid control insecticide, Bollworm control insecticide, Thrips control, Aphid control, Whitefly control, Jassid control, Bollworm control, Cotton insecticide, Chilli insecticide, Paddy insecticide, Vegetable insecticide, Fast action insecticide, Contact and systemic insecticide, Pest management, Crop protection, Agricultural insecticide, Integrated pest management, Modern farming solutions, Crop yield improvement, Sucking pest control, Crop health enhancement, Harishree Crop Science, HIL THENE price, Acephate 75% SP price, Buy Acephate 75 SP online',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Acephate 75% SP (HIL THENE) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Acephate 75% SP | HIL THENE Insecticide',
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
