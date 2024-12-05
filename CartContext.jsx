import { createContext, useState, useEffect } from "react";
import { api } from "./src/api";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem("auth") || "{}");
    let token = JSON.parse(localStorage.getItem("token") || "{}");

    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    api
      .get(`/cart/list/${auth.id}`, config)
      .then((res) => {
        if (res.data.status) {
          setCartCount(res.data.data.length);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
