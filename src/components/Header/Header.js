import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import Menu from './Menu';
import ButtonMenu from './ButtonMenu';

function Header() {
    const { type, email } = useSelector(state => state.auth);

    return (
        <div className={styles.header}>
            <Menu />
            {type && <span>Hello, {email}!</span>}
            <ButtonMenu />
        </div>
    );
}

export default Header;
