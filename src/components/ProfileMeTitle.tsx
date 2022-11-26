import styled from "styled-components"

const Style = styled.span<{isMain: boolean}>`
    font-family: 'Pretendard';
    font-weight: bold;
    font-size: ${ props => props.isMain 
    ? props.theme.sizes.fonts.title_main 
    : props.theme.sizes.fonts.title_sub
    };
    color: ${props => props.theme.colors.fonts.main};    
`

interface Props{
    title: string,
    isMain: boolean
}

const ProfileMeTitle = ({title, isMain}: Props) => (
    <Style isMain = {isMain}>{title}</Style>
)

export default ProfileMeTitle