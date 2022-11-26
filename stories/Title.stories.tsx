import ProfileMeTitle from "../src/components/ProfileMeTitle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Global/Title',
    component: ProfileMeTitle
} as ComponentMeta<typeof ProfileMeTitle>

const Template: ComponentStory<typeof ProfileMeTitle> = (args) => <ProfileMeTitle {...args}/>

const Title = Template.bind({title: 'title'})

export default meta
export { Title }