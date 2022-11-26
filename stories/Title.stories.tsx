import Title from "../src/components/Title";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Global/Title',
    component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => (<Title {...args}>{args.children}</Title>)

const Main = Template.bind({})
Main.args = {
    children: 'title',
    isMain: true
}

export default meta
export { Main as Title }