// import SpotifyPlayer from 'react-spotify-web-playback';
import { Play } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";

const Musics = ({ albumDetails }) => {
  
  interface Track {
    id: string;
    name: string;
    preview_url: string;
    uri: string;
  }

  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  function Skellet() {
    return (
      <div className="glimmer-panel">
        <div className="glimmer-line" />
        <div className="glimmer-line" />
        <div className="glimmer-line" />
      </div>
    );
  }

  const handleTrackClick = (track: Track) => {
    setCurrentTrack(track);
  };

  function formatDuration(durationMs: number) {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <>
      {albumDetails && albumDetails.tracks ? (
        <div className="mt-4">
          <hr />
          <ul className="mt-2 h-80 max-h-80 overflow-y-auto p-6">
            {albumDetails.tracks.items.map((track: any) => (
              <li
                key={track.id}
                className="flex items-center gap-4 w-full justify-between"
              >
                <div className="flex items-center gap-6">
                  <Play
                    onClick={() => handleTrackClick(track)}
                    size={20}
                    fill="bg-white/20"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">{track.name}</h3>
                    <a
                      href={track.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        track.artists.map((artist:any,idx:any)=>(
                            <span key={idx}>{artist.name} </span>
                        ))
                      }
                    </a>
                  </div>
                </div>

                <div className="text-xl font-semibold">
                  {formatDuration(track.duration_ms)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Skellet />
      )}
      {currentTrack && (
        <ReactPlayer
          controls
          playing
          width="80%"
          height="30px"
          url={currentTrack.preview_url}
        />
        // <SpotifyPlayer
        //   token="BQAze8EUzBTjhd_FqEZXSWAb-wa_85842D46v6HUWdVdXyQr1LfbjYXf9h92p_BENZneUvt4PS4AKtz09TdvalejLiRLWnB4pJFQ4MzzRONCpEgKOcw"
        //   uris={[currentTrack.preview_url]}
        // />
      )}
    </>
  );
};

export default Musics;
