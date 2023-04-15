/* eslint-disable react/no-unknown-property */
import '@/css/globals.css';
import '@/scss/globals.scss';

import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--roboto'
});

export default function App({
  Component,
  // eslint-disable-next-line unicorn/prevent-abbreviations
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
