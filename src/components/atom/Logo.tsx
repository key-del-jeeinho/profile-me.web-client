import styled from "styled-components"

type LogoType = 'simple' | 'basic'

interface Props {
    type: LogoType
    isAnimated: boolean
}

const Circle = styled.div`
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    backdrop-filter: invert(100%);
    margin: 0px 40px 0px 40px;
`

const Rectengle = styled.div<{isAnimated: boolean}>`
    @keyframes logo-anim {
        from { transform: translate(0, 0); }
        to { transform: translate(0px, -40px); }
    }
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 20px;
    background-image: linear-gradient(180deg, #0000 0%, #000 50%, #0000 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    margin-top: 20px;
    animation: ${props => props.isAnimated ? 'logo-anim 1s linear forwards infinite' : ''};
`

const Lines = styled.div `
    position: absolute;
`

const CircleMaskedLines = styled.div`
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0px 40px 0px 40px;
    overflow: hidden;
`

const Style = styled.div`
    position: relative;
    width: 200px;
    height: 120px;
    overflow: hidden;
`

const Logo = ({type, isAnimated}: Props) => {
    const lines = (
        <>
            <Rectengle isAnimated={isAnimated}/>
            <Rectengle isAnimated={isAnimated}/>
            <Rectengle isAnimated={isAnimated}/>
            <Rectengle isAnimated={isAnimated}/>
        </>
    )
    const maskedLines = getMaskedLines(lines, type)
    return (<>
        <Style>
            { maskedLines }
            <Circle/>
        </Style>
    </>)
}

const getMaskedLines = (lines: JSX.Element, type: LogoType) => {
    switch(type) {
        case 'simple': return <CircleMaskedLines>{lines}</CircleMaskedLines>
        case 'basic': return <Lines>{lines}</Lines>
    }
}

export default Logo