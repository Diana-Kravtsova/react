import './Checkbox.css'

function Checkbox({handleCheckbox, isChecked}) {
    return (
        <div className={'checkbox-wrapper'}>
            <input
                onChange={handleCheckbox}
                type={'checkbox'}
                checked={isChecked}
            />
        </div>
    );
}

export default Checkbox;
