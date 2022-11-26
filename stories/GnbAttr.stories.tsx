import ContentMeGnbAttr from "../src/components/ContentMeGnbAttr";
import { ComponentStory, ComponentMeta } from '@storybook/react';

const meta = {
    title: 'Global/Gnb/Attribute',
    component: ContentMeGnbAttr
} as ComponentMeta<typeof ContentMeGnbAttr>

const Template: ComponentStory<typeof ContentMeGnbAttr> = (args) => <ContentMeGnbAttr {...args}/>

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