import { FiUser } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import './SignIn.css';
import { useFormik } from 'formik';
import Input from '../components/Input';
import * as yup from 'yup';

function SignIn() {
    const validationSchema = yup.object({
        email: yup
            .string('Enter email')
            .email('Enter valid email')
            .required('Required'),
        password: yup
            .string('Enter password')
            .min(8, 'Password minimum 8 length')
            .required('Required')
            .matches(/(\D\d|\d\D)+/g, 'Must have numbers and characters'),
    });

    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        dirty,
        isValid,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(true);
            actions.resetForm({
                values: {
                    email: '',
                    password: '',
                },
            });
        },
    });

    return (
        <form className={'signIn'} onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <Input
                type={'email'}
                placeholder={'Username'}
                onChange={handleChange}
                value={values.email}
                Icon={FiUser}
                errors={errors.email}
                touched={touched.email}
                onBlur={handleBlur}
            />
            <Input
                type={'password'}
                placeholder={'Password'}
                onChange={handleChange}
                value={values.password}
                Icon={RiLockPasswordLine}
                errors={errors.password}
                touched={touched.password}
                onBlur={handleBlur}
            />
            <button
                className={'signIn-button'}
                type={'submit'}
                disabled={!dirty || !isValid}
            >
                Sign in
            </button>
        </form>
    );
}

export default SignIn;
