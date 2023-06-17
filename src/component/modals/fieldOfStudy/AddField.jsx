import React, { Component } from "react";

export class AddField extends Component{
    constructor(props){
        super(props);
        this.state={
            fieldName: '',
            fieldDescription: '',
            schoolName: '',
            schools :[]

        }
    }

    onFieldNameChange = (event) =>{
        this.setState({
                fieldName: event.target.value
        })
    }

    onFieldDescription = (event) =>{
        this.setState({
            fieldDescription : event.target.value
        })
    }
    onSchoolName = (event) =>{
        this.setState({
            schoolName: event.target.value
        })
    }

    onAddField = () =>{
        console.log(this.state.schoolName);
       
        fetch('http://localhost:3000/addfield',{
            method:'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                fieldName: this.state.fieldName,
                schoolName: this.state.schoolName,
                fieldDescription: this.state.fieldDescription
            })
        })
    }

    componentDidMount(){
        fetch('http://localhost:3000/getschool')
        .then( response => response.json())
        .then( (data) => this.setState({schools: data}) )
        console.log(this.state.schools);
        
       
    }

    render(){
     const  {schools} = this.state;

        return(
            <div>
                    <div className="modal mar">
                <div className="overlay" onClick={this.props.toggleFieldModal}></div>
                <div className="modal-content">
                    <h2 className="student-heading">Add New Field</h2>
                    {/* form start */}
                    <div className="m-5 scrol-s-form">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="col-span-full">
                                      <label for="department_name" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Field Name</label>
                                      <div className="mt-2">
                                        <input type="text"
                                         name="department_name" 
                                        id="department_name" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={this.onFieldNameChange}
                                        />
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="country" class="block text-sm font-medium  text-gray-900 left-aligment">Country</label>
                                      <div className="mt-2">
                                        
                                        <select  onChange={this.onSchoolName} id="country" name="country" autoComplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        {schools.map( school =>
                                          <option value={school.hName}>{school.hName}</option>
                                        )}
                                          <option >hName</option>

                                          
                                        </select>
                                      </div>
                                    </div>

                                <div className="col-span-full">
                                      <label for="department-description" className="block text-sm font-medium left-aligment leading-6 text-gray-900">Description</label>
                                      <div className="mt-2">
                                        <textarea type="text" 
                                        name="department_description" 
                                        id="department_description" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={this.onFieldDescription}
                                        />
                                      </div>
                                </div>
                                
                            </div>
                        </div>
                            
                    </div>
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    onClick={this.onAddField}
                    >Save</button>

                    {/* End start */}


                    <button className="close-modal" onClick={this.props.toggleFieldModal}>Close</button>
                </div>

            </div>

            </div>
        )
    }
}