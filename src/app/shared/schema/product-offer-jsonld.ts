/**
 * Shared JSON-LD snippets for Product / Offer structured data
 * (merchant return policy, shipping details, dynamic price validity).
 */

/** ISO date (YYYY-MM-DD) for one year from today in local time — used for offer price validity. */
export function getOfferPriceValidUntil(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function merchantReturnPolicySchema(): Record<string, unknown> {
  return {
    '@type': 'MerchantReturnPolicy',
    returnPolicyCategory: 'http://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 2,
    returnMethod: 'http://schema.org/ReturnByMail',
    returnFees: 'http://schema.org/FreeReturn',
    applicableCountry: {
      '@type': 'Country',
      name: 'IN'
    }
  };
}

export function offerShippingDetailsSchema(): Record<string, unknown> {
  return {
    '@type': 'OfferShippingDetails',
    shippingRate: {
      '@type': 'MonetaryAmount',
      value: 0,
      currency: 'INR'
    },
    shippingDestination: {
      '@type': 'DefinedRegion',
      addressCountry: {
        '@type': 'Country',
        name: 'IN'
      }
    },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 2,
        unitCode: 'DAY'
      },
      transitTime: {
        '@type': 'QuantitativeValue',
        minValue: 3,
        maxValue: 7,
        unitCode: 'DAY'
      }
    }
  };
}
