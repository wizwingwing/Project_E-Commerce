import Navbar from './Component/Navbar'
import Flashsale from './Component/Flashsale'
import New_Product from './Component/New_Product'




import './Content'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Test from './test';

function App() {
  return (
    <Router>
      {/* <div>
        <Navbar/>
        <Flashsale/>
        <New_Product/>
      </div> */}
      <Test />
    </Router>
  );
}

export default App;
