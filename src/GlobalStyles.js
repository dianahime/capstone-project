import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    --primary: #006D77;
    --primaryLight: #83C5BE;
    --secondary: #E29578;
    --secondaryLight: #FFDDD2;
    --neutral: #EDF6F9;
  }

 * {
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }
  
  body {
     width: 100%;
     margin: 0 auto 80px auto;
     color: var(--primary);
     background-color: var(--neutral);
  }
  
  .bp3-overlay {
    background: none;
  }
  
  .bp3-drawer {
    background-color: var(--neutral);
  }
  
  .bp3-button-text {
    color: var(--neutral);
  }
  
  .toast {
    background-color: var(--primaryLight);
    color: var(--neutral);
    
    action {
      color: var(--neutral);
    }
  }
  
  a {
  color: inherit; 
  text-decoration: inherit;
  &:hover {
    color: inherit; 
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
}
`
