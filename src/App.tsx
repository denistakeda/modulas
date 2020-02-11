import * as React from 'react';
import { State } from '~/State';
import Quiz from '~/OOP/Quiz';
import QuizView from '~/OOP/components/Quiz';
import { connect } from 'react-redux';
import * as Actions from '~/Actions';

interface StateProps {
    quiz: Quiz;
}

function mapStateToProps(state: State): StateProps {
    return { quiz: state.quiz };
}

interface OwnProps {
    // Nothing here
}

type Props = StateProps & Actions.Actions & OwnProps;

function App({
    quiz,
    nextQuestion,
    previousQuestion,
    gotoQuestion,
    answerQuestion,
}: Props) {
    return (
        <div>
            <QuizView
                quiz={quiz}
                actions={{
                    nextQuestion,
                    previousQuestion,
                    gotoQuestion,
                    answerQuestion,
                }}
            />
        </div>
    );
}

export default connect<StateProps, Actions.Actions, OwnProps>(
    mapStateToProps,
    Actions.actions
)(App);
