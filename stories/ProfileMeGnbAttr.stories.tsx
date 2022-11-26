import ProfileMeGnbAttr from "../src/components/ProfileMeGnbAttr";
import { ComponentStory, ComponentMeta } from '@storybook/react';

const meta = {
    title: 'Global/Gnb/Attribute',
    component: ProfileMeGnbAttr
} as ComponentMeta<typeof ProfileMeGnbAttr>

const Template: ComponentStory<typeof ProfileMeGnbAttr> = (args) => <ProfileMeGnbAttr {...args}/>

const Main = Template.bind({})
Main.args = {
    label: "main",
    link: "#you-clicked-link-main",
    isMain: true
}

const Sub = Template.bind({})
Sub.args = {
    label: "sub",
    link: "#you-clicked-link--sub",
    isMain: false
}

export default meta
export { Main, Sub }