import { ThemeProvider } from 'styled-components'
import '../styles/global.css'
import { regularTheme } from '../theme/theme'

const App = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={regularTheme}>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default App