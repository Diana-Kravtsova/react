import './Card.css'

function CardHeader({onEdit, caption, isEdit, editedCaption, readonly, children, checkbox}) {
    if (readonly) {
        return (
            <div className={'card-caption'}>
                {caption}
                <div className={'card-edit'}>
                    {checkbox}
                </div>
            </div>
        );
    }

    if (isEdit) {
        return (
            <div className={'card-caption'}>
                <input value={editedCaption} onChange={event => onEdit(event.target.value)}/>
                {children}
            </div>
        );
    }

    return (
        <div className={'card-caption'}>
            {caption}
            <div className={'card-edit'}>
                {children}{checkbox}
            </div>
        </div>
    );
}

export default CardHeader;
