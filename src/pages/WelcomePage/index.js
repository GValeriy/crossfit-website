import React, { Component } from 'react';

import NavigationHeader from '../../components/NavigationHeader';
import NavigationLinkMenu from '../../components/NavigationLinkMenu';

import styles from './styles.module.scss';

const navigationMenuItems = [ {
    id: 0,
    label: 'nutrition',
    to: '/'
}, {
    id: 1,
    label: 'health',
    to: '/'
}, {
    id: 2,
    label: 'fashion & beauty',
    to: '/'
}, {
    id: 3,
    label: 'blog',
    to: '/'
} ];

const navigationMenuTitle = 'crossfit';
const messagesCount = 3;

const userData = {
    userId: 'abc123',
    userName: 'Mary J. Sponsor',
    userRole: 'Sponsor/Requester'
};

class WelcomePage extends Component {
    render() {
        const {
            className
        } = this.props;

        const {
            userName
        } = userData;

        return (
            <div className={ `${ styles.welcomePage } ${ className }` }>
                <NavigationHeader className={ styles.navigationHeader }
                    messagesCount={ messagesCount }
                    userName={ userName }
                />

                <NavigationLinkMenu className={ styles.navigationLinkMenu }
                    items={ navigationMenuItems }
                    title={ navigationMenuTitle }
                />
            </div>
        );
    }
}

export default WelcomePage;
