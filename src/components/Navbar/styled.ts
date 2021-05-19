import styled from 'styled-components'

export const LinkText = styled.a`
  font-size: 1.5rem;
  letter-spacing: 1.1px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  &:hover {
    color: red;
    transition: 0.2s ease-in-out;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;
  margin-left: 1rem;
`

export const LogoText = styled.a`
  cursor: pointer;
  font-size: 2rem;
  color: #000;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
`

export const LogoImg = styled.img`
  position: absolute;
  top: 45%;
  left: 30%;
  transform: translate(-50%, -50%);
`

export const CategoryList = styled.ul<{ show: boolean }>`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: all 0.2s ease-in;
  position: absolute;
  opacity: ${({ show }) => (show ? '1' : '0')};
  background: ${({ theme }) => theme.lightWhite};
  width: 200px;
  min-height: 150px;
  top: 200%;
  left: 150%;
  border-radius: 5px;
  transform: translate(-50%, -50%);

  :after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    z-index: -1;
    left: 5px;
    bottom: 130px;
    border-left: 25px solid transparent;
    border-bottom: 25px solid ${({ theme }) => theme.lightWhite};
    transform: rotate(225deg);
  }
`

export const CategoryListText = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.75rem 0.5rem;
  color: #000;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 1px;

  &:hover {
    background: ${({ theme }) => theme.lightGrey};
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    color: #000;
    display: block;
    position: absolute;
    padding-top: 10px;
    top: 50%;
    right: 2%;
    font-size: 2rem;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 992px) {
    display: none;
  }
`

export const Item = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 0.8rem;
`

export const BtnWrapper = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  position: relative;
`
export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav, theme }) => (scrollNav ? 'transparent' : theme.brown)};
  transition: all 0.2s ease-in;
  height: 80px;
  width: 100%;

  margin-top: -80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 99;
  ${LinkText} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryBlack : theme.primaryWhite)};
    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${({ theme }) => theme.primaryPurple};
    }
  }
  ${MobileIcon} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
  }
`
