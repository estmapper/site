
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



import {Home} from './Home.js';
import {Users} from './Users.js';
function App() {
  return (
    <>
    <Router>
    <NaviBar/>
    <Switch>
      <Route   exact path="/" component={Home} />
      <Route  path="/users" component={Users} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
