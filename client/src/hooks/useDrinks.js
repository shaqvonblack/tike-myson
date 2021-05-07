import { useEffect, useState} from 'react'
import axios from 'axios'

function useDrinks(searchText, searchType) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setData('loading')
        try {
            const result = await axios(`http://localhost:3001/drink/${searchType}?text=${searchText}`)
            setData(result.data)
        } catch (error) {
            console.log(error)
        }
    }
 
    if(searchText?.length > 2)
        fetchData();
  }, [searchText])

  return data;
}

export default useDrinks