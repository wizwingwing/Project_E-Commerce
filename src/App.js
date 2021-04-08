import Navbar from './Component/Navbar'
import Flashsale from './Component/Flashsale'
import Card_flashsale from './Component/Card_flashsale'



import './Content'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Flashsale/>
        <Card_flashsale/>
      </div>
    </Router>
  );
}

export default App;
