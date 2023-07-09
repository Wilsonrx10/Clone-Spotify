import { useEffect, useState } from "react";
import axios from "axios"

const MadeForMe = () => {
    interface Musica {
        img:String,
        title:String
    }
    const [playlist,setPlaylist] = useState<Musica[]>([]);

    useEffect(()=>{
        getPlayListMadeForMe();
    },[])


    const getPlayListMadeForMe = async () => {
        await axios.get('Api/playlist.json').then((response)=>{
            setPlaylist(response.data.MadeForMe)
        }).catch((error)=>{
            console.log(error);
        })
    }
 return (
    <div className="grid grid-cols-6 gap-2 mt-4">
       {
        playlist.map((item, idx) => (
            <a
                href="#"
                key={idx}
                className="bg-white/5 p-2 rounded flex flex-col gap-2"
                >
                <div>
                    {/* <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 nvisible group-hover:visible"/> */}
                    <img className="w-full rounded" src={`image/albuns/` + item.img}/>
                </div>
                <strong>{item.title}</strong>
                <span className="text-xs text-zinc-500">a melhor playlist feito nos ano 90</span>
               
            </a>
        ))
       }
    </div>
 )
}

export default MadeForMe