import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();

  return (
    <div className="flex justify-center gap-4 p-2">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="transition-colors duration-200 px-3 py-2 hover:text-gray-300"
      >
        Return to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="transition-colors duration-200 px-3 py-2 hover:text-gray-300"
      >
        Go Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="transition-colors duration-200 px-3 py-2 hover:text-gray-300"
      >
        Go Forward
      </button>
    </div>
  );
};

export default Navbar2;
