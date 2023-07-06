import { Laptop2, LayoutList, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";

const CurrentPlay = () => {
  return (
    <>

      <div className="flex items-center gap-2">
        <img width={60} height={60} src="image/albuns/album-01.jpg" />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Michaek Jackson</strong>
          <span className="text-xs font-zinc-400">Michaek Jackson</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5">
           <Shuffle/>
           <SkipBack/>
           <button>
              <Play/>
           </button>
           <SkipForward/>
           <Repeat/>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:10</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 h-1 w-40 rounded-full"></div>
            </div>
          <span className="text-xs text-zinc-400">3:10</span>
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
      
    </>
  );
};

export default CurrentPlay;
