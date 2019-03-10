import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import ProgramHeadlineList from '.';

const items = [ {
    id: 0,
    text: 'hypertrophy',
    title: 'goal'
}, {
    id: 1,
    text: 'beginner',
    title: 'skill lever'
}, {
    id: 2,
    text: '28 days',
    title: 'duration'
} ];

storiesOf('ProgramHeadlineList', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <ProgramHeadlineList items={ items } />
    ));
