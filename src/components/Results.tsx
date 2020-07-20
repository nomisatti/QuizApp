import React from 'react'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'


function QuestionsCards(props: { userAnswers: any, score: number }) {
    const percentage = (props.score / props.userAnswers.length) * 100
    
 
    return (
        <Wrapper>

            <p className={percentage > 50 ? 'score pass' : 'score fail'}> Score : {props.score}</p>


            <div>
                {Object.keys(props.userAnswers).map(answer => {
                    const score = props.userAnswers[answer];
                    return (
                        <div>
                            Question :<p dangerouslySetInnerHTML={{ __html: score.question }} />
                            <ButtonWrapper
                                key={answer}
                                correct={score?.correctAnswer === score.answer}
                                userClicked={score?.answer === score.answer}

                            >
                                <button disabled={props.userAnswers} value={answer} >
                                    You Answer : <span>{score.answer}</span>
                                </button>
                            </ButtonWrapper>
                            <ButtonWrapper
                                key={score.question}
                                correct={score?.answer === score.answer}
                                userClicked={score?.answer === score.answer}

                            >
                                <button disabled={props.userAnswers} value={answer} >
                                    Correct Answer : <span>{score.correctAnswer}</span>
                                </button>
                            </ButtonWrapper>
                        </div>

                    )
                })}

            </div>


        </Wrapper>
    )
}

export default QuestionsCards

/* <p className="number">Question : {props.questionNumber} / {props.totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: props.question }} />
             {userAnswers.map( (answer : any)=> (
                    <ButtonWrapper
                        key={answer}
                        correct = {userAnswers?.correctAnswer === answer}
                        userClicked = {userAnswers?.answer === answer}

                    >
                        <button disabled={userAnswers} value={answer} >
                            <span>{answer}</span>
                        </button>
                    </ButtonWrapper>
                ))}
           */