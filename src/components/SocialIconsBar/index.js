import React, { PureComponent } from 'react';

import SocialIcon from '../SocialIcon';

import styles from './styles.module.scss';

class SocialIconsBar extends PureComponent {
    renderIcons = () => {
        const {
            items
        } = this.props;

        return items.map((item) => {
            const {
                id,
                name
            } = item;

            return (
                <SocialIcon className={ styles.socialIcon }
                    key={ id }
                    name={ name }
                />
            );
        })
    }

    render() {
        const {
            className
        } = this.props;

        return (
            <div className={ `${ styles.socialIconsBar } ${ className }` }>
                { this.renderIcons() }
            </div>
        );
    }
}

SocialIconsBar.defaultProps = {
    className: '',
    items: []
}

export default SocialIconsBar;
