import axios from "axios"
import { Play } from "lucide-react"
import {useContext, useEffect, useState} from 'react'
import {CurrentPlayContext} from '../../contexts/CurrentPlayContext'

const PlayListRandom= () => {

    interface Musica {
        img: string;
        title: string;
        audio: String
    }

    const [playlist,setPlaylist] = useState<Musica[]>([]);

    const {PlayCurrentMusic} = useContext(CurrentPlayContext);

    useEffect(()=>{
        getPlayListRandom();
    },[])


    const getPlayListRandom = async () => {
        await axios.get('Api/playlist.json').then((response)=>{
            setPlaylist(response.data.random)
        }).catch((error)=>{
            console.log(error);
        })
    }

    const PlayMusic = (item: Musica) => {
        PlayCurrentMusic(item)
    }

    return (
        <div className='grid grid-cols-3 gap-3 mt-4'>
            { 
                playlist.map((item, idx) => (
                    <a
                        href="#"
                        key={idx}
                        className="bg-white/10 rounded overflow-hidden flex items-center gap-4
                            hover:bg-white/20
                            transition-colors
                            group
                            "
                    >
                        <img width={80} height={80} src={`image/albuns/` + item.img}></img>
                        <strong>{item.title}</strong>
                        <button
                            className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8
                            invisible group-hover:visible
                            "
                        >
                            <Play onClick={() => PlayMusic(item)} size={15} fill="bg-black" />
                        </button>
                    </a>
                ))
            }
        </div>
    )
}
export default PlayListRandom