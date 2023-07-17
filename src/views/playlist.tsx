import axios from "axios";
import { useEffect, useState,Suspense } from "react";
import Capa from "../components/Playlist/capa";
import { useParams } from "react-router";

const Playslist = () => {
  interface Playlist {
    title: String;
    img: String;
    list: [];
  }

  const { id } = useParams();

  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [statePlaylist, setStatePlaylist] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Api/playlist.json");
      const data = response.data.MadeForMe;

      const playlistWithId = data.find((item: { id: number }) => {
        const idString = id ? id.toString() : "";
        const parsedId = parseInt(idString);
        return item.id === parsedId;
      });

      console.log(playlistWithId);

      if (playlistWithId) {
        setPlaylist(playlistWithId);
      } else {
        setStatePlaylist(true);
      }
    };

    fetchData();
  }, []);

  function Loading() {
    return <h2>Carregando...</h2>;
  }

  return (
    <>
     <Suspense fallback={<Loading/>}>
      {!statePlaylist ? (
          <Capa data={playlist} />
      ) : (
          <h1 className="font-bold text-3xl mt-10">
            Ups tenta novamente ! Playlist não encontrada
          </h1>
      )}
      </Suspense>
    </>
  );
};

export default Playslist;