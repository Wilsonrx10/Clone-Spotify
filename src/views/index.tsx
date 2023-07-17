import MadeForMe from "../components/Home/MadeForMe";
import PlayListRandom from "../components/Home/PlayListRandom";

const Home = () => {
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
export default Home;
