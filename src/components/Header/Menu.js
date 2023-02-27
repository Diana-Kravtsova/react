import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.css';
import { signOut } from '../../store/authenticationSlice';

function Menu() {
    const { type } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const onClassName = ({ isActive }) => isActive
        ? classNames(styles.activeLink, styles.link)
        : styles.link;

    return (
        <ul>
            <li>
                <NavLink to={''} className={onClassName} end>
                    {'home'}
                </NavLink>
            </li>
            {type === 'admin' && (
                <li>
                    <NavLink to={'settings'} className={onClassName} end>
                        {' settings'}
                    </NavLink>
                </li>
            )}
            {type ? (
                <li>
                    <NavLink
                        to={'signIn'}
                        className={onClassName}
                        end
                        onClick={() => dispatch(signOut())}
                    >
                        {' sign out'}
                    </NavLink>
                </li>
            ) : (
                <li>
                    <NavLink to={'signIn'} className={onClassName} end>
                        {' sign in'}
                    </NavLink>
                </li>
            )}
        </ul>
    );
}

export default Menu;
