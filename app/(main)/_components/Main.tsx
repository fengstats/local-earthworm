"use client";
import { useEffect, useState } from "react";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { Tips } from "./Tips";
import { CourseProgress } from "./CourseProgress";
import { useCourse } from "@/store/course";
import { Summary } from "./Summary";

export function Main() {
  const [mode, setMode] = useState<"Question" | "Answer" | "Summary">(
    "Question"
  );

  const { currentCourse } = useCourse();

  useEffect(() => {
    // 说明切换了 course
    // 场景：这里是从 summary 面板进入下一关 course id 改变了
    setMode("Question");
  }, [currentCourse?.id]);

  function handleShowAnswer() {
    setMode("Answer");
  }

  function handleShowQuestion(sIndex: number) {
    if (sIndex >= currentCourse!.statements.length - 1) {
      setMode("Summary");
      return;
    }

    setMode("Question");
  }

  const viewMap = {
    Summary: <Summary></Summary>,
    Question: <Question onShowAnswer={handleShowAnswer}></Question>,
    Answer: <Answer onShowQuestion={handleShowQuestion}></Answer>,
  };

  const CurrentView = viewMap[mode];

  return (
    <div className="h-full flex justify-center items-center relative">
      <div>{CurrentView}</div>
      <div className="absolute bottom-10 mb-10 w-full flex flex-col items-center">
        <CourseProgress></CourseProgress>
        <Tips onShowAnswer={handleShowAnswer}></Tips>
      </div>
    </div>
  );
}
