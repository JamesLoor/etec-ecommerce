import styled from 'styled-components'
import RouterMain from './routes/RouterMain'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './config/theme'

const AppStyled = styled.div`

`

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppStyled>
        <RouterMain />
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
