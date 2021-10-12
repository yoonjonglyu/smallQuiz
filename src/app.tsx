import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Main from './pages/main';

const App: React.FC = () => {
    return (
        <Router>
            <Link to="/quiz">퀴즈</Link>
            <Link to="/wrong">오답노트</Link>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/quiz" render={() => <h1>퀴즈</h1>} />
                <Route exact path="/wrong" render={() => <h1>오답노트</h1>} />
            </Switch>
        </Router>
    );
}

export default App;