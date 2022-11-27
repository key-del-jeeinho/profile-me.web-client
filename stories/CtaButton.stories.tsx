import CtaButton from "../src/components/atom/CtaButton"
import { ComponentMeta, ComponentStory } from "@storybook/react";

const meta = {
    title: 'Atom/Button',
    component: CtaButton
} as ComponentMeta<typeof CtaButton>

const Template: ComponentStory<typeof CtaButton> = (args) => <CtaButton {...args}/>

const Main = Template.bind({})
Main.args = {
    text: "CTA"
}

export default meta
export { Main as CtaButton }