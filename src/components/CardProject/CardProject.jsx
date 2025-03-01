import './CardProject.css';

import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CardLoading from '../CardLoading/CardLoading';

const CardProject = ({
    title = 'Proyecto Example',
    description = 'Descripción del proyecto',
    tech = [],
    imageUrl = '/placeholder.svg?height=200&width=300&text=Project',
    link = '#',
    video = false
}) => {

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    }


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
                <p className="description">{description}</p>
                {/* <div className="image-container">
                    <img
                        src={imageUrl}
                        alt={`${title} imagen`}
                        className="project-image"
                    />
                </div> */}

                <div className="card-content">

                    { loading && <CardLoading /> }


                    <LazyLoad height={200} offset={100}>
                        {video ? (
                            <video
                                className="project-image"
                                src={video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                onLoadedData={handleLoad}
                                style={loading ? { display: 'none' } : {}}
                            />
                        ) : (
                            <img src={imageUrl} alt={title} className="project-image" />
                        )}
                    </LazyLoad>



                    {/* <a 
                        href={link} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button className="btn">
                            Ver
                        </button>
                    </a> */}
                </div>
            </div>
        </motion.div>
    );
}

export default CardProject;