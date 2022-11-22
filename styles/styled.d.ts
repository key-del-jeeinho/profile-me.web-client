import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        sizes: {
            fonts: {
                _unit: string,
                regular: number,
                bigger: number,
                btn_small: number,
                btn_regular: number,
                title_sub: number,
                title_main: number,
                tag_regular: number
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
