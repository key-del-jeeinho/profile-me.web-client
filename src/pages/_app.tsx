import { AppProps } from 'next/app'
import '../../styles/global.css'
import "../../public/fonts/style.css"
import withTheme from '../../styles/withTheme'
import withRecoil from '../recoil/withRecoil'

const App = ({Component, pageProps}: AppProps) => {
    return <>{withTheme(() => (
        withRecoil(() => (
            <Component {...pageProps}/>
        ))
    ))}</>
}

export default App