const Pagination = ({ index, setIndex, setUserData }) => {
  return (
    <div className="text-sm text-gray-100 text-center bg-gray-800/20 rounded py-2 px-4 flex justify-center gap-4 items-center flex-wrap mt-35 ">
      <button
        disabled={index <= 1}
        className="rounded-lg py-2 px-4 cursor-pointer bg-gray-600 hover:bg-gray-400/65 active:scale-95 disabled:bg-gray-700/65 disabled:cursor-not-allowed disabled:active:scale-100"
        onClick={() => {
          if (index > 1) {
            setUserData([]);
            setIndex((prev) => prev - 1);
          }
        }}
      >
        Prev
      </button>
      <p>
        <span className="bg-gray-800/50 py-1 px-2 rounded-lg">
          {/* Current page */ index}
        </span>{" "}
        of 100
      </p>
      <button
        disabled={index >= 100}
        className="rounded-lg py-2 px-4 cursor-pointer bg-gray-600 hover:bg-gray-400/65 active:scale-95 disabled:bg-gray-700/65 disabled:cursor-not-allowed disabled:active:scale-100"
        onClick={() => {
          if (index < 100) {
            setUserData([]);
            setIndex((next) => next + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
