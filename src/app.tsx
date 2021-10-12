import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/quiz">
                    <h1>퀴즈</h1>
                </Route>
                <Route exact path="/wrong">
                    <h1>오답노트</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;