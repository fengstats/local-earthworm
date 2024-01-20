import { fetchNextCourseId } from "@/actions/course";
import { useCourse } from "@/store/course";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Summary() {
  const [cId, setCId] = useState(0);
  const { currentCourse } = useCourse();

  useEffect(() => {
    (async function () {
      const cId = await fetchNextCourseId(currentCourse!.id);
      if (cId) {
        setCId(cId);
      }
    })();
  });

  return (
    <div
      // NOTE: 固定宽度可以解决打卡分享时中间内容换行问题
      className="
        w-[540px]
        mb-[100px]
        m-auto
        p-[32px]
        pb-[48px]
        rounded-[8px]
        bg-white
        shadow-lg
        text-center
        dark:bg-slate-800
        "
    >
      <h3 className="pl-[0.5em] text-[22px] font-bold">
        <span className="text-fuchsia-500">小小石</span>, 恭喜你完成了{currentCourse?.title || "本节课"} 🎉
      </h3>
      <div className="py-12">不错不错, 又学到了这么多单词和句子, 加油! 坚持就是胜利 😊</div>
      <div
        className="
          w-1/3
          m-auto
          p-[6px]
          rounded
          text-white
          bg-fuchsia-500
          cursor-pointer 
          hover:bg-fuchsia-400"
      >
        <Link className="pl-[0.2em]" href={`/?courseId=${cId}`}>
          要不再刷一课?
        </Link>
      </div>
    </div>
  );
}
