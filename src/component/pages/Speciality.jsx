import React, { Component } from "react";
import { AddSpecialty } from "../modals/specialty/AddSpecialty";

export class Speciality extends Component{
    constructor(props){
        super(props);
        this.state={
            addSpecialtyModal: false,
            searchField: false,
            Specialities: []
        }
    }

    specialtyModal =()=>{
        this.setState({
            addSpecialtyModal: !this.state.addSpecialtyModal,
        })
    }

    componentDidMount(){
        fetch('http://localhost:3000/getspacialty')
        .then(response => response.json())
        .then((data) => this.setState({Specialities: data}))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.Specialities !== this.state.Specialities) {
            fetch('http://localhost:3000/getspacialty')
            .then(response => response.json())
            .then((data) => this.setState({Specialities: data}))
        }
      }


    render(){
        const {Specialities} = this.state;
        return(
            <div>
                {
                    this.state.addSpecialtyModal && (
                        <AddSpecialty  specialtyModal={this.specialtyModal}/>
                    )
                }
                <div className="flex justify-around mb-5">
                    <button onClick={this.specialtyModal}  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add  New Specialty
                    </button>
                    <button  onClick={this.toggleSearch}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Search For Specialty
                    </button>
                </div>
                <div>
                        
<div class=" overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Specialty name
                </th>
                <th scope="col" class="px-6 py-3">
                    Specialty  Code
                </th>
                <th scope="col" class="px-6 py-3">
                    Field Of stydy
                </th>
                <th scope="col" class="px-6 py-3">
                    Specialty desctiption
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            { Specialities.map(specialty =>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {specialty.specialtyName}
                </th>
                <td class="px-6 py-4">
                {specialty.specialtyCode}
                </td>
                <td class="px-6 py-4">
                {specialty.fieldName}
                </td>
                <td class="px-6 py-4">
                {specialty.speciatyDescription}                 
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="google.com" class="font-medium text-blue-600 dark:text-blue-500 hover:underline
                    edit_btn
                    
                    ">Edit</a>
                        <a href="google.com" class="font-medium text-blue-600 dark:text-blue-500 hover:underline delete_btn">Delete</a>
            </td>
            </tr>
            )}
        </tbody>
    </table>
</div>

                </div>
            </div>
        );
    }
}