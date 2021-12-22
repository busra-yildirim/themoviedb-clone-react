import './index.scss';
import CardItem from '../CardItem';
import { useState, useEffect, useRef } from 'react';
const Card = () => {

    const [ allFetchData, setAllFetchData ] = useState([]);
    const checkboxRef = useRef("")

    useEffect(()=>{
        const isFetchTv = false;
        getData(isFetchTv);
        
    }, []);

    localStorage.setItem("fetchData", JSON.stringify(allFetchData));
    const handleChange = () => {
        const isFetchTv =  checkboxRef.current.checked;
        getData(isFetchTv);
    }

    const getData = (isFetchTv) => {

        if(isFetchTv){
            fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=f188aeb2c28b22be38a7bc4fe5fa8caf&page=1')
            .then(response => response.json())
            .then(data => {
                setAllFetchData(data.results);
            });
        }else {
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f188aeb2c28b22be38a7bc4fe5fa8caf&page=1')
        .then(response => response.json())
        .then(data => {
            setAllFetchData(data.results);
        });
        }
    }
    return(
        <div className="section">
            <div className='wrapper'>
                <h2>İzlemek Ücretsiz</h2>
                <label className="switch">
                    <input type="checkbox" ref={checkboxRef} onChange={handleChange}/>
                    <span className="slider round">
                        <span>Filmler</span>
                        <span>TV</span>
                    </span>
                </label>
            </div>
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
