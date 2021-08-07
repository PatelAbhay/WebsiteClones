import Head from 'next/head'
import Profile from '../components/Profile'

{/* maybe make all the useless-links in header link to "Never Gonna Give You Up" */ }

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/GoogleLogo.svg" />
      </Head>

      {/* Header */}
      <header className="flex w-full justify-between p-6 text-sm">
        {/* Left section */}
        <div className="flex space-x-5 items-center">
          <p className="useless-links">About</p>
          <p className="useless-links">Store</p>
        </div>

        {/* Left section */}
        <div className="flex space-x-5 items-center">
          <p className="useless-links">Gmail</p>
          <p className="useless-links">Images</p>

          {/* 9 dot icon */}
          {/* Profile Picture */}
          <Profile url='https://i.pinimg.com/564x/c8/ba/85/c8ba858ac51835cc0bfcd0fe871efb04.jpg' />
        </div>
      </header>

      {/* Body */}
      <h1>Body</h1>

      {/* Footer */}
      <h1>Footer</h1>

    </div>
  )
}
