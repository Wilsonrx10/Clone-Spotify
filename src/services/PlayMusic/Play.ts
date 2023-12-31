import {useState} from 'react'

const UsePlay = (audioPlaying:HTMLAudioElement | null,props:String,
    setIsPlaying: (value: boolean) => void,
    setAudioPlaying: (value:HTMLAudioElement | null) => void
) => {

 const [duration, setDuration] = useState<number>(0);

  const PlayMusic = (instance:Boolean = false) => {
    if (audioPlaying && !instance) {      
      audioPlaying.play();
    } else {
      const audio = new Audio("midia/audio/" + props);
      setAudioPlaying(audio);

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
        audio.play();
      });
    }

    setIsPlaying(true);
  };
  return {PlayMusic,duration}
};

export default UsePlay;