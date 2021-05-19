import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
  }

  body{
    background: ${({ theme }) => theme.lightWhite};
  }
  
  a {
    text-decoration: none;
    
  }
  ul {
    list-style: none
  }

  img{
    max-width: 100%;
  }

  
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    box-shadow: inherit;
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.lightWhite} inset !important;
}
  
`

export default GlobalStyle
