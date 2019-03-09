import React, { Component } from 'react';
import Button from '../../components/Button';

import styles from './styles.module.scss';

class WelcomePage extends Component {
    render() {
        const {
            className
        } = this.props;

        return (
            <div className={ `${ styles.welcomePage } ${ className }` }>
                <Button className={ styles.button }>
                    Good morning!
                </Button>
            </div>
        );
    }
}

export default WelcomePage;
