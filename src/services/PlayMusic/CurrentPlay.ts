import { useState } from "react";

const UseCurrentPlay = (props: String) => {

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioPlaying, setAudioPlaying] = useState<HTMLAudioElement | null>(
    null
  );
  
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const PlayMusic = () => {
    if (audioPlaying) {
      audioPlaying.play();
    } else {
      const audio = new Audio("midia/audio/"+props);
      setAudioPlaying(audio);

      audio.addEventListener("loadedmetadata", () => {
        const duration = audio.duration;
        setDuration(duration);

        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        console.log(
          "Duração: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
        );

        audio.play();
      });
    }

    setIsPlaying(true);
  };

  const PauseMusic = () => {
    if (audioPlaying) audioPlaying.pause();
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressWidth = (currentTime / duration) * 100;

  return {
    setIsPlaying,
    setCurrentTime,
    handleAudioEnd,
    PauseMusic,
    formatTime,
    PlayMusic,
    audioPlaying,
    isPlaying,
    progressWidth,
    currentTime,
    duration,
  };
};

export default UseCurrentPlay;