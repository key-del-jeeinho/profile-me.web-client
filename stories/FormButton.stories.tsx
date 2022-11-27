import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormButton from "../src/components/atom/FormButton";

const meta = {
    title: 'Atom/Button',
    component: FormButton
} as ComponentMeta<typeof FormButton>

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args}/>

const Main = Template.bind({})
Main.args = {
    text: "Submit"
}

export default meta
export { Main as FormButton }