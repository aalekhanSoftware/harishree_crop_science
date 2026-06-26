import { Injectable } from '@angular/core';
import {
  getOfferPriceValidUntil,
  merchantReturnPolicySchema,
  offerShippingDetailsSchema
} from '../schema/product-offer-jsonld';
import { ProductSeoData } from '../interfaces/product-seo.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductSchemaService {
  private manufacturerAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
      addressLocality:
        'Near jawahar navoday vidhyalay, Rajkot-Jamnagar Road, Targhari, Paddhari, Rajkot, Gujarat - 360110',
      addressRegion: 'Gujarat',
      postalCode: '360110',
      addressCountry: 'IN'
    };
  }

  private departmentPostalAddress() {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.57, survey no. 751 Palki 2, harsiddhi park - 1',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360110',
      addressCountry: {
        '@type': 'Country',
        name: 'IN'
      }
    };
  }

  organization(baseUrl: string): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Harishree Crop Science',
      url: baseUrl,
      logo: `${baseUrl}/assets/logo/HARISHREE.png`,
      email: 'harishreecropscience@gmail.com',
      telephone: '+919898197196',
      sameAs: [
        'https://twitter.com/harishreecrop',
        'https://www.facebook.com/profile.php?id=61573857659074',
        'https://instagram.com/harishree_crop_science',
        'https://linkedin.com/company/harishree-crop-science'
      ],
      address: this.manufacturerAddress()
    };
  }

  website(baseUrl: string): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Harishree Crop Science',
      publisher: { '@id': `${baseUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/products?search={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };
  }

  webPage(data: ProductSeoData): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${data.pageUrl}#webpage`,
      url: data.pageUrl,
      name: `${data.brandName} (${data.productTitle}) by Harishree Crop Science`,
      description: `Primary keyword: ${data.primaryKeyword}. Secondary: ${data.secondaryKeyword}. ${data.description}`,
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${data.baseUrl}/#website`,
        url: data.baseUrl,
        name: 'Harishree Crop Science',
        publisher: { '@id': `${data.baseUrl}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${data.baseUrl}/products?search={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        '@id': `${data.pageUrl}#primaryimage`,
        url: data.productImageUrl,
        caption: data.productImageCaption
      },
      breadcrumb: {
        '@id': `${data.pageUrl}#breadcrumb`
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: data.speakableSelectors ?? [
          '.product-title',
          '.product-snippet-answer',
          '.dose-callout'
        ]
      }
    };
  }

  breadcrumb(data: ProductSeoData): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${data.pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${data.baseUrl}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: `${data.baseUrl}/products`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: data.breadcrumbCategory ?? 'Insecticides',
          item: `${data.baseUrl}/products`
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: data.breadcrumbLabel,
          item: data.pageUrl
        }
      ]
    };
  }

  product(data: ProductSeoData): Record<string, unknown> {
    const prices = data.packSizes.map((p) => p.price);

    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: data.productTitle,
      alternateName: data.alternateNames,
      description: data.description,
      image: [data.productImageUrl],
      brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
      model: data.brandName,
      category: data.category,
      sku: data.sku,
      mpn: data.mpn,
      material: data.formulationMaterial ?? 'SC (Suspension Concentrate)',
      activeIngredient: data.productTitle,
      audience: {
        '@type': 'PeopleAudience',
        audienceType: 'Farmers, agricultural dealers, crop protection professionals'
      },
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India'
      },
      additionalProperty: [
        ...data.officialProductDetails.map((row) => ({
          '@type': 'PropertyValue',
          name: row.label,
          value: row.value
        })),
        {
          '@type': 'PropertyValue',
          name: 'Indicative list price (all taxes)',
          value: `INR ${data.indicativeListPriceInr}`
        },
        {
          '@type': 'PropertyValue',
          name: `${data.brandName} dose per pump`,
          value: data.dose
        },
        { '@type': 'PropertyValue', name: 'Manufacturer', value: 'Harishree Crop Science' }
      ],
      manufacturer: {
        '@type': 'Organization',
        name: 'Harishree Crop Science',
        url: data.baseUrl,
        logo: `${data.baseUrl}/assets/logo/HARISHREE.png`,
        address: this.manufacturerAddress()
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.aggregateRating.ratingValue,
        reviewCount: data.aggregateRating.reviewCount,
        bestRating: data.aggregateRating.bestRating ?? '5',
        worstRating: data.aggregateRating.worstRating ?? '1'
      },
      review: data.testimonials.map((item) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: item.name
        },
        reviewBody: item.text,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: item.rating.toString(),
          bestRating: '5'
        }
      })),
      offers: {
        '@type': 'AggregateOffer',
        offerCount: data.packSizes.length,
        lowPrice: Math.min(...prices).toString(),
        highPrice: Math.max(...prices).toString(),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: data.pageUrl,
        priceValidUntil: getOfferPriceValidUntil(),
        hasMerchantReturnPolicy: merchantReturnPolicySchema(),
        shippingDetails: offerShippingDetailsSchema(),
        seller: { '@id': `${data.baseUrl}/#organization` }
      }
    };
  }

  itemList(data: ProductSeoData): Record<string, unknown> {
    const variantItems = data.packSizes.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `${data.productTitle} (${data.brandName}) ${p.volume}`,
        image: data.productImageUrl,
        sku: p.sku,
        description: `${data.productTitle} (${data.brandName}) ${p.volume} pack - ${p.price} INR`,
        brand: { '@type': 'Brand', name: 'Harishree Crop Science' },
        manufacturer: {
          '@type': 'Organization',
          name: 'Harishree Crop Science',
          url: data.baseUrl,
          logo: `${data.baseUrl}/assets/logo/HARISHREE.png`,
          address: this.manufacturerAddress()
        },
        category: data.category,
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'Pack size', value: p.volume },
          { '@type': 'PropertyValue', name: 'Recommended dose', value: data.dose }
        ],
        offers: {
          '@type': 'Offer',
          price: p.price.toString(),
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: data.pageUrl,
          priceValidUntil: getOfferPriceValidUntil(),
          hasMerchantReturnPolicy: merchantReturnPolicySchema(),
          shippingDetails: offerShippingDetailsSchema(),
          seller: { '@id': `${data.baseUrl}/#organization` }
        }
      }
    }));

    const benefitOffset = data.packSizes.length;
    const benefitItems = data.benefits.map((benefit, i) => ({
      '@type': 'ListItem',
      position: benefitOffset + i + 1,
      name: benefit
    }));

    const cropOffset = benefitOffset + data.benefits.length;
    const cropItems = data.targetCrops.map((crop, i) => ({
      '@type': 'ListItem',
      position: cropOffset + i + 1,
      name: crop
    }));

    const pestOffset = cropOffset + data.targetCrops.length;
    const pestItems = data.targetPests.map((pest, i) => ({
      '@type': 'ListItem',
      position: pestOffset + i + 1,
      name: pest
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${data.productTitle} (${data.brandName}) product information`,
      description: `Pack variants, benefits, crops, and pests for ${data.brandName} (${data.productTitle}).`,
      numberOfItems: variantItems.length + benefitItems.length + cropItems.length + pestItems.length,
      itemListElement: [...variantItems, ...benefitItems, ...cropItems, ...pestItems]
    };
  }

  faqPage(data: ProductSeoData): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answerPlain
        }
      }))
    };
  }

  howTo(data: ProductSeoData): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: data.howToName,
      description: data.howToDescription,
      image: data.productImageUrl,
      totalTime: 'PT20M',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: String(data.indicativeListPriceInr)
      },
      supply: [
        { '@type': 'HowToSupply', name: `${data.brandName} (${data.productTitle})` },
        { '@type': 'HowToSupply', name: 'Clean water' }
      ],
      tool: [
        { '@type': 'HowToTool', name: 'Knapsack sprayer (15 Litre)' },
        { '@type': 'HowToTool', name: 'Measuring cup' },
        { '@type': 'HowToTool', name: 'Personal Protective Equipment (PPE)' }
      ],
      step: data.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        image: data.productImageUrl
      }))
    };
  }

  localBusiness(data: ProductSeoData): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Harishree Crop Science',
      image: `${data.baseUrl}/assets/logo/HARISHREE.png`,
      url: data.baseUrl,
      telephone: '+919898197196',
      email: 'harishreecropscience@gmail.com',
      priceRange: 'INR',
      address: this.manufacturerAddress(),
      areaServed: [
        { '@type': 'City', name: 'Rajkot' },
        { '@type': 'State', name: 'Gujarat' },
        { '@type': 'Country', name: 'India' }
      ],
      department: [
        {
          '@type': 'LocalBusiness',
          name: `${data.brandName} (${data.productTitle})`,
          description: data.description,
          telephone: '+919898197196',
          email: 'harishreecropscience@gmail.com',
          address: this.departmentPostalAddress()
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/harishree-crop-science',
        'https://www.instagram.com/harishree_crop_science',
        'https://www.facebook.com/harishreecropscience'
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.377391787234835',
        longitude: '70.68967331867736'
      }
    };
  }

  imageObject(data: ProductSeoData): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      '@id': `${data.pageUrl}#imageobject`,
      url: data.productImageUrl,
      contentUrl: data.productImageUrl,
      name: data.productImageAlt,
      caption: data.productImageCaption,
      description: `${data.brandName} ${data.productTitle} product image by Harishree Crop Science`,
      representativeOfPage: true,
      width: '400',
      height: '400'
    };
  }

  videoObject(data: ProductSeoData, videoUrl?: string): Record<string, unknown> | null {
    if (!videoUrl) {
      return null;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: `How to apply ${data.brandName} (${data.productTitle})`,
      description: data.howToDescription,
      thumbnailUrl: data.productImageUrl,
      uploadDate: new Date().toISOString().split('T')[0],
      contentUrl: videoUrl,
      embedUrl: videoUrl
    };
  }

  injectAll(
    data: ProductSeoData,
    inject: (json: object, keySuffix: string) => void,
    videoUrl?: string
  ): void {
    inject(this.organization(data.baseUrl), 'ORG');
    inject(this.website(data.baseUrl), 'WEBSITE');
    inject(this.webPage(data), 'WEBPAGE');
    inject(this.breadcrumb(data), 'BREADCRUMB');
    inject(this.product(data), 'PRODUCT');
    inject(this.itemList(data), 'ITEMLIST');
    inject(this.faqPage(data), 'FAQ');
    inject(this.howTo(data), 'HOWTO');
    inject(this.localBusiness(data), 'LOCALBUSINESS');
    inject(this.imageObject(data), 'IMAGEOBJECT');

    const video = this.videoObject(data, videoUrl);
    if (video) {
      inject(video, 'VIDEO');
    }
  }
}
