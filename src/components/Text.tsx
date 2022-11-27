import styled from "styled-components"

type TextType = 'normal' | 'error'

const Style = styled.span<{size: 'regular' | 'bigger', type: TextType}>`
    font-size: ${props => {
        switch(props.size) {
            case 'regular': return props.theme.sizes.fonts.regular
            case 'bigger': return props.theme.sizes.fonts.bigger
        }}};
    color: ${props => {
        switch(props.type) {
            case 'normal': return props.theme.colors.fonts.main
            case 'error': return props.theme.colors.fonts.error
        }}
    };
`

interface Props {
    children: string,
    size: 'regular' | 'bigger',
    type: TextType
}

const Text = ({children, size, type}: Props) => 
    <Style size={size} type={type}>{children}</Style>

export default Text