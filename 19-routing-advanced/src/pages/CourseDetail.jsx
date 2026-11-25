import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();
  console.log(params.courseId); // { courseId: '1' } => dynamic route parameter
  return (
    <div className="flex flex-1 items-center justify-center flex-col gap-4">
      <h1 className="text-4xl font-semibold text-white pt-20">
        {params.courseId} Course Detail
      </h1>
      <p className="text-lg text-muted font-semibold pb-50">
        This is the detail page for a specific course
      </p>
    </div>
  );
};

export default CourseDetail;
