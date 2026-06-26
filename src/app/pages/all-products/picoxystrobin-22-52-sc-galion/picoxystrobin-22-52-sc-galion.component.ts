import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'GALION_PICOXYSTROBIN_SC';
const INDICATIVE_LIST_PRICE_INR = 1027;

@Component({
  selector: 'app-picoxystrobin-22-52-sc-galion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './picoxystrobin-22-52-sc-galion.component.html',
  styleUrl: './picoxystrobin-22-52-sc-galion.component.scss'
})
export class Picoxystrobin2252ScGalionComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/picoxystrobin-22-52-sc-galion';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/picoxystrobin-22-52-sc.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Picoxystrobin 22.52% SC';
  brandName = 'Galion';

  featuredSnippetAnswer =
    'Galion (Picoxystrobin 22.52% SC) is a systemic strobilurin (QoI) fungicide by Harishree Crop Science for preventive and curative control of rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, and disease complex across paddy, soybean, wheat, groundnut, cotton, chilli, tomato, and maize. Recommended dose: 16 ml per pump.';

  packSizes = [
    { volume: '160 ml', price: 425, featured: false, sku: 'GALION-160ML' },
    { volume: '240 ml', price: 625, featured: false, sku: 'GALION-240ML' },
    { volume: '400 ml', price: 1027, featured: true, sku: 'GALION-400ML' },
    { volume: '1 Ltr', price: 2537, featured: false, sku: 'GALION-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'QoI fungicide technology',
      description:
        'Galion uses picoxystrobin, a strobilurin (QoI, FRAC 11) active that blocks fungal mitochondrial respiration for dependable broad-spectrum disease control.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One Galion spray manages rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, and disease complex across field and horticultural crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic movement',
      description:
        'Picoxystrobin is absorbed and redistributes within plant tissue, including vapour-phase movement, protecting new growth and improving coverage on treated leaves.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Inhibits fungal respiration',
      description:
        'By blocking energy production in fungal cells, Galion stops spore germination and fungal growth before disease establishes in a humid canopy.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Preventive and curative activity',
      description:
        'Galion protects healthy tissue and checks early infections, giving growers flexible disease control at first appearance or as a scheduled preventive spray.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual protection',
      description:
        'Systemic activity inside plant tissue maintains protection between sprays during critical flowering, grain-fill, and fruit-set stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Greening effect & crop vigor',
      description:
        'Strobilurin chemistry supports a stay-green effect and healthier leaf area, helping the crop photosynthesise longer and develop more uniformly.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the SC spray deposit dries on foliage, Galion adheres well and maintains activity even after light rainfall during the monsoon spray window.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner grains, pods, and fruits with reduced disease scarring improve marketability across paddy, soybean, chilli, and tomato programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely fungal disease control preserves leaf area and yield-forming parts — supporting higher yield potential per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'QoI strobilurin technology',
      description:
        'Galion uses picoxystrobin, a highly mobile strobilurin (QoI, FRAC 11) active, delivering broad-spectrum respiration-inhibiting disease control across many crops in one spray.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Preventive and curative activity',
      description:
        'Galion protects healthy foliage and checks early infections, giving growers flexible control whether sprayed preventively or at first disease appearance.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual & greening effect',
      description:
        'Systemic movement maintains protection between sprays while the strobilurin stay-green effect supports healthier leaf area and improved crop vigor.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at Rupees 1027 for the best-selling 400 ml pack, crop-safe application at 16 ml per pump, and improved crop vigor deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Galion controls rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, and disease complex — the most common fungal threats across Indian crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive protection',
      description:
        'Picoxystrobin 22.52% builds protective defence on treated foliage before pathogens establish — ideal for scheduled preventive sprays when weather favours disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative activity',
      description:
        'Galion checks early fungal infections by halting respiration in the pathogen, limiting lesion expansion and spore production when disease first appears.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Strong systemic action',
      description:
        'Picoxystrobin translocates within plant tissue and moves in the vapour phase, protecting new growth and improving distribution across the canopy.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Greening & improved vigor',
      description:
        'The strobilurin stay-green effect supports longer-lasting green leaf area, stronger photosynthesis, and more uniform crop development through the season.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Long residual effect',
      description:
        'Extended systemic activity inside plant tissue reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Resistance management value',
      description:
        'As a single-site QoI active, Galion is best rotated with multi-site and other-group fungicides, anchoring a strong resistance-management program.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling rust, blast, leaf spot, and mildew that scar produce, Galion helps growers deliver cleaner, more uniform harvests suited to premium markets.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaf area and yield-forming parts during reproductive stages helps preserve yield when rust, blast, or sheath blight pressure is high.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on grains, pods, and fruits improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely Galion application limits defoliation, grain chaffiness, and fruit drop — protecting the grower\'s investment in seed, fertilizer, and irrigation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable broad-spectrum protection at a farmer-friendly dose of 16 ml per pump helps growers protect yield and quality, translating spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Galion Fungicide is a premium broad-spectrum systemic fungicide from HARISHREE CROP SCIENCE, formulated as Picoxystrobin 22.52% SC. Indian growers face increasing pressure from rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, and sheath blight — diseases that strip leaf area, scar grains and fruits, and cut yields when left unchecked. Strobilurin fungicides like Galion are trusted because they pair strong preventive protection with curative activity and a valuable greening effect, all from one of the most mobile QoI actives available.';

  aboutOverview =
    'The suspension concentrate (SC) formulation disperses evenly in water for uniform foliar coverage on leaves, sheaths, stems, and fruiting parts. Galion is engineered for crop safety when used at the recommended 16 ml per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across paddy, soybean, wheat, groundnut, cotton, chilli, tomato, and maize. For agronomists and dealers, Galion represents a dependable strobilurin crop protection solution backed by Harishree quality control and batch-to-batch consistency.';

  aboutActive =
    'Picoxystrobin 22.52% belongs to the strobilurin (QoI, FRAC Group 11) chemical family. It works by blocking mitochondrial respiration in fungal cells — inhibiting the cytochrome bc1 complex — which stops energy production and prevents fungal growth and spore germination. Picoxystrobin is among the most mobile strobilurins, moving systemically and in the vapour phase within the crop canopy to deliver strong preventive protection, early curative activity, and a stay-green effect that supports crop vigor between sprays.';

  targetCropsTable = [
    { crop: 'Paddy', diseases: 'Blast, Sheath Blight' },
    { crop: 'Soybean', diseases: 'Rust, Leaf Spot' },
    { crop: 'Wheat', diseases: 'Rust, Leaf Spot' },
    { crop: 'Groundnut', diseases: 'Rust, Leaf Spot' },
    { crop: 'Cotton', diseases: 'Leaf Spot, Alternaria' },
    { crop: 'Chilli', diseases: 'Anthracnose, Powdery Mildew' },
    { crop: 'Tomato', diseases: 'Early Blight, Leaf Spot' },
    { crop: 'Maize', diseases: 'Leaf Spot, Disease Complex' }
  ];

  diseaseDetails = [
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist conditions in soybean, wheat, and groundnut.',
      impact:
        'Rust destroys leaf area essential for pod and grain filling. Severe infections can reduce yield significantly if not controlled at early pustule stage.',
      controlBenefits:
        'Galion halts rust sporulation and limits pustule spread by inhibiting fungal respiration. Apply when first pustules appear — systemic movement protects new foliage between sprays.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during wet periods.',
      controlBenefits:
        'Galion limits lesion expansion and protects uninfected leaf tissue. Early spray at first spotting delivers curative plus preventive cover across the full canopy.'
    },
    {
      name: 'Blast',
      symptoms:
        'Spindle-shaped lesions with grey centres and brown margins on paddy leaves; neck and node blast cause lesions on the panicle base, leading to whiteheads and broken necks.',
      impact:
        'Blast is one of the most damaging paddy diseases, reducing grain fill and causing panicle breakage and significant yield loss when severe.',
      controlBenefits:
        'Galion systemic activity protects foliage and panicle tissue from blast. Apply at early lesion stage and at panicle initiation for dependable protection.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves, sometimes with spore masses in humid conditions. Infected chilli and field crop produce becomes unmarketable.',
      impact:
        'Anthracnose damages fruit and pod appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather in dense canopies.',
      controlBenefits:
        'Galion interrupts the anthracnose cycle by stopping fungal respiration and new spore production. Time sprays before flowering and at early fruit-set for best results.'
    },
    {
      name: 'Alternaria',
      symptoms:
        'Dark brown to black spots with concentric rings on leaves, stems, and fruits of tomato and cotton, often enlarging and merging under warm, humid conditions.',
      impact:
        'Alternaria reduces leaf area, blemishes produce, and causes premature defoliation, lowering both yield and quality during the productive canopy stage.',
      controlBenefits:
        'Galion protects healthy tissue and checks early Alternaria infections. Begin sprays at first spotting and maintain coverage in humid weather for long-lasting control.'
    },
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on upper leaf surfaces, stems, and fruits. Leaves may curl, yellow, and drop prematurely when colonies spread across the canopy.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and scars fruit — cutting marketable yield in chilli and other crops when left untreated through flowering.',
      controlBenefits:
        'Galion suppresses mildew colonies through systemic strobilurin activity. Spray at first visible colonies with full canopy coverage for best long-lasting disease control.'
    },
    {
      name: 'Sheath Blight',
      symptoms:
        'Oval greenish-grey lesions on leaf sheaths near the water line in paddy. Lesions expand and merge, causing sheath rot and weakened stems in dense, humid rice stands.',
      impact:
        'Sheath blight causes significant losses in paddy — reducing grain fill, increasing chaffy grains, and causing lodging when stem strength is compromised.',
      controlBenefits:
        'Galion systemic movement into leaf sheaths limits Rhizoctonia spread. Apply at early lesion stage with uniform coverage on sheaths and lower leaves during tillering.'
    },
    {
      name: 'Disease Complex',
      symptoms:
        'A mix of fungal leaf and panicle diseases occurring together under humid conditions, with overlapping lesions, spots, and pustules across the canopy.',
      impact:
        'Mixed fungal pressure compounds leaf-area loss and yield reduction, and is hard to manage with narrow-spectrum products.',
      controlBenefits:
        'Broad-spectrum Galion addresses the fungal disease complex in one systemic spray, simplifying programs while protecting leaf area and yield potential.'
    }
  ];

  targetPests = [
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. Galion halts rust sporulation on soybean, wheat, and groundnut when applied at early pustule appearance.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. Galion limits lesion expansion and preserves photosynthetic leaf area across multiple crops.'
    },
    {
      name: 'Blast',
      description:
        'Spindle-shaped lesions and neck blast in paddy. Galion systemic activity protects foliage and panicle tissue when applied at early stage.'
    },
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. Galion systemic strobilurin activity suppresses mildew development and protects new growth in chilli.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark fruit and pod lesions. Galion interrupts the anthracnose cycle on chilli and field crops at early infection stage.'
    },
    {
      name: 'Sheath Blight',
      description:
        'Greenish-grey sheath lesions in dense paddy stands. Galion systemic movement limits Rhizoctonia spread along leaf sheaths during humid conditions.'
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
      { label: 'Product name', value: 'Galion' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Picoxystrobin 22.52% SC' },
      { label: 'Chemical group', value: 'Strobilurin / QoI (FRAC 11)' },
      { label: 'Action type', value: 'Preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, disease complex' },
      { label: 'Target crops', value: 'Paddy, soybean, wheat, groundnut, cotton, chilli, tomato, maize' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 160 ml, 240 ml, 400 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '16 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, sheaths, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Galion' },
    { label: 'Brand / Trade Name', value: 'Galion' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Picoxystrobin 22.52% SC' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'Strobilurin (QoI)' },
    { label: 'Action Type', value: 'Preventive and curative broad-spectrum fungicide' },
    { label: 'Diseases Controlled', value: 'Rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, disease complex' },
    { label: 'Target Crops', value: 'Paddy, soybean, wheat, groundnut, cotton, chilli, tomato, maize' },
    { label: 'Recommended Dose', value: '16 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (160 ml, 240 ml, 400 ml, 1 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Galion Fungicide.'
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
      title: 'Keep away from children and animals',
      text: 'Store in original sealed container away from food, feed, seed, and out of reach of children and animals.'
    },
    {
      title: 'Avoid contamination of water sources',
      text: 'Never spray directly over ponds, canals, or drinking water sources. Triple-rinse empty containers before disposal.'
    },
    {
      title: 'Store in a cool and dry place',
      text: 'Keep sealed bottles in a cool, dry, ventilated area away from direct sunlight and ignition sources.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 16 ml per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'GALION WAY (Picoxystrobin 7.05% + Propiconazole 11.71% SC)',
      description: 'Dual-action strobilurin plus triazole systemic fungicide for blast, rust, leaf spot, and sheath blight.',
      route: '/products/picoxystrobin-propiconazole-sc-galion-way',
      image: 'assets/products/fungicide/picoxystrobin-7-05-propiconazole-11-71-sc.png',
      imageAlt: 'GALION WAY Picoxystrobin Propiconazole fungicide by Harishree Crop Science'
    },
    {
      name: 'Captop (Azoxystrobin 18.2% + Difenoconazole 11.4% SC)',
      description: 'Dual-action systemic fungicide for powdery mildew, anthracnose, rust, leaf spot, and fruit rot.',
      route: '/products/captop-azoxystrobin-18-2-difenoconazole-11-4-sc',
      image: 'assets/products/fungicide/azoxystrobin-18-2-difenoconazole-11-4-sc.jpg',
      imageAlt: 'Captop Azoxystrobin Difenoconazole fungicide by Harishree Crop Science'
    },
    {
      name: 'X PRO (Azoxystrobin 16.7% + Tricyclazole 33.3% SC)',
      description: 'Dual-action systemic fungicide for rice blast, sheath blight, and brown spot in paddy crops.',
      route: '/products/x-pro-azoxystrobin-16-7-tricyclazole-33-3-sc',
      image: 'assets/products/X-PRO.png',
      imageAlt: 'X PRO Azoxystrobin Tricyclazole fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Galion Fungicide used for?',
      answer:
        '<strong>Galion Fungicide</strong> (<strong>Picoxystrobin 22.52% SC</strong>) is used for <strong>broad-spectrum fungal disease control</strong> including rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, and disease complex in paddy, soybean, wheat, groundnut, cotton, chilli, tomato, and maize. It is a systemic strobilurin fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Galion Fungicide (Picoxystrobin 22.52% SC) is used for broad-spectrum fungal disease control including rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, and disease complex in paddy, soybean, wheat, groundnut, cotton, chilli, tomato, and maize. It is a systemic strobilurin fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Picoxystrobin 22.52% SC control?',
      answer:
        '<strong>Picoxystrobin 22.52% SC</strong> controls <strong>rust</strong>, <strong>leaf spot</strong>, <strong>blast</strong>, <strong>anthracnose</strong>, <strong>alternaria</strong>, <strong>powdery mildew</strong>, <strong>sheath blight</strong>, and <strong>disease complex</strong>. Galion delivers preventive and curative activity when applied at early disease appearance with uniform coverage.',
      answerPlain:
        'Picoxystrobin 22.52% SC controls rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, sheath blight, and disease complex. Galion delivers preventive and curative activity when applied at early disease appearance with uniform coverage.'
    },
    {
      question: 'Which crops can be treated with Galion?',
      answer:
        '<strong>Galion Fungicide</strong> can be used on <strong>paddy</strong>, <strong>soybean</strong>, <strong>wheat</strong>, <strong>groundnut</strong>, <strong>cotton</strong>, <strong>chilli</strong>, <strong>tomato</strong>, and <strong>maize</strong>. It is a versatile crop protection fungicide for field and horticultural programs facing fungal disease pressure.',
      answerPlain:
        'Galion Fungicide can be used on paddy, soybean, wheat, groundnut, cotton, chilli, tomato, and maize. It is a versatile crop protection fungicide for field and horticultural programs facing fungal disease pressure.'
    },
    {
      question: 'What is the recommended dosage of Galion Fungicide?',
      answer:
        'The standard recommended dose of <strong>Galion Fungicide</strong> is <strong>16 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of Galion Fungicide is 16 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'How does picoxystrobin work?',
      answer:
        '<strong>Galion</strong> (picoxystrobin) is a <strong>strobilurin (QoI, FRAC 11)</strong> fungicide that blocks <strong>mitochondrial respiration</strong> in fungal cells, stopping energy production and preventing spore germination and fungal growth. It moves systemically and in the vapour phase for strong preventive and curative protection.',
      answerPlain:
        'Galion (picoxystrobin) is a strobilurin (QoI, FRAC 11) fungicide that blocks mitochondrial respiration in fungal cells, stopping energy production and preventing spore germination and fungal growth. It moves systemically and in the vapour phase for strong preventive and curative protection.'
    },
    {
      question: 'Is Galion preventive or curative?',
      answer:
        '<strong>Galion Fungicide</strong> provides <strong>both preventive and curative activity</strong>. It builds protective defence before disease spreads and checks early fungal infections — making it ideal for long residual disease control across multiple crop systems.',
      answerPlain:
        'Galion Fungicide provides both preventive and curative activity. It builds protective defence before disease spreads and checks early fungal infections — making it ideal for long residual disease control across multiple crop systems.'
    },
    {
      question: 'When should Galion be sprayed?',
      answer:
        'Spray <strong>Galion</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance.',
      answerPlain:
        'Spray Galion at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance.'
    },
    {
      question: 'Why choose Galion over ordinary fungicides?',
      answer:
        '<strong>Galion</strong> offers <strong>QoI strobilurin technology</strong>, <strong>preventive and curative activity</strong>, <strong>long residual protection</strong> with a greening effect, and <strong>better return on investment</strong> at Rupees 1027 for the best-selling 400 ml pack — outperforming ordinary fungicides across mixed disease pressure.',
      answerPlain:
        'Galion offers QoI strobilurin technology, preventive and curative activity, long residual protection with a greening effect, and better return on investment at Rupees 1027 for the best-selling 400 ml pack — outperforming ordinary fungicides across mixed disease pressure.'
    }
  ];

  testimonials = [
    {
      name: 'Sandeep',
      location: 'Madhya Pradesh',
      text:
        'I sprayed Galion on my soybean when rust started after the rains. The pustules stopped spreading and the crop stayed greener through pod fill. The stay-green effect was clear and yield was better than the previous season.',
      rating: 5
    },
    {
      name: 'Naresh',
      location: 'Punjab',
      text:
        'Galion controlled leaf blast in my paddy at an early stage and the panicles filled well. One timely spray at 16 ml per pump protected the crop and the grain quality was noticeably better at harvest.',
      rating: 5
    },
    {
      name: 'Praveen',
      location: 'Telangana',
      text:
        'Anthracnose and leaf spot pressure was high in my chilli during the humid season. Galion gave reliable broad-spectrum control and the foliage looked healthier and greener. Good product with long-lasting protection.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '61',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Galion.' },
    { name: 'Measure Galion', text: 'Accurately measure 16 ml of Picoxystrobin 22.52% SC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, sheaths, and fruits where rust, blast, and leaf spot develop.' },
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
        'Picoxystrobin 22.52% SC Galion Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Systemic Strobilurin Fungicide for Rust, Leaf Spot, Blast, Anthracnose and Powdery Mildew Control',
      description:
        'Galion (Picoxystrobin 22.52% SC) by Harishree Crop Science is a systemic strobilurin fungicide for rust, leaf spot, blast, anthracnose, alternaria, powdery mildew, and sheath blight. Dose: 16 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.productTitle,
      category: 'Agricultural Fungicide',
      sku: 'GALION-PICOXYSTROBIN-SC',
      mpn: 'GALION-PICOXYSTROBIN-SC',
      dose: '16 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Galion (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Galion (Picoxystrobin 22.52% SC) for foliar application at 16 ml/pump.',
      alternateNames: ['Picoxystrobin 22.52% SC'],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Galion (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Galion Picoxystrobin 22.52% SC delivers broad-spectrum systemic disease control for paddy, soybean, wheat, groundnut & chilli. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Picoxystrobin 22.52% SC | Galion',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Picoxystrobin 22.52% SC (Galion) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Galion | Picoxystrobin 22.52% SC Fungicide',
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
