import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-6 bg-background/60 backdrop-blur-md border-t border-border/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 text-left">
          <div className="space-y-1">
            <Link to="/" className="font-heading text-base tracking-widest text-foreground">
              COREVEIL
            </Link>
            <p className="text-xs text-muted-foreground">Building, Automating, and Scaling.</p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <nav className="flex items-center gap-4">
              <Link to="/" className="text-xs uppercase text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/services" className="text-xs uppercase text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link to="/about" className="text-xs uppercase text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-xs uppercase text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
            <span className="text-[11px] text-muted-foreground">
              © 2024 Coreveil. All Rights Reserved. | Privacy Policy | Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
