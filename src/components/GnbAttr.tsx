import styled from "styled-components"

interface Props {
    label: string,
    link: string,
    isMain: boolean
}

interface CommonProps {
    isMain: boolean
}

const Common = styled.span<CommonProps>`
    transition: text-shadow 0.2s linear;
    font-size: ${ props => props.isMain ?
        props.theme.sizes.fonts.nav_main :
        props.theme.sizes.fonts.nav_sub
    };
    color: ${props => props.theme.colors.fonts.main};
    &:hover {
        text-shadow: ${props => props.theme.shadows.fonts.light}
    }
`

const GnbAttr = ({label, link, isMain}: Props) => (<a href={link}><Common isMain={isMain}>{label}</Common></a>)

export default GnbAttr