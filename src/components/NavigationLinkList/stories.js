import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import NavigationLinkList from '.';

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

storiesOf('NavigationLinkList', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <NavigationLinkList items={ items } />
    ));
