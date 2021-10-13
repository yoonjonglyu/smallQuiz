import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Quiz from './pages/quiz';
import Result from './pages/result';
import Wrong from './pages/wrong';

import { quizState } from './lib/custom/quiz';

const App: React.FC = () => {
    const quizHook = quizState();
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
                    <Wrong wrongs={[
                        {
                            question: 'This Greek mythological figure is the god\/goddess of battle strategy (among other things)',
                            correct_answer: "Athena"
                        }
                    ]} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;