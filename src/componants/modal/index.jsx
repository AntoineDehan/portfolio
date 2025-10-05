import "../../styles/scss/modal/style.scss";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <section className="modal-overlay" id="contact">
      <div className="modal-body">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-email">
          <p className="modal-title">email:</p>
          <a href="mailto:antoine.dehandartial@gmail.com">
            antoine.dehandartial@gmail.com
          </a>
        </div>
        <div className="modal-tel">
          <p className="modal-title">téléphone:</p>
          <p>voir sur mon CV</p>
        </div>
      </div>
    </section>
  );
}

export default Modal;
