import React from 'react';

import { storiesOf } from '@storybook/react';

import TopLogo from '.';

storiesOf('TopLogo', module)
    .add('default', () => (
        <TopLogo title="crf">
            start
        </TopLogo>
    ));
