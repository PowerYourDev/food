import {useSelector} from "react-redux"
import RestrauntCard from "./RestaurantCard"
import { useDispatch } from "react-redux"
import {clearCart,removeItem} from "../redux/cartSlice"
const Cart=()=>{
    const dispatch=useDispatch()
    const data= useSelector((s)=>(s.cart.items))
    const clearCartHandler=()=>{
      dispatch(clearCart())
    }
    const removeItemHandler=(id)=>{
        dispatch(removeItem(id))
    }
return(
<>
 <button onClick={clearCartHandler}>clear</button>
       
{data.map((x)=> <div><RestrauntCard {...x} />
<button onClick={()=>removeItemHandler(x.name)}>remove</button>
</div>)}
    
</>


   
    
)
}

export default Cart;