import { ComponentMeta, ComponentStory } from "@storybook/react";
import TitleWithSub from "../src/components/molecule/TitleWithSub";

const meta = {
    title: 'Molecule/TitleWithSub',
    component: TitleWithSub
} as ComponentMeta<typeof TitleWithSub>

const Template: ComponentStory<typeof TitleWithSub> = (args) => (<TitleWithSub {...args}>{args.children}</TitleWithSub>)

const Main = Template.bind({})
Main.args = {
    children: 'Title',
    subtitle: 'this is Long sub-title'
}

export default meta
export { Main as TitleWithSub }