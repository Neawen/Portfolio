import { useState } from "react";
import "./Form.scss";
import emailjs from "emailjs-com";

const Form = () => {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (
      !formData.get("name") ||
      !formData.get("firstname") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      setFormStatus("Merci de remplir tous les champs.");
      return;
    }

    emailjs
      .sendForm(
        "service_portfolio",
        "template_18teulf",
        e.target,
        "-a2Rsqph9FcEDtEZO"
      )
      .then(() => {
        setFormStatus("Message envoyé avec succès !");
        e.target.reset();
      })
      .catch((error) => {
        console.error(`Erreur lors de l'envoi de l'email`, error);
        setFormStatus(`Erreur lors de l'envoi, veuillez réessayez.`);
      });
  }

  return (
    <section className="form-section" id="contact">
      <h2 className="form-section__title">Contactez-moi</h2>
      <div className="form-section__container">
        <div className="text">
          <p>Une idée de projet en tête ou pour toute autre information</p>
          <i className="fa-solid fa-turn-down"></i>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__container-name">
            <label>
              Nom
              <input type="text" name="name" required />
            </label>
            <label>
              Prénom
              <input type="text" name="firstname" required />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" required />
          </label>
          <div className="container-button">
            <button type="submit">Envoyer</button>
          </div>
          <p className="status">{formStatus}</p>
        </form>
      </div>
    </section>
  );
};

export default Form;
