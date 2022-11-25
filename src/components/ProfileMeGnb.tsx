import ProfileMeGnbAttr from "./ProfileMeGnbAttr"
import styled from "styled-components"
import { withDetails } from "../recoil/gnb"
import { useRecoilValue } from "recoil"

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

const ProfileMeGnb = () => {
    const data = useRecoilValue(withDetails)
    return (<>
        <Attrs>{ 
            data.map(attr => {
                return <ProfileMeGnbAttr 
                    label={`${attr.label}`}
                    link={attr.link}
                    isMain={attr.isMain}
                />
            })
        }</Attrs>
        <Line/>
    </>)
    }

export default ProfileMeGnb