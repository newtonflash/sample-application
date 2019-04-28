import axios from 'axios';
import { isTSExpressionWithTypeArguments } from '@babel/types';

// TODO: we may have a single http service controller to intercept all ajax requests. Keeping that OOS of this sample application

let cachedProductsList = {};

const getProductsList = (url = '', callback) => {
    if (url === '') {
        // this call is for fetching cached data
        return cachedProductsList;
    }

    if (url === '') throw 'ERROR: URL must not be empty';

    axios.get(url).then(response => {
        if (typeof callback === 'function') {
            cachedProductsList = response.data;
            callback(cachedProductsList);
        } else {
            throw 'ERROR : No callback defined';
        }
    });
};

export default getProductsList;
