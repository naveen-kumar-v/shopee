import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/websiteLogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);

  console.log(cart.length);

  return (
    <div className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-20 py-2 bg-[rgba(0,0,0,0.85)] backdrop-blur-[10px] text-white z-40">
      <div onClick={() => navigate("/")} className="flex items-center gap-2">
        <img src={logo} alt="logo" className=" w-12 h-12 cursor-pointer" />
        <h1 className="font-[alkatra] font-bold text-2xl text-orange-500 transition drop-shadow-2xl">
          Shopee
        </h1>
      </div>
      <div className="flex gap-4 ">
        <button
          className="hover:bg-white/10 px-4 py-1 rounded"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="flex hover:bg-white/10 px-4 py-1 rounded relative"
        >
          <IoMdCart size={24} style={{ fill: "white" }} />
          {cart.length ? (
            <span className="bg-green-600 w-4 h-4 rounded-full text-xs flex items-center justify-center animate-bounce absolute top-0 right-3">
              {cart.length}
            </span>
          ) : (
            ""
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
