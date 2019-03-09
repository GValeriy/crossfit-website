import React from 'react';

import { storiesOf } from '@storybook/react';

import NavigationHeader from '.';

storiesOf('NavigationHeader', module)
    .add('default', () => (
        <NavigationHeader />
    ));
