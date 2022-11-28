import Title from "../atom/Title"
import styled from "styled-components"

interface Props {
    subtitle: string,
    children: string
}

const Style = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    .title {
        margin-bottom: 20px;
    }
`

const TitleWithSub = ({subtitle, children}: Props) => {
    return (
        <Style>
            <span className="title"><Title isMain={true}>{children}</Title></span>
            <Title isMain={false}>{subtitle}</Title>
        </Style>
    )
}


export default TitleWithSub