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
	  /*background-color: var(--neutral);
    color: var(--primary);*/
  }
  
  body {
     width: 100%;
     margin: 0 auto;
     margin-bottom: 80px;
     color: var(--primary);
     background-color: var(--neutral);
  }
  
  .bp3-overlay {
    background: none;
  }
  
  .toast {
    background-color: var(--secondaryLight);
    color: var( --secondary);
  }
`
