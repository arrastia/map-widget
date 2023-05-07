import { NextRequest, NextResponse } from 'next/server';

import { geolocation } from '@vercel/edge';

const fallback = { city: 'Huarte-Uharte', country: 'ES', countryRegion: 'NC', region: 'cdg1', latitude: 42.8273, longitude: -1.5919 };

export const config = { matcher: '/' };

export async function middleware(request: NextRequest) {
  const location = geolocation(request);

  const { nextUrl: url } = request;

  url.searchParams.set('fallback', JSON.stringify(!location.city));
  url.searchParams.set('location', JSON.stringify(location.city ? location : fallback));

  return NextResponse.rewrite(url);
}
