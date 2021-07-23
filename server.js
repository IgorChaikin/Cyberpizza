const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

// packages import
const app = express();
app.use(express.json());

// give static
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static/media')));
app.use(express.static(path.join(__dirname, 'static/svg')));

// test
app.get('/ping', (req, res) => res.send('pong'));

// html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const data = {
  categories: [
    {
      id: '0',
      title: 'Pizza',
      items: [
        {
          id: '0-0',
          imgPath: '/ham_and_cheese.png',
          price: 26.75,
          title: 'Ham and cheese',
          description: 'Ham and cheese ham and cheese ham and cheese ham and cheese ham and cheese',
          tags: [],
        },
        {
          id: '0-1',
          imgPath: '/margarita.png',
          price: 20.5,
          title: 'Margarita',
          description: 'Margarita margarita margarita margarita margarita margarita margarita',
          tags: [],
        },
        {
          id: '0-2',
          imgPath: '/pepperoni.png',
          price: 20.5,
          title: 'Pepperoni',
          description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni',
          tags: [],
        },
        {
          id: '0-3',
          imgPath: '/vegetable.png',
          price: 17.3,
          title: 'Vegetable',
          description: 'Vegetable vegetable vegetable vegetable vegetable',
          tags: ['0', '1'],
        },
        {
          id: '0-4',
          imgPath: '/italian.png',
          price: 28.0,
          title: 'Italian',
          description: 'Italian italian italian italian italian italian italian',
          tags: [],
        },
      ],
    },

    {
      id: '1',
      title: 'Pasta',
      items: [],
    },

    {
      id: '2',
      title: 'Sandwiches',
      items: [],
    },

    {
      id: '3',
      title: 'Soup',
      items: [],
    },

    {
      id: '4',
      title: 'Salads',
      items: [],
    },

    {
      id: '5',
      title: 'Sides',
      items: [],
    },

    {
      id: '6',
      title: 'Deserts',
      items: [],
    },

    {
      id: '7',
      title: 'Drinks',
      items: [],
    },
  ],
  orders: {
    ordered: [],
    baking: [],
    finishing: [],
    served: [],
  },
  filters: [
    {
      id: '0',
      name: 'vegetarian',
      isActive: false,
    },
    {
      id: '1',
      name: 'vegan',
      isActive: false,
    },
    {
      id: '2',
      name: 'tag0',
      isActive: false,
    },
    {
      id: '3',
      name: 'tag1',
      isActive: false,
    },
    {
      id: '4',
      name: 'tag2',
      isActive: false,
    },
  ],
  discounts: [0.1],
};

app.get('/categories', (request, response) => {
  const categories = data.categories.map((elem) => ({
    id: elem.id,
    title: elem.title,
  }));
  response.json(categories);
});

app.get('/items', (request, response) => {
  const { id } = request.query;
  const selectedCategory = data.categories.find((elem) => elem.id === id);
  response.json(selectedCategory?.items);
});

app.get('/orders', (request, response) => {
  response.json(data.orders);
});

app.post('/orders', (request, response) => {
  if (!request.body) {
    return response.sendStatus(400);
  }

  let order = null;

  data.categories.forEach((category) => category.items.forEach((item) => {
    if (item.id === request.body.id) {
      order = item;
    }
  }));

  data.orders.ordered.push({
    item: order,
    time: request.body.time,
  });

  return response.send(data.orders);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
