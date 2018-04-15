import React, { Component } from 'react';

import Order from '../Order';

import './Market.css';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {
  // state = {
  //   orders: []
  // }

  onCreateOrder = () => {
    const { createOrder } = this.props;

    createOrder(getNewOrder());
  }

  onMoveOrderToFarm = () => {
    const { orders, moveOrderToFarm } = this.props;
    // const order = { id: orders[orders.length - 1].id };
    const order = orders.slice(-1)[0];

    moveOrderToFarm(order);
  }

  render () {
    // console.log('Market', this.props);
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.onCreateOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={!orders.length}
          onClick={this.onMoveOrderToFarm}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(order =>
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Market;
