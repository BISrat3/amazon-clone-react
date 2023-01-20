import React,{useState, useEffect }from 'react'
import './Orders.css'
import { db } from './firebase'
import { useStateValue } from './StateProvider'
import Order from './Order'

function Orders() {
  const [orders, setOrders] = useState([])
  const [{basket, user}, dispatch ] = useStateValue()

  useEffect(()=>{
    if(user) {
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      // this gives you the row time snapshot from the database 
      .onSnapshot(snapshot => (
        // snaphot.doc is going to list or mapping to all order pages
        setOrders(snapshot.docs.map(doc =>({
        id: doc.id,
        data: doc.data()
        })))
      ))
    } else {
      setOrders([])
    }
  },[user])

  return (
    <div className='orders'>
        <h1>Orders</h1>
        <div className='orders_order'>
          {orders?.map(order => (
            <Order order={order}/>
          ))}
        </div>
    </div>
  )
}

export default Orders