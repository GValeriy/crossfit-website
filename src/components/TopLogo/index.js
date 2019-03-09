import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

class TopLogo extends PureComponent {
    render() {
        const {
            className,
            title
        } = this.props;

        return (
            <div className={ `${ styles.topLogo } ${ className }` }>
                <span className={ styles.title }>
                    { title }
                </span>
            </div>
        );
    }
}

TopLogo.defaultProps = {
    className: ''
}

export default TopLogo;
