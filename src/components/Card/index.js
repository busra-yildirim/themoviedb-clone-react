import './index.scss';
import CardItem from '../CardItem';
import { useState, useEffect } from 'react';
const Card = () => {

    const [ allFetchData, setAllFetchData ] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f188aeb2c28b22be38a7bc4fe5fa8caf&page=1')
        .then(response => response.json())
        .then(data => {
            setAllFetchData(data.results);
            console.log("card",data.results)
        });
    }, []);

    localStorage.setItem("fetchData", JSON.stringify(allFetchData));
    
    return(
        <div className="section">
            
            <h2>İzlemek Ücretsiz</h2>
            <div className="card-wrapper">
            {
                allFetchData.map(item => 
                    <CardItem key={item.id} item={item}/>
                )
            }
           </div>
        </div>
    )
}

export default Card;
