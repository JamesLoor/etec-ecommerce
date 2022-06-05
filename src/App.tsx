import { ThemeProvider } from 'styled-components'
import RouterMain from './routes/RouterMain'
import { defaultTheme } from './config/theme'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterMain />
    </ThemeProvider>
  )
}

export default App
