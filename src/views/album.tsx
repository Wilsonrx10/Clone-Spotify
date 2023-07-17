import axios from "axios";
import { useEffect, useState } from "react";
import Capa from "../components/album/capa";
import { useParams } from "react-router";
import Musics from "../components/album/musics";

const Album = () => {

  const {id} = useParams();

  const [albumDetails, setAlbumDetails] = useState<any>(null);


  useEffect(() => {
    const getAlbumDetails = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/albums/'+id, {
          headers: {
            Authorization: 'Bearer BQDC42mudCMoziWY2gPs1gLsszns1lMEk0O2HvxY9izDQmChR_UkXya8SGWnXJUxJ6xTJaDmfpyj7k5Dvq60kPUludvxbMKukvLPBrpLG5ksTFbDnFI',
          },
        });

        setAlbumDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAlbumDetails();
  }, []);

  return (
    <div className="h-full w-full">
        <Capa albumDetails={albumDetails} />
        <Musics albumDetails={albumDetails}/>
    </div>
  );
};

export default Album;