import styles from './page.module.css';

import { BorderMask } from './components/BorderMask';
import { Map } from './components/Map';
import { Toast } from './components/Toast';

import type { Geo } from '@vercel/edge';

export type HomeProps = { searchParams: { fallback: string; location: string; last_location: string } };

export default function Home({ searchParams: { fallback, location, last_location } }: HomeProps) {
  const { city, country, latitude, longitude }: Geo = JSON.parse(location) || {};
  const { city: lastCity, country: lastCountry, latitude: lastLatitude, longitude: lastLongitude }: Geo = JSON.parse(last_location) || {};

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div aria-hidden={true} className={styles.granular} />
        <Map
          lastLocation={{
            city: decodeURIComponent(String(lastCity)),
            coordinates: [Number(lastLongitude), Number(lastLatitude)],
            country: decodeURIComponent(String(lastCountry))
          }}
          location={{
            city: decodeURIComponent(String(city)),
            coordinates: [Number(longitude), Number(latitude)],
            country: decodeURIComponent(String(country))
          }}
          token={process.env.MAPBOX_TOKEN as string}
        />
        <BorderMask direction="vertical" />
        <BorderMask direction="horizontal" />
      </section>

      {JSON.parse(fallback) ? <Toast /> : null}
    </main>
  );
}
