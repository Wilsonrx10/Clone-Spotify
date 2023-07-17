import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const MadeForMe = () => {
    interface Musica {
        id: number,
        img:String,
        title:String,
        playlist: object
    }
    const [playlist,setPlaylist] = useState<Musica[]>([]);

    const navigate = useNavigate();

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
    const OpenAlbum = (item: Musica) => {
        return navigate('/playlist/'+item.id)
    }
 return (
    <div className="grid grid-cols-6 gap-2 mt-4">
       {
        playlist.map((item) => (
            <a
                href="#"
                key={item.id}
                className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10"
                onClick={() => OpenAlbum(item)}
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