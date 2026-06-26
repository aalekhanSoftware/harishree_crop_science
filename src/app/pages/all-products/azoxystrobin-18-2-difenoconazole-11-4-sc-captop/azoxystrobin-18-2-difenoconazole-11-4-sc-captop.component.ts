import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'CAPTOP_AZOXYS_DIFENOCONAZOLE_SC';
const INDICATIVE_LIST_PRICE_INR = 690;

@Component({
  selector: 'app-azoxystrobin-18-2-difenoconazole-11-4-sc-captop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './azoxystrobin-18-2-difenoconazole-11-4-sc-captop.component.html',
  styleUrl: './azoxystrobin-18-2-difenoconazole-11-4-sc-captop.component.scss'
})
export class Azoxystrobin182Difenoconazole114ScCaptopComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/captop-azoxystrobin-18-2-difenoconazole-11-4-sc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/azoxystrobin-18-2-difenoconazole-11-4-sc.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC';
  brandName = 'Captop';

  featuredSnippetAnswer =
    'Captop (Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC) is a dual-action systemic fungicide by Harishree Crop Science for preventive and curative control of powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight across chilli, tomato, paddy, groundnut, cotton, grapes, vegetables, and horticultural crops. Recommended dose: 20 ml per pump.';

  packSizes = [
    { volume: '100 ml', price: 148, featured: false, sku: 'CAPTOP-100ML' },
    { volume: '250 ml', price: 353, featured: false, sku: 'CAPTOP-250ML' },
    { volume: '500 ml', price: 690, featured: true, sku: 'CAPTOP-500ML' },
    { volume: '1 Ltr', price: 1357, featured: false, sku: 'CAPTOP-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredients',
      description:
        'Captop combines Azoxystrobin 18.2% and Difenoconazole 11.4% w/w SC — strobilurin plus triazole chemistry in one suspension concentrate for dependable broad-spectrum fungicide protection.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One Captop spray manages powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight — reducing the need for multiple single-disease products in mixed infection seasons.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic movement',
      description:
        'Both actives absorb into foliage and translocate within plant tissue, protecting new growth and reaching fungal infections on leaf surfaces that contact sprays alone may miss.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive action',
      description:
        'Azoxystrobin disrupts fungal respiration before disease establishes — ideal for preventive crop protection programs when humid weather favours rapid pathogen spread.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Difenoconazole inhibits ergosterol biosynthesis to halt active infections when sprayed at early disease appearance with uniform canopy coverage across the field.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual effect',
      description:
        'Systemic activity inside plant tissue maintains protection between scheduled spray intervals during critical flowering, fruit-set, and grain-fill stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the SC spray deposit dries on foliage, Captop adheres well and maintains activity even after light rainfall events during the monsoon spray window.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier green leaf area supports stronger tillering, branching, and vegetative growth — essential when fungal pressure threatens mid-season crop development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner fruits, pods, and grains with reduced disease scarring improve marketability in chilli, tomato, grapes, and horticultural crop programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely fungal disease control preserves flowers, pods, and grains — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Dual-action technology',
      description:
        'Azoxystrobin and Difenoconazole work through complementary biochemical pathways — mitochondrial respiration blockade plus ergosterol inhibition — delivering broader disease control than single-active fungicides in one spray tank.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'Captop Fungicide manages powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight across multiple crops instead of relying on separate products for each disease complex in the field.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long-lasting protection',
      description:
        'Systemic movement within plant tissue maintains preventive and curative activity between spray intervals — reducing application frequency during high-pressure seasons when weather favours infection.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at ₹690 for the best-selling 500 ml pack, crop-safe application at the recommended 20 ml per pump dose, and higher productivity benefits deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Captop controls powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight — the most common fungal threats across Indian field and horticultural crops in one dependable formulation.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive protection',
      description:
        'Azoxystrobin 18.2% builds a protective barrier on treated foliage before pathogens establish — ideal for scheduled preventive sprays when weather forecasts favour disease development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative activity',
      description:
        'Difenoconazole 11.4% stops active fungal infections at early lesion stage, halting spore production and lesion expansion when growers spot the first signs of disease pressure.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Strong systemic action',
      description:
        'Both actives translocate through vascular channels after foliar uptake, protecting new shoots, developing fruits, and internal plant parts from fungal attack between spray rounds.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage supports stronger photosynthesis, better plant growth, and more uniform crop development through the season when fungal pathogens threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better disease resistance',
      description:
        'Combining strobilurin and triazole chemistry groups in one formulation supports rotation-friendly disease programs compared to repeated sprays of a single mode-of-action product.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Long residual effect',
      description:
        'Extended systemic activity inside plant tissue reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows across kharif and rabi seasons.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling leaf spot, rust, mildew, and fruit rot that scar produce, Captop helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting flowers, pods, and grains during reproductive stages helps preserve yield when anthracnose, rust, or sheath blight pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on chilli fruits, tomato produce, grape bunches, and vegetable harvests improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely Captop application limits defoliation, fruit drop, and grain chaffiness — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable dual-action protection at a farmer-friendly dose of 20 ml per pump helps growers protect yield and quality, translating disease control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Captop Fungicide is a premium broad-spectrum systemic fungicide from HARISHREE CROP SCIENCE, formulated as Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC. Indian growers face increasing pressure from powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight — diseases that strip leaf area, scar fruits, and cut yields when left unchecked. Combination fungicides like Captop are trusted because they pair preventive protection with curative action in a single tank mix, simplifying field programs while covering a wider disease spectrum than most single-active products.';

  aboutOverview =
    'The suspension concentrate (SC) formulation disperses evenly in water for uniform foliar coverage on leaves, sheaths, stems, and fruiting parts. Captop is engineered for crop safety when used at the recommended 20 ml per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across chilli, tomato, paddy, groundnut, cotton, grapes, vegetables, and horticultural crops. For agronomists and dealers, Captop represents a dependable dual-action crop protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutAzoxystrobin =
    'Azoxystrobin 18.2% belongs to the strobilurin (QoI, FRAC Group 11) chemical family. It works by blocking mitochondrial respiration in fungal cells — specifically inhibiting the cytochrome bc1 complex — which stops energy production and prevents fungal growth and spore formation. This delivers strong preventive protection on treated foliage and builds internal defence when the active is absorbed into plant tissue, making it especially valuable before infection spreads through a humid canopy.';

  aboutDifenoconazole =
    'Difenoconazole 11.4% is a triazole fungicide (FRAC Group 3) that inhibits ergosterol biosynthesis — a critical component of fungal cell membranes. Without ergosterol, the pathogen cannot maintain cell wall integrity, halting growth of existing infections. This provides curative and systemic control, reaching disease lesions that contact fungicides alone may miss and delivering the curative backbone growers need when disease is already visible in the field.';

  aboutCombined =
    'Together, Azoxystrobin 18.2% and Difenoconazole 11.4% deliver broad-spectrum disease protection with preventive and curative benefits, long-lasting control, and improved resistance management through two distinct biochemical pathways. Farmers spraying Captop at early disease appearance gain both immediate lesion suppression and extended residual protection — a combination that single-active fungicides struggle to match across mixed disease pressure in chilli, tomato, paddy, groundnut, cotton, grapes, and vegetable programs.';

  targetCropsTable = [
    { crop: 'Chilli', diseases: 'Fruit Rot, Powdery Mildew' },
    { crop: 'Tomato', diseases: 'Early Blight, Leaf Spot' },
    { crop: 'Paddy', diseases: 'Sheath Blight' },
    { crop: 'Groundnut', diseases: 'Rust, Leaf Spot' },
    { crop: 'Cotton', diseases: 'Leaf Spot Diseases' },
    { crop: 'Grapes', diseases: 'Powdery Mildew' },
    { crop: 'Vegetables', diseases: 'Various Fungal Diseases' },
    { crop: 'Horticultural Crops', diseases: 'Broad Spectrum Disease Control' }
  ];

  diseaseDetails = [
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on upper leaf surfaces, stems, and fruits. Leaves may curl, yellow, and drop prematurely when colonies spread across the canopy during dry, humid spells.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and causes fruit scarring — cutting marketable yield in chilli, grapes, vegetables, and horticultural crops when left untreated through flowering.',
      controlBenefits:
        'Captop suppresses mildew colonies through systemic difenoconazole activity and azoxystrobin respiration inhibition. Spray at first visible colonies with full canopy coverage for best long-lasting disease control.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions. Infected chilli fruits and vegetable produce become unmarketable when lesions expand rapidly.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense crop canopies during monsoon.',
      controlBenefits:
        'Dual-action Captop interrupts the anthracnose disease cycle by stopping active infections and preventing new spore production. Time sprays before flowering and at early fruit-set for maximum crop protection.'
    },
    {
      name: 'Rust Disease',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist growing conditions in groundnut and field crops.',
      impact:
        'Rust destroys leaf area essential for pod and grain filling in groundnut and other field crops. Severe infections can reduce yield significantly if not controlled at early pustule stage.',
      controlBenefits:
        'Azoxystrobin 18.2% + Difenoconazole 11.4% w/w SC halts rust sporulation and limits pustule spread. Apply when first pustules appear — systemic movement protects new foliage between scheduled sprays.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation across tomato, cotton, and groundnut stands.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during extended wet periods.',
      controlBenefits:
        'Captop limits lesion expansion and protects uninfected leaf tissue. Early spray at first spotting delivers curative difenoconazole action plus preventive azoxystrobin cover across the full canopy.'
    },
    {
      name: 'Fruit Rot',
      symptoms:
        'Soft, water-soaked lesions on fruits that darken and expand. Common on chilli, tomato, and horticultural produce during humid weather when spores spread by rain splash and insect movement.',
      impact:
        'Fruit rot causes direct quality losses — infected produce is rejected at market, pack-out rates fall, and pre-harvest drop reduces total harvestable volume in high-value vegetable and spice crops.',
      controlBenefits:
        'Preventive Captop sprays before and during fruit-set build systemic protection inside developing fruits. Curative difenoconazole activity at early rot signs limits spread and preserves marketable produce quality.'
    },
    {
      name: 'Sheath Blight',
      symptoms:
        'Oval greenish-grey lesions on leaf sheaths near the water line in paddy. Lesions expand and merge, causing sheath rot and weakened stems in dense, humid rice stands during tillering and panicle stages.',
      impact:
        'Sheath blight causes significant economic losses in paddy — reducing grain fill, increasing chaffy grains, and causing lodging when stem strength is compromised in high-yielding varieties.',
      controlBenefits:
        'Captop systemic movement into leaf sheaths limits Rhizoctonia solani spread. Apply at early lesion stage with uniform coverage on sheaths and lower leaves during tillering and panicle initiation.'
    }
  ];

  targetPests = [
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. Captop systemic triazole and strobilurin activity suppresses mildew development and protects new growth in chilli, grapes, and vegetables.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. Curative difenoconazole activity limits anthracnose damage on chilli, tomato, and horticultural crops at early infection stage.'
    },
    {
      name: 'Rust Disease',
      description:
        'Orange to brown pustules on leaves and stems. Dual-action Captop halts rust sporulation on groundnut and field crops when applied at early pustule appearance.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. Captop limits lesion expansion and preserves photosynthetic leaf area across tomato, cotton, and groundnut systems.'
    },
    {
      name: 'Fruit Rot',
      description:
        'Soft rotting lesions on developing fruits. Captop preventive and curative activity protects chilli, tomato, and horticultural produce during humid fruit-set windows.'
    },
    {
      name: 'Sheath Blight',
      description:
        'Greenish-grey sheath lesions in dense paddy stands. Captop systemic movement limits Rhizoctonia spread along leaf sheaths during humid growing conditions.'
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
      { label: 'Product name', value: 'Captop' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Azoxystrobin 18.2% + Difenoconazole 11.4% w/w' },
      { label: 'Chemical group', value: 'QoI (FRAC 11) + Triazole (FRAC 3)' },
      { label: 'Action type', value: 'Preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Powdery mildew, anthracnose, rust, leaf spot, fruit rot, sheath blight' },
      { label: 'Target crops', value: 'Chilli, tomato, paddy, groundnut, cotton, grapes, vegetables, horticultural crops' }
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
    { label: 'Product Name', value: 'Captop' },
    { label: 'Brand / Trade Name', value: 'Captop' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Azoxystrobin 18.2% + Difenoconazole 11.4% w/w' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'QoI (Strobilurin) + Triazole' },
    { label: 'Action Type', value: 'Preventive and curative broad-spectrum fungicide' },
    { label: 'Diseases Controlled', value: 'Powdery mildew, anthracnose, rust, leaf spot, fruit rot, sheath blight' },
    { label: 'Target Crops', value: 'Chilli, tomato, paddy, groundnut, cotton, grapes, vegetables, horticultural crops' },
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
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Captop Fungicide.'
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
      text: 'Measure exactly 20 ml per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'Chemistry (Azoxystrobin 11% + Tebuconazole 18.3% SC)',
      description: 'Dual-action systemic fungicide for rust, powdery mildew, leaf spot, anthracnose, and sheath blight control.',
      route: '/products/chemistry-azoxystrobin-11-tebuconazole-18-3-sc',
      image: 'assets/products/insecticide/azoxystrobin-11-tebuconazole-18-3-sc.jpg',
      imageAlt: 'Chemistry Azoxystrobin Tebuconazole fungicide by Harishree Crop Science'
    },
    {
      name: 'Tebuja (Tebuconazole 25.9% EC)',
      description: 'Systemic triazole fungicide for rust, powdery mildew, leaf spot, and anthracnose across multiple crops.',
      route: '/products/tebuconazole-25-9-ec-tebuja',
      image: 'assets/products/fungicide/tebuconazole-25-9--ec.jpg',
      imageAlt: 'Tebuja Tebuconazole 25.9% EC fungicide by Harishree Crop Science'
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
      question: 'What is Captop Fungicide used for?',
      answer:
        '<strong>Captop Fungicide</strong> (<strong>Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC</strong>) is used for <strong>broad-spectrum fungal disease control</strong> including powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight in chilli, tomato, paddy, groundnut, cotton, grapes, vegetables, and horticultural crops. It is a dual-action systemic fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'Captop Fungicide (Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC) is used for broad-spectrum fungal disease control including powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight in chilli, tomato, paddy, groundnut, cotton, grapes, vegetables, and horticultural crops. It is a dual-action systemic fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Azoxystrobin 18.2% + Difenoconazole 11.4% SC control?',
      answer:
        '<strong>Azoxystrobin 18.2% + Difenoconazole 11.4% w/w SC</strong> controls <strong>powdery mildew</strong>, <strong>anthracnose</strong>, <strong>rust disease</strong>, <strong>leaf spot</strong>, <strong>fruit rot</strong>, and <strong>sheath blight</strong>. Captop delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform canopy coverage.',
      answerPlain:
        'Azoxystrobin 18.2% + Difenoconazole 11.4% w/w SC controls powdery mildew, anthracnose, rust disease, leaf spot, fruit rot, and sheath blight. Captop delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform canopy coverage.'
    },
    {
      question: 'Which crops can be treated with Captop?',
      answer:
        '<strong>Captop Fungicide</strong> can be used on <strong>chilli</strong>, <strong>tomato</strong>, <strong>paddy</strong>, <strong>groundnut</strong>, <strong>cotton</strong>, <strong>grapes</strong>, <strong>vegetables</strong>, and <strong>horticultural crops</strong>. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.',
      answerPlain:
        'Captop Fungicide can be used on chilli, tomato, paddy, groundnut, cotton, grapes, vegetables, and horticultural crops. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.'
    },
    {
      question: 'What is the recommended dosage of Captop Fungicide?',
      answer:
        'The standard recommended dose of <strong>Captop Fungicide</strong> is <strong>20 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of Captop Fungicide is 20 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'How does the dual-action formulation work?',
      answer:
        '<strong>Captop</strong> combines <strong>azoxystrobin 18.2%</strong> (strobilurin) which blocks fungal mitochondrial respiration for preventive protection, and <strong>difenoconazole 11.4%</strong> (triazole) which inhibits ergosterol biosynthesis for curative control of active infections — delivering broad-spectrum effectiveness in one spray application.',
      answerPlain:
        'Captop combines azoxystrobin 18.2% (strobilurin) which blocks fungal mitochondrial respiration for preventive protection, and difenoconazole 11.4% (triazole) which inhibits ergosterol biosynthesis for curative control of active infections — delivering broad-spectrum effectiveness in one spray application.'
    },
    {
      question: 'Is Captop preventive or curative?',
      answer:
        '<strong>Captop Fungicide</strong> provides <strong>both preventive and curative action</strong>. Azoxystrobin builds protective defence before disease spreads, while Difenoconazole stops existing fungal infections — making it an ideal dual-action fungicide for long-lasting disease control across multiple crop systems.',
      answerPlain:
        'Captop Fungicide provides both preventive and curative action. Azoxystrobin builds protective defence before disease spreads, while Difenoconazole stops existing fungal infections — making it an ideal dual-action fungicide for long-lasting disease control across multiple crop systems.'
    },
    {
      question: 'When should Captop be sprayed?',
      answer:
        'Spray <strong>Captop</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.',
      answerPlain:
        'Spray Captop at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, sheaths, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.'
    },
    {
      question: 'Why choose Captop over ordinary fungicides?',
      answer:
        '<strong>Captop</strong> offers <strong>dual-action technology</strong> with two complementary actives, <strong>broad-spectrum disease control</strong> across multiple crops, <strong>long-lasting systemic protection</strong>, and <strong>better return on investment</strong> at ₹690 for the best-selling 500 ml pack — outperforming ordinary single-active fungicides in mixed disease pressure situations.',
      answerPlain:
        'Captop offers dual-action technology with two complementary actives, broad-spectrum disease control across multiple crops, long-lasting systemic protection, and better return on investment at ₹690 for the best-selling 500 ml pack — outperforming ordinary single-active fungicides in mixed disease pressure situations.'
    }
  ];

  testimonials = [
    {
      name: 'Mahesh Patel',
      location: 'Gujarat',
      text:
        'I applied Captop on my groundnut when rust and leaf spot started after the rains. The lesions stopped spreading within days and the crop stayed greener through pod fill. Disease pressure was clearly lower at harvest compared to the previous season, and the 20 ml per pump dose is straightforward to follow in the field.',
      rating: 5
    },
    {
      name: 'Anil',
      location: 'Maharashtra',
      text:
        'Captop helped control powdery mildew and fruit rot in my chilli field during the humid kharif season. Pod quality improved noticeably and I received better rates at the market. The dual-action formula gave reliable protection when I needed it most — definitely better fruit quality and yield this season.',
      rating: 5
    },
    {
      name: 'Prakash ',
      location: 'Karnataka',
      text:
        'Sheath blight was building in my paddy plot while neighbouring fields were already affected. One timely Captop spray at early stage protected my crop through grain fill. The investment paid off with healthier panicles and noticeably better profitability at harvest compared to last year.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '72',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Captop.' },
    { name: 'Measure Captop', text: 'Accurately measure 20 ml of Azoxystrobin 18.2% + Difenoconazole 11.4% w/w SC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, sheaths, and fruits where mildew, rust, and leaf spot develop.' },
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
        'Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC Captop Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Dual Action Systemic Fungicide for Anthracnose, Powdery Mildew, Rust, Leaf Spot and Fruit Rot Control',
      description:
        'Captop (Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC) by Harishree Crop Science is a dual-action systemic fungicide for powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight. Dose: 20 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'Captop Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'CAPTOP-AZOXYS-DIFENOCONAZOLE-SC',
      mpn: 'CAPTOP-AZOXYS-DIFENOCONAZOLE-SC',
      dose: '20 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Captop (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Captop (Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC) for foliar application at 20 ml/pump.',
      alternateNames: [
        'Captop',
        'Captop Fungicide',
        'Azoxystrobin Difenoconazole Fungicide',
        'Broad Spectrum Fungicide',
        'Systemic Fungicide',
        'Dual Action Fungicide',
        'Preventive and Curative Fungicide',
        'Fungicide for Anthracnose',
        'Fungicide for Powdery Mildew',
        'Fungicide for Rust Disease',
        'Fungicide for Leaf Spot',
        'Fungicide for Fruit Rot',
        'Chilli Fungicide',
        'Tomato Fungicide',
        'Paddy Fungicide',
        'Groundnut Fungicide',
        'Cotton Fungicide',
        'Best Fungicide for Fungal Diseases',
        'Crop Protection Fungicide',
        'Long Lasting Disease Control',
        'Fungicide for Vegetables',
        'Fungicide for Horticultural Crops'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Captop (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'Captop Azoxystrobin + Difenoconazole SC delivers broad-spectrum disease control for chilli, tomato, paddy, groundnut & grapes. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC | Captop',
        description: desc,
        keywords:
          'Azoxystrobin 18.2% w/w + Difenoconazole 11.4% w/w SC, Captop Fungicide, Azoxystrobin Difenoconazole Fungicide, Broad Spectrum Fungicide, Systemic Fungicide, Dual Action Fungicide, Preventive and Curative Fungicide, Fungicide for Anthracnose, Fungicide for Powdery Mildew, Fungicide for Rust Disease, Fungicide for Leaf Spot, Fungicide for Fruit Rot, Chilli Fungicide, Tomato Fungicide, Paddy Fungicide, Groundnut Fungicide, Cotton Fungicide, Best Fungicide for Fungal Diseases, Crop Protection Fungicide, Long Lasting Disease Control, Fungicide for Vegetables, Fungicide for Horticultural Crops, Captop, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC (Captop) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Captop | Azoxystrobin + Difenoconazole Fungicide',
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
