import Link from "next/link";
import { useState } from 'react';


const Navbar = () => {

    const [style,setStyle]= useState("nav-div3")

    
    const changeClass=(e)=>{
        if(style=="nav-div3"){
        setStyle("nav-divchange");
   
    }else if(style=="nav-divchange"){
        setStyle("nav-div3");
    }
    }

    const [display,setdisplay]= useState("Categories")

    
    const displayCategory=(e)=>{
        if(display=="Categories"){
            setdisplay("Categories123");
   
    }else if(display=="Categories123"){
        setdisplay("Categories");
    }
    }

    return ( 
        <header className="nav-header">
          
            <div className="nav-div1">
                <div className="nav-div2">
                <Link href={'/'}>WebDocs</Link>
                </div>
                <button className="toggleicon" onClick={changeClass}>
                    <span className="listicon">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
                    </span>
                </button>
                <div className={style}>
                <button className="bg-dark text-light border-0" onClick={displayCategory}><span className="nav-links">Categories</span></button>
                 <div className={display}>
             <Link href={'/NextJS'}>NextJS</Link>
                <Link href={'/CSS'}>CSS</Link>
                <Link href={'/Rust'}>Rust</Link>
                </div> <Link className="nav-links"  href={'/Contact-us'}>Contact</Link>
                <Link className="nav-links" href={'/About-us'}>About</Link>
                <Link className="nav-links" href={'/Privacy-Policy'}>Privacy Policy</Link>
                <Link className="nav-links" href={'/Disclaimer'}>Disclaimer</Link>
                <Link className="nav-links" href={'/Terms-and-Conditions'}>Terms and Conditions</Link>
                </div>
               
            </div>
           
        </header>
     );
}
 
export default Navbar;