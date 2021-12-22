import './index.scss'
import { useState, useRef,useEffect } from 'react';
// import { setSearchedData } from '../utils/index';

const WelcomeSection = () => {

    const [searchedData, setSearchedData ] = useState([])
    const searchedWord =  useRef("");
    const maxSearchItemCount = -3;
    const [ isSearchInputClicked, setIsSearchInputClicked ] = useState(false);

    useEffect(() => {   
        getSearchData();
    }, [])

    const getSearchData = () => {
        const allSearchedData = JSON.parse(localStorage.getItem("searchedData"));
        if(allSearchedData && allSearchedData.length){
            setSearchedData(allSearchedData.slice(maxSearchItemCount));
        } 
        console.log("search", searchedData)
    }
    const handleSearch = () => {
        const allSearchedData = JSON.parse(localStorage.getItem("searchedData")) || [];
        localStorage.setItem("searchedData", JSON.stringify([...allSearchedData, searchedWord.current.value]))
        getSearchData();
        searchedWord.current.value = '';
        setIsSearchInputClicked(false);
    }    
    const handleSearchInputClick = () =>{
        setIsSearchInputClicked(true);
       
    }
    const handleSearchItemClick = (item) =>{
        searchedWord.current.value = item;
        setIsSearchInputClicked(false);
    }
    return(
        <section className='welcome-section'>
            <div className='welcome-wrapper'>
                <h2>Hoş Geldiniz.</h2>
                <h3>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h3>
            </div>

            <div className='search'>
                <input type="text" ref={searchedWord} placeholder="Film, dizi, kişi ara..." onClick={handleSearchInputClick}/>
                <input type="submit" value="Search" onClick={handleSearch} />        
            </div>
            {
                 (isSearchInputClicked && searchedData.length > 0) &&
                    <ul className='suggestion-list'>
                        {searchedData.map((item,index) =>
                            <li key={index} onClick={() =>handleSearchItemClick(item)}>
                                {item}
                            </li>
                        )
                        }
                    </ul>
            }
            
         
        </section>
    )
}

export default WelcomeSection;
