import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import Menu from './Menu';
import ButtonMenu from './ButtonMenu';
import usePrompt from '../../hooks/usePrompt';

function Header() {
    const { type, email } = useSelector(state => state.auth);
    const name = usePrompt(3000, 'What is your name?').trim();

    return (
        <div className={styles.header}>
            <Menu />
            {type && <span>Hello, {name || email}!</span>}
            <ButtonMenu />
        </div>
    );
}

export default Header;
