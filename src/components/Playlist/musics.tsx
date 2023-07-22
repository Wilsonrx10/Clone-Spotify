import { Play } from "lucide-react";

const Musics = ({ data }) => {

  function handleTrackClick () {}

  return (
    <>
      {data?.playlist && (
        <div className="mt-4">
          <ul className="mt-2 h-80 max-h-80 overflow-y-auto p-6">
            {data.playlist.map((track: any,idx:number) => (
              <li
                key={idx}
                className="flex items-center gap-4 mb-3 w-full justify-between"
              >
                <div className="flex items-center gap-6">
                  <Play
                    onClick={() => handleTrackClick()}
                    size={20}
                    fill="bg-white/20"
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">{track.title}</h3>
                  </div>
                </div>

                <div className="text-xl font-semibold">
                  {track.duration}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) }
    </>
  );
};
 
export default Musics;
