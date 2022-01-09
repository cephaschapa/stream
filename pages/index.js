import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {

  return (
    <div>
      <Head>
        {/* Meta */}
        <meta name="description" content="Stream-IO - Fast, Reliable, Secure Confrencing"/>
        <meta name='robots' content='index, follow'/>
        <meta property="og:type" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
        <meta property="og:title" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
        <meta property="og:description" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
        <meta property="og:image" content="/assets/images/logo1.svg" />
        <meta property="og:url" content="https://streamio.cephaschapa.xyz" />
        <meta property="og:site_name" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
        
        {/* Links */}
        <link rel='canonical' href='https://streamio.cephaschapa.xyz'/>
        <link rel="icon" href="/assets/images/logo1.svg" />
        <title>Stream-IO - Fast, Reliable, Secure Confrencing</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      
    </div>
  )
}
