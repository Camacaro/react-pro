import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: {
      control: 'select', // por defecto es la de radio y la cambie por un select
      // options: ['primary', 'secondary', 'tertiary'], // Esto es opcional, ya que pone los que tiene en las interface
    },
    fontColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel  {...args} />

/**
 * Pagina o subItem 
 * 
 * bind, esto es para crear una copia del template
 * y que rompa la referencia entre el componente(Basic) y el template
 */
export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic',
  size: 'normal',
  allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'All Caps',
  size: 'normal',
  allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  size: 'normal',
  color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  label: 'Tertiary',
  color: 'tertiary',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  label: 'Custom Font Color',
  fontColor: '#5517ac',
}