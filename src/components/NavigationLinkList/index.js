import React, { PureComponent } from 'react';

import NavigationLink from '../NavigationLink';

import styles from './styles.module.scss';

class NavigationLinkList extends PureComponent {
    renderLinks = () => {
        const {
            items
        } = this.props;

        return items.map((item) => {
            const {
                id,
                label,
                to
            } = item;

            return (
                <NavigationLink className={ styles.navigationLink }
                    key={ id }
                    to={ to }
                >
                    { label }
                </NavigationLink>
            )
        });
    }


    render() {
        const {
            className
        } = this.props;

        return (
            <div className={ `${ styles.navigationLinkList } ${ className }` }>
                { this.renderLinks() }
            </div>
        );
    }
}

NavigationLinkList.defaultProps = {
    className: ''
}

export default NavigationLinkList;
