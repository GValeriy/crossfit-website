import React from 'react';

const fontAwesome = className => <i className={ className } />;

const map = {
    // : fontAwesome(''),
};

const icon = iconName => map[iconName];

export default icon;
