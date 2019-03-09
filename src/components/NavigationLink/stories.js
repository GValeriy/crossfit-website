import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import NavigationLink from '.';

storiesOf('NavigationLink', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <NavigationLink to="/">
            nutrition
        </NavigationLink>
    ));
