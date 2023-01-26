import styled from 'styled-components';

const InputContainer = styled.div`
    div {
        display: flex;
        margin-top: 1rem;
    }

    span {
        color: #7e0000;
        display: flex;
        font-size: 0.7em;
    }
`;

const StyledInput = styled.input.attrs(props => ({ isValid: props.isValid }))`
    background-color: var(--primary-color);
    border: none;
    border-bottom: 0.15em solid ${props => props.isValid ? '#7e0000' : 'var(--main-color)'};
    color: var(--text-color);
`;

const Input = (props) => (
    <InputContainer>
        <div>
            {props.icon}
            <StyledInput
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                isValid={props.isValid}
            />
        </div>
        <span>{props.error}</span>
    </InputContainer>
);

export default Input;
