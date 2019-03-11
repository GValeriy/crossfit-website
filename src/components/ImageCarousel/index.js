import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

import RunningImage from '../../assets/images/crossfit-running.png';

class ImageCarousel extends PureComponent {
    render() {
        const {
            className
        } = this.props;

        return (
            <div className={ `${ styles.imageCarousel } ${ className }` }>
                <img alt="Run"
                    className={ styles.image }
                    src={ RunningImage }
                />
            </div>
        );
    }
}

ImageCarousel.defaultProps = {
    className: ''
}

export default ImageCarousel;
