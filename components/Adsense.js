import { useEffect } from "react"
export default function Adsense(...props) {
    const { currentPath } = props;
    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }, [currentPath])

    return(
        <div key={currentPath}>
        { /*START horizonalAds Google Adsense */ }
          <ins className="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9684334826790570"
     data-ad-slot="2122721910"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
      

        </div>
    )
}
