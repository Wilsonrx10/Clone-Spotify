import { Suspense } from "react";

const Capa = ({ albumDetails }) => {
  function Skellet() {
    return (
      <div className="glimmer-panel">
        <div className="glimmer-line" />
        <div className="glimmer-line" />
        <div className="glimmer-line" />
      </div>
    );
  }
  return (
    <>
      <Suspense fallback={<Skellet />}>
        {albumDetails ? (
          <div className="w-full h-40 bg-white/5 flex gap-4 rounded items-center overflow-hidden">
            <img src={albumDetails.images[1].url} alt="" />
            <h1 className="font-bold text-3xl item-center justify-center">
              {albumDetails.name}
            </h1>
          </div>
        ) : (
          <Skellet />
        )}
      </Suspense>
    </>
  );
};
export default Capa;
