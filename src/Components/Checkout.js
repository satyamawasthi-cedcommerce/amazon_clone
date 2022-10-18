import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const { loggedin, setNumber, setProductList, setAmount } =
    useContext(CartContext);
  const navigate = useNavigate();

  const proceed = () => {
    setProductList([]);
    setAmount(0);
    setNumber(0);
    navigate("/Proceed");
  };
  return !loggedin ? (
    <Login />
  ) : (
    <div className="checkoutPage">
      <div className="headerss">
        <div id="checkoutLogo">
          <img src="download.png" alt="" />
        </div>
        <div id="checkoutHead">
          <h2>Checkout</h2>
        </div>
        <div id="lock">
          <i class="fa-solid fa-lock"></i>
        </div>
      </div>
      <hr />
      
      
      
      <div className="payment">
        <div className="bold" id="orange">
          Select a Payment Method
        </div>
      </div>

      <div className="method">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">Net Banking</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">other UPI Apps</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label htmlFor="javascript">
          Pay on Delivery
          <p>
            Pay using cash, Paylink (debit, credit card, UPI) or Scan & Pay
            (Flat INR 25 back on first Amazon Scan & Pay transaction)
          </p>
        </label>
      </div>
      <div id="proceed">
        <button onClick={proceed}>Proceed</button>
      </div>
    </div>
  );
};

export default Checkout;
