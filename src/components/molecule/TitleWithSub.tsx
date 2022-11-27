import Title from "../atom/Title"
import styled from "styled-components"

interface Props {
    subtitle: string,
    children: string
}

const Style = styled.div`
    display: inline-flex;
    flex-direction: column;
    &>* {
        align-self: center;
        margin-bottom: 20px;
    }
`

const TitleWithSub = ({subtitle, children}: Props) => {
    return (
        <Style>
            <Title isMain={true}>{children}</Title>
            <Title isMain={false}>{subtitle}</Title>
        </Style>
    )
}


export default TitleWithSub