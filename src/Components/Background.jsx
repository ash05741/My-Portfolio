
 const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#1a365d]" />

      {/* Animated light rays */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-cyan-400/30 to-transparent transform -skew-x-12 animate-pulse" />
        <div
          className="absolute top-0 left-2/4 w-24 h-full bg-gradient-to-b from-cyan-400/20 to-transparent transform skew-x-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-0 left-3/4 w-28 h-full bg-gradient-to-b from-cyan-400/25 to-transparent transform -skew-x-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
