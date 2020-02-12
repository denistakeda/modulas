import * as React from 'react';
import { State, Mode } from '~/State';
import OOPQuiz from '~/OOP/Quiz';
import OOPQuizView from '~/OOP/components/Quiz';
import { connect } from 'react-redux';
import * as Actions from '~/Actions';
import * as FPQuiz from '~/FP/Quiz';

interface StateProps {
    mode: Mode;
    quiz: OOPQuiz;
    fpQuiz: FPQuiz.Quiz;
}

function mapStateToProps(state: State): StateProps {
    return {
        mode: state.mode,
        quiz: state.quiz,
        fpQuiz: state.fpQuiz,
    };
}

interface OwnProps {
    // Nothing here
}

type Props = StateProps & Actions.Actions & OwnProps;

function App({
    // State
    mode,
    quiz,
    fpQuiz,

    // General actions
    selectOOP,
    selectFP,

    // OOP actions
    oopNextQuestion,
    oopPreviousQuestion,
    oopGotoQuestion,
    oopAnswerQuestion,
    oopFinishQuiz,

    //FP actions
    fpNextQuestion,
    fpPreviousQuestion,
    fpGotoQuestion,
    fpAnswerQuestion,
    fpFinishQuiz,
}: Props) {
    return (
        <div className="app">
            {renderModeSelectionPanel(mode, selectOOP, selectFP)}

            {mode == 'OOP' ? (
                <OOPQuizView
                    quiz={quiz}
                    actions={{
                        oopNextQuestion,
                        oopPreviousQuestion,
                        oopGotoQuestion,
                        oopAnswerQuestion,
                        oopFinishQuiz,
                    }}
                />
            ) : (
                <FPQuiz.View
                    quiz={fpQuiz}
                    actions={{
                        fpNextQuestion,
                        fpPreviousQuestion,
                        fpGotoQuestion,
                        fpAnswerQuestion,
                        fpFinishQuiz,
                    }}
                />
            )}
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

export default connect<StateProps, Actions.Actions, OwnProps, State>(
    mapStateToProps,
    Actions.actions
)(App);
