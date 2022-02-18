import ReactDOM from "react-dom";
import Blog from "./component/blog";
import BlackFridayOffer from "./component/blackfridayOffer";
import Head from "./component/head";
import Products from "./component/products";
import SpecialOfferProducts from "./component/specialOffer_products";
import Testimonial from "./component/testimonial";
import "./style.css";
import Footer from "./component/footer";

function Index() {
  return (
    <div>
      <Head />
      <Products />
      <SpecialOfferProducts />
      <BlackFridayOffer />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
