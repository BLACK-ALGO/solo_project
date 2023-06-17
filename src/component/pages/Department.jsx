import React, { Component } from "react";
import { AddDepartment } from "../modals/department/AddDeparment";

export class Department extends Component{
    constructor(){
        super();
        this.state={
            modal:false,
            searchModal: false,
            levels:[]
        }
    }
    
    toggleSearchModal = () =>{
        this.setState({
           searchModal : !this.state.searchModal
        })
    }

    toggleDepartModal = () =>{
        this.setState({
            modal : !this.state.modal
        })
    }

    componentDidMount(){
        fetch('http://localhost:3000/getleevl')
        .then(response => response.json())
        .then((data) => this.setState({levels : data}))
    }

    render(){
        const {levels} = this.state;
        return(
            <div>

                {
                    this.state.modal && (
                        <AddDepartment  toggleDepartModal={this.toggleDepartModal}/>
                    )
                }
                <div className="flex justify-around">
                    <button onClick={this.toggleDepartModal}  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Level Of Study
                    </button>
                    <button  onClick={this.toggleSearch}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Search
                    </button>
                </div>
               <div className="scrol-div">
                <div className="mt-5">
                <div class=" overflow-x-auto shadow-md sm:rounded-lg ">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        
                                            <tr>
                                                <th>
                                                    Level Id
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Level Name
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Description
                                                </th>
                                                
                                            </tr>                                                

                                        </thead>
                                        <tbody >
                                        {levels.map(level =>(
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">                                          
                                           
                                                <th>
                                                    {level.levelId}
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    {level.levelName}
                                                    
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    {level.levelDescription}                                                    
                                                </th>
                                                
                                            </tr>
                                                ))}
                                                                                                                                       
                                            
                                        </tbody>
                                    </table>
                                </div>



                </div>
               </div>
            </div>
        );
    }
}