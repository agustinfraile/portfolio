import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    nombre: Yup.string()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Solo se permiten letras y acentos')
        .required('El nombre es obligatorio'),
    apellido: Yup.string()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Solo se permiten letras y acentos')
        .required('El apellido es obligatorio'),
    email: Yup.string()
        .email('El email no es válido')
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 'Email inválido')
        .required('El email es obligatorio'),
    mensaje: Yup.string()
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+$/, 'Solo se permiten letras, números y acentos')
        .required('El mensaje es obligatorio')
});

export default validationSchema;