import "./NavbarStyles.css";

import { BagIcon, SearchIcon } from "../SVGs/NavbarSVG";
import Slider from "./CheckoutSideMenu/Slider";

import { MenuContext, SearchMenuContext } from "../Contexts/Contexts";
import { useState } from "react";
import { Link } from "react-router-dom";

import TopSlider from "./TopSlider/TopSlider";

export default function Navbar() {
  const [MenuinView, toggleView] = useState(false);
  const [SearchInView, toggleSearchView] = useState(false);
  return (
    <>
      <SearchMenuContext.Provider value={SearchInView}>
        <TopSlider></TopSlider>
      </SearchMenuContext.Provider>
      <MenuContext.Provider value={MenuinView}>
        <Slider toggle={toggleView}></Slider>
      </MenuContext.Provider>
      <div className="position-fixed navbar-container">
        <div className="navbar">
          <Link to={"/1"} className="homepage-link">
            <div className="company-name">THE SKINCARE NAME</div>
          </Link>
          <span>
            <MenuContext.Provider value={MenuinView}>
              <span
                onClick={() => {
                  toggleSearchView(!SearchInView);
                }}
              >
                <SearchIcon size={15}></SearchIcon>
              </span>
              <span
                onClick={() => {
                  toggleView(!MenuinView);
                }}
              >
                <BagIcon></BagIcon>
              </span>
            </MenuContext.Provider>
          </span>
        </div>
      </div>
    </>
  );
}
