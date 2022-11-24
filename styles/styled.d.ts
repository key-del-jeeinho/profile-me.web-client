import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        shadows: {
            fonts: {
                thin: string
                light: string
            }
        },
        sizes: {
            fonts: {
                regular: string,
                bigger: string,
                btn_small: string,
                btn_regular: string,
                title_sub: string,
                title_main: string,
                nav_sub: string,
                nav_main: string,
                tag_regular: string
            }
        },
        colors: {
            fonts: {
                main: string,
                error: string,
                placeholder: string,
                btn_form: string,
                btn_cta: string,
            },
            backgrounds: {
                btn_form: string,
                btn_cta: string,
                select: string,
                select_hover: string,
                input: string
            },
            strokes: {
                btn_form: string,
                btn_cta: string,
                input: string,
                input_unwritable: string
            }
        }
    }
}
