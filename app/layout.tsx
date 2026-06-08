import type { Metadata, Viewport } from 'next';
import { Nunito_Sans } from 'next/font/google';
import AppProviders from '@/components/AppProviders';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://challenge-lacrei-saude.vercel.app'),
  title: {
    default: 'Lacrei Saúde — Cuidado seguro e acolhedor',
    template: '%s | Lacrei Saúde',
  },
  description:
    'Plataforma que conecta a comunidade LGBTQIAPN+ a profissionais de saúde seguros, acessíveis e acolhedores.',
  keywords: [
    'Lacrei Saúde',
    'saúde LGBTQIAPN+',
    'profissionais de saúde',
    'acessibilidade',
    'cuidado seguro',
  ],
  authors: [{ name: 'Lacrei Saúde' }],
  openGraph: {
    title: 'Lacrei Saúde — Cuidado seguro e acolhedor',
    description:
      'Conectamos a comunidade LGBTQIAPN+ a profissionais de saúde seguros e acolhedores.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B6B5B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunitoSans.variable}>
      <body>
        <AppProviders>
          <a href="#conteudo-principal" className="skip-link">
            Pular para o conteúdo principal
          </a>
          <Header />
          <main id="conteudo-principal">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
