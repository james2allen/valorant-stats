/** Imports */
import React from "react";
import "./Footer.scss";

/** Footer component */
function Footer({ appName }: { appName: string }) {
  return (
    <div className='col-md-12 footer-text fixed-bottom'>
      {appName} isn't endorsed by Riot Games and doesn't reflect the views or
      opinions of Riot Games or anyone officially involved in producing or
      managing Riot Games properties. Riot Games, and all associated properties
      are trademarks or registered trademarks of Riot Games, Inc.
    </div>
  );
}

export default Footer;
