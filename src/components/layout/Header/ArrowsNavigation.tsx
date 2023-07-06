import { ChevronRight, ChevronLeft } from "lucide-react";
const ArrowsNavigation = () => {
  return (
    <div className="flex align-center gap-3">
      <button className="rounded-full bg-black/20 p-1">
        <ChevronLeft />
      </button>
      <button className="rounded-full bg-black/20 p-1">
        <ChevronRight />
      </button>
    </div>
  );
};
export default ArrowsNavigation;
