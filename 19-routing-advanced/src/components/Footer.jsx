const Footer = () => {
  return (
    <footer className=" absolute bottom-0 left-0 right-0 border-t border-footer-border bg-footer-bg py-8">
      <div className="mx-auto max-w-300 px-6">
        <p className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Sherdil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
