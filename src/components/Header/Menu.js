import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Header.module.css';

function Menu({ items }) {
    return (
        <ul>
            {
                items.map(({ link, name }) => (
                    <li key={link}>
                        <NavLink
                            to={link}
                            className={
                                ({ isActive }) => isActive
                                    ? classNames(styles.activeLink, styles.link)
                                    : styles.link
                            }
                            end
                        >
                            {' ' + name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
}

export default Menu;
