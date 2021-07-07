import React from 'react'
import '../styles/list.scss'
import {Item} from './item'

export class List extends React.Component {

    renderItems(items, staticPath, callback) {
        return items?.map((elem)=>(
            <Item key={elem.id}
                  item = {elem}
                  staticPath = {staticPath}
                  onClick = {()=>callback(elem)}/>
        ));
    }

    render() {
        const items = this.renderItems(this.props.items, this.props.staticPath, this.props.onAdd);

        return (
            <main>
                <h1>{this.props.title}</h1>
                <div className="list">
                    {items}
                </div>
            </main>
        )
    }
}

