import logo from './logo.svg';
import './App.css';
import './component/Style/Student.css'
import './component/Style/modal.css';
import './component/Style/fielsofstudy.css';
import './component/Style/lecture.css';
import './component/Style/form_head.css';
import './component/Style/dashboard.css';
import './component/Style/color-bg.css';
import './component/Style/lect-display.css'
import Home from './component/Home';
import { Component } from 'react';
import { LandingPage } from './component/LandingPage';
import { LecDash } from './component/Lecture_Dashboard/LecDash';

 class App extends Component{
  constructor(){
    super();
    this.state ={
      route :'home',
      isSingIn: false
    }
  }

  onRouteChange = (route) =>{
    if(route === 'home'){
      this.setState({isSingIn: false})
    }else if(route === 'lecture'){
      this.setState({isSingIn: true})
    }
    this.setState({route: route})
  }


  render(){
    return (
      <div className="App bg-img">
        {
        this.state.route === 'home'
          ? <LandingPage onRouteChange={this.onRouteChange} /> 
          : (
            this.state.route === 'lecture'
            ?<LecDash />
            :<Home sSingIn={this.state.isSingIn} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  };
}

export default App;


