import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css';
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/nprogress.css";
import { Router } from "next/router";
import Adsense from '../components/Adsense'


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return  ( <>
           

    
    <Layout>
  <Component {...pageProps}/>
<Adsense/>
</Layout>
</>
)
}

export default MyApp
