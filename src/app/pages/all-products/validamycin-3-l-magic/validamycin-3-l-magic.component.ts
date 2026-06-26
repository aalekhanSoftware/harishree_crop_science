import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'MAGIC_VALIDAMYCIN_3_L';
const INDICATIVE_LIST_PRICE_INR = 165;

@Component({
  selector: 'app-validamycin-3-l-magic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './validamycin-3-l-magic.component.html',
  styleUrl: './validamycin-3-l-magic.component.scss'
})
export class Validamycin3LMagicComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/validamycin-3-l-magic';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/fungicide/validamycin-3-l.jpg';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Validamycin 3% L';
  brandName = 'MAGIC';

  featuredSnippetAnswer =
    'MAGIC (Validamycin 3% L) is an antibiotic fungicide by Harishree Crop Science for effective control of sheath blight and Rhizoctonia diseases in paddy and rice. The liquid formulation is readily absorbed, moves within plant tissues, and suppresses fungal growth for long-lasting, crop-safe protection. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '500 ml', price: 165, featured: true, sku: 'MAGIC-500ML' },
    { volume: '1 Ltr', price: 307, featured: false, sku: 'MAGIC-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Antibiotic fungicide',
      description:
        'MAGIC delivers Validamycin 3% L — a microbial-origin antibiotic fungicide that specifically targets Rhizoctonia solani, the fungus responsible for sheath blight in rice.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Best for sheath blight',
      description:
        'MAGIC is engineered for dependable control of rice sheath blight, protecting leaf sheaths and lower leaves where the disease establishes in dense, humid paddy stands.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Fast absorption',
      description:
        'The liquid formulation is taken up quickly and moves within plant tissue, so disease suppression starts soon after spraying and works from inside the canopy.',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Preventive action',
      description:
        'Applied before or at early disease appearance, MAGIC suppresses Rhizoctonia development — ideal for scheduled programs when humid weather favours sheath blight.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Curative action',
      description:
        'MAGIC checks active sheath blight lesions by interfering with fungal growth processes, limiting lesion spread up the plant when sprayed at first symptoms.',
      icon: 'fas fa-notes-medical'
    },
    {
      title: 'Long-lasting protection',
      description:
        'Steady activity inside plant tissue maintains protection between spray rounds during critical tillering and panicle-initiation stages of the rice crop.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Crop-safe and gentle',
      description:
        'Validamycin is gentle on the crop and beneficial organisms when used as directed, fitting cleanly into integrated and sustainable disease-management programs.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Healthier crop stand',
      description:
        'By keeping sheaths and lower leaves disease-free, MAGIC supports stronger stems, better tillering, and a healthier canopy through the season.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better grain quality',
      description:
        'Protecting the plant from sheath blight supports better grain fill and cleaner, higher-quality paddy at harvest with reduced chaffy grains.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher yield potential',
      description:
        'Timely sheath blight control preserves stem strength and green leaf area — supporting higher yield potential and improved harvest quality per acre.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Proven Validamycin technology',
      description:
        'MAGIC is built on trusted Validamycin 3% L chemistry — a globally recognised antibiotic fungicide relied on by rice growers for dependable sheath blight management.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Effective sheath blight control',
      description:
        'A single MAGIC spray targets Rhizoctonia solani at the source, protecting sheaths and lower leaves where sheath blight establishes and spreads in paddy.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Long-lasting effectiveness',
      description:
        'Activity inside plant tissue maintains preventive and curative protection between spray intervals, reducing application frequency during high disease-pressure periods.',
      icon: 'fas fa-clock'
    },
    {
      title: 'Better return on investment',
      description:
        'Competitive pricing at the best-selling 500 ml pack, a simple 30 ml per pump dose, and healthier high-yielding paddy deliver strong farm profitability per acre.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Excellent sheath blight control',
      description:
        'MAGIC delivers dependable control of rice sheath blight, the most damaging fungal disease in intensive paddy, by targeting Rhizoctonia solani directly.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Effective against Rhizoctonia',
      description:
        'Validamycin 3% acts specifically on Rhizoctonia species, suppressing the pathogen responsible for sheath blight and related fungal infections.',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Antibiotic-based activity',
      description:
        'As a microbial-origin antibiotic fungicide, MAGIC works through a distinct mode of action that complements other chemistries in resistance-management programs.',
      icon: 'fas fa-dna'
    },
    {
      title: 'Long-lasting protection',
      description:
        'Steady systemic activity inside plant tissue reduces disease pressure between scheduled sprays during humid, infection-favourable weather windows.',
      icon: 'fas fa-hourglass-half'
    },
    {
      title: 'Improved crop health',
      description:
        'Disease-free sheaths and leaves support stronger stems and a healthier canopy, helping the rice plant grow uniformly through reproductive stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better grain quality',
      description:
        'By controlling sheath blight that weakens stems and grain fill, MAGIC helps growers harvest cleaner, more uniform paddy suited to better market rates.',
      icon: 'fas fa-award'
    },
    {
      title: 'Increased yield potential',
      description:
        'Protecting stem strength and green leaf area during tillering and panicle stages helps preserve yield when sheath blight pressure is high in dense stands.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Reduced disease spread',
      description:
        'Early MAGIC application limits the upward and field-to-field spread of Rhizoctonia, protecting both the treated plot and neighbouring crop areas.',
      icon: 'fas fa-ban'
    },
    {
      title: 'Cost-effective protection',
      description:
        'Dependable control at a farmer-friendly 30 ml per pump dose helps growers protect yield and quality, turning disease-control spend into stronger returns per acre.',
      icon: 'fas fa-hand-holding-usd'
    },
    {
      title: 'Fits integrated programs',
      description:
        'With a unique antibiotic mode of action and good crop safety, MAGIC integrates cleanly into integrated disease-management and sustainable farming practices.',
      icon: 'fas fa-clipboard-check'
    }
  ];

  aboutIntro =
    'MAGIC Fungicide is a specialised antibiotic fungicide from HARISHREE CROP SCIENCE, formulated as Validamycin 3% L. Rice growers across India lose significant yield to sheath blight, a destructive disease caused by the soil-borne fungus Rhizoctonia solani that thrives in dense, well-fertilised, high-humidity paddy. Antibiotic fungicides like MAGIC are trusted because they target the pathogen with a distinct mode of action while remaining gentle on the crop, making them a valuable tool in modern, sustainable disease management.';

  aboutOverview =
    'The liquid (L) formulation mixes easily in water for uniform foliar coverage on leaf sheaths and lower leaves where sheath blight establishes. MAGIC is engineered for crop safety when used at the recommended 30 ml per pump dose, supporting healthier plant growth, better grain quality, and improved productivity in paddy, rice, and other susceptible crops. For agronomists and dealers, MAGIC represents a dependable, targeted disease-control solution backed by Harishree quality control and batch-to-batch consistency — a formulation designed for the real-world disease pressure Indian rice farmers manage every season.';

  aboutActive =
    'Validamycin 3% is a microbial-origin antibiotic fungicide produced by fermentation. It is highly specific in its action against Rhizoctonia solani — the fungus that causes sheath blight in rice and damping-off and root-zone infections in several crops. Validamycin interferes with the fungal growth process at the hyphal level, inhibiting the enzyme trehalase and disrupting normal development of the pathogen so that lesion expansion and disease spread are arrested. Because it is readily absorbed and moves within plant tissues, MAGIC delivers both preventive protection and curative suppression of active infections.';

  aboutCombined =
    'Sprayed at early disease appearance, MAGIC gives immediate suppression of active sheath blight lesions plus extended protection from a single application. Its targeted antibiotic mode of action makes it especially valuable in resistance-management programs, where rotating with fungicides of a different chemistry helps preserve long-term efficacy. Gentle on the crop and on many beneficial organisms when used as directed, MAGIC fits cleanly into integrated disease-management plans for intensive paddy production.';

  targetCropsTable = [
    { crop: 'Paddy', diseases: 'Sheath Blight, Rhizoctonia Disease' },
    { crop: 'Rice', diseases: 'Sheath Blight, Sheath Rot' },
    { crop: 'Wheat', diseases: 'Rhizoctonia Root and Sheath Diseases' },
    { crop: 'Maize', diseases: 'Banded Leaf and Sheath Blight' },
    { crop: 'Sugarcane', diseases: 'Sheath and Soil-Borne Fungal Diseases' },
    { crop: 'Vegetables', diseases: 'Rhizoctonia Damping Off and Root Diseases' },
    { crop: 'Chilli', diseases: 'Damping Off, Root Zone Infections' },
    { crop: 'Tomato', diseases: 'Damping Off, Collar Rot' }
  ];

  diseaseDetails = [
    {
      name: 'Sheath Blight',
      symptoms:
        'Oval, greenish-grey water-soaked lesions on leaf sheaths near the water line that enlarge with grey centres and brown margins. Lesions climb up the plant in dense, humid paddy and cause sheath and leaf drying.',
      impact:
        'Sheath blight is the most economically damaging fungal disease of rice. It weakens stems, reduces grain fill, increases chaffy grains, and can cause lodging in high-yielding varieties under heavy nitrogen and humidity.',
      controlBenefits:
        'MAGIC (Validamycin 3% L) targets Rhizoctonia solani directly, arresting lesion expansion. Apply at early lesion stage with uniform coverage on sheaths and lower leaves for dependable control.'
    },
    {
      name: 'Rhizoctonia Disease',
      symptoms:
        'Brown, sunken lesions on sheaths, stems, and roots caused by Rhizoctonia species. In seedlings the fungus causes rot at the soil line; in mature crops it spreads along sheaths and the canopy.',
      impact:
        'Rhizoctonia infections reduce stand establishment, weaken stems, and lower yield across rice, maize, and vegetable crops, with rapid spread under warm, humid, high-density conditions.',
      controlBenefits:
        'MAGIC suppresses Rhizoctonia growth through its specific antibiotic action, protecting stems, sheaths, and the root zone when applied preventively or at first disease signs.'
    },
    {
      name: 'Stem Rot',
      symptoms:
        'Dark lesions and softening at the base of the stem and sheath, often progressing into the inner tissue. Affected stems weaken and may collapse under grain load in advanced infection.',
      impact:
        'Stem rot reduces the plant\'s ability to support panicles and transport nutrients, leading to lodging, poor grain fill, and yield losses in paddy and other sheath-bearing crops.',
      controlBenefits:
        'MAGIC limits fungal advance into stem and sheath tissue, helping preserve stem strength when sprayed early with thorough coverage of the lower canopy.'
    },
    {
      name: 'Root Zone & Soil-Borne Fungal Infections',
      symptoms:
        'Damping off of seedlings, rotting at the collar region, and poor, patchy crop emergence. Roots and the basal stem show browning and decay where soil-borne fungi attack.',
      impact:
        'Soil-borne and root-zone infections reduce plant population, stunt growth, and force costly gap-filling or re-sowing, cutting overall productivity in nurseries and field crops.',
      controlBenefits:
        'MAGIC suppresses Rhizoctonia in the root zone and collar region, supporting better stand establishment and healthier early growth when used as a directed spray.'
    },
    {
      name: 'Crop Canopy Fungal Infections',
      symptoms:
        'Spreading lesions and fungal mycelium across leaves and sheaths in dense canopies, especially during prolonged humid and overcast weather that keeps the canopy wet.',
      impact:
        'Canopy infections reduce photosynthetic leaf area, accelerate leaf drying, and increase secondary infections, lowering both yield and grain quality.',
      controlBenefits:
        'MAGIC moves within plant tissue to check fungal spread across the canopy, protecting green leaf area when applied at early disease appearance with full coverage.'
    },
    {
      name: 'Rhizoctonia Disease Complex & Secondary Infections',
      symptoms:
        'A mix of sheath, stem, and leaf symptoms caused by Rhizoctonia species, often followed by opportunistic secondary fungal infections in weakened, lodged, or wounded plants.',
      impact:
        'The combined disease complex compounds yield loss, weakens crop structure, and degrades grain quality, particularly in intensively managed, high-density paddy systems.',
      controlBenefits:
        'MAGIC\'s targeted action against Rhizoctonia reduces the primary infection that drives the complex, lowering disease pressure and limiting the door for secondary infections.'
    }
  ];

  targetPests = [
    {
      name: 'Sheath Blight',
      description:
        'Greenish-grey sheath lesions in dense paddy. MAGIC targets Rhizoctonia solani directly, arresting lesion spread along sheaths and lower leaves.'
    },
    {
      name: 'Rhizoctonia Disease',
      description:
        'Brown lesions on sheaths, stems, and roots. MAGIC suppresses Rhizoctonia growth through its specific antibiotic mode of action in rice, maize, and vegetables.'
    },
    {
      name: 'Stem Rot',
      description:
        'Basal stem and sheath rotting that weakens plants. MAGIC limits fungal advance into stem tissue, helping preserve stem strength and prevent lodging.'
    },
    {
      name: 'Damping Off',
      description:
        'Seedling rot at the soil line in nurseries and vegetables. MAGIC suppresses root-zone Rhizoctonia for better stand establishment.'
    },
    {
      name: 'Banded Leaf & Sheath Blight',
      description:
        'Banded sheath lesions in maize. MAGIC checks Rhizoctonia spread across the canopy when applied at early disease appearance.'
    },
    {
      name: 'Soil-Borne Fungal Infections',
      description:
        'Root and collar infections that reduce crop population. MAGIC protects the root zone and collar region with its targeted antibiotic activity.'
    }
  ];

  applicationGuidelines = [
    { application: 'Spray Method', recommendation: 'Foliar Spray' },
    { application: 'Timing', recommendation: 'Early disease appearance' },
    { application: 'Coverage', recommendation: 'Sheaths and lower leaves' },
    { application: 'Frequency', recommendation: 'As per disease pressure' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'MAGIC' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Pesticide type', value: 'Fungicide' },
      { label: 'Formulation type', value: 'L (Liquid)' },
      { label: 'Physical form', value: 'Liquid' },
      { label: 'Active ingredient', value: 'Validamycin 3%' },
      { label: 'Chemical group', value: 'Antibiotic Fungicide' },
      { label: 'Action type', value: 'Systemic; preventive and curative' },
      { label: 'Diseases controlled', value: 'Sheath blight, Rhizoctonia diseases, stem rot, damping off' },
      { label: 'Target crops', value: 'Paddy, rice, maize, sugarcane, vegetables and other susceptible crops' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer (~200 L/acre typical)' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Early disease appearance or as per label/agronomist' },
      { label: 'Coverage', value: 'Uniform spray on leaf sheaths and lower leaves' },
      { label: 'Re-entry interval', value: '24 hours (with PPE)' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'MAGIC' },
    { label: 'Brand / Trade Name', value: 'MAGIC' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Active Ingredient', value: 'Validamycin 3%' },
    { label: 'Formulation', value: 'L (Liquid)' },
    { label: 'Chemical Group', value: 'Antibiotic Fungicide' },
    { label: 'Action Type', value: 'Systemic, preventive and curative fungicide' },
    { label: 'Diseases Controlled', value: 'Sheath blight, Rhizoctonia diseases, stem rot, damping off' },
    { label: 'Target Crops', value: 'Paddy, rice, maize, sugarcane, vegetables and other susceptible crops' },
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
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying MAGIC Fungicide.'
    },
    {
      title: 'Wear personal protective equipment',
      text: 'Use gloves, goggles, mask, and protective clothing when handling concentrate or preparing the spray mix in the field.'
    },
    {
      title: 'Spray safely and avoid drift',
      text: 'Spray in calm morning or evening hours to prevent drift onto neighbouring crops, homes, or water bodies.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Measure exactly 30 ml per pump. Over-dosing does not improve disease control and wastes product.'
    },
    {
      title: 'Store in a cool, dry place',
      text: 'Keep sealed bottles in a cool, dry, ventilated area away from direct sunlight and heat to protect product quality.'
    },
    {
      title: 'Keep container tightly closed',
      text: 'Store MAGIC only in its original, tightly closed container, protected from moisture contamination and away from food, feed, and seed.'
    },
    {
      title: 'Keep out of reach of children',
      text: 'Store out of reach of children, pets, and livestock. Triple-rinse empty containers before safe disposal and never reuse them.'
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
    }
  ];

  faqs = [
    {
      question: 'What is Validamycin 3% L used for?',
      answer:
        '<strong>Validamycin 3% L</strong> (<strong>MAGIC</strong>) is used for <strong>control of sheath blight and Rhizoctonia diseases</strong> in paddy and rice, and for damping off and root-zone infections in maize, sugarcane, and vegetables. It is an <strong>antibiotic fungicide</strong> by <strong>HARISHREE CROP SCIENCE</strong> that targets Rhizoctonia solani directly while remaining gentle on the crop.',
      answerPlain:
        'Validamycin 3% L (MAGIC) is used for control of sheath blight and Rhizoctonia diseases in paddy and rice, and for damping off and root-zone infections in maize, sugarcane, and vegetables. It is an antibiotic fungicide by HARISHREE CROP SCIENCE that targets Rhizoctonia solani directly while remaining gentle on the crop.'
    },
    {
      question: 'How does MAGIC Fungicide work?',
      answer:
        '<strong>MAGIC</strong> works as a <strong>systemic antibiotic fungicide</strong>. Validamycin is absorbed and moves within plant tissue, where it <strong>interferes with the growth of Rhizoctonia solani</strong> at the hyphal level by inhibiting the enzyme trehalase. This arrests lesion expansion and disease spread, giving both preventive protection and curative suppression of active sheath blight infections.',
      answerPlain:
        'MAGIC works as a systemic antibiotic fungicide. Validamycin is absorbed and moves within plant tissue, where it interferes with the growth of Rhizoctonia solani at the hyphal level by inhibiting the enzyme trehalase. This arrests lesion expansion and disease spread, giving both preventive protection and curative suppression of active sheath blight infections.'
    },
    {
      question: 'What is the recommended dose of Validamycin 3% L?',
      answer:
        'The standard recommended dose of <strong>MAGIC (Validamycin 3% L)</strong> is <strong>30 ml per pump</strong> in a 15-litre knapsack sprayer. Mix thoroughly and spray for uniform coverage of leaf sheaths and lower leaves. Always confirm the final crop-wise dose with the printed label and local agronomic advisory.',
      answerPlain:
        'The standard recommended dose of MAGIC (Validamycin 3% L) is 30 ml per pump in a 15-litre knapsack sprayer. Mix thoroughly and spray for uniform coverage of leaf sheaths and lower leaves. Always confirm the final crop-wise dose with the printed label and local agronomic advisory.'
    },
    {
      question: 'Which diseases can VALIDAMYCIN control?',
      answer:
        '<strong>Validamycin 3% L</strong> controls <strong>sheath blight, Rhizoctonia diseases, stem rot, banded leaf and sheath blight, damping off, and soil-borne and root-zone fungal infections</strong>. It is especially effective against diseases caused by <strong>Rhizoctonia solani</strong> in paddy, rice, maize, sugarcane, and vegetable crops.',
      answerPlain:
        'Validamycin 3% L controls sheath blight, Rhizoctonia diseases, stem rot, banded leaf and sheath blight, damping off, and soil-borne and root-zone fungal infections. It is especially effective against diseases caused by Rhizoctonia solani in paddy, rice, maize, sugarcane, and vegetable crops.'
    },
    {
      question: 'Can VALIDAMYCIN control sheath blight in rice?',
      answer:
        'Yes. <strong>MAGIC (Validamycin 3% L)</strong> is one of the most dependable solutions for <strong>rice sheath blight</strong>. It targets <strong>Rhizoctonia solani</strong> directly, arresting lesion spread on sheaths and lower leaves. Applied at early lesion stage with good coverage, it protects stem strength and supports better grain fill in dense paddy stands.',
      answerPlain:
        'Yes. MAGIC (Validamycin 3% L) is one of the most dependable solutions for rice sheath blight. It targets Rhizoctonia solani directly, arresting lesion spread on sheaths and lower leaves. Applied at early lesion stage with good coverage, it protects stem strength and supports better grain fill in dense paddy stands.'
    },
    {
      question: 'Is VALIDAMYCIN preventive or curative?',
      answer:
        '<strong>MAGIC (Validamycin 3% L)</strong> provides <strong>both preventive and curative action</strong>. Sprayed before disease appears, it suppresses Rhizoctonia development; sprayed at early infection, it checks active sheath blight lesions — making it a dependable dual-purpose antibiotic fungicide for long-lasting disease control.',
      answerPlain:
        'MAGIC (Validamycin 3% L) provides both preventive and curative action. Sprayed before disease appears, it suppresses Rhizoctonia development; sprayed at early infection, it checks active sheath blight lesions — making it a dependable dual-purpose antibiotic fungicide for long-lasting disease control.'
    },
    {
      question: 'When should farmers spray MAGIC Fungicide?',
      answer:
        'Spray <strong>MAGIC</strong> at <strong>early disease appearance</strong> or preventively before sheath blight spreads, typically from <strong>maximum tillering to panicle initiation</strong> in paddy. Apply in calm morning or evening hours with <strong>uniform coverage of sheaths and lower leaves</strong>. Repeat based on disease pressure and label guidance during humid weather.',
      answerPlain:
        'Spray MAGIC at early disease appearance or preventively before sheath blight spreads, typically from maximum tillering to panicle initiation in paddy. Apply in calm morning or evening hours with uniform coverage of sheaths and lower leaves. Repeat based on disease pressure and label guidance during humid weather.'
    },
    {
      question: 'How should Validamycin 3% L be stored?',
      answer:
        'Store <strong>MAGIC (Validamycin 3% L)</strong> in its <strong>original, tightly closed container</strong> in a <strong>cool, dry place</strong> away from direct sunlight, heat, moisture, food, feed, and seed. Keep out of reach of children and animals, protect from moisture contamination, and triple-rinse empty containers before safe disposal.',
      answerPlain:
        'Store MAGIC (Validamycin 3% L) in its original, tightly closed container in a cool, dry place away from direct sunlight, heat, moisture, food, feed, and seed. Keep out of reach of children and animals, protect from moisture contamination, and triple-rinse empty containers before safe disposal.'
    }
  ];

  testimonials = [
    {
      name: 'Gurpreet',
      location: 'Punjab',
      text:
        'Sheath blight used to climb up my paddy every year in the humid weeks after transplanting. I sprayed MAGIC at the first lesions on the sheaths and the disease stopped moving up the plant. The stems stayed strong, there was no lodging, and the grain filled much better this season.',
      rating: 5
    },
    {
      name: 'Subhas',
      location: 'West Bengal',
      text:
        'In our high-humidity rice belt sheath blight is a constant worry. MAGIC gave clear control when I sprayed at early disease stage with good coverage of the lower canopy. The crop looked healthier, the panicles filled evenly, and the grain quality at harvest was noticeably better.',
      rating: 5
    },
    {
      name: 'Venkat',
      location: 'Andhra Pradesh',
      text:
        'I used MAGIC on my paddy when sheath blight started in the dense parts of the field. One timely spray checked the spread and protected the crop through grain fill. The 30 ml per pump dose is easy to follow and the yield was better than the previous year.',
      rating: 5
    }
  ];

  aggregateRating = {
    ratingValue: '4.8',
    reviewCount: '58',
    bestRating: '5',
    worstRating: '1'
  };

  howToSteps = [
    { name: 'Preparation — wear PPE', text: 'Wear gloves, goggles, and a mask. Keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water before adding MAGIC.' },
    { name: 'Measure MAGIC', text: 'Accurately measure 30 ml of Validamycin 3% L for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Pour into water, top up the tank, and agitate until the liquid forms a uniform spray solution.' },
    { name: 'Spray uniformly', text: 'Apply in calm morning or evening. Direct the spray onto leaf sheaths and lower leaves where sheath blight develops.' },
    { name: 'Ensure complete coverage', text: 'Thorough coverage of the lower canopy is essential for effective sheath blight control.' },
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
        'Validamycin 3% L MAGIC Antibiotic Fungicide for Rice Sheath Blight and Rhizoctonia Control',
      productImageCaption:
        'Antibiotic Fungicide for Sheath Blight, Rhizoctonia Disease and Soil-Borne Fungal Infection Control',
      description:
        'MAGIC (Validamycin 3% L) by Harishree Crop Science is an antibiotic fungicide for sheath blight and Rhizoctonia disease control in paddy and rice crops. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'MAGIC Fungicide',
      category: 'Agricultural Fungicide',
      sku: 'MAGIC-VALIDAMYCIN-3-L',
      mpn: 'MAGIC-VALIDAMYCIN-3-L',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply MAGIC (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer tank of MAGIC (Validamycin 3% L) for foliar application at 30 ml/pump.',
      alternateNames: [
        'MAGIC',
        'MAGIC Fungicide',
        'Validamycin Fungicide',
        'Sheath Blight Fungicide',
        'Antibiotic Fungicide',
        'Paddy Fungicide',
        'Rice Disease Control Fungicide',
        'Fungicide for Rhizoctonia Disease',
        'Fungicide for Soil-Borne Diseases',
        'Broad Spectrum Fungicide for Paddy',
        'Best Fungicide for Sheath Blight',
        'Systemic Fungicide for Rice Crops',
        'Agricultural Fungicide',
        'Rice Sheath Blight Control',
        'Validamycin Fungicide for Agriculture',
        'Crop Protection Fungicide',
        'Long Lasting Disease Control'
      ],
      targetPests: this.targetPests.map((p) => p.name),
      targetCrops: this.targetCropsTable.map((r) => r.crop),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `MAGIC (${this.productTitle})`,
      breadcrumbCategory: 'Fungicides',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'L (Liquid)'
    };
  }

  private applySeo(): void {
    const desc =
      'MAGIC Validamycin 3% L is an antibiotic fungicide for sheath blight & Rhizoctonia control in paddy and rice. Harishree Crop Science — order today.';

    this.seo.setAll(
      {
        title: 'Validamycin 3% L | MAGIC Sheath Blight Fungicide',
        description: desc,
        keywords:
          'Validamycin 3% L, MAGIC, MAGIC Fungicide, Validamycin Fungicide, Sheath Blight Fungicide, Rice Sheath Blight Control, Paddy Fungicide, Antibiotic Fungicide, Fungicide for Rhizoctonia Disease, Fungicide for Soil-Borne Diseases, Broad Spectrum Fungicide for Paddy, Best Fungicide for Sheath Blight, Systemic Fungicide for Rice Crops, Rice Disease Control Fungicide, Agricultural Fungicide, Validamycin 3% L uses, Validamycin 3% L dose per litre, Validamycin 3% L price, Harishree Crop Science',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Validamycin 3% L (MAGIC) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'MAGIC | Validamycin 3% L Sheath Blight Fungicide',
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
