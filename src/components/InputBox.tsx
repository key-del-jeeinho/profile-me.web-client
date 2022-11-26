import styled from "styled-components"

interface Props {
    label?: string,
    placeholder: string,
    isWritable: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LabelStyle = styled.div`
    padding-bottom: 5px;

    font-size: ${props => props.theme.sizes.fonts.regular};
    color: ${props => props.theme.colors.fonts.main};
`

const InputStyle = styled.div<{isWritable: boolean}>`
    input {
        box-sizing: border-box;
        width: 200px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid ${props => props.isWritable 
            ? props.theme.colors.strokes.input
            : props.theme.colors.strokes.input_unwritable
        };
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

const InputBox = ({label, placeholder, isWritable, onChange}: Props) => {
    const isLabeled = !!label
    
    return (
        <>
            <div>
                {isLabeled ? <LabelStyle>{label}</LabelStyle> : ''}
                <InputStyle isWritable={isWritable}>
                    <input onChange={e => onChange} placeholder={placeholder} readOnly={!isWritable}/>
                </InputStyle>
            </div>
        </>
    )
}

export default InputBox