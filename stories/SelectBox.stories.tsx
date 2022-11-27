import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectBox from "../src/components/molecule/SelectBox";

const meta = {
    title: 'Molecule/Box/Select',
    component: SelectBox
} as ComponentMeta<typeof SelectBox>

const Template: ComponentStory<typeof SelectBox> = (args) => <SelectBox {...args}/>

const Main = Template.bind({})
Main.args = {
    label: "",
    placeholder: "옵션을 선택해주세요",
    data: [
        { label: "옵션1", key: "1", value: "option_1" },
        { label: "옵션2", key: "2", value: "option_2" },
        { label: "옵션3", key: "3", value: "option_3" },
        { label: "옵션4", key: "4", value: "option_4" }
    ]
}

export default meta
export { Main as SelectBox }