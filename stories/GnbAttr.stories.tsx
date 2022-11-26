import GnbAttr from "../src/components/GnbAttr";
import { ComponentStory, ComponentMeta } from '@storybook/react';

const meta = {
    title: 'Global/Gnb/Attribute',
    component: GnbAttr
} as ComponentMeta<typeof GnbAttr>

const Template: ComponentStory<typeof GnbAttr> = (args) => (
    <GnbAttr {...args}>{args.children}</GnbAttr>
)

const Main = Template.bind({})
Main.args = {
    children: "main",
    link: "#you-clicked-link-main",
    isMain: true
}

const Sub = Template.bind({})
Sub.args = {
    children: "sub",
    link: "#you-clicked-link--sub",
    isMain: false
}

export default meta
export { Main, Sub }