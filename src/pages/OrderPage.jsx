// src/pages/OrderPage.jsx
import React, { useEffect } from "react";

const OrderPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "flipdish-script";
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = "https://web-order.flipdish.co/client/productionwlbuild/latest/static/js/main.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="order-page">
      <h1 className="text-2xl font-bold text-center my-6">Order Online</h1>
      <div
        id="flipdish-menu"
        data-offset="0"
        data-restaurant="br11464"
        style={{ minHeight: "700px" }}
      ></div>
    </div>
  );
};

export default OrderPage;
