import styled from 'styled-components'

const CheckboxContainer = styled.div`
  input {
    -webkit-appearance: none;
    appearance: none;
    width: 1.5em;
    height: 1.5em;
    border-radius: 0.15em;
    margin-top: 0.4em;
    border: 0.15em solid #007a7e;
    cursor: pointer;
    background-color: #4b4b4b;
  }

  input:checked {
    background-color: #007a7e;
  }

  input:focus {
    border: 0.15em solid #ffffff;
  }
`;

const Input = styled.input.attrs({type: "checkbox"})``;

const Checkbox = (props) => (
    <CheckboxContainer>
        <Input {...props}/>
    </CheckboxContainer>
);

export default Checkbox;
