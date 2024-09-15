import './Footer.css';

import iconLinkedIn from '../../assets/images/icons/linkedin-logo.png';
import iconGithub from '../../assets/images/icons/github-logo.png';
import arrowUp from '../../assets/images/icons/arrow-up.png';

const Footer = () => {

    const goUp = () => {
        window.scrollTo(0, 0)
    }


    return (
        <section className='section-footer'>
            <div className='section-footer-left'>
                <div className='section-footer-left_icons'>
                    <a href='https://www.linkedin.com/in/agustinfraile/' target='_blank'>
                        <img src={iconLinkedIn} alt='Icono LinkedIn' />
                    </a>

                    <a href="https://github.com/agustinfraile" target='_blank'>
                        <img src={iconGithub} alt='Icono Github' />
                    </a>
                </div>
            </div>

            {/* <div className='section-footer-right'>
                <div className='section-footer-left-up' onClick={goUp}>
                    <img src={arrowUp} alt='Icono Flecha arriba' />
                </div>
            </div> */}
        </section>
    )
}

export default Footer