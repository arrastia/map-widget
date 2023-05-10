import { NextResponse } from 'next/server';

import { geolocation } from '@vercel/edge';
import kv from '@vercel/kv';

import type { Geo } from '@vercel/edge';
import type { NextRequest } from 'next/server';

const LAST_LOCATION_FALLBACK = { city: 'Tallinn', country: 'Estonia', countryRegion: 'NC', latitude: 59.436962, longitude: 24.753574, region: null };
const LOCATION_FALLBACK = { city: 'Uharte', country: 'Basque Country', countryRegion: 'NC', latitude: 42.8273, longitude: -1.5919, region: 'cdg1' };

export const config = { matcher: '/' };

export async function middleware(request: NextRequest) {
  const location = geolocation(request);
  const lastLocation = await kv.get<Geo>(process.env.KV_STORE_NAME || '');
  await kv.set<Geo>(process.env.KV_STORE_NAME || '', location);

  const { nextUrl: url } = request;

  url.searchParams.set('fallback', JSON.stringify(!location.city));
  url.searchParams.set('location', JSON.stringify(location.city ? location : LOCATION_FALLBACK));
  url.searchParams.set('last_location', JSON.stringify(lastLocation?.city ? lastLocation : LAST_LOCATION_FALLBACK));

  return NextResponse.rewrite(url);
}
