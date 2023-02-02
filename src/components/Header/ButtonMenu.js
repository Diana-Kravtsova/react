import { useState } from 'react';
import { BsLock, BsPlusSquare, BsTrash2, BsUnlock } from 'react-icons/bs';
import { RiCheckboxMultipleBlankFill, RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Badge from '../Badge';
import { selectPokemonCount, handleAdd, handleReadonly, handleDelete, handleSelectAll } from '../../store/pokemonSlice';
import headerStyles from './Header.module.css';
import commonStyles from '../../styles/Common.module.css';

function ButtonMenu() {
    const { readonly } = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    const count = useSelector(selectPokemonCount);
    const [uncheckedAll, setUncheckedAll] = useState(true);

    return (
        <div className={headerStyles.buttons}>
            <Badge>{count}</Badge>
            <div className={headerStyles.buttonHr} />
            {
                readonly || (
                    <>
                        <button
                            className={headerStyles.button}
                            onClick={() => dispatch(handleAdd())}
                        >
                            <BsPlusSquare className={commonStyles.icon} />
                        </button>
                        <button
                            className={headerStyles.button}
                            onClick={() => dispatch(handleDelete())}
                            disabled={!count}
                        >
                            <BsTrash2 className={classNames(headerStyles.delete, commonStyles.icon)} />
                        </button>
                    </>
                )
            }
            <button
                className={headerStyles.button}
                disabled={!count}
                onClick={() => {
                    dispatch(handleSelectAll(uncheckedAll));
                    setUncheckedAll(!uncheckedAll);
                }}
            >
                {
                    uncheckedAll
                        ? <RiCheckboxMultipleBlankLine className={classNames(headerStyles.delete, commonStyles.icon)}/>
                        : <RiCheckboxMultipleBlankFill className={classNames(headerStyles.delete, commonStyles.icon)}/>
                }
            </button>
            <button
                className={headerStyles.button}
                onClick={() => dispatch(handleReadonly())}
            >
                {
                    readonly
                        ? <BsUnlock className={commonStyles.icon} />
                        : <BsLock className={commonStyles.icon} />
                }
            </button>
        </div>
    );
}

export default ButtonMenu;
