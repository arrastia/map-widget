import Link from 'next/link';

import 'styles/globals.css';
import 'styles/variables.css';
import styles from './layout.module.css';

import { Background } from './components/Background';
import { Granular } from './components/Granular';

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Map widget', description: 'Great way to check were you are' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1 className={styles.title}>Map widget</h1>
          <small className={styles.subtitle}>
            Last visit from: <Link href="https://arrastia.me">Tallinn, Estonia</Link>
          </small>
        </header>
        {children}
        <footer className={styles.footer}>
          Made with ☕️ by <Link href="https://arrastia.me">@Arrastia</Link>
        </footer>

        <Background />
        <Granular />
      </body>
    </html>
  );
}
