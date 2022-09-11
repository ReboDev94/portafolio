import { Link } from 'react-scroll';
import { useState } from 'react';
import classNames from 'classnames';

const menu: { path: string; title: string }[] = [
  {
    path: 'home',
    title: 'Inicio',
  },
  {
    path: 'about',
    title: 'Sobre mi',
  },
  { path: 'skills', title: 'Habilidades' },
  { path: 'projects', title: 'Proyectos' },
  { path: 'contact', title: 'Contacto' },
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="h-14 lg:h-20 grid content-center w-full px-5 sticky top-0 bg-r-dark">
      <div className="flex justify-between items-center">
        <button
          className="group flex flex-col gap-1 w-6 h-6 border-0 lg:hidden"
          onClick={() => setSidebar(true)}
        >
          <div className="rounded-sm bg-r-primary h-1 w-full "></div>
          <div className="rounded-sm bg-r-primary h-1 w-full "></div>
          <div className="rounded-sm bg-r-primary h-1 w-full "></div>
        </button>
        <div className="flex">
          <h1 className="text-r-primary text-xl font-extrabold lg:mr-8">
            {'<ReboDev />'}
          </h1>
          {sidebar && (
            <div
              onClick={() => setSidebar(false)}
              className="lg:hidden z-[60] fixed bg-black inset-0 opacity-20 block transition-opacity"
            ></div>
          )}
          <div
            className={classNames(
              'transition-all delay-150 lg:ml-0 w-52 flex h-screen lg:h-auto bg-r-dark lg:w-fit items-center lg:items-end gap-5 lg:gap-8 xl:gap-14 pt-24 lg:pt-0 absolute lg:relative z-[65] left-0 top-0 flex-col lg:flex-row shadow-lg lg:shadow-none shadow-r-primary text-r-white font-extrabold',
              { 'ml-0': sidebar, '-ml-60': !sidebar },
            )}
          >
            <button onClick={() => setSidebar(false)}>
              <img
                className="lg:hidden"
                src="/assets/svg/icon-x.svg"
                alt="x"
              />
            </button>
            {menu.map(({ path, title }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={() => setSidebar(false)}
                className="hover:text-r-primary cursor-pointer"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:flex gap-3 hidden">
          <img
            src="/assets/svg/cat.svg"
            className="h-7 w-7"
            alt="cat1"
          />
          <img
            src="/assets/svg/cat.svg"
            className="h-7 w-7"
            alt="cat2"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
