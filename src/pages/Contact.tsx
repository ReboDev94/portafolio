import { ChangeEvent, FormEvent, useState } from "react";
import Buttom from "../ui/components/Button";

const initData = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [formContact, setFormContact] = useState(initData);
  const { name, email, message } = formContact;

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormContact({ ...formContact, [name]: value });
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    console.log("hola");
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-5rem)] py-12">
      <h1 className="text-r-primary font-extrabold text-3xl mb-5">
        Contactame
      </h1>
      <p className="text-r-white font-medium text-lg">
        Creemos cosas nuevas, trabajemos juntos.
      </p>
      <div className="mt-5 flex flex-wrap -mx-2">
        <div className="w-1/2 px-2">
          <form onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              required
              value={name}
              onChange={(e) => onInputChange(e)}
              type="text"
              name="name"
              placeholder="Nombre"
              className="block w-full rounded-md shadow-sm border border-solid border-r-primary focus:border-r-primary focus:ring-offset-0  focus:ring-r-primary disabled:cursor-not-allowed bg-r-dark"
            />
            <input
              required
              value={email}
              onChange={(e) => onInputChange(e)}
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="block w-full rounded-md shadow-sm border border-solid border-r-primary focus:border-r-primary focus:ring-offset-0  focus:ring-r-primary disabled:cursor-not-allowed bg-r-dark"
            />
            <textarea
              required
              value={message}
              onChange={(e) => onInputChange(e)}
              name="message"
              placeholder="Escribeme un mensaje"
              rows={4}
              className="block w-full rounded-md shadow-sm border border-solid border-r-primary focus:border-r-primary focus:ring-offset-0  focus:ring-r-primary disabled:cursor-not-allowed bg-r-dark"
            />
            <div className="flex justify-end">
              <Buttom type="submit">Enviar</Buttom>
            </div>
          </form>
        </div>
        <div className="w-1/2 px-2 grid place-content-center">
          <img
            src="/assets/svg/contactme.svg"
            alt="contactame"
            className="h-80 w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
