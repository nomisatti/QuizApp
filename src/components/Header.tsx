import React, { useContext } from 'react'
import { Navbar, Nav, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { SettingContext } from '../context/SettingContext'
import QuizLogo from '../images/Quizlogo.png'
function Header() {

  const [settings] = useContext(SettingContext)
  const totalQuestion = settings.totalQuestions ? settings.totalQuestions : 10;
  const difficulty = settings.difficulty ? (settings.difficulty).toUpperCase() : 'Any';
  const type = settings.type ? (settings.type).toUpperCase() : 'Any';
  const categoryText = settings.categoryText ? (settings.categoryText).toUpperCase() : 'Any';
  return (
    <div>
      <Navbar sticky="top" bg="light" variant="light">
        <Link className="nav-link mainlogo" to="/">
          <img
            src={QuizLogo}
            width="100"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <Nav className="mr-auto">
          <Link className="nav-link mainlogo" to="/">Home</Link>
          
        </Nav>

        <Link type='button' className='btn btn-primary' to='/Setting'><span className="fa fa-cog"> </span> Settings</Link>

      </Navbar>
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          minHeight: '100px',

        }}
      >
        <Toast style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}>
          <Toast.Header>
            <strong className="mr-auto ">Current Settings</strong>

          </Toast.Header>
          <Toast.Body>Total Questions : {totalQuestion}</Toast.Body>
          <Toast.Body>Difficulty : {difficulty}</Toast.Body>
          <Toast.Body>Type : {type}</Toast.Body>
          <Toast.Body>Category : {categoryText}</Toast.Body>
          <Toast.Body>To change settings , go to Setting tab</Toast.Body>

        </Toast>
      </div>
    </div>
  )
}

export default Header;