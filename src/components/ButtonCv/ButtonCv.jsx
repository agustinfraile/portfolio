import { useState } from 'react';
import CV from '../../assets/pdf/CV_FullStack_Fraile-Agustin.pdf';


import './ButtonCv.css';
import ModalCV from '../ModalCV/ModalCV';

const ButtonCv = () => {

    const [showModal, setShowModal] = useState(false);


    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = CV;
        link.download = CV;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    return (
        <>
            <button
                className='buttonCV_container'
                onClick={handleShowModal}
            >
                Mira mi CV
            </button>

            <ModalCV
                show={showModal}
                onClose={handleCloseModal}
                pdf={CV}
            >
                <iframe src={CV} title="CV" width="100%" height="500px"></iframe>
            </ModalCV>
        </>
    )
}

export default ButtonCv