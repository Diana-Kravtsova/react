import './Header.css'
import Menu from './Menu';

function Header() {
    return (
        <div className={'header'}>
            <Menu items={[
                'header',
            ]}/>
        </div>
    )
}

export default Header;
