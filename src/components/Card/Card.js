import { useEffect, useState } from 'react';
import { BsPencilSquare, BsCheck2Square, BsXSquare } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.css';
import Checkbox from '../Checkbox';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { withLoadingDelay } from './withLoadingDelay';
import { selectReadonly } from '../../store/selectors';

export function Card({ card, onEdit, variant }) {
    const {
        id,
        caption,
        text,
        checked,
    } = card;
    const navigate = useNavigate();
    const readonly = useSelector(selectReadonly);
    const [isEdit, setEdit] = useState(!text && !caption);
    const [newCard, setNewCard] = useState(card);

    useEffect(() => {
        readonly && setEdit(false);
    }, [readonly]);

    const onCloseCard = () => {
        setNewCard(card);
        setEdit(!isEdit);
    };

    const onSaveCard = () => {
        onEdit(newCard);
        setEdit(!isEdit);
    };

    const onEditCard = () => {
        onEdit({ ...card, checked: false });
        setEdit(!isEdit);
    };

    const stopPropagation = e => e.stopPropagation();

    const onCheckCard = () => onEdit({ ...card, checked: !(isEdit || checked) });

    const checkbox = (
        <Checkbox
            {...{ checked }}
            onChange={onCheckCard}
            onDoubleClick={stopPropagation}
        />
    );

     return (
        <div
            className={variant === 'card' ? styles.card : styles.page}
            style={{ backgroundColor: checked ? '#252525' : '' }}
            onDoubleClick={(!isEdit && variant === 'card') ? () => navigate(`card/${id}`) : null}
            data-testid={'CardId'}
        >
            <CardHeader
                onEdit={caption => setNewCard({ ...newCard, caption })}
                checkbox={variant === 'card' ? checkbox : null}
                {...{ caption, isEdit, editedCaption: newCard.caption, readonly }}
            >
                {
                    isEdit ? (
                        <div className={styles.cardEdit}>
                            <button className={styles.buttonPencil} onClick={onSaveCard} aria-label='pencil'>
                                <BsCheck2Square className={styles.pencil} />
                            </button>
                            <button className={styles.buttonPencil} onClick={onCloseCard} aria-label='exit'>
                                <BsXSquare className={styles.exit} />
                            </button>
                        </div>
                    ) : (
                        <button className={styles.buttonPencil} onClick={onEditCard}>
                            <BsPencilSquare className={styles.pencil} />
                        </button>
                    )
                }
            </CardHeader>
            <hr />
            <CardBody
                onEdit={text => setNewCard({ ...newCard, text })}
                {...{ text, isEdit, editedText: newCard.text, readonly }}
            />
        </div>
    );
}

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        caption: PropTypes.string,
        text: PropTypes.string,
        checked: PropTypes.bool,
    }),
    onEdit: PropTypes.func,
    readonly: PropTypes.bool,
    variant: PropTypes.string,
};

export default withLoadingDelay(Card);
