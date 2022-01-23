import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

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
      {/* Footer */}
      <Footer />
      
    </div>
  );
}
