const MadeForMe = () => {
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