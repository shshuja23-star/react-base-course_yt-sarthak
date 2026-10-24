import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 items-start flex-col gap-4 lg:w-1/2"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          className="px-5 w-full font-medium outline-none py-2 border-2 rounded"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 w-full font-medium outline-none py-2 h-20 border-2 rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className=" active:scale-95 transition bg-white w-full font-medium outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map((e, idx) => {
            return (
              <div
                key={idx}
                className=" relative h-60 w-50 rounded-2xl py-7 px-5 bg-center overflow-hidden bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"
              >
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-3 right-3 bg-red-500 p-1 rounded-full text-sm active:scale-90"
                >
                  <X size={16} color="#ffffff" strokeWidth={2.75} />
                </button>
                <h3 className="text-black leading-tight text-lg font-bold">
                  {e.title}
                </h3>
                <p className="mt-4 leading-tight font-semibold text-sm text-gray-600">
                  {e.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
