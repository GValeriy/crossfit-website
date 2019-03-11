import React from 'react';

import { storiesOf } from '@storybook/react';

import SocialIconsBar from '.';

const icons = [ {
    id: 0,
    name: 'share'
}, {
    id: 1,
    name: 'facebook'
}, {
    id: 2,
    name: 'instagram'
} ];

storiesOf('SocialIconsBar', module)
    .add('default', () => (
        <SocialIconsBar items={ icons } />
    ));
