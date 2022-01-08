import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Stream-IO - Fast, Reliable, Secure Confrencing</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      
    </div>
  )
}
