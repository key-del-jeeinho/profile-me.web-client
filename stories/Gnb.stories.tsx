import ContentMeGnb from "../src/components/ContentMeGnb";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Global/Gnb',
    component: ContentMeGnb
} as ComponentMeta<typeof ContentMeGnb>

const Template: ComponentStory<typeof ContentMeGnb> = (args) => <ContentMeGnb/>

const Gnb = Template.bind({})

export default meta
export { Gnb as Gnb }