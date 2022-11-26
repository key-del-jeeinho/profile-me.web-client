import { DefaultTheme } from 'styled-components'

const regularTheme: DefaultTheme = {
    shadows: {
        fonts: {
            thin: "0px 0px 1px #000",
            light: "0px 0px 2px #000"
        },
        box: {
            regular: "0px 0px 5px 1px #000",
            strong: "0px 0px 9px 2px #000"
        }
    },
    sizes: {
        fonts: {
            regular: "10px",
            bigger: "14px",
            btn_small: "14px",
            btn_regular: "20px",
            title_sub: "20px",
            title_main: "48px",
            nav_sub: "14px",
            nav_main: "20px",
            tag_regular: "14px"
        },
        font_weights: {
            regular: 500
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
            input: "#FFFFFF",
            scroll_thumb: "#000000",
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