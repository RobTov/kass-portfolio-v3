import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setError(validateForm(form));
    };

    const handleSubmit = (e) => {

    };

    return {
        form, error, loading, response, handleChange, handleBlur, handleSubmit
   }
}