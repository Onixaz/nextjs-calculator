import * as SidebarStyles from './styled'

import Link from 'next/link'
import React from 'react'

interface SidebarProps {
  toggle: () => void
  isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ toggle, isOpen }) => {
  return (
    <SidebarStyles.Sidebar isOpen={isOpen} onClick={toggle}>
      <SidebarStyles.IconHolder>
        <SidebarStyles.Icon onClick={toggle}>
          <SidebarStyles.ClosedIcon />
        </SidebarStyles.Icon>
      </SidebarStyles.IconHolder>

      <SidebarStyles.Wrapper>
        <SidebarStyles.Menu>
          <SidebarStyles.LinkWrapper onClick={toggle}>
            <Link href="/">
              <SidebarStyles.LinkText>Home</SidebarStyles.LinkText>
            </Link>
          </SidebarStyles.LinkWrapper>

          <SidebarStyles.LinkWrapper>
            <Link href="/">
              <SidebarStyles.LinkText>About</SidebarStyles.LinkText>
            </Link>
          </SidebarStyles.LinkWrapper>
          <SidebarStyles.LinkWrapper>
            <Link href="/">
              <SidebarStyles.LinkText>Contact</SidebarStyles.LinkText>
            </Link>
          </SidebarStyles.LinkWrapper>
        </SidebarStyles.Menu>
      </SidebarStyles.Wrapper>
    </SidebarStyles.Sidebar>
  )
}

export default Sidebar
