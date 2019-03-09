import React, { Component } from 'react';

import NavigationHeader from '../../components/NavigationHeader';

import styles from './styles.module.scss';

const userData = {
    userId: 'abc123',
    userName: 'Mary J. Sponsor',
    userRole: 'Sponsor/Requester'
};

const messagesCount = 3;

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
            </div>
        );
    }
}

export default WelcomePage;
