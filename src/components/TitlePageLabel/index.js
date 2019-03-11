import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

class TitlePageLabel extends PureComponent {
    render() {
        const {
            className,
            title
        } = this.props;

        return (
            <div className={ `${ styles.titlePageLabel } ${ className }` }>
                <span className={ styles.title }>
                    { title }
                </span>
            </div>
        );
    }
}

TitlePageLabel.defaultProps = {
    className: ''
}

export default TitlePageLabel;
