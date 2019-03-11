import React, { Component } from 'react';

import ArrowIconToolbox from '../../components/ArrowIconToolbox';
import ImageCarousel from '../../components/ImageCarousel';
import NavigationHeader from '../../components/NavigationHeader';
import NavigationLinkMenu from '../../components/NavigationLinkMenu';
import ProgramHeadlineFooter from '../../components/ProgramHeadlineFooter';
import SocialIconsBar from '../../components/SocialIconsBar';
import TitlePageLabel from '../../components/TitlePageLabel';

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

const socialIcons = [ {
    id: 0,
    name: 'share'
}, {
    id: 1,
    name: 'facebook'
}, {
    id: 2,
    name: 'instagram'
} ];

const titlePageLabel = 'crossfit program for beginners';

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

                <ImageCarousel />

                <div className={ `${ styles.arrowIconToolboxWrapper } ${ className }` }>
                    <ArrowIconToolbox className={ styles.arrowIconToolbox }
                        leftArrowDisabled
                    />

                    <TitlePageLabel title={ titlePageLabel } />
                </div>

                <SocialIconsBar className={ styles.socialIconsBar }
                    items={ socialIcons }
                />

                <ProgramHeadlineFooter className={ styles.programHeadlineFooter }
                    items={ programHeadlines }
                />
            </div>
        );
    }
}

export default WelcomePage;
