import React from 'react';

import Item from '../client/components/presentational/Item';

export default {
  title: 'CyberPizza/Item',
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const DescFull = Template.bind({});
DescFull.args = {
  item: {
    price: 80.00,
    title: 'Example',
    description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni',
    imgPath: '/pepperoni.png',
  },
};

export const DescLess = Template.bind({});
DescLess.args = {
  item: {
    price: 80.00,
    title: 'Example',
    imgPath: '/pepperoni.png',
  },
};

export const ImgLess = Template.bind({});
ImgLess.args = {
  item: {
    price: 80.00,
    title: 'Example',
    description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni pepperoni',
    imgPath: '/irregular_pepperoni.png',
  },
};
