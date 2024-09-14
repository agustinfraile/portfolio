import webHoneneyGif from '../../assets/images/gifs/web_honey.gif';
import gameDiseaseGif from '../../assets/images/gifs/thegamedisease.gif';
import calmEcommerceGif from '../../assets/images/gifs/calm.gif';
import huellitasGif from '../../assets/images/gifs/huellitas.gif';

export const projectData = [
    {
        title: 'Huellitas',
        description: 'Portal en linea para adopción responsable de mascotas y apoyo a organizaciones que colaboran con el rescate y cuidado de animales domésticos.',
        tech: ['React', 'Node.js', 'PostegreSQL'],
        imageUrl: `${huellitasGif}`,
        link: 'https://github.com/agustinfraile/Huellitas'
    },
    {
        title: 'Game Disease Web',
        description: 'Renovación y mejora de la web de la empresa Game Disease, implementando soluciones visuales y desarrollo de funcionalidades responsivas para mejorar la experiencia del usuario.',
        tech: ['JavaScript', 'CSS', 'WordPress', 'HTML', 'PHP', 'Docker', 'Metamask', 'Figma'],
        imageUrl: `${gameDiseaseGif}`, 
        link: 'https://thegamedisease.com/' 
    },
    {
        title: 'Calm E-commerce',
        description: 'Desarrollo de componentes para plataforma e-commerce para Calm, enfocada en una experiencia de usuario fluida. Implementación de un sistema de filtrado dinámico y coordinación con el back-end para la gestión de inventario.',
        tech: ['React', 'Redux', 'TypeScript', 'CSS', 'Styled Components'],
        imageUrl: `${calmEcommerceGif}`, 
        link: 'https://github.com/agustinfraile/calm-ecommerce' 
    },
    {
        title: 'Web Honey',
        description: 'Web dedicada a Honey, mi perrita. La página contiene información sobre su historia y anécdotas divertidas. También incluye fotos para que los visitantes puedan conocerla mejor y disfrutar de su dulce personalidad.',
        tech: ['HTML', 'CSS', 'Bootstrap', 'SaSS'],
        imageUrl: `${webHoneneyGif}`,
        link: 'https://github.com/agustinfraile/webhoney'
    }
];