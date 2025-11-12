const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1,2,3,4,5,6,7].map((i) => (
        <div key={i} className="animate-pulse bg-gray-200 h-44 rounded-md"></div>
      ))}
    </div>
  );
};

export default Shimmer;
