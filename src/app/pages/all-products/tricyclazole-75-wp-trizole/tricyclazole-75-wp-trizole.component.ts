import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'TRIZOLE_TRICYCLAZOLE_75_WP';
const INDICATIVE_LIST_PRICE_INR = 566;

@Component({
  selector: 'app-tricyclazole-75-wp-trizole',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tricyclazole-75-wp-trizole.component.html',
  styleUrl: './tricyclazole-75-wp-trizole.component.scss'
})
export class Tricyclazole75WpTrizoleComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/tricyclazole-75-wp-trizole';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/tricyclazole-75-wp.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Tricyclazole 75% WP';
  brandName = 'TRIZOLE';

  featuredSnippetAnswer =
    'TRIZOLE (Tricyclazole 75% WP) is a systemic paddy blast fungicide by Harishree Crop Science for preventive and curative control of leaf blast, neck blast, node blast, panicle blast, and the rice blast complex caused by Magnaporthe oryzae in paddy and rice. As a melanin biosynthesis inhibitor, it stops fungal penetration into plant tissue. Recommended dose: 10 gm per pump.';

  packSizes = [
    { volume: '5 Ltr', price: 295, featured: false, sku: 'TRIZOLE-5LTR' },
    { volume: '10 Ltr', price: 566, featured: true, sku: 'TRIZOLE-10LTR' },
    { volume: '15 Ltr', price: 826, featured: false, sku: 'TRIZOLE-15LTR' }
  ];

  quickHighlights = [
    {
      title: 'Specialist blast fungicide',
      description:
        'TRIZOLE (Tricyclazole 75% WP) is purpose-built for rice blast control, targeting Magnaporthe oryzae across leaf, neck, node, and panicle blast in paddy.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Melanin biosynthesis inhibitor',
      description:
        'TRIZOLE blocks melanin formation in the fungus, preventing it from forming the appressoria needed to penetrate and infect rice leaf tissue.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Stops fungal penetration',
      description:
        'By disrupting penetration peg formation, TRIZOLE halts the blast fungus before it establishes inside the plant, protecting leaves, nodes, and panicles.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Systemic movement',
      description:
        'TRIZOLE is absorbed into rice tissue and translocates within the plant, protecting new growth and reaching infection sites that contact sprays alone may miss.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive and curative',
      description:
        'TRIZOLE delivers both preventive protection and curative knockdown of active blast infections when applied at early lesion stage with good coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Protects panicles and neck',
      description:
        'Well-timed sprays at boot-leaf to panicle stage guard against neck and panicle blast — the most damaging phases for grain yield and quality.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Long residual effect',
      description:
        'Systemic activity inside plant tissue maintains protection between scheduled spray intervals during humid, blast-favourable weather windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Easy mixing WP',
      description:
        'The wettable powder disperses quickly in water for uniform spray coverage on leaves, sheaths, and panicles across the paddy canopy.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Improved grain quality',
      description:
        'Cleaner panicles with fewer blast-affected and chaffy grains improve grain weight, fill, and marketability in paddy and rice.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely blast control preserves leaf area and panicles — supporting higher yield potential and improved grain quality per acre for paddy growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Targeted blast control',
      description:
        'TRIZOLE is a specialist systemic fungicide focused on the rice blast complex, delivering dependable control of leaf, neck, node, and panicle blast in paddy.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Unique mode of action',
      description:
        'As a melanin biosynthesis inhibitor, TRIZOLE stops the blast fungus from penetrating rice tissue — a distinct mode that complements other fungicide groups in rotation.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Preventive and curative',
      description:
        'TRIZOLE protects healthy tissue before infection and halts active blast lesions when sprayed early, giving paddy growers dependable long-lasting control.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at ₹566 for the popular pack, crop-safe application at the recommended 10 gm per pump, and protected panicles deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Dependable blast control',
      description:
        'TRIZOLE controls leaf blast, neck blast, node blast, panicle blast, and the rice blast complex — the most damaging fungal threats in paddy.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Stops fungal penetration',
      description:
        'By inhibiting melanin biosynthesis, TRIZOLE blocks appressoria formation so the blast fungus cannot penetrate and infect rice tissue.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Highly effective on Magnaporthe oryzae',
      description:
        'TRIZOLE is specifically effective against Magnaporthe oryzae, the fungus that causes rice blast, providing targeted protection through the crop cycle.',
      icon: 'fas fa-crosshairs'
    },
    {
      title: 'Preventive plus curative action',
      description:
        'TRIZOLE builds protective defence before infection and stops active blast lesions when applied early, delivering dependable two-way control.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Strong systemic movement',
      description:
        'TRIZOLE translocates through rice tissue after uptake, protecting new shoots, nodes, and developing panicles between spray rounds.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Long residual effect',
      description:
        'Extended systemic activity reduces blast pressure between scheduled sprays during humid, infection-favourable weather windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Protects neck and panicle',
      description:
        'Well-timed sprays guard the neck and panicle — the stages where blast causes the greatest loss in grain weight and quality.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Reduced secondary diseases',
      description:
        'By keeping the canopy healthy, TRIZOLE helps limit secondary fungal diseases that often follow blast damage in dense paddy stands.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Improved grain quality',
      description:
        'Controlling blast preserves grain fill and reduces chaffy grains, improving grain weight and marketability in paddy and rice.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaves, nodes, and panicles during critical stages helps preserve yield when blast pressure is high in humid rice ecosystems.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely TRIZOLE application limits blast-driven panicle loss and grain chaffiness — protecting the grower\'s investment in the paddy crop.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable blast control at a farmer-friendly 10 gm per pump helps paddy growers protect yield and grain quality, translating spray spend into stronger returns.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'TRIZOLE Fungicide is a premium systemic paddy blast fungicide from HARISHREE CROP SCIENCE, formulated as Tricyclazole 75% WP. Rice growers face heavy losses from the blast complex — leaf blast, neck blast, node blast, and panicle blast caused by Magnaporthe oryzae — which strips leaf area, breaks necks, and empties panicles when left unchecked. Specialist blast fungicides like TRIZOLE are trusted because they combine a unique mode of action with preventive and curative activity, protecting the paddy crop through its most vulnerable stages.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves, sheaths, and panicles. TRIZOLE is engineered for crop safety when used at the recommended 10 gm per pump dose, supporting healthier plant growth, better grain quality, and improved productivity across paddy and rice. For agronomists and dealers, TRIZOLE represents a dependable, blast-focused crop protection solution backed by Harishree quality control and batch-to-batch consistency — designed for the real-world blast pressure rice growers manage every season.';

  aboutTricyclazole =
    'Tricyclazole 75% is a systemic fungicide of the triazolobenzothiazole group that acts as a melanin biosynthesis inhibitor (MBI). It blocks the production of melanin, which the blast fungus needs to build the hardened appressoria and penetration pegs that force entry into rice leaf tissue. Without melanin, the fungus cannot penetrate the plant surface — stopping infection at its earliest stage. Tricyclazole is absorbed and translocated within the plant, providing both preventive protection and curative activity against the blast pathogen.';

  aboutMoa =
    'TRIZOLE is highly effective against Magnaporthe oryzae, the fungus responsible for rice blast. Because its melanin biosynthesis inhibition is a distinct mode of action from most other fungicide groups, TRIZOLE is a valuable rotation partner that helps manage resistance while delivering targeted blast control through the crop cycle.';

  aboutCombined =
    'Together, the systemic movement and melanin-inhibiting action of Tricyclazole 75% deliver dependable preventive and curative blast control. Paddy growers spraying TRIZOLE at early lesion stage and again at boot-leaf to panicle stage gain protection of leaves, nodes, and panicles through the most damaging phases of the blast cycle — protecting grain fill and yield in a way that broad multi-disease products are not specifically designed to match.';

  targetCropsTable = [
    { crop: 'Paddy', diseases: 'Leaf Blast, Neck Blast, Node Blast, Panicle Blast' },
    { crop: 'Rice', diseases: 'Rice Blast Complex, Secondary Fungal Diseases' }
  ];

  diseaseDetails = [
    {
      name: 'Leaf Blast',
      symptoms:
        'Spindle-shaped lesions with greyish centres and dark brown borders on leaves. Under high pressure, lesions merge, blighting large leaf areas and giving the field a scorched appearance.',
      impact:
        'Leaf blast reduces photosynthetic area at the tillering and vegetative stages, weakening plants and setting the stage for more damaging neck and panicle blast later in the season.',
      controlBenefits:
        'TRIZOLE stops the blast fungus penetrating rice leaves through melanin inhibition. Spray at early lesion stage with uniform coverage for dependable preventive and curative leaf blast control.'
    },
    {
      name: 'Neck Blast',
      symptoms:
        'Dark brown to black lesions girdling the neck (panicle base) of the rice plant. The neck rots and weakens, often causing the panicle to break or droop.',
      impact:
        'Neck blast is the most destructive blast phase — it blocks grain filling, causes whiteheads and chaffy grains, and can cause severe yield loss when it strikes at panicle emergence.',
      controlBenefits:
        'TRIZOLE systemic protection of the neck region limits neck blast establishment. Apply at boot-leaf to panicle emergence stage with thorough coverage to protect grain fill.'
    },
    {
      name: 'Node Blast',
      symptoms:
        'Blackish lesions on the stem nodes that weaken and may break the culm. Infected nodes turn dark and brittle, disrupting nutrient flow to developing grains.',
      impact:
        'Node blast weakens the stem and can cause lodging and poor grain fill above the infected node, reducing both yield and grain quality in affected tillers.',
      controlBenefits:
        'TRIZOLE moves systemically to protect nodes from blast infection. Timely sprays during stem elongation and panicle stages help maintain culm strength and grain development.'
    },
    {
      name: 'Panicle Blast',
      symptoms:
        'Lesions on panicle branches and grain stalks that cause partial or complete whitening of the panicle and empty, chaffy grains. Affected panicles stand erect and pale.',
      impact:
        'Panicle blast directly destroys yield by preventing grain filling. Severe infection at flowering and grain-fill leads to large numbers of unfilled grains and major yield loss.',
      controlBenefits:
        'TRIZOLE protects the panicle when applied preventively at heading. Its melanin-inhibiting action limits panicle blast spread, preserving grain fill and quality.'
    },
    {
      name: 'Rice Blast Complex',
      symptoms:
        'Combined presence of leaf, node, neck, and panicle blast through the season, with overlapping lesions on leaves, stems, and panicles in humid, blast-prone fields.',
      impact:
        'The rice blast complex can devastate susceptible varieties under favourable weather, cutting yields sharply when not managed with well-timed, repeated fungicide sprays.',
      controlBenefits:
        'TRIZOLE provides season-long blast management when used in a planned spray schedule — protecting leaves early and panicles at heading for dependable complex control.'
    },
    {
      name: 'Secondary Fungal Diseases',
      symptoms:
        'Opportunistic fungal infections that develop on blast-weakened tissue, adding further leaf spotting and grain discolouration in stressed paddy stands.',
      impact:
        'Secondary fungal diseases compound blast damage, further reducing leaf health, grain quality, and overall crop vigour in heavily infected fields.',
      controlBenefits:
        'By keeping the canopy healthy and blast-free, TRIZOLE helps limit the secondary fungal diseases that often follow blast damage in dense, humid paddy stands.'
    }
  ];

  targetPests = [
    {
      name: 'Leaf Blast',
      description:
        'Spindle-shaped lesions on rice leaves. TRIZOLE melanin-inhibiting systemic action stops the fungus penetrating leaf tissue at early lesion stage.'
    },
    {
      name: 'Neck Blast',
      description:
        'Dark girdling lesions at the panicle base. TRIZOLE protects the neck region when applied at boot-leaf to panicle emergence stage.'
    },
    {
      name: 'Node Blast',
      description:
        'Blackish lesions on stem nodes. TRIZOLE systemic movement protects nodes and helps maintain culm strength during stem elongation.'
    },
    {
      name: 'Panicle Blast',
      description:
        'Whitening of panicles and chaffy grains. TRIZOLE preventive sprays at heading limit panicle blast and preserve grain fill.'
    },
    {
      name: 'Rice Blast Complex',
      description:
        'Combined leaf, node, neck, and panicle blast. TRIZOLE provides season-long blast management in a planned spray schedule.'
    },
    {
      name: 'Secondary Fungal Diseases',
      description:
        'Opportunistic infections on blast-weakened tissue. TRIZOLE keeps the canopy healthy, helping limit secondary fungal diseases.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Early lesion stage and at boot-leaf/panicle stage' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Dose', recommendation: '10 gm per pump' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'TRIZOLE' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Tricyclazole 75%' },
      { label: 'Chemical group', value: 'Triazolobenzothiazole (Melanin biosynthesis inhibitor)' },
      { label: 'Action type', value: 'Systemic, preventive and curative blast control' },
      { label: 'Diseases controlled', value: 'Leaf blast, neck blast, node blast, panicle blast, rice blast complex' },
      { label: 'Target crops', value: 'Paddy, rice' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 5 Ltr, 10 Ltr, 15 Ltr' },
      { label: 'Recommended dose', value: '10 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early lesion stage and at boot-leaf/panicle stage or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, sheaths, and panicles' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'TRIZOLE' },
    { label: 'Brand / Trade Name', value: 'TRIZOLE' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Tricyclazole 75%' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Triazolobenzothiazole (Melanin biosynthesis inhibitor)' },
    { label: 'Action Type', value: 'Systemic preventive and curative blast fungicide' },
    { label: 'Diseases Controlled', value: 'Leaf blast, neck blast, node blast, panicle blast, rice blast complex' },
    { label: 'Target Crops', value: 'Paddy, rice' },
    { label: 'Recommended Dose', value: '10 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early lesion stage and at boot-leaf/panicle stage; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (5 Ltr, 10 Ltr, 15 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying TRIZOLE Fungicide.'
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
      text: 'Measure exactly 10 gm per pump. Over-dosing does not improve blast control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'X PRO (Azoxystrobin 16.7% + Tricyclazole 33.3% SC)',
      description: 'Dual-action systemic fungicide for rice blast, sheath blight, and brown spot in paddy crops.',
      route: '/products/x-pro-azoxystrobin-16-7-tricyclazole-33-3-sc',
      image: 'assets/products/X-PRO.png',
      imageAlt: 'X PRO Azoxystrobin Tricyclazole fungicide by Harishree Crop Science'
    },
    {
      name: 'Magic (Validamycin 3% L)',
      description: 'Systemic antibiotic fungicide for sheath blight and Rhizoctonia diseases in paddy and horticultural crops.',
      route: '/products/validamycin-3-l-magic',
      image: 'assets/products/fungicide/validamycin-3-l.jpg',
      imageAlt: 'Magic Validamycin 3% L fungicide by Harishree Crop Science'
    },
    {
      name: 'GALION WAY (Picoxystrobin 7.05% + Propiconazole 11.71% SC)',
      description: 'Dual-action strobilurin + triazole fungicide for blast, rust, leaf spot, and sheath blight.',
      route: '/products/picoxystrobin-propiconazole-sc-galion-way',
      image: 'assets/products/fungicide/picoxystrobin-7-05-propiconazole-11-71-sc.png',
      imageAlt: 'GALION WAY Picoxystrobin Propiconazole fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is TRIZOLE Fungicide used for?',
      answer:
        '<strong>TRIZOLE Fungicide</strong> (<strong>Tricyclazole 75% WP</strong>) is used for <strong>control of the rice blast complex</strong> including leaf blast, neck blast, node blast, and panicle blast caused by Magnaporthe oryzae in paddy and rice. It is a systemic melanin-biosynthesis-inhibitor fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'TRIZOLE Fungicide (Tricyclazole 75% WP) is used for control of the rice blast complex including leaf blast, neck blast, node blast, and panicle blast caused by Magnaporthe oryzae in paddy and rice. It is a systemic melanin-biosynthesis-inhibitor fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Tricyclazole 75% WP control?',
      answer:
        '<strong>Tricyclazole 75% WP</strong> controls <strong>leaf blast</strong>, <strong>neck blast</strong>, <strong>node blast</strong>, <strong>panicle blast</strong>, and the <strong>rice blast complex</strong>, and helps limit secondary fungal diseases. TRIZOLE delivers preventive and curative activity when applied at early lesion stage and at panicle stage with uniform coverage.',
      answerPlain:
        'Tricyclazole 75% WP controls leaf blast, neck blast, node blast, panicle blast, and the rice blast complex, and helps limit secondary fungal diseases. TRIZOLE delivers preventive and curative activity when applied at early lesion stage and at panicle stage with uniform coverage.'
    },
    {
      question: 'How does Tricyclazole work against blast?',
      answer:
        '<strong>Tricyclazole</strong> is a <strong>melanin biosynthesis inhibitor (MBI)</strong>. It blocks melanin production that the blast fungus needs to form appressoria and penetration pegs — so the fungus cannot penetrate rice tissue. This stops infection at its earliest stage and is highly effective against <strong>Magnaporthe oryzae</strong>.',
      answerPlain:
        'Tricyclazole is a melanin biosynthesis inhibitor (MBI). It blocks melanin production that the blast fungus needs to form appressoria and penetration pegs — so the fungus cannot penetrate rice tissue. This stops infection at its earliest stage and is highly effective against Magnaporthe oryzae.'
    },
    {
      question: 'Which crops can be treated with TRIZOLE?',
      answer:
        '<strong>TRIZOLE Fungicide</strong> is used on <strong>paddy</strong> and <strong>rice</strong>. It is a specialist blast fungicide for rice ecosystems, protecting the crop from leaf blast through to neck and panicle blast at heading.',
      answerPlain:
        'TRIZOLE Fungicide is used on paddy and rice. It is a specialist blast fungicide for rice ecosystems, protecting the crop from leaf blast through to neck and panicle blast at heading.'
    },
    {
      question: 'What is the recommended dosage of TRIZOLE Fungicide?',
      answer:
        'The standard recommended dose of <strong>TRIZOLE Fungicide</strong> is <strong>10 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your crop stage and blast pressure level.',
      answerPlain:
        'The standard recommended dose of TRIZOLE Fungicide is 10 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your crop stage and blast pressure level.'
    },
    {
      question: 'Is TRIZOLE preventive or curative?',
      answer:
        '<strong>TRIZOLE</strong> provides <strong>both preventive and curative action</strong>. It protects healthy rice tissue before infection and halts active blast lesions when sprayed early, making it a dependable systemic blast fungicide for paddy.',
      answerPlain:
        'TRIZOLE provides both preventive and curative action. It protects healthy rice tissue before infection and halts active blast lesions when sprayed early, making it a dependable systemic blast fungicide for paddy.'
    },
    {
      question: 'When should TRIZOLE be sprayed for blast?',
      answer:
        'Spray <strong>TRIZOLE</strong> at <strong>early leaf blast lesion stage</strong> and again at <strong>boot-leaf to panicle emergence</strong> to protect against neck and panicle blast. Apply in calm conditions with <strong>uniform canopy coverage</strong> and repeat based on blast pressure and label guidance.',
      answerPlain:
        'Spray TRIZOLE at early leaf blast lesion stage and again at boot-leaf to panicle emergence to protect against neck and panicle blast. Apply in calm conditions with uniform canopy coverage and repeat based on blast pressure and label guidance.'
    },
    {
      question: 'Why choose TRIZOLE over ordinary fungicides?',
      answer:
        '<strong>TRIZOLE</strong> offers <strong>targeted blast control</strong>, a <strong>unique melanin-inhibiting mode of action</strong> that stops fungal penetration, <strong>preventive and curative activity</strong>, and <strong>better return on investment</strong> at ₹566 for the popular pack — making it a dependable, blast-focused choice for paddy growers.',
      answerPlain:
        'TRIZOLE offers targeted blast control, a unique melanin-inhibiting mode of action that stops fungal penetration, preventive and curative activity, and better return on investment at ₹566 for the popular pack — making it a dependable, blast-focused choice for paddy growers.'
    }
  ];

  testimonials = [
    {
      name: 'Suresh',
      location: 'Andhra Pradesh',
      text:
        'TRIZOLE controlled leaf blast in my paddy when lesions started spreading after continuous rain. I sprayed again at panicle stage and neck blast was clearly lower than in neighbouring fields. The panicles filled well and grain quality at harvest was much better this season.',
      rating: 5
    },
    {
      name: 'Pradeep',
      location: 'Chhattisgarh',
      text:
        'Blast pressure is high in my area every kharif. With TRIZOLE in my spray schedule, the crop stayed green and the panicles were clean. The 10 gm per pump dose is easy to follow and the powder mixes well in the tank.',
      rating: 5
    },
    {
      name: 'Lakshman',
      location: 'Odisha',
      text:
        'Neck blast used to cause a lot of whiteheads in my rice. A timely TRIZOLE spray at boot-leaf stage protected the panicles and I saw far fewer chaffy grains. The investment paid off with better yield and profitability at harvest.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '67',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding TRIZOLE.' },
    { name: 'Measure TRIZOLE', text: 'Accurately measure 10 gm of Tricyclazole 75% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until it forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, sheaths, and panicles where blast develops.' },
    { name: 'Time for blast stages', text: 'Spray at early leaf blast lesions and again at boot-leaf to panicle stage to protect against neck and panicle blast.' },
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
        'Tricyclazole 75% WP TRIZOLE Systemic Paddy Blast Fungicide for Rice Blast Control',
      productImageCaption:
        'Systemic Melanin Biosynthesis Inhibitor Fungicide for Leaf, Neck, Node and Panicle Blast Control',
      description:
        'TRIZOLE (Tricyclazole 75% WP) by Harishree Crop Science is a systemic paddy blast fungicide for leaf blast, neck blast, node blast, panicle blast, and the rice blast complex. Dose: 10 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Fungicide',
      sku: 'TRIZOLE-TRICYCLAZOLE-75-WP',
      mpn: 'TRIZOLE-TRICYCLAZOLE-75-WP',
      dose: '10 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply TRIZOLE (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of TRIZOLE (Tricyclazole 75% WP) for foliar blast control application at 10 gm/pump.',
      alternateNames: ['TRIZOLE', this.productTitle],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `TRIZOLE (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'TRIZOLE Tricyclazole 75% WP is a systemic paddy blast fungicide for leaf, neck, node & panicle blast in rice. Stops fungal penetration. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Tricyclazole 75% WP | TRIZOLE',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Tricyclazole 75% WP (TRIZOLE) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'TRIZOLE | Tricyclazole 75% WP Blast Fungicide',
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
