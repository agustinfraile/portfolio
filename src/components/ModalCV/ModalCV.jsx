import "./ModalCV.css";

const ModalCV = ({ show, onClose, pdf }) => {

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button 
                    className="modal-close" 
                    onClick={onClose}
                >
                    X
                </button>
                {pdf}
            </div>
        </div>
    )
}

export default ModalCV