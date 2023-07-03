import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header />
                <Switch>
                    <Route path="/auth" component={AuthApp} />
                    <Route path="/" component={MarketingApp} />
                </Switch>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
