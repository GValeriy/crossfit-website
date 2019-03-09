import { addDecorator } from '@storybook/react';
import { configure } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';

const req = require.context('../src', true, /stories.js$/);

addDecorator(
    withBackgrounds([ {
        default: true,
        name: 'Fringy Flower',
        value: '#c5b3e0'
    }, {
        name: 'white',
        value: '#ffffff'
    }
    ])
);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
