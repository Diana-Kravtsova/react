import { BsLock, BsUnlock } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { handleReadonly } from '../store/pokemonSlice';
import commonStyles from '../styles/Common.module.css';
import headerStyles from '../components/Header/Header.module.css';
import styles from './Pages.module.css';

function SettingsPage() {
    const dispatch = useDispatch();
    const { readonly } = useSelector(state => state.pokemon);
    const { type } = useSelector(state => state.auth);

    if (type !== 'admin') {
        return (
            <Navigate to={'/signIn'} />
        );
    }
    return (
        <div className={styles.signIn}>
            <button
                className={headerStyles.button}
                onClick={() => dispatch(handleReadonly())}
            >
                {readonly
                    ? <BsUnlock className={commonStyles.emoji} />
                    : <BsLock className={commonStyles.emoji} />
                }
            </button>
        </div>
    );
}

export default SettingsPage;
