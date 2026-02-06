import React, { PureComponent } from 'react'

export default class Item extends PureComponent {
  render() {
    return (
      <div className="item">
          <img src={"/img/" + this.props.item.img} alt={this.props.item.title} onClick={() => this.props.onshowitem(this.props.item)} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}₽</b>
        <div className ="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}
