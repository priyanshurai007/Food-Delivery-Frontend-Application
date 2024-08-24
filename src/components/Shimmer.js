
const Shimmer = () => {
    const shimmerStyles = {
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))',
      animation: 'shimmer 1.5s infinite'
    };
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <style>
          {`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}
        </style>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="w-full h-64 bg-gray-300 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full" style={shimmerStyles}></div>
            <div className="p-4">
              <div className="w-full h-32 bg-gray-300 rounded-lg mb-4"></div>
              <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
              <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;