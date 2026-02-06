import React, { Component } from 'react'
import Item from './item'

export class Items extends Component {
  render() {
    const items = this.props.items || []
    return (
        <main>
            {items.map(el => (
                <Item onshowitem={this.props.onshowitem} key={el.id} item={el} onAdd={this.props.onAdd} />    
            ))}
        </main>
    )
  }
}

export default Items