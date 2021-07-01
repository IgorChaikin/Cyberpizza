import React from 'react'
import '../styles/list.scss'

function Item(props) {
    return (
        <article>
            <img src={props.item.imgPath} alt={props.item.title}/>
            <button onClick={props.onClick}>+</button>
            <p>${props.item.price}</p>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
        </article>
    );
}

export class List extends React.Component {
    /*constructor(props) {
        super(props);
        this.items = props.items;
        this.title = props.title;
        this.orderCount = props.orderCount;

        this.onAdd = props.onAdd;
    }*/

    renderItems(items, callback) {
        return items?.map((elem)=>(
            <Item key={elem.id} item = {elem}
                  onClick = {()=>callback(elem)}/>
        ));
    }

    render() {
        const items = this.renderItems(this.props.items, this.props.onAdd);

        console.log(this.props.orderCount); // !!!

        return (
            <div>
                <header>

                </header>
                <main>
                    <h2>{this.props.title}</h2>
                    <div>
                        {items}
                    </div>
                </main>
            </div>
        )
    }
}

