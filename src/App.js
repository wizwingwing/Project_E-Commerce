import Navbar from './Component/Navbar'
import Flashsale from './Component/Flashsale'
import New_Product from './Component/New_Product'
import Category from './Component/Category'
import All_product from './Component/All_product'
import Footer from './Component/Footer'
import Footer_Follow from './Component/Footer_Follow'




import './Content'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Test from './test';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Flashsale/>
        <New_Product/>
        <Category/>
        <All_product/>
        <Footer/>
        <Footer_Follow/>
      </div>
      {/* <Test /> */}
    </Router>
  );
}

export default App;
