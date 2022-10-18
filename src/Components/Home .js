import React from "react";
import products from "./Data";
import Header from "./Header";
import Nav from "./Nav";
import CartContext from "./Context";
import { useContext } from "react";
import productCredentials from "./Products";

const Home = () => {
  const productArr = products["product"];
  const { productList, setProductList, setNumber } = useContext(CartContext);

  // ADDTOCART FUNCTION
  const addToCart = (event) => {
    let count = 0;
    productList.map((item) => {
      if (item.id === event.target.className) {
        count = count + 1;
      }
    });
    if (count === 0) {
      setProductList([...productList, productArr[event.target.id]]);
    }
  };
  // CART NUMBER
  setNumber(productList.length);

  return (
    <>
      <Header />
      <Nav />

      <div className="home">
        <div className="caraousal">
          <img src="c1.jpg" alt="" />
        </div>
      </div>
      <div className="Samples">
        {productCredentials.map((item) => (
          <>
            <div style={{ textAlign: "center" }}>
              <img src={item.image} alt="/" style={{ width: "70%" }} />
              <h4>{item.name}</h4>
              <h5 style={{ color: "green" }}>₹ {item.markedPrice}</h5>
            </div>
          </>
        ))}
      </div>
      <h2 style={{marginTop:"3%", textAlign:"center"}}>Get amazing Products at amazing discounts</h2>
      <div className="products">
        {productArr.map((item, index) => {
          return (
            <>
              <div className="singleProduct" key={item.id}>
                <img src={item.image} alt="" style={{width:"80%"}}/>
                <h5>{item.name}</h5>
                <p id="price">₹{item.Price}.00</p>
                <p id="delievery">2-Day Delievery</p>
                <button id={index} className={item.id} onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
