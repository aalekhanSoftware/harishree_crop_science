import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'TOPAZ_BUPROFEZIN_15_ACEPHATE_50';
const INDICATIVE_LIST_PRICE_INR = 342;

@Component({
  selector: 'app-buprofezin-15-acephate-50-topaz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './buprofezin-15-acephate-50-topaz.component.html',
  styleUrl: './buprofezin-15-acephate-50-topaz.component.scss'
})
export class Buprofezin15Acephate50TopazComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/insecticide/buprofezin-15-acephate-50';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/buprofezin-15-acephate-50.jpg';
  readonly productImageWebpPath = 'assets/products/insecticide/buprofezin-15-acephate-50.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Buprofezin 15% + ACEPHATE 50%';
  brandName = 'TOPAZ';

  featuredSnippetAnswer =
    'Buprofezin 15% + ACEPHATE 50% (TOPAZ) is a dual-action insecticide by Harishree Crop Science combining an insect growth regulator with organophosphate chemistry for broad-spectrum control of whiteflies, brown planthoppers, aphids, jassids, thrips, and leafhoppers in cotton, paddy, chilli, tomato, brinjal, okra, and vegetable crops. Recommended dose: 20 gm per pump.';

  packSizes = [
    { volume: '500 GM', price: 342, featured: true, sku: 'TOPAZ-500GM' },
    { volume: '1 KG', price: 661, featured: false, sku: 'TOPAZ-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredient technology',
      description:
        'TOPAZ pairs Buprofezin 15% (IRAC 16 IGR) with Acephate 50% (IRAC 1B organophosphate) in a premium WP formulation for contact, systemic, and growth-regulating sucking pest control.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Insect growth regulator action',
      description:
        'Buprofezin disrupts chitin synthesis and moulting in immature whitefly, planthopper, and aphid stages — reducing pest multiplication and resurgence between spray intervals.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Fast pest suppression',
      description:
        'Acephate delivers rapid contact and systemic knockdown while buprofezin provides long-lasting IGR protection — visible whitefly, jassid, and planthopper decline after a well-timed spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad spectrum insecticide',
      description:
        'Controls whiteflies, brown planthoppers, aphids, jassids, thrips, leafhoppers, and other sucking pests across cotton, paddy, chilli, tomato, brinjal, okra, and vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Best insecticide for sucking pests',
      description:
        'Purpose-built dual action insecticide for high-pressure whitefly, brown planthopper, aphid, jassid, and thrips outbreaks when scouting confirms economic threshold.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Resistance management support',
      description:
        'Two distinct IRAC groups (16 + 1B) in one product reduce selection pressure and support rotation in integrated pest management programs.',
      icon: 'fas fa-sync-alt'
    }
  ];

  keyBenefits = [
    {
      title: 'Whitefly control',
      description:
        'Cotton and vegetable whitefly populations are managed through acephate contact and systemic action combined with buprofezin IGR disruption of nymph development when TOPAZ is applied at ETL with underside coverage.',
      icon: 'fas fa-wind'
    },
    {
      title: 'Brown planthopper management',
      description:
        'Brown planthopper (BPH) and allied planthopper species in paddy are controlled when TOPAZ reaches feeding sites through systemic acephate activity and buprofezin suppression of immature stages.',
      icon: 'fas fa-water'
    },
    {
      title: 'Aphid suppression',
      description:
        'Cotton aphids and vegetable aphids are controlled when TOPAZ is sprayed at early colonization with full coverage of tender shoots and leaf undersides at 20 gm per pump.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Jassid control',
      description:
        'Jassids in cotton and vegetables are managed through dual MOA activity that interrupts feeding and reduces hopper burn on treated foliage.',
      icon: 'fas fa-bug'
    },
    {
      title: 'Thrips management',
      description:
        'Chilli thrips and vegetable thrips are suppressed when TOPAZ is applied at early infestation with full canopy and flower coverage.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Dual action technology',
      description:
        'Buprofezin insecticide and acephate insecticide work together — IGR moult disruption plus organophosphate nervous-system disruption for complete sucking pest suppression.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Systemic protection',
      description:
        'Acephate absorbs into plant tissue after foliar application, protecting new shoots and reaching hidden sap feeders that contact-only sprays cannot reach.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Growth regulation',
      description:
        'Buprofezin prevents successful moulting in nymphal stages of whiteflies, planthoppers, and aphids — breaking the pest lifecycle and reducing population buildup.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Long residual activity',
      description:
        'The WP formulation provides dependable field deposit and buprofezin IGR activity maintains protection against newly active sucking pests between scheduled spray intervals.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better crop health',
      description:
        'Timely TOPAZ sprays limit honeydew from whiteflies, hopper burn from jassids, and silvering from thrips — preserving leaf quality and photosynthetic capacity.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Improved yield',
      description:
        'By controlling key sucking pests during flowering and fruit set, growers protect bolls, pods, and grains for improved marketable productivity.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Cost effective pest control',
      description:
        'Competitive pack pricing at ₹342 for 500 GM and ₹661 for 1 KG makes TOPAZ an economical cotton, paddy, and vegetable insecticide solution.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Broad spectrum activity',
      description:
        'TOPAZ manages whiteflies, brown planthoppers, aphids, jassids, thrips, leafhoppers, and allied sucking pests in a single broad spectrum insecticide application.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Proven field performance',
      description:
        'Buprofezin Acephate combination chemistry is trusted across India for sucking pest complexes in cotton, paddy, chilli, and horticultural crops.',
      icon: 'fas fa-certificate'
    }
  ];

  whyChoose = [
    {
      title: 'Premium WP formulation',
      description:
        'Harishree\'s wettable powder technology suspends evenly in water, ensuring uniform spray coverage, excellent leaf spread, and dependable tank stability in the field.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Proven IGR + OP synergy',
      description:
        'Combining Buprofezin and Acephate addresses both immature pest stages and active adult feeders for more complete whitefly, planthopper, and jassid management.',
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
        'TOPAZ offers value at ₹342 per 500 GM and ₹661 per 1 KG, delivering dual-action IGR and systemic pest control at an affordable cost per acre.',
      icon: 'fas fa-rupee-sign'
    },
    {
      title: 'Farmer-friendly guidance',
      description:
        'Clear 20 gm per pump dosing, crop-wise tables, and safety notes help agronomists and growers apply TOPAZ confidently in the field.',
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
      name: 'Brown Planthoppers',
      description:
        'Controls brown planthopper (Nilaparvata lugens) and allied planthopper species in paddy that cause hopper burn, tillering loss, and significant yield reduction.'
    },
    {
      name: 'Aphids',
      description:
        'Suppresses cotton aphids and vegetable aphids that colonize tender shoots and leaf undersides, causing curling, stunting, and yield loss.'
    },
    {
      name: 'Jassids',
      description:
        'Controls jassids that cause hopper burn, leaf edge browning, and reduced photosynthesis in cotton and vegetable crops.'
    },
    {
      name: 'Thrips',
      description:
        'Controls chilli thrips and vegetable thrips that scar flowers, silver leaves, and reduce fruit quality — apply at early colonization with full canopy coverage.'
    },
    {
      name: 'Leafhoppers',
      description:
        'Provides activity against leafhopper species that feed on phloem sap and cause stippling, yellowing, and reduced plant vigour in paddy and vegetables.'
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
        'Leading insecticide choice for whitefly, aphid, and jassid management during square, flowering, and boll stages with fast dual-action IGR and systemic protection.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Paddy',
      description:
        'Controls brown planthoppers, leafhoppers, and other sucking pests during vegetative and reproductive stages in rice cultivation.',
      icon: 'fas fa-water'
    },
    {
      title: 'Chilli',
      description:
        'Protects chilli pods and foliage from thrips, aphids, jassids, and whiteflies during vegetative, flowering, and fruit-set windows.',
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
      title: 'Vegetable Crops',
      description:
        'Broad fit across brinjal, okra, beans, capsicum, and mixed vegetable crops facing sucking pest pressure in Indian farming systems.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Horticultural Crops',
      description:
        'Reliable cotton insecticide and vegetable insecticide for horticultural programs requiring IGR and systemic sucking pest protection.',
      icon: 'fas fa-tree'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', pests: 'Whitefly, aphids, jassids', dose: '20 gm/pump', timing: 'At ETL during vegetative and boll stages' },
    { crop: 'Paddy', pests: 'Brown planthopper, leafhoppers', dose: '20 gm/pump', timing: 'Early infestation during vegetative stage' },
    { crop: 'Chilli', pests: 'Thrips, aphids, jassids, whitefly', dose: '20 gm/pump', timing: 'Early colonization at flowering and fruit set' },
    { crop: 'Brinjal', pests: 'Aphids, jassids, whiteflies, thrips', dose: '20 gm/pump', timing: 'First sign of sucking pest buildup' },
    { crop: 'Tomato', pests: 'Whitefly, aphids, thrips', dose: '20 gm/pump', timing: 'Early infestation with underside coverage' },
    { crop: 'Okra', pests: 'Jassids, aphids, whiteflies', dose: '20 gm/pump', timing: 'Pod formation to harvest window' },
    { crop: 'Vegetables', pests: 'Mixed sucking pests', dose: '20 gm/pump', timing: 'Early infestation with full coverage' },
    { crop: 'Horticultural', pests: 'Whitefly, aphids, thrips, planthoppers', dose: '20 gm/pump', timing: 'At ETL with full canopy spray' }
  ];

  pestWiseControl = [
    { pest: 'Whiteflies', crops: 'Cotton, tomato, brinjal', mode: 'Contact + systemic + IGR', efficacy: 'High with full coverage' },
    { pest: 'Brown Planthoppers', crops: 'Paddy', mode: 'Systemic acephate + IGR buprofezin', efficacy: 'High at early infestation' },
    { pest: 'Aphids', crops: 'Cotton, vegetables', mode: 'Systemic acephate + IGR nymph control', efficacy: 'High at early infestation' },
    { pest: 'Thrips', crops: 'Chilli, vegetables', mode: 'Contact + systemic + IGR', efficacy: 'High at early colonization' },
    { pest: 'Jassids', crops: 'Cotton, okra, brinjal', mode: 'Contact + systemic action', efficacy: 'High with timely spray' },
    { pest: 'Leafhoppers', crops: 'Paddy, vegetables', mode: 'Systemic OP + IGR activity', efficacy: 'Moderate to high' },
    { pest: 'Cotton Whitefly', crops: 'Cotton', mode: 'Dual action IGR insecticide', efficacy: 'High at ETL' },
    { pest: 'Chilli Thrips', crops: 'Chilli', mode: 'Contact + IGR lifecycle disruption', efficacy: 'High at flower and pod stage' }
  ];

  comparisonTraditional = [
    { feature: 'Primary mode of action', topaz: 'Dual MOA — Buprofezin IGR + Acephate OP (16 + 1B)', traditional: 'Single-active sprays with limited sucking pest spectrum' },
    { feature: 'IGR lifecycle disruption', topaz: 'Buprofezin prevents moulting in immature stages', traditional: 'No IGR activity; adults only targeted' },
    { feature: 'Sucking pest spectrum', topaz: 'Whiteflies, BPH, aphids, jassids, thrips, leafhoppers', traditional: 'Often limited to one pest group per product' },
    { feature: 'Residual protection', topaz: 'Long-lasting IGR + systemic activity', traditional: 'Short residual; frequent repeat sprays needed' },
    { feature: 'Application dose', topaz: '20 gm per pump — simple and consistent', traditional: 'Variable doses; often higher spray frequency' },
    { feature: 'Cost efficiency', topaz: 'Competitive pricing — ₹342/500 GM, ₹661/1 KG', traditional: 'Higher cumulative cost over the season' }
  ];

  comparisonDualAction = [
    { feature: 'Active chemistry', topaz: 'Buprofezin 15% + Acephate 50% WP', singleAi: 'Single-active organophosphate or IGR sprays' },
    { feature: 'Knockdown mechanism', topaz: 'AChE inhibition + chitin synthesis disruption', singleAi: 'Single MOA — faster resistance selection' },
    { feature: 'Nymph control', topaz: 'Buprofezin IGR stops immature pest development', singleAi: 'Limited activity on nymphal stages alone' },
    { feature: 'WP formulation quality', topaz: 'Harishree WP — strong suspension and spread', singleAi: 'Formulation quality varies by brand' },
    { feature: 'Whitefly and BPH efficacy', topaz: 'Proven dual-action on sucking pest complexes', singleAi: 'Resistance may reduce efficacy over seasons' },
    { feature: 'Field convenience', topaz: '20 gm/pump — straightforward dosing', singleAi: 'Dose calculations vary by product' }
  ];

  comparisonAcephateOnly = [
    { feature: 'Active chemistry', topaz: 'Buprofezin 15% + Acephate 50% WP', generic: 'Generic Acephate 75% SP alone' },
    { feature: 'Mode of action', topaz: 'IGR + organophosphate systemic', generic: 'Acetylcholinesterase inhibition only (IRAC 1B)' },
    { feature: 'Nymph and adult control', topaz: 'Buprofezin disrupts immature stages; acephate controls adults', generic: 'Primarily adult and active feeder control' },
    { feature: 'Whitefly and planthoppers', topaz: 'Dual MOA for high-pressure sucking pest outbreaks', generic: 'Good contact activity; may need IGR partner in heavy pressure' },
    { feature: 'IPM rotation value', topaz: 'Two MOA groups in one application', generic: 'Single MOA — rotate with IGRs separately' },
    { feature: 'Application convenience', topaz: 'WP — suspends easily at 20 gm/pump', generic: 'Dose and mixing vary by acephate product' }
  ];

  comparisonWpFormulation = [
    { feature: 'Tank mixing', topaz: 'WP suspends evenly in water for uniform spray deposit', other: 'EC/oil-based mixes may require different handling' },
    { feature: 'Spray uniformity', topaz: 'Fine droplet spread across leaf surfaces and undersides', other: 'Variable depending on formulation type' },
    { feature: 'Application convenience', topaz: '20 gm/pump — straightforward field dosing', other: 'Dose calculations vary by product type' },
    { feature: 'Storage stability', topaz: 'Stable WP powder in sealed original container', other: 'Liquid formulations may need special storage' },
    { feature: 'Coverage on dense canopy', topaz: 'Good spread on cotton and chilli foliage', other: 'May bead or wash off on waxy leaf types' },
    { feature: 'Dealer handling', topaz: 'Standard powder pack — easy transport and measure', other: 'Bulk liquid forms need extra handling steps' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'TOPAZ' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Insecticide (Dual Action)' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredients', value: 'Buprofezin 15% + Acephate 50% WP' },
      { label: 'Chemical groups', value: 'IRAC 16 (Buprofezin) + IRAC 1B (Acephate)' },
      { label: 'Mode of action', value: 'Systemic + Contact + IGR' },
      { label: 'Action type', value: 'Insect growth regulator and systemic contact insecticide' },
      {
        label: 'Target pests',
        value: 'Whiteflies, brown planthoppers, aphids, jassids, thrips, leafhoppers, other sucking pests'
      },
      {
        label: 'Target crops',
        value: 'Cotton, paddy, chilli, tomato, brinjal, okra, vegetables, horticultural crops'
      }
    ],
    packs: [
      { label: 'Packaging', value: 'Pouch/pack (WP powder); sizes 500 GM, 1 KG' },
      { label: 'Recommended dose', value: '20 gm/pump' },
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
    { label: 'Product Name', value: 'TOPAZ' },
    { label: 'Brand / Trade Name', value: 'TOPAZ' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Buprofezin 15% + Acephate 50% WP' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Groups', value: 'IRAC 16 (Buprofezin) + IRAC 1B (Acephate)' },
    { label: 'Mode of Action', value: 'Systemic + Contact + IGR' },
    { label: 'Action Type', value: 'Dual action insect growth regulator and systemic insecticide for sucking pests' },
    {
      label: 'Target Pests',
      value: 'Whiteflies, brown planthoppers, aphids, jassids, thrips, leafhoppers, other sucking pests'
    },
    { label: 'Target Crops', value: 'Cotton, paddy, chilli, tomato, brinjal, okra, vegetables, horticultural crops' },
    { label: 'Recommended Dose', value: '20 gm/pump' },
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
      title: 'WP suspension and foliar deposit',
      description:
        'On application, TOPAZ suspends evenly in water and forms a uniform spray deposit on leaf surfaces. Sucking pests contact or ingest treated foliage, absorbing Buprofezin and Acephate through cuticle and gut.'
    },
    {
      title: 'Contact action — rapid knockdown',
      description:
        'Acephate acts on contact, inhibiting acetylcholinesterase in insect nerve tissue. Whiteflies, aphids, jassids, and planthoppers exposed to the spray deposit experience rapid nervous-system disruption and immediate cessation of feeding damage.'
    },
    {
      title: 'Systemic absorption — Acephate',
      description:
        'Acephate (IRAC Group 1B) is absorbed through foliage and translocates within plant tissue, protecting new shoots and reaching pests on unsprayed plant parts — a powerful acephate insecticide systemic mechanism.'
    },
    {
      title: 'Growth regulation — Buprofezin IGR',
      description:
        'Buprofezin (IRAC Group 16) inhibits chitin biosynthesis in immature pest stages, preventing successful moulting. Whitefly nymphs, planthopper nymphs, and aphid nymphs fail to develop — reducing pest multiplication and resurgence.'
    },
    {
      title: 'Feeding suppression and nervous disruption',
      description:
        'The dual MOA combination delivers fast knockdown from acephate plus long-term population suppression from buprofezin IGR activity on developing pest stages.'
    },
    {
      title: 'Long residual field protection',
      description:
        'Buprofezin IGR activity and acephate systemic protection within plant tissue maintain control against newly active sucking pests between scheduled spray intervals, supporting sustainable crop protection programs.'
    },
    {
      title: 'Resistance management benefits',
      description:
        'Two distinct chemistry groups (IRAC 16 + 1B) in one application reduce selection pressure on whitefly, planthopper, and aphid populations when rotated with other MOA classes in IPM programs.'
    }
  ];

  safetyItems = [
    {
      title: 'Wear proper PPE',
      text: 'Always wear gloves, protective clothing, goggles, and a fitted mask when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Accurate 20 gm dose',
      text: 'Measure exactly 20 gm per pump to maintain efficacy, protect crops, and slow resistance development in whitefly, planthopper, and jassid populations.'
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
      label: 'Rapid pest suppression',
      value: 'Growers report visible decline in whitefly, planthopper, and jassid activity within hours of a well-timed TOPAZ spray at early infestation.'
    },
    {
      label: 'Cleaner foliage and fruits',
      value: 'Reduced honeydew, hopper burn, and silvering improve marketable grade in chilli, cotton, paddy, and vegetable crops at harvest.'
    },
    {
      label: 'Healthier canopy',
      value: 'IGR and systemic protection maintain photosynthetic capacity on new growth, supporting stronger vegetative and reproductive development.'
    },
    {
      label: 'Extended IGR cover',
      value: 'Buprofezin lifecycle disruption helps suppress newly hatching nymphs and reduces pest resurgence between scheduled spray intervals.'
    },
    {
      label: 'Better yield potential',
      value: 'Timely whitefly and planthopper control on cotton and paddy helps preserve boll weight, grain fill, and marketable yield.'
    }
  ];

  relatedProducts = [
    {
      name: 'LANSER GOLD (Acephate + Imidacloprid SP)',
      description: 'Dual-action systemic insecticide for whitefly, aphid, thrips, and jassid control in cotton, chilli, and vegetables.',
      route: '/products/insecticide/acephate-50-imidacloprid-1-8-sp-lanser-gold',
      image: 'assets/products/insecticide/acephate-50-imidacloprid-1-8-sp.jpg',
      imageAlt: 'LANSER GOLD Acephate Imidacloprid SP insecticide by Harishree Crop Science'
    },
    {
      name: 'HIL THENE (Acephate 75% SP)',
      description: 'Single-AI organophosphate insecticide for thrips, aphids, whiteflies, jassids, and bollworm control in cotton, chilli, and vegetables.',
      route: '/product/acephate-75-sp',
      image: 'assets/products/insecticide/acephate-75-sp.jpg',
      imageAlt: 'HIL THENE Acephate 75% SP insecticide by Harishree Crop Science'
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
      question: 'What is Buprofezin 15% + ACEPHATE 50%?',
      answer:
        '<strong>Buprofezin 15% + ACEPHATE 50%</strong> is a dual-action wettable powder insecticide combining Buprofezin (insect growth regulator, IRAC 16) with Acephate (organophosphate acetylcholinesterase inhibitor, IRAC 1B) for broad-spectrum control of whiteflies, brown planthoppers, aphids, jassids, thrips, and other sucking pests on cotton, paddy, chilli, and vegetable crops.',
      answerPlain:
        'Buprofezin 15% + ACEPHATE 50% is a dual-action wettable powder insecticide combining Buprofezin (insect growth regulator, IRAC 16) with Acephate (organophosphate acetylcholinesterase inhibitor, IRAC 1B) for broad-spectrum control of whiteflies, brown planthoppers, aphids, jassids, thrips, and other sucking pests on cotton, paddy, chilli, and vegetable crops.'
    },
    {
      question: 'What is TOPAZ insecticide?',
      answer:
        '<strong>TOPAZ</strong> is Harishree Crop Science\'s brand of <strong>Buprofezin 15% + ACEPHATE 50%</strong> — a dual action insect growth regulator insecticide for whitefly control, brown planthopper control, aphid control, jassid control, and thrips control in Indian cotton, paddy, chilli, and vegetable programs. Recommended dose: 20 gm per pump.',
      answerPlain:
        'TOPAZ is Harishree Crop Science\'s brand of Buprofezin 15% + ACEPHATE 50% — a dual action insect growth regulator insecticide for whitefly control, brown planthopper control, aphid control, jassid control, and thrips control in Indian cotton, paddy, chilli, and vegetable programs. Recommended dose: 20 gm per pump.'
    },
    {
      question: 'Which pests does TOPAZ control?',
      answer:
        '<strong>TOPAZ</strong> controls whiteflies, brown planthoppers, aphids, jassids, thrips, leafhoppers, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage at 20 gm per pump.',
      answerPlain:
        'TOPAZ controls whiteflies, brown planthoppers, aphids, jassids, thrips, leafhoppers, and other sucking pests when applied at early infestation with thorough leaf surface and underside coverage at 20 gm per pump.'
    },
    {
      question: 'Is TOPAZ effective against whiteflies?',
      answer:
        'Yes. <strong>TOPAZ</strong> is highly effective against cotton whitefly and vegetable whitefly through acephate contact and systemic knockdown combined with buprofezin IGR disruption of nymph development. Apply at economic threshold with full leaf underside coverage for best whitefly control results.',
      answerPlain:
        'Yes. TOPAZ is highly effective against cotton whitefly and vegetable whitefly through acephate contact and systemic knockdown combined with buprofezin IGR disruption of nymph development. Apply at economic threshold with full leaf underside coverage for best whitefly control results.'
    },
    {
      question: 'Can it control brown planthoppers?',
      answer:
        'Yes. <strong>TOPAZ</strong> controls brown planthopper (BPH) and allied planthopper species in paddy through systemic acephate activity and buprofezin suppression of nymphal stages. Apply at early infestation during vegetative stage with 20 gm per pump and thorough foliar coverage.',
      answerPlain:
        'Yes. TOPAZ controls brown planthopper (BPH) and allied planthopper species in paddy through systemic acephate activity and buprofezin suppression of nymphal stages. Apply at early infestation during vegetative stage with 20 gm per pump and thorough foliar coverage.'
    },
    {
      question: 'What is the recommended dose of TOPAZ?',
      answer:
        'The standard recommended dose of <strong>TOPAZ</strong> is <strong>20 gm per pump</strong> in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of TOPAZ is 20 gm per pump in a 15-litre knapsack sprayer filled with clean water. Always confirm the final dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can use TOPAZ?',
      answer:
        '<strong>TOPAZ</strong> is widely used on <strong>cotton</strong> for whitefly and jassid control, on <strong>paddy</strong> for brown planthopper management, on <strong>chilli</strong> for thrips and jassid control, and on <strong>vegetables</strong> including tomato, brinjal, and okra at 20 gm per pump.',
      answerPlain:
        'TOPAZ is widely used on cotton for whitefly and jassid control, on paddy for brown planthopper management, on chilli for thrips and jassid control, and on vegetables including tomato, brinjal, and okra at 20 gm per pump.'
    },
    {
      question: 'How should TOPAZ be applied?',
      answer:
        'Fill a 15-litre knapsack sprayer with clean water, add <strong>20 gm TOPAZ</strong>, mix thoroughly with agitation, and spray uniformly over the crop canopy — covering both leaf surfaces and undersides where sucking pests feed. Apply in calm morning or evening hours at early infestation or economic threshold.',
      answerPlain:
        'Fill a 15-litre knapsack sprayer with clean water, add 20 gm TOPAZ, mix thoroughly with agitation, and spray uniformly over the crop canopy — covering both leaf surfaces and undersides where sucking pests feed. Apply in calm morning or evening hours at early infestation or economic threshold.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh Patel',
      location: 'Gujarat',
      text: 'TOPAZ gave excellent whitefly control in my cotton field. Populations dropped within a day and leaves looked much cleaner through the boll stage. The 20 gm per pump dose is easy to follow.',
      rating: 5
    },
    {
      name: 'Suresh Kumar',
      location: 'Andhra Pradesh',
      text: 'I used TOPAZ on paddy for brown planthopper outbreak. The dual action worked well — hopper burn stopped and tillers recovered. Good value at ₹342 for 500 gm.',
      rating: 5
    },
    {
      name: 'Lakshmi Reddy',
      location: 'Telangana',
      text: 'On chilli, TOPAZ controlled jassids and thrips on flowers and pods. The WP mixed smoothly and pods looked much better at harvest. Reliable insecticide from Harishree.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '72',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding the insecticide.' },
    { name: 'Measure TOPAZ', text: 'Accurately measure 20 gm of Buprofezin 15% + ACEPHATE 50% (TOPAZ) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour the measured 20 gm into the water. The WP formulation suspends into a uniform spray mix. Top up and agitate continuously.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening hours. Spray evenly over foliage with emphasis on leaf undersides where sucking pests feed.' },
    { name: 'Ensure complete crop coverage', text: 'Cover both leaf surfaces on cotton, paddy, chilli, and vegetable crops — dual action insecticide efficacy depends on thorough spray deposit.' },
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
      productImageAlt: 'TOPAZ Buprofezin 15% + ACEPHATE 50% Insecticide',
      productImageCaption: 'TOPAZ Buprofezin 15% + ACEPHATE 50% insecticide pack by Harishree Crop Science',
      description:
        'TOPAZ (Buprofezin 15% + ACEPHATE 50%) by Harishree Crop Science is a dual-action IGR insecticide for whiteflies, brown planthoppers, aphids, jassids, and thrips on cotton, paddy, chilli, and vegetables. Dose: 20 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Insecticide',
      sku: 'TOPAZ-BUPROFEZIN-ACEPHATE-WP',
      mpn: 'TOPAZ-BUPROFEZIN-ACEPHATE-WP',
      dose: '20 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply TOPAZ (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of TOPAZ (Buprofezin 15% + ACEPHATE 50%) for foliar application at 20 gm/pump.',
      alternateNames: [
        'TOPAZ',
        'TOPAZ Insecticide',
        'Topaz Buprofezin Acephate WP',
        'Buprofezin 15 Acephate 50',
        'Buprofezin Acephate insecticide',
        'Buprofezin insecticide',
        'Acephate insecticide',
        'Dual action insecticide',
        'Systemic insecticide',
        'Insect growth regulator insecticide',
        'Best insecticide for sucking pests',
        'Whitefly control insecticide',
        'Brown planthopper control insecticide',
        'Jassid control insecticide',
        'Thrips control insecticide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `TOPAZ (${this.productTitle})`,
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Buy Buprofezin 15% + ACEPHATE 50% (TOPAZ) for whitefly & jassid control. Systemic IGR + acephate insecticide. Best price ₹342/500g. Harishree. 20 gm/pump.';

    this.seo.setAll(
      {
        title: 'Buprofezin 15% + ACEPHATE 50% | TOPAZ | Best Price',
        description: desc,
        keywords:
          'Buprofezin 15% + ACEPHATE 50%, Buprofezin 15 Acephate 50, TOPAZ, TOPAZ insecticide, Buprofezin Acephate insecticide, Buprofezin insecticide, Acephate insecticide, Buy Buprofezin 15% Acephate 50%, Whitefly control insecticide, Brown planthopper control insecticide, Jassid control insecticide, Aphid control insecticide, Thrips control insecticide, Cotton insecticide, Paddy insecticide, Chilli insecticide, Systemic insecticide, Insect growth regulator insecticide, Broad spectrum insecticide, Best insecticide for sucking pests, Dual action insecticide, Whitefly control, Brown planthopper control, Aphid control, Jassid control, Thrips control, Pest management, Crop protection, Agricultural insecticide, Integrated pest management, Modern farming solutions, Sucking pest control, Yield improvement, Crop health enhancement, Harishree Crop Science, TOPAZ price, Buprofezin 15% + ACEPHATE 50% price',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Buprofezin 15% + ACEPHATE 50% (TOPAZ) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Buprofezin 15% + ACEPHATE 50% | TOPAZ Insecticide',
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
