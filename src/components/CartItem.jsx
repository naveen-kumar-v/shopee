import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from cart");
  };

  return (
    <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded flex justify-between gap-6 w-[50vw] h-[30vh] px-6 py-6 mb-4">
      <div className="h-40 mx-auto">
        <img
          src={item.image}
          alt="product image"
          className="h-full w-full p-2"
        />
      </div>

      <div className="w-[30vw] h-[30vh]">
        <p className="text-xl font-bold mb-2 text-gray-800">{item.title}</p>
        <p className="font-normal text-gray-700">
          {item.description.split(" ").splice(0, 15).join(" ") + "..."}
        </p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-bold">${item.price}</p>
          <div
            onClick={removeFromCart}
            className="transition-all cursor-pointer bg-red-100 hover:bg-red-200 p-2 rounded-full"
          >
            <MdDelete size={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
