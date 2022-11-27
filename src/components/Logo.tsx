import styled from "styled-components"

type LogoType = 'simple' | 'basic'

interface Props {
    type: LogoType
    isAnimated: boolean
}

const Circle = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    backdrop-filter: invert(100%);
    margin: 0px 50px 0px 50px;
`
const Lines = styled.div `
    position: absolute;
`

const Rectengle = styled.div`
    @keyframes box-ani {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(0px, -20px);
        }
    }
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 20px;
    background-image: linear-gradient(180deg, #0000 0%, #000 50%, #0000 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    margin: 10px 0px 10px 0px;
    animation: box-ani 1s linear forwards infinite;
`

const Style = styled.div`
    width: 200px;
    height: 100px;
`


const Logo = ({type, isAnimated}: Props) => {
    return (<>
        <Style>
            <Lines>
                <Rectengle/>
                <Rectengle/>
                <Rectengle/>
                <Rectengle/>
            </Lines>
            <Circle/>
        </Style>
    </>)
}

export default Logo