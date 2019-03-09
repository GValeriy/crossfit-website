import React from 'react';

import { storiesOf } from '@storybook/react';

import portfolioImage from '../../assets/images/portfolio-image.png';

import PortfolioImage from './index';

const messagesCount = 3;

storiesOf('PortfolioImage', module)
    .add('default', () => (
        <PortfolioImage image={ portfolioImage } />
    ))
    .add('new messages', () => (
        <PortfolioImage image={ portfolioImage }
            messagesCount={ messagesCount }
        />
    ));
