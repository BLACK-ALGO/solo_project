import React, { Component } from "react";

export class LecDash extends Component{
    render(){
        return(
            <section className=" ">
                <div className="m-3 text-xl text-gray-900 font-semibol ">
                <div className="top-bar ">
                    <div className="top-head">
                        Welcome Lectre Name
                    </div>
                    <div className="top-head">
                        Welcome To Agenla Management System
                    </div>

                    <div className="top-head">
                    <img src={require('../photos/user.png')} alt="no profile" className="imgs"/>
                    </div>
                </div>
                {/* breack */}
                <div>
                    <h1>List of Course</h1>
                    <div>

                    </div>
                </div>
                </div>
            </section>
        )
    }
}