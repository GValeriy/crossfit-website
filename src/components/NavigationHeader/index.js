import React, { PureComponent } from 'react';

import PortfolioImage from '../PortofolioImage';
import TopLogo from '../../components/TopLogo';

import styles from './styles.module.scss';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg';

import portfolioImage from '../../assets/images/portfolio-image.png';

class NavigationHeader extends PureComponent {
    render() {
        const {
            className,
            messagesCount,
            userName
        } = this.props;

        return (
            <div className={ `${ styles.navigationHeader } ${ className }` }>
                <div className={ styles.topLogoContainer }>
                    <TopLogo className={ styles.topLogo }
                        title="crf"
                    />

                    <MenuIcon className={ styles.icon } />
                </div>

                <div className={ styles.portfolioImageWrapper }>
                    <span className={ styles.portfolioImageLabel }>
                        hello,

                        <span className={ styles.portfolioImageUserName }>
                            { userName }
                        </span>
                    </span>

                    <PortfolioImage image={ portfolioImage }
                        messagesCount={ messagesCount }
                    />
                </div>
            </div>
        );
    }
}

NavigationHeader.defaultProps = {
    className: ''
}

export default NavigationHeader;
