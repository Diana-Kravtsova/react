import styled from 'styled-components';
import classNames from 'classnames';
import '../pages/SignIn.css';

const InputContainer = styled.div`
    div {
        display: flex;
        margin-top: 1rem;
    }

    input {
        color: var(--text-color);
        background-color: var(--primary-color);
        border: none;
        border-bottom: 0.15em solid var(--main-color);
    }

    .inputError {
        border-bottom: 0.15em solid #7e0000;
    }

    .iconError {
        color: #7e0000;
    }

    span {
        color: #7e0000;
        display: flex;
        font-size: 0.7em;
    }
`;

const Input = ({ errors, touched, Icon, ...props }) => (
    <InputContainer>
        <div>
            <Icon className={classNames('icon', { 'iconError': touched && errors })} />
            <input
                className={classNames({ 'inputError': touched && errors })}
                id={props.type}
                name={props.type}
                {...props}
            />
        </div>
        <span>{touched && errors}</span>
    </InputContainer>
);

export default Input;
