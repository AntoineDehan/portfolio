import "../../styles/css/footer/style.css";

function Footer() {
  return (
    <footer className="footer-conteneur">
      <div className="form-contact-conteneur">
        <h2 id="contact">Contact</h2>
        <form
          action="https://formspree.io/f/mwpvqbay"
          method="POST"
          className="contact-form"
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="email-input input"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="message-input input"
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <p>
        Crée avec Vite.js, code source disponnible sur {""}
        <a href="https://github.com/AntoineDehan/portfolio">Gitub</a>.
      </p>
    </footer>
  );
}

export default Footer;
