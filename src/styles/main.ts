import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box; 
    outline: none;
   
  }

  body{
    background: ${({ theme }) => theme.lightWhite};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  a {
    text-decoration: none;
    
  }
 
  img{
    max-width: 100%;
  }

    

  
`

export default GlobalStyle
