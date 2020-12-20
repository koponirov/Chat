import {withFormik} from 'formik'

import {RegisterForm} from '../components/RegisterForm';


export default withFormik({
    mapPropsToValues: () => ({ email: 'yytiytiytdd' }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный почтовый адрес';
        }

        if (!values.password) {
            errors.password= 'Required';
        } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g.test(values.password)) {
            errors.password = 'Слишком легкий пароль'
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);

