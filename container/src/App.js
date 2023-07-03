import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Spinner from './components/Spinner';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        if (isUserAuthenticated) {
            history.push('/dashboard');
        }
    }, [isUserAuthenticated]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header isUserAuthenticated={isUserAuthenticated} onSignOut={() => setIsUserAuthenticated(false)}/>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsUserAuthenticated(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isUserAuthenticated && <Redirect to="/" />}
                            <DashboardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    );
};

export default App;
