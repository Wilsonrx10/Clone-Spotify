import MadeForMe from "../Home/MadeForMe";
import PlayListRandom from "../Home/PlayListRandom";

const Container = () => {
  return (
    <>
      <h1 className="font-bold text-3xl mt-10">Good Night</h1>

      <div>
        <PlayListRandom />
      </div>

      <h2 className="font-bold text-2xl mt-10">Made for Wilson Manuel</h2>

      <div className="mb-3">
        <MadeForMe />
      </div>
    </>
  );
};

export default Container;
