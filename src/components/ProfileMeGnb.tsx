import ProfileMeGnbAttr from "./ProfileMeGnbAttr"
import styled from "styled-components"

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
    border-bottom: ${props => props.theme.sizes.strokes.regular} ${props => props.theme.colors.strokes.nav} solid;
    margin: 10px auto;
`

const ProfileMeGnb = () => (<>
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

export default ProfileMeGnb