import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

class Button extends PureComponent {
    render() {
        const {
            children,
            className,
            disabled
        } = this.props;

        return (
            <button className={ `${ styles.button } ${ className }` }
                disabled={ disabled }
            >
                { children }
            </button>
        );
    }
}

Button.defaultProps = {
    className: ''
}

export default Button;
