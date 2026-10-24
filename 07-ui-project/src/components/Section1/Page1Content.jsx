import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const Page1Content = (props) => {
  return (
    <div className="pb-15 pt-10 flex gap-25 items-center h-[90vh] pl-15">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
