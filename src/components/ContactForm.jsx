import { useForm } from '../hooks/useForm';

const initialForm = {
    name: "",
    email: "",
    comment: ""
};  


const validateForm = (form) => {
    let errors = {};
    let regexName = /^[\wÑñÁáÉéÍíÓóÚú\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComment = /^.{1, 100}$/;

    if (!form.name.trim()) {
        errors.name = "el nombre es requerido";
    } else if(!regexName.test(form.name.trim())) {
        errors.name = "el nombre solo debe contener letras y espacios en blanco";
    }

    if (!form.email.trim()) {
        errors.email = "el email es requerido";
    } else if(!regexEmail.test(form.email.trim())) {
        errors.email = "debes introducir un email correcto";
    }

    if (!form.comment.trim()) {
        errors.comment = "el mensaje es requerido";
    } else if(!regexComment.test(form.comment.trim())) {
        errors.email = "su mensaje debe tener menos de 100 caracteres";
    }

    return errors;
};

const ContactForm = () => {
    const {
        form, error, loading, response, handleSubmit,
        handleChange, handleBlur 
    } = useForm(initialForm, validateForm);
    
    return (
        <>
         <form onSubmit={handleSubmit} className="form">
            <input type="text" name="name" 
            value={form.name} 
            placeholder="Su nombre o empresa" 
            onChange={handleChange} 
            onBlur={handleBlur}
            required />
            {error.name && <p className="form-error-message">{error.name}</p>}
            <input type="email" name="email"
            value={form.email}
            placeholder="Su email"
            onChange={handleChange} 
            onBlur={handleBlur}
            required
            />
            {error.email && <p className="form-error-message">{error.email}</p>}
            <textarea name="comment" cols="50" rows="5"
            placeholder="Escriba su mensaje"
            value={form.comment}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            ></textarea>
            {error.comment && <p className="form-error-message">{error.comment}</p>}
            <input type="submit" value="Enviar"/>
        </form> 
        </>
    )
}

export default ContactForm;