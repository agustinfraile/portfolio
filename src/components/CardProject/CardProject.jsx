import './CardProject.css';

import imageProjectOne from '../../assets/images/icons/formacion-logos/udemy.png';

const CardProject = () => {
    return (
        <div className='card_project'>
            <div className='card_project-container'>
                <div 
                    className='card_project-container_image'
                >
                    <img src={imageProjectOne} alt='Imagen del proyecto' />
                </div>
            </div>

            <div className='card_project-container_info'>
                <h4>Curso de React</h4>
                <p>Curso de React en Udemy</p>
            </div>
        </div>
    )
}

export default CardProject;