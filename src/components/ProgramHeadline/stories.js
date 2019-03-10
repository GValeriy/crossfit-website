import React from 'react';

import { storiesOf } from '@storybook/react';

import ProgramHeadline from './index';

const text = 'hypertrophy';
const title = 'goal';

storiesOf('ProgramHeadline', module)
    .add('default', () => (
        <ProgramHeadline text={ text }
            title={ title }
        />
    ));
