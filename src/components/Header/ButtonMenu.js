import Badge from '../Badge';
import { BsLock, BsPlusSquare, BsTrash2, BsUnlock } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemonCount, handleAdd, handleReadonly, handleDelete } from '../../store/pokemonSlice';

function ButtonMenu() {
    const { readonly } = useSelector(state => state.pokemon);
    const dispatch = useDispatch();
    const count = useSelector(selectPokemonCount);

    return (
        <div className={'buttons'}>
            <Badge>{count}</Badge>
            <div className={'button-hr'} />
            {
                readonly || (
                    <>
                        <button
                            className={'button'}
                            onClick={() => dispatch(handleAdd())}
                        >
                            <BsPlusSquare className={'icon'} />
                        </button>
                        <button
                            className={'button'}
                            onClick={() => dispatch(handleDelete())}
                            disabled={!count}
                        >
                            <BsTrash2 className={'delete icon'} />
                        </button>
                    </>
                )
            }
            <button
                className={'button'}
                onClick={() => dispatch(handleReadonly())}
            >
                {
                    readonly ?
                        <BsUnlock className={'icon'} />
                        : <BsLock className={'icon'} />
                }
            </button>
        </div>
    );
}

export default ButtonMenu;
