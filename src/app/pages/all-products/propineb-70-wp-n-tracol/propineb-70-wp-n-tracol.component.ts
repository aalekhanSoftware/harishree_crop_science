import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'N_TRACOL_PROPINEB_WP';
const INDICATIVE_LIST_PRICE_INR = 342;

@Component({
  selector: 'app-propineb-70-wp-n-tracol',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './propineb-70-wp-n-tracol.component.html',
  styleUrl: './propineb-70-wp-n-tracol.component.scss'
})
export class Propineb70WpNTracolComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/propineb-70-wp-n-tracol';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/propineb-70-wp.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Propineb 70% WP';
  brandName = 'N Tracol';

  featuredSnippetAnswer =
    'N Tracol (Propineb 70% WP) is a broad-spectrum contact fungicide by Harishree Crop Science for preventive control of early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria across potato, tomato, chilli, grapes, apple, onion, cucumber, and cabbage. Recommended dose: 25 gm per pump.';

  packSizes = [
    { volume: '500 gm', price: 342, featured: true, sku: 'NTRACOL-500GM' },
    { volume: '1 kg', price: 661, featured: false, sku: 'NTRACOL-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Multi-site contact fungicide',
      description:
        'N Tracol acts on multiple sites in the pathogen, building a protective barrier on foliage that stops fungal spore germination and inhibits mycelial growth.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One N Tracol spray manages early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria across vegetable and fruit crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Protective disease barrier',
      description:
        'The wettable powder forms a uniform protective film over leaves and stems, preventing pathogen entry before infection establishes.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive crop protection',
      description:
        'Applied ahead of infection, N Tracol shields new and existing foliage — ideal for scheduled preventive sprays during humid, disease-favourable weather.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Resistance management benefits',
      description:
        'Multi-site contact action makes resistance development highly unlikely, so N Tracol stays effective and protects single-site systemic fungicides in rotation.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Strong rainfastness',
      description:
        'Once the spray deposit dries, the formulation adheres well to plant surfaces, maintaining protective cover through dew and light rainfall.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Includes zinc nutrition',
      description:
        'Propineb contains zinc as part of its molecule, supporting healthier foliage and crop vigor alongside dependable disease protection.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner foliage and fruits with reduced disease scarring improve marketability in tomato, grapes, apple, and vegetable programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely disease control preserves leaf area and produce — supporting higher yield potential and improved harvest quality per acre.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Trusted contact chemistry',
      description:
        'Propineb is a widely trusted protectant fungicide, backed by Harishree quality control and batch-to-batch consistency.',
      icon: 'fas fa-hourglass-half'
    }
  ];

  whyChoose = [
    {
      title: 'Multi-site contact fungicide',
      description:
        'N Tracol acts on many sites in the pathogen at once, delivering broad protective control while keeping resistance risk extremely low across the season.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'Propineb 70% WP manages early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria instead of relying on separate products for each disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Dependable preventive barrier',
      description:
        'A uniform protective film on foliage stops disease before it establishes, making N Tracol ideal for scheduled sprays ahead of humid, infection-favourable weather.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at Rupees 342 for the 500 gm pack, crop-safe application at 25 gm per pump, and broad coverage deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'N Tracol controls early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria — the most common threats across Indian vegetable and fruit crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive protection',
      description:
        'Propineb 70% builds a protective barrier on treated foliage before pathogens establish — ideal for scheduled preventive sprays when weather favours disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Multi-site protection',
      description:
        'Acting on multiple cellular targets, N Tracol stops fungal spore germination and mycelial growth while making resistance development highly unlikely.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Excellent resistance management',
      description:
        'Multi-site contact chemistry is a valuable rotation partner that helps preserve the effectiveness of single-site systemic fungicides in disease programs.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage and the zinc content of propineb support stronger photosynthesis, better plant growth, and more uniform crop development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Strong rainfastness',
      description:
        'The wettable powder adheres well to plant surfaces once dry, maintaining protective cover through dew and light rainfall during the monsoon spray window.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Reliable downy mildew control',
      description:
        'N Tracol is especially trusted for downy mildew protection in grapes and vegetables, building dependable cover during high-humidity periods.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling blight, mildew, leaf spot, and scab that scar produce, N Tracol helps growers deliver cleaner, more uniform harvests suited to premium markets.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaf area through critical stages helps preserve yield when blight, mildew, or rust pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on tomato, grape, apple, and vegetable produce improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely N Tracol application limits defoliation and produce damage — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable broad-spectrum protection at a farmer-friendly dose of 25 gm per pump helps growers protect yield and quality, translating disease control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'N Tracol Fungicide is a premium broad-spectrum contact fungicide from HARISHREE CROP SCIENCE, formulated as Propineb 70% WP. Indian growers face increasing pressure from early and late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria — diseases that strip leaf area, scar fruits, and cut yields when left unchecked. Contact fungicides like N Tracol are trusted because they deliver dependable preventive protection through a multi-site mode of action that also supports resistance management.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves and stems. N Tracol is engineered for crop safety when used at the recommended 25 gm per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across potato, tomato, chilli, grapes, apple, onion, cucumber, and cabbage. For agronomists and dealers, N Tracol represents a dependable protectant solution and an excellent resistance-management partner, backed by Harishree quality control and batch-to-batch consistency.';

  aboutActive =
    'Propineb 70% is a dithiocarbamate contact fungicide (FRAC Group M03) that works through a multi-site mode of action. On contact with moisture on the plant surface it inhibits several enzyme systems in fungal cells at once, preventing spore germination and stopping mycelial growth before infection can establish. Because it acts on many sites simultaneously, resistance development is highly unlikely. Propineb also contains zinc, which contributes to healthier foliage and crop vigor alongside its protective disease control.';

  targetCropsTable = [
    { crop: 'Potato', diseases: 'Early Blight, Late Blight' },
    { crop: 'Tomato', diseases: 'Early Blight, Leaf Spot, Alternaria' },
    { crop: 'Chilli', diseases: 'Leaf Spot, Anthracnose' },
    { crop: 'Grapes', diseases: 'Downy Mildew, Anthracnose' },
    { crop: 'Apple', diseases: 'Apple Scab' },
    { crop: 'Onion', diseases: 'Downy Mildew, Leaf Spot' },
    { crop: 'Cucumber', diseases: 'Downy Mildew' },
    { crop: 'Cabbage', diseases: 'Leaf Spot, Downy Mildew' }
  ];

  diseaseDetails = [
    {
      name: 'Early Blight',
      symptoms:
        'Dark concentric-ring lesions on older leaves of potato and tomato, with yellowing around the spots. Lesions enlarge and merge, leading to defoliation under warm, humid conditions.',
      impact:
        'Early blight reduces tuber and fruit size by destroying foliage during bulking. Severe infections shorten the productive canopy period and cut marketable yield.',
      controlBenefits:
        'N Tracol forms a protective barrier that prevents spore germination on healthy tissue. Begin preventive sprays before disease onset with uniform canopy coverage for best results.'
    },
    {
      name: 'Late Blight',
      symptoms:
        'Water-soaked grey-green patches that rapidly turn brown-black, with white fungal growth on leaf undersides in humid weather. Spreads explosively in cool, wet conditions.',
      impact:
        'Late blight can destroy potato and tomato crops within days, causing foliage collapse and tuber or fruit rot — one of the most damaging diseases in cool, moist seasons.',
      controlBenefits:
        'N Tracol builds a protective cover ahead of infection. Begin preventive sprays before blight-favourable weather and maintain coverage on new growth for dependable protection.'
    },
    {
      name: 'Downy Mildew',
      symptoms:
        'Pale yellow angular patches on the upper leaf surface with greyish-white downy growth underneath, common on grapes, cucumber, onion, and cabbage in humid weather.',
      impact:
        'Downy mildew destroys leaf area and can blight shoots and bunches, sharply reducing yield and quality when humidity and leaf wetness persist.',
      controlBenefits:
        'N Tracol is especially trusted for downy mildew, building a protective barrier on foliage. Apply preventively at the first risk period with thorough leaf-underside coverage.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge into large necrotic patches and cause premature defoliation.',
      impact:
        'Leaf spot reduces photosynthetic area and weakens plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during wet periods.',
      controlBenefits:
        'N Tracol limits spore germination on healthy tissue and protects uninfected leaf area. Begin preventive sprays at first spotting with uniform coverage across the canopy.'
    },
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist conditions.',
      impact:
        'Rust destroys leaf area essential for produce filling. Severe infections can reduce yield significantly if not controlled at early pustule stage.',
      controlBenefits:
        'N Tracol protective cover limits new rust infections on healthy foliage. Apply when first pustules appear and maintain coverage during favourable weather.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves, sometimes with pinkish spore masses in humid conditions. Infected chilli and grape produce becomes unmarketable.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'N Tracol preventive sprays before flowering and at early fruit-set build protective cover that interrupts the anthracnose cycle and preserves marketable produce.'
    },
    {
      name: 'Apple Scab',
      symptoms:
        'Olive-green to brown velvety lesions on apple leaves and fruit that later become dark and corky. Severe scab causes leaf drop and blemished, cracked fruit.',
      impact:
        'Apple scab directly scars fruit, lowering market grade and value, and weakens trees through early defoliation when infection pressure is high in spring.',
      controlBenefits:
        'N Tracol protective sprays during the primary infection period limit scab establishment on leaves and fruit, protecting fruit finish and tree vigor.'
    },
    {
      name: 'Alternaria',
      symptoms:
        'Dark brown to black spots with concentric rings on leaves, stems, and fruits of tomato and cole crops, often enlarging and merging under warm, humid conditions.',
      impact:
        'Alternaria reduces leaf area, blemishes produce, and causes premature defoliation, lowering both yield and quality during the productive canopy stage.',
      controlBenefits:
        'N Tracol builds a multi-site protective barrier that limits Alternaria spore germination. Begin preventive sprays early and maintain uniform coverage in humid weather.'
    }
  ];

  targetPests = [
    {
      name: 'Early Blight',
      description:
        'Concentric-ring lesions on potato and tomato foliage. N Tracol protective barrier limits lesion spread when applied preventively at first signs.'
    },
    {
      name: 'Late Blight',
      description:
        'Rapidly spreading grey-green patches in cool, wet weather. N Tracol protective cover ahead of infection guards potato and tomato canopies.'
    },
    {
      name: 'Downy Mildew',
      description:
        'Greyish-white downy growth on leaf undersides. N Tracol is especially trusted for downy mildew control in grapes, cucumber, onion, and cabbage.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown lesions that merge and cause defoliation. N Tracol multi-site action prevents spore germination and protects leaf area.'
    },
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. N Tracol protective cover limits new rust infections when applied at early pustule appearance.'
    },
    {
      name: 'Apple Scab',
      description:
        'Velvety lesions on apple leaves and fruit. N Tracol protective sprays during primary infection protect fruit finish and tree vigor.'
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
      { label: 'Product name', value: 'N Tracol' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredient', value: 'Propineb 70% WP' },
      { label: 'Chemical group', value: 'Dithiocarbamate (FRAC M03)' },
      { label: 'Action type', value: 'Multi-site contact preventive disease control' },
      { label: 'Diseases controlled', value: 'Early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, alternaria' },
      { label: 'Target crops', value: 'Potato, tomato, chilli, grapes, apple, onion, cucumber, cabbage' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 500 gm, 1 kg' },
      { label: 'Recommended dose', value: '25 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Preventive or early disease appearance per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves and stems' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'N Tracol' },
    { label: 'Brand / Trade Name', value: 'N Tracol' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Propineb 70% WP' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Dithiocarbamate contact fungicide' },
    { label: 'Action Type', value: 'Multi-site contact preventive fungicide' },
    { label: 'Diseases Controlled', value: 'Early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, alternaria' },
    { label: 'Target Crops', value: 'Potato, tomato, chilli, grapes, apple, onion, cucumber, cabbage' },
    { label: 'Recommended Dose', value: '25 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Preventive or early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Powder' },
    { label: 'Packaging Type', value: 'Pack (500 gm, 1 kg)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying N Tracol Fungicide.'
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
      text: 'Measure exactly 25 gm per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'Super COC (Copper Oxychloride 50% WP)',
      description: 'Multi-site contact fungicide and bactericide for leaf spot, blight, citrus canker, and fruit rot.',
      route: '/products/copper-oxychloride-50-wp-super-coc',
      image: 'assets/products/fungicide/copper-oxychloride-50-wp.jpg',
      imageAlt: 'Super COC Copper Oxychloride 50% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'Hari 45 (Mancozeb 75% WP)',
      description: 'Multi-site contact fungicide for early and late blight, leaf spot, and rust across multiple crops.',
      route: '/products/mancozeb-75-wp-hari-45',
      image: 'assets/products/fungicide/mancozeb-75-wp.jpg',
      imageAlt: 'Hari 45 Mancozeb 75% WP fungicide by Harishree Crop Science'
    },
    {
      name: 'Hatayu (Chlorothalonil 75% WP)',
      description: 'Multi-site contact fungicide for early blight, fruit rot, and leaf spot across vegetables and fruit crops.',
      route: '/products/chlorothalonil-75-wp-hatayu',
      image: 'assets/products/fungicide/chlorothalonil-75-wp.jpg',
      imageAlt: 'Hatayu Chlorothalonil 75% WP fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is N Tracol Fungicide used for?',
      answer:
        '<strong>N Tracol Fungicide</strong> (<strong>Propineb 70% WP</strong>) is used for <strong>broad-spectrum fungal disease control</strong> including early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria in potato, tomato, chilli, grapes, apple, onion, cucumber, and cabbage. It is a multi-site contact fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'N Tracol Fungicide (Propineb 70% WP) is used for broad-spectrum fungal disease control including early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria in potato, tomato, chilli, grapes, apple, onion, cucumber, and cabbage. It is a multi-site contact fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Propineb 70% WP control?',
      answer:
        '<strong>Propineb 70% WP</strong> controls <strong>early blight</strong>, <strong>late blight</strong>, <strong>downy mildew</strong>, <strong>leaf spot</strong>, <strong>rust</strong>, <strong>anthracnose</strong>, <strong>apple scab</strong>, and <strong>alternaria</strong>. N Tracol delivers preventive activity against these fungal pathogens when applied with uniform coverage.',
      answerPlain:
        'Propineb 70% WP controls early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria. N Tracol delivers preventive activity against these fungal pathogens when applied with uniform coverage.'
    },
    {
      question: 'Which crops can be treated with N Tracol?',
      answer:
        '<strong>N Tracol Fungicide</strong> can be used on <strong>potato</strong>, <strong>tomato</strong>, <strong>chilli</strong>, <strong>grapes</strong>, <strong>apple</strong>, <strong>onion</strong>, <strong>cucumber</strong>, and <strong>cabbage</strong>. It is a versatile protectant fungicide for vegetable and fruit programs facing fungal disease pressure.',
      answerPlain:
        'N Tracol Fungicide can be used on potato, tomato, chilli, grapes, apple, onion, cucumber, and cabbage. It is a versatile protectant fungicide for vegetable and fruit programs facing fungal disease pressure.'
    },
    {
      question: 'What is the recommended dosage of N Tracol Fungicide?',
      answer:
        'The standard recommended dose of <strong>N Tracol Fungicide</strong> is <strong>25 gm per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of N Tracol Fungicide is 25 gm per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'How does propineb work?',
      answer:
        '<strong>N Tracol</strong> (propineb) is a <strong>multi-site contact fungicide</strong> that inhibits several enzyme systems in fungal cells at once on the plant surface. This <strong>protective barrier</strong> prevents spore germination and mycelial growth before infection establishes, giving strong preventive control with a very low risk of resistance.',
      answerPlain:
        'N Tracol (propineb) is a multi-site contact fungicide that inhibits several enzyme systems in fungal cells at once on the plant surface. This protective barrier prevents spore germination and mycelial growth before infection establishes, giving strong preventive control with a very low risk of resistance.'
    },
    {
      question: 'Is N Tracol good for downy mildew?',
      answer:
        'Yes. <strong>N Tracol</strong> is especially trusted for <strong>downy mildew</strong> control in <strong>grapes</strong>, cucumber, onion, and cabbage. Applied preventively with thorough leaf-underside coverage, it builds a dependable protective barrier during humid weather.',
      answerPlain:
        'Yes. N Tracol is especially trusted for downy mildew control in grapes, cucumber, onion, and cabbage. Applied preventively with thorough leaf-underside coverage, it builds a dependable protective barrier during humid weather.'
    },
    {
      question: 'When should N Tracol be sprayed?',
      answer:
        'Spray <strong>N Tracol</strong> <strong>preventively</strong> or at <strong>early disease appearance</strong> before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong>, including leaf undersides, and repeat based on disease pressure and label guidance.',
      answerPlain:
        'Spray N Tracol preventively or at early disease appearance before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage, including leaf undersides, and repeat based on disease pressure and label guidance.'
    },
    {
      question: 'Why choose N Tracol over ordinary fungicides?',
      answer:
        '<strong>N Tracol</strong> offers <strong>multi-site contact action</strong>, <strong>broad-spectrum disease control</strong>, a dependable <strong>preventive barrier</strong>, and excellent <strong>resistance-management value</strong> at Rupees 342 for the 500 gm pack — outperforming ordinary single-site fungicides across mixed disease pressure.',
      answerPlain:
        'N Tracol offers multi-site contact action, broad-spectrum disease control, a dependable preventive barrier, and excellent resistance-management value at Rupees 342 for the 500 gm pack — outperforming ordinary single-site fungicides across mixed disease pressure.'
    }
  ];

  testimonials = [
    {
      name: 'Vijay',
      location: 'Maharashtra',
      text:
        'I used N Tracol preventively on my grapes during the humid season and downy mildew pressure stayed low compared to earlier years. The bunches looked cleaner and the protective cover held well even after light rain.',
      rating: 5
    },
    {
      name: 'Dinesh',
      location: 'Uttar Pradesh',
      text:
        'N Tracol controlled early and late blight in my potato crop. The foliage stayed green longer and tuber size was better at harvest. The 25 gm per pump dose is simple and the powder mixes easily.',
      rating: 5
    },
    {
      name: 'Mohan',
      location: 'Himachal Pradesh',
      text:
        'Apple scab was a recurring problem in my orchard. Regular N Tracol sprays during the infection period kept the leaves and fruit much cleaner, and the fruit finish improved the market grade this season.',
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
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding N Tracol.' },
    { name: 'Measure N Tracol', text: 'Accurately measure 25 gm of Propineb 70% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until the WP forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves and stems, including undersides, where blight and mildew develop.' },
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
        'Propineb 70% WP N Tracol Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Multi-Site Contact Fungicide for Early Blight, Late Blight, Downy Mildew and Leaf Spot Control',
      description:
        'N Tracol (Propineb 70% WP) by Harishree Crop Science is a multi-site contact fungicide for early blight, late blight, downy mildew, leaf spot, rust, anthracnose, apple scab, and alternaria. Dose: 25 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.productTitle,
      category: 'Agricultural Fungicide',
      sku: 'NTRACOL-PROPINEB-WP',
      mpn: 'NTRACOL-PROPINEB-WP',
      dose: '25 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply N Tracol (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of N Tracol (Propineb 70% WP) for foliar application at 25 gm/pump.',
      alternateNames: ['Propineb 70% WP'],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `N Tracol (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'N Tracol Propineb 70% WP delivers broad-spectrum disease control for potato, tomato, grapes, apple & vegetables. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Propineb 70% WP | N Tracol',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Propineb 70% WP (N Tracol) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'N Tracol | Propineb 70% WP Fungicide',
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
