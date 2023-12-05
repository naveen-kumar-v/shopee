import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Homepage = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(API_URL);
      const data = await resp.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log("Error : ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-black/10 my-10 font-[rubik]">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : data.length > 0 ? (
        <div className="grid xs-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-10space-x-5 max-w-[90vw] mx-auto min-h-[80vh]">
          {data.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center text-xl font-bold">
          <p>Data not found.</p>
        </div>
      )}
    </div>
  );
};

export default Homepage;
