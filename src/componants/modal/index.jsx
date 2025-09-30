import "../../styles/scss/modal/style.scss"

function Modal({isOpen, onClose}) {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-email">
                    <p>email:</p>
                    <a href="mailto:antoine.dehandartial@gmail.com"><FontAwesomeIcon icon={byPrefixAndName.fas['envelope']} />antoine.dehandartial@gmail.com</a>
                </div>
                <div className="modal-tel">
                    <p>téléphone:</p>
                    <p>voir sur mon CV</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;