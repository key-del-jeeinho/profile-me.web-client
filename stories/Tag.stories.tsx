import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "../src/components/Tag";

const meta = {
    title: 'Atom/Tag',
    component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => (<Tag {...args}>{args.children}</Tag>)

const Main = Template.bind({})
Main.args = {
    children: 'Tag'
}

export default meta
export { Main as Tag }