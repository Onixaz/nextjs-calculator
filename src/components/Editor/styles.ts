import styled from 'styled-components'

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: unset;
  font-size: 1rem;
  box-shadow: 0 0 25px rgba(116, 232, 145, 0.15);
  border: none;
  padding: 1rem;
  resize: none;
`

export const Label = styled.label`
  font-size: calc(1.7rem + 0.2vw);
  color: ${({ theme }) => theme.green};
  letter-spacing: 1.2px;
  font-weight: 200;
  margin: 2rem auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
