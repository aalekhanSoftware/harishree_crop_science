import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'HARI45_MANCOZEB_75_WP';
const INDICATIVE_LIST_PRICE_INR = 177;

@Component({
  selector: 'app-mancozeb-75-wp-hari-45',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mancozeb-75-wp-hari-45.component.html',
  styleUrl: './mancozeb-75-wp-hari-45.component.scss'
})
export class Mancozeb75WpHari45Component implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/mancozeb-75-wp-hari-45';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/mancozeb-75-wp.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Mancozeb 75% WP';
  brandName = 'Hari 45';

  featuredSnippetAnswer =
    'Hari 45 (Mancozeb 75% WP) is a broad-spectrum contact fungicide by Harishree Crop Science for preventive control of early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, and fruit rot across potato, tomato, chilli, onion, grapes, groundnut, cucumber, and watermelon. Recommended dose: 30 gm per pump.';

  packSizes = [
    { volume: '250 gm', price: 94, featured: false, sku: 'HARI45-250GM' },
    { volume: '500 gm', price: 177, featured: true, sku: 'HARI45-500GM' },
    { volume: '1 Kg', price: 330, featured: false, sku: 'HARI45-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Broad-spectrum protection',
      description:
        'One Hari 45 spray of Mancozeb 75% WP guards against early blight, late blight, leaf spot, downy mildew, rust, and fruit rot — reducing the need for multiple single-disease products in high-pressure seasons.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Multi-site contact action',
      description:
        'Mancozeb works at several points in the fungal cell at once, forming a protective shield on leaf and fruit surfaces that stops spores before they germinate and establish infection.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Low resistance risk',
      description:
        'Because Hari 45 acts on multiple sites, fungi find it very hard to develop resistance — making Mancozeb 75% WP a dependable rotation partner in any disease-management program.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Preventive crop cover',
      description:
        'Applied before disease appears, Hari 45 builds a protective barrier on treated foliage — ideal for scheduled preventive sprays when humid weather favours rapid pathogen spread.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Easy mixing WP',
      description:
        'The premium wettable powder disperses quickly in water and forms a uniform spray suspension that spreads and sticks evenly across the crop canopy for consistent coverage.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Good rainfastness',
      description:
        'Once the spray deposit dries on foliage, Hari 45 adheres well and maintains protective activity even after light rainfall during the monsoon spray window.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier disease-free leaf area supports stronger photosynthesis, better tuber and fruit development, and more uniform crop growth through the season.',
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
        'Timely fungal disease control preserves leaf area, flowers, and fruits — supporting higher yield potential and better harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Trusted multi-site chemistry',
      description:
        'Mancozeb 75% WP is one of the most trusted contact fungicides worldwide, controlling a wide disease spectrum through multi-site activity that single-site fungicides cannot match for resistance management.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'Hari 45 manages blights, leaf spot, downy mildew, rust, anthracnose, and fruit rot across many crops instead of relying on separate products for each disease complex in the field.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Dependable preventive cover',
      description:
        'A protective barrier on treated foliage stops spore germination before infection sets in — keeping crops cleaner through the most disease-prone weather windows of the season.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Farmer-friendly pricing with the popular 500 gm pack at the recommended 30 gm per pump dose delivers dependable disease protection and strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Hari 45 controls early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, and fruit rot — the most common fungal threats across Indian field and horticultural crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive protection',
      description:
        'Mancozeb 75% builds a protective film on treated foliage before pathogens establish — ideal for scheduled preventive sprays when forecasts favour disease development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Multi-site activity',
      description:
        'By attacking several fungal cell processes at once, Hari 45 delivers dependable control and strong resistance management compared with single-site fungicides.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Excellent coverage',
      description:
        'The fine wettable powder spreads uniformly and adheres well to leaves and fruits, ensuring consistent protective deposits across the whole canopy.',
      icon: 'fas fa-fill-drip'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage supports stronger photosynthesis and more uniform crop development through the season when fungal pathogens threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Resistance management',
      description:
        'Multi-site Mancozeb chemistry is an ideal rotation and tank partner to protect newer single-site fungicides and keep disease programs effective season after season.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Good rainfastness',
      description:
        'Once dry, the spray deposit resists wash-off from light rain, maintaining protective cover during humid, infection-favourable weather across kharif and rabi seasons.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling blights, leaf spot, rust, and fruit rot that scar produce, Hari 45 helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaf area, flowers, and fruits during critical stages helps preserve yield when blight, downy mildew, or rust pressure is high in dense crop canopies.',
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
        'Timely Hari 45 application limits defoliation, fruit drop, and rot — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
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
    'Hari 45 Fungicide is a trusted broad-spectrum contact fungicide from HARISHREE CROP SCIENCE, formulated as Mancozeb 75% WP. Indian growers face constant pressure from early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, and fruit rot — diseases that strip leaf area, scar produce, and cut yields when left unchecked. Multi-site contact fungicides like Hari 45 are trusted because they protect a wide spectrum of crops while posing a very low risk of resistance, making them a dependable foundation for any preventive disease program.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and fruiting parts. Hari 45 is engineered for crop safety when used at the recommended 30 gm per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across potato, tomato, chilli, onion, grapes, groundnut, cucumber, and watermelon. For agronomists and dealers, Hari 45 represents a dependable contact crop protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutMancozeb =
    'Mancozeb 75% is a dithiocarbamate fungicide (FRAC Group M03) that works through multi-site contact and protective action. Rather than attacking a single target inside the fungus, it disrupts several enzyme processes and cell functions at once — inhibiting spore germination and preventing the pathogen from establishing on the plant surface. Because the active sits as a protective layer on treated foliage, Hari 45 is most effective when applied preventively, before disease appears or at the very first signs of infection, with thorough coverage of leaves and fruits.';

  aboutCombined =
    'This multi-site mode of action is exactly why Mancozeb remains a cornerstone of disease management even as newer chemistries arrive. The very low risk of resistance means Hari 45 can be used season after season and as a reliable rotation or tank-mix partner that protects single-site fungicides. Farmers spraying Hari 45 at early appearance gain dependable, broad-spectrum preventive protection across potato, tomato, chilli, onion, grapes, groundnut, cucumber, and watermelon — keeping canopies green and produce clean through the critical disease-prone weeks of the crop.';

  targetCropsTable = [
    { crop: 'Potato', diseases: 'Early Blight, Late Blight' },
    { crop: 'Tomato', diseases: 'Early Blight, Leaf Spot' },
    { crop: 'Chilli', diseases: 'Fruit Rot, Anthracnose' },
    { crop: 'Onion', diseases: 'Purple Blotch, Downy Mildew' },
    { crop: 'Grapes', diseases: 'Downy Mildew, Anthracnose' },
    { crop: 'Groundnut', diseases: 'Leaf Spot, Rust' },
    { crop: 'Cucumber', diseases: 'Downy Mildew, Leaf Spot' },
    { crop: 'Watermelon', diseases: 'Alternaria, Anthracnose' }
  ];

  diseaseDetails = [
    {
      name: 'Early Blight',
      symptoms:
        'Dark brown concentric ring spots (target-like lesions) on older leaves, spreading upward. Heavily infected leaves yellow and drop, exposing tubers and fruits in potato and tomato.',
      impact:
        'Early blight reduces photosynthetic leaf area and weakens plants, cutting tuber size and fruit yield when infection runs through the canopy during warm, humid weather.',
      controlBenefits:
        'Hari 45 forms a protective Mancozeb barrier that stops spore germination on treated foliage. Spray preventively or at first lesions with full canopy coverage for best disease control.'
    },
    {
      name: 'Late Blight',
      symptoms:
        'Water-soaked dark patches on leaves and stems with white fungal growth on undersides in humid weather. Lesions expand rapidly and can destroy whole fields of potato and tomato.',
      impact:
        'Late blight is among the most destructive crop diseases — it can wipe out foliage and rot tubers and fruits within days under cool, wet conditions if left uncontrolled.',
      controlBenefits:
        'Preventive Hari 45 sprays build a protective shield before infection sets in. Apply on a tight schedule during blight-favourable weather and cover leaf undersides thoroughly.'
    },
    {
      name: 'Downy Mildew',
      symptoms:
        'Yellow angular patches on the upper leaf surface with greyish-purple fungal growth underneath. Common on grapes, onion, and cucurbits during cool, moist, humid conditions.',
      impact:
        'Downy mildew destroys leaf tissue, weakens plants, and reduces both yield and produce quality when it spreads through dense, humid canopies during the growing season.',
      controlBenefits:
        'Hari 45 multi-site contact action protects healthy tissue from new infections. Spray preventively before humid spells and repeat as per disease pressure and label guidance.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation across many crops.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during wet periods.',
      controlBenefits:
        'Hari 45 protects uninfected leaf tissue and limits new lesion formation. Early preventive sprays with uniform coverage keep the canopy green and productive through the season.'
    },
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist growing conditions.',
      impact:
        'Rust destroys leaf area essential for pod and grain filling in groundnut and other crops. Severe infections can reduce yield significantly if not controlled early.',
      controlBenefits:
        'Hari 45 protective Mancozeb cover limits rust spread to healthy foliage. Apply when first pustules appear and maintain coverage on new growth between scheduled sprays.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions, turning chilli fruits and other produce unmarketable as lesions expand.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'Hari 45 preventive cover protects fruits and foliage from new anthracnose infections. Time sprays before flowering and at early fruit-set for maximum crop protection.'
    }
  ];

  targetPests = [
    {
      name: 'Early Blight',
      description:
        'Concentric ring lesions on potato and tomato foliage. Hari 45 multi-site contact action stops spore germination and protects healthy leaf tissue when applied preventively.'
    },
    {
      name: 'Late Blight',
      description:
        'Fast-spreading water-soaked lesions in cool, wet weather. Preventive Hari 45 cover shields potato and tomato crops before this destructive disease establishes.'
    },
    {
      name: 'Downy Mildew',
      description:
        'Yellow patches with greyish growth on leaf undersides. Hari 45 protects grapes, onion, and cucurbits from new downy mildew infections during humid spells.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. Hari 45 limits new lesions and preserves photosynthetic leaf area across many crops.'
    },
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. Protective Hari 45 cover limits rust spread on groundnut and field crops when applied at early appearance.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. Hari 45 preventive activity protects chilli, grape, and watermelon produce during humid fruit-set windows.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Preventive or early disease appearance' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Frequency', recommendation: 'As per disease pressure' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Hari 45' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Mancozeb 75% WP' },
      { label: 'Chemical group', value: 'Dithiocarbamate (FRAC M03)' },
      { label: 'Action type', value: 'Contact, preventive, multi-site disease control' },
      { label: 'Diseases controlled', value: 'Early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, fruit rot' },
      { label: 'Target crops', value: 'Potato, tomato, chilli, onion, grapes, groundnut, cucumber, watermelon' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 250 gm, 500 gm, 1 Kg' },
      { label: 'Recommended dose', value: '30 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Preventive or early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Hari 45' },
    { label: 'Brand / Trade Name', value: 'Hari 45' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Mancozeb 75%' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Dithiocarbamate (Multi-site)' },
    { label: 'Action Type', value: 'Contact, preventive broad-spectrum fungicide' },
    { label: 'Diseases Controlled', value: 'Early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, fruit rot' },
    { label: 'Target Crops', value: 'Potato, tomato, chilli, onion, grapes, groundnut, cucumber, watermelon' },
    { label: 'Recommended Dose', value: '30 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Preventive or early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (250 gm, 500 gm, 1 Kg)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Hari 45 Fungicide.'
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
      name: 'HTM (Thiophanate Methyl 70% WP)',
      description: 'Systemic benzimidazole fungicide for anthracnose, powdery mildew, leaf spot, and fruit rot control across fruits and vegetables.',
      route: '/products/thiophanate-methyl-70-wp-htm',
      image: 'assets/products/thiophanate-methyl-70-wp.png',
      imageAlt: 'HTM Thiophanate Methyl 70% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'Saf 63 (Carbendazim 12% + Mancozeb 63% WP)',
      description: 'Dual-action systemic plus contact fungicide for leaf spot, blast, rust, and fruit rot across field and horticultural crops.',
      route: '/products/carbendazim-12-mancozeb-63-wp-saf-63',
      image: 'assets/products/carbendazim-12-mancozeb-63-wp.png',
      imageAlt: 'Saf 63 Carbendazim Mancozeb fungicide by Harishree Crop Science'
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
      question: 'What is Hari 45 Fungicide used for?',
      answer:
        '<strong>Hari 45 Fungicide</strong> (<strong>Mancozeb 75% WP</strong>) is used for <strong>broad-spectrum preventive disease control</strong> including early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, and fruit rot in potato, tomato, chilli, onion, grapes, groundnut, cucumber, and watermelon. It is a multi-site contact fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Hari 45 Fungicide (Mancozeb 75% WP) is used for broad-spectrum preventive disease control including early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, and fruit rot in potato, tomato, chilli, onion, grapes, groundnut, cucumber, and watermelon. It is a multi-site contact fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Mancozeb 75% WP control?',
      answer:
        '<strong>Mancozeb 75% WP</strong> controls <strong>early blight</strong>, <strong>late blight</strong>, <strong>leaf spot</strong>, <strong>downy mildew</strong>, <strong>rust</strong>, <strong>anthracnose</strong>, <strong>alternaria</strong>, and <strong>fruit rot</strong>. Hari 45 delivers dependable preventive protection against these fungal pathogens when applied before disease appears with uniform canopy coverage.',
      answerPlain:
        'Mancozeb 75% WP controls early blight, late blight, leaf spot, downy mildew, rust, anthracnose, alternaria, and fruit rot. Hari 45 delivers dependable preventive protection against these fungal pathogens when applied before disease appears with uniform canopy coverage.'
    },
    {
      question: 'What is the recommended dose of Hari 45 (Mancozeb 75% WP)?',
      answer:
        'The standard recommended dose of <strong>Hari 45</strong> is <strong>30 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of Hari 45 is 30 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'Is Mancozeb 75% WP a contact or systemic fungicide?',
      answer:
        '<strong>Mancozeb 75% WP</strong> is a <strong>contact fungicide</strong> with <strong>multi-site protective action</strong>. It forms a protective film on the plant surface that stops spore germination, so Hari 45 works best when applied preventively or at the very first signs of disease.',
      answerPlain:
        'Mancozeb 75% WP is a contact fungicide with multi-site protective action. It forms a protective film on the plant surface that stops spore germination, so Hari 45 works best when applied preventively or at the very first signs of disease.'
    },
    {
      question: 'Which crops can be treated with Hari 45?',
      answer:
        '<strong>Hari 45 Fungicide</strong> can be used on <strong>potato</strong>, <strong>tomato</strong>, <strong>chilli</strong>, <strong>onion</strong>, <strong>grapes</strong>, <strong>groundnut</strong>, <strong>cucumber</strong>, and <strong>watermelon</strong>. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.',
      answerPlain:
        'Hari 45 Fungicide can be used on potato, tomato, chilli, onion, grapes, groundnut, cucumber, and watermelon. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.'
    },
    {
      question: 'Is Hari 45 good for blight disease?',
      answer:
        'Yes. <strong>Hari 45 (Mancozeb 75% WP)</strong> is one of the most trusted fungicides for <strong>early blight and late blight</strong> in potato and tomato. Applied preventively or at first symptoms with thorough coverage, it forms a protective barrier that limits blight spread across the canopy.',
      answerPlain:
        'Yes. Hari 45 (Mancozeb 75% WP) is one of the most trusted fungicides for early blight and late blight in potato and tomato. Applied preventively or at first symptoms with thorough coverage, it forms a protective barrier that limits blight spread across the canopy.'
    },
    {
      question: 'How does Hari 45 help with resistance management?',
      answer:
        'Because <strong>Mancozeb</strong> acts on <strong>multiple sites</strong> within the fungus, the risk of resistance developing is very low. This makes <strong>Hari 45</strong> an ideal rotation and tank-mix partner that protects newer single-site fungicides and keeps disease programs effective season after season.',
      answerPlain:
        'Because Mancozeb acts on multiple sites within the fungus, the risk of resistance developing is very low. This makes Hari 45 an ideal rotation and tank-mix partner that protects newer single-site fungicides and keeps disease programs effective season after season.'
    },
    {
      question: 'When should Hari 45 be sprayed?',
      answer:
        'Spray <strong>Hari 45</strong> <strong>preventively</strong> before disease appears or at <strong>early disease appearance</strong>. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.',
      answerPlain:
        'Spray Hari 45 preventively before disease appears or at early disease appearance. Apply in calm morning or evening hours with uniform canopy coverage on leaves and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh',
      location: 'Uttar Pradesh',
      text:
        'I sprayed Hari 45 on my potato crop when early blight started showing on the lower leaves. The spots stopped spreading and the canopy stayed green much longer than last season. Tuber size and quality were clearly better at harvest, and the 30 gm per pump dose is simple to follow in the field.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Maharashtra',
      text:
        'Downy mildew is a big problem in my onion and grape plots during humid weather. Regular preventive sprays of Hari 45 kept the leaves healthy and the produce clean. The wettable powder mixes easily and gives even coverage, and I got better rates for cleaner produce at the market.',
      rating: 5
    },
    {
      name: 'Lakshman',
      location: 'Karnataka',
      text:
        'I use Hari 45 as a dependable preventive spray in my tomato and chilli fields. It controls leaf spot and fruit rot well and works as a good rotation partner with my other fungicides. Disease pressure was lower this year and the profitability at harvest was noticeably better.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '86',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Hari 45.' },
    { name: 'Measure Hari 45', text: 'Accurately measure 30 gm of Mancozeb 75% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until the WP forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, stems, and fruits where blight, mildew, and leaf spot develop.' },
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
        'Mancozeb 75% WP Hari 45 Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Multi-Site Contact Fungicide for Early Blight, Late Blight, Downy Mildew, Leaf Spot and Fruit Rot Control',
      description:
        'Hari 45 (Mancozeb 75% WP) by Harishree Crop Science is a broad-spectrum contact fungicide for early blight, late blight, leaf spot, downy mildew, rust, anthracnose, and fruit rot. Dose: 30 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'Hari 45 Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'HARI45-MANCOZEB-75-WP',
      mpn: 'HARI45-MANCOZEB-75-WP',
      dose: '30 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Hari 45 (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Hari 45 (Mancozeb 75% WP) for foliar application at 30 gm/pump.',
      alternateNames: [
        'Hari 45',
        'Hari 45 Fungicide',
        'Mancozeb Fungicide',
        'Contact Fungicide',
        'Broad Spectrum Fungicide',
        'Fungicide for Leaf Spot',
        'Fungicide for Early Blight',
        'Fungicide for Late Blight',
        'Fungicide for Downy Mildew',
        'Potato Fungicide',
        'Tomato Fungicide',
        'Chilli Fungicide',
        'Onion Fungicide',
        'Agricultural Fungicide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Hari 45 (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Hari 45 (Mancozeb 75% WP) contact fungicide delivers broad-spectrum control of early blight, late blight, downy mildew & leaf spot. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Mancozeb 75% WP | Hari 45 Fungicide',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Mancozeb 75% WP (Hari 45) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Hari 45 | Mancozeb 75% WP Fungicide',
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
