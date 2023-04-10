import Link from 'next/link';

import 'styles/globals.css';
import 'styles/variables.css';
import styles from './layout.module.css';

import { Background } from './components/Background';
import { Granular } from './components/Granular';

import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Location widget',
  description: 'Elegantly pinpoint your location.',
  openGraph: {
    title: 'Location widget',
    description: 'Elegantly pinpoint your location.',
    url: 'https://map-widget.vercel.app',
    siteName: 'Map widget',
    images: [{ url: 'https://map-widget.vercel.app/og.png', width: 1200, height: 630 }],
    locale: 'en-US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1 className={styles.title}>Location widget</h1>
        </header>

        {children}
        <footer className={styles.footer}>
          Designed by <Link href="https://twitter.com/cristicrtu/status/1633561109465579525?s=46&t=mXgp6eoY1kHRfI00chjHyg">Cristicrtu</Link>, made by{' '}
          <Link href="https://arrastia.me">Arrastia</Link>
        </footer>

        <Background />
        <Granular />
      </body>
    </html>
  );
}
