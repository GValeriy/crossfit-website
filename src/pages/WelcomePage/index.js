import React, { Component } from 'react';

import NavigationHeader from '../../components/NavigationHeader';
import NavigationLinkMenu from '../../components/NavigationLinkMenu';
import ProgramHeadlineFooter from '../../components/ProgramHeadlineFooter';

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

const programHeadlines = [ {
    id: 0,
    text: 'hypertrophy',
    title: 'goal'
}, {
    id: 1,
    text: 'beginner',
    title: 'skill lever'
}, {
    id: 2,
    text: '28 days',
    title: 'duration'
} ];

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
                <div>
                    <NavigationHeader className={ styles.navigationHeader }
                        messagesCount={ messagesCount }
                        userName={ userName }
                    />

                    <NavigationLinkMenu className={ styles.navigationLinkMenu }
                        items={ navigationMenuItems }
                        title={ navigationMenuTitle }
                    />
                </div>

                <ProgramHeadlineFooter className={ styles.programHeadlineFooter }
                    items={ programHeadlines }
                />
            </div>
        );
    }
}

export default WelcomePage;
