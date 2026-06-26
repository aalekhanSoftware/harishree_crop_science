import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'HTM_THIOPHANATE_METHYL_70_WP';
const INDICATIVE_LIST_PRICE_INR = 307;

@Component({
  selector: 'app-thiophanate-methyl-70-wp-htm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thiophanate-methyl-70-wp-htm.component.html',
  styleUrl: './thiophanate-methyl-70-wp-htm.component.scss'
})
export class ThiophanateMethyl70WpHtmComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/thiophanate-methyl-70-wp-htm';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/thiophanate-methyl-70-wp.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Thiophanate Methyl 70% WP';
  brandName = 'HTM';

  featuredSnippetAnswer =
    'HTM (Thiophanate Methyl 70% WP) is a broad-spectrum systemic fungicide by Harishree Crop Science for preventive and curative control of anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back across mango, chilli, tomato, grapes, apple, pomegranate, cucumber, and brinjal. Recommended dose: 20 gm per pump.';

  packSizes = [
    { volume: '500 gm', price: 307, featured: true, sku: 'HTM-500GM' },
    { volume: '1 Kg', price: 330, featured: false, sku: 'HTM-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Systemic fungicide',
      description:
        'HTM (Thiophanate Methyl 70% WP) is absorbed into plant tissue and moves within the plant, protecting new growth and reaching infections that surface contact sprays alone may miss.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One HTM spray manages anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back — reducing the need for multiple single-disease products.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Curative action',
      description:
        'Benzimidazole chemistry halts active fungal infections by stopping cell division, making HTM effective when sprayed at early disease appearance with thorough coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Preventive action',
      description:
        'Applied before disease establishes, HTM builds internal defence in treated tissue — ideal for preventive programs when humid weather favours rapid pathogen spread.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Easy mixing WP',
      description:
        'The premium wettable powder disperses quickly in water and forms a uniform spray suspension that spreads and adheres evenly across the crop canopy.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Long residual effect',
      description:
        'Systemic activity inside plant tissue maintains protection between scheduled spray intervals during critical flowering and fruit-development stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier green leaf area supports stronger branching, flowering, and fruit set — essential when fungal pressure threatens mid-season crop development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner fruits with reduced disease scarring improve marketability in mango, chilli, grapes, apple, pomegranate, and vegetable programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely fungal disease control preserves flowers and fruits — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Systemic curative technology',
      description:
        'Thiophanate Methyl is absorbed and translocated within the plant, delivering both curative and preventive action that surface-only contact fungicides cannot match against established infections.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'HTM Fungicide manages anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back across many crops instead of relying on separate products for each disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long-lasting protection',
      description:
        'Systemic movement within plant tissue maintains preventive and curative activity between spray intervals — reducing application frequency during high-pressure seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Farmer-friendly pricing with the popular 500 gm pack at the recommended 20 gm per pump dose delivers dependable disease protection and strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'HTM controls anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back — the most common fungal threats across Indian fruit and vegetable crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic movement',
      description:
        'Thiophanate Methyl 70% absorbs into foliage and translocates within plant tissue, protecting new shoots and developing fruits from fungal attack between spray rounds.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Curative activity',
      description:
        'HTM stops active fungal infections at early lesion stage by inhibiting cell division, halting spore production and lesion expansion when growers spot first symptoms.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Preventive protection',
      description:
        'Applied before pathogens establish, HTM builds internal defence in treated tissue — ideal for scheduled preventive sprays when forecasts favour disease development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage supports stronger photosynthesis, better plant growth, and more uniform crop development through the season when fungal pathogens threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Long residual effect',
      description:
        'Extended systemic activity inside plant tissue reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Excellent coverage',
      description:
        'The fine wettable powder spreads uniformly and adheres well to leaves and fruits, ensuring consistent protective deposits across the whole canopy.',
      icon: 'fas fa-fill-drip'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling anthracnose, mildew, scab, and fruit rot that scar produce, HTM helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting flowers and fruits during reproductive stages helps preserve yield when anthracnose, powdery mildew, or fruit rot pressure is high in dense canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on mango, chilli, grape, apple, and pomegranate produce improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely HTM application limits defoliation, fruit drop, and rot — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable systemic protection at a farmer-friendly dose of 20 gm per pump helps growers protect yield and quality, translating disease control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'HTM Fungicide is a premium broad-spectrum systemic fungicide from HARISHREE CROP SCIENCE, formulated as Thiophanate Methyl 70% WP. Indian growers face increasing pressure from anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back — diseases that damage foliage, scar fruits, and cut yields when left unchecked. Systemic fungicides like HTM are trusted because they combine curative action against established infections with preventive protection, reaching disease inside the plant where contact fungicides cannot.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and fruiting parts. HTM is engineered for crop safety when used at the recommended 20 gm per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across mango, chilli, tomato, grapes, apple, pomegranate, cucumber, and brinjal. For agronomists and dealers, HTM represents a dependable systemic crop protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutThiophanate =
    'Thiophanate Methyl 70% is a benzimidazole (MBC) fungicide (FRAC Group 1) that works by inhibiting beta-tubulin synthesis during fungal cell division (mitosis). By disrupting the formation of the cell skeleton, it stops the fungus from multiplying and growing — halting both spore germination and the expansion of existing lesions. Because the active is absorbed into the plant and translocated within the tissue, HTM delivers true systemic, curative, and preventive control, reaching infections that surface contact fungicides alone may miss.';

  aboutCombined =
    'This systemic, curative mode of action is exactly why Thiophanate Methyl remains a valued tool in fruit and vegetable disease programs. Farmers spraying HTM at early disease appearance gain both immediate suppression of active infections and extended residual protection of new growth — a combination that surface-acting fungicides struggle to match across anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back in mango, chilli, tomato, grapes, apple, pomegranate, cucumber, and brinjal programs. For best results and resistance management, alternate or tank-mix with a multi-site partner as advised on the label.';

  targetCropsTable = [
    { crop: 'Mango', diseases: 'Anthracnose, Powdery Mildew' },
    { crop: 'Chilli', diseases: 'Anthracnose, Fruit Rot' },
    { crop: 'Tomato', diseases: 'Leaf Spot, Wilt' },
    { crop: 'Grapes', diseases: 'Powdery Mildew, Anthracnose' },
    { crop: 'Apple', diseases: 'Scab, Powdery Mildew' },
    { crop: 'Pomegranate', diseases: 'Leaf Spot, Fruit Rot' },
    { crop: 'Cucumber', diseases: 'Powdery Mildew, Leaf Spot' },
    { crop: 'Brinjal', diseases: 'Leaf Spot, Die Back' }
  ];

  diseaseDetails = [
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, leaves, and shoots. Pinkish spore masses may appear in humid conditions, turning mango, chilli, and grape produce unmarketable as lesions expand.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest and post-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'Systemic HTM interrupts the anthracnose cycle by stopping cell division in the fungus and preventing new spore production. Time sprays before flowering and at early fruit-set for best protection.'
    },
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on leaves, shoots, and fruits. Leaves may curl, yellow, and drop prematurely when colonies spread across the canopy during dry, humid spells.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and causes fruit scarring — cutting marketable yield in mango, grapes, apple, cucumber, and other crops when left untreated.',
      controlBenefits:
        'HTM systemic activity suppresses mildew colonies and protects new growth. Spray at first visible colonies with full canopy coverage for best long-lasting disease control.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation across many crops.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during wet periods.',
      controlBenefits:
        'HTM limits lesion expansion and protects uninfected leaf tissue. Early spray at first spotting delivers curative systemic action plus preventive cover across the full canopy.'
    },
    {
      name: 'Fruit Rot',
      symptoms:
        'Soft, water-soaked lesions on fruits that darken and expand. Common on chilli, pomegranate, and horticultural produce during humid weather when spores spread by rain splash.',
      impact:
        'Fruit rot causes direct quality losses — infected produce is rejected at market, pack-out rates fall, and pre-harvest drop reduces total harvestable volume in high-value crops.',
      controlBenefits:
        'Preventive HTM sprays before and during fruit-set build systemic protection inside developing fruits. Curative activity at early rot signs limits spread and preserves marketable quality.'
    },
    {
      name: 'Scab',
      symptoms:
        'Rough, corky, scab-like lesions on fruits and leaves, often dark and raised. Common on apple, causing distorted, blemished fruit and reduced leaf function in humid spring weather.',
      impact:
        'Scab severely downgrades fruit appearance and market value, and heavy leaf infection weakens the tree and reduces yield over the season if not controlled early.',
      controlBenefits:
        'HTM systemic curative activity checks scab development on leaves and fruits. Apply preventively and at early symptoms with thorough coverage for clean, marketable produce.'
    },
    {
      name: 'Die Back',
      symptoms:
        'Progressive drying and death of shoots and twigs from the tip downward, often with discoloured wood. Common on chilli, mango, and brinjal under fungal stress.',
      impact:
        'Die back reduces bearing wood and overall plant vigour, cutting flowering and fruiting potential and weakening the crop over successive seasons if left unmanaged.',
      controlBenefits:
        'HTM moves systemically to check the fungi causing die back. Spray at early symptoms with good coverage of shoots and foliage to protect healthy bearing wood.'
    }
  ];

  targetPests = [
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and shoots. Systemic HTM stops fungal cell division and limits anthracnose damage on mango, chilli, and grapes at early infection stage.'
    },
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. HTM systemic activity suppresses mildew development and protects new growth in mango, grapes, apple, and cucumber.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. HTM limits lesion expansion and preserves photosynthetic leaf area across many crops.'
    },
    {
      name: 'Fruit Rot',
      description:
        'Soft rotting lesions on developing fruits. HTM preventive and curative activity protects chilli, pomegranate, and horticultural produce during humid fruit-set windows.'
    },
    {
      name: 'Scab',
      description:
        'Rough corky lesions on apple fruits and leaves. HTM systemic curative action checks scab development for clean, marketable produce.'
    },
    {
      name: 'Die Back',
      description:
        'Progressive drying of shoots from the tip. HTM moves systemically to check die-back fungi and protect healthy bearing wood in chilli, mango, and brinjal.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Early disease appearance' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Frequency', recommendation: 'As per disease pressure' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'HTM' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Thiophanate Methyl 70% WP' },
      { label: 'Chemical group', value: 'Benzimidazole / MBC (FRAC 1)' },
      { label: 'Action type', value: 'Systemic, preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, die back' },
      { label: 'Target crops', value: 'Mango, chilli, tomato, grapes, apple, pomegranate, cucumber, brinjal' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 500 gm, 1 Kg' },
      { label: 'Recommended dose', value: '20 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'HTM' },
    { label: 'Brand / Trade Name', value: 'HTM' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Thiophanate Methyl 70%' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Benzimidazole (MBC)' },
    { label: 'Action Type', value: 'Systemic, preventive and curative broad-spectrum fungicide' },
    { label: 'Diseases Controlled', value: 'Anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, die back' },
    { label: 'Target Crops', value: 'Mango, chilli, tomato, grapes, apple, pomegranate, cucumber, brinjal' },
    { label: 'Recommended Dose', value: '20 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (500 gm, 1 Kg)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying HTM Fungicide.'
    },
    {
      title: 'Wear protective clothing',
      text: 'Use gloves, goggles, mask, and protective clothing when handling powder or preparing the spray mix in the field.'
    },
    {
      title: 'Avoid drift during spraying',
      text: 'Spray in calm morning or evening hours to prevent drift onto neighbouring crops, homes, or water bodies.'
    },
    {
      title: 'Keep away from children and animals',
      text: 'Store in original sealed pack away from food, feed, seed, and out of reach of children and animals.'
    },
    {
      title: 'Avoid contamination of water sources',
      text: 'Never spray directly over ponds, canals, or drinking water sources. Triple-rinse empty packs before disposal.'
    },
    {
      title: 'Store in a cool and dry place',
      text: 'Keep sealed packs in a cool, dry, ventilated area away from direct sunlight and moisture.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 20 gm per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'Hari 45 (Mancozeb 75% WP)',
      description: 'Multi-site contact fungicide for early blight, late blight, downy mildew, leaf spot, and fruit rot control.',
      route: '/products/mancozeb-75-wp-hari-45',
      image: 'assets/products/fungicide/mancozeb-75-wp.jpg',
      imageAlt: 'Hari 45 Mancozeb 75% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'Saf 63 (Carbendazim 12% + Mancozeb 63% WP)',
      description: 'Dual-action systemic plus contact fungicide for leaf spot, blast, rust, and fruit rot across field and horticultural crops.',
      route: '/products/carbendazim-12-mancozeb-63-wp-saf-63',
      image: 'assets/products/carbendazim-12-mancozeb-63-wp.png',
      imageAlt: 'Saf 63 Carbendazim Mancozeb fungicide by Harishree Crop Science'
    },
    {
      name: 'Tebuja (Tebuconazole 25.9% EC)',
      description: 'Systemic triazole fungicide for rust, powdery mildew, leaf spot, and anthracnose across multiple crops.',
      route: '/products/tebuconazole-25-9-ec-tebuja',
      image: 'assets/products/fungicide/tebuconazole-25-9--ec.jpg',
      imageAlt: 'Tebuja Tebuconazole 25.9% EC fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is HTM Fungicide used for?',
      answer:
        '<strong>HTM Fungicide</strong> (<strong>Thiophanate Methyl 70% WP</strong>) is used for <strong>broad-spectrum systemic disease control</strong> including anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back in mango, chilli, tomato, grapes, apple, pomegranate, cucumber, and brinjal. It is a systemic fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'HTM Fungicide (Thiophanate Methyl 70% WP) is used for broad-spectrum systemic disease control including anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back in mango, chilli, tomato, grapes, apple, pomegranate, cucumber, and brinjal. It is a systemic fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Thiophanate Methyl 70% WP control?',
      answer:
        '<strong>Thiophanate Methyl 70% WP</strong> controls <strong>anthracnose</strong>, <strong>powdery mildew</strong>, <strong>leaf spot</strong>, <strong>fruit rot</strong>, <strong>scab</strong>, <strong>wilt</strong>, <strong>stem rot</strong>, and <strong>die back</strong>. HTM delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform coverage.',
      answerPlain:
        'Thiophanate Methyl 70% WP controls anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back. HTM delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform coverage.'
    },
    {
      question: 'What is the recommended dose of HTM (Thiophanate Methyl 70% WP)?',
      answer:
        'The standard recommended dose of <strong>HTM</strong> is <strong>20 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of HTM is 20 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'Is Thiophanate Methyl a systemic or contact fungicide?',
      answer:
        '<strong>Thiophanate Methyl 70% WP</strong> is a <strong>systemic fungicide</strong>. It is absorbed into the plant and translocated within the tissue, delivering both <strong>curative</strong> control of active infections and <strong>preventive</strong> protection of new growth — reaching disease that contact fungicides cannot.',
      answerPlain:
        'Thiophanate Methyl 70% WP is a systemic fungicide. It is absorbed into the plant and translocated within the tissue, delivering both curative control of active infections and preventive protection of new growth — reaching disease that contact fungicides cannot.'
    },
    {
      question: 'Which crops can be treated with HTM?',
      answer:
        '<strong>HTM Fungicide</strong> can be used on <strong>mango</strong>, <strong>chilli</strong>, <strong>tomato</strong>, <strong>grapes</strong>, <strong>apple</strong>, <strong>pomegranate</strong>, <strong>cucumber</strong>, and <strong>brinjal</strong>. It is a versatile crop protection fungicide for fruit and vegetable programs facing mixed fungal disease pressure during the growing season.',
      answerPlain:
        'HTM Fungicide can be used on mango, chilli, tomato, grapes, apple, pomegranate, cucumber, and brinjal. It is a versatile crop protection fungicide for fruit and vegetable programs facing mixed fungal disease pressure during the growing season.'
    },
    {
      question: 'Is HTM good for anthracnose control?',
      answer:
        'Yes. <strong>HTM (Thiophanate Methyl 70% WP)</strong> is one of the most effective fungicides for <strong>anthracnose</strong> in mango, chilli, and grapes. Its systemic curative action stops the fungus from multiplying when applied at early disease appearance with thorough coverage of fruits and foliage.',
      answerPlain:
        'Yes. HTM (Thiophanate Methyl 70% WP) is one of the most effective fungicides for anthracnose in mango, chilli, and grapes. Its systemic curative action stops the fungus from multiplying when applied at early disease appearance with thorough coverage of fruits and foliage.'
    },
    {
      question: 'How does Thiophanate Methyl work?',
      answer:
        '<strong>Thiophanate Methyl</strong> is a <strong>benzimidazole (MBC) fungicide</strong> that inhibits fungal cell division by disrupting beta-tubulin formation. This stops the fungus from multiplying, halting spore germination and lesion expansion — giving HTM its systemic, curative, and preventive disease control.',
      answerPlain:
        'Thiophanate Methyl is a benzimidazole (MBC) fungicide that inhibits fungal cell division by disrupting beta-tubulin formation. This stops the fungus from multiplying, halting spore germination and lesion expansion — giving HTM its systemic, curative, and preventive disease control.'
    },
    {
      question: 'When should HTM be sprayed?',
      answer:
        'Spray <strong>HTM</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, shoots, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.',
      answerPlain:
        'Spray HTM at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, shoots, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.'
    }
  ];

  testimonials = [
    {
      name: 'Vijay',
      location: 'Maharashtra',
      text:
        'Anthracnose used to spoil a big part of my mango crop every year. After I started spraying HTM at flowering and early fruit-set, the black spots reduced dramatically and the fruit finish was much cleaner. The systemic action clearly works inside the plant, and the 20 gm per pump dose is easy to follow.',
      rating: 5
    },
    {
      name: 'Ganesh',
      location: 'Karnataka',
      text:
        'Powdery mildew is a constant worry in my grape plot. HTM controlled the mildew well and protected the new growth and bunches. The wettable powder mixes easily and gives even coverage, and I got better quality bunches and rates at the market this season.',
      rating: 5
    },
    {
      name: 'Mohan',
      location: 'Andhra Pradesh',
      text:
        'I use HTM in my chilli field for anthracnose and fruit rot. It stopped the disease from spreading and reduced fruit drop noticeably. Disease pressure was lower this year and the profitability at harvest was clearly better compared to last season.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '64',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding HTM.' },
    { name: 'Measure HTM', text: 'Accurately measure 20 gm of Thiophanate Methyl 70% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until the WP forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, shoots, and fruits where anthracnose, mildew, and leaf spot develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform canopy coverage is essential for systemic fungicide efficacy across all target crops.' },
    { name: 'Post-spray safety', text: 'Wash exposed skin, clean equipment, and store leftover product safely. Observe re-entry interval.' }
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
        'Thiophanate Methyl 70% WP HTM Fungicide for Broad Spectrum Systemic Disease Control',
      productImageCaption:
        'Systemic Fungicide for Anthracnose, Powdery Mildew, Leaf Spot, Scab and Fruit Rot Control',
      description:
        'HTM (Thiophanate Methyl 70% WP) by Harishree Crop Science is a systemic fungicide for anthracnose, powdery mildew, leaf spot, fruit rot, scab, wilt, stem rot, and die back. Dose: 20 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'HTM Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'HTM-THIOPHANATE-METHYL-70-WP',
      mpn: 'HTM-THIOPHANATE-METHYL-70-WP',
      dose: '20 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply HTM (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of HTM (Thiophanate Methyl 70% WP) for foliar application at 20 gm/pump.',
      alternateNames: [
        'HTM',
        'HTM Fungicide',
        'Thiophanate Methyl Fungicide',
        'Systemic Fungicide',
        'Fungicide for Powdery Mildew',
        'Fungicide for Anthracnose',
        'Fungicide for Leaf Spot',
        'Fungicide for Fruit Rot',
        'Benzimidazole Fungicide',
        'Fungicide for Vegetables',
        'Fungicide for Fruits',
        'Broad Spectrum Systemic Fungicide',
        'Mango Fungicide',
        'Chilli Fungicide',
        'Grapes Fungicide',
        'Apple Fungicide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `HTM (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'HTM (Thiophanate Methyl 70% WP) systemic fungicide delivers curative control of anthracnose, powdery mildew, leaf spot & fruit rot. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Thiophanate Methyl 70% WP | HTM Fungicide',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Thiophanate Methyl 70% WP (HTM) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'HTM | Thiophanate Methyl 70% WP Fungicide',
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
