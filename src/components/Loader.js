import commonStyles from '../styles/Common.module.css';
import { BarLoader } from 'react-spinners';

function Loader () {
    return(
        <div className={commonStyles.loadingBox}>
            <BarLoader
                color="#007a7e"
                className={commonStyles.loadingSpinner}
                width="100%"
            />
        </div>
    )
}

export default Loader ;
