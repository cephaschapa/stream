import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <meta name="theme-color" content="#fff" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;