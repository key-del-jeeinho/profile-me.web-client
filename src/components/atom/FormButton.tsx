import { text } from 'stream/consumers'
import styled from 'styled-components'

interface Props {
    text: string,
    onClick: () => void
}

const Common = styled.span`
    box-sizing: border-box;
    display: flex;

    width: fit-content;
    height: 30px;

    color: ${props => props.theme.colors.fonts.btn_form};
    background-color: ${props => props.theme.colors.backgrounds.btn_form};
    border: ${props => props.theme.sizes.strokes.regular} solid ${props => props.theme.colors.strokes.btn_form};
    border-radius: 15px;

    transition: box-shadow 0.2s linear;

    &:hover {
        box-shadow: ${props => props.theme.shadows.box.regular};
    }
`

const ContentBox = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 60px;
    padding: 0px 15px 0px 15px;


    font-size: ${props => props.theme.sizes.fonts.btn_small};
    font-weight: ${props => props.theme.sizes.font_weights.regular};
`

const FormButton = ({text, onClick}: Props) => {
    return (
        <Common>
            <ContentBox onClick={onClick}>{text}</ContentBox>
        </Common>
    )
}

export default FormButton