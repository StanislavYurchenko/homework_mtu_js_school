import React from 'react';

import SayHello from './SayHello';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/SayHello',
  component: SayHello,
  decorators: [],
};

const Template = args => <SayHello {...args} />;

export const Admin = Template.bind({});
Admin.args = {
  name: 'Admin',
  color: 'blue',
};

export const User = Template.bind({});
User.args = {
  name: 'User',
  color: 'red',
};

export const Hex = Template.bind({});
Hex.args = {
  name: 'Hex',
  color: '#ff00ff',
};

export const Rgba = Template.bind({});
Rgba.args = {
  name: 'Rgba',
  color: 'rgba(51, 170, 51, .4)',
};
