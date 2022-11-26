import Title from "../src/components/Title";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Global/Title',
    component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}/>

const Main = Template.bind({title: 'title'})

export default meta
export { Main as Title }