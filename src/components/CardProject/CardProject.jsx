import './CardProject.css';

import { motion } from 'framer-motion';

const CardProject = ({
        title = 'Proyecto Example',
        description = 'Descripción del proyecto',
        tech = [],
        imageUrl = '/placeholder.svg?height=200&width=300&text=Project',
        link = '#'
    }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">
                        {Array.isArray(tech) && tech.length > 0 ? tech.join(', ') : 'Tecnologías no especificadas'}
                    </p>
                </div>
                <div className="card-content">
                    <p className="description">{description}</p>
                    <div className="image-container">
                        <img
                            src={imageUrl}
                            alt={`${title} imagen`}
                            className="project-image"
                        />
                    </div>

                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button className="btn">
                            Ver Repositorio
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default CardProject;