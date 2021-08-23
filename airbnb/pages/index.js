import Head from 'next/head'
import Header from '../components/Header'
import LandingBanner from '../components/LandingBanner'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb_logo.svg" />
      </Head>

      {/* Header */}
      <Header />
      {/* Landing Banner */}
      <LandingBanner />
      {/* Content */}
      <h1>Main Body</h1>
    </div>
  )
}
