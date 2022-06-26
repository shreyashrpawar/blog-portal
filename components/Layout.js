import Footer from "./Footer";
import Navbar from "./Navbar";
//import Adsense from "./Adsense";

const Layout = ({children}) => {
    return ( 
        <>
        <Navbar/>
        {children}
   //     <Adsense/>
        <Footer/>
        </>
     );
}
 
export default Layout;
