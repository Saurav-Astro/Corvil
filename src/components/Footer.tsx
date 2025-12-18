import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link to="/" className="font-heading text-lg tracking-widest text-foreground">
            COREVEIL
          </Link>
          <p className="text-muted-foreground">Coreveil: Building, Automating, and Scaling.</p>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm uppercase text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/services" className="text-sm uppercase text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link to="/about" className="text-sm uppercase text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm uppercase text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
          <span className="text-xs text-muted-foreground">
            © 2024 Coreveil. All Rights Reserved. | Privacy Policy | Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
