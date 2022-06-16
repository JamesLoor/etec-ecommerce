import * as React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const LayoutStyled = styled.div`
  main {
    padding-top: 76.34px;
  }
`

const Layout: React.FC = () => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LayoutStyled>
  )
}

export default Layout
