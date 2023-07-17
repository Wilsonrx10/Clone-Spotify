interface Playlist {
  title: String;
  img: String;
  list: [];
}

interface PropsCapa {
  data: Playlist;
}

const Capa = ({ data }: PropsCapa) => {
  return (
    <>
      <div className="w-full h-40 bg-white/5 flex gap-4 rounded items-center overflow-hidden">
        <img src={`/image/albuns/` + data.img} alt="" />
        <h1 className="font-bold text-2xl item-center justify-center">
          {data.title}
        </h1>
      </div>
    </>
  );
};

export default Capa;
