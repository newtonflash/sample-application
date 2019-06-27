import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import { observable, action } from 'mobx';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, routingStore);

class PLPStore {
    constructor() {
        history.subscribe((location, action) => this.onRouteChange(location, action));
    }

    @observable
    currentFilter = -1;

    @observable
    productsList = [];

    @action
    changeFilter = newFilter => {
        // todo to add a routing string generator
        history.push(`/#filter=${newFilter}`);
    };

    @action
    onRouteChange = (location, action) => {
        console.log(location, action);
        this.currentFilter = location.hash.replace('#filter=', '');
        console.log(this.currentFilter);
    };
}
const plpStore = new PLPStore();
export default plpStore;
