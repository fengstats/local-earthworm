"use client";
import { usePlaySound } from "../_hooks/playSound";
import { useEffect } from "react";

interface Props {
  onShowAnswer: () => void;
}

export function Tips({ onShowAnswer: showAnswer }: Props) {
  const { playSound, audio } = usePlaySound();

  return (
    <div>
      {audio}
      <TipsItem playSound={playSound} showAnswer={showAnswer} />
    </div>
  );
}

function TipsItem({ playSound, showAnswer }: { playSound: () => void; showAnswer: () => void }) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Control + S
      if (event.ctrlKey && event.key === "s") {
        playSound();
      }

      if (event.key === "Tab") {
        showAnswer();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <></>;
}
