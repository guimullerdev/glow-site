import { Coupon, LoyaltyData } from './types';

const API_URL =
  process.env.API_URL || 'https://signalpdvimages.s3.us-east-2.amazonaws.com';

async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
): Promise<T> {
  const url = new URL(`${API_URL}${endpoint}`);

  if (params) {
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, String(params[key]));
    });
  }

  try {
    console.log(`Fetching from: ${url.toString()}`);
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export async function getCoupons(params?: {
  page?: number;
  pageSize?: number;
  category?: string;
  sort?: string;
}): Promise<Coupon[]> {
  return fetchAPI('/coupons.json', params);
}

export async function getLoyalty(params?: {
  page?: number;
  pageSize?: number;
  category?: string;
  sort?: string;
}): Promise<LoyaltyData> {
  return fetchAPI('/loyalty.json', params);
}
