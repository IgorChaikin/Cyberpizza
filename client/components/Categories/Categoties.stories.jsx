import React from 'react';

import Categories from './Categories';

export default {
  title: 'CyberPizza/Categories',
  component: Categories,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Categories {...args} />;

const categories = [
  {
    _id: '0',
    title: 'Pizza',
  },
  {
    _id: '1',
    title: 'Pasta',
  },

  {
    _id: '2',
    title: 'Sandwiches',
  },

  {
    _id: '3',
    title: 'Soup',
  },

  {
    _id: '4',
    title: 'Salads',
  },

  {
    _id: '5',
    title: 'Sides',
  },

  {
    _id: '6',
    title: 'Deserts',
  },

  {
    _id: '7',
    title: 'Drinks',
  },
];

export const Selected = Template.bind({});
Selected.args = {
  categories,
  selectedId: '0',
};

export const NoSelected = Template.bind({});
NoSelected.args = {
  categories,
};
