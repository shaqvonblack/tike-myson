import { useState } from 'react'
import useDrinks from '../hooks/useDrinks'
import DrinkListItem from '../components/DrinkListItem'
import './DrinkList.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function DrinkList() {
    const [text, setText] = useState('')
    const drinks = useDrinks(text, 'drinkname')

    function handleChange(e) {
      setText(e.target.value);
    }

    return (
      <>
        <h1>HEADER</h1>
        <input onChange={handleChange}></input>
        <div className="listcontainer">
          {drinks === 'loading'
              ? <h2>Searching...</h2>
              : drinks?.length
              ? ( drinks.map(drink => <Link to={`/drink/${drink.id}`}><DrinkListItem drink={drink} key={drink.id} /></Link>) )
              : ( <h2>No drinks...</h2> )
          }
        </div>
      </>
    )
}
  
export default DrinkList;