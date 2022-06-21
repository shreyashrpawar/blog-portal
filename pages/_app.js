import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import nProgress from "nprogress";
import "nprogress/nprogress.css"
import "../styles/nprogress.css"
import { Router } from "next/router";


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return  ( <>
           
           <Script  
   id="Adsense-id"  async
   onError={(e) => { console.error("Script failed to load", e); }}
strategy="afterInteractive"
 src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4329221931512321"
  crossorigin="anonymous"
/>
    
    <Layout>
  <Component {...pageProps}/>

</Layout>
</>
)
}

export default MyApp
