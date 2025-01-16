import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./Form.scss";

const Form = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState("");
  // ref to interact with a dom element (form)
  const ref = useRef(null);
  // threshold > form needs to be visible at 50%
  const isInView = useInView(ref, { threshold: 0.5 });

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (
      !formData.get("name") ||
      !formData.get("firstname") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      setFormStatus(t("form.formStatus.field"));
      return;
    }

    emailjs
      .sendForm(
        // service ID
        import.meta.env.VITE_EMAILJS_SERVICE,
        // response template ID
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        e.target,
        // API key
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(() => {
        setFormStatus(t("form.formStatus.succeed"));
        e.target.reset();
      })
      .catch((error) => {
        console.error(`Erreur lors de l'envoi du message`, error);
        setFormStatus(t("form.formStatus.error"));
      });
  }

  return (
    <section className="form-section" id="contact">
      <h2 className="form-section__title">{t("form.title")}</h2>
      <motion.div
        className="form-section__container"
        ref={ref}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={
          isInView && {
            opacity: 1,
            scale: 1,
          }
        }
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="text">
          <p>{t("form.paragraph")}</p>
          <i className="fa-solid fa-turn-down"></i>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__container-name">
            <label>
              {t("form.name")}
              <input type="text" name="name" required />
            </label>
            <label>
              {t("form.firstname")}
              <input type="text" name="firstname" required />
            </label>
          </div>
          <label>
            {t("form.email")}
            <input type="email" name="email" required />
          </label>
          <label>
            {t("form.message")}
            <textarea name="message" required />
          </label>
          <div className="container-button">
            <button type="submit">{t("form.submit")}</button>
          </div>
          <p className="status">{formStatus}</p>
        </form>
      </motion.div>
    </section>
  );
};

export default Form;
