import React from 'react';

import Item from './Item';

export default {
  title: 'CyberPizza/Item',
  component: Item,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Item {...args} />;

export const DescFull = Template.bind({});
DescFull.args = {
  item: {
    price: 80.0,
    title: 'Example',
    description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni',
    imgPath: 'https://cyber-pizza.herokuapp.com/pepperoni.png',
  },
};

export const DescLess = Template.bind({});
DescLess.args = {
  item: {
    price: 80.0,
    title: 'Example',
    imgPath: 'https://cyber-pizza.herokuapp.com/pepperoni.png',
  },
};

export const ImgLess = Template.bind({});
ImgLess.args = {
  item: {
    price: 80.0,
    title: 'Example',
    description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni',
    imgPath: '../irregular_path/pepperoni.png',
  },
};
