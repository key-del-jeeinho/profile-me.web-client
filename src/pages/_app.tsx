import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../../styles/global.css'
import regularTheme from '../../styles/theme'
import GlobalStyle from '../../styles/GlobalStyle'

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <ThemeProvider theme={regularTheme}>
                <GlobalStyle />
                <Component {...pageProps}/>
            </ThemeProvider>
        </>
    )
}

export default App