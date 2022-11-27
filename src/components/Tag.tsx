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
<<<<<<< HEAD
    <Style>{children ? '#' : ''}{children}</Style>
=======
    <Style>#{children}</Style>
>>>>>>> c410f3fbcc18a2d8d3d2209c1b1d7e08400a5329

export default Tag