import styled from "styled-components"

const Style = styled.span`
    font-size: ${props => props.theme.sizes.fonts.tag_regular};
    font-weight: ${props => props.theme.sizes.font_weights.light};
    color: ${props => props.theme.colors.fonts.main};
`

interface Props {
    children: string,
}

const Tag = ({children}: Props) =>
    <Style>{children ? '#' : ''}{children}</Style>

export default Tag