import React, { PureComponent } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

class NavigationLink extends PureComponent {
    render() {
        const {
            children,
            className,
            to
        } = this.props;

        return (
            <NavLink className={ `${ styles.navigationLink } ${ className }` }
                to={ to }
            >
                { children }
            </NavLink>
        );
    }
}

NavigationLink.defaultProps = {
    className: ''
}

export default NavigationLink;
