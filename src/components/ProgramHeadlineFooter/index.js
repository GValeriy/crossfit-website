import React, { PureComponent } from 'react';

import ProgramHeadlineList from '../ProgramHeadlineList';

import styles from './styles.module.scss';

class ProgramHeadlineFooter extends PureComponent {
    render() {
        const {
            className,
            items
        } = this.props;

        return (
            <div className={ `${ styles.programHeadlineFooter } ${ className }` }>
                <ProgramHeadlineList className={ styles.programHeadlineList }
                    items={ items }
                />
            </div>
        );
    }
}

ProgramHeadlineFooter.defaultProps = {
    className: ''
}

export default ProgramHeadlineFooter;
