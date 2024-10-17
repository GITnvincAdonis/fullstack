import "./footer.css";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedInIcon,
} from "../SVGs/footerSVG";

import Hovertext from "../HoverText/HoverText";
export default function Footer() {
  return (
    <>
      <div className="  footer-container">
        <div className="footer-wrapper ">
          <div className="column column-1">
            <h2 className="column-header">ABOUT</h2>
            <h4 className="row-1">
              <Hovertext text="About Us" offset={1.25}></Hovertext>
            </h4>
            <h4 className="row-1">
              <Hovertext text="Contact Us" offset={1.25}></Hovertext>
            </h4>
            <h4 className="row-1">
              <Hovertext text="Reviews" offset={1.25}></Hovertext>
            </h4>
          </div>
          <div className="column column-2">
            <h2 className="column-header">Privacy & Terms</h2>
            <h4 className="row-2">
              <Hovertext text="Terms And Conditions" offset={1.25}></Hovertext>
            </h4>
          </div>
          <div className="column column-3 ">
            <h2 className="column-header ">Follow US</h2>
            <div className="socials">
              <div>
                <InstagramIcon />
              </div>
              <div>
                <FacebookIcon />
              </div>
              <div>
                <LinkedInIcon />
              </div>
              <div>
                <YoutubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
