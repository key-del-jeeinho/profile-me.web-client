import InputBox from "../src/components/InputBox";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const meta = {
    title: 'Global/Box/Input',
    component: InputBox
} as ComponentMeta<typeof InputBox>

const Template: ComponentStory<typeof InputBox> = (args) => <InputBox {...args}/>

const Main = Template.bind({})
Main.args = {
    label: '',
    placeholder: '내용을 입력해주세요',
    onChange: (content) => { console.log(`content changed! - ${content}}`) }
}

export default meta
export { Main as InputBox }