import * as React from 'react';
import { State, Mode } from '~/State';
import Quiz from '~/OOP/Quiz';
import QuizView from '~/OOP/components/Quiz';
import { connect } from 'react-redux';
import * as Actions from '~/Actions';

interface StateProps {
    mode: Mode;
    quiz: Quiz;
}

function mapStateToProps(state: State): StateProps {
    return { mode: state.mode, quiz: state.quiz };
}

interface OwnProps {
    // Nothing here
}

type Props = StateProps & Actions.Actions & OwnProps;

function App({
    mode,
    quiz,
    selectOOP,
    selectFP,
    oopNextQuestion,
    oopPreviousQuestion,
    oopGotoQuestion,
    oopAnswerQuestion,
    oopFinishQuiz,
}: Props) {
    return (
        <div className="app">
            {renderModeSelectionPanel(mode, selectOOP, selectFP)}
            <QuizView
                quiz={quiz}
                actions={{
                    oopNextQuestion,
                    oopPreviousQuestion,
                    oopGotoQuestion,
                    oopAnswerQuestion,
                    oopFinishQuiz,
                }}
            />
        </div>
    );
}

function renderModeSelectionPanel(
    mode: Mode,
    selectOOP: typeof Actions.selectOOP,
    selectFP: typeof Actions.selectFP
) {
    return (
        <div className="mode-selector">
            <button
                onClick={selectOOP}
                className={mode == 'OOP' ? 'selected' : ''}
            >
                OOP
            </button>
            <button
                onClick={selectFP}
                className={mode == 'FP' ? 'selected' : ''}
            >
                FP
            </button>
        </div>
    );
}

export default connect<StateProps, Actions.Actions, OwnProps>(
    mapStateToProps,
    Actions.actions
)(App);
