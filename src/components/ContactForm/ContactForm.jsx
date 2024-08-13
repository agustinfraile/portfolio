import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from './ContactFormValidation';
import './ContactForm.css';


const ContactForm = () => {

    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    email: '',
                    mensaje: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('Formulario enviado:', values);
                }}
            >

                {() => (
                    <Form 
                        className="contact-form"
                    >
                        <div className='contact-form-input'>
                            <label 
                                htmlFor="nombre"
                            >
                                Nombre
                            </label>
                            <Field 
                                className="contact-form-input-field"
                                name="nombre" 
                                type="text" 
                            />
                            <ErrorMessage
                                className='contact-form-error' 
                                name="nombre" component="div" 
                            />
                        </div>
                        <div className='contact-form-input'>
                            <label 
                                htmlFor="apellido"
                            >
                                Apellido
                            </label>
                            <Field 
                                className="contact-form-input-field"
                                name="apellido" 
                                type="text" 
                            />
                            <ErrorMessage
                                className='contact-form-error' 
                                name="apellido" component="div" 
                            />
                        </div>
                        <div className='contact-form-input'>
                            <label 
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <Field 
                                className="contact-form-input-field"
                                name="email" 
                                type="email" 
                            />
                            <ErrorMessage
                                className='contact-form-error' 
                                name="email"
                                component="div" 
                            />
                        </div>
                        <div 
                            className='contact-form-textarea'
                        >
                            <label 
                                htmlFor="mensaje"
                            >
                                Mensaje
                            </label>
                            <Field 
                                name="mensaje" 
                                as="textarea"
                                className="contact-form-textarea-field" 
                            />
                            <ErrorMessage
                                className='contact-form-error' 
                                name="mensaje" component="div" 
                            />
                        </div>
                        <button
                            type="submit"
                            className='contact-form-button'
                        >
                            Enviar
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ContactForm