import React, { useState } from 'react'
import "./CartItem.css"
import { ADD_TO_CART, REMOVE_CART } from '../../context/action/actionType'
import { useDispatch, useSelector } from 'react-redux'
function Cart({karzinka}) {
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [address, setAddress] = useState("")
  const [desc, setDesc] = useState("")
  const dispatch = useDispatch()





  const addToCart = (item) => {
    let index = karzinka.findIndex(i=> i.id === item.id)
    if( index < 0 ){
      return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
    }
    let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
     
    dispatch( {type: ADD_TO_CART, payload: newCart})
  }

  const removeCart = (item) => {
    let index = karzinka.findIndex(i=> i.id === item.id)

    if( index < 0 ){
      return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
    }
    let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty - 1} : pro)
     
    dispatch( {type: ADD_TO_CART, payload: newCart})
  }
  const cart = useSelector(s => s.cart)

  const order = ()=>{
    console.log( { name, tel, address, desc, cart } );
  }

  
  return (
    <div className='cartt'>
        {/* <h2>Jami narxi: {karzinka.reduce((a, b) => a + (b.price * b.qty), 0).brm()} so'm</h2> */}
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Ism' />
        <br />
        <input value={tel} onChange={e => setTel(e.target.value)} type="text" placeholder='tel' />
        <br />
        <input value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder='address' />
        <br />
        <textarea value={desc} onChange={e => setDesc(e.target.value)} name="" placeholder='Qanday tovar kerakligi razmer...' id="" cols="30" rows="10"></textarea>
        <br />
        <button onClick={order}>Buyurtma berish</button>
        <div className='carts'>
          {
            karzinka.map((item, inx)=> <div key={inx} className="cart__item">
              <div className="cart__img">
                <img src={item?.urls[0]} width={100} alt="" />
              </div>
              <div className="cart__text">
                <p className='cart__name'>{item?.title}</p>
                {/* <p className='cart__price'>{item?.price.brm()} so'm</p> */}
              </div>
              <div className="cart__button">
                <button className='cart__minus' disabled={ item?.qty <= 1 } onClick={()=> removeCart(item)}>-</button>
                <span className='cart__number'>{item?.qty}</span>
                <button className='cart__plus' onClick={()=> addToCart(item)}>+</button>
                <button className='cart__delete' onClick={()=> dispatch({type: REMOVE_CART, payload: item.id})}>delete</button>
              </div>
            </div>)
          }
        </div>
    </div>
  )
}

export default Cart