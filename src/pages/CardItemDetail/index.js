import { useParams } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import menu from '../../assets/menu.svg';
import like from '../../assets/like.svg'
import bookmark from '../../assets/bookmark.svg'
import star from '../../assets/star.svg'
import point from '../../assets/point.png'
const CardItemDetail = () => {

    const { id } = useParams();
    const baseImageUrl =  'https://image.tmdb.org/t/p/original';
    const [movieImage,  setMovieImage] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f188aeb2c28b22be38a7bc4fe5fa8caf`)
        .then(response => response.json())
        .then(data => {
            showSelectedMovie(data)
        });
    }, [id]);

    const showSelectedMovie = (data) => {
        let allFetchData = JSON.parse(localStorage.getItem("fetchData"));
        let selectedMovie = allFetchData.filter(item => item.id === data.id)
        setMovieImage(selectedMovie[0])
    }
    return(
       <div>
           <div className="bar-wrapper">
                <div className="bar">
                    <div>Özet</div>
                    <div>Medya</div>
                    <div>Hayranlar</div>
                    <div>Paylaş</div>
                </div>
           </div> 
           { movieImage ? <section>
               <div className="movie-card" style={{backgroundImage: `url(${baseImageUrl}${movieImage.poster_path})`}}>
               </div>
               <div className="movie-info-wrapper">
                   <div className="movie-title">
                   {movieImage.title ? movieImage.title : movieImage.name}
                   </div>
                   <div>
                       ({movieImage.release_date ? movieImage.release_date : movieImage.first_air_date})
                   </div>
                   <div className="icon-layout">
                        <div className="point">
                             <img src={point} alt="" className="icon-image"/> <span>Üye Puanları</span>
                        </div>
                        <div className="icon-wrapper">
                        
                        <div className="icon">
                                <img src={menu} alt="" className="icon-image"/>
                        </div>
                        <div className="icon">
                        <img src={like} alt="" className="icon-image"/>
                        </div>
                        <div className="icon">
                        <img src={bookmark} alt="" className="icon-image"/>
                        </div>
                        <div className="icon">
                        <img src={star} alt="" className="icon-image"/>
                        </div>
                   </div>
                   </div> 
                   <div>
                       <h3>Özet</h3>
                       <div>{movieImage.overview}</div>
                   </div>
               </div>
           </section> : <div>The movie or tv series can't be found..</div> }
           
       </div>
    )
}

export default CardItemDetail;
