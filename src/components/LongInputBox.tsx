import Text from "./Text"
import styled from "styled-components"

interface Props {
    label?: string,
    placeholder: string,
    height: number,
    isWritable: boolean,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
const BoxStyle = styled.div`
`
const LabelStyle = styled.div`
    padding-bottom: 5px;

    font-size: ${props => props.theme.sizes.fonts.regular};
    color: ${props => props.theme.colors.fonts.main};
`

const InputStyle = styled.div<{
    height: number
    isWritable: boolean
}>`
    textarea {
        box-sizing: border-box;
        width: 200px;
        min-height: 30px;
        height: ${props => props.height + 'px'};
        border-radius: 10px;
        border: 1px solid ${props => props.isWritable 
            ? props.theme.colors.strokes.input
            : props.theme.colors.strokes.input_unwritable
        };
        padding: 9px 0px 0px 9px;

        font-family: "Pretendard";
        font-size: ${props => props.theme.sizes.fonts.regular};
        color: ${props => props.theme.colors.fonts.main};
        resize: none;
    }

    textarea:focus {
        ::placeholder {
            color: transparent;
        }
        outline: none;
    }

    textarea::placeholder {
        opacity: 1; 
        color: ${props => props.theme.colors.fonts.placeholder};
        font-size: ${props => props.theme.sizes.fonts.regular};
    }

    textarea::-webkit-scrollbar {
        width: 13px;
    }

    textarea::-webkit-scrollbar-thumb {
        height: 10%;
        border-radius: 13px;
        border: 4px solid transparent;
        background-clip: content-box;
        background-color: ${props => props.theme.colors.backgrounds.scroll_thumb};
    }
`

const InputBox = ({label, placeholder, height, isWritable, onChange}: Props) => {
    const isLabeled = !!label
    
    return (
        <>
            <BoxStyle>
                {isLabeled 
                ? (
                    <LabelStyle>
                        <Text size='regular' type='normal'>{label}</Text>
                    </LabelStyle>
                ) : ''}
                <InputStyle height={height} isWritable={isWritable}>
                    <textarea
                        rows={1}
                        onChange={onChange}
                        placeholder={placeholder}
                        readOnly={!isWritable}
                    />
                </InputStyle>
            </BoxStyle>
        </>
    )
}

export default InputBox