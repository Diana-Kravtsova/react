import { ClimbingBoxLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import cardStyles from './Card.module.css'
import commonStyles from '../../styles/Common.module.css';

export const withLoadingDelay = ControlledComponent => {
    return ({ ...props }) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
        }, []);

        const loading = (
            <div className={classNames(cardStyles.card, commonStyles.loadingBox)}>
                <ClimbingBoxLoader
                    color="#007a7e"
                    className={commonStyles.loadingSpinner}
                    size={20}
                />
            </div>
        );

        return isLoading ? loading : <ControlledComponent {...props} />;
    };
};
