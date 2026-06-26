import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'TAIGAR22_LIME_SULPHUR_22_SC';
const INDICATIVE_LIST_PRICE_INR = 566;

@Component({
  selector: 'app-lime-sulphur-22-sc-taigar-22',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lime-sulphur-22-sc-taigar-22.component.html',
  styleUrl: './lime-sulphur-22-sc-taigar-22.component.scss'
})
export class LimeSulphur22ScTaigar22Component implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/lime-sulphur-22-sc-taigar-22';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/lime-sulphur-22-sc.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Lime Sulphur 22% SC';
  brandName = 'TAIGAR 22';

  featuredSnippetAnswer =
    'TAIGAR 22 (Lime Sulphur 22% SC) is a sulphur-based, organic-compatible contact fungicide and miticide by Harishree Crop Science for control of powdery mildew, scab, rust, mite infestation, fungal spots, sooty mold, and leaf-curl-related fungal infection across apple, grapes, pomegranate, citrus, mango, chilli, and vegetables. Recommended dose: 3 litres per acre.';

  packSizes = [
    { volume: '5 Ltr', price: 295, featured: false, sku: 'TAIGAR22-5LTR' },
    { volume: '10 Ltr', price: 566, featured: true, sku: 'TAIGAR22-10LTR' },
    { volume: '15 Ltr', price: 826, featured: false, sku: 'TAIGAR22-15LTR' }
  ];

  quickHighlights = [
    {
      title: 'Sulphur-based chemistry',
      description:
        'TAIGAR 22 (Lime Sulphur 22% SC) harnesses proven elemental sulphur chemistry, acting on multiple fungal sites to control powdery mildew and key fungal diseases on fruit and vegetable crops.',
      icon: 'fas fa-atom'
    },
    {
      title: 'Dual fungicide + miticide',
      description:
        'One TAIGAR 22 spray manages fungal diseases such as powdery mildew, scab, and rust while also suppressing mite infestation — covering two problems in a single application.',
      icon: 'fas fa-bug-slash'
    },
    {
      title: 'Organic compatible',
      description:
        'Sulphur is a long-trusted, residue-friendly input that fits well into organic and sustainable crop programs, supporting clean produce for premium fruit and vegetable markets.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Multi-site protection',
      description:
        'Acting on multiple biochemical sites, TAIGAR 22 delivers dependable preventive control and a low risk of resistance, making it a strong rotation partner.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Preventive barrier',
      description:
        'TAIGAR 22 builds a protective sulphur layer on leaves and fruits before pathogens and mites establish — ideal for scheduled preventive sprays in fruit orchards and vineyards.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Rainfast performance',
      description:
        'Once the SC spray deposit dries on foliage, TAIGAR 22 adheres well and maintains its protective barrier even after light rainfall during humid spray windows.',
      icon: 'fas fa-cloud-rain'
    },
    {
      title: 'Easy mixing SC',
      description:
        'The flowable suspension concentrate disperses smoothly in water for uniform spray coverage on leaves, stems, and fruits across orchard and field crops.',
      icon: 'fas fa-flask'
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
        'Cleaner fruits with reduced scab, mildew, and sooty mold scarring improve marketability in apple, grapes, pomegranate, citrus, and mango programs.',
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
      title: 'Sulphur multi-site protection',
      description:
        'TAIGAR 22 acts on several biochemical sites in fungal and mite cells, delivering broad preventive control with a low risk of resistance compared to single-site fungicides.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Fungicide and miticide in one',
      description:
        'TAIGAR 22 manages powdery mildew, scab, rust, and fungal spots while also suppressing mites — reducing the need for separate products in fruit and vegetable programs.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Organic-compatible chemistry',
      description:
        'Sulphur is a residue-friendly, widely accepted input that fits sustainable and organic crop programs, helping growers produce clean fruit and vegetables for premium markets.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at ₹566 for the popular 10 Ltr pack, crop-safe application at the recommended 3 litres per acre, and dual fungicide-miticide action deliver strong farm profitability.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Broad-spectrum disease control',
      description:
        'TAIGAR 22 controls powdery mildew, scab, rust, fungal spots, sooty mold, and leaf-curl-related fungal infection — common threats across Indian fruit and vegetable crops.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Effective mite suppression',
      description:
        'Beyond fungal control, TAIGAR 22 suppresses mite infestation on fruit and vegetable crops, helping protect leaf area and fruit quality from mite damage.',
      icon: 'fas fa-bug-slash'
    },
    {
      title: 'Strong preventive protection',
      description:
        'Lime Sulphur 22% builds a protective barrier on treated surfaces before pathogens and mites establish — ideal for scheduled preventive sprays in humid conditions.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Multi-site mode of action',
      description:
        'By acting on multiple sites, TAIGAR 22 delivers dependable control and serves as a strong anti-resistance partner in fungicide and miticide rotation programs.',
      icon: 'fas fa-shield-virus'
    },
    {
      title: 'Organic-compatible input',
      description:
        'Sulphur chemistry is residue-friendly and widely accepted in sustainable and organic programs, supporting clean produce for premium fruit and vegetable markets.',
      icon: 'fas fa-recycle'
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
        'By controlling mildew, scab, and sooty mold that scar produce, TAIGAR 22 helps growers deliver cleaner, more uniform harvests suited to premium market channels.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting leaves and fruits during critical stages helps preserve yield when powdery mildew, scab, or mite pressure is high in orchards and vineyards.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better marketable produce',
      description:
        'Reduced disease and mite scarring on apple, grape, pomegranate, and citrus fruits improves pack-out rates and buyer acceptance at premium markets.',
      icon: 'fas fa-store'
    },
    {
      title: 'Reduced crop losses',
      description:
        'Timely TAIGAR 22 application limits defoliation, fruit scarring, and mite damage — protecting the grower\'s investment in orchard and vineyard management.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Improved farm profitability',
      description:
        'Dependable dual fungicide-miticide protection at a farmer-friendly 3 litres per acre helps growers protect yield and quality, translating spray spend into stronger returns.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'TAIGAR 22 Fungicide is a premium sulphur-based contact fungicide and miticide from HARISHREE CROP SCIENCE, formulated as Lime Sulphur 22% SC. Fruit and vegetable growers face increasing pressure from powdery mildew, scab, rust, mite infestation, fungal spots, sooty mold, and leaf-curl-related fungal infection — problems that scar produce and cut yields when left unchecked. Sulphur-based products like TAIGAR 22 are trusted because they combine dependable multi-site disease control with mite suppression in a residue-friendly, organic-compatible formulation.';

  aboutOverview =
    'The suspension concentrate (SC) formulation disperses evenly in water for uniform foliar coverage on leaves, stems, and fruits. TAIGAR 22 is engineered for crop safety when used at the recommended 3 litres per acre, supporting healthier plant growth, improved produce quality, and better productivity across apple, grapes, pomegranate, citrus, mango, chilli, and vegetables. For agronomists and dealers, TAIGAR 22 represents a dependable, organic-compatible crop protection solution backed by Harishree quality control and batch-to-batch consistency — designed for the real-world disease and mite pressure Indian fruit and vegetable growers manage every season.';

  aboutSulphur =
    'Lime Sulphur 22% is a sulphur-based contact fungicide and acaricide. It works through multiple modes — releasing active sulphur species that interfere with fungal respiration and disrupt mite physiology on contact. This multi-site action stops spore germination and suppresses mites on the treated plant surface, delivering strong preventive protection before infection and infestation establish.';

  aboutMultiSite =
    'Because sulphur acts on multiple sites rather than a single target, TAIGAR 22 carries a very low risk of resistance development. This makes it an excellent rotation and tank-mix partner for systemic fungicides and miticides, helping growers protect the long-term effectiveness of their disease and mite management programs.';

  aboutCombined =
    'As an organic-compatible contact product, TAIGAR 22 builds a protective layer that keeps working on the leaf and fruit surface between sprays. Growers applying TAIGAR 22 preventively gain dependable broad-spectrum fungal cover plus mite suppression and the resistance-management value of multi-site sulphur chemistry — a combination that supports clean, marketable produce across apple, grapes, pomegranate, citrus, mango, chilli, and vegetable programs.';

  targetCropsTable = [
    { crop: 'Apple', diseases: 'Scab, Powdery Mildew' },
    { crop: 'Grapes', diseases: 'Powdery Mildew, Mites' },
    { crop: 'Pomegranate', diseases: 'Fungal Spots, Mites' },
    { crop: 'Citrus', diseases: 'Scab, Sooty Mold' },
    { crop: 'Mango', diseases: 'Powdery Mildew, Sooty Mold' },
    { crop: 'Chilli', diseases: 'Powdery Mildew, Mites' },
    { crop: 'Vegetables', diseases: 'Powdery Mildew, Fungal Spots' }
  ];

  diseaseDetails = [
    {
      name: 'Powdery Mildew',
      symptoms:
        'White to grey powdery fungal growth on upper leaf surfaces, stems, and fruits. Leaves may curl, yellow, and drop prematurely when colonies spread across the canopy during dry, humid spells.',
      impact:
        'Powdery mildew reduces photosynthesis, weakens plants, and causes fruit scarring — cutting marketable yield in grapes, apple, mango, chilli, and vegetables when left untreated.',
      controlBenefits:
        'TAIGAR 22 sulphur chemistry suppresses mildew colonies through multi-site contact action. Spray preventively and at first visible colonies with full canopy coverage for best long-lasting control.'
    },
    {
      name: 'Scab',
      symptoms:
        'Rough, corky, dark lesions on fruits and leaves of apple and citrus. Severe scab causes cracking, deformation, and downgrading of fruit quality at harvest.',
      impact:
        'Scab directly damages fruit appearance and marketability, lowering pack-out rates and prices in apple and citrus orchards when not controlled preventively.',
      controlBenefits:
        'TAIGAR 22 forms a protective sulphur barrier that limits scab establishment. Apply preventively with thorough coverage of developing fruits and foliage for clean, marketable produce.'
    },
    {
      name: 'Rust',
      symptoms:
        'Orange, brown, or reddish pustules on leaves and stems. Infected tissue turns yellow and may defoliate when rust severity is high during warm, moist growing conditions.',
      impact:
        'Rust destroys leaf area essential for fruit development. Severe infections can reduce yield and weaken trees and vines if not controlled at early pustule stage.',
      controlBenefits:
        'TAIGAR 22 limits rust spread through multi-site sulphur action. Apply when first pustules appear with uniform coverage to protect leaf area through the season.'
    },
    {
      name: 'Mite Infestation',
      symptoms:
        'Fine stippling, bronzing, and webbing on leaves with tiny moving mites visible under magnification. Heavy infestation causes leaf curling, drying, and premature drop.',
      impact:
        'Mites reduce photosynthetic leaf area and weaken plants, lowering fruit size and quality in grapes, pomegranate, chilli, and other crops during hot, dry spells.',
      controlBenefits:
        'TAIGAR 22 suppresses mite populations on contact through sulphur acaricidal action. Spray at early infestation with thorough coverage, including leaf undersides, for dependable control.'
    },
    {
      name: 'Sooty Mold',
      symptoms:
        'Black, soot-like fungal coating on leaves and fruits, usually developing on honeydew left by sucking pests. Heavy coating blocks light and reduces photosynthesis.',
      impact:
        'Sooty mold reduces photosynthesis and downgrades fruit appearance, cutting marketability in citrus, mango, and other fruit crops where sucking pests are active.',
      controlBenefits:
        'TAIGAR 22 helps clean and protect foliage and fruit surfaces from sooty mold development. Apply preventively alongside pest management for clean, marketable produce.'
    },
    {
      name: 'Fungal Spots',
      symptoms:
        'Various brown to dark circular or irregular spots on leaves and fruits that enlarge and merge under humid conditions, causing necrosis and premature leaf drop.',
      impact:
        'Fungal spots reduce leaf area and scar produce, lowering both yield and market quality in pomegranate, vegetables, and other crops when the disease spreads rapidly.',
      controlBenefits:
        'TAIGAR 22 protective sulphur barrier limits fungal spot development on foliage and fruits. Apply preventively with uniform coverage for dependable multi-site control.'
    }
  ];

  targetPests = [
    {
      name: 'Powdery Mildew',
      description:
        'White powdery colonies on leaves and fruits. TAIGAR 22 sulphur multi-site action suppresses mildew development and protects new growth in grapes, apple, and chilli.'
    },
    {
      name: 'Scab',
      description:
        'Rough corky lesions on apple and citrus fruits. TAIGAR 22 protective barrier limits scab establishment for clean, marketable produce.'
    },
    {
      name: 'Rust',
      description:
        'Orange to brown pustules on leaves and stems. TAIGAR 22 multi-site sulphur action limits rust spread at early appearance.'
    },
    {
      name: 'Mite Infestation',
      description:
        'Stippling, bronzing, and webbing from mites. TAIGAR 22 acaricidal sulphur action suppresses mite populations on contact in fruit and vegetable crops.'
    },
    {
      name: 'Fungal Spots',
      description:
        'Brown circular spots on leaves and fruits. TAIGAR 22 protective barrier limits fungal spot development across pomegranate and vegetables.'
    },
    {
      name: 'Sooty Mold',
      description:
        'Black soot-like coating on foliage and fruit. TAIGAR 22 helps clean and protect surfaces from sooty mold in citrus and mango.'
    },
    {
      name: 'Leaf Curl Fungal Infection',
      description:
        'Leaf-curl-related fungal infection on fruit crops. TAIGAR 22 multi-site sulphur chemistry limits associated fungal development on protected foliage.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Preventive, before disease/mite build-up' },
    { application: 'Coverage', recommendation: 'Uniform canopy coverage' },
    { application: 'Dose', recommendation: '3 litres per acre' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'TAIGAR 22' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide / Miticide' },
      { label: 'Formulation type', value: 'SC (Suspension Concentrate)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Lime Sulphur 22%' },
      { label: 'Chemical group', value: 'Inorganic sulphur (multi-site)' },
      { label: 'Action type', value: 'Multi-site contact, preventive disease and mite control' },
      { label: 'Diseases controlled', value: 'Powdery mildew, scab, rust, mites, fungal spots, sooty mold, leaf curl fungal infection' },
      { label: 'Target crops', value: 'Apple, grapes, pomegranate, citrus, mango, chilli, vegetables' }
    ],
    packs: [
      { label: 'Packaging', value: 'Can; sizes 5 Ltr, 10 Ltr, 15 Ltr' },
      { label: 'Recommended dose', value: '3 litres per acre' },
      { label: 'Water volume', value: 'Adequate water for full canopy coverage (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Preventive, before disease/mite build-up or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaves, stems, and fruits' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'TAIGAR 22' },
    { label: 'Brand / Trade Name', value: 'TAIGAR 22' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Lime Sulphur 22%' },
    { label: 'Formulation', value: 'SC (Suspension Concentrate)' },
    { label: 'Chemical Group', value: 'Inorganic sulphur (multi-site contact)' },
    { label: 'Action Type', value: 'Preventive broad-spectrum contact fungicide and miticide' },
    { label: 'Diseases Controlled', value: 'Powdery mildew, scab, rust, mites, fungal spots, sooty mold, leaf curl fungal infection' },
    { label: 'Target Crops', value: 'Apple, grapes, pomegranate, citrus, mango, chilli, vegetables' },
    { label: 'Recommended Dose', value: '3 litres per acre' },
    { label: 'Water Volume', value: 'Adequate water for full canopy coverage' },
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
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying TAIGAR 22 Fungicide.'
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
      title: 'Do not mix with oils or sulphur-sensitive crops',
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
      text: 'Use exactly 3 litres per acre. Over-dosing does not improve control and may increase crop safety risk.'
    }
  ];

  relatedProducts = [
    {
      name: 'SULF 55 (Sulphur 55.16% SC)',
      description: 'Liquid sulphur fungicide for powdery mildew, mites, rust, and leaf spot across fruit and vegetable crops.',
      route: '/products/sulphur-55-16-sc',
      image: 'assets/products/fungicide/sulphur-55-16-sc.png',
      imageAlt: 'SULF 55 Sulphur 55.16% SC fungicide by Harishree Crop Science'
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
      question: 'What is TAIGAR 22 Fungicide used for?',
      answer:
        '<strong>TAIGAR 22 Fungicide</strong> (<strong>Lime Sulphur 22% SC</strong>) is used for <strong>broad-spectrum control of fungal diseases and mites</strong> including powdery mildew, scab, rust, mite infestation, fungal spots, sooty mold, and leaf-curl-related fungal infection in apple, grapes, pomegranate, citrus, mango, chilli, and vegetables. It is an organic-compatible sulphur fungicide and miticide by <strong>HARISHREE CROP SCIENCE</strong>.',
      answerPlain:
        'TAIGAR 22 Fungicide (Lime Sulphur 22% SC) is used for broad-spectrum control of fungal diseases and mites including powdery mildew, scab, rust, mite infestation, fungal spots, sooty mold, and leaf-curl-related fungal infection in apple, grapes, pomegranate, citrus, mango, chilli, and vegetables. It is an organic-compatible sulphur fungicide and miticide by HARISHREE CROP SCIENCE.'
    },
    {
      question: 'Which diseases and pests does Lime Sulphur 22% SC control?',
      answer:
        '<strong>Lime Sulphur 22% SC</strong> controls <strong>powdery mildew</strong>, <strong>scab</strong>, <strong>rust</strong>, <strong>mite infestation</strong>, <strong>fungal spots</strong>, <strong>sooty mold</strong>, and <strong>leaf-curl-related fungal infection</strong>. TAIGAR 22 delivers preventive protection through multi-site sulphur action when applied with uniform canopy coverage.',
      answerPlain:
        'Lime Sulphur 22% SC controls powdery mildew, scab, rust, mite infestation, fungal spots, sooty mold, and leaf-curl-related fungal infection. TAIGAR 22 delivers preventive protection through multi-site sulphur action when applied with uniform canopy coverage.'
    },
    {
      question: 'Which crops can be treated with TAIGAR 22?',
      answer:
        '<strong>TAIGAR 22 Fungicide</strong> can be used on <strong>apple</strong>, <strong>grapes</strong>, <strong>pomegranate</strong>, <strong>citrus</strong>, <strong>mango</strong>, <strong>chilli</strong>, and <strong>vegetables</strong>. It is a versatile, organic-compatible crop protection product for fruit and vegetable programs facing fungal and mite pressure.',
      answerPlain:
        'TAIGAR 22 Fungicide can be used on apple, grapes, pomegranate, citrus, mango, chilli, and vegetables. It is a versatile, organic-compatible crop protection product for fruit and vegetable programs facing fungal and mite pressure.'
    },
    {
      question: 'What is the recommended dosage of TAIGAR 22 Fungicide?',
      answer:
        'The standard recommended dose of <strong>TAIGAR 22 Fungicide</strong> is <strong>3 litres per acre</strong> in adequate water for full canopy coverage. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.',
      answerPlain:
        'The standard recommended dose of TAIGAR 22 Fungicide is 3 litres per acre in adequate water for full canopy coverage. Always confirm the final dose with the printed label and local agronomic advisory for your specific crop and disease pressure level.'
    },
    {
      question: 'Is TAIGAR 22 a fungicide or a miticide?',
      answer:
        '<strong>TAIGAR 22</strong> is <strong>both a fungicide and a miticide</strong>. Its sulphur chemistry controls fungal diseases such as powdery mildew, scab, and rust while also suppressing mite infestation — managing two problems in a single application.',
      answerPlain:
        'TAIGAR 22 is both a fungicide and a miticide. Its sulphur chemistry controls fungal diseases such as powdery mildew, scab, and rust while also suppressing mite infestation — managing two problems in a single application.'
    },
    {
      question: 'Is TAIGAR 22 suitable for organic farming?',
      answer:
        '<strong>TAIGAR 22</strong> is an <strong>organic-compatible</strong> sulphur-based input that is residue-friendly and widely accepted in sustainable crop programs. It helps growers produce clean fruit and vegetables for premium markets when used as directed.',
      answerPlain:
        'TAIGAR 22 is an organic-compatible sulphur-based input that is residue-friendly and widely accepted in sustainable crop programs. It helps growers produce clean fruit and vegetables for premium markets when used as directed.'
    },
    {
      question: 'When should TAIGAR 22 be sprayed?',
      answer:
        'Spray <strong>TAIGAR 22</strong> <strong>preventively, before disease or mite build-up</strong>, or at first appearance. Apply in calm morning or evening hours with <strong>uniform canopy coverage</strong> on leaves, stems, and fruits. Avoid application during very high temperatures or close to oil sprays.',
      answerPlain:
        'Spray TAIGAR 22 preventively, before disease or mite build-up, or at first appearance. Apply in calm morning or evening hours with uniform canopy coverage on leaves, stems, and fruits. Avoid application during very high temperatures or close to oil sprays.'
    },
    {
      question: 'Why choose TAIGAR 22 over ordinary fungicides?',
      answer:
        '<strong>TAIGAR 22</strong> offers <strong>dual fungicide-miticide action</strong>, <strong>multi-site sulphur protection</strong> with low resistance risk, <strong>organic-compatible chemistry</strong>, and <strong>better return on investment</strong> at ₹566 for the popular 10 Ltr pack — making it an ideal preventive and rotation partner for fruit and vegetable crops.',
      answerPlain:
        'TAIGAR 22 offers dual fungicide-miticide action, multi-site sulphur protection with low resistance risk, organic-compatible chemistry, and better return on investment at ₹566 for the popular 10 Ltr pack — making it an ideal preventive and rotation partner for fruit and vegetable crops.'
    }
  ];

  testimonials = [
    {
      name: 'Balwinder',
      location: 'Himachal Pradesh',
      text:
        'I used TAIGAR 22 on my apple orchard to manage scab and powdery mildew. The preventive sprays kept the fruit clean and the foliage healthy through the season. Being a sulphur product, it fits well with my other sprays and the fruit quality at harvest was clearly better.',
      rating: 5
    },
    {
      name: 'Ganesh',
      location: 'Maharashtra',
      text:
        'Powdery mildew and mites were building in my grapes when I added TAIGAR 22 to my program. It controlled both problems together, which saved me a separate spray. The bunches stayed clean and I got better rates at the market this season.',
      rating: 5
    },
    {
      name: 'Imran',
      location: 'Gujarat',
      text:
        'TAIGAR 22 helped me manage fungal spots and mite pressure in my pomegranate. The 3 litres per acre dose is easy to follow and the SC mixes smoothly in the tank. I like that it is organic compatible and leaves clean, marketable fruit.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.7',
    reviewCount: '49',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Fill the sprayer tank with the required clean water for full canopy coverage of the acre being treated.' },
    { name: 'Measure TAIGAR 22', text: 'Accurately measure the per-acre quantity of Lime Sulphur 22% SC at the recommended 3 litres per acre.' },
    { name: 'Mix thoroughly', text: 'Add TAIGAR 22 to the water, top up the tank, and agitate until the SC forms a uniform spray suspension.' },
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
        'Lime Sulphur 22% SC TAIGAR 22 Sulphur Fungicide and Miticide for Fruit and Vegetable Crops',
      productImageCaption:
        'Organic Compatible Sulphur Fungicide and Miticide for Powdery Mildew, Scab, Rust and Mite Control',
      description:
        'TAIGAR 22 (Lime Sulphur 22% SC) by Harishree Crop Science is an organic-compatible sulphur fungicide and miticide for powdery mildew, scab, rust, mites, fungal spots, and sooty mold. Dose: 3 litres per acre.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: this.brandName,
      category: 'Agricultural Fungicide',
      sku: 'TAIGAR22-LIME-SULPHUR-22-SC',
      mpn: 'TAIGAR22-LIME-SULPHUR-22-SC',
      dose: '3 litres per acre',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply TAIGAR 22 (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a sprayer tank of TAIGAR 22 (Lime Sulphur 22% SC) for preventive foliar application at 3 litres per acre.',
      alternateNames: ['TAIGAR 22', this.productTitle],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `TAIGAR 22 (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'SC (Suspension Concentrate)'
    };
  }

  private applySeo(): void {
    const desc =
      'TAIGAR 22 Lime Sulphur 22% SC is an organic-compatible sulphur fungicide and miticide for powdery mildew, scab, rust & mites on apple, grapes & pomegranate. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Lime Sulphur 22% SC | TAIGAR 22',
        description: desc,
        keywords: this.productTitle,
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Lime Sulphur 22% SC (TAIGAR 22) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'TAIGAR 22 | Lime Sulphur 22% SC Fungicide',
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
