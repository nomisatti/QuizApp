import styled ,{createGlobalStyle}  from 'styled-components'
import backgroundImage from '../images/quiz-image.jpg'


export const GlobalStyle = createGlobalStyle `

  html {
       height:100%;
  }
  
  body {

      background-image:url(${backgroundImage});
      background-size : cover;
      margin :0 ;
      padding : 0 2px;
     // display: flex;
     // justify-content: center;
  }

  * {
      box-sizing: border-box;
      font-family : 'Poppins' , sans-serif;
  }
`;


export const Wrapper = styled.div `

max-width: 80%;
margin: 100px auto;
background: #ebfeff;
border-radius: 10px;
border: 2px solid #0085a3;
padding: 20px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

p {
  font-size: 1rem;
}
label {
    font-size:1rem !important;
    font-weight:600;
}
`