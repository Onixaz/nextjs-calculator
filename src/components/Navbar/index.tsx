import React, { useState, useEffect } from 'react'
import * as NavbarStyles from './styled'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true)

  const router = useRouter()

  const changeNav = () => {
    if (window.scrollY < 40 && router.pathname === '/') {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  }, [scrollNav, router])

  return (
    <NavbarStyles.Nav scrollNav={scrollNav}>
      <NavbarStyles.Container>
        <NavbarStyles.MobileIcon onClick={toggle}>
          <FaBars />
        </NavbarStyles.MobileIcon>
        <Link href="/">
          <NavbarStyles.LogoWrapper>
            <NavbarStyles.LogoText>Logo.lt</NavbarStyles.LogoText>
          </NavbarStyles.LogoWrapper>
        </Link>

        <NavbarStyles.Menu>
          <NavbarStyles.Item>
            <Link href="/">
              <NavbarStyles.LinkText>Home</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>

          <NavbarStyles.Item>
            <Link href="/about">
              <NavbarStyles.LinkText>About</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
          <NavbarStyles.Item>
            <Link href="/contact">
              <NavbarStyles.LinkText>Contact</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
        </NavbarStyles.Menu>
      </NavbarStyles.Container>
    </NavbarStyles.Nav>
  )
}

export default Navbar
