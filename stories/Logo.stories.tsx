import Logo from "../src/components/Logo"
import { ComponentMeta, ComponentStory } from "@storybook/react"

const meta = {
    title: 'Global/Logo',
    component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args}/>

const Main = Template.bind({})
Main.args = {
    type: 'basic',
    isAnimated: true
}

export default meta
export { Main as Logo }