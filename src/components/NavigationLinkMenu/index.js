import React, { PureComponent } from 'react';

import NavigationLinkList from '../NavigationLinkList';

import styles from './styles.module.scss';

class NavigationLinkMenu extends PureComponent {
    render() {
        const {
            className,
            items,
            title
        } = this.props;

        return (
            <div className={ `${ styles.navigationLinkMenu } ${ className }` }>
                <span className={ styles.logo }>
                    { title }
                </span>

                <NavigationLinkList className={ styles.navigationLinkList }
                    items={ items }
                />
            </div>
        );
    }
}

NavigationLinkMenu.defaultProps = {
    className: ''
}

export default NavigationLinkMenu;
