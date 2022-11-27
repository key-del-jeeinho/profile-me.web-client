import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "../src/components/Text";

const meta = {
    title: 'Global/Text',
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