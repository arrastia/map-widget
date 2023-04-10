import styles from './page.module.css';

import { BorderMask } from './components/BorderMask';
import { Map } from './components/Map';
import { Toast } from './components/Toast';

import type { Geo } from '@vercel/edge';

export type HomeProps = { searchParams: { fallback: string; location: string } };

export default function Home({ searchParams: { fallback, location } }: HomeProps) {
  const { city, latitude, longitude }: Geo = JSON.parse(location) || {};

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div aria-hidden={true} className={styles.granular} />
        <Map city={String(city)} coordinates={[Number(longitude), Number(latitude)]} token={process.env.MAPBOX_TOKEN as string} />
        <BorderMask direction="vertical" />
        <BorderMask direction="horizontal" />
      </section>

      {JSON.parse(fallback) ? <Toast /> : null}
    </main>
  );
}
