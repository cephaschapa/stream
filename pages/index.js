import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Features from '../components/Features';
import About from '../components/About';
import Copyright from '../components/Copyrite';

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
      {/* About */}
      <About />
      {/* Features */}
      <Features />
      {/* Footer */}
      <Footer />
      {/* Copyrite */}
      <Copyright />
      
    </div>
  );
}
