import React, { PureComponent } from 'react';

import ProgramHeadline from '../ProgramHeadline';

import styles from './styles.module.scss';

class ProgramHeadlineList extends PureComponent {
    renderHeadlines = () => {
        const {
            items
        } = this.props;

        return items.map((item) => {
            const {
                id,
                text,
                title
            } = item;

            return (
                <ProgramHeadline key={ id }
                    text={ text }
                    title={ title }
                />
            )
        });
    }


    render() {
        const {
            className
        } = this.props;

        return (
            <div className={ `${ styles.programHeadlineList } ${ className }` }>
                { this.renderHeadlines() }
            </div>
        );
    }
}

ProgramHeadlineList.defaultProps = {
    className: '',
    items: []
}

export default ProgramHeadlineList;
