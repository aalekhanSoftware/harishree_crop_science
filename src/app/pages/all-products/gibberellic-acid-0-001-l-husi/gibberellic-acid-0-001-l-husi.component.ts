import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateKey } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import Aos from 'aos';
import { SeoService } from '../../../shared/services/seo.service';
import { ProductSchemaService } from '../../../shared/services/product-schema.service';
import { ProductSeoData } from '../../../shared/interfaces/product-seo.interface';

const SEO_PAGE_ID = 'HUSI_GA3_PGR';
const INDICATIVE_LIST_PRICE_INR = 112;

@Component({
  selector: 'app-gibberellic-acid-0-001-l-husi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gibberellic-acid-0-001-l-husi.component.html',
  styleUrl: './gibberellic-acid-0-001-l-husi.component.scss'
})
export class GibberellicAcid0001LHusiComponent implements OnInit, OnDestroy {
  private readonly baseUrl = environment.baseUrl;
  readonly productPath = '/products/gibberellic-acid-0-001-l-husi';
  readonly pageUrl = `${this.baseUrl}${this.productPath}`;
  readonly productImagePath = 'assets/products/gibberellic-acid-0-001-l.png';
  readonly productImageUrl = `${this.baseUrl}/${this.productImagePath}`;

  private readonly metaStateKey = this.seo.createMetaStateKey(SEO_PAGE_ID);
  private readonly canonicalStateKey = this.seo.createCanonicalStateKey(SEO_PAGE_ID);
  private readonly schemaKeys: StateKey<string>[] = [];

  productTitle = 'Gibberellic Acid 0.001% L';
  brandName = 'Husi';

  featuredSnippetAnswer =
    'Husi (Gibberellic Acid 0.001% L) is a liquid GA3 plant growth regulator by Harishree Crop Science that promotes faster plant growth, cell elongation, better flowering, improved fruit setting, larger fruit size, and uniform crop development. It reduces flower and fruit drop and boosts marketable yield in fruits, vegetables, cereals, pulses, and cash crops. Recommended dose: 30 ml per pump.';

  packSizes = [
    { volume: '500 ml', price: 112, featured: true, sku: 'HUSI-GA3-500ML' },
    { volume: '1 Ltr', price: 202, featured: false, sku: 'HUSI-GA3-1LTR' }
  ];

  quickHighlights = [
    {
      title: 'Liquid GA3 growth regulator',
      description:
        'Husi delivers Gibberellic Acid (GA3) in a ready-to-mix liquid form for fast, uniform uptake and dependable plant growth promotion.',
      icon: 'fas fa-flask'
    },
    {
      title: 'Faster plant growth',
      description:
        'GA3 stimulates cell elongation and division, driving quicker vegetative growth and stronger, taller, more vigorous crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Better flowering',
      description:
        'Encourages early and uniform flower initiation, helping crops set more flowers at the right stage for higher productivity.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Improved fruit setting',
      description:
        'Supports better fruit set after flowering, converting more flowers into healthy, developing fruits.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Increased fruit size',
      description:
        'Promotes cell expansion in developing fruits for bigger, well-filled, market-grade produce.',
      icon: 'fas fa-expand-arrows-alt'
    },
    {
      title: 'Reduced flower & fruit drop',
      description:
        'Balanced hormonal action helps the crop hold flowers and young fruits, cutting losses from premature drop.',
      icon: 'fas fa-hand-holding-heart'
    },
    {
      title: 'Uniform crop development',
      description:
        'Even growth and maturity across the field make harvest and grading easier and more efficient.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Better crop vigour',
      description:
        'Healthier, greener plants with improved photosynthesis and nutrient use stay strong through the season.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Improved crop quality',
      description:
        'Better size, colour, and uniformity raise the quality and market value of fruits and vegetables.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher marketable yield',
      description:
        'More flowers, better fruit set, and larger fruits translate to higher and more profitable yields.',
      icon: 'fas fa-chart-line'
    }
  ];

  whyChoose = [
    {
      title: 'Premium GA3 formulation',
      description:
        'Husi delivers consistent, high-quality Gibberellic Acid 0.001% L in an easy-to-use liquid for reliable plant growth promotion.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Better flowering & fruiting',
      description:
        'Improves flower initiation, fruit setting, and fruit size while reducing flower and fruit drop for stronger production.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Enhanced crop vigour & quality',
      description:
        'Boosts vegetative growth, uniformity, and produce quality, giving healthier crops and better market grades.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Cost-effective yield booster',
      description:
        'A low 30 ml per pump dose and farmer-friendly pack pricing make Husi an economical way to lift yield and ROI.',
      icon: 'fas fa-rupee-sign'
    }
  ];

  keyBenefits = [
    {
      title: 'Enhanced plant growth',
      description:
        'Gibberellic acid drives faster vegetative growth, giving stronger, taller, and more vigorous plants from early stages.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Increased cell elongation',
      description:
        'GA3 stimulates cell elongation in stems and shoots, supporting healthy expansion of plant tissue.',
      icon: 'fas fa-arrows-alt-v'
    },
    {
      title: 'Better flowering initiation',
      description:
        'Promotes early, uniform flowering so the crop produces more flowers at the right developmental stage.',
      icon: 'fas fa-spa'
    },
    {
      title: 'Improved fruit setting',
      description:
        'Helps convert flowers into fruits, improving fruit set and the number of developing fruits per plant.',
      icon: 'fas fa-apple-alt'
    },
    {
      title: 'Uniform crop development',
      description:
        'Even growth and maturity across the field simplify crop management, harvesting, and grading.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Increased fruit size',
      description:
        'Encourages cell expansion in fruits for bigger, heavier, well-filled produce with better market appeal.',
      icon: 'fas fa-expand-arrows-alt'
    },
    {
      title: 'Better crop vigour',
      description:
        'Healthier, greener crops with improved photosynthesis stay strong and productive through the season.',
      icon: 'fas fa-leaf'
    },
    {
      title: 'Improved crop quality',
      description:
        'Better size, colour, and uniformity raise overall produce quality in fruits and vegetables.',
      icon: 'fas fa-award'
    },
    {
      title: 'Higher marketable yield',
      description:
        'More flowers, better set, and larger fruits combine to lift total marketable yield per acre.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Reduced flower & fruit drop',
      description:
        'Balanced hormonal support helps the crop retain flowers and young fruits, reducing avoidable losses.',
      icon: 'fas fa-hand-holding-heart'
    },
    {
      title: 'Better nutrient utilisation',
      description:
        'Improved growth and metabolism help the crop use applied nutrients more efficiently.',
      icon: 'fas fa-tint'
    },
    {
      title: 'Increased farm profitability',
      description:
        'A low-cost dose that improves flowering, fruiting, and quality helps protect and grow farm income.',
      icon: 'fas fa-hand-holding-usd'
    }
  ];

  aboutIntro =
    'Husi is a premium plant growth regulator from HARISHREE CROP SCIENCE, formulated with Gibberellic Acid 0.001% L (GA3). Gibberellic acid is one of the most widely used and trusted plant growth hormones in modern agriculture, valued for its ability to stimulate cell elongation, promote flowering, and improve fruit setting and size. Husi delivers this proven GA3 technology in a convenient liquid form so farmers can boost growth and productivity across a wide range of crops.';

  aboutOverview =
    'Plant growth regulators play a central role in modern, high-yield farming by guiding the plant\u2019s natural growth processes. Husi (Gibberellic Acid 0.001% L) supports both vegetative and reproductive growth \u2014 driving faster shoot growth, stronger flowering, better fruit set, larger fruit size, and uniform crop development. Used at the recommended 30 ml per pump, it helps fruits, vegetables, cereals, pulses, and cash crops achieve higher and better-quality produce. For dealers and agronomists, Husi is a dependable, economical GA3 growth promoter backed by Harishree quality control.';

  aboutCellElongation =
    'Gibberellic acid stimulates cell elongation and cell division in stems, shoots, and developing tissue. This is the core action behind faster vegetative growth, taller plants, and the expansion of flowers and fruits \u2014 making GA3 a powerful crop growth promoter.';

  aboutFlowering =
    'GA3 encourages early and uniform flower initiation. By promoting timely, even flowering, Husi helps crops produce more flowers at the right stage, setting up the plant for better fruit setting and higher reproductive output.';

  aboutFruitDevelopment =
    'After flowering, gibberellic acid supports better fruit set and improved fruit development. It helps convert more flowers into healthy fruits and drives cell expansion for larger, well-filled fruits with improved market quality.';

  aboutPhysiological =
    'Beyond growth, GA3 improves several physiological processes \u2014 better nutrient utilisation, enhanced photosynthesis through healthier green leaf area, improved crop vigour, and stronger reproductive growth \u2014 all of which contribute to a more productive crop.';

  aboutCombined =
    'Together, these effects \u2014 cell elongation, flowering induction, fruit setting and enlargement, reduced flower and fruit drop, and improved physiology \u2014 make Husi (Gibberellic Acid 0.001% L) a complete growth and yield enhancer that supports uniform crop stands, higher yield potential, better quality, and improved farm profitability.';

  targetCropsTable = [
    { crop: 'Cotton', role: 'Vegetative growth, boll development, uniform stand' },
    { crop: 'Paddy', role: 'Vigorous growth, uniform development, productivity' },
    { crop: 'Wheat', role: 'Growth promotion, vigour, grain development' },
    { crop: 'Groundnut', role: 'Vegetative vigour, flowering, pod development' },
    { crop: 'Soybean', role: 'Growth, flowering, better pod set' },
    { crop: 'Chilli', role: 'Flowering, fruit setting, reduced drop' },
    { crop: 'Tomato', role: 'Flowering, fruit set, fruit size' },
    { crop: 'Onion', role: 'Vegetative growth, bulb development' },
    { crop: 'Brinjal', role: 'Flowering, fruit setting, fruit size' },
    { crop: 'Cucumber', role: 'Vine growth, flowering, fruit development' },
    { crop: 'Grapes', role: 'Berry size, bunch development, quality' },
    { crop: 'Pomegranate', role: 'Flowering, fruit set, fruit size' },
    { crop: 'Mango', role: 'Flowering, fruit retention, fruit development' },
    { crop: 'Banana', role: 'Growth, bunch and finger development' },
    { crop: 'Other Fruits & Vegetables', role: 'Growth, flowering, fruit quality, yield' }
  ];

  applications = [
    {
      title: 'Cotton',
      description:
        'Promotes vigorous vegetative growth and uniform stands, supporting better boll development through the season.',
      icon: 'fas fa-tshirt'
    },
    {
      title: 'Paddy & Wheat',
      description:
        'Drives stronger growth and uniform crop development for healthier cereal stands and better productivity.',
      icon: 'fas fa-wheat-awn'
    },
    {
      title: 'Groundnut & Soybean',
      description:
        'Supports vegetative vigour, flowering, and better pod set for stronger, more uniform pulse and oilseed crops.',
      icon: 'fas fa-seedling'
    },
    {
      title: 'Chilli, Tomato & Brinjal',
      description:
        'Improves flowering, fruit setting, and fruit size while reducing flower and fruit drop in vegetables.',
      icon: 'fas fa-pepper-hot'
    },
    {
      title: 'Onion & Cucumber',
      description:
        'Aids vegetative growth, flowering, and bulb or fruit development for better, more uniform produce.',
      icon: 'fas fa-carrot'
    },
    {
      title: 'Grapes, Pomegranate, Mango & Banana',
      description:
        'Enhances flowering, fruit set, fruit size, and quality for premium, market-grade fruit production.',
      icon: 'fas fa-apple-alt'
    }
  ];

  cropWiseUsage = [
    { crop: 'Cotton', purpose: 'Vegetative growth, uniform stand', dose: '30 ml/pump', timing: 'Active vegetative stage' },
    { crop: 'Paddy / Wheat', purpose: 'Growth promotion, uniformity', dose: '30 ml/pump', timing: 'Vegetative to early reproductive stage' },
    { crop: 'Groundnut / Soybean', purpose: 'Vigour, flowering, pod set', dose: '30 ml/pump', timing: 'Vegetative and flowering stage' },
    { crop: 'Chilli / Tomato / Brinjal', purpose: 'Flowering, fruit set, fruit size', dose: '30 ml/pump', timing: 'Flowering and fruit-development stage' },
    { crop: 'Onion / Cucumber', purpose: 'Growth, flowering, fruit/bulb set', dose: '30 ml/pump', timing: 'Active growth and flowering' },
    { crop: 'Grapes / Pomegranate / Mango / Banana', purpose: 'Fruit set, size, quality', dose: '30 ml/pump', timing: 'Flowering and fruit-development stage' }
  ];

  applicationGuidelines = [
    { application: 'Application method', recommendation: 'Foliar spray' },
    { application: 'Dose', recommendation: '30 ml per pump' },
    { application: 'Timing', recommendation: 'Flowering and fruit-development stages' },
    { application: 'Repeat', recommendation: 'As per crop stage and advisory' }
  ];

  technicalSpecs: {
    productInfo: Array<{ label: string; value: string }>;
    packs: Array<{ label: string; value: string }>;
  } = {
    productInfo: [
      { label: 'Product name', value: 'Husi' },
      { label: 'Technical name', value: this.productTitle },
      { label: 'Product type', value: 'Plant Growth Regulator (PGR)' },
      { label: 'Composition', value: 'Gibberellic Acid 0.001% L' },
      { label: 'Active ingredient', value: 'Gibberellic Acid (GA3)' },
      { label: 'Formulation', value: 'Liquid' },
      { label: 'Mode of action', value: 'Plant growth hormone' },
      { label: 'Target benefits', value: 'Flowering, fruit setting, plant growth enhancement' },
      { label: 'Suitable crops', value: 'Fruits, vegetables, cereals, pulses and cash crops' }
    ],
    packs: [
      { label: 'Packaging', value: 'Bottle; sizes 500 ml, 1 Ltr' },
      { label: 'Recommended dose', value: '30 ml/pump' },
      { label: 'Water volume', value: '15-litre knapsack sprayer' },
      { label: 'Application method', value: 'Foliar spray using knapsack or power sprayer' },
      { label: 'Application stage', value: 'Flowering and fruit-development stages' },
      { label: 'Country of origin', value: 'Made in India' }
    ]
  };

  officialProductDetails = [
    { label: 'Product Name', value: 'Husi' },
    { label: 'Brand / Trade Name', value: 'Husi' },
    { label: 'Technical Name', value: this.productTitle },
    { label: 'Composition', value: 'Gibberellic Acid 0.001% L' },
    { label: 'Active Ingredient', value: 'Gibberellic Acid (GA3)' },
    { label: 'Product Type', value: 'Plant Growth Regulator (PGR)' },
    { label: 'Formulation', value: 'Liquid' },
    { label: 'Mode of Action', value: 'Plant growth hormone' },
    { label: 'Target Benefits', value: 'Flowering, fruit setting, plant growth enhancement' },
    { label: 'Suitable Crops', value: 'Fruits, vegetables, cereals, pulses and cash crops' },
    { label: 'Recommended Dose', value: '30 ml/pump' },
    { label: 'Water Volume', value: '15-litre knapsack sprayer' },
    { label: 'Application Method', value: 'Foliar spray using knapsack or power sprayer' },
    { label: 'Application Stage', value: 'Flowering and fruit-development stages' },
    { label: 'Packaging Type', value: 'Bottle (500 ml, 1 Ltr)' },
    { label: 'Brand', value: 'HARISHREE CROP SCIENCE' },
    { label: 'Country of Origin', value: 'Made in India' },
    { label: 'Availability', value: 'In Stock' }
  ];

  safetyItems = [
    {
      title: 'Read label instructions carefully',
      text: 'Always read and follow the printed product label and local agronomic advisory before mixing or spraying Husi.'
    },
    {
      title: 'Wear protective equipment',
      text: 'Use gloves, goggles, mask, and protective clothing when handling the product or preparing the spray mix.'
    },
    {
      title: 'Avoid spraying during strong winds',
      text: 'Spray in calm morning or evening hours to ensure uniform coverage and prevent drift onto other areas.'
    },
    {
      title: 'Keep away from children',
      text: 'Store in the original sealed container away from food, feed, seed, and out of reach of children and animals.'
    },
    {
      title: 'Avoid contamination of water bodies',
      text: 'Do not let the product enter ponds, canals, or drinking water sources. Dispose of empty containers responsibly.'
    },
    {
      title: 'Store in a cool dry place',
      text: 'Keep sealed bottles in a cool, dry, ventilated place away from direct sunlight and extreme temperatures.'
    },
    {
      title: 'Follow recommended dosage',
      text: 'Use 30 ml per pump as recommended. Over-dosing does not improve results and can affect the crop.'
    }
  ];

  relatedProducts = [
    {
      name: 'HUMIC 98% (Humic Acid 98%)',
      description: 'High-grade humic acid soil conditioner and root growth promoter for stronger, healthier crops.',
      route: '/products/humic-98-plant-growth-regulator',
      image: 'assets/products/PGR/potassium-humate-98.jpg',
      imageAlt: 'HUMIC 98% Humic Acid plant growth regulator by Harishree Crop Science'
    },
    {
      name: 'Nutri Power Gold (Potassium Humate 98% + Organic Carbon 2%)',
      description: 'Premium potassium humate soil conditioner and root growth promoter for stronger crops.',
      route: '/products/potassium-humate-98-organic-carbon-2-nutri-power-gold',
      image: 'assets/products/PGR/potassium-humate-98.jpg',
      imageAlt: 'Nutri Power Gold Potassium Humate 98% by Harishree Crop Science'
    },
    {
      name: 'DR. ROOT (Humic + Amino + Fulvic + Vitamin C & E + Organic Carbon)',
      description: 'Root growth promoter for stronger roots, better nutrient uptake, and higher yield.',
      route: '/products/dr-root-humic-amino-fulvic-vitamin-organic-carbon',
      image: 'assets/products/PGR/dr-root.jpg',
      imageAlt: 'DR. ROOT Humic Amino Fulvic root growth promoter by Harishree Crop Science'
    }
  ];

  faqs = [
    {
      question: 'What is Gibberellic Acid 0.001% L used for?',
      answer:
        '<strong>Gibberellic Acid 0.001% L</strong> (<strong>Husi</strong>) is a <strong>GA3 plant growth regulator</strong> used to promote faster plant growth, cell elongation, better flowering, improved fruit setting, larger fruit size, and uniform crop development. It also helps reduce flower and fruit drop and boosts marketable yield. Husi is suitable for a wide range of crops including fruits, vegetables, cereals, pulses, and cash crops such as cotton, chilli, tomato, grapes, and pomegranate. As a liquid plant growth enhancer, it supports both vegetative and reproductive growth for higher, better-quality produce.',
      answerPlain:
        'Gibberellic Acid 0.001% L (Husi) is a GA3 plant growth regulator used to promote faster plant growth, cell elongation, better flowering, improved fruit setting, larger fruit size, and uniform crop development. It also helps reduce flower and fruit drop and boosts marketable yield across fruits, vegetables, cereals, pulses, and cash crops.'
    },
    {
      question: 'How does Husi Plant Growth Regulator work?',
      answer:
        '<strong>Husi</strong> works through <strong>Gibberellic Acid (GA3)</strong>, a natural plant growth hormone. GA3 stimulates <strong>cell elongation and cell division</strong>, driving faster vegetative growth and the expansion of flowers and fruits. It also encourages <strong>uniform flowering</strong>, supports <strong>better fruit setting</strong>, and promotes <strong>fruit enlargement</strong>. Alongside growth, it improves nutrient utilisation, photosynthesis, and overall crop vigour. The combined effect is stronger plants, more flowers, better fruit set, larger fruits, reduced flower and fruit drop, and higher, more uniform yields across many crops.',
      answerPlain:
        'Husi works through Gibberellic Acid (GA3), a natural plant growth hormone. GA3 stimulates cell elongation and division, encourages uniform flowering, supports better fruit setting, and promotes fruit enlargement. It also improves nutrient utilisation and crop vigour, giving stronger plants, better fruit set, larger fruits, and higher yields.'
    },
    {
      question: 'What is the recommended dose of Gibberellic Acid 0.001% L?',
      answer:
        'The recommended dose of <strong>Husi (Gibberellic Acid 0.001% L)</strong> is <strong>30 ml per pump</strong> in a standard 15-litre knapsack sprayer. Half-fill the tank with clean water, add 30 ml of Husi, top up, and agitate before spraying. Apply as a uniform foliar spray during flowering and fruit-development stages for best results. Always confirm the final dose for your specific crop with the printed product label and your local agronomic advisory, as timing and rate can vary by crop and growth stage.',
      answerPlain:
        'The recommended dose of Husi (Gibberellic Acid 0.001% L) is 30 ml per pump in a 15-litre knapsack sprayer. Add 30 ml to half-filled water, top up, agitate, and spray uniformly during flowering and fruit-development stages. Always confirm the final dose on the label and with local advisory.'
    },
    {
      question: 'Which crops can benefit from Gibberellic Acid?',
      answer:
        '<strong>Gibberellic Acid (Husi)</strong> benefits a wide range of crops. These include <strong>cash crops</strong> like cotton, <strong>cereals</strong> like paddy and wheat, <strong>pulses and oilseeds</strong> like groundnut and soybean, and <strong>vegetables</strong> such as chilli, tomato, brinjal, onion, and cucumber. It is also highly valued in <strong>fruit crops</strong> like grapes, pomegranate, mango, and banana for improving flowering, fruit set, fruit size, and quality. In short, Husi suits fruits, vegetables, cereals, pulses, and cash crops where better growth, flowering, and yield are needed.',
      answerPlain:
        'Gibberellic Acid (Husi) benefits cotton, paddy, wheat, groundnut, soybean, chilli, tomato, brinjal, onion, cucumber, grapes, pomegranate, mango, banana, and other fruits and vegetables. It is suitable across fruits, vegetables, cereals, pulses, and cash crops for better growth, flowering, and yield.'
    },
    {
      question: 'Can Gibberellic Acid improve flowering and fruit setting?',
      answer:
        'Yes. <strong>Gibberellic Acid (GA3)</strong> is widely used to improve both <strong>flowering</strong> and <strong>fruit setting</strong>. It encourages early and uniform flower initiation so the crop produces more flowers at the right stage. After flowering, GA3 supports better fruit set by helping convert more flowers into healthy, developing fruits, and reduces premature flower and fruit drop. It also promotes fruit enlargement for bigger, better-quality produce. This makes <strong>Husi</strong> especially valuable in crops like grapes, chilli, tomato, and pomegranate where strong flowering and fruit set drive yield.',
      answerPlain:
        'Yes. Gibberellic Acid (GA3) improves flowering and fruit setting. It encourages early, uniform flowering, helps convert more flowers into fruits, reduces flower and fruit drop, and promotes fruit enlargement. Husi is especially valuable in crops like grapes, chilli, tomato, and pomegranate.'
    },
    {
      question: 'When should farmers spray Husi?',
      answer:
        'Farmers should spray <strong>Husi (Gibberellic Acid 0.001% L)</strong> mainly during the <strong>flowering and fruit-development stages</strong>, when the crop responds best to GA3 for flower initiation, fruit setting, and fruit enlargement. For growth promotion, it can also be applied at active vegetative stages. Spray as a uniform foliar application in calm <strong>morning or evening hours</strong> to ensure good coverage and uptake. Repeat applications can be made as per the crop stage and local advisory. Always follow the recommended 30 ml per pump dose and the guidance on the product label.',
      answerPlain:
        'Spray Husi mainly during flowering and fruit-development stages, and at active vegetative stages for growth promotion. Apply as a uniform foliar spray in calm morning or evening hours. Repeat as per crop stage and advisory, following the 30 ml per pump dose and label guidance.'
    },
    {
      question: 'Can Gibberellic Acid increase crop yield?',
      answer:
        'Yes. By improving the plant\u2019s natural growth processes, <strong>Gibberellic Acid (Husi)</strong> helps increase <strong>marketable yield</strong>. It promotes faster growth, stronger flowering, better fruit setting, larger fruit size, and reduced flower and fruit drop \u2014 all of which add up to more and better produce per plant. More flowers and improved fruit set mean more fruits, while cell elongation supports bigger, well-filled fruits. Combined with uniform crop development and better quality, this delivers higher yield potential, improved market value, and better return on investment for farmers.',
      answerPlain:
        'Yes. Gibberellic Acid (Husi) helps increase marketable yield by promoting faster growth, stronger flowering, better fruit setting, larger fruit size, and reduced flower and fruit drop. More flowers, better fruit set, and larger fruits combine with uniform development to deliver higher yield potential and better ROI.'
    },
    {
      question: 'How should Husi be stored?',
      answer:
        'Store <strong>Husi (Gibberellic Acid 0.001% L)</strong> in a <strong>cool, dry place</strong>, away from direct sunlight and extreme temperatures. Keep the <strong>container tightly closed</strong> in its original packaging to maintain product quality. Store it <strong>away from food, feed, and seed</strong>, and keep it out of the reach of children and animals. Avoid storing near water sources or in damp conditions. Proper storage protects the GA3 formulation and ensures consistent performance when you use the product. Always follow the storage and handling instructions printed on the product label.',
      answerPlain:
        'Store Husi in a cool, dry place away from direct sunlight and extreme temperatures. Keep the container tightly closed in its original packaging, away from food, feed, and seed, and out of reach of children and animals. Avoid damp conditions and follow the label storage instructions.'
    }
  ];

  testimonials = [
    {
      name: 'Sanjay',
      location: 'Maharashtra',
      text:
        'I sprayed this GA3 on my grapes at flowering and berry-set stage. The bunches developed more evenly and the berry size improved noticeably. Fruit set was better than last season and the quality at market was clearly higher. The 30 ml per pump dose is easy to follow and gave me good value for the result.',
      rating: 5
    },
    {
      name: 'Rajesh',
      location: 'Andhra Pradesh',
      text:
        'In my chilli crop the flowering improved and I saw much less flower drop after using it. More flowers held on and turned into fruits, so the picking was heavier. Plants stayed green and vigorous through the season. Overall the fruit setting and yield were better, and it is an affordable product for the result it gives.',
      rating: 5
    },
    {
      name: 'Mahesh',
      location: 'Karnataka',
      text:
        'Used it on pomegranate during flowering and fruit development. Flowering was more uniform, fruit set improved, and the fruit size was bigger and better filled. Fruit drop also came down compared to earlier. The crop matured evenly and I got better grades at the market, which improved my returns this season.',
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
    { name: 'Preparation', text: 'Wear gloves and a mask, and keep children and animals away from the mixing area.' },
    { name: 'Prepare clean water', text: 'Half-fill a standard 15-litre knapsack sprayer with clean water.' },
    { name: 'Measure Husi', text: 'Accurately measure 30 ml of Husi (Gibberellic Acid 0.001% L) for one knapsack pump.' },
    { name: 'Mix thoroughly', text: 'Add to the water, top up the tank, and agitate until the solution is uniform.' },
    { name: 'Spray uniformly', text: 'Apply as a uniform foliar spray in calm morning or evening hours, covering the canopy well.' },
    { name: 'Time it right', text: 'Spray at flowering and fruit-development stages for best flowering, fruit set, and fruit size.' },
    { name: 'Post-spray care', text: 'Wash hands, clean equipment, and store leftover product safely in its original container.' }
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
        'Husi Gibberellic Acid 0.001% L GA3 Plant Growth Regulator for Flowering and Fruit Setting',
      productImageCaption:
        'Plant Growth Regulator for Flowering, Fruit Setting, Fruit Size and Higher Yield',
      description:
        'Husi (Gibberellic Acid 0.001% L) by Harishree Crop Science is a GA3 plant growth regulator for better flowering, fruit setting, fruit size, and higher yield. Dose: 30 ml/pump.',
      primaryKeyword: this.productTitle,
      secondaryKeyword: 'Husi',
      category: 'Plant Growth Regulator',
      sku: 'HUSI-GA3-PGR',
      mpn: 'HUSI-GA3-PGR',
      dose: '30 ml/pump',
      indicativeListPriceInr: INDICATIVE_LIST_PRICE_INR,
      packSizes: this.packSizes,
      officialProductDetails: this.officialProductDetails,
      faqs: this.faqs,
      testimonials: this.testimonials,
      aggregateRating: this.aggregateRating,
      howToSteps: this.howToSteps,
      howToName: `How to mix and apply Husi (${this.productTitle})`,
      howToDescription:
        'Field steps for preparing a knapsack sprayer of Husi (Gibberellic Acid 0.001% L) for foliar application at 30 ml/pump.',
      alternateNames: [
        'Husi',
        'Gibberellic Acid 0.001% L'
      ],
      targetPests: [],
      targetCrops: this.applications.map((a) => a.title),
      benefits: this.keyBenefits.map((b) => b.title),
      breadcrumbLabel: `Husi (${this.productTitle})`,
      breadcrumbCategory: 'Plant Growth Regulators',
      speakableSelectors: ['.product-title', '.product-snippet-answer', '.dose-callout'],
      formulationMaterial: 'Plant Growth Regulator'
    };
  }

  private applySeo(): void {
    const desc =
      'Husi (Gibberellic Acid 0.001% L) GA3 plant growth regulator for better flowering, fruit setting, fruit size & higher yield. Harishree Crop Science.';

    this.seo.setAll(
      {
        title: 'Gibberellic Acid 0.001% L | Husi PGR',
        description: desc,
        keywords: 'Gibberellic Acid 0.001% L',
        canonicalUrl: this.pageUrl,
        robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        author: environment.metaDefaults.author,
        openGraph: {
          title: 'Gibberellic Acid 0.001% L (Husi) | Harishree Crop Science',
          description: desc,
          url: this.pageUrl,
          image: this.productImageUrl,
          type: 'product',
          locale: 'en_IN'
        },
        twitter: {
          title: 'Husi | Gibberellic Acid 0.001% L Plant Growth Regulator',
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
