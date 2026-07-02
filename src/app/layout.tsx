import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import './globals.css';

// ---------------------------------------------------------------------------
// Fonts
// ---------------------------------------------------------------------------
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    default: 'AIvora — AI Document Intelligence',
    template: '%s | AIvora',
  },
  description: 'AI-powered document intelligence platform with semantic search and RAG.',
  keywords: ['AI', 'document intelligence', 'RAG', 'semantic search', 'Elasticsearch'],
  authors: [{ name: 'AIvora Team' }],
  robots: { index: false, follow: false }, // Set to true when public
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AIvora',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#07090f' },
  ],
};

// ---------------------------------------------------------------------------
// Root Layout — Server Component
// ---------------------------------------------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
