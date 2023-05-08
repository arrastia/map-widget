import { NextResponse } from 'next/server';

import { geolocation } from '@vercel/edge';
import kv from '@vercel/kv';

import type { Geo } from '@vercel/edge';
import type { NextRequest } from 'next/server';

const LAST_LOCATION_FALLBACK = { city: 'Tallinn', country: 'ESTONIA', countryRegion: 'NC', region: null, latitude: 59.436962, longitude: 24.753574 };
const LOCATION_FALLBACK = { city: 'Huarte-Uharte', country: 'ES', countryRegion: 'NC', region: 'cdg1', latitude: 42.8273, longitude: -1.5919 };

export const config = { matcher: '/' };

export async function middleware(request: NextRequest) {
  const location = geolocation(request);
  const lastLocation = await kv.get<Geo>(process.env.KV_STORE_NAME || '');

  const { nextUrl: url } = request;

  url.searchParams.set('fallback', JSON.stringify(!location.city));
  url.searchParams.set('location', JSON.stringify(location.city ? location : LAST_LOCATION_FALLBACK));
  url.searchParams.set('last_location', JSON.stringify(lastLocation?.city ? lastLocation : LAST_LOCATION_FALLBACK));

  return NextResponse.rewrite(url);
}
