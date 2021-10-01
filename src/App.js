import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import Catagories from './components/Categories/Catagories';
import NotFound from './components/NotFound/NotFound';
import MealDetail from './components/MealDetail/MealDetail';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetail></MealDetail>
          </Route>
          <Route path="/catagories">
            <Catagories></Catagories>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
