"use client";
import { usePlaySound } from "../_hooks/playSound";
import { useEffect } from "react";
import { useCourse } from "@/store/course";
import { fetchSaveUserProgress } from "@/actions/userProgress";

type ModeType = "Question" | "Answer" | "Summary";

interface Props {
  mode: ModeType;
  onShowAnswer: () => void;
  onShowQuestion: () => void;
}

export function Tips({ mode, onShowAnswer: showAnswer, onShowQuestion: showQuestion }: Props) {
  const { playSound, audio } = usePlaySound();
  const { toNextStatement, currentCourse } = useCourse();

  async function handleToNextStatement() {
    const nextStatementIndex = toNextStatement();
    const cId = currentCourse?.id!;
    await fetchSaveUserProgress({
      courseId: cId,
      statementIndex: nextStatementIndex,
    });
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event: KeyboardEvent) {
      // console.log(`触发键盘事件 ctrlKey → ${event.ctrlKey}`);
      // console.log(`触发键盘事件 key → '${event.key}'`);

      // 阻止 Tab 默认事件触发
      if (event.key === "Tab") {
        event.preventDefault();
        console.log("已阻止 Tab 默认事件触发");
      }

      // Control + S
      if (event.ctrlKey && event.key === "s") {
        playSound();
      }

      if (event.key === " " || event.key === "Enter") {
        if (mode === "Answer") {
          // 下一个语句
          handleToNextStatement();
          // REVIEW: 在这先切换答题页面可以解决闪屏问题
          // 如果不在这切换的话，会先去渲染下一个题目的 Answer 页面
          // 然后再渲染下一个题目的 Question 页面，导致一闪而过的答案，很不舒服
          showQuestion();
        }
      }

      if (event.key === "Escape" || event.key === "Tab") {
        if (mode === "Answer") {
          showQuestion();
        } else {
          showAnswer();
        }
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mode]); // NOTE: 依赖保证内部 mode 的更新

  return <div>{audio}</div>;
}

// function TipsItem({
//   mode,
//   playSound,
//   showAnswer,
//   showQuestion,
// }: {
//   mode: ModeType;
//   playSound: () => void;
//   showAnswer: () => void;
//   showQuestion: () => void;
// }) {
//   return <></>;
// }
