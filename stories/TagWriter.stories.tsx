import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import TagWriter from "../src/components/TagWriter";

const meta = {
    title: 'Molecules/TagWriter',
    component: TagWriter
} as ComponentMeta<typeof TagWriter>

const Template: ComponentStory<typeof TagWriter> = (args) => (<TagWriter {...args} textState={useState('')}/>)

const Main = Template.bind({})
Main.args = {
    maxSize: 14,
    placeholder: "추가하실_태그를_입력해주세요",
    onWrote: (tag: string) => {alert(`추가된 태그: #${tag}`)}
}

export default meta
export { Main as TagWriter }