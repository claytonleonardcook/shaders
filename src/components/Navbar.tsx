import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="Home bg-dark text-light p-4 h-14 flex flex-row">
      <a href={"/"} className="flex flex-row gap-1 text-primary text-lg font-bold">
        <FontAwesomeIcon icon={faCameraRetro}/>
        <h1 className="h-min inline-block self-center hover:underline">Clay's Shaders</h1>
      </a>
      <span className="flex-grow" />
      <a href="https://github.com/claytonleonardcook/shaders">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </nav>
  );
};

export default Navbar;
