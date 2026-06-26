import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'SUPER_COC_COPPER_OXYCHLORIDE_WP';
const INDICATIVE_LIST_PRICE_INR = 425;

@Component({
  selector: 'app-copper-oxychloride-50-wp-super-coc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './copper-oxychloride-50-wp-super-coc.component.html',
  styleUrl: './copper-oxychloride-50-wp-super-coc.component.scss'
})
export class CopperOxychloride50WpSuperCocComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/copper-oxychloride-50-wp-super-coc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/copper-oxychloride-50-wp.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Copper Oxychloride 50% WP';
  brandName = 'Super COC';

  featuredSnippetAnswer =
    'Super COC (Copper Oxychloride 50% WP) is a broad-spectrum contact fungicide and bactericide by Harishree Crop Science for preventive control of leaf spot, early blight, late blight, citrus canker, anthracnose, die back, bacterial leaf spot, and fruit rot across tomato, potato, chilli, citrus, mango, grapes, pomegranate, and onion. Recommended dose: 30 gm per pump.';

  packSizes = [
    { volume: '500 gm', price: 425, featured: true, sku: 'SUPERCOC-500GM' },
    { volume: '1 kg', price: 826, featured: false, sku: 'SUPERCOC-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Copper ion release',
      description:
        'Super COC releases copper ions on the leaf surface that disrupt multiple cellular processes in fungal and bacterial pathogens — a dependable multi-site contact mode of action.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One Super COC spray manages leaf spot, blight, anthracnose, citrus canker, die back, bacterial leaf spot, and fruit rot — covering both fungal and bacterial disease pressure.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Multi-site contact action',
      description:
        'Copper acts on many sites in the pathogen at once, making resistance development very unlikely and keeping Super COC effective season after season.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive disease control',
      description:
        'Applied before infection establishes, Super COC builds a protective copper barrier on foliage and fruits — ideal for scheduled preventive sprays in humid weather.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Bactericidal activity',
      description:
        'Beyond fungi, Super COC suppresses bacterial diseases like citrus canker and bacterial leaf spot that ordinary fungicides cannot control.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Strong rainfastness',
      description:
        'Once the spray deposit dries, the wettable powder adheres well to leaves and fruits, maintaining protective cover through dew and light rain.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier, disease-free foliage supports stronger photosynthesis and plant growth when blight and leaf spot threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner fruits with reduced disease scarring improve marketability in tomato, citrus, mango, grapes, and pomegranate programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely disease control preserves leaf area and fruits — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Trusted copper chemistry',
      description:
        'Copper oxychloride is one of the most widely trusted protectant fungicides worldwide, backed by Harishree quality control and batch-to-batch consistency.',
      icon: 'fas fa-hourglass-half'
    }
  ];

  whyChoose = [
    {
      title: 'Multi-site contact action',
      description:
        'Super COC acts on many sites in the pathogen at once, delivering broad protection against fungal and bacterial diseases while keeping resistance risk extremely low.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Fungal and bacterial control',
      description:
        'Copper Oxychloride 50% WP manages both fungal diseases and bacterial diseases such as citrus canker and bacterial leaf spot — a wider spectrum than most single-purpose fungicides.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Dependable preventive cover',
      description:
        'A protective copper barrier on foliage and fruits stops disease before it establishes, making Super COC ideal for scheduled sprays ahead of humid, infection-favourable weather.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at Rupees 425 for the 500 gm pack, crop-safe application at 30 gm per pump, and broad disease coverage deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Super COC controls leaf spot, early blight, late blight, citrus canker, anthracnose, die back, bacterial leaf spot, and fruit rot — the most common threats across Indian field and horticultural crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive protection',
      description:
        'Copper Oxychloride 50% builds a protective barrier on treated foliage and fruits before pathogens establish — ideal for scheduled preventive sprays when weather favours disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Bacterial disease suppression',
      description:
        'Copper ions suppress bacterial pathogens behind citrus canker and bacterial leaf spot, giving growers control over diseases ordinary fungicides cannot reach.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Multi-site protection',
      description:
        'Acting on multiple cellular targets, Super COC stops fungal spore germination and mycelial growth while making resistance development highly unlikely.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage supports stronger photosynthesis, better plant growth, and more uniform crop development when blight and leaf spot threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Excellent resistance management',
      description:
        'Multi-site copper chemistry is a valuable rotation partner that helps preserve the effectiveness of single-site systemic fungicides in disease programs.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Strong rainfastness',
      description:
        'The wettable powder adheres well to plant surfaces once dry, maintaining protective copper cover through dew and light rainfall during the monsoon spray window.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling leaf spot, blight, canker, and fruit rot that scar produce, Super COC helps growers deliver cleaner, more uniform harvests suited to premium markets.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaf area and fruits through critical stages helps preserve yield when blight, anthracnose, or canker pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on tomato, citrus, mango, grape, and pomegranate produce improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely Super COC application limits defoliation, fruit drop, and rot — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable broad-spectrum protection at a farmer-friendly dose of 30 gm per pump helps growers protect yield and quality, translating disease control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Super COC Fungicide is a premium broad-spectrum contact fungicide and bactericide from HARISHREE CROP SCIENCE, formulated as Copper Oxychloride 50% WP. Indian growers face increasing pressure from leaf spot, early and late blight, citrus canker, anthracnose, die back, bacterial leaf spot, and fruit rot — diseases that strip leaf area, scar fruits, and cut yields when left unchecked. Copper-based fungicides like Super COC are trusted worldwide because they deliver dependable preventive protection against both fungal and bacterial pathogens through a multi-site mode of action.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and fruiting parts. Super COC is engineered for crop safety when used at the recommended 30 gm per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across tomato, potato, chilli, citrus, mango, grapes, pomegranate, and onion. For agronomists and dealers, Super COC represents a dependable protectant solution and an excellent resistance-management partner, backed by Harishree quality control and batch-to-batch consistency.';

  aboutActive =
    'Copper Oxychloride 50% delivers its activity by releasing copper ions on the plant surface in the presence of moisture. These copper ions are absorbed by fungal spores and bacterial cells, where they disrupt multiple enzyme systems and cellular processes at once. This multi-site contact action prevents fungal spore germination and inhibits mycelial growth, while also suppressing bacterial pathogens — giving growers strong preventive control and a very low risk of resistance development across repeated sprays.';

  targetCropsTable = [
    { crop: 'Tomato', diseases: 'Early Blight, Late Blight, Leaf Spot, Bacterial Leaf Spot' },
    { crop: 'Potato', diseases: 'Early Blight, Late Blight' },
    { crop: 'Chilli', diseases: 'Leaf Spot, Anthracnose, Fruit Rot, Die Back' },
    { crop: 'Citrus', diseases: 'Citrus Canker, Anthracnose' },
    { crop: 'Mango', diseases: 'Anthracnose, Die Back' },
    { crop: 'Grapes', diseases: 'Anthracnose, Leaf Spot' },
    { crop: 'Pomegranate', diseases: 'Bacterial Leaf Spot, Anthracnose' },
    { crop: 'Onion', diseases: 'Leaf Spot, Blight' }
  ];

  diseaseDetails = [
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge into large necrotic patches and cause premature defoliation across tomato, onion, and horticultural crops.',
      impact:
        'Leaf spot reduces photosynthetic area and weakens plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during extended wet periods.',
      controlBenefits:
        'Super COC forms a protective copper barrier that prevents spore germination on healthy tissue. Begin preventive sprays before disease onset with uniform canopy coverage for best results.'
    },
    {
      name: 'Early Blight',
      symptoms:
        'Dark concentric-ring lesions on older leaves of potato and tomato, with yellowing around the spots. Lesions enlarge and merge, leading to defoliation under warm, humid conditions.',
      impact:
        'Early blight reduces tuber and fruit size by destroying foliage during bulking. Severe infections shorten the productive canopy period and cut marketable yield.',
      controlBenefits:
        'Preventive Super COC sprays protect new and existing foliage with multi-site copper action, limiting lesion spread. Apply at first signs and repeat as per disease pressure.'
    },
    {
      name: 'Late Blight',
      symptoms:
        'Water-soaked grey-green patches on leaves that rapidly turn brown-black, with white fungal growth on leaf undersides in humid weather. Spreads explosively in cool, wet conditions.',
      impact:
        'Late blight can destroy potato and tomato crops within days, causing total foliage collapse and tuber or fruit rot — one of the most damaging diseases in cool, moist seasons.',
      controlBenefits:
        'Super COC builds a protective copper cover ahead of infection. Begin preventive sprays before blight-favourable weather and maintain coverage on new growth for dependable protection.'
    },
    {
      name: 'Citrus Canker',
      symptoms:
        'Raised corky brown lesions with oily, water-soaked margins on citrus leaves, twigs, and fruits. Severe infections cause defoliation, twig dieback, and blemished, unmarketable fruit.',
      impact:
        'Citrus canker is a bacterial disease that scars fruit and weakens trees, directly reducing fruit quality, market value, and long-term orchard productivity.',
      controlBenefits:
        'Copper ions from Super COC suppress the canker bacterium on plant surfaces. Protective sprays during flush and fruit development limit new infections and protect produce quality.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves, sometimes with pinkish spore masses in humid conditions. Infected chilli, mango, and grape produce becomes unmarketable.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'Super COC preventive sprays before flowering and at early fruit-set build protective cover that interrupts the anthracnose cycle and preserves marketable produce.'
    },
    {
      name: 'Die Back',
      symptoms:
        'Progressive drying of twigs and shoots from the tip downward, with browning of affected tissue. Common on chilli and mango under stress and humid conditions.',
      impact:
        'Die back kills productive shoots and flowering wood, reducing fruit-bearing capacity and overall plant vigor when left unchecked through the season.',
      controlBenefits:
        'Protective Super COC sprays on foliage and shoots limit pathogen entry at wounds and tips. Time sprays before and during flush for effective suppression.'
    },
    {
      name: 'Bacterial Leaf Spot',
      symptoms:
        'Small water-soaked spots that turn brown to black, often with yellow halos, on leaves of tomato, chilli, and pomegranate. Spots may merge and cause leaf drop.',
      impact:
        'Bacterial leaf spot reduces leaf area and scars fruit, lowering both yield and produce quality — and is not controlled by ordinary fungicides.',
      controlBenefits:
        'The bactericidal copper action of Super COC suppresses the causal bacteria on plant surfaces. Begin preventive sprays early and maintain uniform coverage in humid weather.'
    },
    {
      name: 'Fruit Rot',
      symptoms:
        'Soft, water-soaked lesions on fruits that darken and expand. Common on chilli and horticultural produce during humid weather when spores spread by rain splash.',
      impact:
        'Fruit rot causes direct quality losses — infected produce is rejected at market, pack-out rates fall, and pre-harvest drop reduces total harvestable volume.',
      controlBenefits:
        'Preventive Super COC sprays before and during fruit-set build a protective copper layer on developing fruits, limiting rot spread and preserving marketable produce quality.'
    }
  ];

  targetPests = [
    {
      name: 'Leaf Spot',
      description:
        'Brown lesions that merge and cause defoliation. Super COC copper barrier prevents spore germination and protects leaf area across tomato, onion, and horticultural crops.'
    },
    {
      name: 'Early Blight',
      description:
        'Concentric-ring lesions on potato and tomato foliage. Multi-site copper action limits lesion spread when applied preventively at first signs.'
    },
    {
      name: 'Late Blight',
      description:
        'Rapidly spreading grey-green patches in cool, wet weather. Super COC protective cover ahead of infection guards potato and tomato canopies.'
    },
    {
      name: 'Citrus Canker',
      description:
        'Corky bacterial lesions on citrus leaves and fruit. Copper ions suppress the canker bacterium and protect fruit quality during flush and fruit set.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark fruit lesions. Super COC preventive cover interrupts the anthracnose cycle on chilli, mango, and grapes.'
    },
    {
      name: 'Bacterial Leaf Spot',
      description:
        'Water-soaked spots with yellow halos. Bactericidal copper action suppresses the causal bacteria on tomato, chilli, and pomegranate.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Preventive / early disease appearance' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Frequency', recommendation: 'As per disease pressure' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Super COC' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide / Bactericide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Copper Oxychloride 50% WP' },
      { label: 'Chemical group', value: 'Inorganic copper (FRAC M01)' },
      { label: 'Action type', value: 'Multi-site contact preventive disease control' },
      { label: 'Diseases controlled', value: 'Leaf spot, blight, citrus canker, anthracnose, die back, bacterial leaf spot, fruit rot' },
      { label: 'Target crops', value: 'Tomato, potato, chilli, citrus, mango, grapes, pomegranate, onion' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 500 gm, 1 kg' },
      { label: 'Recommended dose', value: '30 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Preventive or early disease appearance per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Super COC' },
    { label: 'Brand / Trade Name', value: 'Super COC' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Copper Oxychloride containing copper content 50% WP' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Inorganic copper fungicide' },
    { label: 'Action Type', value: 'Multi-site contact fungicide and bactericide' },
    { label: 'Diseases Controlled', value: 'Leaf spot, early blight, late blight, citrus canker, anthracnose, die back, bacterial leaf spot, fruit rot' },
    { label: 'Target Crops', value: 'Tomato, potato, chilli, citrus, mango, grapes, pomegranate, onion' },
    { label: 'Recommended Dose', value: '30 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Preventive or early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide / Bactericide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (500 gm, 1 kg)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Super COC Fungicide.'
    },
    {
      title: 'Wear protective clothing',
      text: 'Use gloves, goggles, mask, and protective clothing when handling the powder or preparing the spray mix in the field.'
    },
    {
      title: 'Avoid drift during spraying',
      text: 'Spray in calm morning or evening hours to prevent drift onto neighbouring crops, homes, or water bodies.'
    },
    {
      title: 'Keep away from children and animals',
      text: 'Store in original sealed container away from food, feed, seed, and out of reach of children and animals.'
    },
    {
      title: 'Avoid contamination of water sources',
      text: 'Never spray directly over ponds, canals, or drinking water sources. Triple-rinse empty containers before disposal.'
    },
    {
      title: 'Store in a cool and dry place',
      text: 'Keep sealed packs in a cool, dry, ventilated area away from direct sunlight and moisture.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 30 gm per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'N-Tracol (Propineb 70% WP)',
      description: 'Multi-site contact fungicide for early blight, downy mildew, leaf spot, and rust across vegetables and fruit crops.',
      route: '/products/propineb-70-wp-n-tracol',
      image: 'assets/products/fungicide/propineb-70-wp.jpg',
      imageAlt: 'N-Tracol Propineb 70% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'Hatayu (Chlorothalonil 75% WP)',
      description: 'Multi-site contact fungicide for early blight, fruit rot, and leaf spot across vegetables and fruit crops.',
      route: '/products/chlorothalonil-75-wp-hatayu',
      image: 'assets/products/fungicide/chlorothalonil-75-wp.jpg',
      imageAlt: 'Hatayu Chlorothalonil 75% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'Hari 45 (Mancozeb 75% WP)',
      description: 'Multi-site contact fungicide for early and late blight, leaf spot, and rust across multiple crops.',
      route: '/products/mancozeb-75-wp-hari-45',
      image: 'assets/products/fungicide/mancozeb-75-wp.jpg',
      imageAlt: 'Hari 45 Mancozeb 75% WP fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Super COC Fungicide used for?',
      answer:
        '<strong>Super COC Fungicide</strong> (<strong>Copper Oxychloride 50% WP</strong>) is used for <strong>broad-spectrum fungal and bacterial disease control</strong> including leaf spot, early blight, late blight, citrus canker, anthracnose, die back, bacterial leaf spot, and fruit rot in tomato, potato, chilli, citrus, mango, grapes, pomegranate, and onion. It is a multi-site contact fungicide and bactericide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Super COC Fungicide (Copper Oxychloride 50% WP) is used for broad-spectrum fungal and bacterial disease control including leaf spot, early blight, late blight, citrus canker, anthracnose, die back, bacterial leaf spot, and fruit rot in tomato, potato, chilli, citrus, mango, grapes, pomegranate, and onion. It is a multi-site contact fungicide and bactericide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Copper Oxychloride 50% WP control?',
      answer:
        '<strong>Copper Oxychloride 50% WP</strong> controls <strong>leaf spot</strong>, <strong>early blight</strong>, <strong>late blight</strong>, <strong>citrus canker</strong>, <strong>anthracnose</strong>, <strong>die back</strong>, <strong>bacterial leaf spot</strong>, and <strong>fruit rot</strong>. Super COC delivers preventive activity against both fungal and bacterial pathogens when applied with uniform coverage.',
      answerPlain:
        'Copper Oxychloride 50% WP controls leaf spot, early blight, late blight, citrus canker, anthracnose, die back, bacterial leaf spot, and fruit rot. Super COC delivers preventive activity against both fungal and bacterial pathogens when applied with uniform coverage.'
    },
    {
      question: 'Which crops can be treated with Super COC?',
      answer:
        '<strong>Super COC Fungicide</strong> can be used on <strong>tomato</strong>, <strong>potato</strong>, <strong>chilli</strong>, <strong>citrus</strong>, <strong>mango</strong>, <strong>grapes</strong>, <strong>pomegranate</strong>, and <strong>onion</strong>. It is a versatile protectant fungicide for field and horticultural programs facing fungal and bacterial disease pressure.',
      answerPlain:
        'Super COC Fungicide can be used on tomato, potato, chilli, citrus, mango, grapes, pomegranate, and onion. It is a versatile protectant fungicide for field and horticultural programs facing fungal and bacterial disease pressure.'
    },
    {
      question: 'What is the recommended dosage of Super COC Fungicide?',
      answer:
        'The standard recommended dose of <strong>Super COC Fungicide</strong> is <strong>30 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of Super COC Fungicide is 30 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'How does copper oxychloride work?',
      answer:
        '<strong>Super COC</strong> releases <strong>copper ions</strong> on the plant surface that disrupt multiple enzyme systems in fungal spores and bacterial cells. This <strong>multi-site contact action</strong> prevents spore germination and mycelial growth and suppresses bacteria, giving strong preventive protection with a very low risk of resistance.',
      answerPlain:
        'Super COC releases copper ions on the plant surface that disrupt multiple enzyme systems in fungal spores and bacterial cells. This multi-site contact action prevents spore germination and mycelial growth and suppresses bacteria, giving strong preventive protection with a very low risk of resistance.'
    },
    {
      question: 'Does Super COC control bacterial diseases?',
      answer:
        'Yes. <strong>Super COC</strong> is both a fungicide and a <strong>bactericide</strong>. Its copper ions suppress bacterial pathogens behind <strong>citrus canker</strong> and <strong>bacterial leaf spot</strong> — diseases that ordinary fungicides cannot control.',
      answerPlain:
        'Yes. Super COC is both a fungicide and a bactericide. Its copper ions suppress bacterial pathogens behind citrus canker and bacterial leaf spot — diseases that ordinary fungicides cannot control.'
    },
    {
      question: 'When should Super COC be sprayed?',
      answer:
        'Spray <strong>Super COC</strong> <strong>preventively</strong> or at <strong>early disease appearance</strong> before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, stems, and fruits, and repeat based on disease pressure and label guidance.',
      answerPlain:
        'Spray Super COC preventively or at early disease appearance before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, stems, and fruits, and repeat based on disease pressure and label guidance.'
    },
    {
      question: 'Why choose Super COC over ordinary fungicides?',
      answer:
        '<strong>Super COC</strong> offers <strong>multi-site contact action</strong>, control of both <strong>fungal and bacterial diseases</strong>, dependable <strong>preventive cover</strong>, and excellent <strong>resistance-management value</strong> at Rupees 425 for the 500 gm pack — outperforming ordinary single-purpose fungicides across mixed disease pressure.',
      answerPlain:
        'Super COC offers multi-site contact action, control of both fungal and bacterial diseases, dependable preventive cover, and excellent resistance-management value at Rupees 425 for the 500 gm pack — outperforming ordinary single-purpose fungicides across mixed disease pressure.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh',
      location: 'Maharashtra',
      text:
        'I sprayed Super COC on my tomato crop when early blight started after the rains. The spots stopped spreading and the foliage stayed green much longer. Fruit quality was clearly better and I had fewer rejections at the market this season.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Gujarat',
      text:
        'Citrus canker was a big problem in my orchard. Regular preventive sprays of Super COC during the flush reduced new lesions noticeably and the fruit looked much cleaner. The 30 gm per pump dose is easy to follow in the field.',
      rating: 5
    },
    {
      name: 'Lakshman',
      location: 'Andhra Pradesh',
      text:
        'Super COC controlled anthracnose and fruit rot in my chilli during the humid season. Pod quality improved and the protective cover lasted well even after light rain. Good, dependable copper fungicide at a fair price.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '68',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Super COC.' },
    { name: 'Measure Super COC', text: 'Accurately measure 30 gm of Copper Oxychloride 50% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until the WP forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, stems, and fruits where blight, leaf spot, and canker develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform canopy coverage is essential for contact fungicide efficacy across all target crops.' },
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
        'Copper Oxychloride 50% WP Super COC Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Multi-Site Contact Fungicide and Bactericide for Leaf Spot, Blight, Citrus Canker and Fruit Rot Control',
      description:
        'Super COC (Copper Oxychloride 50% WP) by Harishree Crop Science is a multi-site contact fungicide and bactericide for leaf spot, blight, citrus canker, anthracnose, die back, bacterial leaf spot, and fruit rot. Dose: 30 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.productTitle,
      category: 'Agricultural Fungicide',
      sku: 'SUPERCOC-COPPER-OXYCHLORIDE-WP',
      mpn: 'SUPERCOC-COPPER-OXYCHLORIDE-WP',
      dose: '30 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Super COC (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Super COC (Copper Oxychloride 50% WP) for foliar application at 30 gm/pump.',
      alternateNames: ['Copper Oxychloride 50% WP'],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Super COC (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Super COC Copper Oxychloride 50% WP delivers broad-spectrum fungal and bacterial disease control for tomato, potato, chilli, citrus & mango. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Copper Oxychloride 50% WP | Super COC',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Copper Oxychloride 50% WP (Super COC) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Super COC | Copper Oxychloride 50% WP Fungicide',
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
