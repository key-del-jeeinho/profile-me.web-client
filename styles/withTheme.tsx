import { ThemeProvider } from "styled-components";
import regularTheme from './theme'
import GlobalStyle from "./GlobalStyle";

const withTheme = (contentFn: any) => (
    <ThemeProvider theme = {regularTheme}>
    <GlobalStyle />
        {contentFn()}
    </ThemeProvider>
)

export default withTheme