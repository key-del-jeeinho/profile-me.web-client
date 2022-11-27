import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "../src/components/atom/Text";

const meta = {
    title: 'Atom/Text',
    component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => (<Text {...args}>{args.children}</Text>)

const Main = Template.bind({})
Main.args = {
    children: 'text',
    size: 'regular',
    type: 'normal'
}

export default meta
export { Main as Text }