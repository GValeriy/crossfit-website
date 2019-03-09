import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import NavigationHeader from '.';

const messagesCount = 3;

const userData = {
    userId: 'abc123',
    userName: 'Mary J. Sponsor',
    userRole: 'Sponsor/Requester'
};

const {
    userName
} = userData;

storiesOf('NavigationHeader', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <NavigationHeader messagesCount={ messagesCount }
            userName={ userName }
        />
    ));
