import { Progress } from "@/components/ui/progress";
import { useCourse } from "@/store/course";

export function CourseProgress() {
  const { statementIndex, currentCourse } = useCourse();

  const max = currentCourse?.statements.length || 0;
  const value = statementIndex;
  const percent = (value / max) * 100

  return (
    <>
      <Progress value={percent} className="w-[30%] min-w-[300px] mb-12" />
    </>
  );
}
