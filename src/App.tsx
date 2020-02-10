import * as React from 'react';
import { State } from '~/State';
import {QuizView, default as Quiz} from '~/OOP/Quiz';
import { connect } from 'react-redux';
import * as Actions from '~/Actions';

interface StateProps {
    quiz: Quiz;
}

function mapStateToProps(state: State): StateProps {
    return { quiz: state.quiz };
}

interface DispatchProps {
    nextQuestion: () => void;
    previousQuestion: () => void;
    gotoQuestion: (n: number) => void;
}

const mapDispatchToProps: DispatchProps = {
    nextQuestion: Actions.nextQuestion,
    previousQuestion: Actions.previousQuestion,
    gotoQuestion: Actions.gotoQuestion,
};

interface OwnProps {
    // Nothing here
}

type Props = StateProps & DispatchProps & OwnProps;

function App(props: Props) {
    return <div><QuizView quiz={props.quiz} /></div>;
}

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(App);
