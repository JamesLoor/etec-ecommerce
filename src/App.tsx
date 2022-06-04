import styled from 'styled-components'
import RouterMain from './routes/RouterMain'

const AppStyled = styled.div`
  h1 {
    font-size: 50px;
  }
`

const App = () => {
  return (
    <AppStyled>
      <RouterMain />
    </AppStyled>
  )
}

export default App
