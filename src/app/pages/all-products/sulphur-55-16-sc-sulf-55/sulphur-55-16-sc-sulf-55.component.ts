import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'SULF55_SULPHUR_55_16_SC';
const INDICATIVE_LIST_PRICE_INR = 566;

@Component({
  selector: 'app-sulphur-55-16-sc-sulf-55',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sulphur-55-16-sc-sulf-55.component.html',
  styleUrl: './sulphur-55-16-sc-sulf-55.component.scss'
})
export class Sulphur5516ScSulf55Component implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/sulphur-55-16-sc';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/sulphur-55-16-sc.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Sulphur 55.16% SC';
  brandName = 'SULF 55';

  featuredSnippetAnswer =
    'SULF 55 (Sulphur 55.16% SC) is a high-load liquid sulphur fungicide and miticide by Harishree Crop Science for broad-spectrum control of powdery mildew, mites, rust, leaf spot, anthracnose, scab, and fungal spots across grapes, chilli, apple, cumin, mango, pomegranate, and vegetables. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '5 Ltr', price: 295, featured: false, sku: 'SULF55-5LTR' },
    { volume: '10 Ltr', price: 566, featured: true, sku: 'SULF55-10LTR' },
    { volume: '15 Ltr', price: 826, featured: false, sku: 'SULF55-15LTR' }
  ];

  quickHighlights = [
    {
      title: 'High-load liquid sulphur',
      description:
        'SULF 55 (Sulphur 55.16% SC) delivers a high concentration of micronised sulphur in a smooth flowable formulation for dependable powdery mildew and disease control.',
      icon: 'fas fa-atom'
    },
    {
      title: 'Dual fungicide + miticide',
      description:
        'One SULF 55 spray manages fungal diseases such as powdery mildew, rust, and scab while also suppressing mites — covering two problems in a single application.',
      icon: 'fas fa-bug-slash'
    },
    {
      title: 'Broad-spectrum protection',
      description:
        'SULF 55 controls powdery mildew, mites, rust, leaf spot, anthracnose, scab, and fungal spots — reducing the need for multiple single-disease products in mixed pressure seasons.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Multi-site protection',
      description:
        'Acting on multiple biochemical sites, SULF 55 delivers dependable preventive control and a low risk of resistance, making it a strong rotation partner.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Preventive barrier',
      description:
        'SULF 55 builds a protective sulphur layer on leaves and fruits before pathogens and mites establish — ideal for scheduled preventive sprays in fruit and vegetable crops.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Easy mixing SC',
      description:
        'The flowable suspension concentrate disperses smoothly in water with minimal settling for uniform spray coverage compared to old wettable sulphur powders.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the SC spray deposit dries on foliage, SULF 55 adheres well and maintains its protective barrier even after light rainfall during humid spray windows.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Better crop vigor',
      description:
        'Healthier green leaf area supports stronger photosynthesis and fruit development — essential when fungal and mite pressure threatens orchard and vineyard productivity.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Improved quality produce',
      description:
        'Cleaner fruits with reduced mildew, scab, and fungal-spot scarring improve marketability in grapes, chilli, apple, mango, and pomegranate programs.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher productivity',
      description:
        'Timely fungal and mite control preserves leaf area and fruit quality — supporting higher yield potential and improved harvest quality per acre for Indian growers.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'High-load sulphur protection',
      description:
        'SULF 55 packs a high concentration of sulphur acting on several biochemical sites, delivering broad preventive control with a low risk of resistance compared to single-site fungicides.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Fungicide and miticide in one',
      description:
        'SULF 55 manages powdery mildew, rust, scab, and leaf spot while also suppressing mites — reducing the need for separate products in fruit and vegetable programs.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Smooth flowable SC',
      description:
        'The high-quality suspension concentrate mixes easily with minimal settling and clogging, giving uniform coverage and convenient field use over old sulphur powders.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at ₹566 for the popular 10 Ltr pack, crop-safe application at the recommended 30 ml per pump, and dual fungicide-miticide action deliver strong farm profitability.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'SULF 55 controls powdery mildew, rust, leaf spot, anthracnose, scab, and fungal spots — common fungal threats across Indian fruit and vegetable crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Effective mite suppression',
      description:
        'Beyond fungal control, SULF 55 suppresses mite infestation on fruit and vegetable crops, helping protect leaf area and fruit quality from mite damage.',
      icon: 'fas fa-bug-slash'
    },
    {
      title: 'Strong preventive protection',
      description:
        'Sulphur 55.16% builds a protective barrier on treated surfaces before pathogens and mites establish — ideal for scheduled preventive sprays in humid conditions.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Multi-site mode of action',
      description:
        'By acting on multiple sites, SULF 55 delivers dependable control and serves as a strong anti-resistance partner in fungicide and miticide rotation programs.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Easy, low-settling mixing',
      description:
        'The high-load SC disperses smoothly with minimal clogging, giving uniform coverage and convenient field use across orchard and field crops.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Improved crop vigor',
      description:
        'Disease and mite-free foliage supports stronger photosynthesis, better plant growth, and more uniform fruit development through the season.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Long residual cover',
      description:
        'The durable protective deposit reduces disease and mite pressure between scheduled sprays during humid, infection-favourable weather windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Higher crop quality',
      description:
        'By controlling mildew, scab, and fungal spots that scar produce, SULF 55 helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaves and fruits during critical stages helps preserve yield when powdery mildew, rust, or mite pressure is high in orchards and vineyards.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease and mite scarring on grape, chilli, apple, and pomegranate produce improves pack-out rates and buyer acceptance at premium markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely SULF 55 application limits defoliation, fruit scarring, and mite damage — protecting the grower\'s investment in orchard and vineyard management.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable dual fungicide-miticide protection at a farmer-friendly 30 ml per pump helps growers protect yield and quality, translating spray spend into stronger returns.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'SULF 55 Fungicide is a premium high-load liquid sulphur fungicide and miticide from HARISHREE CROP SCIENCE, formulated as Sulphur 55.16% SC. Fruit and vegetable growers face increasing pressure from powdery mildew, mites, rust, leaf spot, anthracnose, scab, and fungal spots — problems that scar produce and cut yields when left unchecked. Liquid sulphur products like SULF 55 are trusted because they combine dependable multi-site disease control with mite suppression in a smooth, easy-to-mix flowable formulation.';

  aboutOverview =
    'The suspension concentrate (SC) formulation disperses evenly in water with minimal settling for uniform foliar coverage on leaves, stems, and fruits. SULF 55 is engineered for crop safety when used at the recommended 30 ml per pump dose, supporting healthier plant growth, improved produce quality, and better productivity across grapes, chilli, apple, cumin, mango, pomegranate, and vegetables. For agronomists and dealers, SULF 55 represents a dependable, residue-friendly crop protection solution backed by Harishree quality control and batch-to-batch consistency — designed for the real-world disease and mite pressure Indian growers manage every season.';

  aboutSulphur =
    'Sulphur 55.16% is a high-load, micronised liquid sulphur fungicide and acaricide. It works through multiple modes — releasing active sulphur species that interfere with fungal respiration and disrupt mite physiology on contact. This multi-site action stops spore germination and suppresses mites on the treated plant surface, delivering strong preventive protection before infection and infestation establish.';

  aboutMultiSite =
    'Because sulphur acts on multiple sites rather than a single target, SULF 55 carries a very low risk of resistance development. This makes it an excellent rotation and tank-mix partner for systemic fungicides and miticides, helping growers protect the long-term effectiveness of their disease and mite management programs.';

  aboutCombined =
    'As a high-load liquid sulphur product, SULF 55 builds a protective layer that keeps working on the leaf and fruit surface between sprays. Growers applying SULF 55 preventively gain dependable broad-spectrum fungal cover plus mite suppression and the resistance-management value of multi-site sulphur chemistry — a combination that supports clean, marketable produce across grapes, chilli, apple, cumin, mango, pomegranate, and vegetable programs.';

  targetCropsTable = [
    { crop: 'Grapes', diseases: 'Powdery Mildew, Mites' },
    { crop: 'Chilli', diseases: 'Powdery Mildew, Mites' },
    { crop: 'Apple', diseases: 'Scab, Powdery Mildew' },
    { crop: 'Cumin', diseases: 'Powdery Mildew, Fungal Spots' },
    { crop: 'Mango', diseases: 'Powdery Mildew, Fungal Spots' },
    { crop: 'Pomegranate', diseases: 'Fungal Spots, Mites' },
    { crop: 'Vegetables', diseases: 'Powdery Mildew, Leaf Spot' }
  ];

  diseaseDetails = [
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on upper leaf surfaces, stems, and fruits. Leaves may curl, yellow, and drop prematurely when colonies spread across the canopy during dry, humid spells.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and causes fruit scarring — cutting marketable yield in grapes, chilli, apple, cumin, and vegetables when left untreated.',
      controlBenefits:
        'SULF 55 high-load sulphur chemistry suppresses mildew colonies through multi-site contact action. Spray preventively and at first visible colonies with full canopy coverage for best long-lasting control.'
    },
    {
      name: 'Mites',
      symptoms:
        'Fine stippling, bronzing, and webbing on leaves with tiny moving mites visible under magnification. Heavy infestation causes leaf curling, drying, and premature drop.',
      impact:
        'Mites reduce photosynthetic leaf area and weaken plants, lowering fruit size and quality in grapes, chilli, pomegranate, and other crops during hot, dry spells.',
      controlBenefits:
        'SULF 55 suppresses mite populations on contact through sulphur acaricidal action. Spray at early infestation with thorough coverage, including leaf undersides, for dependable control.'
    },
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist growing conditions.',
      impact:
        'Rust destroys leaf area essential for fruit and seed development. Severe infections can reduce yield and weaken plants if not controlled at early pustule stage.',
      controlBenefits:
        'SULF 55 limits rust spread through multi-site sulphur action. Apply when first pustules appear with uniform coverage to protect leaf area through the season.'
    },
    {
      name: 'Leaf Spot',
      symptoms:
        'Circular to irregular brown or dark lesions on leaves, often with yellow halos. Lesions may merge, causing large necrotic patches and premature defoliation in vegetable crops.',
      impact:
        'Leaf spot diseases reduce photosynthetic area and weaken plants. Heavy defoliation lowers yield and produce quality when infections run through the canopy during wet periods.',
      controlBenefits:
        'SULF 55 protects uninfected leaf tissue and limits new lesion development. Preventive sprays at first risk deliver dependable multi-site cover across the full canopy.'
    },
    {
      name: 'Scab',
      symptoms:
        'Rough, corky, dark lesions on fruits and leaves of apple. Severe scab causes cracking, deformation, and downgrading of fruit quality at harvest.',
      impact:
        'Scab directly damages fruit appearance and marketability, lowering pack-out rates and prices in apple orchards when not controlled preventively.',
      controlBenefits:
        'SULF 55 forms a protective sulphur barrier that limits scab establishment. Apply preventively with thorough coverage of developing fruits and foliage for clean, marketable produce.'
    },
    {
      name: 'Anthracnose',
      symptoms:
        'Sunken dark lesions on fruits, pods, and leaves. Pinkish spore masses may appear in humid conditions. Infected chilli and grape produce become unmarketable when lesions expand.',
      impact:
        'Anthracnose damages produce appearance and causes pre-harvest drop. The disease cycle accelerates with rain splash and warm weather, spreading quickly through dense canopies.',
      controlBenefits:
        'SULF 55 helps limit anthracnose development on protected surfaces. Time sprays before flowering and at early fruit-set with thorough coverage for maximum crop protection.'
    }
  ];

  targetPests = [
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. SULF 55 high-load sulphur action suppresses mildew development and protects new growth in grapes, chilli, and cumin.'
    },
    {
      name: 'Mites',
      description:
        'Stippling, bronzing, and webbing from mites. SULF 55 acaricidal sulphur action suppresses mite populations on contact in fruit and vegetable crops.'
    },
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. SULF 55 multi-site sulphur action limits rust spread at early appearance.'
    },
    {
      name: 'Leaf Spot',
      description:
        'Brown circular lesions that merge and cause defoliation. SULF 55 protects leaf tissue and preserves photosynthetic area across vegetable crops.'
    },
    {
      name: 'Anthracnose',
      description:
        'Sunken dark lesions on fruits and pods. SULF 55 helps limit anthracnose development on protected surfaces in chilli and grapes.'
    },
    {
      name: 'Scab',
      description:
        'Rough corky lesions on apple fruits. SULF 55 protective barrier limits scab establishment for clean, marketable produce.'
    },
    {
      name: 'Fungal Spots',
      description:
        'Brown circular spots on leaves and fruits. SULF 55 protective barrier limits fungal spot development across pomegranate, mango, and vegetables.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Preventive, before disease/mite build-up' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Dose', recommendation: '30 ml per pump' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'SULF 55' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide / Miticide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Sulphur 55.16%' },
      { label: 'Chemical group', value: 'Inorganic sulphur (multi-site)' },
      { label: 'Action type', value: 'Multi-site contact, preventive disease and mite control' },
      { label: 'Diseases controlled', value: 'Powdery mildew, mites, rust, leaf spot, anthracnose, scab, fungal spots' },
      { label: 'Target crops', value: 'Grapes, chilli, apple, cumin, mango, pomegranate, vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Can; sizes 5 Ltr, 10 Ltr, 15 Ltr' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Preventive, before disease/mite build-up or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'SULF 55' },
    { label: 'Brand / Trade Name', value: 'SULF 55' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Sulphur 55.16%' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'Inorganic sulphur (multi-site contact)' },
    { label: 'Action Type', value: 'Preventive broad-spectrum contact fungicide and miticide' },
    { label: 'Diseases Controlled', value: 'Powdery mildew, mites, rust, leaf spot, anthracnose, scab, fungal spots' },
    { label: 'Target Crops', value: 'Grapes, chilli, apple, cumin, mango, pomegranate, vegetables' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Preventive, before disease/mite build-up; follow label guidance' },
    { label: 'Rainfastness', value: 'Good adhesion once spray deposit dries' },
    { label: 'Re-entry Interval', value: '24 hours (with PPE)' },
    { label: 'Precautions', value: 'Use PPE; avoid drift; do not mix with oils near application; follow label' },
    { label: 'Pesticide Type', value: 'Fungicide / Miticide' },
    { label: 'Physical Form', value: 'Liquid' },
    { label: 'Packaging Type', value: 'Can (5 Ltr, 10 Ltr, 15 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying SULF 55 Fungicide.'
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
      title: 'Do not mix with oils or spray in high heat',
      text: 'Avoid applying close to oil sprays and on sulphur-sensitive crops or during very high temperatures to prevent phytotoxicity.'
    },
    {
      title: 'Avoid contamination of water sources',
      text: 'Never spray directly over ponds, canals, or drinking water sources. Triple-rinse empty cans before disposal.'
    },
    {
      title: 'Store in a cool and dry place',
      text: 'Keep sealed cans in a cool, dry, ventilated area away from direct sunlight and ignition sources.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 30 ml per pump. Over-dosing does not improve control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'TAIGAR 22 (Lime Sulphur 22% SC)',
      description: 'Organic-compatible sulphur fungicide and miticide for powdery mildew, scab, rust, and mites on fruit crops.',
      route: '/products/lime-sulphur-22-sc-taigar-22',
      image: 'assets/products/fungicide/lime-sulphur-22-sc.png',
      imageAlt: 'TAIGAR 22 Lime Sulphur 22% SC fungicide by Harishree Crop Science'
    },
    {
      name: 'H-Tilt (Propiconazole 25% EC)',
      description: 'Systemic triazole fungicide for rusts, leaf spots, and powdery mildew across cereals and horticultural crops.',
      route: '/products/propiconazole-25-ec-h-tilt',
      image: 'assets/products/fungicide/propiconazole-25-ec.jpg',
      imageAlt: 'H-Tilt Propiconazole 25% EC fungicide by Harishree Crop Science'
    },
    {
      name: 'HTM (Thiophanate Methyl 70% WP)',
      description: 'Systemic fungicide for anthracnose, powdery mildew, leaf spot, and scab across fruit and vegetable crops.',
      route: '/products/thiophanate-methyl-70-wp-htm',
      image: 'assets/products/thiophanate-methyl-70-wp.png',
      imageAlt: 'HTM Thiophanate Methyl 70% WP fungicide by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is SULF 55 Fungicide used for?',
      answer:
        '<strong>SULF 55 Fungicide</strong> (<strong>Sulphur 55.16% SC</strong>) is used for <strong>broad-spectrum control of fungal diseases and mites</strong> including powdery mildew, mites, rust, leaf spot, anthracnose, scab, and fungal spots in grapes, chilli, apple, cumin, mango, pomegranate, and vegetables. It is a high-load liquid sulphur fungicide and miticide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'SULF 55 Fungicide (Sulphur 55.16% SC) is used for broad-spectrum control of fungal diseases and mites including powdery mildew, mites, rust, leaf spot, anthracnose, scab, and fungal spots in grapes, chilli, apple, cumin, mango, pomegranate, and vegetables. It is a high-load liquid sulphur fungicide and miticide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases and pests does Sulphur 55.16% SC control?',
      answer:
        '<strong>Sulphur 55.16% SC</strong> controls <strong>powdery mildew</strong>, <strong>mites</strong>, <strong>rust</strong>, <strong>leaf spot</strong>, <strong>anthracnose</strong>, <strong>scab</strong>, and <strong>fungal spots</strong>. SULF 55 delivers preventive protection through multi-site sulphur action when applied with uniform canopy coverage.',
      answerPlain:
        'Sulphur 55.16% SC controls powdery mildew, mites, rust, leaf spot, anthracnose, scab, and fungal spots. SULF 55 delivers preventive protection through multi-site sulphur action when applied with uniform canopy coverage.'
    },
    {
      question: 'Which crops can be treated with SULF 55?',
      answer:
        '<strong>SULF 55 Fungicide</strong> can be used on <strong>grapes</strong>, <strong>chilli</strong>, <strong>apple</strong>, <strong>cumin</strong>, <strong>mango</strong>, <strong>pomegranate</strong>, and <strong>vegetables</strong>. It is a versatile sulphur-based crop protection product for fruit and vegetable programs facing fungal and mite pressure.',
      answerPlain:
        'SULF 55 Fungicide can be used on grapes, chilli, apple, cumin, mango, pomegranate, and vegetables. It is a versatile sulphur-based crop protection product for fruit and vegetable programs facing fungal and mite pressure.'
    },
    {
      question: 'What is the recommended dosage of SULF 55 Fungicide?',
      answer:
        'The standard recommended dose of <strong>SULF 55 Fungicide</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of SULF 55 Fungicide is 30 ml per pump in a 15-litre knapsack sprayer. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'Is SULF 55 a fungicide or a miticide?',
      answer:
        '<strong>SULF 55</strong> is <strong>both a fungicide and a miticide</strong>. Its high-load sulphur chemistry controls fungal diseases such as powdery mildew, rust, and scab while also suppressing mite infestation — managing two problems in a single application.',
      answerPlain:
        'SULF 55 is both a fungicide and a miticide. Its high-load sulphur chemistry controls fungal diseases such as powdery mildew, rust, and scab while also suppressing mite infestation — managing two problems in a single application.'
    },
    {
      question: 'How is SULF 55 SC better than sulphur powder?',
      answer:
        '<strong>SULF 55</strong> is a <strong>liquid suspension concentrate</strong> with micronised sulphur that mixes smoothly with minimal settling and clogging, giving more uniform coverage and easier field handling than traditional wettable sulphur powders.',
      answerPlain:
        'SULF 55 is a liquid suspension concentrate with micronised sulphur that mixes smoothly with minimal settling and clogging, giving more uniform coverage and easier field handling than traditional wettable sulphur powders.'
    },
    {
      question: 'When should SULF 55 be sprayed?',
      answer:
        'Spray <strong>SULF 55</strong> <strong>preventively, before disease or mite build-up</strong>, or at first appearance. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, stems, and fruits. Avoid application during very high temperatures or close to oil sprays.',
      answerPlain:
        'Spray SULF 55 preventively, before disease or mite build-up, or at first appearance. Apply in calm morning or evening hours with uniform canopy coverage on leaves, stems, and fruits. Avoid application during very high temperatures or close to oil sprays.'
    },
    {
      question: 'Why choose SULF 55 over ordinary fungicides?',
      answer:
        '<strong>SULF 55</strong> offers <strong>dual fungicide-miticide action</strong>, <strong>high-load multi-site sulphur protection</strong> with low resistance risk, <strong>smooth low-settling SC mixing</strong>, and <strong>better return on investment</strong> at ₹566 for the popular 10 Ltr pack — making it an ideal preventive and rotation partner for fruit and vegetable crops.',
      answerPlain:
        'SULF 55 offers dual fungicide-miticide action, high-load multi-site sulphur protection with low resistance risk, smooth low-settling SC mixing, and better return on investment at ₹566 for the popular 10 Ltr pack — making it an ideal preventive and rotation partner for fruit and vegetable crops.'
    }
  ];

  testimonials = [
    {
      name: 'Sandeep',
      location: 'Maharashtra',
      text:
        'SULF 55 controlled powdery mildew and mites together in my grapes during the humid season. It mixes smoothly without clogging the nozzle, unlike the old sulphur powder I used before. The bunches stayed clean and I got better rates at the market this season.',
      rating: 5
    },
    {
      name: 'Rajesh',
      location: 'Gujarat',
      text:
        'I used SULF 55 on my cumin and chilli for powdery mildew. The preventive sprays kept the crop healthy and the high-load liquid sulphur gave dependable cover. The 30 ml per pump dose is easy to follow and the produce quality improved noticeably.',
      rating: 5
    },
    {
      name: 'Naresh',
      location: 'Rajasthan',
      text:
        'Mite and mildew pressure was high in my pomegranate when I added SULF 55 to my program. It managed both problems in one spray, which saved time and cost. I like that it is a sulphur product that fits well with my other sprays for resistance management.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.7',
    reviewCount: '53',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding SULF 55.' },
    { name: 'Measure SULF 55', text: 'Accurately measure 30 ml of Sulphur 55.16% SC for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Cover leaves, stems, and fruits, including leaf undersides where mildew and mites develop.' },
    { name: 'Ensure complete coverage', text: 'Uniform canopy coverage is essential for contact fungicide and miticide efficacy across all target crops.' },
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
        'Sulphur 55.16% SC SULF 55 Liquid Sulphur Fungicide and Miticide for Fruit and Vegetable Crops',
      productImageCaption:
        'High-load Liquid Sulphur Fungicide and Miticide for Powdery Mildew, Mites, Rust and Scab Control',
      description:
        'SULF 55 (Sulphur 55.16% SC) by Harishree Crop Science is a high-load liquid sulphur fungicide and miticide for powdery mildew, mites, rust, leaf spot, anthracnose, and scab. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Fungicide',
      sku: 'SULF55-SULPHUR-55-16-SC',
      mpn: 'SULF55-SULPHUR-55-16-SC',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply SULF 55 (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of SULF 55 (Sulphur 55.16% SC) for preventive foliar application at 30 ml/pump.',
      alternateNames: ['SULF 55', this.productTitle],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `SULF 55 (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'SULF 55 Sulphur 55.16% SC is a high-load liquid sulphur fungicide and miticide for powdery mildew, mites, rust & scab on grapes, chilli & apple. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Sulphur 55.16% SC | SULF 55',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Sulphur 55.16% SC (SULF 55) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'SULF 55 | Sulphur 55.16% SC Fungicide',
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
