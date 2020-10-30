import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from './pages/Home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import CashFlowMaking from './pages/CashFlowMaking';
import CashFlowDaily from './pages/CashFlowDaily';
import BillsPaid from './pages/BillsPaid';
import DebtPayoff from './pages/DebtPayoff';
import SowReap from './pages/SowReap';
import Savings from './pages/Savings';
import Attitudes from './pages/Attitudes';
import Dreams from './pages/Dreams';
import MillionPlan from './pages/MillionPlan';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/CashFlowMaking">Determing Cash Flow</Link>
          </li>
          <li>
            <Link to="/CashFlowDaily">Daily/Weekly Cash Flow</Link>
          </li>
          <li>
            <Link to="/BillsPaid">Bill Payment</Link>
          </li>
          <li>
            <Link to="/DebtPayoff">Debt Payoff</Link>
          </li>
          <li>
            <Link to="/SowReap">Sowing and Reaping</Link>
          </li>
          <li>
            <Link to="/Savings">Savings</Link>
          </li>
          <li>
            <Link to="/Attitudes">Attitudes Toward Money</Link>
          </li>
          <li>
            <Link to="/Dreams">Dreams and Visions</Link>
          </li>
          <li>
            <Link to="/MillionPlan">Million Dollar Plan</Link>
          </li>
        </ul>
  
        <hr />

        <h1>FAITHFUL</h1>
  
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/CashFlowMaking" component={CashFlowMaking} />
        <Route path="/CashFlowDaily" component={CashFlowDaily} />
        <Route path="/BillsPaid" component={BillsPaid} />
        <Route path="/DebtPayoff" component={DebtPayoff} />
        <Route path="/SowReap" component={SowReap} />
        <Route path="/Savings" component={Savings} />
        <Route path="/Attitudes" component={Attitudes} />
        <Route path="/Dreams" component={Dreams} />
        <Route path="/MillionPlan" component={MillionPlan} />
       
      </div>
    </Router>
  );

ReactDOM.render(<App />, document.getElementById('root'));