import styled from "styled-components"

interface Props {
    label?: string,
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const LabelStyle = styled.div`
    padding-bottom: 5px;

    font-size: ${props => props.theme.sizes.fonts.regular};
    color: ${props => props.theme.colors.fonts.main};
`

const InputStyle = styled.div`
    input {
        box-sizing: border-box;
        width: 200px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid ${props => props.theme.colors.strokes.input};
        padding: 0px 0px 0px 9px;

        font-size: ${props => props.theme.sizes.fonts.regular};
        color: ${props => props.theme.colors.fonts.main};
        font-family: "Pretendard";
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        font-family: "Pretendard";
        color: ${props => props.theme.colors.fonts.placeholder};
        font-size: ${props => props.theme.sizes.fonts.regular};
        opacity: 1; 
    }
`

const InputBox = ({label, placeholder, onChange}: Props) => {
    const isLabeled = !!label
    
    return (
        <>
            <div>
                {isLabeled ? <LabelStyle>{label}</LabelStyle> : ''}
                <InputStyle>
                    <input onChange={e => onChange} placeholder={placeholder}/>
                </InputStyle>
            </div>
        </>
    )
}

export default InputBox