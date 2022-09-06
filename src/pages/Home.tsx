import Buttom from "../ui/components/Buttom";

const Home = () => {
  return (
    <section id="home" className="h-[calc(100vh-5rem)] flex">
      <div className="w-4/6 flex flex-nowrap gap-5">
        <div className="flex flex-col items-center justify-center gap-5 w-14 h-full">
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
          <a href="mailto:rrrrebolledohdz@gmail.com">
            <img src="/assets/svg/email.svg" className="h-7 w-7" alt="email" />
          </a>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5">
          <p className="text-lg font-bold text-r-primary">Hola mi nombre es</p>
          <span className="text-5xl text-r-white font-extrabold">
            <p>Rafael de Jesús</p>
            <p>Rebolledo Hernández</p>
          </span>
          <p className="text-lg font-bold text-r-white">Full Stack Developer</p>
          <span>
            <Buttom>Contactame</Buttom>
          </span>
        </div>
      </div>
      <div className="w-2/6 flex justify-center items-center">
        <div className="flex flex-wrap justify-center">
          <div className="px-4">
            <img
              src="/assets/img/profile.jpg"
              alt="profile"
              className="shadow-md shadow-r-primary rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
