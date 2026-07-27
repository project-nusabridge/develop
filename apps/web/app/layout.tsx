import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'NusaBridge - Connect Communities, Create Opportunities',
  description: 'NusaBridge Official Website',
  keywords: ['community', 'opportunities', 'nusabridge'],
  authors: [{ name: 'NusaBridge' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nusabridge.com',
    title: 'NusaBridge',
    description: 'Connect Communities, Create Opportunities',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
