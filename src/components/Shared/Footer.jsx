const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10 py-6 text-center" role="contentinfo">
      <p>
        &copy; {new Date().getFullYear()} Made with <span aria-label="love" role="img">❤️</span> by Tanzia Mourin | Let's build something amazing!
      </p>
    </footer>
  );
};

export default Footer;
