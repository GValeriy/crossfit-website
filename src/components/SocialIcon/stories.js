import React from 'react';

import { storiesOf } from '@storybook/react';

import SocialIcon from '.';

storiesOf('SocialIcon', module)
    .add('default', () => (
        <SocialIcon />
    ))
    .add('facebook', () => (
        <SocialIcon name="facebook" />
    ));
