import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar.jsx"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tomoyuki Fujii</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}
