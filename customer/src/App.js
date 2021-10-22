import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from "./containers/HomPage";
import { RoutePage } from './containers/RoutePage';

// css Import
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/css/base.css';
import './asset/css/main.css';
import { ProfileSetting } from './containers/Profile';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route path="/" exact component={HomePage} ></Route>
          <Route path="/ticket" exact component={RoutePage} ></Route>
         <Route path="/profile" component={ProfileSetting} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
