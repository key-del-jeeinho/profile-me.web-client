import CtaButton from "../src/components/CtaButton"
import { ComponentMeta, ComponentStory } from "@storybook/react";

const meta = {
    title: 'Global/Button',
    component: CtaButton
} as ComponentMeta<typeof CtaButton>

const Template: ComponentStory<typeof CtaButton> = (args) => <CtaButton {...args}/>

const Main = Template.bind({})

export default meta
export { Main as CtaButton }