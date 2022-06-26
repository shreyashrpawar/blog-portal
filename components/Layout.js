import Footer from "./Footer";
import Navbar from "./Navbar";
import Adsense from "./Adsense";

const Layout = ({children}) => {
    return ( 
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
     );
}
 
export default Layout;
