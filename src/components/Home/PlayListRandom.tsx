import { Play } from "lucide-react"

const PlayListRandom= () => {
    const playlist = [
        {
            img: 'album-01.jpg',
            title: 'Michael Jackson'
        },
        {
            img: 'album-02.jpg',
            title: 'XXTENTACION SAD'
        },
        {
            img: 'album-03.jpg',
            title: 'Michael Jackson'
        },
        {
            img: 'album-01.jpg',
            title: 'Michael Jackson'
        },
        {
            img: 'album-02.jpg',
            title: 'XXTENTACION SAD'
        },
        {
            img: 'album-03.jpg',
            title: 'Michael Jackson'
        }
    ]
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
                            <Play size={15} fill="bg-black" />
                        </button>
                    </a>
                ))
            }
        </div>
    )
}
export default PlayListRandom