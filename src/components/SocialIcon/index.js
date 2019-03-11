import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './styles.module.scss';

import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook-logo.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/share.svg';


const icons = (name) => {
    switch(name) {
        case('facebook'): {
            return <FacebookIcon />;
        }

        case('instagram'): {
            return <InstagramIcon />;
        }

        case('share'): {
            return <ShareIcon />;
        }

        default: {
            return;
        }
    }
}

class SocialIcon extends PureComponent {
    handleClick = () => {
        const {
            history,
            to
        } = this.props;

        if (to) {
            return history.push(to);
        }
    }
    render() {
        const {
            className,
            name
        } = this.props;

        return (
            <div className={ `${ className }` }
                onClick={ this.handleClick }
            >
                { icons(name) }
            </div>
        );
    }
}

SocialIcon.defaultProps = {
    className: ''
}

export default withRouter(SocialIcon);
