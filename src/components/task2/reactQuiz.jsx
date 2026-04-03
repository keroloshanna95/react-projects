import { useReducer, useEffect } from "react";

import Startscreen from "./startScreen.jsx";
import Main from "./main.jsx";
import Question from "./question.jsx";
import Loading from "./loading.jsx";
import Footer from "./footer.jsx";
import NextButton from "./button.jsx";

function reducer(state, action) {
  
  const isLastQuestion = state.index === state.questions.length - 1;

  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "nextQuestion":
      return {
        ...state,
        index: isLastQuestion ? state.index : state.index + 1,
        status: isLastQuestion ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action type");
  }
};


const initialState = {
  questions: [],
  status: "loading",    // loading, ready, active, finished
  error: null,
  index: 0,
  points: 0,
};

function ReactQuiz() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index } = state;
  const maxQuestionIndex = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  
  
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }));
  }, []);

  return (
    <div className="Quiz bg-[#2a2c2f] h-screen text-white">
      
      {status === "loading" && <Loading />}
      
      {status === "ready" && <Startscreen dispatch={dispatch} />}
      
      {status === "active" && (
        <Main questions={questions}>
            <Question
              question={questions[index]}
              index={index}
              maxQuestionIndex={maxQuestionIndex}
              totalPoints={totalPoints}
            />
            <Footer>
              <NextButton dispatch={dispatch} />
            </Footer>
        </Main>
      )}
    </div>
  );
}

export default ReactQuiz;
