import styled from 'styled-components'

export const Container = styled.main`
  margin-top: -20px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  padding: 1rem;
  max-width: 1400px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  min-height: 70vh;
  margin: 0 auto;
`

export const Link = styled.a`
  color: #000;
  margin: 2rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #90c0e6;
  }
`
