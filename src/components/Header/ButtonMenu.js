import Badge from '../Badge';
import { BsLock, BsPlusSquare, BsTrash2, BsUnlock } from 'react-icons/bs';
import { useContext } from 'react';
import { MyContext } from '../../store';

function ButtonMenu() {
    const {
        count,
        addCard,
        handleDelete,
        readonly,
        handleReadonly,
    } = useContext(MyContext);

    return (
        <div className={'buttons'}>
            <Badge>{count}</Badge>
            <div className={'button-hr'} />
            {
                readonly || (
                    <>
                        <button
                            className={'button'}
                            onClick={addCard}
                        >
                            <BsPlusSquare className={'icon'} />
                        </button>
                        <button
                            className={'button'}
                            onClick={handleDelete}
                            disabled={!count}
                        >
                            <BsTrash2 className={'delete icon'} />
                        </button>
                    </>
                )
            }
            <button
                className={'button'}
                onClick={handleReadonly}
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
