//import s from '../styles/App.scss'
//import withStyles from 'isomorphic-style-loader/withStyles'
import React from 'react'
import {List} from './List'
import '../styles/App.scss'
import {Filters} from "./Filters";
import {Orders} from "./Orders";
import {dataSource} from "../service";
export {dataSource} from "../service"

//withStyles(s)
export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: props.data.orders,
            selectedCategory: props.data.selectedCategory,
            items: props.data.items,
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
            categories: props.data.categories
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.setState({
                selectedCategory: this.props.data.selectedCategory,
                categories: this.props.data.categories,
                orders: this.props.data.orders,
                items: this.props.data.items
            })
        }
    }


    changeCategory(id) {
        dataSource.getItems(id);
    }

    addOrder(item) {
        dataSource.postOrder(item);
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
        const categories = this.categoriesList(this.state.selectedCategory);

        const selectedCategory = this.state.categories.find((elem)=>elem.id === categoryId);
        const activeFilters = this.state.filters.filter(elem=>elem.isActive)?.map((elem)=>elem.id);

        const items = this.state.items.slice()
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
