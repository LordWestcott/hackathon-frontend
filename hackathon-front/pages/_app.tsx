import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Quicksand } from '@next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${quicksand.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
