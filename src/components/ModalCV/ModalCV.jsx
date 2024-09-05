import "./ModalCV.css";

const ModalCV = ({ show, onClose, pdf, handleDownload}) => {

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i> 
                </button>
                <iframe 
                    src={`${pdf}#zoom=100`}
                    title="CV"
                    className="modal-pdf-viewer"
                    width="100%" 
                    height="500px"
                />
                <button className="modal-download-button" onClick={handleDownload}>
                    Descargar CV
                </button>
            </div>
        </div>
    );
}

export default ModalCV