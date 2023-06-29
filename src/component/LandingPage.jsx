import React from "react";
import { Component } from "react";

export class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            selects: '',
            userEmail: '',
            userPassword:'',
            errmsg:''

        }
        this.userSelect = this.userSelect.bind(this);

    }

    UserEmail = (event) =>{
        this.setState({userEmail : event.target.value})

    }

    UserPassword = (event) =>{
        this.setState({userPassword: event.target.value});
    }

    onLogIn = () =>{
        fetch('http://localhost:3000/signin',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                useremail: this.state.userEmail,
                userpassword: this.state.userPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            data === 'success'?
                this.state.selects === 'home'
                ?this.props.onRouteChange('admin')
                : this.state.selects === 'lecture'
                ?this.props.onRouteChange('lecture')
                :this.props.onRouteChange('')
            :console.log("Wrong Credentials Check Your UserName/Password")
        })
    }

    userSelect(e) {
        console.log("Fruit Selected!!");
        console.log(this.state.selects);

        this.setState({ selects: e.target.value });

      }
    
    render(){
        return(
            <div>

                <div>
                <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p  className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={require('./photos/school-logo.png')} alt="logo" />
          Agenla System    
      </p>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                      <label for="email" className=" left-aligment block mb-2 text-sm font-medium text-gray-900 dark:text-white left-alingment">Your email</label>
                      <input type="email" 
                      name="email" 
                      id="email" 
                      onChange={this.UserEmail}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" className="left-aligment block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" 
                      name="password" 
                      id="password" 
                      onChange={this.UserPassword}
                      placeholder="••••••••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div>
                      <label for=" password" className="left-aligment block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select User Type</label>
                      <select  id="countries_disabled" 
                    value={this.state.selects} onChange={this.userSelect}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="home">Admin</option>
                        <option value="lecture">Lecture</option>
                        {/* <option value="hod">HOD</option> */}
                      </select>
                  </div>

                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="goog.come" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button onClick={this.onLogIn} 
                    type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Power BY Black-Algo 
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
                </div>
            </div>
        )
    }
}

