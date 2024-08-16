import './CardProject.css';

import imageProjectOne from '../../assets/images/icons/formacion-logos/udemy.png';

const CardProject = () => {
    return (
        <div className='card_project'>
            <div className='card_project-container'>
                <div
                    className='card_project-container_image'
                >
                    {/* <img src={imageProjectOne} alt='Imagen del proyecto' /> */}
                    <div
                        className='card_project-container_image_gif'
                    >
                        <iframe src="https://giphy.com/embed/VkamTLhc9HkiclBRma" width="400" height="480" class="giphy-embed" ></iframe>
                    </div>
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