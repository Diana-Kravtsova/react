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

    const formik = useFormik({
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
        <form className={'signIn'} onSubmit={formik.handleSubmit}>
            <h2>Sign in</h2>
            <Input
                id={'email'}
                type={'email'}
                placeholder={'Username'}
                onChange={formik.handleChange}
                value={formik.values.email}
                icon={<FiUser className={'icon'} />}
                error={formik.errors.email}
                isValid={formik.errors.email}
            />
            <Input
                id={'password'}
                type={'password'}
                placeholder={'Password'}
                onChange={formik.handleChange}
                value={formik.values.password}
                icon={<RiLockPasswordLine className={'icon'} />}
                error={formik.errors.password}
                isValid={formik.errors.password}
            />
            <button
                className={'signIn-button'}
                type={'submit'}
                disabled={!formik.dirty || !formik.isValid}
            >
                Sign in
            </button>
        </form>
    );
}

export default SignIn;
