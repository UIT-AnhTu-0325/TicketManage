import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from "./containers/HomPage";

// css Import
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/css/base.css';
import './asset/css/main.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route path="/" exact component={HomePage} ></Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
