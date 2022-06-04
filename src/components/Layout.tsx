import * as React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const LayoutStyled = styled.div`
  /*  */
`

const Layout: React.FC = () => {
  return (
    <LayoutStyled>
      <Outlet />
    </LayoutStyled>
  )
}

export default Layout
