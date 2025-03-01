import './CardLoading.css';

import { PulseLoader } from "react-spinners";


const CardLoading = () => {
    return (
        <div className="card-loading">
            <PulseLoader color="#f6f6f6" size={15} margin={2} />
        </div>
    );
}

export default CardLoading