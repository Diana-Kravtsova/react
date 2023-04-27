import classNames from 'classnames';

import commonStyles from '../styles/Common.module.css';
import pagesStyles from '../pages/Pages.module.css';

const Input = ({ errors, touched, Icon, ...props }) => (
    <div className={pagesStyles.inputContainer}>
        <div className={pagesStyles.iconInput}>
            <Icon className={classNames(commonStyles.icon, { [pagesStyles.iconError]: touched && errors })} />
            <input
                className={classNames(pagesStyles.input, { [pagesStyles.inputError]: touched && errors })}
                id={props.type}
                name={props.type}
                {...props}
            />
        </div>
        <span className={pagesStyles.errorText}>{touched && errors}</span>
    </div>
);

export default Input;
