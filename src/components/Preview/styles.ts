import styled from 'styled-components'

export const Markdown = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.lightWhite};
  box-shadow: 0 0 25px rgba(116, 232, 145, 0.15);
  border: none;
  padding: 0rem 1rem;

  blockquote {
    background: #f9f9f9;
    font-style: italic;
    line-height: 1.6;
    letter-spacing: 0.5px;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: '\\201C''\\201D''\\2018''\\2019';
  }

  blockquote:before {
    color: #ccc;

    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  }
`

export const Label = styled.p`
  font-size: calc(1.7rem + 0.2vw);
  color: ${({ theme }) => theme.green};
  letter-spacing: 1.2px;
  font-weight: 200;
  margin: 2rem auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
