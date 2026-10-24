
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div
      id="right"
      className="h-full flex flex-nowrap gap-10 overflow-x-auto w-3/4"
    >
      {props.users.map((elem, idx) => {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            color={elem.color}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
