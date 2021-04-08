import logo from './logo.svg';
import './App.css';
//export default helps to use any name
import Greet from './components/Day1/Greet';
import Welcome from './components/Day1/Welcome';
import Hello from './components/Day2/Hello';
import Message from './components/Day3/Message';
import Counter from './components/Day3/Counter';
import UserGreeting from './components/Day2/UserGreeting';
import EventBind from './components/Day3/EventBind';
import ParentComponent from './components/Day16/ParentComponent';
import NameList from './components/Day4/NameList';
import Form from './components/Day5/Form';
import PostList from './components/Day6/PostList';
import PostForm from './components/Day6/PostForm';
import LifecycleA from './components/Day6/LifecycleA';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import About from './components/Day7/About';
import Shop from './components/Day7/Shop';
import Contact from './components/Day7/Contact';
import Customerslist from './components/Day8/Customerslist';
import EditUser from './components/Day9/EditUser';
import FragmentDemo from './components/Day9/FragmentDemo.js';
import Hero from './components/Day10/Hero';
import ErrorBoundary from './components/Day10/ErrorBoundary';
import HookCounter from './components/Day10/HookCounter';
import HookCounter2 from './components/Day10/HookCounter2';
import ParentComponent1 from './components/Day11/ParentComponent1';
import HookCounter3 from './components/Day10/HookCounter3';
import HookCounter4 from './components/Day10/HookCounter4';
import UserContext, { UserProvider } from './components/Day12/UserContext';
import PureComp from './components/Day11/PureComp';
import RegComp from './components/Day11/RegComp';
import PortalDemo from './components/Day13/PortalDemo';
import ComponentC from './components/Day12/ComponentC';
import ClickCounter from './components/Day14/ClickCounter';
import HoverCounter from './components/Day14/HoverCounter';
import ClickCounter2 from './components/Day15/ClickCounter2';
import HoverCounter2 from './components/Day15/HoverCounter2';
import User from './components/Day15/User';
import Counter1 from './components/Day15/Counter1';
import ClassCounterOne from './components/Day17/ClassCounterOne';
import HookCounterOne from './components/Day17/HookCounterOne';
import IntervalHookCounter from './components/Day17/IntervalHookCounter';
import DataFetching from './components/Day18/DataFetching';
import ForwardRefParentInput from './components/Day19/ForwardRefParentInput';
import FocusInput from './components/Day19/FocusInput';

function App() {
  return (    
    <div className="App">
      {/* <PostForm /> */}

      <ForwardRefParentInput />

      {/* <FocusInput /> */}
    </div>

    // <Router>
    // <div className="App">
    //   <nav>
    //     <ul className="topnav">
    //       <Link to="/">All Customers</Link>
    //       <Link to="/edit-customer">Edit Customer</Link>
    //       <Link to="/add-customer">Add Customer</Link>
    //       <Link to="/fragment">Fragment Demo</Link>
    //     </ul>
    //   </nav>
    //   <Switch>
    //     <Route path="/" exact component={Customerslist} />
    //     <Route path="/edit-customer/:id" component={EditUser} />
    //     <Route path="/add-customer" component={PostForm} />
    //     <Route path="/fragment" component={FragmentDemo} />
    //   </Switch>
    // </div>
    // </Router>

     /*{ <ErrorBoundary> 
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary> 
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary> 
        <Hero heroName="Joker" />
      </ErrorBoundary> }*/

      /* <HookCounter4 /> 
      <HookCounter/>
      <HookCounter2/>
      <HookCounter3/> */

      /* <RegComp name="Deepak"></RegComp>
      <PureComp name="Deepak"></PureComp> 
      <ParentComponent1/>
      <PortalDemo /> */

      /*
        <UserProvider value="Deepak">
        <ComponentC />
        </UserProvider>
      */

      /* <ClickCounter name="Deepak"></ClickCounter>
      <HoverCounter name="test"></HoverCounter> */

      /* <User render={(isLoggedIn) => isLoggedIn? 'Deepak': 'Guest!'}/> */

      /* 
        <Counter1
        render={(count, incrementCount)=> {
          return <ClickCounter2 count={count} incrementCount={incrementCount} />
      }} />
      
      <Counter1
        render={(count, incrementCount)=> {
          return <HoverCounter2 count={count} incrementCount={incrementCount} />
        }} />
      */

      /* <ClickCounter2 />
      <HoverCounter2 />
      <ParentComponent></ParentComponent> */

      //<ClassCounterOne></ClassCounterOne>
      //<HookCounterOne></HookCounterOne>

      //{/* <IntervalHookCounter></IntervalHookCounter> */}
      //<DataFetching />
  );
}

export default App;
