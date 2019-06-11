import axios from 'axios';

// TODO: we may have a single http service controller to intercept all ajax requests. Keeping that OOS of this sample application

let cachedProductsList = {};

// eslint-disable-next-line consistent-return
const getProductsList = (url = '', callback) => {
    if (url === '') {
        // this call is for fetching cached data
        return cachedProductsList;
    }

    if (url === '') throw 'ERROR: URL must not be empty'; // eslint-disable-line no-throw-literal

    axios.get(url).then(response => {
        if (typeof callback === 'function') {
            cachedProductsList = response.data;
            callback(cachedProductsList);
        } else {
            throw 'ERROR : No callback defined'; // eslint-disable-line no-throw-literal
        }
    });
};

export default getProductsList;
