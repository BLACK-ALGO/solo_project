import React, { Component } from "react";

export class AddSpecialty extends Component{
    constructor(props){
        super(props);
        this.state={
            specialName: '',
            specialCode: '',
            fName:'',
            description: '',
            fields:[]
        }
    }

    setSname =(event)=>{
        this.setState({
            specialName: event.target.value
        })

    }
    setScode = (event)=>{
        this.setState({
            specialCode: event.target.value
        })
    }

    setFname=(event)=>{
        this.setState({
            fName: event.target.value
        })
    }

    setSdescription = (event) =>{
        this.setState({
            description: event.target.value
        })
    }
        addSpecialty = () =>{
            fetch('http://localhost:3000/addspecialty',{
                method:'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    specialName: this.state.specialName,
                    fieldName: this.state.fName,
                    specialCode: this.state.specialCode,
                    specialDescription: this.state.description
                })
            })

        }

        componentDidMount(){
            fetch('http://localhost:3000/getfield')
            .then(response => response.json())
            .then((data) =>this.setState({fields: data}))
            // console.log(this.state.fields[0]);
        }
    render(){
        const {fields} = this.state;
        return(
            <div>
                <div className="modal mar">
                <div className="overlay" onClick={this.props.specialtyModal}></div>
                <div className="modal-content">
                    <h2 className="student-heading">Add New Specialty</h2>
                    {/* form start */}
                    <div className="m-5 scrol-s-form">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="col-span-full">
                                      <label for="department_name" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Specialty Name</label>
                                      <div className="mt-2">
                                        <input type="text"
                                         name="department_name" 
                                        id="department_name" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={this.setSname}
                                        />
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="department_name" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Specialty Code</label>
                                      <div className="mt-2">
                                        <input type="text"
                                         name="department_name" 
                                        id="department_name" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={this.setScode}
                                        />
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="country" class="block text-sm font-medium  text-gray-900 left-aligment">Field Name</label>
                                      <div className="col-span-full">
                                        
                                        <select  onChange={this.setFname} id="country" name="country" autoComplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        {fields.map( field =>
                                          <option >{field.fieldName}</option>
                                        )}
                                          

                                          
                                        </select>
                                      </div>
                                    </div>

                                <div className="col-span-full">
                                      <label for="department-description" className="block text-sm font-medium left-aligment leading-6 text-gray-900">Name Description</label>
                                      <div className="mt-2">
                                        <textarea type="text" 
                                        name="department_description" 
                                        id="department_description" 
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={this.setSdescription}
                                        />
                                      </div>
                                </div>
                                
                            </div>
                        </div>
                            
                    </div>
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    onClick={this.addSpecialty}
                    >Save</button>

                    {/* End start */}


                    <button className="close-modal" onClick={this.props.specialtyModal}>Close</button>
                </div>

            </div>
            </div>
        )
    }
}