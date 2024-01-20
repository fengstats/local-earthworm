import { fetchSaveUserProgress } from "@/actions/userProgress";
import { usePlaySound } from "../_hooks/playSound";
import { useCourse } from "@/store/course";
import { useEffect } from "react";

export function Answer() {
  const { currentStatement, toNextStatement, currentCourse } = useCourse();
  const { english: word = "", soundmark = "" } = currentStatement || {};
  const { playSound, audio } = usePlaySound();

  console.log("Answer render");

  async function handleToNextStatement() {
    const nextStatementIndex = toNextStatement();
    const cId = currentCourse?.id!;
    await fetchSaveUserProgress({
      courseId: cId,
      statementIndex: nextStatementIndex,
    });
  }

  // NOTE: 每次进入页面时自动发音
  useEffect(() => {
    playSound();
  }, []);

  // NOTE: 事件绑定在 Tip 中已经完成了
  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "Enter") {
  //       handleToNextStatement();
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  {
    /* <svg
          className="w-7 h-7 inline-block ml-1 cursor-pointer"
          onClick={() => {}}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M342.4 384H128v256h214.4L576 826.8V197.2L342.4 384zM64 320h256L640 64v896L320 704H64V320z m640 256h256v-64H704v64z m16.8 159.5l181 181 45.3-45.3-181-181-45.3 45.3z m33.9-343.9l181-181-45.3-45.3-181 181 45.3 45.3z"
            fill="#666666"
          ></path>
        </svg>{" "} */
  }

  return (
    <div className="text-center mb-[4rem]" style={{ fontFamily: "Maple Mono SC NF Freeze" }}>
      <div
        className="
          text-5xl
          text-fuchsia-500
          dark:text-gray-50
          transition-all
        "
        // NOTE: 缩小单词之前的间距
        style={{ wordSpacing: "-0.2em" }}
      >
        {word}
      </div>
      <div className="my-[28px] text-xl text-gray-500" style={{ fontFamily: "Arial" }}>
        {soundmark}
      </div>
      <button
        className="
          py-[2px]
          px-[12px]
          text-2xl
          text-gray-100
          bg-gray-500
          hover:text-gray-500
          hover:bg-gray-100
          dark:bg-fuchsia-500
          dark:hover:text-black
          rounded
          shadow-lg
          transition-all
        "
        onClick={() => handleToNextStatement()}
      >
        next
      </button>
      {audio}
    </div>
  );
}
