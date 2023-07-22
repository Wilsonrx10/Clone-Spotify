import axios from "axios";
import { useEffect, useState } from "react";
import Capa from "../components/album/capa";
import { useParams } from "react-router";
import Musics from "../components/album/musics";
import CapaSkeleton from "../components/skeletons/capaSkeleton";
import MusicsSkeleton from "../components/skeletons/musicsSkeleton";

const Album = () => {
  const { id } = useParams();

  const [albumDetails, setAlbumDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("token_acess_spotify_api");
        if (storedToken && storedToken != null) {
          const token = JSON.parse(storedToken).value;
          const response = await axios.get(
            `https://api.spotify.com/v1/albums/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setAlbumDetails(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="h-full w-full">
      {isLoading ? (
        <div>
          <CapaSkeleton />
          <MusicsSkeleton/>
        </div>
      ) : (
        <>
          <Capa albumDetails={albumDetails} />
          <Musics albumDetails={albumDetails} />
        </>
      )}
    </div>
  );
};

export default Album;