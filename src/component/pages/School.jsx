import React, { Component } from "react";
import { AddSchool } from "../modals/school/AddSchool";

export class School extends Component{
    constructor(){
        super();
        this.state={
            modal:false,
            searchModal: false,
            schools: [],
            // laoding: true

        }

    }

    toggleSchoolModal = () =>{
        this.setState({
            modal : !this.state.modal
        })
    }

    toggleSearchModal = () =>{
        this.setState({
            searchModal : !this.state.searchModal,
        })
    }

    deleteSchool = async (schoolname) =>{
        try {
            await fetch(`http://localhost:3000/deleteschool/${schoolname}`,{
                method: 'DELETE'
            })
        } catch (error) {
            console.log({error, msg:'Unable to delete'})
        }

    }

     componentDidMount(){
        fetch('http://localhost:3000/getschool')
        .then( response => response.json())
        .then( (data) => this.setState({schools: data}) )
        console.log(this.state.schools[0]);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.schools !== this.state.schools) {
            fetch('http://localhost:3000/getschool')
            .then( response => response.json())
            .then( (data) => this.setState({schools: data}) )
        }
      }

    



    render(){
     const  {schools} = this.state;
        return(
            <div>
                {
                    this.state.modal && (
                        <AddSchool  toggleSchoolModal={this.toggleSchoolModal}/>
                    )
                }

                
                <div className="flex justify-around mb-5">
                    <button onClick={this.toggleSchoolModal}  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add  School Of Studies
                    </button>
                    <button  onClick={this.toggleSearch}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Search For School
                    </button>
                </div>
              
                <div className="scrol-div ">
                    
                                <div class=" overflow-x-auto shadow-md sm:rounded-lg ">
                                    {/* {if} */}
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    School Name
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Description
                                                </th>
                                                <th>Edith</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody >{schools.map(school =>
                                            <tr key={school.objectID} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {school.hName}
                                                </th>
                                                <td class="px-6 py-4">
                                                {school.hDescription}
                                                </td>
                                                
                                                <td class="px-6 py-4 text-right btn_flex">
                                                    <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline
                                                    edit_btn
                                                    
                                                    ">Edit</button>
                                                     <button onClick={()=>{this.deleteSchool(school.hName)}}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline delete_btn">Delete</button>
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