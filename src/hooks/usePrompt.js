import { useEffect, useState } from 'react';

const usePrompt = (timeout, text) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            const promptMessage = prompt(text);
            setMessage(promptMessage);
        }, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, text]);

    return message;
};

export default usePrompt;
