import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'KING_AZOXYS_CHLOROTHALONIL_SC';
const INDICATIVE_LIST_PRICE_INR = 366;

@Component({
  selector: 'app-azoxystrobin-4-8-chlorothalonil-40-sc-king',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './azoxystrobin-4-8-chlorothalonil-40-sc-king.component.html',
  styleUrl: './azoxystrobin-4-8-chlorothalonil-40-sc-king.component.scss'
})
export class Azoxystrobin48Chlorothalonil40ScKingComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/azoxystrobin-4-8-chlorothalonil-40-sc-king';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/azoxystrobin-4-8-w-w-chlorothalonil-40-0-w-w-sc.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC';
  brandName = 'King';

  featuredSnippetAnswer =
    'King (Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC) is a broad-spectrum systemic plus contact fungicide by Harishree Crop Science for preventive and curative control of early blight, late blight, leaf spot, rust, anthracnose, downy mildew, and Alternaria across tomato, potato, chilli, onion, grapes, mango, cucumber, and brinjal. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '300 ml', price: 366, featured: true, sku: 'KING-300ML' },
    { volume: '600 ml', price: 708, featured: false, sku: 'KING-600ML' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredients',
      description:
        'King combines Azoxystrobin 4.8% and Chlorothalonil 40.0% w/w SC — strobilurin plus multi-site chloronitrile chemistry in one suspension concentrate for dependable broad-spectrum fungicide protection.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'One King spray manages early blight, late blight, leaf spot, rust, anthracnose, and downy mildew — reducing the need for multiple single-disease products in mixed infection seasons.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic plus contact action',
      description:
        'Azoxystrobin absorbs into foliage and protects new growth, while Chlorothalonil forms a protective contact shield on leaf surfaces — covering fungal infections that systemic-only sprays may miss.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive action',
      description:
        'Chlorothalonil builds a protective barrier on treated foliage before disease establishes — ideal for preventive crop protection programs when humid weather favours rapid pathogen spread.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Azoxystrobin disrupts fungal respiration and halts spore development when sprayed at early disease appearance with uniform canopy coverage across the field.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual effect',
      description:
        'Combined systemic and contact activity maintains protection between scheduled spray intervals during critical flowering, fruit-set, and tuber-bulking stages.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the SC spray deposit dries on foliage, King adheres well and maintains activity even after light rainfall events during the monsoon spray window.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier green leaf area supports stronger vegetative growth and fruiting — essential when blight and leaf spot pressure threatens mid-season crop development.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner fruits, tubers, and bunches with reduced disease scarring improve marketability in tomato, potato, grapes, and vegetable programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely fungal disease control preserves leaves, flowers, and fruits — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Dual-action technology',
      description:
        'Azoxystrobin and Chlorothalonil work through complementary pathways — mitochondrial respiration blockade plus multi-site protective contact action — delivering broader disease control than single-active fungicides in one spray tank.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'King Fungicide manages early blight, late blight, leaf spot, rust, anthracnose, and downy mildew across multiple crops instead of relying on separate products for each disease complex in the field.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long-lasting protection',
      description:
        'Systemic movement plus a durable contact deposit maintains preventive and curative activity between spray intervals — reducing application frequency during high-pressure seasons when weather favours infection.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at ₹366 for the popular 300 ml pack, crop-safe application at the recommended 30 ml per pump dose, and higher productivity benefits deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'King controls early blight, late blight, leaf spot, rust, anthracnose, and downy mildew — the most common fungal threats across Indian vegetable and fruit crops in one dependable formulation.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Preventive protection',
      description:
        'Chlorothalonil 40.0% builds a protective barrier on treated foliage before pathogens establish — ideal for scheduled preventive sprays when weather forecasts favour disease development.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative activity',
      description:
        'Azoxystrobin 4.8% stops active fungal infections at early lesion stage, halting spore production and lesion expansion when growers spot the first signs of disease pressure.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Strong systemic plus contact action',
      description:
        'Azoxystrobin translocates after foliar uptake to protect new growth, while Chlorothalonil shields leaf surfaces — together covering internal and external fungal attack between spray rounds.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease-free foliage supports stronger photosynthesis, better plant growth, and more uniform crop development through the season when fungal pathogens threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better disease resistance management',
      description:
        'Combining strobilurin and multi-site contact chemistry in one formulation supports rotation-friendly disease programs compared to repeated sprays of a single mode-of-action product.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Long residual effect',
      description:
        'Extended systemic plus contact activity reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows across kharif and rabi seasons.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling leaf spot, rust, blight, and downy mildew that scar produce, King helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaves, flowers, and fruits during reproductive stages helps preserve yield when blight, rust, or anthracnose pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease scarring on tomato fruits, potato tubers, grape bunches, and vegetable harvests improves pack-out rates and buyer acceptance at mandi and contract markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely King application limits defoliation, fruit drop, and produce rejection — protecting the grower\'s investment in seed, fertilizer, irrigation, and land preparation.',
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
    'King Fungicide is a premium broad-spectrum fungicide from HARISHREE CROP SCIENCE, formulated as Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC. Indian growers face increasing pressure from early blight, late blight, leaf spot, rust, anthracnose, and downy mildew — diseases that strip leaf area, scar produce, and cut yields when left unchecked. Combination fungicides like King are trusted because they pair preventive protection with curative action in a single tank mix, simplifying field programs while covering a wider disease spectrum than most single-active products.';

  aboutOverview =
    'The suspension concentrate (SC) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and fruiting parts. King is engineered for crop safety when used at the recommended 30 ml per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across tomato, potato, chilli, onion, grapes, mango, cucumber, and brinjal. For agronomists and dealers, King represents a dependable dual-action crop protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutAzoxystrobin =
    'Azoxystrobin 4.8% belongs to the strobilurin (QoI, FRAC Group 11) chemical family. It works by blocking mitochondrial respiration in fungal cells — specifically inhibiting the cytochrome bc1 complex — which stops energy production and prevents fungal growth and spore germination. This delivers strong preventive protection on treated foliage and builds internal defence when the active is absorbed into plant tissue, making it especially valuable before infection spreads through a humid canopy.';

  aboutChlorothalonil =
    'Chlorothalonil 40.0% is a chloronitrile, multi-site contact fungicide (FRAC Group M05) that disrupts several enzyme systems essential to fungal cell function. Because it acts at multiple sites, it forms a durable protective shield on the leaf surface, stopping spore germination before pathogens can penetrate plant tissue. This broad, non-systemic protective action complements Azoxystrobin and provides the multi-site backbone growers rely on for resistance-friendly disease programs.';

  aboutCombined =
    'Together, Azoxystrobin 4.8% and Chlorothalonil 40.0% deliver broad-spectrum disease protection with preventive and curative benefits, long-lasting control, and improved resistance management through two distinct modes of action. Farmers spraying King at early disease appearance gain both protective surface cover and systemic lesion suppression — a combination that single-active fungicides struggle to match across mixed disease pressure in tomato, potato, chilli, onion, grapes, mango, cucumber, and brinjal programs.';

  targetCropsTable = [
    { crop: 'Tomato', diseases: 'Early Blight, Late Blight, Leaf Spot' },
    { crop: 'Potato', diseases: 'Early Blight, Late Blight' },
    { crop: 'Chilli', diseases: 'Anthracnose, Leaf Spot' },
    { crop: 'Onion', diseases: 'Purple Blotch, Downy Mildew' },
    { crop: 'Grapes', diseases: 'Downy Mildew, Anthracnose' },
    { crop: 'Mango', diseases: 'Anthracnose, Powdery Mildew' },
    { crop: 'Cucumber', diseases: 'Downy Mildew, Leaf Spot' },
    { crop: 'Brinjal', diseases: 'Leaf Spot, Fruit Rot' }
  ];

  diseaseDetails = [
    {
      name: 'Early Blight',
      symptoms:
        'Dark brown concentric ring spots (target-board pattern) on older leaves, stems, and fruits. Affected leaves yellow and drop, exposing fruits and tubers to sunscald and secondary rot during warm, humid weather.',
      impact:
        'Early blight reduces leaf area, weakens plants, and scars tomato and potato produce — cutting marketable yield and tuber quality when the disease runs unchecked through the crop canopy.',
      controlBenefits:
        'King suppresses early blight through Chlorothalonil protective cover and Azoxystrobin respiration inhibition. Spray at first visible lesions with full canopy coverage for best long-lasting disease control.'
    },
    {
      name: 'Late Blight',
      symptoms:
        'Water-soaked greyish-green patches on leaves that rapidly turn brown and necrotic, often with white fungal growth on the underside in humid conditions. Spreads explosively to stems and fruits or tubers.',
      impact:
        'Late blight is among the most destructive diseases of potato and tomato, capable of destroying entire fields within days under cool, wet conditions and causing severe tuber and fruit rot.',
      controlBenefits:
        'Dual-action King interrupts the late blight cycle with protective Chlorothalonil cover and systemic Azoxystrobin activity. Apply preventively before forecast wet weather and at first lesion appearance.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation across tomato, cucumber, and brinjal stands.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during extended wet periods.',
      controlBenefits:
        'King limits lesion expansion and protects uninfected leaf tissue. Early spray at first spotting delivers curative Azoxystrobin action plus preventive Chlorothalonil cover across the full canopy.'
    },
    {
      name: 'Rust Disease',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist growing conditions in vegetable and field crops.',
      impact:
        'Rust destroys leaf area essential for flowering and fruit filling. Severe infections can reduce yield significantly if not controlled at the early pustule stage.',
      controlBenefits:
        'Azoxystrobin 4.8% + Chlorothalonil 40.0% w/w SC halts rust sporulation and limits pustule spread. Apply when first pustules appear — systemic movement protects new foliage between scheduled sprays.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions. Infected chilli, grape, and mango produce becomes unmarketable when lesions expand rapidly.',
      impact:
        'Anthracnose damages fruit appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense crop canopies during monsoon.',
      controlBenefits:
        'Dual-action King interrupts the anthracnose disease cycle by stopping active infections and preventing new spore production. Time sprays before flowering and at early fruit-set for maximum crop protection.'
    },
    {
      name: 'Downy Mildew',
      symptoms:
        'Yellow angular patches on upper leaf surfaces with greyish or purplish fungal growth underneath during humid weather. Severe infections cause rapid leaf death in grapes, cucumber, and onion crops.',
      impact:
        'Downy mildew spreads explosively in cool, moist conditions, destroying foliage and reducing photosynthesis — directly cutting bunch, bulb, and fruit yield and quality if not managed early.',
      controlBenefits:
        'King provides protective Chlorothalonil cover and systemic Azoxystrobin activity against downy mildew. Apply preventively in humid weather and cover leaf undersides where the pathogen develops.'
    },
    {
      name: 'Alternaria',
      symptoms:
        'Brown to black spots with concentric rings on leaves, stems, and fruits, often coalescing into large blighted areas. Causes leaf drop and fruit lesions in tomato, potato, onion, and brinjal.',
      impact:
        'Alternaria leaf blight reduces canopy health and scars produce, lowering both yield and grade. Infected onion bulbs and tomato fruits face higher rejection at market under heavy disease pressure.',
      controlBenefits:
        'King limits Alternaria lesion development with multi-site Chlorothalonil protection and Azoxystrobin sporulation control. Spray at early symptom appearance with uniform coverage across the canopy.'
    },
    {
      name: 'Fungal Complex Diseases',
      symptoms:
        'Mixed infections of blight, leaf spot, rust, and mildew appearing together on the same crop during prolonged humid or wet weather, producing varied lesions across leaves, stems, and fruits.',
      impact:
        'Fungal complex pressure compounds yield and quality losses because multiple pathogens attack the crop simultaneously, often overwhelming single-action sprays during high-humidity seasons.',
      controlBenefits:
        'King\'s broad-spectrum dual action covers a wide fungal complex in one spray, reducing the need for multiple products. Apply at early disease onset with thorough, uniform canopy coverage.'
    }
  ];

  targetPests = [
    {
      name: 'Early Blight',
      description:
        'Concentric ring spots on leaves and fruits. King protective and systemic activity suppresses early blight development and protects new growth in tomato and potato crops.'
    },
    {
      name: 'Late Blight',
      description:
        'Rapidly spreading water-soaked lesions. Dual-action King halts late blight on potato and tomato when applied preventively before and during cool, wet weather windows.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. King limits lesion expansion and preserves photosynthetic leaf area across tomato, cucumber, and brinjal systems.'
    },
    {
      name: 'Rust Disease',
      description:
        'Orange to brown pustules on leaves and stems. Dual-action King halts rust sporulation on vegetable crops when applied at early pustule appearance.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. King protective and curative activity limits anthracnose damage on chilli, grapes, and mango at early infection stage.'
    },
    {
      name: 'Downy Mildew',
      description:
        'Yellow patches with greyish growth underneath. King multi-site and systemic action limits downy mildew spread in grapes, cucumber, and onion during humid conditions.'
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
      { label: 'Product name', value: 'King' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredients', value: 'Azoxystrobin 4.8% + Chlorothalonil 40.0% w/w' },
      { label: 'Chemical group', value: 'QoI (FRAC 11) + Chloronitrile (FRAC M05)' },
      { label: 'Action type', value: 'Preventive and curative disease control' },
      { label: 'Diseases controlled', value: 'Early blight, late blight, leaf spot, rust, anthracnose, downy mildew, Alternaria' },
      { label: 'Target crops', value: 'Tomato, potato, chilli, onion, grapes, mango, cucumber, brinjal' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 300 ml, 600 ml' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'King' },
    { label: 'Brand / Trade Name', value: 'King' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Azoxystrobin 4.8% + Chlorothalonil 40.0% w/w' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'QoI (Strobilurin) + Chloronitrile (Multi-site)' },
    { label: 'Action Type', value: 'Preventive and curative broad-spectrum fungicide' },
    { label: 'Diseases Controlled', value: 'Early blight, late blight, leaf spot, rust, anthracnose, downy mildew, Alternaria' },
    { label: 'Target Crops', value: 'Tomato, potato, chilli, onion, grapes, mango, cucumber, brinjal' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Bottle (300 ml, 600 ml)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying King Fungicide.'
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
      name: 'Captop (Azoxystrobin 18.2% + Difenoconazole 11.4% SC)',
      description: 'Dual-action systemic fungicide for powdery mildew, anthracnose, rust, leaf spot, fruit rot, and sheath blight control.',
      route: '/products/captop-azoxystrobin-18-2-difenoconazole-11-4-sc',
      image: 'assets/products/fungicide/azoxystrobin-18-2-difenoconazole-11-4-sc.jpg',
      imageAlt: 'Captop Azoxystrobin Difenoconazole fungicide by Harishree Crop Science'
    },
    {
      name: 'Chemistry (Azoxystrobin 11% + Tebuconazole 18.3% SC)',
      description: 'Dual-action systemic fungicide for rust, powdery mildew, leaf spot, anthracnose, and sheath blight control.',
      route: '/products/chemistry-azoxystrobin-11-tebuconazole-18-3-sc',
      image: 'assets/products/insecticide/azoxystrobin-11-tebuconazole-18-3-sc.jpg',
      imageAlt: 'Chemistry Azoxystrobin Tebuconazole fungicide by Harishree Crop Science'
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
      question: 'What is Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC used for?',
      answer:
        '<strong>King Fungicide</strong> (<strong>Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC</strong>) is used for <strong>broad-spectrum fungal disease control</strong> including early blight, late blight, leaf spot, rust, anthracnose, downy mildew, and Alternaria in tomato, potato, chilli, onion, grapes, mango, cucumber, and brinjal. It is a dual-action systemic plus contact fungicide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'King Fungicide (Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC) is used for broad-spectrum fungal disease control including early blight, late blight, leaf spot, rust, anthracnose, downy mildew, and Alternaria in tomato, potato, chilli, onion, grapes, mango, cucumber, and brinjal. It is a dual-action systemic plus contact fungicide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'How does King Fungicide work?',
      answer:
        '<strong>King</strong> combines <strong>azoxystrobin 4.8%</strong> (strobilurin) which blocks fungal mitochondrial respiration for systemic preventive and curative protection, and <strong>chlorothalonil 40.0%</strong> (multi-site chloronitrile) which forms a protective contact shield on leaf surfaces — delivering broad-spectrum effectiveness in one spray application.',
      answerPlain:
        'King combines azoxystrobin 4.8% (strobilurin) which blocks fungal mitochondrial respiration for systemic preventive and curative protection, and chlorothalonil 40.0% (multi-site chloronitrile) which forms a protective contact shield on leaf surfaces — delivering broad-spectrum effectiveness in one spray application.'
    },
    {
      question: 'What is the recommended dose of King Fungicide?',
      answer:
        'The standard recommended dose of <strong>King Fungicide</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of King Fungicide is 30 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'Which crops can be treated with King?',
      answer:
        '<strong>King Fungicide</strong> can be used on <strong>tomato</strong>, <strong>potato</strong>, <strong>chilli</strong>, <strong>onion</strong>, <strong>grapes</strong>, <strong>mango</strong>, <strong>cucumber</strong>, and <strong>brinjal</strong>. It is a versatile crop protection fungicide for vegetable and fruit programs facing mixed fungal disease pressure during the growing season.',
      answerPlain:
        'King Fungicide can be used on tomato, potato, chilli, onion, grapes, mango, cucumber, and brinjal. It is a versatile crop protection fungicide for vegetable and fruit programs facing mixed fungal disease pressure during the growing season.'
    },
    {
      question: 'Can King control blight diseases?',
      answer:
        'Yes. <strong>King</strong> is highly effective against both <strong>early blight</strong> and <strong>late blight</strong> in tomato and potato. The protective <strong>chlorothalonil</strong> cover and systemic <strong>azoxystrobin</strong> activity together stop blight establishment and limit its spread when applied preventively and at first disease appearance.',
      answerPlain:
        'Yes. King is highly effective against both early blight and late blight in tomato and potato. The protective chlorothalonil cover and systemic azoxystrobin activity together stop blight establishment and limit its spread when applied preventively and at first disease appearance.'
    },
    {
      question: 'Is King preventive or curative?',
      answer:
        '<strong>King Fungicide</strong> provides <strong>both preventive and curative action</strong>. Chlorothalonil builds protective surface cover before disease spreads, while Azoxystrobin moves into plant tissue to stop active fungal infections — making it an ideal dual-action fungicide for long-lasting disease control across multiple crop systems.',
      answerPlain:
        'King Fungicide provides both preventive and curative action. Chlorothalonil builds protective surface cover before disease spreads, while Azoxystrobin moves into plant tissue to stop active fungal infections — making it an ideal dual-action fungicide for long-lasting disease control across multiple crop systems.'
    },
    {
      question: 'When should farmers spray King?',
      answer:
        'Spray <strong>King</strong> at <strong>early disease appearance</strong> or preventively before infection spreads. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.',
      answerPlain:
        'Spray King at early disease appearance or preventively before infection spreads. Apply in calm morning or evening hours with uniform canopy coverage on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during high-humidity periods.'
    },
    {
      question: 'How should King Fungicide be stored?',
      answer:
        'Store <strong>King Fungicide</strong> in its <strong>original sealed container</strong> in a cool, dry, well-ventilated place away from direct sunlight, food, feed, and seed. Keep out of reach of children and animals, and avoid storage near water sources or ignition sources to maintain product quality and safety.',
      answerPlain:
        'Store King Fungicide in its original sealed container in a cool, dry, well-ventilated place away from direct sunlight, food, feed, and seed. Keep out of reach of children and animals, and avoid storage near water sources or ignition sources to maintain product quality and safety.'
    }
  ];

  testimonials = [
    {
      name: 'Suresh',
      location: 'Maharashtra',
      text:
        'I sprayed King on my tomato crop when early blight started after the rains. The ring spots stopped spreading within days and the plants stayed greener through fruiting. Disease pressure was clearly lower at harvest compared to the previous season, and the 30 ml per pump dose is straightforward to follow in the field.',
      rating: 5
    },
    {
      name: 'Ramesh',
      location: 'Uttar Pradesh',
      text:
        'King helped control late blight in my potato field during the cool, humid season. The crop stayed healthy and tuber quality improved noticeably. The dual-action formula gave reliable protection when I needed it most — definitely better yield and grade this season.',
      rating: 5
    },
    {
      name: 'Karthik',
      location: 'Karnataka',
      text:
        'Downy mildew was building in my grape vineyard while neighbouring plots were already affected. A few timely King sprays at early stage protected my bunches through ripening. The investment paid off with cleaner bunches and noticeably better profitability at harvest compared to last year.',
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
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding King.' },
    { name: 'Measure King', text: 'Accurately measure 30 ml of Azoxystrobin 4.8% + Chlorothalonil 40.0% w/w SC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, stems, and fruits where blight, leaf spot, and mildew develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform canopy coverage is essential for both contact and systemic fungicide efficacy across all target crops.' },
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
        'Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC King Fungicide for Broad Spectrum Disease Control',
      productImageCaption:
        'Systemic and Contact Fungicide for Early Blight, Late Blight, Leaf Spot, Rust, Anthracnose and Downy Mildew Control',
      description:
        'King (Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC) by Harishree Crop Science is a dual-action systemic plus contact fungicide for early blight, late blight, leaf spot, rust, anthracnose, and downy mildew. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'King Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'KING-AZOXYS-CHLOROTHALONIL-SC',
      mpn: 'KING-AZOXYS-CHLOROTHALONIL-SC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply King (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of King (Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC) for foliar application at 30 ml/pump.',
      alternateNames: [
        'King',
        'King Fungicide',
        'Azoxystrobin Chlorothalonil Fungicide',
        'Broad Spectrum Fungicide',
        'Systemic and Contact Fungicide',
        'Dual Action Fungicide',
        'Preventive and Curative Fungicide',
        'Fungicide for Early Blight',
        'Fungicide for Late Blight',
        'Fungicide for Leaf Spot Disease',
        'Fungicide for Rust Disease',
        'Fungicide for Anthracnose',
        'Fungicide for Downy Mildew',
        'Tomato Fungicide',
        'Potato Fungicide',
        'Chilli Fungicide',
        'Grapes Fungicide',
        'Mango Disease Control Fungicide',
        'Best Fungicide for Vegetables',
        'Best Fungicide for Fruits',
        'Crop Protection Fungicide',
        'Long Lasting Disease Control'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `King (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'King Azoxystrobin + Chlorothalonil SC delivers broad-spectrum control of blight, leaf spot & mildew in tomato, potato & grapes. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Azoxystrobin 4.8% + Chlorothalonil 40% SC | King',
        description: desc,
        keywords:
          'Azoxystrobin 4.8% w/w + Chlorothalonil 40.0% w/w SC, King Fungicide, Azoxystrobin Chlorothalonil Fungicide, Broad Spectrum Fungicide, Systemic and Contact Fungicide, Dual Action Fungicide, Preventive and Curative Fungicide, Fungicide for Early Blight, Fungicide for Late Blight, Fungicide for Leaf Spot Disease, Fungicide for Rust Disease, Fungicide for Anthracnose, Fungicide for Downy Mildew, Tomato Fungicide, Potato Fungicide, Chilli Fungicide, Grapes Fungicide, Mango Disease Control Fungicide, Best Fungicide for Vegetables, Best Fungicide for Fruits, Crop Protection Fungicide, Long Lasting Disease Control, King, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Azoxystrobin 4.8% + Chlorothalonil 40% SC (King) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'King | Azoxystrobin + Chlorothalonil Fungicide',
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
