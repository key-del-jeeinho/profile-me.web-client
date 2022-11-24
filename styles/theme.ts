import { DefaultTheme } from 'styled-components'

const regularTheme: DefaultTheme = {
    shadows: {
        fonts: {
            thin: "0px 0px 1px #000",
            light: "0px 0px 2px #000"
        }
    },
    sizes: {
        fonts: {
            regular: "10pt",
            bigger: "14pt",
            btn_small: "14pt",
            btn_regular: "20pt",
            title_sub: "20pt",
            title_main: "48pt",
            nav_sub: "14pt",
            nav_main: "20pt",
            tag_regular: "14pt"
        },
        strokes: {
            regular: "1px"
        }
    },
    colors: {
        fonts: {
            main: "#000000",
            error: "#FF7171",
            placeholder: "#BBBBBB",
            btn_form: "#FFFFFF",
            btn_cta: "#000000",
        },
        backgrounds: {
            btn_form: "#000000",
            btn_cta: "#FFFFFF",
            select: "#FFFFFF",
            select_hover: "F7F7F7",
            input: "#FFFFFF"
        },
        strokes: {
            nav: "#000000",
            btn_form: "#000000",
            btn_cta: "#000000",
            input: "#000000",
            input_unwritable: "#BBBBBB"
        }
    }
}

export default regularTheme