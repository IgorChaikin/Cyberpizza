//import s from '../styles/App.scss'
import withStyles from 'isomorphic-style-loader/withStyles'
import React from 'react'
import {List} from './list'
import '../styles/App.scss'
import {Filters} from "./filters";
import {Orders} from "./orders";

//withStyles(s)
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: {
                ordered:[],
                baking:[],
                finishing:[],
                served:[]
            },
            selectedCategory: '0',
            filters:[
                {
                    id:'0',
                    name:'vegetarian',
                    isActive: false
                },
                {
                    id:'1',
                    name:'vegan',
                    isActive: false
                },
                {
                    id:'2',
                    name:'tag0',
                    isActive: false
                },
                {
                    id:'3',
                    name:'tag1',
                    isActive: false
                },
                {
                    id:'4',
                    name:'tag2',
                    isActive: false
                },
            ],
            isAllFilters:false,
            categories: [
                {
                    id: '0',
                    title: 'Pizza',
                    items: [
                        {
                            id: '0-0',
                            imgPath: './src/static/media/ham_and_cheese.png',
                            price: 26.75,
                            title: 'Ham and cheese',
                            description: 'Ham and cheese ham and cheese ham and cheese ham and cheese ham and cheese',
                            tags: []
                        },
                        {
                            id: '0-1',
                            imgPath: './src/static/media/margarita.png',
                            price: 20.50,
                            title: 'Margarita',
                            description: 'Margarita margarita margarita margarita margarita margarita margarita',
                            tags: []
                        },
                        {
                            id: '0-2',
                            imgPath: './src/static/media/pepperoni.png',
                            price: 20.50,
                            title: 'Pepperoni',
                            description: 'Pepperoni pepperoni pepperoni pepperoni pepperoni',
                            tags: []
                        },
                        {
                            id: '0-3',
                            imgPath: './src/static/media/vegetable.png',
                            price: 17.30,
                            title: 'Vegetable',
                            description: 'Vegetable vegetable vegetable vegetable vegetable',
                            tags: ['0', '1']
                        }
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
            ]
        };
    }

    changeCategory(id) {
        console.log('it work');
        this.setState({
            selectedCategory: id
        });
    }

    getOrdersCount() {
        const orders  = this.state.orders;

        return orders.ordered.length +
            orders.baking.length +
            orders.finishing.length +
            orders.served.length;
    }

    addOrder(item) {
        const orders  = Object.assign({},this.state.orders);
        orders.baking.push(item);
        this.setState({
            orders: orders
        })
    }

    switchFilter(id) {
        const filters = this.state.filters.slice();
        const idx = filters.findIndex((elem)=>elem.id === id);

        filters[idx].isActive = !filters[idx].isActive

        this.setState({
            filters: filters
        });
    }

    switchDisplayAll(){
        let isAllFilters = this.state.isAllFilters
        isAllFilters = !isAllFilters
        this.setState({
            isAllFilters:isAllFilters
        });
    }

    categoriesList(id) {
        const categories = this.state.categories;
        return categories.map((elem) => {
            const title = id === elem.id ?
                '—' + elem.title :
                elem.title;
            return (
                <li key={elem.id}>
                    {id === elem.id ?
                        (<div className="side-nav__marker">

                        </div>): ''}
                    <button onClick={() => this.changeCategory(elem.id)}>
                        <h2>
                            {title}
                        </h2>
                    </button>
                </li>
            );
        });
    }

    render() {
        const categoryId = this.state.selectedCategory;
        const categories = this.categoriesList(categoryId);

        const selectedCategory = this.state.categories.find((elem)=>elem.id === categoryId);
        const activeFilters = this.state.filters.filter(elem=>elem.isActive).map((elem)=>elem.id);

        const items = selectedCategory?.items.slice()
        const filteredItems = activeFilters.length > 0? items?.filter((elem)=> {
            const intersection = elem.tags.filter((x)=>activeFilters.includes(x));
            return intersection.length > 0 &&
                intersection.length <= elem.tags.length &&
                intersection.length === activeFilters.length;
        }) : items;

        return (
            <div className="app">
                <nav className="side-nav">
                    <h1>P.</h1>
                    <p>categories</p>
                    <ul>
                        {categories}
                    </ul>
                </nav>
                <div className="main">
                    <header>
                        <Filters
                            tags = {this.state.filters}
                            onSwitch = {(id) => this.switchFilter(id)}
                            onSwitchAll = {()=>this.switchDisplayAll()}
                            all = {this.state.isAllFilters}
                        />
                        <Orders
                            orders = {this.state.orders}
                        />
                    </header>
                    <List
                        items = {filteredItems }
                        title = {selectedCategory?.title}
                        onAdd = {(item) => this.addOrder(item)}
                    />
                </div>
            </div>
        );
    }
}

//export default App;
