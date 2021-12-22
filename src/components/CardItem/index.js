import './index.scss';
import { useHistory } from "react-router-dom";

const CardItem = ({item}) => {
    const baseImageUrl =  'https://image.tmdb.org/t/p/original';
    let history = useHistory();
    
    const showCardDetail = () => {
        history.push("/movie-detail/" + item.id);
    }
    return(
        
        <div className="image-card" style={{backgroundImage: `url(${baseImageUrl}${item.poster_path})`}} onClick={showCardDetail}> 
        </div>   
      
    )
}

export default CardItem;
