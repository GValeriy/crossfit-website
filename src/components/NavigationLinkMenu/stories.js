import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import NavigationLinkMenu from '.';

const items = [ {
    id: 0,
    label: 'nutrition',
    to: '/'
}, {
    id: 1,
    label: 'health',
    to: '/'
}, {
    id: 2,
    label: 'fashion & beauty',
    to: '/'
}, {
    id: 3,
    label: 'blog',
    to: '/'
} ];

const navigationMenuTitle = 'crossfit';

storiesOf('NavigationLinkMenu', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <NavigationLinkMenu items={ items }
            title={ navigationMenuTitle }
        />
    ));
