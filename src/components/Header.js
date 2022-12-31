import './Header.css'
import Menu from './Menu';

function Header({children}) {
    return (
        <div className={'header'}>
            <Menu items={[
                'header',
            ]}/>
            {children}
        </div>
    );
}

export default Header;
