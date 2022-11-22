import { DefaultTheme } from 'styled-components'

const regularTheme: DefaultTheme = {
    sizes: {
        fonts: {
            _unit: 'pt',
            regular: 10,
            bigger: 14,
            btn_small: 14,
            btn_regular: 20,
            title_sub: 20,
            title_main: 48,
            tag_regular: 14
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
            btn_form: "#000000",
            btn_cta: "#000000",
            input: "#000000",
            input_unwritable: "#BBBBBB"
        }
    }
}

export default regularTheme