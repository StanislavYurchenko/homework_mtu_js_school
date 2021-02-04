import React from 'react';

import App from './App';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/App',
  component: App,
  decorators: [],
};

const Template = args => <App {...args} />;

export const ReactJs = Template.bind({});
ReactJs.args = {
  toLearn: 'React.js',
};

export const JavaScript = Template.bind({});
JavaScript.args = {
  toLearn: 'Java Script',
};

export const Nothing = Template.bind({});
Nothing.args = {};
