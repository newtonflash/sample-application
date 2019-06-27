import React from 'react';
import { render } from 'react-dom';
import PLPContainer from './PLPContainer';
import config from './__mock-data__/PLPContainer.config';
import { Provider } from 'mobx-react';
import PLPStore from '../../stores/plp-store';

const store = { PLPStore };

const node = document.getElementById('application-container');
render(<PLPContainer {...config.componentData} {...store} />, node);
