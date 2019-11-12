import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router ,Route} from 'react-router-dom'
import Formweb from './form'
import Statusweb from'./status'
import JSXweb from'./JSX'
import Fatherweb from'./props/father'
import Refsweb from './refs/refs'
import 'antd/dist/antd.css'



function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  function ListItemsarr(props){
      const numbers=props.numberss
      const lists = numbers.map(el=>{
    return    <li key={el.toString()}>{el}</li>
      })    
    return (<ul>{lists}</ul>);

  }

  function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
 class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((key) =>
  <li key={key}>{key}</li>
);
      return (
        <Router>
            <Route path="/form" component={Formweb}/>
            <Route exact path="/jsx" component={JSXweb}/>
            <Route exact path="/father" component={Fatherweb}/>
<Route exact path="/refs" component={Refsweb}></Route>
            <Route path='/status' component={Statusweb}></Route>
               {/* <div>
            <Blog  posts={posts} />
            {listItems}
           <ListItemsarr  numberss={[2,3,4,6,7]}/>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div> */}
        </Router>
     
      );
    }
  }
  
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
  );
serviceWorker.unregister();
