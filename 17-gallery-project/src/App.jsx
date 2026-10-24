import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let cancelled = false;

    const getData = async () => {
      setUserData([]);
      setError(null);
      try {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=10`,
        );
        if (!cancelled) setUserData(response.data);
      } catch (err) {
        if (!cancelled) setError("Couldn't load images. Try again.");
      }
    };

    getData();
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      cancelled = true;
    };
  }, [index]);

  return (
    <div className="bg-black min-h-screen p-4 text-white max-xl:text-center max-lg:text-center max-sm:text-center">
      <h2 className="text-gray-100 text-3xl font-bold py-2 text-center">
        My Gallery
      </h2>

      {error && <p className="text-center text-red-400 py-8">{error}</p>}

      {!error && userData.length === 0 && (
        <div className="flex justify-center items-center w-full 2xl:h-[calc(100vh-361px)] xl:h-[calc(100vh-343px)] lg:h-[calc(100vh-343px)] md:h-[calc(100vh-343px)] sm:h-[calc(100vh-343px)] max-sm:h-[calc(100vh-343px)]">
          <p className="text-center text-gray-300 font-semibold m-0 py-8">
            Loading images...
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 p-4 relative overflow-y-auto">
        {userData.map((e, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg bg-gray-700/20 hover:bg-gray-700/30 transition-all duration-300 py-2 px-4 cursor-pointer"
          >
            {/* <span className="text-gray-400 text-sm bg-gray-600 py-1 px-2 rounded">
              {idx + 1 + (index - 1) * 10}
            </span> */}
            <Card e={e} />
          </div>
        ))}
      </div>

      <Pagination index={index} setIndex={setIndex} setUserData={setUserData} />
      <Footer />
    </div>
  );
};

export default App;
