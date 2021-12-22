
import './App.scss';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardDetail from './pages/CardItemDetail';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <div>
     <Router>
        <Switch>
          <MainLayout>
            <Route exact path="/">      
                <Home/>
            </Route>
            <Route path="/movie-detail/:id">            
                <CardDetail/>         
            </Route>
          </MainLayout>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
