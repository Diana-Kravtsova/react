import { FiUser } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import './SignIn.css';

function SignIn() {
    return (
        <div className={'signIn'}>
            <h2>Sign in</h2>
            <div className={'inputContainer'}>
                <FiUser className={'icon'}/>
                <input type={'text'} placeholder={'Username'}/>
            </div>
            <div className={'inputContainer'}>
                <RiLockPasswordLine className={'icon'}/>
                <input
                    type={'password'}
                    minLength={5}
                    placeholder={'Password'}
                />
            </div>
            <br/>
            <button className={'signIn-button'}>Sign in</button>
        </div>
    );
}

export default SignIn;
