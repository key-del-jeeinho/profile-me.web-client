import { AppProps } from 'next/app'
import '../../styles/global.css'
import "../../public/fonts/style.css"
import withTheme from '../../styles/withTheme'

const App = ({Component, pageProps}: AppProps) => {
    return <>{withTheme(() => <Component {...pageProps}/>)}</>
}

export default App