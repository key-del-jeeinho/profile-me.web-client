import styled,{ useTheme } from "styled-components"

interface Props {
    label: string,
    link: string,
    isMain: boolean
}

const ProfileMeGnbAttr = ({label, link, isMain}: Props) => {
    const theme = useTheme()    

    const Common = styled.span`
        transition: text-shadow 0.3s linear;
        font-size: ${ props => isMain ?
            props.theme.sizes.fonts.nav_main :
            props.theme.sizes.fonts.nav_sub
        };
        color: ${theme.colors.fonts.main};
        &:hover {
            text-shadow: ${theme.shadows.fonts.light}
        }
    `

    return (<a href={link}><Common>{label}</Common></a>)
}


export default ProfileMeGnbAttr