// import { Bookmark } from "lucide-react";
import { Building2, Briefcase } from "lucide-react";

const Card = (props) => {
  const { primary = [], extra = [] } = props.tags || {};
  const isFreelancer = props.company === "Freelancer";

  return (
    <div className="w-105 h-full rounded-sm bg-white relative p-5">
      <div className="flex justify-between items-center">
        {props.available ? (
          <span className="rounded-full bg-green-500 text-white text-xs font-semibold px-4 py-2">
            available
          </span>
        ) : (
          <span />
        )}
        <h4 className="text-gray-600 font-medium tracking-tight text-lg">
          ${props.payPerHour}/hr
        </h4>
      </div>

      <div className="flex flex-col items-center text-center mt-3">
        <img
          src={props.profilePicture}
          alt={props.userName}
          className="w-40 h-40 rounded-full object-cover"
        />
        <h3 className="mt-3 font-semibold text-2xl text-gray-600 tracking-normal">
          {props.userName}
        </h3>
        <span className="text-gray-500 text-sm font-semibold">
          {props.post}
        </span>
        <div className="flex items-center gap-1 h-8 py-1 px-2 justify-center">
          {isFreelancer ? (
            <Briefcase size={14} className="text-green-500" />
          ) : (
            <Building2 size={14} className="text-blue-400" />
          )}
          <span
            className={
              isFreelancer
                ? "text-green-500 font-medium"
                : "text-blue-400 font-medium"
            }
          >
            {props.company}
          </span>
        </div>
        <div className="flex flex-nowrap items-center gap-2 mt-3 max-w-full overflow-x-auto">
          {primary.map((tag) => (
            <span
              key={tag}
              className="whitespace-nowrap min-w-10 text-center rounded-full border border-gray-400 px-2 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
          {extra.length > 0 && (
            <button
              disabled
              className="shrink-0 whitespace-nowrap min-w-7 text-center rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white disabled:cursor-default disabled:opacity-100"
            >
              +{extra.length}
            </button>
          )}
        </div>

        <p className="mt-3 text-sm text-gray-500 font-semibold h-16 px-7.4">
          {props.description}
        </p>
      </div>

      <div className="mt-3 text-center hover:bg-blue-300 rounded">
        <hr className="w-1/2 mt-3 text-gray-300 font-semibold relative left-1/4" />
        <button className="text-gray-600 font-medium tracking-tight text-lg py-2 px-3">
          VIEW PROFILE
        </button>
      </div>
    </div>
  );

  // return (
  //   <div className="card">
  //     <div className="top">
  //       <img src={props.logo} alt="" />
  //       <button>
  //         Save <Bookmark size={10} />
  //       </button>
  //     </div>
  //     <div className="center">
  //       <h3>
  //         {props.company} <span>{props.datePosted}</span>
  //       </h3>
  //       <h2>{props.post}</h2>
  //       <div className="tag">
  //         <h4>{props.tag1}</h4>
  //         <h4>{props.tag2}</h4>
  //       </div>
  //     </div>
  //     <div className="bottom">
  //       <div>
  //         <h3>{props.pay}</h3>
  //         <p>{props.location}</p>
  //       </div>
  //       <button>Apply Now</button>
  //     </div>
  //   </div>
  // );
};

export default Card;
