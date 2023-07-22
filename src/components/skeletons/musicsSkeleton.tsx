const MusicsSkeleton = () => {
  return (
    <>
      <ul className="mt-2 h-80 max-h-80 overflow-y-auto p-6">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className="flex items-center gap-4 w-full justify-between animate-pulse"
          >
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-3">
                <div className="h-6 w-40 bg-gray-300"></div>
                <div className="h-4 w-60 bg-gray-300"></div>
              </div>
            </div>
            <div className="h-3 w-16 bg-gray-300 rounded"></div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MusicsSkeleton;