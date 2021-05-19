import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const ClosedIcon = styled(FaTimes)`
  color: #ffffff;
  transform: scale(1.1);
`

export const Icon = styled.div`
  position: absolute;
  padding-top: 10px;
  top: 50%;
  right: 2%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

export const Wrapper = styled.div`
  margin-top: -80px;
  color: #fff;
  position: relative;
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const Route = styled.button`
  border-radius: 50px;
  background: ${({ theme }) => theme.primaryRed};
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const Menu = styled.ul`
  display: grid;
  padding: 0 40px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat (6, 60px);
  }
`

export const LinkWrapper = styled.button`
  outline: none;
  border: none;
  background: #0d0d0d; //change color
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LinkText = styled.a`
  font-size: 1.5rem;
  letter-spacing: 1.1px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: red;
    transition: 0.2s ease-in-out;
  }
`
export const IconHolder = styled.div`
  //display: flex;
  //margin-top: -80px;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin: auto;
  position: fixed;
`
