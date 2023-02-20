import styles from './Header.module.css';
import Menu from './Menu';
import ButtonMenu from './ButtonMenu';

function Header() {
    const navigation = [
        { link: '', name: 'home' },
        { link: 'signIn', name: 'sign in' },
    ];

    return (
        <div className={styles.header}>
            <Menu items={navigation} />
            <ButtonMenu />
        </div>
    );
}

export default Header;
