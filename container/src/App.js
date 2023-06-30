import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
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
                {/* Marketing App Starts here */}
                <MarketingApp />
                {/* Marketing App End here */}
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
