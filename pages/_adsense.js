import React, { useEffect } from "react";
import styles from "../styles/Home.module.css"

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
<amp-ad width="100vw" height="320"
    className={styles.adsense}
     type="adsense"
     data-ad-client="ca-pub-9684334826790570"
     data-ad-slot="2122721910"
     data-auto-format="rspv"
     data-full-width="">
  <div overflow=""></div>
</amp-ad>
  );
}
