import ProfileMeGnb from "../src/components/ProfileMeGnb";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Global/Gnb',
    component: ProfileMeGnb
} as ComponentMeta<typeof ProfileMeGnb>

const Template: ComponentStory<typeof ProfileMeGnb> = (args) => <ProfileMeGnb/>

const Gnb = Template.bind({})

export default meta
export { Gnb as Gnb }