import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormButton from "../src/components/FormButton";

const meta = {
    title: 'Global/Button/Form',
    component: FormButton
} as ComponentMeta<typeof FormButton>

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args}/>

const Main = Template.bind({})

export default meta
export { Main as FormButton }