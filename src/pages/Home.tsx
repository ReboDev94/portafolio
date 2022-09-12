import { Link } from 'react-scroll';
import Button from '../ui/components/Button';

const contacts: {
  name: string;
  path: string;
  icon: string;
}[] = [
  {
    name: 'github',
    path: 'https://github.com/ReboDev94',
    icon: '/assets/svg/github.svg',
  },
  {
    name: 'linkedin',
    path: 'https://www.linkedin.com/in/rafael-de-jesus-rebolledo-hern%C3%A1ndez-rebodev/',
    icon: '/assets/svg/linkedin.svg',
  },
  {
    name: 'facebook',
    path: 'https://www.facebook.com/rebolledohernandez/',
    icon: '/assets/svg/facebook.svg',
  },
  {
    name: 'phone',
    path: 'https://api.whatsapp.com/send?phone=7471333871',
    icon: '/assets/svg/phone.svg',
  },
  {
    name: 'email',
    path: 'mailto:rrrrebolledohdz@gmail.com',
    icon: '/assets/svg/email.svg',
  },
];

const Home = () => {
  return (
    <section
      id="home"
      className="pt-10 lg:pt-0 min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row"
    >
      <div className="order-2 lg:order-1 w-full lg:w-4/6 flex flex-nowrap flex-col-reverse lg:flex-row gap-10 lg:gap-5 mt-5 text-center lg:text-left">
        <div className="flex flex-row lg:flex-col items-center justify-center gap-5 w-full lg:w-14 h-full">
          {contacts.map(({ name, path, icon }) => (
            <a
              key={name}
              href={path}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icon}
                className="h-7 w-7"
                alt={name}
              />
            </a>
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5">
          <p className="text-lg font-bold text-r-primary">
            Hola mi nombre es
          </p>
          <span className="text-3xl lg:text-5xl text-r-white font-extrabold">
            <p>Rafael de Jesús</p>
            <p>Rebolledo Hernández</p>
          </span>
          <p className="text-lg font-bold text-r-white">
            Full Stack Developer
          </p>
          <div className="flex gap-2 justify-center lg:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button>Contáctame</Button>
            </Link>
            <a href="/assets/pdf/cv.pdf" download="cv.pdf">
              <Button>CV</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-2/6 flex items-center justify-center">
        <img
          src="/assets/img/profile.jpg"
          alt="profile"
          className="shadow-md shadow-r-primary h-40 w-40 lg:w-64 lg:h-64 rounded-full"
        />
      </div>
    </section>
  );
};

export default Home;
