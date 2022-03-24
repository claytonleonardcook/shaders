const Footer = () => {
  return (
    <footer className="bg-dark text-light p-8 grid auto-rows-min gap-4 flex-none">
      <span className="grid grid-cols-2 gap-8 font-medium">
        <ul>
            <li className="underline decoration-secondary decoration-2 underline-offset-1">Menu</li>
            <li>Home</li>
            <li>Shaders</li>
            <li>Contact</li>
        </ul>
        <ul>
            <li className="underline decoration-secondary decoration-2 underline-offset-1">Other Links</li>
            <li>GitHub</li>
        </ul>
      </span>
      <span>Copyright 2022 Clayton Leonard Cook</span>
    </footer>
  );
};

export default Footer;
