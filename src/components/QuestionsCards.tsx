import React from 'react'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'



function QuestionsCards(props:
    {
        question: string,
        answers: string[],
        callback: any,
        userAnswer: any,
        questionNumber: number,
        totalQuestions: number
    }) {

    return (
        <Wrapper>

          <p className="number">Question : {props.questionNumber} / {props.totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: props.question }} />
            <div>
                {props.answers.map(answer => (
                    <ButtonWrapper
                        key={answer}
                        correct = {props.userAnswer?.correctAnswer === answer}
                        userClicked = {props.userAnswer?.answer === answer}

                    >
                        <button disabled={props.userAnswer} value={answer} dangerouslySetInnerHTML={{ __html: answer }} onClick={(e) => props.callback(answer)} />
                        
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionsCards