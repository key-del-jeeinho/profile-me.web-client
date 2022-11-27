import React from "react"
import styled from "styled-components"

interface Props {
    maxSize: number
    placeholder: string,
    textState: [string, (update: ((prevState: string) => string) | string) => void],
    onWrote: ((tag: string) => void),
}

const Style = styled.span`
    input {
        border: none;

        background-color: transparent;
        color: ${props => props.theme.colors.fonts.main};

        font-family: "Pretendard";
        font-size: ${props => props.theme.sizes.fonts.tag_regular};
        font-weight: ${props => props.theme.sizes.font_weights.light};
    }
    input:focus {
        outline: none;
        border: none;

        background-color: transparent;
    }
`

const TagWriter = ({maxSize, placeholder, textState, onWrote}: Props) => {
    const [text, setText] = textState

    return (
        <Style>
            <input
                value={text}
                onChange={e => onChange(e, text, setText)}
                onKeyDown={e => onKeyDown(e, text, setText, onWrote)}
                placeholder={`#${placeholder}`}
                maxLength={maxSize+'#'.length}
            />
        </Style>
    )
}
    

const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    text: string,
    setText: (update: ((prevState: string) => string) | string) => void
) => {
    console.log({text: text, value: e.target.value})
    const pattern = /(^[ㄱ-ㅎㅏ-ㅣ]$)/i
    if(
        e.target.value == '' ||  
        e.target.value == '#' 
    ) setText('')
    else {
        let content = getContent(e.target.value)
        if(pattern.test(content)) content = content.substring(1)
        setText(`#${content}`)
    }
}

const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>, 
    text: string,
    setText: (update: ((prevState: string) => string) | string) => void,
    callback: (tag: string) => void
) => {
    if(e.key == 'Enter') {
        if(getContent(text))
            callback(text.substring(1))
        setText('');
    }
}

const getContent = (value: string) => value.replace(' ', '_').replace('#', '')

export default TagWriter