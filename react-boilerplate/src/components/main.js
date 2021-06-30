import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import s from '../styles/main.css'

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null,
            categories: [
                {
                    id: '0',
                    title: 'Pizza',
                    items: [
                        {
                            id: '0-0',
                            imgPath: 'Ham and cheese',
                            price: 26.75,
                            name: '',
                            description: ''
                        },
                        {
                            id: '0-1',
                            imgPath: 'Margarita',
                            price: 20.50,
                            name: '',
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
                            name: '',
                            description: ''
                        },
                        {
                            id: '1-1',
                            imgPath: 'Drink2',
                            price: 10.25,
                            name: '',
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

        return (
            <div className={s.main}>
                <div className={s.sideNav}>
                    <ul>
                        {categories}
                    </ul>
                </div>
                <div className={s.list}>

                </div>
            </div>
        );
    }
}

export default withStyles(s)(Main)
