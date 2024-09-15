import React from 'react';
import AOS from 'aos';

import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.css';

const Contact = () => {

  return (
    <div className='section-contact'>
      <div className='section-contact-container_title'>
        <h3>
          Contacto
        </h3>
      </div>

      <div className='section-about-container_form'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact