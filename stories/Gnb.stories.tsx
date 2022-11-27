import Gnb from "../src/components/Gnb";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta = {
    title: 'Organism/Gnb',
    component: Gnb
} as ComponentMeta<typeof Gnb>

const Template: ComponentStory<typeof Gnb> = (args) => <Gnb/>

const Main = Template.bind({})

export default meta
export { Main as Gnb }