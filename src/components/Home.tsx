import React, { useState, useContext } from 'react';
import QuestionsCards from './QuestionsCards'
import { FetchQuiz, QuestionState } from '../api/API'
import { SettingContext } from '../context/SettingContext'
import TopSection from './TopSection'
import Result from './Results'


// importing sytles
import { GlobalStyle, Wrapper } from './Home.styles'

type Answers = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
function Home() {

  const [settings] = useContext(SettingContext)
  const totalQuestion = settings.totalQuestions ? settings.totalQuestions : 3;

  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<Answers[]>([]);
  const [result, setResult] = useState(false)


  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setResult(false);
    console.log("Settings : ", settings);
    const fetchQuestions = await FetchQuiz(settings);
    console.log(fetchQuestions)
    setQuestions(fetchQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswers = (answer: string) => {
    if (!gameOver) {
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);

      // Saving Answers in Array for later use :
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,

      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const seeResults = () => {
    setResult(true);
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === totalQuestion) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  }

  return (
      <>
        <GlobalStyle />

        <Wrapper>
          <TopSection
            gameOver={gameOver}
            userAnswers={userAnswers}
            totalQuestion={totalQuestion}
            loading={loading}
            score={score}
          />
          {gameOver || userAnswers.length === totalQuestion ? (
            <button className="start" onClick={startQuiz} >
              {userAnswers.length === totalQuestion ? 'Start a New Quiz' : 'Start'}
            </button>

          ) : null}
          {userAnswers.length === totalQuestion ? (
            <button className="start" onClick={seeResults} >
              {result ? 'Results' : 'See Results'}
            </button>

          ) : null}

          {!loading && !gameOver && !result ? (
            <QuestionsCards
              question={questions[number].question}
              answers={questions[number].answers}
              callback={checkAnswers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              questionNumber={number + 1}
              totalQuestions={totalQuestion}

            />
          ) : null}
          {!loading && result ? (
            <Result
              userAnswers={userAnswers}
              score={score}
            />

          ) : null}



          {!gameOver && !loading && userAnswers.length === number + 1 && number !== totalQuestion - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}

        </Wrapper>
        </>

  );
}

export default Home;
