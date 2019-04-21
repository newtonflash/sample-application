import React from 'react';
import { storiesOf } from '@storybook/react';
import PLPContainer from 'components/plp-container';
import 'components/products-list/products-list.scss';
import 'components/products-filter-bar/products-filter-bar.scss';
import plpConfig from 'components/plp-container/__mock-data__/PLPContainer.config.js';
import 'styles/global.scss';

storiesOf('pages/product-list', module).add('default', () => {
    return (
        <div className="container app-container">
            <PLPContainer {...plpConfig.componentData} />
        </div>
    );
});
