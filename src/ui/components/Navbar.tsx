import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="h-20 grid content-center w-full sticky top-0 bg-r-dark">
      <div className="flex justify-between">
        <div className="flex gap-14 text-r-white text-base font-extrabold">
          <h1 className="text-r-primary text-xl">{"<ReboDev />"}</h1>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:text-r-primary cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-r-primary cursor-pointer"
          >
            Sobre mi
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-r-primary cursor-pointer"
          >
            Habilidades
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-r-primary cursor-pointer"
          >
            Habilidades
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-r-primary cursor-pointer"
          >
            Proyectos
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-r-primary cursor-pointer"
          >
            Contacto
          </Link>
        </div>
        <div className="flex gap-3">
          <img src="/assets/svg/cat.svg" className="h-7 w-7" alt="cat1" />
          <img src="/assets/svg/cat.svg" className="h-7 w-7" alt="cat2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
