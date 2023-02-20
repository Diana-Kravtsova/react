import styles from './Card.module.css';

function CardBody({ onEdit, text, isEdit, editedText }) {
    if (isEdit) {
        return (
            <div className={styles.cardTextarea}>
                <textarea value={editedText} onChange={event => onEdit(event.target.value)} />
            </div>
        );
    }

    return (
        <div className={styles.cardText}>{text}</div>
    );
}

export default CardBody;
