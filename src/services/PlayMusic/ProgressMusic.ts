import { useState } from "react";
const useProgressMusic = (duration: number = 0) => {
  const [currentTime, setCurrentTime] = useState<number>(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressWidth = (currentTime / duration) * 100;

  return {formatTime,progressWidth,currentTime,setCurrentTime}
};

export default useProgressMusic;
