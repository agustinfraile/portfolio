import webHoneneyGif from '../../assets/images/gifs/web_honey.gif';
import gameDiseaseGif from '../../assets/images/gifs/thegamedisease.gif';
import calmEcommerceGif from '../../assets/images/gifs/calm.gif';
import huellitasGif from '../../assets/images/gifs/huellitas.gif';

import huellitasVideo from '../../assets/images/videos/huellitas.mp4';
import gameDiseaseVideo from '../../assets/images/videos/thegamedisease.mp4';
import calmEcommerceVideo from '../../assets/images/videos/calm.mp4';
import webHoneyVideo from '../../assets/images/videos/web_honey.mp4';

export const projectData = [
    {
        title: 'Huellitas',
        description: 'Portal en linea para adopción responsable de mascotas y apoyo a organizaciones que colaboran con el rescate y cuidado de animales domésticos.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        video: `${huellitasVideo}`,
        imageUrl: `${huellitasGif}`,
        link: 'https://github.com/agustinfraile/Huellitas'
    },
    {
        title: 'Game Disease Web',
        description: 'Renovación y mejora de la web de la empresa Game Disease, implementando soluciones visuales y desarrollo de funcionalidades responsivas para mejorar la experiencia del usuario.',
        tech: ['JavaScript', 'CSS', 'WordPress', 'HTML', 'PHP', 'Docker', 'Metamask', 'Figma'],
        video: `${gameDiseaseVideo}`,
        imageUrl: `${gameDiseaseGif}`, 
        link: 'https://thegamedisease.com/' 
    },
    {
        title: 'Calm E-commerce',
        description: 'Desarrollo de componentes para plataforma e-commerce para Calm, enfocada en una experiencia de usuario fluida. Implementación de un sistema de filtrado dinámico y coordinación con el back-end para la gestión de inventario.',
        tech: ['React', 'Redux', 'TypeScript', 'CSS', 'Styled Components'],
        video: `${calmEcommerceVideo}`,
        imageUrl: `${calmEcommerceGif}`, 
        link: 'https://github.com/agustinfraile/calm-ecommerce' 
    },
    {
        title: 'Web Honey',
        description: 'Web dedicada a Honey, mi perrita. La página contiene información sobre su historia y anécdotas divertidas. También incluye fotos para que los visitantes puedan conocerla mejor y disfrutar de su dulce personalidad.',
        tech: ['HTML', 'CSS', 'Bootstrap', 'SaSS'],
        video: `${webHoneyVideo}`,
        imageUrl: `${webHoneneyGif}`,
        link: 'https://github.com/agustinfraile/webhoney'
    }
];