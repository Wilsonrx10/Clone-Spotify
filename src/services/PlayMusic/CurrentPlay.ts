import { useState,useEffect,useContext } from "react";
import UsePause from "./Pause";
import UsePlay from "./Play";
import {CurrentPlayContext} from '../../contexts/CurrentPlayContext'
import useProgressMusic from "./ProgressMusic";


const UseCurrentPlay = (props: String) => {

  const {CurrentMusic} = useContext(CurrentPlayContext);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioPlaying, setAudioPlaying] = useState<HTMLAudioElement | null>(
    null
  );

  const {PauseMusic} = UsePause(audioPlaying,setIsPlaying);
  const {PlayMusic,duration} = UsePlay(audioPlaying,props,setIsPlaying,setAudioPlaying)
  const {formatTime,progressWidth,currentTime,setCurrentTime} = useProgressMusic(duration)

  useEffect(() => {
    if (audioPlaying) {
      audioPlaying.pause();
      audioPlaying.currentTime = 0;
    }
  
    if (CurrentMusic.audio) {
      PlayMusic(true);
    }
  
  }, [CurrentMusic.audio]);
  

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

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