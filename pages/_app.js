import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  // const Router = useRouter()
  const progress = new ProgressBar({
    size: 4,
    color: "#4CAF50",
    className: "bar-of-progress",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

 
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
