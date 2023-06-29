import React, { Component } from "react";

export class AddDepartment extends Component{
    constructor(){
        super();
        this.state={
            level_name: "",
            level_description: "",

        }
    }

    OnSaveLevel = () =>{
        // console.log("the department name"+ this.state.department_name + "     " + "The description " + this.state.department_description);
        fetch('http://localhost:3000/addlevel',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                levelname: this.state.level_name,
                leveldescription: this.state.level_description
            })

        })
        .then((response) =>{
            console.log(response.statusText);
        })
    }
    
    OnLevelName = (event) =>{
        this.setState({level_name: event.target.value});
    }
    OnLevelDescription = (event) =>{
        this.setState({level_description: event.target.value});
    }


    render(){
        return(
            <div>
                <div className="modal mar">
                <div className="overlay" onClick={this.props.toggleDepartModal}></div>
                <div className="modal-content">
                    <h2 className="student-heading">Add New Level</h2>
                    {/* form start */}
                    <div className="m-5 scrol-s-form">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="col-span-full">
                                      <label for="department_name" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Level Of Education</label>
                                      <div className="mt-2">
                                        <input type="text"
                                         name="level_name" 
                                        id="level_name" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={this.OnLevelName}
                                        />
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="department-description" className="block text-sm font-medium left-aligment leading-6 text-gray-900">Description</label>
                                      <div className="mt-2">
                                        <textarea type="text" 
                                        name="level_description" 
                                        id="level_description" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={this.OnLevelDescription}
                                        />
                                      </div>
                                </div>
                                
                            </div>
                        </div>
                            
                    </div>
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    onClick={this.OnSaveLevel}
                    >Save</button>

                    {/* End start */}


                    <button className="close-modal" onClick={this.props.toggleDepartModal}>Close</button>
                </div>

            </div>

            </div>
        )
    }
}