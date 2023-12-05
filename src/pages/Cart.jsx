import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState("");

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-[85vw] mx-auto mt-20 font-[rubik]">
      {cart.length > 0 ? (
        <div className="flex w-full gap-4 bg-white">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="flex flex-col w-[35vw] justify-between shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] h-[85vh] fixed left-[60vw]">
            <div className="p-4">
              <p className="uppercase text-lg font-extrabold text-green-800 -mb-1">
                your cart
              </p>
              <p className="uppercase text-5xl font-bold text-green-800 mb-4">
                summary
              </p>
              <p className="font-medium text-lg">
                Total Items:
                <span className="font-extrabold"> {cart.length}</span>
              </p>
            </div>
            <div className="p-4">
              <p className="font-medium text-lg">
                Total Amount:{" "}
                <span className="font-extrabold">${totalAmount}</span>
              </p>
              <button className="bg-green-700 text-lg font-medium text-white py-2 rounded-md w-[20vw] mt-4">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[88vh] font-extrabold flex-col gap-2 text-lg">
          <h1>Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-base">
              Show Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
