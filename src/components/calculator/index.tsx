import { useState } from 'react'
import * as Styles from './styles'

interface CalculatorProps {}
const Calculator: React.FC<CalculatorProps> = () => {
  const [result, setResult] = useState('0')

  const handleClear = () => {
    setResult('0')
  }

  const handleClearLast = () => {
    setResult(result.length > 1 ? result.slice(0, -1) : '0')
  }

  const handleNumberBtns = (event: any) => {
    if (result === '0') {
      setResult(event.target.innerText)
    } else {
      setResult(result + event.target.innerText)
    }
  }

  const handleOperators = (event: any) => {
    const operator = event.target.innerText
    if (result === '0' && operator === '-') {
      setResult(operator)
    } else if (result !== '0') {
      setResult(result + operator)
    }
  }

  const handleDecimal = (event: any) => {
    const operatorSplit = /[÷*+\-]/g
    const lastElement = result.split(operatorSplit)[result.split(operatorSplit).length - 1]

    if (!lastElement.includes('.')) {
      setResult(result + event.target.innerText)
    }
  }

  const handleEqual = () => {
    try {
      let temp = result
      if (temp.endsWith('.')) {
        temp += '0'
      }

      let newResult: string[] = []

      const splitUp = temp.match(/[^\d()]+|[\d.]+/g)
      if (splitUp && !isNaN(Number(splitUp[splitUp.length - 1]))) {
        for (let i = 0; i < splitUp.length; i++) {
          if (!isNaN(Number(splitUp[i]))) {
            newResult.push(splitUp[i])
          } else {
            const last = splitUp[i].charAt(splitUp[i].length - 1)
            if (splitUp[i].length === 1 || (splitUp[i].length > 1 && last !== '-')) {
              newResult.push(last)
            } else if (last === '-' && splitUp[i].length > 1) {
              if (splitUp[i].charAt(splitUp[i].length - 2) !== '-') {
                newResult.push(splitUp[i].charAt(splitUp[i].length - 2) + last)
              } else {
                newResult.push(last)
              }
            }
          }
        }
      } else {
        setResult('Error')
      }

      setResult(eval(newResult.join('')).toString())
    } catch (err) {
      setResult('Error')
    }
  }

  return (
    <Styles.CalculatorWrapper id="calculator">
      <Styles.DisplayWrapper id="display-wrap">
        <Styles.Display id="display">{result}</Styles.Display>
      </Styles.DisplayWrapper>
      <Styles.ButtonWrapper>
        <Styles.Button id="clear" bigger onClick={() => handleClear()}>
          AC
        </Styles.Button>
        <Styles.Button onClick={() => handleClearLast()}>C</Styles.Button>
        <Styles.Button id="divide" onClick={(event) => handleOperators(event)}>
          /
        </Styles.Button>
        <Styles.Button id="seven" isNumber onClick={(event) => handleNumberBtns(event)}>
          7
        </Styles.Button>
        <Styles.Button id="eight" isNumber onClick={(event) => handleNumberBtns(event)}>
          8
        </Styles.Button>
        <Styles.Button id="nine" isNumber onClick={(event) => handleNumberBtns(event)}>
          9
        </Styles.Button>
        <Styles.Button id="multiply" onClick={(event) => handleOperators(event)}>
          *
        </Styles.Button>
        <Styles.Button id="four" isNumber onClick={(event) => handleNumberBtns(event)}>
          4
        </Styles.Button>
        <Styles.Button id="five" isNumber onClick={(event) => handleNumberBtns(event)}>
          5
        </Styles.Button>
        <Styles.Button id="six" isNumber onClick={(event) => handleNumberBtns(event)}>
          6
        </Styles.Button>
        <Styles.Button id="subtract" onClick={(event) => handleOperators(event)}>
          -
        </Styles.Button>
        <Styles.Button id="one" isNumber onClick={(event) => handleNumberBtns(event)}>
          1
        </Styles.Button>
        <Styles.Button id="two" isNumber onClick={(event) => handleNumberBtns(event)}>
          2
        </Styles.Button>
        <Styles.Button id="three" isNumber onClick={(event) => handleNumberBtns(event)}>
          3
        </Styles.Button>
        <Styles.Button id="add" onClick={(event) => handleOperators(event)}>
          +
        </Styles.Button>
        <Styles.Button id="zero" bigger isNumber onClick={(event) => handleNumberBtns(event)}>
          0
        </Styles.Button>
        <Styles.Button id="decimal" onClick={(event) => handleDecimal(event)}>
          .
        </Styles.Button>
        <Styles.Button id="equals" onClick={() => handleEqual()}>
          =
        </Styles.Button>
      </Styles.ButtonWrapper>
    </Styles.CalculatorWrapper>
  )
}

export default Calculator
