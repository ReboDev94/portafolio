import { Link } from "react-scroll";
import Buttom from "../ui/components/Button";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-10 md:pt-0 min-h-[calc(100vh-5rem)] flex flex-col md:flex-row"
    >
      <div className="order-2 md:order-1 w-full md:w-4/6 flex flex-nowrap flex-col-reverse md:flex-row gap-10 md:gap-5 mt-5 text-center md:text-left">
        <div className="flex flex-row md:flex-col items-center justify-center gap-5 w-full md:w-14 h-full">
          <a
            href="https://github.com/ReboDev94"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <img
              src="/assets/svg/github.svg"
              className="h-7 w-7"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-de-jesus-rebolledo-hern%C3%A1ndez-rebodev/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <img
              src="/assets/svg/linkedin.svg"
              className="h-7 w-7"
              alt="linkedin"
            />
          </a>

          <a
            href="https://www.facebook.com/rebolledohernandez/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <img
              src="/assets/svg/facebook.svg"
              className="h-7 w-7"
              alt="facebook"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=7471333871"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <img src="/assets/svg/phone.svg" className="h-7 w-7" alt="phone" />
          </a>
          <a href="mailto:rrrrebolledohdz@gmail.com">
            <img src="/assets/svg/email.svg" className="h-7 w-7" alt="email" />
          </a>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5">
          <p className="text-lg font-bold text-r-primary">Hola mi nombre es</p>
          <span className="text-3xl md:text-5xl text-r-white font-extrabold">
            <p>Rafael de Jesús</p>
            <p>Rebolledo Hernández</p>
          </span>
          <p className="text-lg font-bold text-r-white">Full Stack Developer</p>
          <div className="flex gap-2 justify-center md:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Buttom>Contactame</Buttom>
            </Link>
            <a href="/assets/pdf/cv.pdf" download="cv.pdf">
              <Buttom>CV</Buttom>
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-2/6 flex items-center justify-center">
        <img
          src="/assets/img/profile.jpg"
          alt="profile"
          className="shadow-md shadow-r-primary h-40 w-40 md:w-64 md:h-64 rounded-full"
        />
      </div>
    </section>
  );
};

export default Home;
