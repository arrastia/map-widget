import styles from './page.module.css';

import { Map } from './components/Map';

export default function Home() {
  return (
    <main className={styles.main}>
      <Map token={process.env.MAPBOX_TOKEN as string} />
    </main>
  );
}
