import ContentMeTitle from "../src/components/ContentMeTitle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Global/Title',
    component: ContentMeTitle
} as ComponentMeta<typeof ContentMeTitle>

const Template: ComponentStory<typeof ContentMeTitle> = (args) => <ContentMeTitle {...args}/>

const Title = Template.bind({title: 'title'})

export default meta
export { Title }