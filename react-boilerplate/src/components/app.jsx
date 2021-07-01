//import s from '../styles/main.css'
//import withStyles from 'isomorphic-style-loader/withStyles'
import React from 'react'
import {List} from './list'
import '../styles/main.scss'

//withStyles(s)
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            selectedCategory: null,
            categories: [
                {
                    id: '0',
                    title: 'Pizza',
                    items: [
                        {
                            id: '0-0',
                            imgPath: './src/static/img/ham_and_cheese.png',
                            price: 26.75,
                            title: 'Ham and cheese',
                            description: 'Ham and cheese Ham and cheese Ham and cheese'
                        },
                        {
                            id: '0-1',
                            imgPath: './src/static/img/margarita.png',
                            price: 20.50,
                            title: 'Margarita',
                            description: ''
                        },
                    ]
                },

                {
                    id: '1',
                    title: 'Drinks',
                    items: [
                        {
                            id: '1-0',
                            imgPath: 'Drink1',
                            price: 15.00,
                            title: '',
                            description: ''
                        },
                        {
                            id: '1-1',
                            imgPath: 'Drink2',
                            price: 10.25,
                            title: '',
                            description: ''
                        },
                    ]
                }
            ]
        };
    }

    changeCategory(id) {
        this.setState({
            selectedCategory: id
        });
    }

    addOrder(item) {
        const orders = this.state.orders.slice();
        orders.push(item);
        this.setState({
            orders: orders
        })
    }

    categoriesList(id) {
        const categories = this.state.categories;
        return categories.map((elem) => {
            const title = id === elem.id ?
                '—' + elem.title :
                elem.title;
            return (
                <li key={elem.id}>
                    <button onClick={() => this.changeCategory(elem.id)}>{title}</button>
                </li>
            );
        });
    }

    render() {
        const categoryId = this.state.selectedCategory;
        const categories = this.categoriesList(categoryId);

        const selectedCategory = this.state.categories.find((elem)=>elem.id === categoryId)

        const items = selectedCategory?.items.slice()
        console.log(items) //!!!

        return (
            <div className="main">
                <nav className="side-nav">
                    <ul>
                        {categories}
                    </ul>
                </nav>
                <List
                    items = {items}
                    orderCount = {this.state.orders.length}
                    title = {selectedCategory?.title}
                    onAdd = {(item) => this.addOrder(item)}
                />
            </div>
        );
    }
}

//export default Main;
