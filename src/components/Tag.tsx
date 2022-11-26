import styled from "styled-components"

const Style = styled.span<{isPlaceholder: boolean}>`
    font-size: ${props => props.theme.sizes.fonts.tag_regular};
    font-weight: ${props => props.theme.sizes.font_weights.light};
    color: ${props => props.isPlaceholder 
        ? props.theme.colors.fonts.placeholder
        : props.theme.colors.fonts.main
    };
`

interface Props {
    children: string,
    isPlaceholder: boolean
}

const Tag = ({children, isPlaceholder}: Props) =>
    <Style isPlaceholder={isPlaceholder}>#{children}</Style>

export default Tag