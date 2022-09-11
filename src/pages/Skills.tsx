const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[calc(100vh-5rem)] mt-10 lg:mt-0"
    >
      <h1 className="text-r-primary font-extrabold text-2xl lg:text-3xl">
        Mis habilidades
      </h1>
      <div className="flex flex-wrap -mx-2 gap-5 lg:gap-0 text-r-white mt-8">
        <div className="w-full lg:w-2/5 px-2">
          <h4 className="font-extrabold text-xl">
            Frontend
          </h4>
          <div className="flex flex-wrap mt-5">
            <div className="w-1/2">
              <ul className="font-semibold text-base list-disc list-inside">
                <li className="py-1">HTML</li>
                <li className="py-1">CSS</li>
                <li className="py-1">JavaScript</li>
                <li className="py-1">TypeScript</li>
                <li className="py-1">Vuejs</li>
                <li className="py-1">ReactJs</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="font-semibold text-base list-disc list-inside">
                <li className="py-1">Angular</li>
                <li className="py-1">TailwindCss</li>
                <li className="py-1">BootstrapVue</li>
                <li className="py-1">Material</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 px-2">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <h4 className="font-extrabold text-xl mb-5">
                Backend
              </h4>
              <ul className="font-semibold text-base list-disc list-inside">
                <li className="py-1">JavaScript</li>
                <li className="py-1">TypeScript</li>
                <li className="py-1">PHP</li>
                <li className="py-1">NodeJs</li>
                <li className="py-1">Laravel</li>
              </ul>
            </div>
            <div className="w-1/2">
              <h4 className="font-extrabold text-xl mb-5">
                DB
              </h4>
              <ul className="font-semibold text-base list-disc list-inside">
                <li className="py-1">MySql</li>
                <li className="py-1">PosgreSql</li>
                <li className="py-1">MongoDB</li>
                <li className="py-1">Firebase</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/5 px-2">
          <h4 className="font-extrabold text-xl">Otros</h4>
          <div className="flex flex-wrap mt-5">
            <div className="w-full">
              <ul className="font-semibold text-base list-disc list-inside">
                <li className="py-1">Git & Github</li>
                <li className="py-1">Postman</li>
                <li className="py-1">Slack</li>
                <li className="py-1">Notion</li>
                <li className="py-1">Visual studio code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-8 lg:mt-14">
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/php.svg"
          alt="php"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/js.svg"
          alt="js"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/ts.svg"
          alt="ts"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/vue.svg"
          alt="vue"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/react.svg"
          alt="react"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/angular.svg"
          alt="angular"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/node.svg"
          alt="node"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/laravel.svg"
          alt="laravel"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/mysql.svg"
          alt="mysql"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/mongo.svg"
          alt="mongo"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/git.svg"
          alt="git"
        />
        <img
          className="h-10 w-10"
          src="/assets/svg/skills/tailwind.svg"
          alt="tailwind"
        />
      </div>
    </section>
  );
};

export default Skills;
