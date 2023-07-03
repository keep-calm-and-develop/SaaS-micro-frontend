import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Spinner from './components/Spinner';
import { useState } from 'react';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header isUserAuthenticated={isUserAuthenticated} onSignOut={() => setIsUserAuthenticated(false)}/>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsUserAuthenticated(true)} />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
