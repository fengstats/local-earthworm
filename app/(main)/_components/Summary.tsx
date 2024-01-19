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
    // bg-slate-100
    <div className="h-50 bg-white shadow-lg text-center flex flex-col pt-[36px] pb-[18px] rounded-[8px] mt-[-100px]">
      <h3 className="font-bold text-[20px]">恭喜你 <span className="text-fuchsia-500">小小石</span> 完成{currentCourse?.title || '本节课'}啦 🎉</h3>
      <div className="px-5 py-10">
        不错不错，又学到了这么多单词和句子，加油！坚持就是胜利 😊
      </div>
      <div className="w-1/3 justify-items-center bg-fuchsia-500 rounded m-auto mb-8 p-[6px] text-white cursor-pointer">
        <Link className="pl-[0.8em]" href={`/?courseId=${cId}`}>
          要不再刷一课？
        </Link>
      </div>
    </div>
  );
}
