import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

class PortfolioImage extends PureComponent {
    render() {
        const {
            className,
            image,
            messagesCount
        } = this.props;

        return (
            <div className={ styles.portfolioImageWrapper }>
                <img alt="Portfolio"
                    className={ `${ styles.portfolioImage } ${ className }` }
                    src={ image }
                />

                {
                    messagesCount &&
                        <div className={ styles.messagesCount }>
                            { messagesCount }
                        </div>
                }
            </div>
        );
    }
}

PortfolioImage.defaultProps = {
    className: ''
}

export default PortfolioImage;
