import axios from "axios";
import { useEffect, useState } from "react";
import Capa from "../components/Playlist/capa";
import { useParams } from "react-router";
import CapaSkeleton from "../components/skeletons/capaSkeleton";
import MusicsSkeleton from "../components/skeletons/musicsSkeleton";
import Musics from "../components/Playlist/musics";

const Playslist = () => {
  interface Playlist {
    title: String;
    img: String;
    list: [];
  }

  const { id } = useParams();

  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [statePlaylist, setStatePlaylist] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/Api/playlist.json");
        const data = response.data.MadeForMe;

        const playlistWithId = data.find((item: { id: number }) => {
          const idString = id ? id.toString() : "";
          const parsedId = parseInt(idString);
          return item.id === parsedId;
        });

        playlistWithId ? setPlaylist(playlistWithId) : setStatePlaylist(true);
        
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <CapaSkeleton />
          <MusicsSkeleton />
        </div>
      ) : (
        <>
          {!statePlaylist ? (
            <div>
              <Capa data={playlist} />
              <Musics data={playlist}/>
            </div>
          ) : (
            <h1 className="font-bold text-3xl mt-10">
              Ups tenta novamente ! Playlist não encontrada
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default Playslist;