import { Progress } from "@/components/ui/progress";
import { useCourse } from "@/store/course";

export function CourseProgress() {
  const { statementIndex, currentCourse } = useCourse();

  const max = currentCourse?.statements?.length || 0;
  const value = statementIndex;
  const percent = (value / max) * 100;

  return (
    <div className="flex items-center justify-center">
      <Progress value={percent} className="w-[30vw] min-w-[380px]" />
      <div className="ml-[12px] text-right pt-[1px]" style={{ fontFamily: "Input Mono" }}>
        {value}/{max}
      </div>
    </div>
  );
}
