import './Card.css';

function CardBody({ onEdit, text, isEdit, editedText }) {
    if (isEdit) {
        return (
            <div className={'card-textarea'}>
                <textarea value={editedText} onChange={event => onEdit(event.target.value)} />
            </div>
        );
    }

    return (
        <div className={'card-text'}>{text}</div>
    );
}

export default CardBody;
