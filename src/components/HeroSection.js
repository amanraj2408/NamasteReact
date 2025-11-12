
const HeroSection = () => {
  return (
    <section className="relative w-full">
      <img
        className="w-full h-56 object-cover"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png"
        alt="hero"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">Order Food Online in Bangalore</h2>
      </div>
    </section>
  );
};

export default HeroSection;
