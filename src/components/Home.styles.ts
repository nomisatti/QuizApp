import styled ,{createGlobalStyle} from 'styled-components'

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
  display :flex;
  margin-bottom :100px ;
  flex-direction: column;
  align-items: center;

  > p  {
      color: #fff;
  }

  .score {
     
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .pass {
    color: green;
  }

  .fail {
    color:red;
  }

  

  img{
 
    margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
      }
      .start {
        
      }

      .toast{
        display:none !important;
      }
`
