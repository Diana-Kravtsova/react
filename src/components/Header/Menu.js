import { NavLink } from 'react-router-dom';

function Menu({ items }) {
    return (
        <ul>
            {
                items.map((link, id) => (
                    <li key={id}>
                        <NavLink
                            to={link.link}
                            className={({ isActive }) => isActive ? 'activeLink link' : 'link'}
                            end
                        >
                            {' ' + link.name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
}

export default Menu;
