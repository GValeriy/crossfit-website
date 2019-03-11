import React from 'react';

import { storiesOf } from '@storybook/react';

import ImageCarousel from '.';

storiesOf('ImageCarousel', module)
    .add('default', () => (
        <ImageCarousel>
            start
        </ImageCarousel>
    ));
