import styled,{ useTheme } from "styled-components"
import ProfileMeGnbAttr from "./ProfileMeGnbAttr"

const ProfileMeGnb = () => {
    const theme = useTheme()

    const Meta = styled.div`
    align-items: center;
    `
    const Style = styled.span`
    display: grid;
    padding-bottom: 10px;
    &>*{
        margin: auto;
        grid-template-columns: repeat(3, 1fr);
    }  
    &>*>* {
        padding-left: 20px;
        padding-right: 20px;
    }
    
    &::after {
        content: "";
        display: block;
        width: 200px;
        border-bottom: ${theme.sizes.strokes.regular} ${theme.colors.strokes.nav} solid;
        margin: 10px auto;
    } 
    `

    return (<Meta><Style><span>
        <ProfileMeGnbAttr
            label="Profile"
            link="/profile"
            isMain={false}
        />
        <ProfileMeGnbAttr
            label="Main"
            link="/"
            isMain={true}
        />
        <ProfileMeGnbAttr
            label="Signin"
            link="/siginin"
            isMain={false}
        /></span>
    </Style></Meta>)
}

export default ProfileMeGnb