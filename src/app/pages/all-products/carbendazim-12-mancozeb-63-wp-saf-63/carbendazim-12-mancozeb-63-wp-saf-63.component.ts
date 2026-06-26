import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'SAF63_CARBENDAZIM_MANCOZEB_WP';
const INDICATIVE_LIST_PRICE_INR = 437;

@Component({
  selector: 'app-carbendazim-12-mancozeb-63-wp-saf-63',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carbendazim-12-mancozeb-63-wp-saf-63.component.html',
  styleUrl: './carbendazim-12-mancozeb-63-wp-saf-63.component.scss'
})
export class Carbendazim12Mancozeb63WpSaf63Component implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/carbendazim-12-mancozeb-63-wp-saf-63';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/carbendazim-12-mancozeb-63-wp.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Carbendazim 12% + Mancozeb 63% WP';
  brandName = 'Saf 63';

  featuredSnippetAnswer =
    'Saf 63 (Carbendazim 12% + Mancozeb 63% WP) is a dual-action systemic plus contact fungicide by Harishree Crop Science for preventive and curative control of blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, and seedling diseases across paddy, groundnut, soybean, tomato, chilli, grapes, mango, and cotton. Recommended dose: 20 gm per pump.';

  packSizes = [
    { volume: '500 gm', price: 437, featured: true, sku: 'SAF63-500GM' },
    { volume: '1 Kg', price: 230, featured: false, sku: 'SAF63-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredients',
      description:
        'Saf 63 combines Carbendazim 12% and Mancozeb 63% WP — systemic benzimidazole plus multi-site contact chemistry in one wettable powder for dependable broad-spectrum protection.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Systemic + contact action',
      description:
        'Carbendazim moves inside the plant for curative control while Mancozeb forms a protective surface barrier — covering disease both inside and outside the plant in a single spray.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One Saf 63 spray manages blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, and alternaria — reducing the need for multiple single-disease products.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive action',
      description:
        'Mancozeb builds a protective shield on treated foliage before pathogens establish — ideal for preventive crop protection programs when weather favours disease spread.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Carbendazim halts active fungal infections by stopping cell division, making Saf 63 effective when sprayed at early disease appearance with thorough coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Resistance management',
      description:
        'Combining a single-site systemic with a multi-site contact partner in one product helps slow resistance development compared to repeated solo single-site sprays.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Longer residual activity',
      description:
        'Systemic plus protective cover maintains disease control between scheduled spray intervals during critical tillering, flowering, and fruit-development stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier green leaf area supports stronger tillering, branching, and grain or fruit set — essential when fungal pressure threatens mid-season crop development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely fungal disease control preserves leaf area, grains, and fruits — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Dual-action technology',
      description:
        'Carbendazim and Mancozeb work through complementary pathways — systemic curative action plus multi-site protective cover — delivering broader disease control than single-active fungicides in one spray tank.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'Saf 63 Fungicide manages blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, and alternaria across many crops instead of relying on separate products for each disease complex.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Resistance management',
      description:
        'Pairing a single-site systemic with a multi-site contact partner in one formulation supports rotation-friendly disease programs and slows the development of fungicide resistance.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Better return on investment',
      description:
        'Farmer-friendly pricing with the popular 500 gm pack at the recommended 20 gm per pump dose delivers dependable dual-action protection and strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Saf 63 controls blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, and seedling diseases — the most common fungal threats across Indian field and horticultural crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic curative activity',
      description:
        'Carbendazim 12% absorbs into the plant and stops active fungal infections by halting cell division — effective when growers spot the first signs of disease pressure.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Contact preventive protection',
      description:
        'Mancozeb 63% builds a protective multi-site barrier on treated foliage before pathogens establish — ideal for scheduled preventive sprays when forecasts favour disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Dual-action coverage',
      description:
        'Together the two actives protect the plant both inside and out, covering a wider disease spectrum and infection stages than single-active fungicides in one application.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage supports stronger photosynthesis, better plant growth, and more uniform crop development through the season when fungal pathogens threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better resistance management',
      description:
        'Combining single-site and multi-site chemistry in one formulation supports rotation-friendly disease programs compared to repeated sprays of a single mode-of-action product.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Longer residual effect',
      description:
        'Systemic plus protective activity reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows across kharif and rabi seasons.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling leaf spot, rust, blast, and fruit rot that scar produce, Saf 63 helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaf area, grains, and fruits during reproductive stages helps preserve yield when blast, rust, or anthracnose pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on tomato fruits, chilli, grape bunches, and mango produce improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely Saf 63 application limits defoliation, grain chaffiness, and fruit drop — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable dual-action protection at a farmer-friendly dose of 20 gm per pump helps growers protect yield and quality, translating disease control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Saf 63 Fungicide is a premium broad-spectrum dual-action fungicide from HARISHREE CROP SCIENCE, formulated as Carbendazim 12% + Mancozeb 63% WP. Indian growers face increasing pressure from blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, and seedling diseases — diseases that strip leaf area, scar produce, and cut yields when left unchecked. Combination fungicides like Saf 63 are trusted because they pair systemic curative action with multi-site protective cover in a single tank mix, simplifying field programs while covering a wider disease spectrum than most single-active products.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and fruiting parts. Saf 63 is engineered for crop safety when used at the recommended 20 gm per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across paddy, groundnut, soybean, tomato, chilli, grapes, mango, and cotton. For agronomists and dealers, Saf 63 represents a dependable dual-action crop protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutCarbendazim =
    'Carbendazim 12% is a benzimidazole (MBC) fungicide (FRAC Group 1) that delivers systemic and curative action. It is absorbed into the plant and translocated within the tissue, where it stops fungal cell division by disrupting beta-tubulin formation. By halting the fungus from multiplying, Carbendazim checks active infections and lesion expansion — reaching disease inside the plant where contact fungicides cannot. This is the curative backbone growers need when disease is already visible in the field.';

  aboutMancozeb =
    'Mancozeb 63% is a dithiocarbamate fungicide (FRAC Group M03) that works through multi-site contact and protective action. It forms a protective layer on treated leaf and fruit surfaces and disrupts several fungal enzyme processes at once, inhibiting spore germination before the pathogen can establish. Because it acts on multiple sites, the risk of resistance is very low, making Mancozeb a dependable protective partner that shields healthy tissue and supports resistance management.';

  aboutCombined =
    'Together, Carbendazim 12% and Mancozeb 63% deliver dual-action disease control with both curative and preventive benefits, broad-spectrum protection, longer residual activity, and built-in resistance management through two distinct modes of action. Farmers spraying Saf 63 at early disease appearance gain immediate lesion suppression from the systemic Carbendazim and extended protective cover from the multi-site Mancozeb — a combination that single-active fungicides struggle to match across mixed disease pressure in paddy, groundnut, soybean, tomato, chilli, grapes, mango, and cotton programs.';

  targetCropsTable = [
    { crop: 'Paddy', diseases: 'Blast, Leaf Spot' },
    { crop: 'Groundnut', diseases: 'Leaf Spot, Rust' },
    { crop: 'Soybean', diseases: 'Leaf Spot, Anthracnose' },
    { crop: 'Tomato', diseases: 'Early Blight, Leaf Spot' },
    { crop: 'Chilli', diseases: 'Anthracnose, Fruit Rot' },
    { crop: 'Grapes', diseases: 'Powdery Mildew, Anthracnose' },
    { crop: 'Mango', diseases: 'Anthracnose, Powdery Mildew' },
    { crop: 'Cotton', diseases: 'Leaf Spot, Alternaria' }
  ];

  diseaseDetails = [
    {
      name: 'Blast Disease',
      symptoms:
        'Spindle-shaped grey-brown lesions with dark borders on leaves, and dark rotting at the neck of the panicle in paddy. Severe infection causes leaf drying and broken, chaffy panicles.',
      impact:
        'Blast is among the most damaging paddy diseases — neck and node infection can cause heavy grain loss and lodging when it strikes during tillering and panicle stages.',
      controlBenefits:
        'Saf 63 systemic Carbendazim checks blast inside the plant while Mancozeb protects healthy tissue. Apply at early lesion stage with uniform coverage on leaves and panicles.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation across many crops.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during wet periods.',
      controlBenefits:
        'Saf 63 limits lesion expansion with curative Carbendazim and protects uninfected tissue with Mancozeb. Early spray at first spotting gives dual-action cover across the canopy.'
    },
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist growing conditions.',
      impact:
        'Rust destroys leaf area essential for pod and grain filling in groundnut and other crops. Severe infections can reduce yield significantly if not controlled at early pustule stage.',
      controlBenefits:
        'Saf 63 dual action halts rust sporulation and protects healthy foliage. Apply when first pustules appear — systemic plus protective cover guards new growth between sprays.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions, turning chilli, grape, and mango produce unmarketable as lesions expand.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'Dual-action Saf 63 interrupts the anthracnose cycle by stopping active infections and preventing new spore production. Time sprays before flowering and at early fruit-set.'
    },
    {
      name: 'Fruit Rot',
      symptoms:
        'Soft, water-soaked lesions on fruits that darken and expand. Common on chilli, tomato, and horticultural produce during humid weather when spores spread by rain splash.',
      impact:
        'Fruit rot causes direct quality losses — infected produce is rejected at market, pack-out rates fall, and pre-harvest drop reduces total harvestable volume in high-value crops.',
      controlBenefits:
        'Preventive Saf 63 sprays before and during fruit-set build protective and systemic cover. Curative activity at early rot signs limits spread and preserves marketable quality.'
    },
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on leaves, shoots, and fruits. Leaves may curl, yellow, and drop prematurely when colonies spread across the canopy during humid spells.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and causes fruit scarring — cutting marketable yield in grapes, mango, and other crops when left untreated.',
      controlBenefits:
        'Saf 63 suppresses mildew colonies through systemic Carbendazim and protective Mancozeb cover. Spray at first visible colonies with full canopy coverage for best control.'
    }
  ];

  targetPests = [
    {
      name: 'Blast Disease',
      description:
        'Spindle-shaped lesions and neck rot in paddy. Saf 63 systemic Carbendazim checks blast inside the plant while Mancozeb protects healthy leaf and panicle tissue.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. Saf 63 dual action limits lesion expansion and preserves photosynthetic leaf area across many crops.'
    },
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. Dual-action Saf 63 halts rust sporulation on groundnut and field crops when applied at early appearance.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. Curative Carbendazim plus protective Mancozeb limits anthracnose damage on chilli, grapes, and mango at early infection.'
    },
    {
      name: 'Fruit Rot',
      description:
        'Soft rotting lesions on developing fruits. Saf 63 preventive and curative activity protects chilli, tomato, and horticultural produce during humid fruit-set windows.'
    },
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. Saf 63 systemic and protective activity suppresses mildew development and protects new growth in grapes and mango.'
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
      { label: 'Product name', value: 'Saf 63' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredients', value: 'Carbendazim 12% + Mancozeb 63% WP' },
      { label: 'Chemical group', value: 'Benzimidazole (FRAC 1) + Dithiocarbamate (FRAC M03)' },
      { label: 'Action type', value: 'Systemic + contact, preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, seedling diseases' },
      { label: 'Target crops', value: 'Paddy, groundnut, soybean, tomato, chilli, grapes, mango, cotton' }
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
    { label: 'Product Name', value: 'Saf 63' },
    { label: 'Brand / Trade Name', value: 'Saf 63' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Carbendazim 12% + Mancozeb 63%' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Benzimidazole + Dithiocarbamate' },
    { label: 'Action Type', value: 'Systemic + contact, preventive and curative fungicide' },
    { label: 'Diseases Controlled', value: 'Blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, seedling diseases' },
    { label: 'Target Crops', value: 'Paddy, groundnut, soybean, tomato, chilli, grapes, mango, cotton' },
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
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Saf 63 Fungicide.'
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
      name: 'HTM (Thiophanate Methyl 70% WP)',
      description: 'Systemic benzimidazole fungicide for anthracnose, powdery mildew, leaf spot, and fruit rot across fruits and vegetables.',
      route: '/products/thiophanate-methyl-70-wp-htm',
      image: 'assets/products/thiophanate-methyl-70-wp.png',
      imageAlt: 'HTM Thiophanate Methyl 70% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'King (Azoxystrobin 4.8% + Chlorothalonil 40.0% SC)',
      description: 'Dual-action systemic plus contact fungicide for early blight, late blight, leaf spot, rust, and downy mildew.',
      route: '/products/azoxystrobin-4-8-chlorothalonil-40-sc-king',
      image: 'assets/products/azoxystrobin-4-8-w-w-chlorothalonil-40-0-w-w-sc.png',
      imageAlt: 'King Azoxystrobin Chlorothalonil fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Saf 63 Fungicide used for?',
      answer:
        '<strong>Saf 63 Fungicide</strong> (<strong>Carbendazim 12% + Mancozeb 63% WP</strong>) is used for <strong>broad-spectrum dual-action disease control</strong> including blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, and seedling diseases in paddy, groundnut, soybean, tomato, chilli, grapes, mango, and cotton. It is a systemic plus contact fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Saf 63 Fungicide (Carbendazim 12% + Mancozeb 63% WP) is used for broad-spectrum dual-action disease control including blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, and seedling diseases in paddy, groundnut, soybean, tomato, chilli, grapes, mango, and cotton. It is a systemic plus contact fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Carbendazim 12% + Mancozeb 63% WP control?',
      answer:
        '<strong>Carbendazim 12% + Mancozeb 63% WP</strong> controls <strong>blast</strong>, <strong>leaf spot</strong>, <strong>rust</strong>, <strong>anthracnose</strong>, <strong>fruit rot</strong>, <strong>powdery mildew</strong>, <strong>alternaria</strong>, and <strong>seedling diseases</strong>. Saf 63 delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform coverage.',
      answerPlain:
        'Carbendazim 12% + Mancozeb 63% WP controls blast, leaf spot, rust, anthracnose, fruit rot, powdery mildew, alternaria, and seedling diseases. Saf 63 delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform coverage.'
    },
    {
      question: 'What is the recommended dose of Saf 63?',
      answer:
        'The standard recommended dose of <strong>Saf 63</strong> is <strong>20 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of Saf 63 is 20 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'How does the dual-action formulation work?',
      answer:
        '<strong>Saf 63</strong> combines <strong>Carbendazim 12%</strong> (systemic benzimidazole) which moves inside the plant to stop fungal cell division for curative control, and <strong>Mancozeb 63%</strong> (multi-site contact) which forms a protective surface barrier — delivering broad-spectrum effectiveness in one spray application.',
      answerPlain:
        'Saf 63 combines Carbendazim 12% (systemic benzimidazole) which moves inside the plant to stop fungal cell division for curative control, and Mancozeb 63% (multi-site contact) which forms a protective surface barrier — delivering broad-spectrum effectiveness in one spray application.'
    },
    {
      question: 'Is Saf 63 a systemic or contact fungicide?',
      answer:
        '<strong>Saf 63</strong> is <strong>both</strong>. The Carbendazim component is <strong>systemic and curative</strong>, moving inside the plant, while the Mancozeb component is a <strong>multi-site contact</strong> fungicide that protects the plant surface — giving dependable dual-action disease control.',
      answerPlain:
        'Saf 63 is both. The Carbendazim component is systemic and curative, moving inside the plant, while the Mancozeb component is a multi-site contact fungicide that protects the plant surface — giving dependable dual-action disease control.'
    },
    {
      question: 'How does Saf 63 help with resistance management?',
      answer:
        'By combining a <strong>single-site systemic (Carbendazim)</strong> with a <strong>multi-site contact partner (Mancozeb)</strong> in one product, <strong>Saf 63</strong> reduces selection pressure on any one mode of action — helping slow the development of fungicide resistance compared to repeated solo single-site sprays.',
      answerPlain:
        'By combining a single-site systemic (Carbendazim) with a multi-site contact partner (Mancozeb) in one product, Saf 63 reduces selection pressure on any one mode of action — helping slow the development of fungicide resistance compared to repeated solo single-site sprays.'
    },
    {
      question: 'Which crops can be treated with Saf 63?',
      answer:
        '<strong>Saf 63 Fungicide</strong> can be used on <strong>paddy</strong>, <strong>groundnut</strong>, <strong>soybean</strong>, <strong>tomato</strong>, <strong>chilli</strong>, <strong>grapes</strong>, <strong>mango</strong>, and <strong>cotton</strong>. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.',
      answerPlain:
        'Saf 63 Fungicide can be used on paddy, groundnut, soybean, tomato, chilli, grapes, mango, and cotton. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.'
    },
    {
      question: 'When should Saf 63 be sprayed?',
      answer:
        'Spray <strong>Saf 63</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.',
      answerPlain:
        'Spray Saf 63 at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.'
    }
  ];

  testimonials = [
    {
      name: 'Rajendra',
      location: 'Telangana',
      text:
        'Blast and leaf spot were building up in my paddy crop during the tillering stage. One timely Saf 63 spray checked the disease and the leaves stayed green through grain fill. The dual-action formula works both inside and outside the plant, and the 20 gm per pump dose is easy to follow in the field.',
      rating: 5
    },
    {
      name: 'Kiran',
      location: 'Maharashtra',
      text:
        'I sprayed Saf 63 on my groundnut when leaf spot and rust started after the rains. The lesions stopped spreading and the crop stayed healthier through pod fill. The wettable powder mixes easily and gives even coverage, and disease pressure was clearly lower at harvest.',
      rating: 5
    },
    {
      name: 'Naresh',
      location: 'Karnataka',
      text:
        'Anthracnose and fruit rot used to cut my chilli quality every humid season. Saf 63 controlled the disease well and reduced fruit drop noticeably. I got better rates for cleaner produce at the market, and the profitability at harvest was clearly better this year.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '78',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Saf 63.' },
    { name: 'Measure Saf 63', text: 'Accurately measure 20 gm of Carbendazim 12% + Mancozeb 63% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until the WP forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, stems, and fruits where blast, leaf spot, and rust develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform canopy coverage is essential for dual-action fungicide efficacy across all target crops.' },
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
        'Carbendazim 12% + Mancozeb 63% WP Saf 63 Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Dual Action Systemic and Contact Fungicide for Blast, Leaf Spot, Rust, Anthracnose and Fruit Rot Control',
      description:
        'Saf 63 (Carbendazim 12% + Mancozeb 63% WP) by Harishree Crop Science is a dual-action systemic plus contact fungicide for blast, leaf spot, rust, anthracnose, fruit rot, and powdery mildew. Dose: 20 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'Saf 63 Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'SAF63-CARBENDAZIM-MANCOZEB-WP',
      mpn: 'SAF63-CARBENDAZIM-MANCOZEB-WP',
      dose: '20 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Saf 63 (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Saf 63 (Carbendazim 12% + Mancozeb 63% WP) for foliar application at 20 gm/pump.',
      alternateNames: [
        'Saf 63',
        'Saf 63 Fungicide',
        'Carbendazim Mancozeb Fungicide',
        'Dual Action Fungicide',
        'Systemic and Contact Fungicide',
        'Fungicide for Leaf Spot',
        'Fungicide for Blast Disease',
        'Fungicide for Rust Disease',
        'Fungicide for Fruit Rot',
        'Broad Spectrum Fungicide',
        'Agricultural Fungicide',
        'Paddy Fungicide',
        'Groundnut Fungicide',
        'Chilli Fungicide',
        'Mango Fungicide',
        'Cotton Fungicide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Saf 63 (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Saf 63 (Carbendazim 12% + Mancozeb 63% WP) dual-action fungicide delivers systemic + contact control of blast, leaf spot, rust & fruit rot. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Carbendazim 12% + Mancozeb 63% WP | Saf 63',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Carbendazim 12% + Mancozeb 63% WP (Saf 63) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Saf 63 | Carbendazim + Mancozeb Fungicide',
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
