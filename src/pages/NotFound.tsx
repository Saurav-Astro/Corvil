import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black/70 px-6">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img src={heroBg} alt="Coreveil cover" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75" />
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="max-w-xl w-full text-center space-y-6 bg-black/40 border border-white/5 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
        <div className="flex items-center justify-center gap-3 text-accent font-heading text-sm tracking-[0.25em] uppercase">
          <span>Coreveil</span>
          <span className="h-px w-10 bg-accent/60" />
          <span>Error 404</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading text-foreground">Page not found</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We couldn’t find the page you’re looking for. Check the URL, or head back to the main site to continue exploring our services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm tracking-[0.15em] uppercase shadow-glow hover:bg-accent/90 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-sm tracking-[0.15em] uppercase text-foreground hover:border-white/40 hover:bg-white/5 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
