import './Card.css'
import {useState} from 'react';

function Card({caption, text}) {
    const [isChecked, setChecked] = useState(true);
    const handleChange = () => {
        setChecked(!isChecked);
    };

    return (
        <div className={'card'}
             style={{backgroundColor: isChecked ? '' : '#252525'}}>

            <div className={'card-caption'}>
                {caption}

                <div className={'checkbox-wrapper'}>
                    <input onChange={handleChange} type={'checkbox'} checked={!isChecked}/>
                </div>
            </div>
            <hr/>
            <div className={'card-text'}>{text}</div>
        </div>
    );
}

export default Card;
