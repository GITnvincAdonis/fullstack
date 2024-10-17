import "./ItemPageStyles.css";
import Navbar from "../NavBar/Navbar";
import Review from "../Review/Reveiw";
import ItemInstruction from "./Instructions/ItemInstructions";


export default function ItemPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" product-item-container">
        <div className="item-image"></div>
        <div className="item-body d-flex flex-column align-items-start ">
          <h1 className="item-name">PRODUCT NAME</h1>
          <Review></Review>
          <h3 className="product-price m-0">$---,---,---</h3>
          <h3>ingredient list</h3>
          <p className="ingredient-list">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            saepe distinctio minima officia quisquam voluptate blanditiis sunt,
            laborum est eos sapiente magnam recusandae a odit molestias sit
            tempore numquam quidem. In voluptates, veritatis sed soluta dolor
            autem animi eaque nobis. Officiis quisquam inventore voluptatem,
            doloribus, dignissimos explicabo incidunt magni provident officia
            quod, at ea eaque tempore ipsum vero. Facilis, quasi?
          </p>
          <ItemInstruction></ItemInstruction>
          
        </div>
       
      </div>
      
    </>
  );
}
