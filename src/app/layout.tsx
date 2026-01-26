import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { LangProvider } from '../app/providers/provider';


export const metadata: Metadata = {
  title: 'ROJO Studio',
  description: `Visual Effects | ROJO Studio is a post-production company with bases in Buenos Aires and Tenerife. We specialize in High-End Visual Effects.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          <Header />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
