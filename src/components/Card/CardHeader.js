import styles from './Card.module.css';

function CardHeader({ onEdit, caption, isEdit, editedCaption, readonly, children, checkbox }) {
    if (readonly) {
        return (
            <div className={styles.cardCaption}>
                {caption}
                <div className={styles.cardEdit}>
                    {checkbox}
                </div>
            </div>
        );
    }

    if (isEdit) {
        return (
            <div className={styles.cardCaption}>
                <input value={editedCaption} onChange={event => onEdit(event.target.value)} />
                {children}
            </div>
        );
    }

    return (
        <div className={styles.cardCaption}>
            {caption}
            <div className={styles.cardEdit}>
                {children}{checkbox}
            </div>
        </div>
    );
}

export default CardHeader;
