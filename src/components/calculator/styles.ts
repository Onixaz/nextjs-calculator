import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  width: 90%;
  max-width: 430px;
  padding: 25px;
  border-radius: 10px;
  border: 3px solid #90c0e6;
`

export const DisplayWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 5px;
  text-align: right;
  border: 1px solid #90c0e6;
  border-radius: 4px;
`

export const Display = styled.div`
  height: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  font-weight: 600;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Button = styled.button<{ bigger?: boolean; isNumber?: boolean }>`
  width: ${({ bigger }) => (bigger ? `calc(50% - 4px);` : `calc(25% - 4px);`)};
  font-size: 1.5rem;
  text-align: center;
  line-height: 5rem;
  margin: 2px 0;
  background: ${({ isNumber }) => (isNumber ? `#fdfdfd;` : `#e7e7e7;`)};
  color: #0f0f0f;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  outline: 0;
  border: 1px solid #90c0e6;
  transition: 0.3s;

  &:hover {
    background: #cccccc;
  }
`
