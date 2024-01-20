import { useCourse } from "@/store/course";
import UnderlineInput from "./UnderlineInput";

interface Props {
  onShowAnswer: () => void;
}

export function Question({ onShowAnswer }: Props) {
  const { currentStatement, checkCorrect } = useCourse();
  const { chinese = "", english = "" } = currentStatement || {};
  const word = chinese;

  function handleCheckAnswer(input: string) {
    if (checkCorrect(input)) {
      onShowAnswer();
      return true;
    }
    return false;
  }

  return (
    <div className="text-center mb-10">
      <UnderlineInput onCheckAnswer={handleCheckAnswer} english={english}></UnderlineInput>
      <div className="mt-[3vw] text-[1.25em] text-gray-500 dark:text-gray-50">{word}</div>
    </div>
  );
}
