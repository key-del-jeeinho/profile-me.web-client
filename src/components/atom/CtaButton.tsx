import styled from "styled-components"

interface Props {
    text: string,
    onClick: () => void
}

const Common = styled.span`
    box-sizing: border-box;
    display: flex;

    width: fit-content;
    height: 50px;

    color: ${props => props.theme.colors.fonts.btn_cta};
    background-color: ${props => props.theme.colors.backgrounds.btn_cta};
    box-shadow: ${props => props.theme.shadows.box.regular};
    border: ${props => props.theme.sizes.strokes.regular} solid ${props => props.theme.colors.strokes.btn_cta};
    border-radius: 25px;
    
    transition: box-shadow 0.2s linear;

    &:hover {
        box-shadow: ${props => props.theme.shadows.box.strong};
    }
`

const ContentBox = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 200px;
    padding: 0px 25px 0px 25px;

    font-size: ${props => props.theme.sizes.fonts.btn_regular};
    font-weight: ${props => props.theme.sizes.font_weights.regular};
`

const CtaButton = ({text, onClick}: Props) => {
    return (
        <Common>
            <ContentBox onClick={onClick}>{text}</ContentBox>
        </Common>
    )
}

export default CtaButton