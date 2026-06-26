import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'GALION_WAY_PICOXYSTROBIN_PROPICONAZOLE_SC';
const INDICATIVE_LIST_PRICE_INR = 437;

@Component({
  selector: 'app-picoxystrobin-7-05-propiconazole-11-71-sc-galion-way',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './picoxystrobin-7-05-propiconazole-11-71-sc-galion-way.component.html',
  styleUrl: './picoxystrobin-7-05-propiconazole-11-71-sc-galion-way.component.scss'
})
export class PicoxystrobinPropiconazoleScGalionWayComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/picoxystrobin-propiconazole-sc-galion-way';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/picoxystrobin-7-05-propiconazole-11-71-sc.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Picoxystrobin 7.05% + Propiconazole 11.71% SC';
  brandName = 'GALION WAY';

  featuredSnippetAnswer =
    'GALION WAY (Picoxystrobin 7.05% + Propiconazole 11.71% SC) is a dual-action broad-spectrum strobilurin plus triazole fungicide by Harishree Crop Science for preventive and curative control of blast, rust, leaf spot, alternaria, anthracnose, sheath blight, powdery mildew, and disease complex across paddy, wheat, soybean, groundnut, maize, cotton, chilli, and tomato. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '500 ml', price: 437, featured: true, sku: 'GALIONWAY-500ML' },
    { volume: '1 Ltr', price: 230, featured: false, sku: 'GALIONWAY-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredients',
      description:
        'GALION WAY combines Picoxystrobin 7.05% and Propiconazole 11.71% SC — strobilurin plus triazole chemistry in one suspension concentrate for dependable broad-spectrum fungicide protection.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One GALION WAY spray manages blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew — reducing the need for multiple single-disease products in mixed infection seasons.',
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
        'Picoxystrobin disrupts fungal respiration before disease establishes — ideal for preventive crop protection programs when humid weather favours rapid pathogen spread.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Propiconazole inhibits ergosterol biosynthesis to halt active infections when sprayed at early disease appearance with uniform canopy coverage across the field.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual effect',
      description:
        'Systemic activity inside plant tissue maintains protection between scheduled spray intervals during critical tillering, flowering, and grain-fill stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the SC spray deposit dries on foliage, GALION WAY adheres well and maintains activity even after light rainfall events during the monsoon spray window.',
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
        'Cleaner grains, pods, and fruits with reduced disease scarring improve marketability in paddy, soybean, groundnut, chilli, and tomato programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely fungal disease control preserves leaves, flowers, and grains — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Dual-action technology',
      description:
        'Picoxystrobin and Propiconazole work through complementary biochemical pathways — mitochondrial respiration blockade plus ergosterol inhibition — delivering broader disease control than single-active fungicides in one spray tank.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'GALION WAY Fungicide manages blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew across multiple crops instead of relying on separate products for each disease complex in the field.',
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
        'Competitive pricing at the best-selling 500 ml pack, crop-safe application at the recommended 30 ml per pump dose, and higher productivity benefits deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'GALION WAY controls blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew — the most common fungal threats across Indian field and horticultural crops in one dependable formulation.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive protection',
      description:
        'Picoxystrobin 7.05% builds a protective barrier on treated foliage before pathogens establish — ideal for scheduled preventive sprays when weather forecasts favour disease development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative activity',
      description:
        'Propiconazole 11.71% stops active fungal infections at early lesion stage, halting spore production and lesion expansion when growers spot the first signs of disease pressure.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Strong systemic action',
      description:
        'Both actives translocate through vascular channels after foliar uptake, protecting new shoots, developing grains, and internal plant parts from fungal attack between spray rounds.',
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
        'By controlling leaf spot, rust, blast, and mildew that scar produce, GALION WAY helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaves, flowers, and grains during reproductive stages helps preserve yield when blast, rust, or sheath blight pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on paddy grains, soybean pods, chilli fruits, and tomato produce improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely GALION WAY application limits defoliation, grain chaffiness, and yield drop — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable dual-action protection at a farmer-friendly dose of 30 ml per pump helps growers protect yield and quality, translating disease control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'GALION WAY Fungicide is a premium broad-spectrum systemic fungicide from HARISHREE CROP SCIENCE, formulated as Picoxystrobin 7.05% + Propiconazole 11.71% SC. Indian growers face increasing pressure from blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew — diseases that strip leaf area, scar produce, and cut yields when left unchecked. Combination fungicides like GALION WAY are trusted because they pair preventive protection with curative action in a single tank mix, simplifying field programs while covering a wider disease spectrum than most single-active products.';

  aboutOverview =
    'The suspension concentrate (SC) formulation disperses evenly in water for uniform foliar coverage on leaves, sheaths, stems, and grains. GALION WAY is engineered for crop safety when used at the recommended 30 ml per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across paddy, wheat, soybean, groundnut, maize, cotton, chilli, and tomato. For agronomists and dealers, GALION WAY represents a dependable dual-action crop protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutPicoxystrobin =
    'Picoxystrobin 7.05% belongs to the strobilurin (QoI, FRAC Group 11) chemical family. It works by blocking mitochondrial respiration in fungal cells — specifically inhibiting the cytochrome bc1 complex — which stops energy production and prevents fungal growth and spore formation. This delivers strong preventive protection on treated foliage and builds internal defence when the active is absorbed into plant tissue, making it especially valuable before infection spreads through a humid canopy.';

  aboutPropiconazole =
    'Propiconazole 11.71% is a triazole fungicide (FRAC Group 3) that inhibits ergosterol biosynthesis — a critical component of fungal cell membranes. Without ergosterol, the pathogen cannot maintain cell wall integrity, halting growth of existing infections. This provides curative and systemic control, reaching disease lesions that contact fungicides alone may miss and delivering the curative backbone growers need when disease is already visible in the field.';

  aboutCombined =
    'Together, Picoxystrobin 7.05% and Propiconazole 11.71% deliver broad-spectrum disease protection with preventive and curative benefits, long-lasting control, and improved resistance management through two distinct biochemical pathways. Farmers spraying GALION WAY at early disease appearance gain both immediate lesion suppression and extended residual protection — a combination that single-active fungicides struggle to match across mixed disease pressure in paddy, wheat, soybean, groundnut, maize, cotton, chilli, and tomato programs.';

  targetCropsTable = [
    { crop: 'Paddy', diseases: 'Blast, Sheath Blight' },
    { crop: 'Wheat', diseases: 'Rust, Leaf Spot' },
    { crop: 'Soybean', diseases: 'Rust, Anthracnose' },
    { crop: 'Groundnut', diseases: 'Leaf Spot, Rust' },
    { crop: 'Maize', diseases: 'Leaf Spot, Disease Complex' },
    { crop: 'Cotton', diseases: 'Alternaria, Leaf Spot' },
    { crop: 'Chilli', diseases: 'Anthracnose, Powdery Mildew' },
    { crop: 'Tomato', diseases: 'Early Blight, Leaf Spot' }
  ];

  diseaseDetails = [
    {
      name: 'Blast',
      symptoms:
        'Spindle-shaped greyish lesions with dark borders on leaves, and dark lesions on nodes, neck, and panicle in paddy. Severe infection causes neck rot and whitening of panicles during humid weather.',
      impact:
        'Blast is one of the most destructive paddy diseases — it reduces grain fill, causes chaffy grains, and can cause severe yield loss when neck and panicle infection occurs at the reproductive stage.',
      controlBenefits:
        'GALION WAY suppresses blast through systemic propiconazole activity and picoxystrobin respiration inhibition. Spray at early lesion stage and again at boot-leaf to panicle stage for best long-lasting disease control.'
    },
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist growing conditions in wheat, soybean, and groundnut.',
      impact:
        'Rust destroys leaf area essential for grain and pod filling. Severe infections can reduce yield significantly if not controlled at early pustule stage in field and oilseed crops.',
      controlBenefits:
        'Picoxystrobin 7.05% + Propiconazole 11.71% SC halts rust sporulation and limits pustule spread. Apply when first pustules appear — systemic movement protects new foliage between scheduled sprays.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation across groundnut, wheat, and tomato stands.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during extended wet periods.',
      controlBenefits:
        'GALION WAY limits lesion expansion and protects uninfected leaf tissue. Early spray at first spotting delivers curative propiconazole action plus preventive picoxystrobin cover across the full canopy.'
    },
    {
      name: 'Alternaria',
      symptoms:
        'Dark brown concentric-ring spots on leaves and stems that enlarge and merge. Common on tomato, cotton, and vegetable crops, causing blighting and defoliation during humid conditions.',
      impact:
        'Alternaria reduces leaf area, weakens plants, and scars fruits and produce — lowering both yield and market quality when the disease spreads rapidly through the canopy.',
      controlBenefits:
        'Dual-action GALION WAY interrupts the alternaria disease cycle by stopping active infections and preventing new spore production. Time sprays at early symptom appearance for maximum crop protection.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions. Infected chilli fruits and soybean produce become unmarketable when lesions expand rapidly.',
      impact:
        'Anthracnose damages produce appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense crop canopies during monsoon.',
      controlBenefits:
        'GALION WAY interrupts the anthracnose cycle by stopping active infections and preventing new spore production. Time sprays before flowering and at early fruit-set for maximum crop protection.'
    },
    {
      name: 'Sheath Blight',
      symptoms:
        'Oval greenish-grey lesions on leaf sheaths near the water line in paddy. Lesions expand and merge, causing sheath rot and weakened stems in dense, humid rice stands during tillering and panicle stages.',
      impact:
        'Sheath blight causes significant economic losses in paddy — reducing grain fill, increasing chaffy grains, and causing lodging when stem strength is compromised in high-yielding varieties.',
      controlBenefits:
        'GALION WAY systemic movement into leaf sheaths limits Rhizoctonia solani spread. Apply at early lesion stage with uniform coverage on sheaths and lower leaves during tillering and panicle initiation.'
    }
  ];

  targetPests = [
    {
      name: 'Blast',
      description:
        'Spindle-shaped lesions and neck rot in paddy. GALION WAY systemic triazole and strobilurin activity suppresses blast development and protects panicles during humid conditions.'
    },
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. Dual-action GALION WAY halts rust sporulation on wheat, soybean, and groundnut when applied at early pustule appearance.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. GALION WAY limits lesion expansion and preserves photosynthetic leaf area across groundnut, wheat, and tomato systems.'
    },
    {
      name: 'Alternaria',
      description:
        'Concentric-ring dark spots on leaves and stems. GALION WAY preventive and curative activity limits alternaria damage on tomato, cotton, and vegetables during humid spells.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. Curative propiconazole activity limits anthracnose damage on chilli, soybean, and horticultural crops at early infection stage.'
    },
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. GALION WAY systemic activity suppresses mildew development and protects new growth in chilli, wheat, and vegetables.'
    },
    {
      name: 'Sheath Blight',
      description:
        'Greenish-grey sheath lesions in dense paddy stands. GALION WAY systemic movement limits Rhizoctonia spread along leaf sheaths during humid growing conditions.'
    },
    {
      name: 'Disease Complex',
      description:
        'Mixed fungal infections in field and horticultural crops. GALION WAY broad-spectrum dual-action chemistry manages combined disease pressure in a single spray program.'
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
      { label: 'Product name', value: 'GALION WAY' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Picoxystrobin 7.05% + Propiconazole 11.71%' },
      { label: 'Chemical group', value: 'QoI (FRAC 11) + Triazole (FRAC 3)' },
      { label: 'Action type', value: 'Preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Blast, rust, leaf spot, alternaria, anthracnose, sheath blight, powdery mildew' },
      { label: 'Target crops', value: 'Paddy, wheat, soybean, groundnut, maize, cotton, chilli, tomato' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, sheaths, and grains' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'GALION WAY' },
    { label: 'Brand / Trade Name', value: 'GALION WAY' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Picoxystrobin 7.05% + Propiconazole 11.71%' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'QoI (Strobilurin) + Triazole' },
    { label: 'Action Type', value: 'Preventive and curative broad-spectrum fungicide' },
    { label: 'Diseases Controlled', value: 'Blast, rust, leaf spot, alternaria, anthracnose, sheath blight, powdery mildew' },
    { label: 'Target Crops', value: 'Paddy, wheat, soybean, groundnut, maize, cotton, chilli, tomato' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (500 ml, 1 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying GALION WAY Fungicide.'
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
      text: 'Measure exactly 30 ml per pump. Over-dosing does not improve disease control and may increase crop safety risk.'
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
      name: 'Captop (Azoxystrobin 18.2% + Difenoconazole 11.4% SC)',
      description: 'Dual-action systemic fungicide for powdery mildew, anthracnose, rust, leaf spot, and sheath blight.',
      route: '/products/captop-azoxystrobin-18-2-difenoconazole-11-4-sc',
      image: 'assets/products/fungicide/azoxystrobin-18-2-difenoconazole-11-4-sc.jpg',
      imageAlt: 'Captop Azoxystrobin Difenoconazole fungicide by Harishree Crop Science'
    },
    {
      name: 'H-Tilt (Propiconazole 25% EC)',
      description: 'Systemic triazole fungicide for rusts, leaf spots, and sheath blight across cereals and horticultural crops.',
      route: '/products/propiconazole-25-ec-h-tilt',
      image: 'assets/products/fungicide/propiconazole-25-ec.jpg',
      imageAlt: 'H-Tilt Propiconazole 25% EC fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is GALION WAY Fungicide used for?',
      answer:
        '<strong>GALION WAY Fungicide</strong> (<strong>Picoxystrobin 7.05% + Propiconazole 11.71% SC</strong>) is used for <strong>broad-spectrum fungal disease control</strong> including blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew in paddy, wheat, soybean, groundnut, maize, cotton, chilli, and tomato. It is a dual-action systemic fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'GALION WAY Fungicide (Picoxystrobin 7.05% + Propiconazole 11.71% SC) is used for broad-spectrum fungal disease control including blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew in paddy, wheat, soybean, groundnut, maize, cotton, chilli, and tomato. It is a dual-action systemic fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases does Picoxystrobin 7.05% + Propiconazole 11.71% SC control?',
      answer:
        '<strong>Picoxystrobin 7.05% + Propiconazole 11.71% SC</strong> controls <strong>blast</strong>, <strong>rust</strong>, <strong>leaf spot</strong>, <strong>alternaria</strong>, <strong>anthracnose</strong>, <strong>sheath blight</strong>, and <strong>powdery mildew</strong>. GALION WAY delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform canopy coverage.',
      answerPlain:
        'Picoxystrobin 7.05% + Propiconazole 11.71% SC controls blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew. GALION WAY delivers both preventive and curative activity against these fungal pathogens when applied at early disease appearance with uniform canopy coverage.'
    },
    {
      question: 'Which crops can be treated with GALION WAY?',
      answer:
        '<strong>GALION WAY Fungicide</strong> can be used on <strong>paddy</strong>, <strong>wheat</strong>, <strong>soybean</strong>, <strong>groundnut</strong>, <strong>maize</strong>, <strong>cotton</strong>, <strong>chilli</strong>, and <strong>tomato</strong>. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.',
      answerPlain:
        'GALION WAY Fungicide can be used on paddy, wheat, soybean, groundnut, maize, cotton, chilli, and tomato. It is a versatile crop protection fungicide for field and horticultural programs facing mixed fungal disease pressure during the growing season.'
    },
    {
      question: 'What is the recommended dosage of GALION WAY Fungicide?',
      answer:
        'The standard recommended dose of <strong>GALION WAY Fungicide</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of GALION WAY Fungicide is 30 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'How does the strobilurin + triazole formulation work?',
      answer:
        '<strong>GALION WAY</strong> combines <strong>picoxystrobin 7.05%</strong> (strobilurin) which blocks fungal mitochondrial respiration for preventive protection, and <strong>propiconazole 11.71%</strong> (triazole) which inhibits ergosterol biosynthesis for curative control of active infections — delivering broad-spectrum effectiveness in one spray application.',
      answerPlain:
        'GALION WAY combines picoxystrobin 7.05% (strobilurin) which blocks fungal mitochondrial respiration for preventive protection, and propiconazole 11.71% (triazole) which inhibits ergosterol biosynthesis for curative control of active infections — delivering broad-spectrum effectiveness in one spray application.'
    },
    {
      question: 'Is GALION WAY good for blast disease in paddy?',
      answer:
        'Yes. <strong>GALION WAY</strong> is highly effective for <strong>blast disease</strong> in paddy. Its systemic strobilurin + triazole chemistry controls leaf blast and neck blast when sprayed at early lesion stage and again at boot-leaf to panicle stage with uniform coverage.',
      answerPlain:
        'Yes. GALION WAY is highly effective for blast disease in paddy. Its systemic strobilurin + triazole chemistry controls leaf blast and neck blast when sprayed at early lesion stage and again at boot-leaf to panicle stage with uniform coverage.'
    },
    {
      question: 'When should GALION WAY be sprayed?',
      answer:
        'Spray <strong>GALION WAY</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, sheaths, and grains. Repeat based on disease pressure and label guidance during high-humidity periods.',
      answerPlain:
        'Spray GALION WAY at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, sheaths, and grains. Repeat based on disease pressure and label guidance during high-humidity periods.'
    },
    {
      question: 'Why choose GALION WAY over ordinary fungicides?',
      answer:
        '<strong>GALION WAY</strong> offers <strong>dual-action technology</strong> with two complementary actives, <strong>broad-spectrum disease control</strong> across multiple crops, <strong>long-lasting systemic protection</strong>, and <strong>better return on investment</strong> at the best-selling 500 ml pack — outperforming ordinary single-active fungicides in mixed disease pressure situations.',
      answerPlain:
        'GALION WAY offers dual-action technology with two complementary actives, broad-spectrum disease control across multiple crops, long-lasting systemic protection, and better return on investment at the best-selling 500 ml pack — outperforming ordinary single-active fungicides in mixed disease pressure situations.'
    }
  ];

  testimonials = [
    {
      name: 'Ramesh',
      location: 'Madhya Pradesh',
      text:
        'I sprayed GALION WAY on my paddy when leaf blast started spreading after the rains. The lesions stopped and the crop stayed green right through panicle stage. Neck blast was clearly lower at harvest compared to last season, and the 30 ml per pump dose is easy to follow in the field.',
      rating: 5
    },
    {
      name: 'Suresh',
      location: 'Maharashtra',
      text:
        'GALION WAY controlled rust and leaf spot in my soybean during the humid kharif season. The leaves stayed healthier for longer and pod fill improved noticeably. The dual-action formula gave reliable protection and I got better grain quality and yield this year.',
      rating: 5
    },
    {
      name: 'Mahesh',
      location: 'Karnataka',
      text:
        'Disease complex was building in my groundnut while neighbouring fields were already affected. One timely GALION WAY spray at early stage protected my crop through pod fill. The investment paid off with healthier foliage and noticeably better profitability at harvest.',
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
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding GALION WAY.' },
    { name: 'Measure GALION WAY', text: 'Accurately measure 30 ml of Picoxystrobin 7.05% + Propiconazole 11.71% SC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, sheaths, and grains where blast, rust, and leaf spot develop.' },
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
        'Picoxystrobin 7.05% + Propiconazole 11.71% SC GALION WAY Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Dual Action Strobilurin + Triazole Fungicide for Blast, Rust, Leaf Spot, Alternaria and Sheath Blight Control',
      description:
        'GALION WAY (Picoxystrobin 7.05% + Propiconazole 11.71% SC) by Harishree Crop Science is a dual-action systemic fungicide for blast, rust, leaf spot, alternaria, anthracnose, sheath blight, and powdery mildew. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Fungicide',
      sku: 'GALIONWAY-PICOXYSTROBIN-PROPICONAZOLE-SC',
      mpn: 'GALIONWAY-PICOXYSTROBIN-PROPICONAZOLE-SC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply GALION WAY (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of GALION WAY (Picoxystrobin 7.05% + Propiconazole 11.71% SC) for foliar application at 30 ml/pump.',
      alternateNames: ['GALION WAY', this.productTitle],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `GALION WAY (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'GALION WAY Picoxystrobin + Propiconazole SC delivers broad-spectrum control of blast, rust, leaf spot & sheath blight for paddy, wheat & soybean. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Picoxystrobin 7.05% + Propiconazole 11.71% SC | GALION WAY',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Picoxystrobin 7.05% + Propiconazole 11.71% SC (GALION WAY) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'GALION WAY | Picoxystrobin + Propiconazole Fungicide',
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
