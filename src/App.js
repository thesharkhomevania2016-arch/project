import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/categories";
import ShowFullItem from "./components/showfullitem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул",
          img: "styl.jpg",
          desc: "Представляем вашему вниманию стильный и современный стул с мягкой обивкой. Этот стул станет настоящим украшением вашего интерьера, сочетая в себе комфорт и стильный дизайн. Мягкая обивка обеспечивает максимальный комфорт, а современный дизайн добавляет нотку роскоши и уюта. Стул идеально подойдет для создания уютной и стильной атмосферы в вашем доме.",
          category: "chair",
          price: "3000.00",
        },
        {
          id: 2,
          title: "Стол",
          img: "stol.jpg",
          desc: "Представляем вашему вниманию стильный обеденный стол с элегантными стульями. Этот комплект мебели станет настоящим украшением вашего интерьера, сочетая в себе функциональность и современный дизайн. Стол выполнен из качественных материалов, а стулья имеют удобный и стильный дизайн. Комплект идеально подойдет для создания уютной и стильной атмосферы в вашем доме.",
          category: "table",
          price: "20000.00",
        },
        {
          id: 3,
          title: "Шкаф",
          img: "skaf.jpg",
          desc: "Представляем вашему вниманию элегантный шкаф с зеркальными дверцами и классическим дизайном. Этот шкаф станет настоящим украшением вашего интерьера, сочетая в себе функциональность и стиль. Зеркальные дверцы не только визуально увеличивают пространство, но и добавляют нотку роскоши и уюта. Шкаф идеально подойдет для создания уютной и стильной атмосферы в вашем доме.",
          category: "sofa",
          price: "50000.00",
        },
        {
          id: 4,
          title: "Кровать",
          img: "krovat.jpg",
          desc: "Представляем вашему вниманию элегантную кровать с мягкой обивкой и стильной спинкой с пуговицами. Эта кровать станет настоящим украшением вашей спальни, сочетая в себе комфорт и изысканный дизайн. Мягкая обивка обеспечивает максимальный комфорт, а стильная спинка с пуговицами добавляет нотку роскоши и уюта. Кровать идеально подойдет для создания уютной и стильной атмосферы в вашем доме.",
          category: "bed",
          price: "80000.00",
        }
      ],
      showfullitem: false,
      fullitem: {}
    };

    // Привязываем методы к компоненту
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onshowitem = this.onshowitem.bind(this);
  }

  // Метод добавления товара в заказ
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    });
    if (!isInArray)
      this.setState((prevState) => ({
        orders: [...prevState.orders, item],
      }));
  }

  // Рендер компонента
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onshowitem={this.onshowitem} onAdd={this.addToOrder} />

        {this.state.showfullitem && <ShowFullItem onAdd={this.addToOrder} onshowitem={this.onshowitem} item={this.state.fullitem} />}
        <Footer />
      </div>
    );
  }

  onshowitem(item) {
    this.setState({fullitem: item})
    this.setState({showfullitem: !this.state.showfullitem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter(order => order.id !== id)
    });
  }
}


export default App;