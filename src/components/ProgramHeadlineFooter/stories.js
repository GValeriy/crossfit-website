import React from 'react';

import { storiesOf } from '@storybook/react';

import ProgramHeadlineFooter from './index';

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

storiesOf('ProgramHeadlineFooter', module)
    .add('default', () => (
        <ProgramHeadlineFooter items={ items } />
    ));
