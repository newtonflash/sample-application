import React from 'react';
import { render } from 'react-dom';
import PLPContainer from './PLPContainer';
import config from './__mock-data__/PLPContainer.config';

const node = document.getElementById('application-container');
render(<PLPContainer {...config.componentData} />, node);
