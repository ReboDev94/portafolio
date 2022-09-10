import { Link } from "react-scroll";

const menu: { path: string; title: string }[] = [
  {
    path: "home",
    title: "Inicio",
  },
  {
    path: "about",
    title: "Sobre mi",
  },
  { path: "skills", title: "Habilidades" },
  { path: "projects", title: "Proyectos" },
  { path: "contact", title: "Contacto" },
];

const Navbar = () => {
  return (
    <nav className="h-14 md:h-20 grid content-center w-full px-5 sticky top-0 bg-r-dark ">
      <div className="flex justify-between items-center">
        <button className="group flex flex-col gap-1 w-6 h-6 border-0 md:hidden">
          <div className="rounded-sm bg-r-primary h-1 w-full "></div>
          <div className="rounded-sm bg-r-primary h-1 w-full "></div>
          <div className="rounded-sm bg-r-primary h-1 w-full "></div>
        </button>
        <div className="flex">
          <h1 className="text-r-primary text-xl font-extrabold md:mr-8">
            {"<ReboDev />"}
          </h1>
          <div className="hidden md:flex gap-8 xl:gap-14 text-r-white font-extrabold">
            {menu.map(({ path, title }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="hover:text-r-primary cursor-pointer"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:flex gap-3 hidden">
          <img src="/assets/svg/cat.svg" className="h-7 w-7" alt="cat1" />
          <img src="/assets/svg/cat.svg" className="h-7 w-7" alt="cat2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
