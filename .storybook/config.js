import { addDecorator } from '@storybook/react';
import { configure } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';

const req = require.context('../src', true, /stories.js$/);

addDecorator(
    withBackgrounds([ {
        default: true,
        name: '$Silver Gray',
        value: '#f6f6f6'
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
