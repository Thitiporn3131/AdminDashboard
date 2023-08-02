import "./product.scss";
import Single from "../../component/single/Single";
import { singleProduct } from "../../data";

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product