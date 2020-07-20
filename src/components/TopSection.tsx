import React from 'react'
import headerImage from '../images/header-image.png'
import { Spinner} from 'react-bootstrap';


function TopSection(props: { gameOver: boolean, userAnswers: any, totalQuestion: number, loading: boolean, score: number }) {
    return (
        <>
            <img src={headerImage} alt={'headerImage'} />


            {props.loading ? (<Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            ) : null}
        </>
    )
}

export default TopSection;