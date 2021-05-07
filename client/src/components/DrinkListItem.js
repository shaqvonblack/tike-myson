import './DrinkListItem.css'

function DrinkListItem({ drink }) {
    return (
      <div className="drinklistitem">
        <img src={drink.drinkThumb} alt={drink.name} className="drinklistitem__thumb"></img>
        <div className="drinklistitem__content">
            <h2 className="drinklistitem__title">{drink.name}</h2>
            <h3>Category {drink.category}</h3>
            <h3>Glass {drink.glass}</h3>
        </div>
      </div>
    )
}
  
export default DrinkListItem;