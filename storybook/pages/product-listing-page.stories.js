import React from 'react';
import { storiesOf } from '@storybook/react';
import PLPContainer from 'components/plp-container';
import plpConfig from 'components/plp-container/__mock-data__/PLPContainer.config.js';

storiesOf('pages/product-list', module).add('default', () => {
    return (
        <div className="container app-container">
            <PLPContainer {...plpConfig.componentData} />
        </div>
    );
});
