import logoImage from "../../assets/logo.svg";
import search from "../../assets/search-icon.svg";

import "./index.scss"

const Header = () => {
    return(
        <header>
            <nav className="navigation">
            <div className="logo">
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
