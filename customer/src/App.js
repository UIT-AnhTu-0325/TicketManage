import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./containers/HomPage";
// css Import
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/css/base.css";
import "./asset/css/main.css";
import { ProfileSetting } from "./containers/Profile";
import TicketPage from "./pages/TicketPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <div className="App ">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/ticket" exact component={TicketPage}></Route>
          <Route path="/payment" exact component={PaymentPage}></Route>
          <Route path="/profile" exact component={ProfileSetting}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
