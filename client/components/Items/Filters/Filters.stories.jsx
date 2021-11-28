import React from 'react';

import Filters from './Filters';

export default {
  title: 'CyberPizza/Filters',
  component: Filters,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Filters {...args} />;

const tags = [
  {
    _id: '0',
    name: 'vegetarian',
    isActive: false,
  },
  {
    _id: '1',
    name: 'vegan',
    isActive: true,
  },
  {
    _id: '2',
    name: 'tag0',
    isActive: false,
  },
  {
    _id: '3',
    name: 'tag1',
    isActive: false,
  },
  {
    _id: '4',
    name: 'tag2',
    isActive: false,
  },
];

export const ShowAll = Template.bind({});
ShowAll.args = {
  tags,
  all: true,
};

export const ShowNoAll = Template.bind({});
ShowNoAll.args = {
  tags,
  all: false,
};
