import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Buttons({pizza}){
    // call dispatch to add the data to the store (checkoutreducer)
    //is it name or pizza.name? 
                                             // are these all the things we are sending?
    let [pizzaToAdd, setPizzaToAdd] = useState({name: '', price: 0 })

    let dispatch = useDispatch();

    const addPizzaToCheckout = (event)=> {
        event.preventDefault()
        //TODO dispatch here 
        dispatch ({
            type: 'SET_MENU_LIST',
            payload: pizza.name, 
        })
    }

    return(
       <>
        <div> 
            <form>
            <button className= "Buttons" type= "submit">
                                          ADD TO CART 
                </button>
               
                <button className= "Buttons" type= "submit"> 
                                        REMOVE FROM CART
                </button>
            </form> 
        </div>
        </>
    )
}
export default Buttons;

