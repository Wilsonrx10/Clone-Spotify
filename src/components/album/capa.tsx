
const Capa = ({ albumDetails }) => {
  
  return (
    <>
        {albumDetails && (
          <div className="w-full h-40 bg-white/5 flex gap-4 rounded items-center overflow-hidden">
            <img src={albumDetails.images[1].url} alt="" />
            <h1 className="font-bold text-3xl item-center justify-center">
              {albumDetails.name}
            </h1>
          </div>
        )}
    </>
  );
};

export default Capa;