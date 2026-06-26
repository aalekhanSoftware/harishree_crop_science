import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'HTILT_PROPICONAZOLE_25_EC';
const INDICATIVE_LIST_PRICE_INR = 413;

@Component({
  selector: 'app-propiconazole-25-ec-h-tilt',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './propiconazole-25-ec-h-tilt.component.html',
  styleUrl: './propiconazole-25-ec-h-tilt.component.scss'
})
export class Propiconazole25EcHTiltComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/propiconazole-25-ec-h-tilt';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/propiconazole-25-ec.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Propiconazole 25% EC';
  brandName = 'H TILT';

  featuredSnippetAnswer =
    'H TILT (Propiconazole 25% EC) is a broad-spectrum systemic triazole fungicide by Harishree Crop Science for preventive and curative control of rust, powdery mildew, leaf spot, blast, and anthracnose across wheat, paddy, groundnut, soybean, tea, cotton, fruits, and vegetables. It is rapidly absorbed and moves inside plant tissue for long-lasting protection. Recommended dose: 25 ml per pump.';

  packSizes = [
    { volume: '250 ml', price: 212, featured: false, sku: 'HTILT-250ML' },
    { volume: '500 ml', price: 413, featured: true, sku: 'HTILT-500ML' },
    { volume: '1 Ltr', price: 802, featured: false, sku: 'HTILT-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Systemic triazole fungicide',
      description:
        'H TILT delivers Propiconazole 25% EC — a proven DMI triazole that is absorbed by leaves and moves within plant tissue to protect treated and new growth from fungal attack.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum control',
      description:
        'One H TILT spray manages rust, powdery mildew, leaf spot, blast, and anthracnose — covering a wide fungal disease complex across cereals, oilseeds, plantation, and horticultural crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Fast absorption',
      description:
        'Propiconazole is taken up quickly through foliage, so disease control starts soon after spraying and is less affected by light rain once the deposit has dried on the leaf.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Preventive action',
      description:
        'Sprayed before or at early disease appearance, H TILT builds protection inside the plant — ideal for scheduled programs when humid weather favours rust and mildew development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Propiconazole halts active infections by blocking ergosterol biosynthesis, stopping lesion growth and spore production when sprayed at the first signs of fungal disease.',
      icon: 'fas fa-notes-medical'
    },
    {
      title: 'Long residual effect',
      description:
        'Systemic movement inside leaf and stem tissue maintains protection between spray rounds during critical tillering, flowering, and grain-fill stages of the crop.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the EC spray deposit dries on foliage, H TILT adheres well and continues working even after light rainfall during the monsoon spray window.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Greener leaf area',
      description:
        'By protecting leaves from rust and leaf spot, H TILT keeps the canopy green for longer, supporting better photosynthesis through the reproductive crop stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved produce quality',
      description:
        'Cleaner grains, pods, and leaves with reduced disease scarring improve marketability in wheat, groundnut, tea, and horticultural crop programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Better yield potential',
      description:
        'Timely fungal disease control preserves green leaf area, flowers, and grains — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Proven Propiconazole technology',
      description:
        'H TILT is built on trusted Propiconazole 25% EC chemistry — a globally recognised systemic triazole fungicide used by farmers and agronomists for dependable, broad-spectrum fungal disease control.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'A single H TILT spray manages rust, powdery mildew, leaf spot, blast, and anthracnose across multiple crops instead of relying on several single-disease products through the season.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long-lasting effectiveness',
      description:
        'Systemic movement inside plant tissue maintains preventive and curative activity between spray intervals, reducing application frequency during high disease-pressure periods.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at the best-selling 500 ml pack, a simple 25 ml per pump dose, and healthier high-yielding crops deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'H TILT controls rust, powdery mildew, leaf spot, blast, and anthracnose — the most common fungal threats across Indian cereal, oilseed, plantation, and horticultural crops in one formulation.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic action',
      description:
        'Propiconazole 25% is absorbed into foliage and translocates within plant tissue, protecting new shoots and reaching infections that purely contact fungicides may miss.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive protection',
      description:
        'Applied before pathogens establish, H TILT builds internal defence on treated foliage — ideal for scheduled preventive sprays when weather forecasts favour disease development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative activity',
      description:
        'Propiconazole stops active fungal infections at early lesion stage, halting spore production and lesion expansion when growers spot the first signs of disease pressure.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Rapid absorption',
      description:
        'Quick uptake through the leaf surface means disease control begins soon after spraying and performance is less affected by light rain once the deposit dries.',
      icon: 'fas fa-tachometer-alt'
    },
    {
      title: 'Long residual activity',
      description:
        'Extended systemic activity inside plant tissue reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows across kharif and rabi seasons.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop quality',
      description:
        'By controlling rust, mildew, and leaf spot that scar produce, H TILT helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Better yield potential',
      description:
        'Protecting green leaf area, flowers, and grains during reproductive stages helps preserve yield when rust, mildew, or blast pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Excellent disease management',
      description:
        'H TILT fits cleanly into integrated and resistance-management programs, pairing preventive and curative action with rotation-friendly triazole chemistry.',
      icon: 'fas fa-clipboard-check'
    },
    {
      title: 'Cost-effective protection',
      description:
        'Dependable control at a farmer-friendly 25 ml per pump dose helps growers protect yield and quality, turning disease-control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    },
    {
      title: 'Suitable for multiple crops',
      description:
        'From wheat and paddy to groundnut, soybean, tea, cotton, fruits, and vegetables, H TILT is a versatile fungicide for diverse Indian cropping systems.',
      icon: 'fas fa-tractor'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely H TILT application limits defoliation, leaf scorch, and grain chaffiness — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    }
  ];

  aboutIntro =
    'H TILT Fungicide is a premium broad-spectrum systemic fungicide from HARISHREE CROP SCIENCE, formulated as Propiconazole 25% EC. Indian growers face mounting pressure from rust, powdery mildew, leaf spot, blast, and anthracnose — diseases that strip leaf area, scar produce, and cut yields when left unchecked. Systemic triazole fungicides like H TILT are trusted because they combine fast preventive protection with curative action in a single spray, simplifying field programs while covering a wide disease spectrum.';

  aboutOverview =
    'The emulsifiable concentrate (EC) formulation mixes evenly in water for uniform foliar coverage on leaves, stems, and grain-bearing parts. H TILT is engineered for crop safety when used at the recommended 25 ml per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across wheat, paddy, groundnut, soybean, tea, cotton, fruits, and vegetables. For agronomists and dealers, H TILT represents a dependable systemic crop-protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutActive =
    'Propiconazole 25% belongs to the triazole (DMI, demethylation inhibitor; FRAC Group 3) chemical family. It works by inhibiting ergosterol biosynthesis — a critical building block of fungal cell membranes. Without ergosterol, the pathogen cannot maintain cell membrane integrity, so fungal growth and reproduction stop. Because Propiconazole is rapidly absorbed and moves systemically inside plant tissue, it delivers both preventive protection on treated foliage and curative control of infections already present, reaching lesions that contact fungicides alone may miss.';

  aboutCombined =
    'Sprayed at early disease appearance, H TILT gives immediate suppression of active lesions plus extended residual protection from a single application. Its systemic, rainfast performance makes it especially valuable during humid weather when rust, powdery mildew, and leaf spot spread quickly through a dense canopy. As a rotation-friendly triazole, Propiconazole also supports resistance-management programs when alternated with fungicides of a different mode of action across the crop cycle.';

  targetCropsTable = [
    { crop: 'Wheat', diseases: 'Brown Rust, Yellow Rust, Leaf Spot' },
    { crop: 'Paddy', diseases: 'Blast, Sheath Blight, Leaf Spot' },
    { crop: 'Groundnut', diseases: 'Rust, Tikka Leaf Spot' },
    { crop: 'Soybean', diseases: 'Rust, Leaf Spot' },
    { crop: 'Cotton', diseases: 'Leaf Spot Diseases' },
    { crop: 'Tea', diseases: 'Blister Blight, Leaf Diseases' },
    { crop: 'Chilli', diseases: 'Powdery Mildew, Leaf Spot' },
    { crop: 'Tomato', diseases: 'Leaf Spot, Powdery Mildew' },
    { crop: 'Grapes', diseases: 'Powdery Mildew' },
    { crop: 'Mango', diseases: 'Powdery Mildew, Anthracnose' }
  ];

  diseaseDetails = [
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves, stems, and sheaths. Infected tissue yellows and may dry up. In wheat and groundnut, severe rust causes rapid loss of green leaf area during grain and pod fill.',
      impact:
        'Rust destroys the photosynthetic leaf area needed to fill grains and pods. Heavy infections at flowering and grain-fill can sharply reduce yield and shrivel the harvested produce.',
      controlBenefits:
        'H TILT (Propiconazole 25% EC) halts rust sporulation and limits pustule spread. Apply at first pustule appearance; systemic movement protects new foliage between scheduled sprays.'
    },
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on upper leaf surfaces, stems, and fruits. Leaves may curl, yellow, and drop early when colonies spread across the canopy in warm, humid spells.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and scars fruits — cutting marketable yield in chilli, grapes, mango, and vegetable crops when left untreated through flowering.',
      controlBenefits:
        'H TILT suppresses mildew colonies through systemic Propiconazole activity. Spray at first visible colonies with full canopy coverage for long-lasting disease control.'
    },
    {
      name: 'Blast Disease',
      symptoms:
        'Spindle-shaped lesions with grey centres and brown margins on paddy leaves; neck and node infection can break the panicle. Lesions enlarge and merge in cool, humid weather.',
      impact:
        'Paddy blast reduces grain set and causes chaffy, broken panicles. Neck blast at heading can cause severe yield loss in susceptible rice varieties under favourable weather.',
      controlBenefits:
        'H TILT protects leaf and neck tissue against blast when sprayed preventively or at early lesion stage, limiting lesion spread and supporting healthier panicle development.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions merge into large necrotic patches and cause premature defoliation in groundnut, soybean, and cotton.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during wet periods.',
      controlBenefits:
        'H TILT limits lesion expansion and protects uninfected leaf tissue. Early spray at first spotting delivers curative plus preventive cover across the full canopy.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, leaves, and twigs; pinkish spore masses may appear in humid conditions. Infected mango and horticultural produce become unmarketable as lesions expand.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'H TILT interrupts the anthracnose cycle by stopping active infections and limiting new spore production. Time sprays before flowering and at early fruit-set for best protection.'
    },
    {
      name: 'Sheath Blight & Brown/Yellow Rust',
      symptoms:
        'Greenish-grey sheath lesions near the water line in paddy; orange (brown rust) and yellow-striped (yellow rust) pustules on wheat leaves that reduce green tissue rapidly.',
      impact:
        'Sheath blight weakens stems and can cause lodging in paddy, while brown and yellow rust strip wheat leaf area during grain fill — both leading to significant economic losses.',
      controlBenefits:
        'Systemic H TILT movement into sheaths and leaves limits Rhizoctonia and rust spread. Apply at early lesion or pustule stage with uniform coverage for dependable control.'
    }
  ];

  targetPests = [
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. Systemic H TILT halts rust sporulation on wheat, groundnut, and soybean when applied at early pustule appearance.'
    },
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. H TILT triazole activity suppresses mildew development and protects new growth in chilli, grapes, and mango.'
    },
    {
      name: 'Blast Disease',
      description:
        'Spindle-shaped lesions and neck blast in paddy. H TILT protects leaf and neck tissue when sprayed preventively or at early lesion stage in rice.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. H TILT limits lesion expansion and preserves leaf area in groundnut, soybean, and cotton.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and twigs. Curative Propiconazole activity limits anthracnose damage on mango and horticultural crops at early infection.'
    },
    {
      name: 'Brown & Yellow Rust',
      description:
        'Pustules that strip wheat leaf area during grain fill. Systemic H TILT movement limits rust spread and keeps the flag leaf green for longer.'
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
      { label: 'Product name', value: 'H TILT' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'EC (Emulsifiable Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Propiconazole 25%' },
      { label: 'Chemical group', value: 'Triazole (DMI, FRAC 3)' },
      { label: 'Action type', value: 'Systemic; preventive and curative' },
      { label: 'Diseases controlled', value: 'Rust, powdery mildew, blast, leaf spot, anthracnose' },
      { label: 'Target crops', value: 'Wheat, paddy, groundnut, soybean, tea, cotton, fruits, vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 250 ml, 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '25 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, sheaths, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'H TILT' },
    { label: 'Brand / Trade Name', value: 'H TILT' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Propiconazole 25%' },
    { label: 'Formulation', value: 'EC (Emulsifiable Concentrate)' },
    { label: 'Chemical Group', value: 'Triazole (DMI)' },
    { label: 'Action Type', value: 'Systemic, preventive and curative fungicide' },
    { label: 'Diseases Controlled', value: 'Rust, powdery mildew, blast, leaf spot, anthracnose' },
    { label: 'Target Crops', value: 'Wheat, paddy, groundnut, soybean, tea, cotton, fruits, vegetables' },
    { label: 'Recommended Dose', value: '25 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (250 ml, 500 ml, 1 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying H TILT Fungicide.'
    },
    {
      title: 'Wear protective clothing',
      text: 'Use gloves, goggles, mask, and protective clothing when handling concentrate or preparing the spray mix in the field.'
    },
    {
      title: 'Avoid drift during spraying',
      text: 'Spray in calm morning or evening hours to prevent drift onto neighbouring crops, homes, or water bodies.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 25 ml per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
    },
    {
      title: 'Store in a cool, dry place',
      text: 'Keep sealed bottles in a cool, dry, ventilated area away from direct sunlight, heat, and ignition sources.'
    },
    {
      title: 'Keep in original container',
      text: 'Store H TILT only in its original, tightly closed container away from food, feed, seed, and fertilizers.'
    },
    {
      title: 'Keep away from children and animals',
      text: 'Store out of reach of children, pets, and livestock. Triple-rinse empty containers before safe disposal and never reuse them.'
    },
    {
      title: 'First aid and water safety',
      text: 'On contact, wash skin and eyes with plenty of water; if swallowed, seek medical help with the label. Never contaminate ponds, canals, or drinking water.'
    }
  ];

  relatedProducts = [
    {
      name: 'Magic (Validamycin 3% L)',
      description: 'Antibiotic fungicide for sheath blight and Rhizoctonia disease control in paddy and rice crops.',
      route: '/products/validamycin-3-l-magic',
      image: 'assets/products/fungicide/validamycin-3-l.jpg',
      imageAlt: 'Magic Validamycin 3% L fungicide by Harishree Crop Science'
    },
    {
      name: 'Milet Gold (Metalaxyl 8% + Mancozeb 64% WP)',
      description: 'Systemic plus contact fungicide for downy mildew and late blight in grapes, potato, and vegetables.',
      route: '/products/metalaxyl-8-mancozeb-64-wp-milet-gold',
      image: 'assets/products/fungicide/metalaxyl-8-mancozeb-64-wp.jpg',
      imageAlt: 'Milet Gold Metalaxyl Mancozeb fungicide by Harishree Crop Science'
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
      question: 'What is Propiconazole 25% EC used for?',
      answer:
        '<strong>Propiconazole 25% EC</strong> (<strong>H TILT</strong>) is used for <strong>broad-spectrum fungal disease control</strong> including rust, powdery mildew, leaf spot, blast, and anthracnose in wheat, paddy, groundnut, soybean, tea, cotton, fruits, and vegetables. It is a systemic triazole fungicide by <strong>HARISHREE CROP SCIENCE</strong> that is absorbed quickly and moves inside the plant for both preventive and curative protection.',
      answerPlain:
        'Propiconazole 25% EC (H TILT) is used for broad-spectrum fungal disease control including rust, powdery mildew, leaf spot, blast, and anthracnose in wheat, paddy, groundnut, soybean, tea, cotton, fruits, and vegetables. It is a systemic triazole fungicide by HARISHREE CROP SCIENCE that is absorbed quickly and moves inside the plant for both preventive and curative protection.'
    },
    {
      question: 'How does H TILT Fungicide work?',
      answer:
        '<strong>H TILT</strong> works as a <strong>systemic triazole (DMI) fungicide</strong>. Propiconazole is absorbed through the leaves and moves within plant tissue, where it <strong>inhibits ergosterol biosynthesis</strong> — a key part of the fungal cell membrane. This stops fungal growth and reproduction, giving both preventive protection on treated foliage and curative control of infections already present.',
      answerPlain:
        'H TILT works as a systemic triazole (DMI) fungicide. Propiconazole is absorbed through the leaves and moves within plant tissue, where it inhibits ergosterol biosynthesis — a key part of the fungal cell membrane. This stops fungal growth and reproduction, giving both preventive protection on treated foliage and curative control of infections already present.'
    },
    {
      question: 'What is the recommended dose of Propiconazole 25% EC?',
      answer:
        'The standard recommended dose of <strong>H TILT (Propiconazole 25% EC)</strong> is <strong>25 ml per pump</strong> in a 15-litre knapsack sprayer. Mix thoroughly and spray for uniform canopy coverage. Always confirm the final crop-wise dose with the printed label and local agronomic advisory for your specific crop and disease pressure.',
      answerPlain:
        'The standard recommended dose of H TILT (Propiconazole 25% EC) is 25 ml per pump in a 15-litre knapsack sprayer. Mix thoroughly and spray for uniform canopy coverage. Always confirm the final crop-wise dose with the printed label and local agronomic advisory for your specific crop and disease pressure.'
    },
    {
      question: 'Which crops can be treated with Propiconazole?',
      answer:
        '<strong>Propiconazole 25% EC</strong> can be used on <strong>wheat, paddy, groundnut, soybean, cotton, tea, chilli, tomato, grapes, and mango</strong>. It is a versatile crop-protection fungicide for cereal, oilseed, plantation, and horticultural programs facing rust, mildew, leaf spot, blast, and anthracnose pressure during the growing season.',
      answerPlain:
        'Propiconazole 25% EC can be used on wheat, paddy, groundnut, soybean, cotton, tea, chilli, tomato, grapes, and mango. It is a versatile crop-protection fungicide for cereal, oilseed, plantation, and horticultural programs facing rust, mildew, leaf spot, blast, and anthracnose pressure during the growing season.'
    },
    {
      question: 'Can Propiconazole control rust diseases?',
      answer:
        'Yes. <strong>Propiconazole 25% EC (H TILT)</strong> is highly effective against <strong>rust diseases</strong>, including <strong>brown rust and yellow rust</strong> in wheat and rust in groundnut and soybean. Applied at first pustule appearance, its systemic action halts sporulation, limits pustule spread, and keeps the flag leaf green for better grain and pod filling.',
      answerPlain:
        'Yes. Propiconazole 25% EC (H TILT) is highly effective against rust diseases, including brown rust and yellow rust in wheat and rust in groundnut and soybean. Applied at first pustule appearance, its systemic action halts sporulation, limits pustule spread, and keeps the flag leaf green for better grain and pod filling.'
    },
    {
      question: 'Is Propiconazole preventive or curative?',
      answer:
        '<strong>H TILT (Propiconazole 25% EC)</strong> provides <strong>both preventive and curative action</strong>. Sprayed before disease appears, it builds protection inside treated foliage; sprayed at early infection, it stops active lesions by blocking ergosterol biosynthesis — making it a dependable dual-purpose systemic fungicide for long-lasting disease control.',
      answerPlain:
        'H TILT (Propiconazole 25% EC) provides both preventive and curative action. Sprayed before disease appears, it builds protection inside treated foliage; sprayed at early infection, it stops active lesions by blocking ergosterol biosynthesis — making it a dependable dual-purpose systemic fungicide for long-lasting disease control.'
    },
    {
      question: 'When should farmers spray H TILT Fungicide?',
      answer:
        'Spray <strong>H TILT</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance, especially during humid weather that favours rust, mildew, and leaf spot.',
      answerPlain:
        'Spray H TILT at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance, especially during humid weather that favours rust, mildew, and leaf spot.'
    },
    {
      question: 'How should Propiconazole 25% EC be stored?',
      answer:
        'Store <strong>H TILT (Propiconazole 25% EC)</strong> in its <strong>original, tightly closed container</strong> in a <strong>cool, dry place</strong> away from direct sunlight, heat, food, feed, and seed. Keep out of reach of children and animals, and triple-rinse empty containers before safe disposal. Avoid storing near water sources.',
      answerPlain:
        'Store H TILT (Propiconazole 25% EC) in its original, tightly closed container in a cool, dry place away from direct sunlight, heat, food, feed, and seed. Keep out of reach of children and animals, and triple-rinse empty containers before safe disposal. Avoid storing near water sources.'
    }
  ];

  testimonials = [
    {
      name: 'Rajinder',
      location: 'Punjab',
      text:
        'I sprayed H TILT on my wheat when yellow rust started appearing on the lower leaves. The rust stopped spreading and the flag leaf stayed green right through grain fill. The grains were plumper at harvest and the 25 ml per pump dose was easy to follow in the field.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Madhya Pradesh',
      text:
        'Tikka leaf spot and rust used to defoliate my groundnut every year. After using H TILT at early disease stage the crop held its leaves much longer and pod filling was clearly better. Disease pressure was lower than the previous season and the pods looked healthier.',
      rating: 5
    },
    {
      name: 'Lakshman',
      location: 'Andhra Pradesh',
      text:
        'Blast was building in my paddy while nearby fields were already affected. One timely H TILT spray protected my crop through heading and the panicles filled well. The investment paid off with cleaner grain and better profitability at harvest compared to last year.',
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
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding H TILT.' },
    { name: 'Measure H TILT', text: 'Accurately measure 25 ml of Propiconazole 25% EC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the EC forms a uniform spray emulsion.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, sheaths, and fruits where rust, mildew, and leaf spot develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform canopy coverage is essential for systemic fungicide efficacy across all target crops.' },
    { name: 'Post-spray safety', text: 'Wash exposed skin, clean equipment, and store leftover product safely. Observe the re-entry interval.' }
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
        'Propiconazole 25% EC H TILT Systemic Triazole Fungicide for Rust, Powdery Mildew and Leaf Spot Control',
      productImageCaption:
        'Broad Spectrum Systemic Fungicide for Rust, Powdery Mildew, Blast, Leaf Spot and Anthracnose Control',
      description:
        'H TILT (Propiconazole 25% EC) by Harishree Crop Science is a systemic triazole fungicide for rust, powdery mildew, blast, leaf spot, and anthracnose in wheat, paddy, groundnut & more. Dose: 25 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'H TILT Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'HTILT-PROPICONAZOLE-25-EC',
      mpn: 'HTILT-PROPICONAZOLE-25-EC',
      dose: '25 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply H TILT (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of H TILT (Propiconazole 25% EC) for foliar application at 25 ml/pump.',
      alternateNames: [
        'H TILT',
        'H TILT Fungicide',
        'Propiconazole Fungicide',
        'Systemic Fungicide',
        'Triazole Fungicide',
        'Broad Spectrum Systemic Fungicide',
        'Fungicide for Rust Disease',
        'Fungicide for Powdery Mildew',
        'Fungicide for Leaf Spot',
        'Fungicide for Blast Disease',
        'Wheat Rust Fungicide',
        'Paddy Blast Fungicide',
        'Groundnut Fungicide',
        'Tea Crop Fungicide',
        'Soybean Fungicide',
        'Best Fungicide for Fungal Diseases',
        'Agricultural Fungicide',
        'Crop Protection Fungicide',
        'Long Lasting Disease Control',
        'Fungicide for Fruits and Vegetables'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `H TILT (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'EC (Emulsifiable Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'H TILT Propiconazole 25% EC is a systemic triazole fungicide for rust, powdery mildew, blast & leaf spot in wheat, paddy, groundnut & more. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Propiconazole 25% EC | H TILT Systemic Fungicide',
        description: desc,
        keywords:
          'Propiconazole 25% EC, H TILT, H TILT Fungicide, Propiconazole Fungicide, Systemic Fungicide, Triazole Fungicide, Broad Spectrum Systemic Fungicide, Fungicide for Rust Disease, Fungicide for Powdery Mildew, Fungicide for Leaf Spot, Fungicide for Blast Disease, Wheat Rust Fungicide, Paddy Blast Fungicide, Groundnut Fungicide, Tea Crop Fungicide, Best Fungicide for Fungal Diseases, Agricultural Fungicide, Propiconazole 25 EC uses, Propiconazole 25 EC dose per litre, Propiconazole 25 EC price, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Propiconazole 25% EC (H TILT) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'H TILT | Propiconazole 25% EC Systemic Fungicide',
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
