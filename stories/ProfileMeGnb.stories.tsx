import ProfileMeGnb from "../src/components/ProfileMeGnb";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Global/Lnb',
    component: ProfileMeGnb
} as ComponentMeta<typeof ProfileMeGnb>

const Template: ComponentStory<typeof ProfileMeGnb> = (args) => <ProfileMeGnb/>

const Navbar = Template.bind({})

export default meta
export { Navbar }