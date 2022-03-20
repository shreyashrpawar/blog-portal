import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="footermain">
<div className="footerdiv">
    <div className="footerdiv1">
<Link href={'/'}>WebDocs</Link>
<p>A simple way to learn web</p>
<p>Copyright&#169; 2022</p>
</div>
<div className="footera">

<Link href={'/Contact-us'}>Contact</Link>
<Link href={'/About-us'}>About</Link>
</div>
</div>
        </footer>
     );
}
 
export default Footer;