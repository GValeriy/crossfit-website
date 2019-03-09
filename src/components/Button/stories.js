import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module)
    .add('default', () => (
        <Button>
            start
        </Button>
    ))
    .add('disabled', () => (
        <Button disabled>
            cant start
        </Button>
    ));
