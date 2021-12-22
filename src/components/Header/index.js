import logoImage from "../../assets/logo.svg";
import search from "../../assets/search-icon.svg";
import "./index.scss"
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();
    const returnToHome = () => {
        history.push("/");
    }
    return(
        <header>
            <nav className="navigation">
            <div className="logo" onClick={returnToHome}>
                <img src={logoImage} alt="logo"/>
            </div>
                <div>
                    Filmler
                </div>
                <div>
                    Diziler
                </div>
                <div>
                    Kişiler
                </div>
                <div>
                    Daha Fazla
                </div>
            </nav>
            <div className="left-side">
                <div>
                    +
                </div>
                <div>
                    TR
                </div>
                <div>
                   Giriş
                </div>
                <div>
                    TMDb'ye Katıl
                </div>
                <img className="search-icon" src={search} alt=""/>
            </div>
        </header>
    )
}
export default Header;
