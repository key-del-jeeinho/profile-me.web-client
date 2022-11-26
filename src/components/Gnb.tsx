import GnbAttr from "./GnbAttr"
import styled from "styled-components"
import gnbAtom, { withDetails } from "../recoil/gnb"
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
const Attr = styled.span<{order: number}> `
    order: ${props => props.order};
`
const Line = styled.div`
    display: block;
    width: 200px;
    border-bottom: ${props => props.theme.sizes.strokes.regular} ${props => props.theme.colors.strokes.nav} solid;
    margin: 10px auto;
`

const Gnb = () => {
    const data = useRecoilValue(withDetails)
    return (<>
        <Attrs>{ 
            data.map((attr, idx) => (
                        <Attr order={attr.order} >
                            <GnbAttr 
                                label={`${attr.label}`}
                                link={attr.link}
                                isMain={attr.isMain}
                            />
                        </Attr>
                    ))
        }</Attrs>
        <Line/>
    </>)
}

export default Gnb