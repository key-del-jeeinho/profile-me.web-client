import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormButton from "../src/components/FormButton";

const meta = {
    title: 'Atom/Button',
    component: FormButton
} as ComponentMeta<typeof FormButton>

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args}/>

const Main = Template.bind({})
Main.args = {
    label: "Submit"
}

export default meta
export { Main as FormButton }