const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">
            IN<span className="text-primary text-glow">TEMS</span>TELLAR 2025
          </h3>
          <p className="text-muted-foreground">
            IEEE TEMS Sairam Chapter
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IEEE TEMS Sairam Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
