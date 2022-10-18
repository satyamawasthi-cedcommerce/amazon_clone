import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Cart = () => {
  const { productList, setProductList, number, setNumber, amount, setAmount } =
    useContext(CartContext);
  const navigate = useNavigate();

  // decrease the function
  const decrease = (event) => {
    if (productList[event.currentTarget.id]["quantity"] === 1) {
      setProductList(
        productList.filter((item, index) => {
          return index !== event.currentTarget.id;
        })
      );
      setNumber(number - 1);
    } else {
      setProductList(
        productList.map((item, index) => {
          if (index == event.currentTarget.id) {
            item.quantity = item.quantity - 1;
            return item;
          }
          return item;
        })
      );
    }
  };
  // increse quantity
  const increment = (event) => {
    console.log(event.currentTarget.id);
    setProductList(
      productList.map((item, index) => {
        if (index == event.currentTarget.id) {
          item.quantity = item.quantity + 1;
          return item;
        }
        return item;
      })
    );
  };
  // providing checkout Navigation
  const checkout = () => {
    navigate("/Checkout");
  };
  // Calculating total
  setAmount(
    productList.reduce((total, item) => {
      return total + item.Price * item.quantity;
    }, 0)
  );
  return (
    <>
      <Header />
      {productList.length === 0 ? (
        <p id="emptyCart">Your Cart is Empty!</p>
      ) : (
        <>
          <div className="cartPage">
            {productList.map((item, index) => {
              return (
                <div className="singleCart">
                  <div id="cartImage">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="data">
                    <h5>{item.name}</h5>
                    <p>₹{Number(item.Price * item.quantity)}.00</p>

                    <div className="increase">
                      <button
                        className="quantity"
                        id={index}
                        onClick={increment}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      {item.quantity}
                      <button
                        className="quantity"
                        id={index}
                        onClick={decrease}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    <hr/>
                  </div>
                </div>
              );
            })}
            <hr id="line" />
            <div className="amount">
              <div id="totalAmount">Total Amount:</div>
              <div>${amount}.00</div>
            </div>
          </div>
          <button className="checkout" onClick={checkout}>
            Checkout{" "} <i className="fa-solid fa-arrow-right"></i>
          </button>
        </>
      )}
    </>
  );
};

export default Cart;
