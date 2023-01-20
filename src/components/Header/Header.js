import './Header.css';
import Menu from './Menu';
import ButtonMenu from './ButtonMenu';

function Header() {
    return (
        <div className={'header'}>
            <Menu items={[
                'header',
            ]} />
            <ButtonMenu />
        </div>
    );
}

export default Header;
