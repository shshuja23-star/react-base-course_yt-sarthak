const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-gray-700 opacity-70 bg-linear-to-t from-black to-transparent p-8 flex flex-col justify-between">
      <h2 className="bg-white text-2xl font-semibold rounded-full h-10 w-10 flex items-center justify-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl leading-relaxed text-white mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor
          eum impedit, nam nulla facere.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
