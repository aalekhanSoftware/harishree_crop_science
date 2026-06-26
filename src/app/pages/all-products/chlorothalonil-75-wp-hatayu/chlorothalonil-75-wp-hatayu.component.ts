import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'HATAYU_CHLOROTHALONIL_75_WP';
const INDICATIVE_LIST_PRICE_INR = 366;

@Component({
  selector: 'app-chlorothalonil-75-wp-hatayu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chlorothalonil-75-wp-hatayu.component.html',
  styleUrl: './chlorothalonil-75-wp-hatayu.component.scss'
})
export class Chlorothalonil75WpHatayuComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/chlorothalonil-75-wp-hatayu';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/chlorothalonil-75-wp.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Chlorothalonil 75% WP';
  brandName = 'Hatayu';

  featuredSnippetAnswer =
    'Hatayu (Chlorothalonil 75% WP) is a broad-spectrum multi-site contact fungicide by Harishree Crop Science for preventive control of early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, and alternaria across potato, tomato, chilli, onion, grapes, groundnut, cucumber, and cabbage. Recommended dose: 30 gm per pump.';

  packSizes = [
    { volume: '250 gm', price: 189, featured: false, sku: 'HATAYU-250GM' },
    { volume: '500 gm', price: 366, featured: true, sku: 'HATAYU-500GM' },
    { volume: '1 kg', price: 708, featured: false, sku: 'HATAYU-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Multi-site contact action',
      description:
        'Hatayu (Chlorothalonil 75% WP) acts on multiple sites of the fungal cell, forming a protective barrier on plant surfaces that stops spore germination before disease establishes.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One Hatayu spray manages early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, and alternaria — reducing the need for multiple single-disease products.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive barrier',
      description:
        'Chlorothalonil builds a durable protective film on leaves and fruits before pathogens establish — ideal for scheduled preventive sprays when humid weather favours disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Excellent residual action',
      description:
        'The WP deposit clings to foliage and fruit surfaces, maintaining a long-lasting protective layer between scheduled spray intervals during high-pressure seasons.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Resistance management friendly',
      description:
        'With its multi-site mode of action, Hatayu helps delay fungicide resistance and fits well into rotation programs alongside systemic fungicides.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the spray deposit dries on foliage, Hatayu adheres well and maintains its protective barrier even after light rainfall during the monsoon spray window.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Easy mixing WP',
      description:
        'The fine, free-flowing wettable powder disperses quickly in water for uniform spray coverage on leaves, stems, and fruits across field and vegetable crops.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier green leaf area supports stronger photosynthesis and vegetative growth — essential when fungal pressure threatens mid-season crop development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner tubers, fruits, and bulbs with reduced disease scarring improve marketability in potato, tomato, chilli, onion, and grape programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely preventive disease control preserves leaf area, fruits, and tubers — supporting higher yield potential and improved harvest quality per acre.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Multi-site protection',
      description:
        'Hatayu acts on several biochemical sites in the fungal cell, delivering broad preventive control and a low risk of resistance compared to single-site systemic fungicides.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'Hatayu Fungicide manages early blight, late blight, leaf spot, rust, anthracnose, downy mildew, and black rot across multiple crops instead of relying on separate products for each disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Durable protective cover',
      description:
        'The strong contact deposit maintains a protective barrier on foliage and fruits between spray intervals — keeping the canopy clean during high-pressure, humid weather.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at ₹366 for the best-selling 500 gm pack, crop-safe application at the recommended 30 gm per pump dose, and dependable protection deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Hatayu controls early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, and alternaria — the most common fungal threats across Indian vegetable and field crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Strong preventive protection',
      description:
        'Chlorothalonil 75% builds a protective barrier on treated surfaces before pathogens establish — ideal for scheduled preventive sprays when weather forecasts favour disease development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Multi-site mode of action',
      description:
        'By acting on multiple fungal sites, Hatayu delivers dependable control and serves as a strong anti-resistance partner in fungicide rotation programs.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Excellent leaf and fruit cover',
      description:
        'The WP formulation spreads uniformly and adheres well, protecting leaves, stems, tubers, and fruits across dense vegetable and grape canopies.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage supports stronger photosynthesis, better plant growth, and more uniform crop development through the season when fungal pathogens threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Long residual cover',
      description:
        'The durable protective deposit reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows across kharif and rabi seasons.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Resistance management value',
      description:
        'Hatayu\'s multi-site chemistry helps delay resistance and complements systemic fungicides in well-planned spray rotations for sustainable disease control.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling blight, leaf spot, and downy mildew that scar produce, Hatayu helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaves, tubers, and fruits during critical stages helps preserve yield when blight, downy mildew, or leaf spot pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on potato tubers, tomato fruits, onion bulbs, and grape bunches improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely Hatayu application limits defoliation, fruit rot, and tuber blight — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable contact protection at a farmer-friendly dose of 30 gm per pump helps growers protect yield and quality, translating disease control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Hatayu Fungicide is a premium broad-spectrum contact fungicide from HARISHREE CROP SCIENCE, formulated as Chlorothalonil 75% WP. Indian growers face increasing pressure from early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, and alternaria — diseases that strip leaf area, scar produce, and cut yields when left unchecked. Contact fungicides like Hatayu are trusted because they form a durable protective barrier on plant surfaces, stopping spores before they germinate while supporting strong resistance management programs.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and fruits. Hatayu is engineered for crop safety when used at the recommended 30 gm per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across potato, tomato, chilli, onion, grapes, groundnut, cucumber, and cabbage. For agronomists and dealers, Hatayu represents a dependable preventive crop protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutChlorothalonil =
    'Chlorothalonil 75% is a broad-spectrum contact (non-systemic) fungicide belonging to the chloronitrile group (FRAC Group M5). It works by binding to and inactivating multiple enzyme and protein groups within fungal cells, disrupting several biochemical processes at once. This multi-site action stops spore germination and prevents fungal growth on the treated plant surface, delivering strong preventive protection before infection establishes.';

  aboutMultiSite =
    'Because Chlorothalonil acts on multiple sites rather than a single target, it carries a very low risk of resistance development. This makes Hatayu an excellent rotation and tank-mix partner for systemic fungicides, helping growers protect the long-term effectiveness of their disease management programs while keeping the canopy clean.';

  aboutCombined =
    'As a durable contact fungicide, Hatayu builds a protective film that keeps working on the leaf and fruit surface between sprays. Farmers applying Hatayu preventively, before disease appears, gain dependable broad-spectrum cover plus the resistance-management value of multi-site chemistry — a combination that single-site systemic products cannot match across mixed disease pressure in potato, tomato, chilli, onion, grapes, groundnut, cucumber, and cabbage programs.';

  targetCropsTable = [
    { crop: 'Potato', diseases: 'Early Blight, Late Blight' },
    { crop: 'Tomato', diseases: 'Early Blight, Leaf Spot' },
    { crop: 'Chilli', diseases: 'Anthracnose, Leaf Spot' },
    { crop: 'Onion', diseases: 'Purple Blotch, Downy Mildew' },
    { crop: 'Grapes', diseases: 'Downy Mildew, Anthracnose' },
    { crop: 'Groundnut', diseases: 'Leaf Spot, Rust' },
    { crop: 'Cucumber', diseases: 'Downy Mildew, Leaf Spot' },
    { crop: 'Cabbage', diseases: 'Black Rot, Leaf Spot' }
  ];

  diseaseDetails = [
    {
      name: 'Early Blight',
      symptoms:
        'Dark brown concentric-ring spots on lower leaves of potato and tomato that enlarge and merge. Severe infection causes yellowing, defoliation, and dark sunken lesions on tubers and fruits.',
      impact:
        'Early blight reduces photosynthetic leaf area, weakens plants, and lowers tuber and fruit yield and quality when defoliation spreads through the canopy during warm, humid weather.',
      controlBenefits:
        'Hatayu forms a protective barrier that stops early blight spores germinating. Spray preventively at first risk and repeat on schedule with uniform coverage for best long-lasting protection.'
    },
    {
      name: 'Late Blight',
      symptoms:
        'Water-soaked dark green to brown patches on leaves with white fungal growth on the undersides in humid conditions. Lesions spread rapidly, blighting foliage and rotting tubers and fruits.',
      impact:
        'Late blight is one of the most destructive potato and tomato diseases — it can destroy a crop within days under cool, wet conditions if not controlled with preventive sprays.',
      controlBenefits:
        'Hatayu\'s durable contact barrier prevents late blight establishment. Apply preventively before infection, especially in cool humid weather, with thorough coverage of leaf undersides.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation across groundnut, tomato, and cucumber.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during extended wet periods.',
      controlBenefits:
        'Hatayu protects uninfected leaf tissue and limits new lesion development. Preventive sprays at first risk deliver dependable multi-site cover across the full canopy.'
    },
    {
      name: 'Downy Mildew',
      symptoms:
        'Pale yellow to brown angular patches on the upper leaf surface with greyish-white fungal growth beneath in humid conditions. Common on grapes, onion, and cucumber during cool, wet spells.',
      impact:
        'Downy mildew rapidly destroys leaf area and can defoliate vines and vegetable crops, reducing yield and produce quality severely if not controlled preventively.',
      controlBenefits:
        'Hatayu\'s protective film stops downy mildew spores germinating on the leaf surface. Apply preventively with full coverage, especially on leaf undersides, before disease appears.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions. Infected chilli and grape produce become unmarketable when lesions expand rapidly.',
      impact:
        'Anthracnose damages produce appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'Hatayu interrupts the anthracnose cycle by preventing spore germination on the protected surface. Time sprays before flowering and at early fruit-set for maximum crop protection.'
    },
    {
      name: 'Black Rot',
      symptoms:
        'V-shaped yellow lesions starting at leaf margins of cabbage and other cole crops, with blackened veins. Affected leaves wilt, dry, and drop as the disease progresses.',
      impact:
        'Black rot reduces marketable head quality and yield in cabbage and cole crops, with severe infections causing widespread defoliation and rejection at market.',
      controlBenefits:
        'Hatayu provides a protective barrier that limits black rot spread on foliage. Apply preventively with uniform coverage and follow a rotation program for dependable control.'
    }
  ];

  targetPests = [
    {
      name: 'Early Blight',
      description:
        'Concentric-ring dark spots on potato and tomato. Hatayu\'s contact barrier prevents spore germination and protects foliage and fruits during humid weather.'
    },
    {
      name: 'Late Blight',
      description:
        'Rapidly spreading water-soaked lesions on potato and tomato. Hatayu preventive cover stops late blight establishment when applied before infection.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. Hatayu protects leaf tissue and preserves photosynthetic area across groundnut, tomato, and cucumber.'
    },
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. Hatayu\'s protective deposit limits rust spread on groundnut and field crops at early appearance.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. Hatayu prevents anthracnose spore germination on protected surfaces in chilli and grape crops.'
    },
    {
      name: 'Downy Mildew',
      description:
        'Angular patches with downy growth beneath leaves. Hatayu\'s contact film stops downy mildew germination on grapes, onion, and cucumber.'
    },
    {
      name: 'Black Rot',
      description:
        'V-shaped marginal lesions with blackened veins on cabbage. Hatayu protective cover limits black rot spread across cole crops.'
    },
    {
      name: 'Alternaria',
      description:
        'Dark concentric-ring spots on leaves and stems. Hatayu prevents alternaria establishment on tomato, potato, and vegetable canopies.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Preventive, before disease appearance' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Frequency', recommendation: 'As per disease pressure' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Hatayu' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Chlorothalonil 75%' },
      { label: 'Chemical group', value: 'Chloronitrile (FRAC M5)' },
      { label: 'Action type', value: 'Multi-site contact, preventive disease control' },
      { label: 'Diseases controlled', value: 'Early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, alternaria' },
      { label: 'Target crops', value: 'Potato, tomato, chilli, onion, grapes, groundnut, cucumber, cabbage' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 250 gm, 500 gm, 1 kg' },
      { label: 'Recommended dose', value: '30 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Preventive, before disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Hatayu' },
    { label: 'Brand / Trade Name', value: 'Hatayu' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Chlorothalonil 75%' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Chloronitrile (Multi-site contact)' },
    { label: 'Action Type', value: 'Preventive broad-spectrum contact fungicide' },
    { label: 'Diseases Controlled', value: 'Early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, alternaria' },
    { label: 'Target Crops', value: 'Potato, tomato, chilli, onion, grapes, groundnut, cucumber, cabbage' },
    { label: 'Recommended Dose', value: '30 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Preventive, before disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (250 gm, 500 gm, 1 kg)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Hatayu Fungicide.'
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
      text: 'Measure exactly 30 gm per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'King (Azoxystrobin 4.8% + Chlorothalonil 40.0% SC)',
      description: 'Systemic plus contact fungicide for early blight, late blight, leaf spot, rust, and downy mildew.',
      route: '/products/azoxystrobin-4-8-chlorothalonil-40-sc-king',
      image: 'assets/products/azoxystrobin-4-8-w-w-chlorothalonil-40-0-w-w-sc.png',
      imageAlt: 'King Azoxystrobin Chlorothalonil fungicide by Harishree Crop Science'
    },
    {
      name: 'Hari 45 (Mancozeb 75% WP)',
      description: 'Multi-site contact fungicide for early and late blights, leaf spots, and rusts across many crops.',
      route: '/products/mancozeb-75-wp-hari-45',
      image: 'assets/products/fungicide/mancozeb-75-wp.jpg',
      imageAlt: 'Hari 45 Mancozeb 75% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'Milet Gold (Metalaxyl 8% + Mancozeb 64% WP)',
      description: 'Dual-action fungicide for late blight, downy mildew, and seedling diseases in potato, grapes, and vegetables.',
      route: '/products/metalaxyl-8-mancozeb-64-wp-milet-gold',
      image: 'assets/products/fungicide/metalaxyl-8-mancozeb-64-wp.jpg',
      imageAlt: 'Milet Gold Metalaxyl Mancozeb fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Hatayu Fungicide used for?',
      answer:
        '<strong>Hatayu Fungicide</strong> (<strong>Chlorothalonil 75% WP</strong>) is used for <strong>broad-spectrum preventive fungal disease control</strong> including early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, and alternaria in potato, tomato, chilli, onion, grapes, groundnut, cucumber, and cabbage. It is a multi-site contact fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Hatayu Fungicide (Chlorothalonil 75% WP) is used for broad-spectrum preventive fungal disease control including early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, and alternaria in potato, tomato, chilli, onion, grapes, groundnut, cucumber, and cabbage. It is a multi-site contact fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Chlorothalonil 75% WP control?',
      answer:
        '<strong>Chlorothalonil 75% WP</strong> controls <strong>early blight</strong>, <strong>late blight</strong>, <strong>leaf spot</strong>, <strong>rust</strong>, <strong>anthracnose</strong>, <strong>downy mildew</strong>, <strong>black rot</strong>, and <strong>alternaria</strong>. Hatayu delivers strong preventive protection against these fungal pathogens when applied before disease appearance with uniform canopy coverage.',
      answerPlain:
        'Chlorothalonil 75% WP controls early blight, late blight, leaf spot, rust, anthracnose, downy mildew, black rot, and alternaria. Hatayu delivers strong preventive protection against these fungal pathogens when applied before disease appearance with uniform canopy coverage.'
    },
    {
      question: 'Which crops can be treated with Hatayu?',
      answer:
        '<strong>Hatayu Fungicide</strong> can be used on <strong>potato</strong>, <strong>tomato</strong>, <strong>chilli</strong>, <strong>onion</strong>, <strong>grapes</strong>, <strong>groundnut</strong>, <strong>cucumber</strong>, and <strong>cabbage</strong>. It is a versatile crop protection fungicide for vegetable and field programs facing fungal disease pressure during the growing season.',
      answerPlain:
        'Hatayu Fungicide can be used on potato, tomato, chilli, onion, grapes, groundnut, cucumber, and cabbage. It is a versatile crop protection fungicide for vegetable and field programs facing fungal disease pressure during the growing season.'
    },
    {
      question: 'What is the recommended dosage of Hatayu Fungicide?',
      answer:
        'The standard recommended dose of <strong>Hatayu Fungicide</strong> is <strong>30 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of Hatayu Fungicide is 30 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'Is Hatayu a contact or systemic fungicide?',
      answer:
        '<strong>Hatayu</strong> is a <strong>contact (non-systemic) fungicide</strong> with a multi-site mode of action. It forms a protective barrier on the plant surface that stops spore germination, making it a strong preventive and resistance-management tool when applied before disease appears.',
      answerPlain:
        'Hatayu is a contact (non-systemic) fungicide with a multi-site mode of action. It forms a protective barrier on the plant surface that stops spore germination, making it a strong preventive and resistance-management tool when applied before disease appears.'
    },
    {
      question: 'Is Hatayu good for early blight and late blight in potato?',
      answer:
        'Yes. <strong>Hatayu</strong> is highly effective for <strong>early blight</strong> and <strong>late blight</strong> in potato and tomato. Its durable contact barrier stops blight spores germinating when sprayed preventively, especially during cool, humid weather that favours late blight.',
      answerPlain:
        'Yes. Hatayu is highly effective for early blight and late blight in potato and tomato. Its durable contact barrier stops blight spores germinating when sprayed preventively, especially during cool, humid weather that favours late blight.'
    },
    {
      question: 'When should Hatayu be sprayed?',
      answer:
        'Spray <strong>Hatayu</strong> <strong>preventively, before disease appears</strong>, or at the first risk of infection. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.',
      answerPlain:
        'Spray Hatayu preventively, before disease appears, or at the first risk of infection. Apply in calm morning or evening hours with uniform canopy coverage on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.'
    },
    {
      question: 'Why choose Hatayu over ordinary fungicides?',
      answer:
        '<strong>Hatayu</strong> offers <strong>multi-site contact protection</strong> with low resistance risk, <strong>broad-spectrum disease control</strong> across multiple crops, <strong>durable protective cover</strong>, and <strong>better return on investment</strong> at ₹366 for the best-selling 500 gm pack — making it an ideal preventive and rotation partner.',
      answerPlain:
        'Hatayu offers multi-site contact protection with low resistance risk, broad-spectrum disease control across multiple crops, durable protective cover, and better return on investment at ₹366 for the best-selling 500 gm pack — making it an ideal preventive and rotation partner.'
    }
  ];

  testimonials = [
    {
      name: 'Dinesh',
      location: 'Uttar Pradesh',
      text:
        'I started Hatayu sprays on my potato before late blight appeared, as the weather turned cool and humid. The field stayed clean while nearby plots were badly hit. The protective cover lasted well between sprays and tuber quality at harvest was clearly better this season.',
      rating: 5
    },
    {
      name: 'Vijay',
      location: 'Maharashtra',
      text:
        'Hatayu controlled early blight and leaf spot in my tomato during the humid season. The leaves stayed healthier for longer and fruit quality improved noticeably. The 30 gm per pump dose is easy to mix and the powder disperses well in the tank.',
      rating: 5
    },
    {
      name: 'Sanjay',
      location: 'Karnataka',
      text:
        'Downy mildew pressure was high in my grapes when I switched to Hatayu in my spray rotation. It gave dependable protection and the bunches stayed clean. I like that it is a contact fungicide that fits well with my systemic products for resistance management.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.7',
    reviewCount: '58',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Hatayu.' },
    { name: 'Measure Hatayu', text: 'Accurately measure 30 gm of Chlorothalonil 75% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until it forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, stems, and fruits, including leaf undersides where blight develops.' },
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
        'Chlorothalonil 75% WP Hatayu Fungicide for Broad Spectrum Preventive Disease Control',
      productImageCaption:
        'Multi-site Contact Fungicide for Early Blight, Late Blight, Leaf Spot, Downy Mildew and Anthracnose Control',
      description:
        'Hatayu (Chlorothalonil 75% WP) by Harishree Crop Science is a multi-site contact fungicide for early blight, late blight, leaf spot, rust, anthracnose, downy mildew, and black rot. Dose: 30 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Fungicide',
      sku: 'HATAYU-CHLOROTHALONIL-75-WP',
      mpn: 'HATAYU-CHLOROTHALONIL-75-WP',
      dose: '30 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Hatayu (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Hatayu (Chlorothalonil 75% WP) for preventive foliar application at 30 gm/pump.',
      alternateNames: ['Hatayu', this.productTitle],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Hatayu (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Hatayu Chlorothalonil 75% WP delivers broad-spectrum preventive control of early blight, late blight, leaf spot & downy mildew for potato, tomato & grapes. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Chlorothalonil 75% WP | Hatayu',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Chlorothalonil 75% WP (Hatayu) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Hatayu | Chlorothalonil 75% WP Fungicide',
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
