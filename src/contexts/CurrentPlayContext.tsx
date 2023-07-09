import React, { createContext, useState } from "react";

interface PageProviderProps {
  children: React.ReactNode;
}

interface Music {
  title: string;
  img: String;
  audio: String;
}

interface CurrentPlayContextType {
  CurrentMusic: Music;
  PlayCurrentMusic: (music: Music) => void;
}

export const CurrentPlayContext = createContext<CurrentPlayContextType>({
  CurrentMusic: {
    title: "",
    img: "",
    audio: ""
  },
  PlayCurrentMusic: () => {},
});

export const CurrentPlayProvider = ({ children }: PageProviderProps) => {
  const [CurrentMusic, setCurrentMusic] = useState<Music>({
    title: "",
    img: "",
    audio: ""
  });

  const PlayCurrentMusic = (music: Music) => {
    setCurrentMusic(music);
  };

  return (
    <CurrentPlayContext.Provider value={{ CurrentMusic, PlayCurrentMusic }}>
      {children}
    </CurrentPlayContext.Provider>
  );
};