import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Quicksand } from '@next/font/google'
import { ProfileContext, ProfileContextInterface } from '../contexts/UserContext'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

const profileContext : ProfileContextInterface = {
  user: "Louis P",
  currentStreak: 11,
  streakPeriodFulFilled: true,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProfileContext.Provider value={profileContext}>
      <main className={`${quicksand.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ProfileContext.Provider>
  )
}
