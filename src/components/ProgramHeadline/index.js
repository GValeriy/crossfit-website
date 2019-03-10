import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

class ProgramHeadline extends PureComponent {
    render() {
        const {
            className,
            text,
            title
        } = this.props;

        return (
            <div className={ `${ styles.programHeadline } ${ className }` }>
                <span className={ styles.title }>
                    { title }
                </span>

                <span className={ styles.text }>
                    { text }
                </span>
            </div>
        );
    }
}

ProgramHeadline.defaultProps = {
    className: ''
}

export default ProgramHeadline;
