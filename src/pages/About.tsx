const About = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-5rem)]">
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <h1 className="text-r-primary font-extrabold text-3xl">Sobre mi</h1>
          <div className="text-r-white font-medium text-lg flex flex-col gap-10 mt-5">
            <p>
              Soy un profesional en desarrollo web full-stack con 4 años de
              experiencia, con especialización en JS y PHP, me he distinguido
              por colaborar y dirigir proyectos de pequeña a mediana escala.
              Capacidad de trabajo en equipo, toma de decisiones, resolución de
              conflictos, adaptación a los cambios y aprendizaje constante.
            </p>
            <p>
              Me apasiona la tecnologia y lo que podemos hacer con ella,
              aportando mis conocimientos, habilidades y experiencia para crear
              cosas nuevas y maravillosas.
            </p>
            <p>
              Mis tecnologias favoritas para trabajar son VueJs, ReactJS, Node y
              Laravel todo bajo un entorno linux.
              <img
                src="/assets/svg/heart.svg"
                className="inline-block"
                alt="heart"
              />
            </p>
          </div>
        </div>
        <div className="w-1/2 grid place-content-center">
          <img src="/assets/svg/about.svg" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
