import { AppProps } from 'next/app'
import '../../styles/global.css'
import "../../public/fonts/style.css"
import withTheme from '../../styles/withTheme'
import { RecoilRoot } from 'recoil'

const App = ({Component, pageProps}: AppProps) => {
    return <>{withTheme(() => (
        <RecoilRoot>
            <Component {...pageProps}/>
        </RecoilRoot>
    ))}</>
}

export default App