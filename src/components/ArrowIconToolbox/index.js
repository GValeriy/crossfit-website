import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

import { ReactComponent as LeftArrow } from '../../assets/icons/arrow_left.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/arrow_right.svg';

class ArrowIconToolbox extends PureComponent {
    render() {
        const {
            className,
            leftArrowDisabled,
            rightArrowDisabled
        } = this.props;

        return (
            <div className={ `${ styles.arrowIconToolbox } ${ className }` }>
                <LeftArrow className={ styles.leftIcon }
                    disabled={ leftArrowDisabled }
                />

                <RightArrow className={ styles.rightIcon }
                    disabled={ rightArrowDisabled }
                />
            </div>
        );
    }
}

ArrowIconToolbox.defaultProps = {
    className: ''
}

export default ArrowIconToolbox;
