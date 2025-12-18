import heroBg from '@/assets/hero-bg.jpg';

const GlobalCoverBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <img src={heroBg} alt="Site cover background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/45" />
    </div>
  );
};

export default GlobalCoverBackground;
