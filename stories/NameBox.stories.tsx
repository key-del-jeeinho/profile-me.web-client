import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import NameBox from "../src/components/molecule/NameBox";

const meta = {
    title: 'Molecule/NameBox',
    component: NameBox
} as ComponentMeta<typeof NameBox>

const Template: ComponentStory<typeof NameBox> = (args) => (<NameBox {...args} nameState={useState('Text')}/>)

const Main = Template.bind({})
Main.args = {
    placeholder: 'please write your name',
    isChangeable: true
}

export default meta
export { Main as NameBox }