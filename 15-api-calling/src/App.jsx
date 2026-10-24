import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json();
    // console.log(data);
  };
  return (
    <div className="p-10 bg-blue-300 text-blue-50 h-[95%] w-full overflow-auto">
      <button
        onClick={getData}
        className="bg-gray-800 text-lg py-2 px-5 rounded-2xl in-active:scale-90 transition-transform"
      >
        Get Data
      </button>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {data.map((e, idx) => {
          return (
            <h3 className="text-lg font-semibold text-shadow-lg text-shadow-blue-800">
              Salam, {idx} {e.author}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
