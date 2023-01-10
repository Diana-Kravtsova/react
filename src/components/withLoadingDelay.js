import {ClimbingBoxLoader} from 'react-spinners';
import {useEffect, useState} from 'react';

export const withLoadingDelay = ControlledComponent => {
    return ({...props}) => {
        const [isLoading, setIsLoading] = useState(false);
        
        useEffect(() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false),2000);
        }, []);

        const loading = (
            <div className={'card loading-box'}>
                <ClimbingBoxLoader
                    color={"#007a7e"}
                    className={'loading-spinner'}
                    size={20}
                />
            </div>
        );

        return isLoading ? loading : <ControlledComponent {...props}/>;
    }
}
