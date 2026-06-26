import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'MILETGOLD_METALAXYL_MANCOZEB_WP';
const INDICATIVE_LIST_PRICE_INR = 289;

@Component({
  selector: 'app-metalaxyl-8-mancozeb-64-wp-milet-gold',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './metalaxyl-8-mancozeb-64-wp-milet-gold.component.html',
  styleUrl: './metalaxyl-8-mancozeb-64-wp-milet-gold.component.scss'
})
export class Metalaxyl8Mancozeb64WpMiletGoldComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/metalaxyl-8-mancozeb-64-wp-milet-gold';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/metalaxyl-8-mancozeb-64-wp.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Metalaxyl 8% + Mancozeb 64% WP';
  brandName = 'Milet Gold';

  featuredSnippetAnswer =
    'Milet Gold (Metalaxyl 8% + Mancozeb 64% WP) is a dual-action systemic plus contact fungicide by Harishree Crop Science for preventive and curative control of downy mildew, late blight, damping off, and seedling diseases across grapes, potato, tomato, chilli, onion, cucurbits, and other crops. Systemic Metalaxyl works inside the plant while contact Mancozeb protects the leaf surface. Recommended dose: 30 gm per pump.';

  packSizes = [
    { volume: '250 gm', price: 153, featured: false, sku: 'MILETGOLD-250GM' },
    { volume: '500 gm', price: 289, featured: true, sku: 'MILETGOLD-500GM' },
    { volume: '1 Kg', price: 555, featured: false, sku: 'MILETGOLD-1KG' }
  ];

  quickHighlights = [
    {
      title: 'Dual active ingredients',
      description:
        'Milet Gold combines Metalaxyl 8% and Mancozeb 64% WP — systemic plus contact chemistry in one wettable powder for dependable, broad-spectrum fungal disease protection.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Stops downy mildew & blight',
      description:
        'One Milet Gold spray manages downy mildew, late blight, damping off, and seedling diseases — covering the most damaging oomycete pathogens in grapes, potato, and vegetables.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Systemic + contact action',
      description:
        'Metalaxyl is absorbed and moves inside the plant to control disease from within, while Mancozeb forms a protective barrier on the leaf surface for extended cover.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Preventive action',
      description:
        'Mancozeb builds a protective multi-site barrier on treated foliage before pathogens establish — ideal for scheduled preventive sprays when weather favours disease.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'Systemic Metalaxyl moves into plant tissue to stop active oomycete infections such as downy mildew and late blight when sprayed at early disease appearance.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Long residual effect',
      description:
        'The combination of internal systemic activity and surface contact cover maintains protection between scheduled spray intervals during high disease-pressure weather.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Resistance management',
      description:
        'Pairing two distinct modes of action — systemic Metalaxyl and multi-site contact Mancozeb — supports resistance management compared to single-active fungicides.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Uniform coverage',
      description:
        'The WP formulation disperses evenly in water for uniform coverage on leaves, stems, and developing fruits where downy mildew and blight establish.',
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Improved produce quality',
      description:
        'Cleaner berries, tubers, and fruits with reduced disease scarring improve marketability in grapes, potato, tomato, and vegetable crop programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Better yield potential',
      description:
        'Timely disease control preserves green leaf area, flowers, and fruits — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Proven dual-active technology',
      description:
        'Milet Gold pairs systemic Metalaxyl 8% with multi-site contact Mancozeb 64% — a trusted, globally proven combination for dependable control of downy mildew and late blight.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Broad-spectrum disease control',
      description:
        'A single Milet Gold spray manages downy mildew, late blight, damping off, and seedling diseases across grapes, potato, tomato, and vegetables in one dependable formulation.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long-lasting effectiveness',
      description:
        'Internal systemic activity plus surface contact cover maintains preventive and curative protection between spray intervals, reducing application frequency during high-pressure seasons.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at the best-selling 500 gm pack, a simple 30 gm per pump dose, and healthier high-value crops deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'Milet Gold controls downy mildew, late blight, damping off, and seedling diseases — the most damaging oomycete threats across Indian horticultural and vegetable crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Dual mode of action',
      description:
        'Systemic Metalaxyl and multi-site contact Mancozeb work through two distinct pathways, delivering broader disease control than single-active fungicides in one spray.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Systemic and contact protection',
      description:
        'Metalaxyl moves inside the plant to reach hidden infections while Mancozeb guards the leaf surface, giving both internal and external disease defence.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Effective against downy mildew',
      description:
        'The systemic Metalaxyl component specifically targets downy mildew pathogens, controlling infection inside the plant where contact fungicides alone may fall short.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Excellent late blight management',
      description:
        'Milet Gold delivers dependable control of late blight in potato and tomato, protecting foliage, stems, and fruits during cool, humid, blight-favourable weather.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long residual activity',
      description:
        'The systemic plus contact combination reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows across the season.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Better crop health',
      description:
        'Disease-free foliage supports stronger photosynthesis, healthier plant growth, and more uniform crop development when oomycete pathogens threaten canopy health.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved yield potential',
      description:
        'Protecting leaves, flowers, and fruits during critical stages helps preserve yield when downy mildew or late blight pressure is high in dense crop canopies.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Reduced disease spread',
      description:
        'Early Milet Gold application limits the rapid field-to-field spread of downy mildew and late blight, protecting both the treated plot and neighbouring crop areas.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Resistance management benefits',
      description:
        'Combining a systemic and a multi-site contact active in one product supports rotation-friendly, durable disease-management programs across the crop cycle.',
      icon: 'fas fa-sync'
    },
    {
      title: 'Improved crop quality',
      description:
        'By controlling blight and mildew that scar produce, Milet Gold helps growers deliver cleaner, more uniform berries, tubers, and fruits for premium markets.',
      icon: 'fas fa-award'
    },
    {
      title: 'Cost-effective protection',
      description:
        'Dependable dual-action control at a farmer-friendly 30 gm per pump dose turns disease-control spend into stronger returns per acre on high-value crops.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Milet Gold Fungicide is a premium dual-action fungicide from HARISHREE CROP SCIENCE, formulated as Metalaxyl 8% + Mancozeb 64% WP. Indian growers of grapes, potato, tomato, and vegetables face severe pressure from downy mildew and late blight — fast-spreading oomycete diseases that can destroy a crop within days under cool, humid weather. Combination fungicides like Milet Gold are trusted because they pair systemic curative action with multi-site contact protection in a single spray, simplifying field programs while covering a wider disease spectrum than single-active products.';

  aboutOverview =
    'The wettable powder (WP) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and developing fruits. Milet Gold is engineered for crop safety when used at the recommended 30 gm per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across grapes, potato, tomato, chilli, onion, cucurbits, and other crops. For agronomists and dealers, Milet Gold represents a dependable dual-action crop-protection solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian farmers manage every season.';

  aboutActive =
    'Metalaxyl 8% is a systemic fungicide of the phenylamide (FRAC Group 4) group that is rapidly absorbed by leaves and roots and translocated within plant tissue. It specifically targets oomycete pathogens — the fungi responsible for downy mildew, late blight, damping off, and root rot — by interfering with RNA synthesis in the pathogen. Because it moves systemically, Metalaxyl reaches infections inside the plant and delivers both preventive and curative control that contact fungicides alone cannot provide.';

  aboutSecondary =
    'Mancozeb 64% is a multi-site contact fungicide of the dithiocarbamate (FRAC Group M3) group. It forms a protective barrier on the plant surface that inhibits fungal spore germination and stops infection before it establishes. Because Mancozeb acts on multiple biochemical sites in the pathogen, it provides broad-spectrum protection and helps manage resistance — making it an ideal partner that guards the leaf surface while Metalaxyl works from within.';

  aboutCombined =
    'Together, Metalaxyl 8% and Mancozeb 64% deliver dual-action disease management: curative systemic control from inside the plant plus preventive contact protection on the surface. This combination extends the protection period, improves disease suppression, and supports better resistance management than single-active fungicides. Farmers spraying Milet Gold at early disease appearance gain both immediate suppression of active oomycete infections and extended residual cover — a combination that is especially valuable during cool, humid weather when downy mildew and late blight spread fast.';

  targetCropsTable = [
    { crop: 'Grapes', diseases: 'Downy Mildew' },
    { crop: 'Potato', diseases: 'Late Blight, Early Blight' },
    { crop: 'Tomato', diseases: 'Late Blight, Damping Off' },
    { crop: 'Chilli', diseases: 'Damping Off, Fruit Rot' },
    { crop: 'Onion', diseases: 'Downy Mildew, Purple Blotch' },
    { crop: 'Cucumber', diseases: 'Downy Mildew' },
    { crop: 'Bitter Gourd', diseases: 'Downy Mildew' },
    { crop: 'Watermelon', diseases: 'Downy Mildew, Damping Off' },
    { crop: 'Muskmelon', diseases: 'Downy Mildew' },
    { crop: 'Other Vegetable Crops', diseases: 'Downy Mildew, Late Blight, Seedling Diseases' }
  ];

  diseaseDetails = [
    {
      name: 'Downy Mildew',
      symptoms:
        'Yellow, angular patches on the upper leaf surface with greyish-white to purplish fungal growth on the underside in humid weather. Affected leaves dry, curl, and drop, and grape bunches and vegetable produce become unmarketable.',
      impact:
        'Downy mildew spreads explosively in cool, wet weather and can destroy grape, onion, and cucurbit crops within days, sharply reducing both yield and produce quality if not controlled early.',
      controlBenefits:
        'Milet Gold combines systemic Metalaxyl, which controls downy mildew from inside the plant, with contact Mancozeb on the surface. Spray at first symptoms with uniform coverage for dependable control.'
    },
    {
      name: 'Late Blight',
      symptoms:
        'Dark, water-soaked lesions on leaves and stems that enlarge rapidly, often with white fungal growth at the margins in humid conditions. Tubers and fruits develop firm brown rot in potato and tomato.',
      impact:
        'Late blight is one of the most destructive diseases of potato and tomato, capable of wiping out a field in days under cool, moist weather and causing severe losses in yield and storage quality.',
      controlBenefits:
        'Milet Gold delivers curative systemic Metalaxyl plus preventive Mancozeb cover, stopping active blight and protecting new growth. Apply preventively and at early lesion stage with full coverage.'
    },
    {
      name: 'Damping Off',
      symptoms:
        'Pre- and post-emergence rotting of seedlings at the soil line, leading to collapsed, wilted, or rotted young plants and patchy, poor crop emergence in nurseries and direct-sown fields.',
      impact:
        'Damping off reduces plant population, forces costly gap-filling or re-sowing, and delays the crop, cutting overall productivity in vegetable nurseries and field stands.',
      controlBenefits:
        'Systemic Metalaxyl suppresses the soil-borne oomycetes that cause damping off, while Mancozeb protects the collar region, supporting better stand establishment and healthier early growth.'
    },
    {
      name: 'Seedling Rot & Root Rot',
      symptoms:
        'Browning and decay of roots and the basal stem, stunted growth, and wilting despite adequate moisture. Affected seedlings fail to thrive and may collapse as the root system rots.',
      impact:
        'Seedling and root rot reduce stand vigour, stunt the crop, and lower yield potential from the start of the season, particularly in moist, poorly drained soils favourable to oomycetes.',
      controlBenefits:
        'Milet Gold\'s systemic Metalaxyl moves into the root zone to suppress oomycete root pathogens, while Mancozeb adds protective cover, helping seedlings establish a healthy root system.'
    },
    {
      name: 'Collar Rot',
      symptoms:
        'Dark, water-soaked lesions at the collar region where the stem meets the soil, often girdling the stem. Affected plants wilt suddenly and may topple as the collar tissue rots.',
      impact:
        'Collar rot kills plants outright in patches, reduces stand uniformity, and can spread through a field under warm, wet conditions, lowering total crop population and yield.',
      controlBenefits:
        'Milet Gold protects the collar region with contact Mancozeb and suppresses oomycete infection internally with systemic Metalaxyl when applied as a directed early-season spray.'
    },
    {
      name: 'Oomycete & Fungal Disease Complex',
      symptoms:
        'A mix of mildew, blight, and rot symptoms caused by oomycetes and related fungi, often appearing together in humid weather and followed by opportunistic secondary infections.',
      impact:
        'The combined disease complex compounds yield loss, degrades produce quality, and spreads rapidly across high-value horticultural and vegetable crops in favourable weather.',
      controlBenefits:
        'The dual systemic-plus-contact action of Milet Gold targets the primary oomycete infection and protects the surface, lowering overall disease pressure and limiting secondary infections.'
    }
  ];

  targetPests = [
    {
      name: 'Downy Mildew',
      description:
        'Yellow patches with greyish growth on leaf undersides. Milet Gold combines systemic Metalaxyl and contact Mancozeb to control downy mildew in grapes, onion, and cucurbits.'
    },
    {
      name: 'Late Blight',
      description:
        'Dark water-soaked lesions on leaves, stems, and fruits. Milet Gold delivers curative plus preventive control of late blight in potato and tomato.'
    },
    {
      name: 'Damping Off',
      description:
        'Seedling rot at the soil line in nurseries and fields. Systemic Metalaxyl suppresses soil-borne oomycetes for better stand establishment.'
    },
    {
      name: 'Seedling & Root Rot',
      description:
        'Root and basal stem decay that stunts young plants. Milet Gold moves into the root zone to protect seedlings and support healthy roots.'
    },
    {
      name: 'Collar Rot',
      description:
        'Rotting at the stem-soil junction that girdles plants. Milet Gold protects the collar region and suppresses oomycete infection internally.'
    },
    {
      name: 'Oomycete Diseases',
      description:
        'A complex of mildew, blight, and rot caused by oomycetes. Dual systemic plus contact action lowers overall disease pressure across crops.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Preventive and early disease appearance' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Frequency', recommendation: 'As per disease pressure' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Milet Gold' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'WP (Wettable Powder)' },
      { label: 'Physical form', value: 'Powder' },
      { label: 'Active ingredients', value: 'Metalaxyl 8% + Mancozeb 64%' },
      { label: 'Chemical group', value: 'Phenylamide (FRAC 4) + Dithiocarbamate (FRAC M3)' },
      { label: 'Action type', value: 'Systemic + contact; preventive and curative' },
      { label: 'Diseases controlled', value: 'Downy mildew, late blight, damping off, seedling diseases' },
      { label: 'Target crops', value: 'Grapes, potato, tomato, chilli, onion, cucurbits and other crops' }
    ],
    packs: [
      { label: 'Packaging', value: 'Pack; sizes 250 gm, 500 gm, 1 Kg' },
      { label: 'Recommended dose', value: '30 gm/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Preventive or early disease appearance as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Milet Gold' },
    { label: 'Brand / Trade Name', value: 'Milet Gold' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredients', value: 'Metalaxyl 8% + Mancozeb 64%' },
    { label: 'Formulation', value: 'WP (Wettable Powder)' },
    { label: 'Chemical Group', value: 'Phenylamide + Dithiocarbamate' },
    { label: 'Action Type', value: 'Systemic plus contact, preventive and curative fungicide' },
    { label: 'Diseases Controlled', value: 'Downy mildew, late blight, damping off, seedling diseases' },
    { label: 'Target Crops', value: 'Grapes, potato, tomato, chilli, onion, cucurbits and other crops' },
    { label: 'Recommended Dose', value: '30 gm/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Preventive or early disease appearance; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; keep away from water bodies; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide' },
    { label: 'Physical Form', value: 'Wettable Powder' },
    { label: 'Packaging Type', value: 'Pack (250 gm, 500 gm, 1 Kg)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Milet Gold Fungicide.'
    },
    {
      title: 'Wear personal protective equipment',
      text: 'Use gloves, goggles, mask, and protective clothing when handling the powder or preparing the spray mix in the field.'
    },
    {
      title: 'Spray safely and avoid drift',
      text: 'Spray in calm morning or evening hours to prevent drift and dust onto neighbouring crops, homes, or water bodies.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 30 gm per pump. Over-dosing does not improve disease control and may increase crop and cost risk.'
    },
    {
      title: 'Store in a cool, dry place',
      text: 'Keep the pack in a cool, dry, ventilated area away from direct sunlight and protect it from moisture to prevent caking.'
    },
    {
      title: 'Keep in original packaging',
      text: 'Store Milet Gold only in its original, tightly closed packaging away from food, feed, seed, and fertilizers.'
    },
    {
      title: 'Keep out of reach of children',
      text: 'Store out of reach of children, pets, and livestock. Dispose of empty packs safely and never reuse them.'
    },
    {
      title: 'First aid and water safety',
      text: 'On contact, wash skin and eyes with plenty of water; if swallowed, seek medical help with the label. Never contaminate ponds, canals, or drinking water.'
    }
  ];

  relatedProducts = [
    {
      name: 'H TILT (Propiconazole 25% EC)',
      description: 'Systemic triazole fungicide for rust, powdery mildew, blast, leaf spot, and anthracnose across many crops.',
      route: '/products/propiconazole-25-ec-h-tilt',
      image: 'assets/products/fungicide/propiconazole-25-ec.jpg',
      imageAlt: 'H TILT Propiconazole 25% EC fungicide by Harishree Crop Science'
    },
    {
      name: 'King (Azoxystrobin 4.8% + Chlorothalonil 40.0% SC)',
      description: 'Systemic plus contact fungicide for early blight, late blight, leaf spot, rust, anthracnose, and downy mildew.',
      route: '/products/azoxystrobin-4-8-chlorothalonil-40-sc-king',
      image: 'assets/products/azoxystrobin-4-8-w-w-chlorothalonil-40-0-w-w-sc.png',
      imageAlt: 'King Azoxystrobin Chlorothalonil fungicide by Harishree Crop Science'
    },
    {
      name: 'Captop (Azoxystrobin 18.2% + Difenoconazole 11.4% SC)',
      description: 'Dual-action systemic fungicide for powdery mildew, anthracnose, rust, leaf spot, and sheath blight.',
      route: '/products/captop-azoxystrobin-18-2-difenoconazole-11-4-sc',
      image: 'assets/products/fungicide/azoxystrobin-18-2-difenoconazole-11-4-sc.jpg',
      imageAlt: 'Captop Azoxystrobin Difenoconazole fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Metalaxyl 8% + Mancozeb 64% WP used for?',
      answer:
        '<strong>Metalaxyl 8% + Mancozeb 64% WP</strong> (<strong>Milet Gold</strong>) is used for <strong>broad-spectrum control of downy mildew, late blight, damping off, and seedling diseases</strong> in grapes, potato, tomato, chilli, onion, cucurbits, and other crops. It is a <strong>dual-action systemic plus contact fungicide</strong> by <strong>HARISHREE CROP SCIENCE</strong>, combining curative internal action with protective surface cover.',
      answerPlain:
        'Metalaxyl 8% + Mancozeb 64% WP (Milet Gold) is used for broad-spectrum control of downy mildew, late blight, damping off, and seedling diseases in grapes, potato, tomato, chilli, onion, cucurbits, and other crops. It is a dual-action systemic plus contact fungicide by HARISHREE CROP SCIENCE, combining curative internal action with protective surface cover.'
    },
    {
      question: 'How does Milet Gold Fungicide work?',
      answer:
        '<strong>Milet Gold</strong> works through a <strong>dual mode of action</strong>. <strong>Metalaxyl 8%</strong> is systemic — it is absorbed and moves inside the plant to control oomycete infections and stop downy mildew and late blight from within. <strong>Mancozeb 64%</strong> is a multi-site contact fungicide that forms a protective barrier on the leaf surface, preventing spore germination and new infection.',
      answerPlain:
        'Milet Gold works through a dual mode of action. Metalaxyl 8% is systemic — it is absorbed and moves inside the plant to control oomycete infections and stop downy mildew and late blight from within. Mancozeb 64% is a multi-site contact fungicide that forms a protective barrier on the leaf surface, preventing spore germination and new infection.'
    },
    {
      question: 'What is the recommended dose of Metalaxyl 8% + Mancozeb 64% WP?',
      answer:
        'The standard recommended dose of <strong>Milet Gold (Metalaxyl 8% + Mancozeb 64% WP)</strong> is <strong>30 gm per pump</strong> in a 15-litre knapsack sprayer. Mix thoroughly for a uniform suspension and spray for full canopy coverage. Always confirm the final crop-wise dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of Milet Gold (Metalaxyl 8% + Mancozeb 64% WP) is 30 gm per pump in a 15-litre knapsack sprayer. Mix thoroughly for a uniform suspension and spray for full canopy coverage. Always confirm the final crop-wise dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which crops can be treated with this fungicide?',
      answer:
        '<strong>Metalaxyl 8% + Mancozeb 64% WP</strong> can be used on <strong>grapes, potato, tomato, chilli, onion, cucumber, bitter gourd, watermelon, muskmelon, and other vegetable crops</strong>. It is a versatile crop-protection fungicide for horticultural and vegetable programs facing downy mildew, late blight, and seedling disease pressure.',
      answerPlain:
        'Metalaxyl 8% + Mancozeb 64% WP can be used on grapes, potato, tomato, chilli, onion, cucumber, bitter gourd, watermelon, muskmelon, and other vegetable crops. It is a versatile crop-protection fungicide for horticultural and vegetable programs facing downy mildew, late blight, and seedling disease pressure.'
    },
    {
      question: 'Can it control downy mildew and late blight?',
      answer:
        'Yes. <strong>Milet Gold</strong> is specially suited to <strong>downy mildew and late blight</strong>. The systemic <strong>Metalaxyl</strong> component targets these oomycete diseases from inside the plant for curative control, while contact <strong>Mancozeb</strong> protects the surface and prevents new infection — giving dependable control even in cool, humid weather that favours rapid spread.',
      answerPlain:
        'Yes. Milet Gold is specially suited to downy mildew and late blight. The systemic Metalaxyl component targets these oomycete diseases from inside the plant for curative control, while contact Mancozeb protects the surface and prevents new infection — giving dependable control even in cool, humid weather that favours rapid spread.'
    },
    {
      question: 'Is Metalaxyl + Mancozeb preventive or curative?',
      answer:
        '<strong>Milet Gold (Metalaxyl 8% + Mancozeb 64% WP)</strong> is <strong>both preventive and curative</strong>. Contact Mancozeb builds a protective barrier before disease establishes, while systemic Metalaxyl stops active oomycete infections already present — making it a dependable dual-action fungicide for long-lasting disease control.',
      answerPlain:
        'Milet Gold (Metalaxyl 8% + Mancozeb 64% WP) is both preventive and curative. Contact Mancozeb builds a protective barrier before disease establishes, while systemic Metalaxyl stops active oomycete infections already present — making it a dependable dual-action fungicide for long-lasting disease control.'
    },
    {
      question: 'When should farmers spray Milet Gold Fungicide?',
      answer:
        'Spray <strong>Milet Gold</strong> <strong>preventively</strong> when weather favours disease, or at <strong>early disease appearance</strong> before downy mildew and late blight spread. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during humid weather.',
      answerPlain:
        'Spray Milet Gold preventively when weather favours disease, or at early disease appearance before downy mildew and late blight spread. Apply in calm morning or evening hours with uniform canopy coverage on leaves, stems, and fruits. Repeat based on disease pressure and label guidance during humid weather.'
    },
    {
      question: 'How should Metalaxyl + Mancozeb WP be stored?',
      answer:
        'Store <strong>Milet Gold (Metalaxyl 8% + Mancozeb 64% WP)</strong> in its <strong>original, tightly closed packaging</strong> in a <strong>cool, dry place</strong> away from direct sunlight, moisture, food, feed, and seed. Protecting the powder from moisture prevents caking. Keep out of reach of children and animals and dispose of empty packs safely.',
      answerPlain:
        'Store Milet Gold (Metalaxyl 8% + Mancozeb 64% WP) in its original, tightly closed packaging in a cool, dry place away from direct sunlight, moisture, food, feed, and seed. Protecting the powder from moisture prevents caking. Keep out of reach of children and animals and dispose of empty packs safely.'
    }
  ];

  testimonials = [
    {
      name: 'Sanjay',
      location: 'Maharashtra',
      text:
        'Downy mildew is a constant threat in my grape vineyard during the humid weeks. I sprayed Milet Gold at the first yellow patches and the disease stopped spreading on the leaves and bunches. The berries developed cleanly and the bunch quality at harvest was clearly better than last season.',
      rating: 5
    },
    {
      name: 'Harbhajan',
      location: 'Punjab',
      text:
        'Late blight used to hit my potato crop hard in the cool, foggy weather. After using Milet Gold preventively the foliage stayed green much longer and the tubers were free of blight rot. Storage quality improved and my marketable yield was noticeably higher.',
      rating: 5
    },
    {
      name: 'Ramesh',
      location: 'Karnataka',
      text:
        'I used Milet Gold on my tomato when early blight and damping off started in the nursery and field. The crop held its leaves longer and the plant stand was much better. The dual systemic plus contact action gave reliable protection and the fruit quality was excellent.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '69',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding Milet Gold.' },
    { name: 'Measure Milet Gold', text: 'Accurately measure 30 gm of Metalaxyl 8% + Mancozeb 64% WP for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add the powder to water, top up the tank, and agitate until the WP forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, stems, and fruits where downy mildew and blight develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform canopy coverage, including leaf undersides, is essential for effective downy mildew and blight control.' },
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
        'Metalaxyl 8% + Mancozeb 64% WP Milet Gold Systemic plus Contact Fungicide for Downy Mildew and Late Blight Control',
      productImageCaption:
        'Dual Action Systemic plus Contact Fungicide for Downy Mildew, Late Blight, Damping Off and Seedling Disease Control',
      description:
        'Milet Gold (Metalaxyl 8% + Mancozeb 64% WP) by Harishree Crop Science is a dual-action systemic plus contact fungicide for downy mildew, late blight, damping off & seedling diseases in grapes, potato & vegetables. Dose: 30 gm/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'Milet Gold Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'MILETGOLD-METALAXYL-MANCOZEB-WP',
      mpn: 'MILETGOLD-METALAXYL-MANCOZEB-WP',
      dose: '30 gm/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Milet Gold (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of Milet Gold (Metalaxyl 8% + Mancozeb 64% WP) for foliar application at 30 gm/pump.',
      alternateNames: [
        'Milet Gold',
        'Milet Gold Fungicide',
        'Metalaxyl Mancozeb Fungicide',
        'Ridomil Type Fungicide',
        'Downy Mildew Fungicide',
        'Late Blight Fungicide',
        'Fungicide for Grapes',
        'Potato Blight Fungicide',
        'Vegetable Fungicide',
        'Broad Spectrum Fungicide',
        'Systemic and Contact Fungicide',
        'Oomycete Disease Fungicide',
        'Fungicide for Fungal Diseases',
        'Agricultural Fungicide',
        'Disease Control Fungicide',
        'Crop Protection Fungicide',
        'Long Lasting Disease Control'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Milet Gold (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'WP (Wettable Powder)'
    };
  }

  private applySeo(): void {
    const desc =
      'Milet Gold Metalaxyl 8% + Mancozeb 64% WP is a dual-action systemic + contact fungicide for downy mildew & late blight in grapes, potato & vegetables. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Metalaxyl 8% + Mancozeb 64% WP | Milet Gold',
        description: desc,
        keywords:
          'Metalaxyl 8% + Mancozeb 64% WP, Milet Gold, Milet Gold Fungicide, Metalaxyl Mancozeb Fungicide, Ridomil Type Fungicide, Downy Mildew Fungicide, Late Blight Fungicide, Fungicide for Grapes, Potato Blight Fungicide, Vegetable Fungicide, Broad Spectrum Fungicide, Systemic and Contact Fungicide, Oomycete Disease Fungicide, Agricultural Fungicide, Metalaxyl 8% + Mancozeb 64% WP uses, Metalaxyl Mancozeb fungicide dose per litre, Metalaxyl 8 + Mancozeb 64 WP price, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Metalaxyl 8% + Mancozeb 64% WP (Milet Gold) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Milet Gold | Metalaxyl + Mancozeb Fungicide',
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
