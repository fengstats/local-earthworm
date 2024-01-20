import { useCourse } from "@/store/course";
import { useAudio } from "react-use";

export function usePlaySound() {
  const { currentStatement } = useCourse();
  const content = currentStatement?.english || "";
  const [audio, _state, controls, _ref] = useAudio({
    src: `https://dict.youdao.com/dictvoice?audio=${content}&type=1`,
    autoPlay: false,
  });

  return {
    audio,
    playSound: () => controls.play(),
  };
}
