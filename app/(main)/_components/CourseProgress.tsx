import { Progress } from "@/components/ui/progress";
import { useCourse } from "@/store/course";

export function CourseProgress() {
  const { statementIndex, currentCourse } = useCourse();

  const max = currentCourse?.statements.length || 0;
  const value = statementIndex;
  const percent = (value / max) * 100

  return (
    <div className="flex items-center justify-center mb-16">
      <Progress value={percent} className="w-[26vw] min-w-[300px]" />
      <div className="w-[100px] text-right" style={{ fontFamily: "Maple Mono SC NF Freeze"}}>{value}/{max}</div>
    </div>
  );
}
