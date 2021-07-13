const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;

// packages import
const app = express();
app.use(express.json());
//app.use(favicon(__dirname + '/build/favicon.png'));

//give static
//app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'static/media')));
app.use(express.static(path.join(__dirname, 'static/svg')));

//test
app.get('/ping', function (req, res) {
  return res.send('pong');
});

//html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const data = {categories: [
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
        tags: []
      },
      {
        id: '0-1',
        imgPath: '/margarita.png',
        price: 20.50,
        title: 'Margarita',
        description: 'Margarita margarita margarita margarita margarita margarita margarita',
        tags: []
      },
      {
        id: '0-2',
        imgPath: '/pepperoni.png',
        price: 20.50,
        title: 'Pepperoni',
        description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni',
        tags: []
      },
      {
        id: '0-3',
        imgPath: '/vegetable.png',
        price: 17.30,
        title: 'Vegetable',
        description: 'Vegetable vegetable vegetable vegetable vegetable',
        tags: ['0', '1']
      },
      {
        id: '0-4',
        imgPath: '/italian.png',
        price: 28.00,
        title: 'Italian',
        description: 'Italian italian italian italian italian italian italian',
        tags: []
      },
    ]
  },

  {
    id: '1',
    title: 'Pasta',
    items: []
  },

  {
    id: '2',
    title: 'Sandwiches',
    items: []
  },

  {
    id: '3',
    title: 'Soup',
    items: []
  },

  {
    id: '4',
    title: 'Salads',
    items: []
  },

  {
    id: '5',
    title: 'Sides',
    items: []
  },

  {
    id: '6',
    title: 'Deserts',
    items: []
  },

  {
    id: '7',
    title: 'Drinks',
    items: []
  },
],
orders: {
  ordered:[],
  baking:[],
  finishing:[],
  served:[]
}};

app.get('/categories', function (request, response) {
  //if(!request.body) return response.sendStatus(400);
  const categories = data.categories.map((elem) => {
    return {
      id: elem.id,
      title: elem.title
    };
  })
  response.json(categories);
});

app.get('/items', function (request, response) {
  //if(!request.body) return response.sendStatus(400);
  const id = request.query.id;
  const selectedCategory = data.categories.find((elem)=>elem.id === id);
  response.json(selectedCategory?.items);
});

app.get('/orders', function (request, response) {
  //if(!request.body) return response.sendStatus(400);
  response.json(data.orders);
});

app.post("/orders", function (request, response) {
  if(!request.body) return response.sendStatus(400);
  data.orders.ordered.push(request.body.item);
  response.send(data.orders);
});

app.listen(port);
