import React from 'react';

import { storiesOf } from '@storybook/react';

import TitlePageLabel from './index';

const title = 'crossfit program for beginners';

storiesOf('TitlePageLabel', module)
    .add('default', () => (
        <TitlePageLabel title={ title } />
    ));
