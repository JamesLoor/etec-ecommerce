import * as React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'

const LayoutStyled = styled.div`
  /*  */
`

const Layout: React.FC = () => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  )
}

export default Layout
