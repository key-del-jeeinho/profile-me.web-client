import LongInputBox from "../src/components/LongInputBox";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const meta = {
    title: 'Global/Box/Input',
    component: LongInputBox
} as ComponentMeta<typeof LongInputBox>

const Template: ComponentStory<typeof LongInputBox> = (args) => <LongInputBox {...args}/>

const Main = Template.bind({})
Main.args = {
    label: '',
    placeholder: '내용을 입력해주세요',
    height: 100,
    isWritable: true,
    onChange: (content) => { console.log(`content changed! - ${content}}`) }
}

export default meta
export { Main as LongInputBox }