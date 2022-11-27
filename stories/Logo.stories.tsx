import Logo from "../src/components/atom/Logo"
import { ComponentMeta, ComponentStory } from "@storybook/react"

const meta = {
    title: 'Atom/Logo',
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