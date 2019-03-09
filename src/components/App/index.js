import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainLayout from '../../layout/MainLayout';
import WelcomePage from '../../pages/WelcomePage';

import routes from '../../helpers/routes';

import styles from './styles.module.scss';

const {
    welcomePage: welcomePageRoute
} = routes;

class App extends Component {
    render() {
        return (
            <div className={ styles.app }>
                <MainLayout>
                    <Route component={ WelcomePage }
                        exact
                        path={ welcomePageRoute }
                    />
                </MainLayout>
            </div>
        );
    }
}

export default App;
