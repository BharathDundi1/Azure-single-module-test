import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import InvestorRelations from './investor-relations';
import HomePage from './homepage';

const theme = {
    breakpoints: {
        xs: 0,
        sm: 544,
        md: 768,
        lg: 992,
        xl: 1200,
    }
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    {/* Investor Relations Route */}
                    <Route exact path='/investor-relations' component={InvestorRelations} />
                    
                    {/* Home Route */}
                    <Route exact path='/' component={HomePage} />
                    
                    {/* Fallback to Homepage */}
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>

            
        </ThemeProvider>
    )
};

export default App;
