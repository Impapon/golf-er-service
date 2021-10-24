import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home'
import Service from './component/Service/Service'
import Member from './component/Member/Member'
import About from './component/About/About'
import LoadTODO from './component/Member/LoadTODO';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/service">
          <Service/>
        </Route>
        <Route path="/member">
          <LoadTODO/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
