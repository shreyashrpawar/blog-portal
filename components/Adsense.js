import React, { useEffect } from "react";

const Adsense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
<ins className="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9684334826790570"
     data-ad-slot="2122721910"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
};

export default Adsense;
