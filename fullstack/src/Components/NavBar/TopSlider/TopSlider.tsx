import "./TopSliderStyles.css";
import { SearchIcon } from "../../SVGs/NavbarSVG";

import { useSearchMenuContext } from "../../Contexts/Contexts";
import { motion } from "framer-motion";
export default function TopSlider() {
  const SearchInView = useSearchMenuContext();
  console.log(SearchInView);
  console.log(Number(SearchInView));
  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={SearchInView ? { y: 0 } : { y: "-100%" }}
        transition={{ duration: 0.51, type: "tween", ease: "easeInOut" }}
        className="search-slider-container"
      >
        <div className="search-slider d-flex">
          <SearchIcon size={40}></SearchIcon>
          <input
            className="form-control no-border input-form"
            placeholder="Search"
          />
        </div>
        <motion.div
          animate={SearchInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.61 * Number(SearchInView) }}
          className="blur-filter"
        ></motion.div>
      </motion.div>
    </>
  );
}
