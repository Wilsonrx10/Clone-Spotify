import {useContext, useEffect } from 'react';
import { Laptop2, LayoutList, Mic2, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import UseCurrentPlay from '../../services/PlayMusic/CurrentPlay';
import {CurrentPlayContext} from '../../contexts/CurrentPlayContext'

const CurrentPlay = () => {

   const {CurrentMusic} = useContext(CurrentPlayContext);

   const {
    setCurrentTime,
    handleAudioEnd,
    setIsPlaying,
    PauseMusic,
    PlayMusic,
    formatTime,
    progressWidth,
    currentTime,
    duration,
    audioPlaying,
    isPlaying } = UseCurrentPlay(CurrentMusic.audio);

   
  useEffect(() => {
    if (audioPlaying) {
      const updateTime = setInterval(() => {
        if (audioPlaying.ended) {
          clearInterval(updateTime);
          setIsPlaying(false);
          return;
        }
        setCurrentTime(audioPlaying.currentTime);
      }, 500);

      audioPlaying.addEventListener('ended', handleAudioEnd);

      return () => {
        clearInterval(updateTime)
        audioPlaying.removeEventListener('ended', handleAudioEnd);
      }
    }
  }, [audioPlaying]);


  return (
    <>
    {
      CurrentMusic.audio != "" ?(
        <div className='flex items-center justify-between'>
        <div className="flex items-center gap-2">
          <img width={60} height={60} src={`image/albuns/`+CurrentMusic.img} />
          <div className="flex flex-col gap-1">
            <strong className="font-normal">{CurrentMusic.title}</strong>
            <span className="text-xs font-zinc-400">Clone do spotify</span>
          </div>
        </div>
  
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-5">
             <Shuffle/>
             <SkipBack/>
             <button>
              {
                isPlaying ? (
                  <Pause onClick={()=> PauseMusic()}/>
                ): (
                  <Play onClick={()=> PlayMusic()} />
                )
              }
                
             </button>
             <SkipForward/>
             <Repeat/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">{formatTime(currentTime)}</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 h-1 w-0 rounded-full" style={{ width: `${progressWidth}%` }}></div>
            </div>
            <span className="text-xs text-zinc-400">{formatTime(duration)}</span>
          </div>
        </div>
  
        <div className="flex items-center gap-4">
           <Mic2/>
           <LayoutList/>
           <Laptop2/>
           <div className="flex items-center gap-2">
              <Volume/>
              <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 h-1 w-10 rounded-full"></div>
              </div>
           </div>
        </div>
  
        </div>
      ):(
        <h1 className='flex items-center justify-center'>Nenhuma música para ser reproduzida</h1>
      )
    } 
      
    </>
  );
};

export default CurrentPlay;