import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Quiz from './pages/quiz';
import Result from './pages/result';
import Wrong from './pages/wrong';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/quiz">
                    <Quiz quiz={{
                        idx: 0,
                        question: 'This Greek mythological figure is the god\/goddess of battle strategy (among other things)',
                        correct_answer: "Athena",
                        answers: ["Ares", "Artemis", "Apollo", "Athena"]
                    }} />
                </Route>
                <Route exact path="/result">
                    <Result statis={{
                        time: 380,
                        answer: 8,
                        wrong: 2,
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