import React from "react"
import styled, { useTheme } from "styled-components"
import { useTextWidth } from '@imagemarker/use-text-width';

interface Props {
    nameState: [string, (update: ((prevState: string) => string) | string) => void],
    placeholder: string,
    isChangeable: boolean
}

const Style = styled.div<{
    placeholderWidth: number,
    boxWidth: number
}>`
    & > input {
        width: ${props => props.boxWidth}px;
        color: ${props => props.theme.colors.fonts.main};
        font-family: "Pretendard";
        font-weight: ${props => props.theme.sizes.font_weights.regular};
        font-size: ${props => props.theme.sizes.fonts.title_sub};
        text-align: center;
        caret-color: transparent;
        border: none;
        :focus {
            outline: none;
            text-decoration: underline;
            text-decoration-thickness: ${props => props.theme.sizes.strokes.regular};
        }
        ::placeholder {
            color: ${props => props.theme.colors.fonts.main};
            text-align: center;
        }
    }
    & > input::-webkit-input-placeholder {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'%3E%3Cpath fill='%23000' d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293v.001Zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814v-.001Z'/%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 1 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11Z' clip-rule='evenodd'/%3E%3C/svg%3E") ;
        background-size: contain;
        background-position: ${props => props.placeholderWidth}px center;
        background-repeat: no-repeat;
        text-align: center;
        text-indent: 0;
    }
`

const NameBox = ({nameState, placeholder, isChangeable}: Props) => {
    const theme = useTheme();
    const [name, setName] = nameState
    const size = useTextWidth({text: placeholder, font: `${theme.sizes.fonts.title_sub} Pretendard`})
    const boxWidth = getBoxWidth(size)
    const placeholderWidth = getWidth(boxWidth, size)
    return (
        <>
            <Style placeholderWidth={placeholderWidth} boxWidth={boxWidth}>
                <input
                    value={name}
                    placeholder={placeholder}
                    onChange={e => onChange(e, setName)}
                    readOnly={!isChangeable}
                />
            </Style>
        </>
    )
}

export default NameBox

function onChange(
    e: React.ChangeEvent<HTMLInputElement>, 
    setText: (update: ((prevState: string) => string) | string) => void
) {
    setText(e.target.value)
}
function getBoxWidth(size: number) {
    return (parseInt("" + size) / 100 + 1) * 100
}
function getWidth(boxWidth: number, size: number) {
    return boxWidth -( (boxWidth - parseInt("" + size)) / 2) + 5
}