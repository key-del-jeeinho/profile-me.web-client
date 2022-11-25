import styled,{ useTheme } from "styled-components"
import ProfileMeGnbAttr from "./ProfileMeGnbAttr"

const ProfileMeGnb = () => {
    const theme = useTheme()

    const Attrs = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    &>*{
        padding-left: 20px;
        padding-right: 20px;
    }
    `
    const Line = styled.div`
        display: block;
        width: 200px;
        border-bottom: ${theme.sizes.strokes.regular} ${theme.colors.strokes.nav} solid;
        margin: 10px auto;
    `

    return (<>
        <Attrs>
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
            />
        </Attrs>
        <Line/>
    </>)
}

export default ProfileMeGnb