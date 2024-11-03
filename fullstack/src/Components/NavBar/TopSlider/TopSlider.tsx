import "./TopSliderStyles.css";
import { SearchIcon } from "../../SVGs/NavbarSVG";
import { useQuery } from "@tanstack/react-query";
import { GetSearchItems } from "../../APIs";
import { useSearchMenuContext } from "../../Contexts/Contexts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function TopSlider() {
  const SearchInView = useSearchMenuContext();

  const [searchString, _setSearchString] = useState("nia");
  const { data } = useQuery({
    queryFn: async () => GetSearchItems(searchString),
    queryKey: ["searchItem", searchString],
  });
  useEffect(() => {
    if (data) console.log(data);
  }, [data]);
  
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
