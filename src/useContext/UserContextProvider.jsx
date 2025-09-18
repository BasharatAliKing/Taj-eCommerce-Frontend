// import React from "react";
// import UserContext from "./UserContext";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const UserContextProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [searchItem,setSearchItem]=useState("");
//   const [cart,setCart]=useState(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]);
//    const authorizationtoken = `Bearer ${token}`;
//   const storetokeninLS = (servertoken) => {
//     setToken(servertoken);
//     return localStorage.setItem("token", servertoken);
//   };
//   const LogoutUser = () => {
//     setToken("");
//     setUser("");
//     return localStorage.removeItem("token");
//   };
//   const userAuthentication = async () => {
//     try {
//       const response = await fetch(`http://168.231.116.183:3000/user`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const res_data = await response.json();
//         setUser(res_data.message);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//    useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   // calculate total price
//     const cartTotal = storedCart.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//     setTotal(cartTotal);
//   }, [cart]);
//   useEffect(() => {
//     userAuthentication();
//   }, []);
//   return (
//     <UserContext.Provider value={{ storetokeninLS ,LogoutUser,authorizationtoken, user,cart,setCart,total,searchItem,setSearchItem}}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "./UserContext";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [cart, setCart] = useState([]);

  const authorizationtoken = `Bearer ${token}`;

  // Store token
  const storetokeninLS = (servertoken) => {
    setToken(servertoken);
    localStorage.setItem("token", servertoken);
  };

  // Logout
  const LogoutUser = () => {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
  };

  // Authenticate user
  const userAuthentication = async () => {
    if (!token) return;
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        setUser(res_data.message);
      }
    } catch (err) {
      console.log("Auth error:", err);
    }
  };

  // ✅ Load cart from localStorage on first mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Update localStorage + total whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const cartTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, [cart,total]);

  // ✅ Authenticate user on mount / token change
  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        storetokeninLS,
        LogoutUser,
        authorizationtoken,
        user,
        cart,
        setCart,
        total,
        searchItem,
        setSearchItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

