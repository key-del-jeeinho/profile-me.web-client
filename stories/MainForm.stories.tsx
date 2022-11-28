import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainForm from "../src/components/organism/MainForm";

const meta = {
    title:'Organism/MainForm',
    component: MainForm
} as ComponentMeta<typeof MainForm>

const Template: ComponentStory<typeof MainForm> = (args) => (<MainForm {...args}/>)

const Main = Template.bind({})
Main.args = {
    title: 'title',
    subtitle: 'this is long subtitle',
    subtitleLabel: '',
    subtitleLabelLink: '',
    ctaLabel: '',
    ctaOnClick: () => alert("CTA clicked!"),
    ctaText: 'CTA'
}

export default meta
export { Main as MainForm }