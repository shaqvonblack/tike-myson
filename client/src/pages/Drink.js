import useDrinks from '../hooks/useDrinks'
import './Drink.css'
import { useParams } from "react-router-dom"

function Drink() {
    let { id } = useParams()
    const drink = useDrinks(id, 'drinkid')

    return (
      <>
        <h1>{drink?.name}</h1>
        <img src={drink.drinkThumb} alt={drink.name} className="drinkimage"></img>
      </>
    )
}
  
export default Drink;