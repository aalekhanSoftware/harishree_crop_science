import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'CHEMISTRY_AZOXYS_TEBUCONAZOLE_SC';
const INDICATIVE_LIST_PRICE_INR = 531;

@Component({
  selector: 'app-azoxystrobin-11-tebuconazole-18-3-sc-chemistry',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './azoxystrobin-11-tebuconazole-18-3-sc-chemistry.component.html',
  styleUrl: './azoxystrobin-11-tebuconazole-18-3-sc-chemistry.component.scss'
})
export class Azoxystrobin11Tebuconazole183ScChemistryComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/chemistry-azoxystrobin-11-tebuconazole-18-3-sc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/insecticide/azoxystrobin-11-tebuconazole-18-3-sc.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC';
  brandName = 'Chemistry';

  featuredSnippetAnswer =
    'Chemistry (Azoxystrobin 11% + Tebuconazole 18.3% w/w SC) is a dual-action systemic fungicide by Harishree Crop Science for preventive and curative control of rust, powdery mildew, leaf spot, anthracnose, and sheath blight in paddy, chilli, groundnut, soybean, cotton, and vegetables. Recommended dose: 20 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 118, featured: false, sku: 'CHEMISTRY-100ML' },
    { volume: '250 ml', price: 271, featured: false, sku: 'CHEMISTRY-250ML' },
    { volume: '500 ml', price: 531, featured: true, sku: 'CHEMISTRY-500ML' },
    { volume: '1 Ltr', price: 1038, featured: false, sku: 'CHEMISTRY-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredients',
      description:
        'Chemistry combines Azoxystrobin 11% and Tebuconazole 18.3% w/w SC — strobilurin plus triazole chemistry in one suspension concentrate for broad-spectrum fungicide protection.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Systemic movement',
      description:
        'Both actives absorb into foliage and translocate within plant tissue, protecting new growth and reaching fungal infections on unsprayed leaf surfaces.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive action',
      description:
        'Azoxystrobin disrupts fungal respiration before disease establishes — ideal for preventive crop protection programs when weather favours infection.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Tebuconazole inhibits ergosterol biosynthesis to stop active infections when sprayed at early disease appearance with uniform canopy coverage.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Broad-spectrum control',
      description:
        'One Chemistry spray manages rust, powdery mildew, leaf spot, anthracnose, and sheath blight across paddy, chilli, groundnut, soybean, and cotton.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Fast disease suppression',
      description:
        'Dual-action chemistry delivers rapid halt to lesion expansion and spore production when applied at the first sign of fungal pressure in the field.',
      icon: 'fas fa-stopwatch'
    },
    {
      title: 'Long residual effect',
      description:
        'Systemic activity inside plant tissue maintains protection between scheduled spray intervals during critical flowering and grain-fill stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Rainfast protection',
      description:
        'Once the SC spray deposit dries on foliage, Chemistry adheres well and maintains activity even after light rainfall events.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Improved crop health',
      description:
        'Healthier green leaf area supports stronger photosynthesis, better plant vigour, and more uniform crop development through the season.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Better productivity',
      description:
        'Timely fungal disease control preserves pods, grains, and fruits — supporting higher yield potential and improved harvest quality per acre.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Dual mode of action',
      description:
        'Azoxystrobin and Tebuconazole work through complementary pathways — mitochondrial respiration blockade plus ergosterol inhibition — delivering broader disease control than single-active fungicides in one spray.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Strong disease management',
      description:
        'Chemistry Fungicide manages rust, powdery mildew, leaf spot, anthracnose, and sheath blight across multiple crops instead of relying on separate products for each disease complex.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long-lasting protection',
      description:
        'Systemic movement within plant tissue maintains preventive and curative activity between spray intervals — reducing the number of applications needed during high-pressure seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better ROI for farmers',
      description:
        'Competitive pricing at ₹531 for the best-selling 500 ml pack, crop-safe application at recommended dose, and higher productivity benefits deliver strong return on investment per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Chemistry controls rust, powdery mildew, leaf spot, anthracnose, and sheath blight — the most common fungal threats across Indian field and horticultural crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive and curative activity',
      description:
        'Apply before infection spreads for protective action, or at early lesion stage for curative suppression — flexible timing for integrated disease management.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual protection',
      description:
        'Extended systemic activity inside plant tissue reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Systemic movement in plants',
      description:
        'Azoxystrobin and Tebuconazole translocate through vascular channels after foliar uptake, protecting new shoots and internal plant parts from fungal attack.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Better crop vigor',
      description:
        'Disease-free foliage supports stronger tillering, branching, and vegetative growth — essential for crops facing mid-season fungal pressure.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved photosynthesis',
      description:
        'By controlling leaf spot, rust, and mildew that reduce green leaf area, Chemistry helps crops maintain photosynthetic capacity through critical growth stages.',
      icon: 'fas fa-sun'
    },
    {
      title: 'Reduced disease pressure',
      description:
        'Dual-action chemistry limits spore production and secondary infection cycles, keeping fungal populations below economic damage thresholds in the field.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Higher yield potential',
      description:
        'Protecting flowers, pods, and grains during reproductive stages helps preserve yield when rust, anthracnose, or sheath blight pressure is high.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better quality produce',
      description:
        'Cleaner fruits, pods, and grains with reduced disease scarring improve marketability in chilli, groundnut, soybean, and vegetable programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Improved plant health',
      description:
        'Healthier stands with fewer defoliated or discoloured plants translate to more uniform maturity and easier harvest management across the plot.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Strong resistance management',
      description:
        'Combining strobilurin and triazole chemistry groups in one formulation supports rotation-friendly disease programs compared to repeated single-MOA sprays.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Increased farm profitability',
      description:
        'Dependable dual-action protection at a farmer-friendly dose of 20 ml per pump helps growers protect investment in seed, fertilizer, and irrigation.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Chemistry Fungicide is a premium broad-spectrum systemic fungicide from HARISHREE CROP SCIENCE, formulated as Azoxystrobin 11% + Tebuconazole 18.3% w/w SC. Indian growers face increasing pressure from rust, powdery mildew, leaf spot, anthracnose, and sheath blight — diseases that strip leaf area, scar fruits, and cut yields when left unchecked. Combination fungicides like Chemistry are trusted because they pair preventive protection with curative action in a single tank mix, simplifying field programs while covering a wider disease spectrum than most single-active products.';

  aboutOverview =
    'The suspension concentrate (SC) formulation disperses evenly in water for uniform foliar coverage on leaves, sheaths, and fruiting parts. Chemistry is engineered for crop safety when used at the recommended 20 ml per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across paddy, chilli, groundnut, soybean, cotton, and vegetable crops. For agronomists and dealers, Chemistry represents a dependable dual-action crop protection solution backed by Harishree quality control and batch-to-batch consistency.';

  aboutAzoxystrobin =
    'Azoxystrobin 11% belongs to the strobilurin (QoI, FRAC Group 11) chemical family. It works by blocking mitochondrial respiration in fungal cells — specifically inhibiting the cytochrome bc1 complex — which stops energy production and prevents fungal growth and spore formation. This delivers strong preventive protection on treated foliage and builds internal defence when the active is absorbed into plant tissue.';

  aboutTebuconazole =
    'Tebuconazole 18.3% is a triazole fungicide (FRAC Group 3) that inhibits ergosterol biosynthesis — a critical component of fungal cell membranes. Without ergosterol, the pathogen cannot maintain cell wall integrity, halting growth of existing infections. This provides curative and systemic control, reaching disease lesions that contact fungicides alone may miss.';

  aboutCombined =
    'Together, Azoxystrobin and Tebuconazole deliver broad-spectrum disease protection with preventive and curative benefits, long-lasting control, and improved resistance management through two distinct biochemical pathways. Farmers spraying Chemistry at early disease appearance gain both immediate lesion suppression and extended residual protection — a combination that single-active fungicides struggle to match across mixed disease pressure in the field.';

  targetCropsTable = [
    { crop: 'Paddy', diseases: 'Sheath Blight, Blast Complex' },
    { crop: 'Chilli', diseases: 'Fruit Rot, Powdery Mildew' },
    { crop: 'Groundnut', diseases: 'Leaf Spot, Rust' },
    { crop: 'Soybean', diseases: 'Rust, Anthracnose' },
    { crop: 'Cotton', diseases: 'Leaf Spot Diseases' },
    { crop: 'Vegetables', diseases: 'Fungal Leaf Diseases' }
  ];

  diseaseDetails = [
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on upper leaf surfaces, stems, and fruits. Leaves may curl, yellow, and drop prematurely when colonies spread across the canopy.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and causes fruit scarring — cutting marketable yield in chilli, vegetables, and horticultural crops during dry, humid spells.',
      controlBenefits:
        'Chemistry suppresses mildew colonies through systemic tebuconazole activity and azoxystrobin respiration inhibition. Spray at first visible colonies with full canopy coverage for best results.'
    },
    {
      name: 'Rust Disease',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist conditions.',
      impact:
        'Rust destroys leaf area essential for pod and grain filling in groundnut and soybean. Severe infections can reduce yield by 30% or more if not controlled at early pustule stage.',
      controlBenefits:
        'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC halts rust sporulation and limits pustule spread. Apply when first pustules appear — systemic movement protects new foliage between sprays.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation.',
      impact:
        'Leaf spot diseases reduce photosynthetic area in groundnut, cotton, soybean, and vegetables. Heavy defoliation weakens plants and lowers yield and fibre or pod quality.',
      controlBenefits:
        'Chemistry limits lesion expansion and protects uninfected leaf tissue. Early spray at first spotting delivers curative tebuconazole action plus preventive azoxystrobin cover across the canopy.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions. Infected chilli fruits and vegetable produce become unmarketable.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading rapidly through dense crop canopies.',
      controlBenefits:
        'Dual-action Chemistry interrupts the anthracnose disease cycle by stopping active infections and preventing new spore production. Time sprays before flowering and at early fruit-set for maximum protection.'
    },
    {
      name: 'Sheath Blight',
      symptoms:
        'Oval greenish-grey lesions on leaf sheaths near the water line in paddy. Lesions expand and merge, causing sheath rot and weakened stems in dense, humid stands.',
      impact:
        'Sheath blight causes significant economic losses in paddy — reducing grain fill, increasing chaffy grains, and causing lodging when stem strength is compromised in high-yielding varieties.',
      controlBenefits:
        'Chemistry systemic movement into leaf sheaths limits Rhizoctonia solani spread. Apply at early lesion stage with uniform coverage on sheaths and lower leaves during tillering and panicle initiation.'
    }
  ];

  targetPests = [
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. Chemistry systemic triazole and strobilurin activity suppresses mildew development and protects new growth in chilli and vegetables.'
    },
    {
      name: 'Rust Disease',
      description:
        'Orange to brown pustules on leaves and stems. Dual-action Chemistry halts rust sporulation on groundnut, soybean, and field crops when applied at early pustule stage.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. Chemistry limits lesion expansion and preserves photosynthetic leaf area across multiple crop systems.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. Curative tebuconazole activity limits anthracnose damage on chilli, soybean, and horticultural crops at early infection.'
    },
    {
      name: 'Sheath Blight',
      description:
        'Greenish-grey sheath lesions in dense paddy stands. Chemistry systemic movement limits Rhizoctonia spread along leaf sheaths during humid growing conditions.'
    }
  ];

  applications = [
    {
      title: 'Paddy',
      description:
        'Controls sheath blight and blast complex in rice programs — apply at early disease appearance with uniform coverage on leaves and sheaths during tillering and panicle stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Chilli',
      description:
        'Protects against fruit rot, powdery mildew, and anthracnose during flowering and fruit-set windows for cleaner, marketable pods.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Groundnut',
      description:
        'Manages leaf spot and rust that defoliate canopies and reduce pod filling — spray at early pustule or lesion stage with full foliar coverage.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Soybean',
      description:
        'Controls rust and anthracnose during vegetative and pod-fill stages for healthier soybean stands and improved harvest quality.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Cotton',
      description:
        'Suppresses leaf spot diseases that reduce photosynthetic area and weaken boll development when applied at early lesion sighting.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Vegetables',
      description:
        'Broad fit for fungal leaf diseases across tomato, brinjal, capsicum, and mixed horticultural crops facing foliar pathogen pressure.',
      icon: 'fas fa-carrot'
    }
  ];

  cropWiseUsage = [
    { crop: 'Paddy', pests: 'Sheath blight, blast complex', dose: '20 ml/pump', timing: 'Early disease or preventive at tillering' },
    { crop: 'Chilli', pests: 'Fruit rot, powdery mildew, anthracnose', dose: '20 ml/pump', timing: 'Flowering and fruit-set window' },
    { crop: 'Groundnut', pests: 'Leaf spot, rust', dose: '20 ml/pump', timing: 'Early pustule or lesion stage' },
    { crop: 'Soybean', pests: 'Rust, anthracnose', dose: '20 ml/pump', timing: 'Vegetative and pod-fill stages' },
    { crop: 'Cotton', pests: 'Leaf spot diseases', dose: '20 ml/pump', timing: 'At first lesion sighting' },
    { crop: 'Vegetables', pests: 'Fungal leaf diseases', dose: '20 ml/pump', timing: 'Preventive or early curative spray' }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Early disease appearance' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Repeat Spray', recommendation: 'Based on disease pressure' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Chemistry' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Azoxystrobin 11% + Tebuconazole 18.3% w/w' },
      { label: 'Chemical group', value: 'QoI (FRAC 11) + Triazole (FRAC 3)' },
      { label: 'Action type', value: 'Preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Rust, powdery mildew, leaf spot, anthracnose, sheath blight' },
      { label: 'Target crops', value: 'Paddy, chilli, groundnut, soybean, cotton, vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 100 ml, 250 ml, 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '20 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, sheaths, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Chemistry' },
    { label: 'Brand / Trade Name', value: 'Chemistry' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Azoxystrobin 11% + Tebuconazole 18.3% w/w' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'QoI (Strobilurin) + Triazole' },
    { label: 'Action Type', value: 'Preventive and curative broad-spectrum fungicide' },
    { label: 'Diseases Controlled', value: 'Rust, powdery mildew, leaf spot, anthracnose, sheath blight' },
    { label: 'Target Crops', value: 'Paddy, chilli, groundnut, soybean, cotton, vegetables' },
    { label: 'Recommended Dose', value: '20 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (100 ml, 250 ml, 500 ml, 1 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Chemistry Fungicide.'
    },
    {
      title: 'Wear protective equipment',
      text: 'Use gloves, goggles, mask, and protective clothing when handling concentrate or preparing the spray mix.'
    },
    {
      title: 'Avoid spraying during strong winds',
      text: 'Spray in calm morning or evening hours to prevent drift onto neighbouring crops, homes, or water bodies.'
    },
    {
      title: 'Keep away from children',
      text: 'Store in original sealed container away from food, feed, seed, and out of reach of children and animals.'
    },
    {
      title: 'Avoid contamination of water bodies',
      text: 'Never spray directly over ponds, canals, or drinking water sources. Triple-rinse empty containers before disposal.'
    },
    {
      title: 'Store in a cool dry place',
      text: 'Keep sealed bottles in a cool, dry, ventilated area away from direct sunlight and ignition sources.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 20 ml per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
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
      name: 'Tebuja (Tebuconazole 25.9% EC)',
      description: 'Systemic triazole fungicide for rust, powdery mildew, leaf spot, and anthracnose across multiple crops.',
      route: '/products/tebuconazole-25-9-ec-tebuja',
      image: 'assets/products/fungicide/tebuconazole-25-9--ec.jpg',
      imageAlt: 'Tebuja Tebuconazole 25.9% EC fungicide by Harishree Crop Science'
    },
    {
      name: 'Confer Plus (Hexaconazole 5% SC)',
      description: 'Broad-spectrum systemic triazole fungicide for powdery mildew, sheath blight, and leaf spots.',
      route: '/products',
      image: 'assets/products/fungicide/confer-plus.jpg',
      imageAlt: 'Confer Plus Hexaconazole fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Chemistry Fungicide used for?',
      answer:
        '<strong>Chemistry Fungicide</strong> (<strong>Azoxystrobin 11% + Tebuconazole 18.3% w/w SC</strong>) is used for <strong>broad-spectrum fungal disease control</strong> including rust, powdery mildew, leaf spot, anthracnose, and sheath blight in paddy, chilli, groundnut, soybean, cotton, and vegetables. It is a dual-action systemic fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Chemistry Fungicide (Azoxystrobin 11% + Tebuconazole 18.3% w/w SC) is used for broad-spectrum fungal disease control including rust, powdery mildew, leaf spot, anthracnose, and sheath blight in paddy, chilli, groundnut, soybean, cotton, and vegetables. It is a dual-action systemic fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'What diseases does Azoxystrobin 11% + Tebuconazole 18.3% w/w SC control?',
      answer:
        '<strong>Azoxystrobin 11% + Tebuconazole 18.3% w/w SC</strong> controls <strong>rust disease</strong>, <strong>powdery mildew</strong>, <strong>leaf spot</strong>, <strong>anthracnose</strong>, and <strong>sheath blight</strong>. Chemistry delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance.',
      answerPlain:
        'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC controls rust disease, powdery mildew, leaf spot, anthracnose, and sheath blight. Chemistry delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance.'
    },
    {
      question: 'Which crops can benefit from Chemistry Fungicide?',
      answer:
        '<strong>Chemistry Fungicide</strong> benefits <strong>paddy</strong>, <strong>chilli</strong>, <strong>groundnut</strong>, <strong>soybean</strong>, <strong>cotton</strong>, and <strong>vegetables</strong>. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure.',
      answerPlain:
        'Chemistry Fungicide benefits paddy, chilli, groundnut, soybean, cotton, and vegetables. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure.'
    },
    {
      question: 'What is the recommended dose of Chemistry?',
      answer:
        'The standard recommended dose of <strong>Chemistry</strong> is <strong>20 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop.',
      answerPlain:
        'The standard recommended dose of Chemistry is 20 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop.'
    },
    {
      question: 'How does the dual-action formula work?',
      answer:
        '<strong>Chemistry</strong> combines <strong>azoxystrobin</strong> (strobilurin) which blocks fungal respiration for preventive protection, and <strong>tebuconazole</strong> (triazole) which inhibits ergosterol biosynthesis for curative control of active infections — delivering broad-spectrum effectiveness in one spray.',
      answerPlain:
        'Chemistry combines azoxystrobin (strobilurin) which blocks fungal respiration for preventive protection, and tebuconazole (triazole) which inhibits ergosterol biosynthesis for curative control of active infections — delivering broad-spectrum effectiveness in one spray.'
    },
    {
      question: 'Is Chemistry Fungicide preventive or curative?',
      answer:
        '<strong>Chemistry Fungicide</strong> provides <strong>both preventive and curative action</strong>. Azoxystrobin builds protective defence before disease spreads, while Tebuconazole stops existing fungal infections — making it ideal as a dual-action fungicide for long duration disease control.',
      answerPlain:
        'Chemistry Fungicide provides both preventive and curative action. Azoxystrobin builds protective defence before disease spreads, while Tebuconazole stops existing fungal infections — making it ideal as a dual-action fungicide for long duration disease control.'
    },
    {
      question: 'When should Chemistry be sprayed?',
      answer:
        'Spray <strong>Chemistry</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance.',
      answerPlain:
        'Spray Chemistry at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance.'
    },
    {
      question: 'Which pack size is most suitable for farmers?',
      answer:
        'The <strong>500 ml pack at ₹531</strong> is the best-selling and most popular choice for regular field use. <strong>Chemistry</strong> is also available in <strong>100 ml (₹118)</strong>, <strong>250 ml (₹271)</strong>, and <strong>1 Ltr (₹1038)</strong>. Contact Harishree dealers for availability.',
      answerPlain:
        'The 500 ml pack at ₹531 is the best-selling and most popular choice for regular field use. Chemistry is also available in 100 ml (₹118), 250 ml (₹271), and 1 Ltr (₹1038). Contact Harishree dealers for availability.'
    }
  ];

  testimonials = [
    {
      name: 'Kiran',
      location: 'Gujarat',
      text:
        'I used Chemistry on my groundnut when rust and leaf spot started appearing after the rains. Within a week the lesions stopped spreading and the crop looked much greener. The 20 ml per pump dose is simple to follow, and disease pressure was clearly lower at harvest compared to last year.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Maharashtra',
      text:
        'Chemistry helped control powdery mildew and fruit rot in my chilli field during the humid season. Pod quality improved and I got better rates at the market. The dual-action formula gave reliable protection when I needed it most — definitely better yield and crop quality this season.',
      rating: 5
    },
    {
      name: 'Ravi Kumar',
      location: 'Karnataka',
      text:
        'Sheath blight was building in my paddy plot and neighbouring fields were already affected. One timely Chemistry spray at early stage protected my crop through grain fill. The investment paid off — healthier panicles and noticeably better profitability at harvest.',
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
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Chemistry.' },
    { name: 'Measure Chemistry', text: 'Accurately measure 20 ml of Azoxystrobin 11% + Tebuconazole 18.3% w/w SC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, sheaths, and fruits where rust, mildew, and leaf spot develop.' },
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
        'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC Chemistry Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Dual Action Systemic Fungicide for Rust, Powdery Mildew, Leaf Spot and Sheath Blight Control',
      description:
        'Chemistry (Azoxystrobin 11% + Tebuconazole 18.3% w/w SC) by Harishree Crop Science is a dual-action systemic fungicide for rust, powdery mildew, leaf spot, anthracnose, and sheath blight. Dose: 20 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'Chemistry Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'CHEMISTRY-AZOXYS-TEBUCONAZOLE-SC',
      mpn: 'CHEMISTRY-AZOXYS-TEBUCONAZOLE-SC',
      dose: '20 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Chemistry (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Chemistry (Azoxystrobin 11% + Tebuconazole 18.3% w/w SC) for foliar application at 20 ml/pump.',
      alternateNames: [
        'Chemistry',
        'Chemistry Fungicide',
        'Azoxystrobin Tebuconazole Fungicide',
        'Broad Spectrum Fungicide',
        'Systemic Fungicide',
        'Preventive and Curative Fungicide',
        'Fungicide for Rust Disease',
        'Fungicide for Powdery Mildew',
        'Fungicide for Leaf Spot',
        'Anthracnose Control Fungicide',
        'Sheath Blight Control',
        'Paddy Fungicide',
        'Chilli Fungicide',
        'Soybean Fungicide',
        'Groundnut Fungicide',
        'Cotton Fungicide',
        'Crop Protection Fungicide',
        'Best Fungicide for Fungal Diseases',
        'Long Duration Disease Control',
        'Dual Action Fungicide'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Chemistry (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Chemistry Azoxystrobin + Tebuconazole SC controls rust, mildew & leaf spot across paddy, chilli, groundnut & soybean. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC | Chemistry',
        description: desc,
        keywords:
          'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC, Chemistry Fungicide, Azoxystrobin Tebuconazole Fungicide, Broad Spectrum Fungicide, Systemic Fungicide, Preventive and Curative Fungicide, Fungicide for Rust Disease, Fungicide for Powdery Mildew, Fungicide for Leaf Spot, Anthracnose Control Fungicide, Sheath Blight Control, Paddy Fungicide, Chilli Fungicide, Soybean Fungicide, Groundnut Fungicide, Cotton Fungicide, Crop Protection Fungicide, Best Fungicide for Fungal Diseases, Long Duration Disease Control, Dual Action Fungicide, Chemistry, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Azoxystrobin 11% + Tebuconazole 18.3% w/w SC (Chemistry) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Chemistry | Azoxystrobin + Tebuconazole Fungicide',
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
