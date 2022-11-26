import styled from "styled-components"

const Style = styled.span<{size: 'regular' | 'bigger'}>`
    font-size: ${props => {
        switch(props.size) {
            case 'regular': return props.theme.sizes.fonts.regular
            case 'bigger': return props.theme.sizes.fonts.bigger
        }}};
    color: ${props => props.theme.colors.fonts.main};
`

interface Props {
    children: string,
    size: 'regular' | 'bigger'
}

const Text = ({children, size}: Props) => 
    <Style size={size}>{children}</Style>

export default Text