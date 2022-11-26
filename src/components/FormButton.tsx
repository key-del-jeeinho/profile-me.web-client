import styled from 'styled-components'

interface Props {
    label: string,
    onClick: () => void
}

const Common = styled.span`
    display: block;

    width: fit-content;
    height: fit-content;

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
    height: 30px;
    padding: 0px 15px 0px 15px;


    font-size: ${props => props.theme.sizes.fonts.btn_small};
    font-weight: ${props => props.theme.sizes.font_weights.regular};
`

const FormButton = ({label, onClick}: Props) => {
    return (
        <Common>
            <ContentBox onClick={onClick}>{label}</ContentBox>
        </Common>
    )
}

export default FormButton