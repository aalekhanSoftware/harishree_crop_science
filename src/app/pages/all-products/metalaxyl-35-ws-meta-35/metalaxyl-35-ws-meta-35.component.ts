import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'META_35_METALAXYL_WS';
const INDICATIVE_LIST_PRICE_INR = 454;

@Component({
  selector: 'app-metalaxyl-35-ws-meta-35',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './metalaxyl-35-ws-meta-35.component.html',
  styleUrl: './metalaxyl-35-ws-meta-35.component.scss'
})
export class Metalaxyl35WsMeta35Component implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/metalaxyl-35-ws-meta-35';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/metalaxyl-35-ws.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Metalaxyl 35% WS';
  brandName = 'Meta 35';

  featuredSnippetAnswer =
    'Meta 35 (Metalaxyl 35% WS) is a systemic seed-treatment fungicide by Harishree Crop Science for protection against damping off, downy mildew, seedling blight, root rot, collar rot, and Pythium and Phytophthora (oomycete) diseases during germination and early growth in maize, groundnut, soybean, cotton, sunflower, vegetables, paddy, and wheat. Recommended dose: 25 gm per pump.';

  packSizes = [
    { volume: '250 gm', price: 235, featured: false, sku: 'META35-250GM' },
    { volume: '500 gm', price: 454, featured: true, sku: 'META35-500GM' },
    { volume: '1 kg', price: 885, featured: false, sku: 'META35-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Systemic seed treatment',
      description:
        'Meta 35 is absorbed by germinating seed and seedling, protecting the crop from within during the most vulnerable germination and establishment stages.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Oomycete disease control',
      description:
        'Metalaxyl is highly specific to oomycete pathogens such as Pythium and Phytophthora that cause damping off, downy mildew, and seedling blight.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Protection during germination',
      description:
        'A seed dressing of Meta 35 shields the seed and emerging seedling exactly when soil-borne oomycete pressure is highest, ensuring cleaner crop establishment.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Root zone disease control',
      description:
        'Systemic movement protects the root zone against root rot and collar rot, supporting strong early root development and uniform stands.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Seed dressing convenience',
      description:
        'The WS (water-dispersible powder for slurry seed treatment) formulation coats seed evenly, making field-side seed treatment quick and practical.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Better seedling vigor',
      description:
        'Healthier, disease-free seedlings emerge stronger and more uniform, giving the crop a better start and reducing costly gap-filling and reseeding.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Early-season protection',
      description:
        'Residual systemic activity guards the seedling for the critical early weeks after sowing, when oomycete diseases can wipe out emerging stands.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop establishment',
      description:
        'Uniform, healthy emergence sets the foundation for higher yield potential and better produce quality across the season.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Protecting plant population at establishment preserves yield potential per acre and reduces early-season crop losses for Indian growers.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Trusted metalaxyl chemistry',
      description:
        'Metalaxyl is a globally trusted oomycete-specific fungicide, backed by Harishree quality control and batch-to-batch consistency.',
      icon: 'fas fa-sync'
    }
  ];

  whyChoose = [
    {
      title: 'Systemic seed-treatment fungicide',
      description:
        'Meta 35 is absorbed into the germinating seed and seedling, delivering protection from within during the vulnerable germination and establishment phase that foliar sprays cannot reach.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Oomycete pathogen suppression',
      description:
        'Metalaxyl 35% WS is highly specific to oomycete pathogens behind damping off, downy mildew, seedling blight, and Pythium and Phytophthora diseases — a targeted solution at sowing.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Strong crop establishment',
      description:
        'Healthy, uniform emergence and protected root zones build a strong foundation for the crop, reducing gap-filling, reseeding, and early-season losses.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing from Rupees 235 for the 250 gm pack, easy seed dressing, and protected plant population deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Targeted oomycete control',
      description:
        'Meta 35 controls damping off, downy mildew, seedling blight, root rot, collar rot, and Pythium and Phytophthora diseases — the key oomycete threats at establishment.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Protection during germination',
      description:
        'Seed treatment with Metalaxyl 35% guards the seed and emerging seedling exactly when soil-borne oomycete pressure is highest, ensuring cleaner establishment.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Systemic root-zone defence',
      description:
        'Absorbed systemically, Meta 35 protects roots and the collar region from rot, supporting strong early root development and healthy seedling stands.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Improved seedling vigor',
      description:
        'Disease-free seedlings emerge stronger and more uniform, giving the crop a healthier start and better tolerance to early-season stress.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Early-season residual activity',
      description:
        'Systemic protection persists through the critical weeks after sowing, bridging the window before foliar disease programs begin.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Uniform crop stand',
      description:
        'By preventing seed and seedling rot, Meta 35 helps achieve the full target plant population, the foundation of high-yielding crops.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Reduced reseeding costs',
      description:
        'Protecting emergence reduces the need for gap-filling and reseeding, saving seed cost, labour, and lost time at the start of the season.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Resistance management value',
      description:
        'Used as a seed treatment, Meta 35 fits cleanly into disease programs and helps preserve foliar fungicide options later in the crop cycle.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Higher yield potential',
      description:
        'A strong, uniform, disease-free start sets the crop up for better tillering, branching, and yield potential across the season.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better produce quality',
      description:
        'Healthy establishment supports more uniform crop development and better produce quality at harvest across field and vegetable crops.',
      icon: 'fas fa-award'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely seed treatment limits early seedling mortality from oomycete diseases — protecting the grower\'s investment in seed and land preparation.',
      icon: 'fas fa-store'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable establishment protection at a farmer-friendly rate helps growers secure plant population and translate it into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Meta 35 Fungicide is a premium systemic seed-treatment fungicide from HARISHREE CROP SCIENCE, formulated as Metalaxyl 35% WS. Indian growers face heavy early-season pressure from damping off, downy mildew, seedling blight, root rot, collar rot, and other Pythium and Phytophthora (oomycete) diseases — problems that destroy emerging seedlings and thin out the crop stand before it even establishes. Seed-treatment fungicides like Meta 35 are trusted because they protect the seed and seedling from within, precisely when and where soil-borne oomycete pressure is highest.';

  aboutOverview =
    'The WS (water-dispersible powder for slurry seed treatment) formulation coats seed evenly to deliver uniform protection at sowing. Meta 35 is engineered for crop safety when used at the recommended rate, supporting cleaner germination, stronger seedling vigor, and better crop establishment across maize, groundnut, soybean, cotton, sunflower, vegetables, paddy, and wheat. For agronomists and dealers, Meta 35 represents a dependable establishment-stage solution backed by Harishree quality control and batch-to-batch consistency.';

  aboutActive =
    'Metalaxyl 35% is a phenylamide (acylalanine) fungicide (FRAC Group 4) that is highly specific to oomycete pathogens such as Pythium and Phytophthora. It works systemically: taken up by the germinating seed and developing seedling, it inhibits ribosomal RNA synthesis in the pathogen, halting its growth and reproduction. Applied as a seed treatment, metalaxyl protects the seed, emerging shoot, and root zone from within during germination and early establishment, when oomycete diseases like damping off and seedling blight cause the greatest losses.';

  targetCropsTable = [
    { crop: 'Maize', diseases: 'Damping Off, Downy Mildew, Seedling Blight' },
    { crop: 'Groundnut', diseases: 'Collar Rot, Root Rot, Damping Off' },
    { crop: 'Soybean', diseases: 'Seedling Blight, Root Rot, Pythium' },
    { crop: 'Cotton', diseases: 'Damping Off, Seedling Rot' },
    { crop: 'Sunflower', diseases: 'Downy Mildew, Damping Off' },
    { crop: 'Vegetables', diseases: 'Damping Off, Pythium, Phytophthora' },
    { crop: 'Paddy', diseases: 'Seedling Blight, Damping Off' },
    { crop: 'Wheat', diseases: 'Seedling Diseases, Root Rot' }
  ];

  diseaseDetails = [
    {
      name: 'Damping Off',
      symptoms:
        'Failure of seeds to emerge, or sudden collapse of young seedlings with water-soaked, pinched stems at the soil line. Affected patches show gaps and toppled seedlings.',
      impact:
        'Damping off thins the crop stand at establishment, forcing gap-filling and reseeding and directly reducing plant population and yield potential.',
      controlBenefits:
        'Meta 35 seed treatment protects the seed and emerging seedling systemically against the oomycetes that cause damping off, ensuring cleaner, more uniform emergence.'
    },
    {
      name: 'Downy Mildew',
      symptoms:
        'Pale yellow patches on leaves with downy growth on the underside, and systemic infection that stunts seedlings, especially in maize, sunflower, and vegetables.',
      impact:
        'Seedling downy mildew stunts or kills young plants and lowers stand quality, cutting yield when systemic infection sets in early.',
      controlBenefits:
        'As a seed treatment, Meta 35 provides early systemic protection against downy mildew oomycetes, guarding seedlings during the vulnerable early-growth window.'
    },
    {
      name: 'Seedling Blight',
      symptoms:
        'Browning, rotting, and collapse of seedlings soon after emergence, often with lesions on the hypocotyl and decay spreading through young tissue.',
      impact:
        'Seedling blight reduces emergence and stand uniformity, leaving gappy fields that need reseeding and lowering yield potential from the outset.',
      controlBenefits:
        'Meta 35 protects germinating seed and seedlings from within, suppressing the oomycetes responsible for seedling blight and improving establishment.'
    },
    {
      name: 'Root Rot',
      symptoms:
        'Brown, decayed roots with poor root development, leading to wilting, stunting, and yellowing of seedlings despite adequate moisture.',
      impact:
        'Root rot weakens the seedling root system, reducing water and nutrient uptake and lowering vigor and yield potential across the season.',
      controlBenefits:
        'Systemic Meta 35 protects the root zone during establishment, suppressing oomycete root rot and supporting strong early root development.'
    },
    {
      name: 'Collar Rot',
      symptoms:
        'Rotting and constriction of the stem at the soil line (collar), especially in groundnut, causing wilting and death of affected plants.',
      impact:
        'Collar rot kills establishing plants and creates gaps in the stand, directly reducing plant population and harvestable yield.',
      controlBenefits:
        'Meta 35 seed treatment guards the seed and collar region during germination, reducing collar rot losses and improving crop stand.'
    },
    {
      name: 'Pythium Diseases',
      symptoms:
        'Soft, watery rot of seeds and seedling roots and stems, with poor emergence and collapse of young plants in moist, poorly drained soils.',
      impact:
        'Pythium destroys seeds and seedlings before establishment, sharply reducing plant population in cool, wet sowing conditions.',
      controlBenefits:
        'Metalaxyl is highly specific to Pythium and similar oomycetes. Meta 35 seed treatment delivers targeted systemic suppression at the seed and root zone.'
    },
    {
      name: 'Phytophthora Diseases',
      symptoms:
        'Dark, water-soaked rot of roots, collar, and lower stem, with sudden wilting and decline of seedlings in wet, warm conditions.',
      impact:
        'Phytophthora causes rapid seedling decline and stand loss, and can persist in soil to threaten the crop through early growth.',
      controlBenefits:
        'Meta 35 provides targeted systemic activity against Phytophthora during establishment, protecting roots and collar from oomycete decay.'
    },
    {
      name: 'Oomycete Disease Complex',
      symptoms:
        'A mix of seed decay, damping off, root and collar rot, and seedling blight occurring together under moist, disease-favourable sowing conditions.',
      impact:
        'The combined oomycete complex can devastate emerging stands, leaving thin, uneven fields that fail to reach yield potential.',
      controlBenefits:
        'A single Meta 35 seed treatment addresses the oomycete complex systemically at sowing, securing emergence and uniform crop establishment.'
    }
  ];

  targetPests = [
    {
      name: 'Damping Off',
      description:
        'Collapse of young seedlings at the soil line. Meta 35 seed treatment protects emergence systemically against the causal oomycetes.'
    },
    {
      name: 'Downy Mildew',
      description:
        'Systemic seedling infection with downy leaf growth. Early seed-treatment protection guards maize, sunflower, and vegetable seedlings.'
    },
    {
      name: 'Seedling Blight',
      description:
        'Browning and collapse of seedlings after emergence. Meta 35 suppresses the oomycetes responsible and improves stand uniformity.'
    },
    {
      name: 'Root Rot',
      description:
        'Decayed roots and stunted seedlings. Systemic Meta 35 protects the root zone during establishment for strong early growth.'
    },
    {
      name: 'Collar Rot',
      description:
        'Stem rot at the soil line, common in groundnut. Seed treatment guards the collar region and reduces stand loss.'
    },
    {
      name: 'Pythium & Phytophthora',
      description:
        'Watery seed and root rot in wet soils. Metalaxyl is highly specific to these oomycetes, delivering targeted suppression at sowing.'
    }
  ];

  applicationGuidelines = [
    { application: 'Application Method', recommendation: 'Seed treatment (slurry coating)' },
    { application: 'Timing', recommendation: 'Before sowing' },
    { application: 'Coverage', recommendation: 'Uniform coating on all seed' },
    { application: 'Frequency', recommendation: 'Once per seed lot at sowing' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Meta 35' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide (Seed treatment)' },
      { label: 'Formulation type', value: 'WS (Water-dispersible powder for slurry seed treatment)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Metalaxyl 35% WS' },
      { label: 'Chemical group', value: 'Phenylamide / Acylalanine (FRAC 4)' },
      { label: 'Action type', value: 'Systemic seed-treatment disease control' },
      { label: 'Diseases controlled', value: 'Damping off, downy mildew, seedling blight, root rot, collar rot, Pythium and Phytophthora diseases' },
      { label: 'Target crops', value: 'Maize, groundnut, soybean, cotton, sunflower, vegetables, paddy, wheat' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 250 gm, 500 gm, 1 kg' },
      { label: 'Recommended dose', value: '25 gm/pump' },
      { label: 'Application method', value: 'Seed treatment — coat seed as a slurry before sowing' },
      { label: 'Application stage', value: 'Before sowing, per label/agronomist' },
      { label: 'Coverage', value: 'Uniform coating on all seed' },
      { label: 'Re-entry interval', value: 'Handle with PPE; sow treated seed only' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Meta 35' },
    { label: 'Brand / Trade Name', value: 'Meta 35' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Metalaxyl 35% WS' },
    { label: 'Formulation', value: 'WS (Water-dispersible powder for slurry seed treatment)' },
    { label: 'Chemical Group', value: 'Phenylamide (Acylalanine) systemic fungicide' },
    { label: 'Action Type', value: 'Systemic seed-treatment fungicide' },
    { label: 'Diseases Controlled', value: 'Damping off, downy mildew, seedling blight, root rot, collar rot, Pythium and Phytophthora diseases' },
    { label: 'Target Crops', value: 'Maize, groundnut, soybean, cotton, sunflower, vegetables, paddy, wheat' },
    { label: 'Recommended Dose', value: '25 gm/pump' },
    { label: 'Application Method', value: 'Seed treatment — coat seed as a slurry before sowing' },
    { label: 'Application Stage', value: 'Before sowing; follow label guidance' },
    { label: 'Mode of Action', value: 'Systemic; oomycete-specific (FRAC 4)' },
    { label: 'Re-entry Interval', value: 'Handle with PPE; sow treated seed only' },
    { label: 'Precautions', value: 'Use PPE; do not use treated seed as food or feed; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide (Seed treatment)' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (250 gm, 500 gm, 1 kg)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before treating seed with Meta 35 Fungicide.'
    },
    {
      title: 'Wear protective clothing',
      text: 'Use gloves, goggles, mask, and protective clothing when handling the powder or preparing the seed-treatment slurry.'
    },
    {
      title: 'Treat seed in a ventilated area',
      text: 'Coat seed in an open, well-ventilated space and avoid inhaling dust while mixing the slurry and coating seed.'
    },
    {
      title: 'Keep away from children and animals',
      text: 'Store in original sealed container away from food, feed, and out of reach of children and animals.'
    },
    {
      title: 'Never use treated seed as food or feed',
      text: 'Treated seed is for sowing only. Do not use it for human consumption or animal feed under any circumstances.'
    },
    {
      title: 'Store in a cool and dry place',
      text: 'Keep sealed packs in a cool, dry, ventilated area away from direct sunlight and moisture.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Use the recommended rate for uniform seed coating. Over-dosing does not improve protection and may affect germination.'
    }
  ];

  relatedProducts = [
    {
      name: 'Milet Gold (Metalaxyl 8% + Mancozeb 64% WP)',
      description: 'Dual-action systemic plus contact fungicide for late blight, downy mildew, and seedling diseases.',
      route: '/products/metalaxyl-8-mancozeb-64-wp-milet-gold',
      image: 'assets/products/fungicide/metalaxyl-8-mancozeb-64-wp.jpg',
      imageAlt: 'Milet Gold Metalaxyl Mancozeb fungicide by Harishree Crop Science'
    },
    {
      name: 'Super COC (Copper Oxychloride 50% WP)',
      description: 'Multi-site contact fungicide and bactericide for leaf spot, blight, citrus canker, and fruit rot.',
      route: '/products/copper-oxychloride-50-wp-super-coc',
      image: 'assets/products/fungicide/copper-oxychloride-50-wp.jpg',
      imageAlt: 'Super COC Copper Oxychloride 50% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'N-Tracol (Propineb 70% WP)',
      description: 'Multi-site contact fungicide for early blight, downy mildew, leaf spot, and rust across vegetables and fruit crops.',
      route: '/products/propineb-70-wp-n-tracol',
      image: 'assets/products/fungicide/propineb-70-wp.jpg',
      imageAlt: 'N-Tracol Propineb 70% WP fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Meta 35 Fungicide used for?',
      answer:
        '<strong>Meta 35 Fungicide</strong> (<strong>Metalaxyl 35% WS</strong>) is used as a <strong>seed treatment</strong> for protection against damping off, downy mildew, seedling blight, root rot, collar rot, and Pythium and Phytophthora diseases during germination and early growth in maize, groundnut, soybean, cotton, sunflower, vegetables, paddy, and wheat. It is a systemic seed-treatment fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Meta 35 Fungicide (Metalaxyl 35% WS) is used as a seed treatment for protection against damping off, downy mildew, seedling blight, root rot, collar rot, and Pythium and Phytophthora diseases during germination and early growth in maize, groundnut, soybean, cotton, sunflower, vegetables, paddy, and wheat. It is a systemic seed-treatment fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Metalaxyl 35% WS control?',
      answer:
        '<strong>Metalaxyl 35% WS</strong> controls <strong>damping off</strong>, <strong>downy mildew</strong>, <strong>seedling blight</strong>, <strong>root rot</strong>, <strong>collar rot</strong>, and <strong>Pythium</strong> and <strong>Phytophthora</strong> (oomycete) diseases. Meta 35 protects the seed and seedling systemically during establishment.',
      answerPlain:
        'Metalaxyl 35% WS controls damping off, downy mildew, seedling blight, root rot, collar rot, and Pythium and Phytophthora (oomycete) diseases. Meta 35 protects the seed and seedling systemically during establishment.'
    },
    {
      question: 'Which crops can be treated with Meta 35?',
      answer:
        '<strong>Meta 35 Fungicide</strong> can be used on <strong>maize</strong>, <strong>groundnut</strong>, <strong>soybean</strong>, <strong>cotton</strong>, <strong>sunflower</strong>, <strong>vegetables</strong>, <strong>paddy</strong>, and <strong>wheat</strong>. It is a versatile seed-treatment fungicide for field and vegetable crops facing oomycete establishment diseases.',
      answerPlain:
        'Meta 35 Fungicide can be used on maize, groundnut, soybean, cotton, sunflower, vegetables, paddy, and wheat. It is a versatile seed-treatment fungicide for field and vegetable crops facing oomycete establishment diseases.'
    },
    {
      question: 'What is the recommended dosage of Meta 35 Fungicide?',
      answer:
        'The standard recommended dose of <strong>Meta 35 Fungicide</strong> is <strong>25 gm per pump</strong>. Always confirm the final seed-treatment rate with the printed label and local agronomic advisory for your specific crop and seed lot.',
      answerPlain:
        'The standard recommended dose of Meta 35 Fungicide is 25 gm per pump. Always confirm the final seed-treatment rate with the printed label and local agronomic advisory for your specific crop and seed lot.'
    },
    {
      question: 'How does metalaxyl work as a seed treatment?',
      answer:
        '<strong>Meta 35</strong> (metalaxyl) is a <strong>systemic, oomycete-specific fungicide</strong>. Taken up by the germinating seed and seedling, it inhibits RNA synthesis in pathogens like <strong>Pythium</strong> and <strong>Phytophthora</strong>, protecting the seed, shoot, and root zone from within during establishment.',
      answerPlain:
        'Meta 35 (metalaxyl) is a systemic, oomycete-specific fungicide. Taken up by the germinating seed and seedling, it inhibits RNA synthesis in pathogens like Pythium and Phytophthora, protecting the seed, shoot, and root zone from within during establishment.'
    },
    {
      question: 'How is Meta 35 applied to seed?',
      answer:
        'Apply <strong>Meta 35</strong> as a <strong>seed-treatment slurry</strong> before sowing. Mix the measured powder with a little water to form a slurry, coat the seed uniformly, allow it to dry in shade, and sow the treated seed. Confirm the rate on the label.',
      answerPlain:
        'Apply Meta 35 as a seed-treatment slurry before sowing. Mix the measured powder with a little water to form a slurry, coat the seed uniformly, allow it to dry in shade, and sow the treated seed. Confirm the rate on the label.'
    },
    {
      question: 'Can treated seed be used as food or feed?',
      answer:
        'No. Seed treated with <strong>Meta 35</strong> is <strong>for sowing only</strong> and must never be used for human consumption or animal feed. Store treated seed separately and clearly labelled, away from food and feed.',
      answerPlain:
        'No. Seed treated with Meta 35 is for sowing only and must never be used for human consumption or animal feed. Store treated seed separately and clearly labelled, away from food and feed.'
    },
    {
      question: 'Why choose Meta 35 over ordinary fungicides?',
      answer:
        '<strong>Meta 35</strong> offers <strong>systemic seed-treatment protection</strong>, <strong>oomycete-specific control</strong> of establishment diseases, <strong>strong crop establishment</strong>, and excellent value from Rupees 235 for the 250 gm pack — protecting the crop at the stage ordinary foliar fungicides cannot reach.',
      answerPlain:
        'Meta 35 offers systemic seed-treatment protection, oomycete-specific control of establishment diseases, strong crop establishment, and excellent value from Rupees 235 for the 250 gm pack — protecting the crop at the stage ordinary foliar fungicides cannot reach.'
    }
  ];

  testimonials = [
    {
      name: 'Ganesh',
      location: 'Madhya Pradesh',
      text:
        'I treated my soybean seed with Meta 35 before sowing and emergence was much more uniform this year. There were far fewer gaps from seedling rot, so I did not have to reseed patches like before. A strong, healthy start to the crop.',
      rating: 5
    },
    {
      name: 'Ravi',
      location: 'Gujarat',
      text:
        'Collar rot used to kill many groundnut plants early in the season. After seed treatment with Meta 35 the stand was much better and the seedlings looked healthier. Easy to coat the seed and good value for the pack.',
      rating: 5
    },
    {
      name: 'Kiran',
      location: 'Karnataka',
      text:
        'Damping off was a recurring problem in my maize nursery. Meta 35 seed treatment protected the seedlings and emergence was clean and even. The crop got a strong start and I am happy with the result.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '57',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Treat seed in an open, well-ventilated area away from children and animals.' },
    { name: 'Measure Meta 35', text: 'Accurately measure the recommended quantity of Metalaxyl 35% WS for your seed lot as per the label.' },
    { name: 'Prepare a slurry', text: 'Mix the measured powder with a small amount of clean water to form a uniform slurry for coating.' },
    { name: 'Coat the seed', text: 'Add the seed and mix thoroughly so every seed is evenly coated with the Meta 35 slurry.' },
    { name: 'Dry in shade', text: 'Spread the treated seed in shade to dry before sowing. Avoid direct sunlight on treated seed.' },
    { name: 'Sow treated seed', text: 'Sow the treated seed at the recommended depth and spacing. Use treated seed for sowing only.' },
    { name: 'Post-treatment safety', text: 'Wash exposed skin, clean equipment, and store leftover product and treated seed safely and clearly labelled.' }
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
      productImageAlt:
        'Metalaxyl 35% WS Meta 35 Seed Treatment Fungicide for Oomycete Disease Control',
      productImageCaption:
        'Systemic Seed-Treatment Fungicide for Damping Off, Downy Mildew, Seedling Blight and Root Rot Control',
      description:
        'Meta 35 (Metalaxyl 35% WS) by Harishree Crop Science is a systemic seed-treatment fungicide for damping off, downy mildew, seedling blight, root rot, collar rot, and Pythium and Phytophthora diseases. Dose: 25 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.productTitle,
      category: 'Agricultural Fungicide',
      sku: 'META35-METALAXYL-WS',
      mpn: 'META35-METALAXYL-WS',
      dose: '25 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to treat seed with Meta 35 (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a seed-treatment slurry of Meta 35 (Metalaxyl 35% WS) and coating seed before sowing.',
      alternateNames: ['Metalaxyl 35% WS'],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Meta 35 (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WS (Water-dispersible powder for slurry seed treatment)'
    };
  }

  private applySeo(): void {
    const desc =
      'Meta 35 Metalaxyl 35% WS is a systemic seed-treatment fungicide controlling damping off, downy mildew & oomycete diseases in maize, groundnut, soybean & cotton. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Metalaxyl 35% WS | Meta 35',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Metalaxyl 35% WS (Meta 35) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Meta 35 | Metalaxyl 35% WS Seed Treatment Fungicide',
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
