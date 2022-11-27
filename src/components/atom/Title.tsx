import styled from "styled-components"

const Style = styled.span<{isMain: boolean}>`
    font-weight: ${props => props.isMain ? 'bold' : 'regular'};
    font-size: ${ props => props.isMain 
    ? props.theme.sizes.fonts.title_main 
    : props.theme.sizes.fonts.title_sub
    };
    color: ${props => props.theme.colors.fonts.main};    
`

interface Props{
    children: string,
    isMain: boolean
}

const Title = ({children, isMain}: Props) => 
    <Style isMain = {isMain}>{children}</Style>

export default Title