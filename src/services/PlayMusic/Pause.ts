const UsePause = (audioPlaying:HTMLAudioElement | null ,setIsPlaying: (value: boolean) => void) => {
  const PauseMusic = () => {
    if (audioPlaying) audioPlaying.pause();
    setIsPlaying(false);
  };
  return {PauseMusic}
};

export default UsePause;