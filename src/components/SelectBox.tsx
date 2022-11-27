import styled from "styled-components"

interface Props {
    data: { label: string, key: string, value: string }[],
    label: string,
    placeholder: string
}


const LabelStyle = styled.div`
    padding-bottom: 5px;

    font-size: ${props => props.theme.sizes.fonts.regular};
    color: ${props => props.theme.colors.fonts.main};
`

const SelectStyle = styled.div`
    select {
        box-sizing: border-box;
        width: 200px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid ${props => props.theme.colors.strokes.input};
        padding: 0px 0px 0px 9px;

        font-family: "Pretendard";
        font-size: ${props => props.theme.sizes.fonts.regular};
        color: ${props => props.theme.colors.fonts.main};
    }

    select > option {
        font-family: "Pretendard";
        font-size: ${props => props.theme.sizes.fonts.regular};
        color: ${props => props.theme.colors.fonts.main};
    }

    select:focus {
        outline: none;
    }
`

const SelectBox = ({data, label, placeholder}: Props) => {
    const isLabeled = !!label
    
    return (
        <>
            <div>
                {isLabeled? <LabelStyle>{label}</LabelStyle>: ''}
                <SelectStyle>
                    <select>
                        <option value="" disabled selected>{placeholder}</option>
                        {data.map(option => 
                            <option key={option.key} value={option.value}>
                                {option.label}
                            </option>
                        )}
                    </select>
                </SelectStyle>
            </div>
        </>
    )
}

export default SelectBox