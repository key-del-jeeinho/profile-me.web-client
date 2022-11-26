import styled from "styled-components"

interface Props {
    label: string,
    onClick: () => void
}

const Common = styled.span`
    display: block;

    width: fit-content;
    height: fit-content;

    border: ${props => props.theme.sizes.strokes.regular} solid ${props => props.theme.colors.strokes.btn_cta};
    border-radius: 25px;

    box-shadow: ${props => props.theme.shadows.box.regular};
    
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
    height: 50px;
    padding: 0px 25px 0px 25px;

    font-size: ${props => props.theme.sizes.fonts.btn_regular};
    font-weight: ${props => props.theme.sizes.font_weights.regular};
`

const CtaButton = ({label, onClick}: Props) => {
    return (
        <Common>
            <ContentBox onClick={onClick}>{label}</ContentBox>
        </Common>
    )
}

export default CtaButton