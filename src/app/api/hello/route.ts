import { NextResponse } from 'next/server';

import { geolocation } from '@vercel/edge';

export async function GET(request: Request): Promise<NextResponse> {
  const location = geolocation(request);

  return NextResponse.json(
    location.city
      ? { ...location }
      : { city: 'Huarte-Uharte', country: 'ES', countryRegion: 'NC', region: 'cdg1', latitude: '42.8273', longitude: '-1.5919' }
  );
}
