export const DemoBanner = () => {
  return (
    <div className="fixed right-0 top-0 z-50">
      <div className="relative h-12 w-48 bg-red-500 text-center text-white shadow-lg" style={{
        transform: "rotate(45deg) translate(35px, -35px)",
        transformOrigin: "0 0",
      }}>
        <div className="flex items-center justify-center h-full">
          <span className="text-sm font-bold">デモサイト</span>
        </div>
      </div>
    </div>
  );
};
