import { dataCourses } from "./db/courses";
import { Courses } from "./modules/Course";

export const App = () => {
  return (
    <>
      <Courses data={dataCourses} />
    </>
  );
}