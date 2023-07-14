import { useState, useEffect } from 'react';

const useVolume = (audioPlaying: HTMLAudioElement | null) => {
  const [volume, setVolume] = useState<number>(1);

  useEffect(() => {
    const storage = localStorage.getItem('volume');
    if (storage) {
      const savedVolume = parseFloat(storage);
      if (savedVolume >= 0 && savedVolume <= 1) {
        setVolume(savedVolume);
        audioPlaying && (audioPlaying.volume = savedVolume);
      }
    }
  }, [audioPlaying]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    if (!isNaN(newVolume) && newVolume >= 0 && newVolume <= 1) {
      localStorage.setItem('volume', newVolume.toString());
      setVolume(newVolume);
      audioPlaying && (audioPlaying.volume = newVolume);
    }
  };

  return { handleVolumeChange, volume };
};

export default useVolume;