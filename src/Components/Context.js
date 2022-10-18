import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [number, setNumber] = useState(0);
  const [loggedin, setLoggedin] = useState(false);
  const [userName, setUserName] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <CartContext.Provider
      value={{
        productList,
        setProductList,
        number,
        setNumber,
        loggedin,
        setLoggedin,
        userName,
        setUserName,
        amount,
        setAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
