import styled from "styled-components"
import { TitleWithSub } from "../../../stories/TitleWithSub.stories"
import CtaButton from "../atom/CtaButton"
import Logo from "../atom/Logo"
import Text from "../atom/Text"

interface Props {
    title: string,

    subtitle: string,
    subtitleLabel: string,
    subtitleLabelLink: string,

    ctaLabel: string,
    ctaOnClick: () => void,
    ctaText: string
}

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CtaStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .label {
        box-sizing: border-box;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .title {
            padding-top: 10px;
        }
        .cta {
            padding-bottom: 10px;
        }
    }
`

const MainForm = ({
    title, 
    subtitle, subtitleLabel, subtitleLabelLink, 
    ctaLabel, ctaOnClick, ctaText
}: Props)  => {
    const composedSubtitleLabel = composeSubtitleLabel(subtitleLabel, subtitleLabelLink)
    return (
        <>
            <Form>
                <div className="logo">
                    <Logo isAnimated={true} type='basic'/>
                </div>
                <div className="title">
                <TitleWithSub subtitle={subtitle}>{title}</TitleWithSub>
                </div>
                <CtaStyle>
                    <div className="label">
                        <div className="title">
                            {composedSubtitleLabel}
                        </div>
                        <div className="cta">
                            <Text size='bigger' type='normal'>{ctaLabel}</Text>
                        </div>
                    </div>
                    <div className="button">
                        <CtaButton text={ctaText} onClick={ctaOnClick}/>
                    </div>
                </CtaStyle>
            </Form>
        </>
    )
}

const composeSubtitleLabel = (label: string, link: string) => {
    const size = link ? 'link' : 'normal'
    const text = <Text size='bigger' type={size}>{label}</Text>
    if(link) return <a href={link}>{text}</a>
    else return text
}

export default MainForm