import React, { Component } from "react";

export class AddSchool extends Component{
    constructor(){
        super();
        this.state={
            schoolName:'',
            schoolDescription:''
        }
        

        
    }

    onSubmit = () =>{
        fetch('http://localhost:3000/addschool',{
            method:'post',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                schoolName: this.state.schoolName,
                schooolDescription: this.state.schoolDescription,
            }),
        }).then(
            
        )
        
    }

    onSchoolNameChange = (event) =>{
        this.setState({
            schoolName: event.target.value
        })
    }

    onSchoolDescriptionChange = (event) =>{
        this.setState({
            schoolDescription: event.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="modal mar">
                <div className="overlay" onClick={this.props.toggleSchoolModal}></div>
                <div className="modal-content">
                    <h2 className="student-heading">Add School Of Study</h2>
                    {/* form start */}
                    <div className="m-5 scrol-s-form">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="col-span-full">
                                      <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">School Name</label>
                                      <div className="mt-2">
                                        <input type="text" 
                                        name="school-name" 
                                        autoComplete="given-name" 
                                        onChange={this.onSchoolNameChange}
                                        id="school-name" 
                                        placeholder="School Of Engineering" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="first-name" className="block text-sm font-medium left-aligment leading-6 text-gray-900">Description</label>
                                      <div className="mt-2">
                                        <textarea type="text" 
                                        onChange={this.onSchoolDescriptionChange}
                                        name="school-description" 
                                        id="school-description" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>
                                
                            </div>
                        </div>
                            
                    </div>
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={this.onSubmit}>Save</button>

                    {/* End start */}


                    <button className="close-modal" onClick={this.props.toggleSchoolModal}>Close</button>
                </div>

            </div>

            </div>
                
        )
    }
}