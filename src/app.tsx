import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Quiz from './pages/quiz';
import Result from './pages/result';
import Wrong from './pages/wrong';

import { quizState } from './lib/custom/quiz';
import { wrongNote } from './lib/custom/wrong';

const App: React.FC = () => {
    const quizHook = quizState();
    const wrongHook = wrongNote();
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/quiz">
                    <Quiz quiz={quizHook.current} />
                </Route>
                <Route exact path="/result">
                    <Result statis={{
                        time: quizHook.time,
                        answer: quizHook.quizList.reduce((result, c) => c.isAns ? result + 1 : result, 0),
                        wrong: quizHook.quizList.reduce((result, c) => !c.isAns ? result + 1 : result, 0),
                    }} />
                </Route>
                <Route exact path="/wrong">
                    <Wrong wrongs={wrongHook.wrongList} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;