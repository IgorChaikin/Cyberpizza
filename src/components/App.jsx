//import s from '../styles/App.scss'
import withStyles from 'isomorphic-style-loader/withStyles'
import React from 'react'
import {List} from './list'
import '../styles/App.scss'
import {Filters} from "./filters";
import {Orders} from "./orders";
import {Service} from "../service";

const domain ='https://cyber-pizza.herokuapp.com/';
const service = new Service(domain);

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
            categories: []
        };
    }

    componentDidMount() {
        service.getCategories().then((data)=>{
            this.setState({
                categories: data
            });
        });
    }

    changeCategory(id) {
        this.setState({
            selectedCategory: id
        });
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
        console.log(this.state.categories);
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
        console.log('render');

        const categoryId = this.state.selectedCategory;
        const categories = this.categoriesList(categoryId);

        const selectedCategory = this.state.categories.find((elem)=>elem.id === categoryId);
        const activeFilters = this.state.filters.filter(elem=>elem.isActive)?.map((elem)=>elem.id);

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
                            staticPath = {domain}
                        />
                        <Orders
                            orders = {this.state.orders}
                            staticPath = {domain}
                        />
                    </header>
                    <List
                        items = {filteredItems }
                        title = {selectedCategory?.title}
                        onAdd = {(item) => this.addOrder(item)}
                        staticPath = {domain}
                    />
                </div>
            </div>
        );
    }
}

//export default App;
