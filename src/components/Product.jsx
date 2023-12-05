import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  const selected = cart.some((p) => p.id === item.id);
  return (
    <div className="rounded-xl p-2 flex flex-col justify-start items-center m-4 transition-all hover:scale-105 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 bg-white">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-60 mt-2">
          {item.title}
        </p>
      </div>
      <div>
        <p className=" text-gray-400 font-normal text-[14px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="item image" className="h-full w-full" />
      </div>
      <div className="mt-auto flex justify-between items-center w-full ">
        <div>
          <p className="text-green-600 font-bold ">${item.price}</p>
        </div>
        <button
          className="px-3 py-1 text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[14px] transition-all
        hover:bg-gray-700 hover:text-white"
        >
          {selected ? (
            <button onClick={removeFromCart} className="">
              Remove item
            </button>
          ) : (
            <button onClick={addToCart}>Add to cart</button>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
