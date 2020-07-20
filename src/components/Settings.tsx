import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { SettingContext } from '../context/SettingContext'
import { GlobalStyle, Wrapper } from './Settings.styles'
import { Link } from 'react-router-dom'


function Settings() {

    const changeCategory = (e: any) => {

        setCategory(e.target.value)
        //setCategoryText(e.target.innerText)

        var index = e.nativeEvent.target.selectedIndex;
        setCategoryText(e.nativeEvent.target[index].text)
    }

    const [difficulty, setDiffuculty] = useState('')
    const [type, setType] = useState('')
    const [totalQuestions, setQuestions] = useState(5)
    const [category, setCategory] = useState('')
    const [categoryText, setCategoryText] = useState('Any')
    const [settings, setSettings] = useContext(SettingContext)

    const Submit = (e: any) => {
        e.preventDefault();
        console.log(difficulty)

        const newSettings = {
            difficulty,
            type,
            totalQuestions,
            category,
            categoryText
        }

        setSettings(newSettings)
        console.log("Settings : ", settings);


    }
    return (
        <>
        <GlobalStyle/>
        <Wrapper>
            <Form onSubmit={Submit}>
                <Form.Group controlId="QuizTotalQuestions">
                    <Form.Label>Total Questions</Form.Label>
                    <Form.Control type="number" min='5' defaultValue={totalQuestions} onChange={(e) => setQuestions(Number(e.target.value))} placeholder="Enter Total Questions" />
                </Form.Group>
                <Form.Group controlId="QuizDifficulty">
                    <Form.Label>Select Difficulty:</Form.Label>
                    <Form.Control as="select" onChange={(e) => setDiffuculty(e.target.value)} >
                        <option value=''>Any Type</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="QuizType">
                    <Form.Label>Select Type:</Form.Label>
                    <Form.Control as="select" onChange={(e) => setType(e.target.value)} >
                        <option value=''>Any Type</option>
                        <option value='multiple'>Multiple Choice</option>
                        <option value='boolean'>True / False</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="QuizCategory">
                    <Form.Label>Select Category:</Form.Label>
                    <Form.Control as="select" onChange={(e) => changeCategory(e)} >
                        <option value="">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </Form.Control>
                </Form.Group>

                <Link type='button' className='btn btn-danger' to='/'>Go Back</Link>


                <Button variant="primary" className='pull-right' type="submit">
                    Submit
                 </Button>
            </Form>
        </Wrapper>
        </>
    )
}

export default Settings;